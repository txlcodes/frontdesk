import Vapi from '@vapi-ai/web';
import { BusinessConfig } from '../types';

export interface VapiCallOptions {
  config: BusinessConfig;
  onTranscript?: (text: string, isUser: boolean) => void;
  onCallStart?: () => void;
  onCallEnd?: () => void;
  onError?: (error: any) => void;
}

export interface VapiCallSession {
  stop: () => Promise<void>;
  isActive: boolean;
}

// Map business voice names to Vapi voice IDs (11labs voice IDs)
const VOICE_MAP: Record<string, string> = {
  'Zephyr': 'pNInz6obpgDQGcFmaJgB', // Adam
  'Puck': 'EXAVITQu4vr4xnSDxMaL', // Bella
  'Charon': 'ErXwobaYiN019PkySvjV', // Antoni
  'Kore': 'MF3mGyEYCl7XYWbV9V6O', // Elli
  'Fenrir': 'VR6AewLTigWG4xSOukaG', // Arnold
};

// Map tone to Vapi model settings
const TONE_MAP: Record<string, any> = {
  'professional': {
    temperature: 0.7,
    model: 'gpt-4o-mini',
  },
  'friendly': {
    temperature: 0.8,
    model: 'gpt-4o-mini',
  },
  'enthusiastic': {
    temperature: 0.9,
    model: 'gpt-4o-mini',
  },
};

/**
 * Creates an assistant dynamically via Vapi API
 * Note: This requires a server-side API key (not public key)
 * For production, create assistants server-side and return assistant IDs
 */
async function createAssistant(config: BusinessConfig, serverApiKey?: string): Promise<string> {
  if (!serverApiKey) {
    // If no server API key, use a default assistant ID from env
    const defaultAssistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;
    if (defaultAssistantId) {
      return defaultAssistantId;
    }
    throw new Error('VAPI configuration required. Please set VITE_VAPI_ASSISTANT_ID or configure server-side assistant creation.');
  }

  const systemMessage = `${config.instructions}\n\nAlways respond in a ${config.tone} tone. Your business name is ${config.name}.`;
  const voiceId = VOICE_MAP[config.voice] || VOICE_MAP['Kore'];
  const toneSettings = TONE_MAP[config.tone] || TONE_MAP['professional'];

  try {
    const response = await fetch('https://api.vapi.ai/assistant', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${serverApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${config.name} - ${config.industry}`,
        model: {
          provider: 'openai',
          model: toneSettings.model,
          temperature: toneSettings.temperature,
          messages: [
            {
              role: 'system',
              content: systemMessage,
            },
          ],
        },
        voice: {
          provider: '11labs',
          voiceId: voiceId,
        },
        firstMessage: `Hello! This is ${config.name}. How can I help you today?`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create assistant: ${response.statusText}`);
    }

    const assistant = await response.json();
    return assistant.id;
  } catch (error) {
    console.error('Error creating assistant:', error);
    throw error;
  }
}

export async function startVapiCall(options: VapiCallOptions): Promise<VapiCallSession> {
  const publicApiKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
  const serverApiKey = import.meta.env.VITE_VAPI_SERVER_KEY;
  
  if (!publicApiKey) {
    throw new Error('VAPI_PUBLIC_KEY is not configured. Please set VITE_VAPI_PUBLIC_KEY in your environment variables.');
  }

  const vapi = new Vapi(publicApiKey);

  // Build system message from config
  const systemMessage = `${options.config.instructions}\n\nAlways respond in a ${options.config.tone} tone. Your business name is ${options.config.name}.`;

  // Get voice ID from mapping
  const voiceId = VOICE_MAP[options.config.voice] || VOICE_MAP['Kore'];
  const toneSettings = TONE_MAP[options.config.tone] || TONE_MAP['professional'];

  let isActive = false;
  let assistantId: string;

  try {
    // Try to get or create assistant ID
    const envAssistantId = import.meta.env.VITE_VAPI_ASSISTANT_ID;
    
    if (envAssistantId) {
      assistantId = envAssistantId;
    } else if (serverApiKey) {
      // Create assistant dynamically
      assistantId = await createAssistant(options.config, serverApiKey);
    } else {
      throw new Error('VAPI_ASSISTANT_ID or VITE_VAPI_SERVER_KEY must be configured. Please set one of these in your environment variables.');
    }

    // Set up event listeners
    vapi.on('call-start', () => {
      isActive = true;
      options.onCallStart?.();
    });

    vapi.on('call-end', () => {
      isActive = false;
      options.onCallEnd?.();
    });

    vapi.on('message', (message: any) => {
      if (message.type === 'transcript' && message.transcript) {
        const isUser = message.role === 'user';
        options.onTranscript?.(message.transcript, isUser);
      }
    });

    vapi.on('error', (error: any) => {
      console.error('Vapi error:', error);
      options.onError?.(error);
    });

    // Start the call with the assistant
    vapi.start(assistantId);

    return {
      stop: async () => {
        await vapi.stop();
        isActive = false;
      },
      isActive,
    };
  } catch (error) {
    console.error('Error starting Vapi call:', error);
    options.onError?.(error);
    throw error;
  }
}

