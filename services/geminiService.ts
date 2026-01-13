
import { GoogleGenAI, LiveServerMessage, Modality, Blob } from '@google/genai';

export function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function createPcmBlob(data: Float32Array): Blob {
  const l = data.length;
  const int16 = new Int16Array(l);
  for (let i = 0; i < l; i++) {
    int16[i] = data[i] * 32768;
  }
  return {
    data: encode(new Uint8Array(int16.buffer)),
    mimeType: 'audio/pcm;rate=16000',
  };
}

export interface LiveSessionOptions {
  systemInstruction: string;
  voiceName: string;
  onTranscription?: (text: string, isUser: boolean) => void;
  onTurnComplete?: () => void;
  onClose?: () => void;
  onError?: (err: any) => void;
}

export async function startLiveSession(options: LiveSessionOptions) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  let nextStartTime = 0;
  const inputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
  const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  const outputNode = outputAudioContext.createGain();
  outputNode.connect(outputAudioContext.destination);
  
  const sources = new Set<AudioBufferSourceNode>();
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  const sessionPromise = ai.live.connect({
    model: 'gemini-2.5-flash-native-audio-preview-12-2025',
    callbacks: {
      onopen: () => {
        const source = inputAudioContext.createMediaStreamSource(stream);
        const scriptProcessor = inputAudioContext.createScriptProcessor(4096, 1, 1);
        scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
          const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
          const pcmBlob = createPcmBlob(inputData);
          sessionPromise.then((session) => {
            session.sendRealtimeInput({ media: pcmBlob });
          });
        };
        source.connect(scriptProcessor);
        scriptProcessor.connect(inputAudioContext.destination);
      },
      onmessage: async (message: LiveServerMessage) => {
        // Handle Audio
        const base64EncodedAudioString = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
        if (base64EncodedAudioString) {
          nextStartTime = Math.max(nextStartTime, outputAudioContext.currentTime);
          const audioBuffer = await decodeAudioData(
            decode(base64EncodedAudioString),
            outputAudioContext,
            24000,
            1,
          );
          const source = outputAudioContext.createBufferSource();
          source.buffer = audioBuffer;
          source.connect(outputNode);
          source.addEventListener('ended', () => {
            sources.delete(source);
          });
          source.start(nextStartTime);
          nextStartTime = nextStartTime + audioBuffer.duration;
          sources.add(source);
        }

        // Handle Transcriptions
        if (message.serverContent?.outputTranscription) {
          options.onTranscription?.(message.serverContent.outputTranscription.text, false);
        } else if (message.serverContent?.inputTranscription) {
          options.onTranscription?.(message.serverContent.inputTranscription.text, true);
        }

        if (message.serverContent?.turnComplete) {
          options.onTurnComplete?.();
        }

        // Handle Interrupts
        if (message.serverContent?.interrupted) {
          for (const source of sources.values()) {
            source.stop();
            sources.delete(source);
          }
          nextStartTime = 0;
        }
      },
      onerror: (e) => options.onError?.(e),
      onclose: () => options.onClose?.(),
    },
    config: {
      responseModalities: [Modality.AUDIO],
      outputAudioTranscription: {},
      inputAudioTranscription: {},
      speechConfig: {
        voiceConfig: { prebuiltVoiceConfig: { voiceName: options.voiceName } },
      },
      systemInstruction: options.systemInstruction,
    },
  });

  return {
    stop: async () => {
      const session = await sessionPromise;
      session.close();
      stream.getTracks().forEach(track => track.stop());
      await inputAudioContext.close();
      await outputAudioContext.close();
    }
  };
}
