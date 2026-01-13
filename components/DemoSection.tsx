
import React, { useState, useRef, useEffect } from 'react';
import { startVapiCall } from '../services/vapiService';
import { BusinessConfig } from '../types';

interface DemoSectionProps {
  config: BusinessConfig;
}

const DemoSection: React.FC<DemoSectionProps> = ({ config }) => {
  const [isActive, setIsActive] = useState(false);
  const [history, setHistory] = useState<{ text: string; isUser: boolean }[]>([]);
  const [currentTranscription, setCurrentTranscription] = useState<{ text: string; isUser: boolean | null }>({ text: '', isUser: null });
  const [error, setError] = useState<string | null>(null);
  const sessionRef = useRef<{ stop: () => Promise<void> } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, currentTranscription]);

  const handleToggleCall = async () => {
    if (isActive) {
      await sessionRef.current?.stop();
      sessionRef.current = null;
      setIsActive(false);
      if (currentTranscription.text) {
        setHistory(prev => [...prev, { text: currentTranscription.text, isUser: currentTranscription.isUser! }]);
        setCurrentTranscription({ text: '', isUser: null });
      }
      return;
    }

    try {
      setError(null);
      setCurrentTranscription({ text: "Initializing Secure Connection...", isUser: false });
      
      const session = await startVapiCall({
        config: config,
        onTranscript: (text, isUser) => {
          setCurrentTranscription(prev => {
            if (prev.isUser !== isUser && prev.text && prev.isUser !== null) {
              setHistory(h => [...h, { text: prev.text, isUser: prev.isUser! }]);
              return { text: text, isUser };
            }
            return { text: prev.text + (prev.text ? ' ' : '') + text, isUser };
          });
        },
        onCallStart: () => {
          setIsActive(true);
          setCurrentTranscription({ text: '', isUser: null });
        },
        onCallEnd: () => {
          setIsActive(false);
          if (currentTranscription.text) {
            setHistory(prev => [...prev, { text: currentTranscription.text, isUser: currentTranscription.isUser! }]);
            setCurrentTranscription({ text: '', isUser: null });
          }
        },
        onError: (err) => {
          console.error(err);
          const errorMessage = err?.message || String(err);
          if (errorMessage.includes('VAPI') || errorMessage.includes('API')) {
            setError("AUTHENTICATION_FAILED: Check Vapi API key configuration.");
          } else if (errorMessage.includes('microphone') || errorMessage.includes('Microphone')) {
            setError("HARDWARE_ERROR: Microphone access required.");
          } else {
            setError(`SYSTEM_ERROR: ${errorMessage}`);
          }
          setIsActive(false);
        }
      });
      sessionRef.current = session;
    } catch (err: any) {
      console.error(err);
      const errorMessage = err?.message || String(err);
      if (errorMessage.includes('VAPI') || errorMessage.includes('API')) {
        setError("CONFIGURATION_ERROR: Vapi API key or Assistant ID not configured.");
      } else if (errorMessage.includes('microphone') || errorMessage.includes('Microphone')) {
        setError("HARDWARE_ERROR: Microphone access required.");
      } else {
        setError(`INITIALIZATION_ERROR: ${errorMessage}`);
      }
    }
  };

  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto pb-20 animate-fadeIn">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black mb-4 tracking-tighter uppercase">Simulation <span className="gradient-text">Lab</span></h1>
        <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">
          Profile: {config.name} // Tone: {config.tone} // Voice: {config.voice}
        </p>
      </div>

      <div className="bg-zinc-950 rounded-2xl overflow-hidden border border-white/10 flex flex-col h-[700px] shadow-[0_0_80px_rgba(255,255,255,0.02)]">
        {/* Call Header */}
        <div className="p-10 border-b border-white/5 flex items-center justify-between bg-black">
          <div className="flex items-center gap-6">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-700 ${isActive ? 'bg-white shadow-[0_0_40px_rgba(255,255,255,0.2)]' : 'bg-zinc-900 border border-white/5'}`}>
              {isActive ? (
                <div className="flex items-end gap-1.5 h-8">
                  {[0.5, 0.9, 0.4, 1.0, 0.7].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 bg-black rounded-full animate-bounce" 
                      style={{ height: `${h * 100}%`, animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              ) : (
                <div className="pulse">
                   <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </div>
              )}
            </div>
            <div>
              <h3 className="font-black text-2xl uppercase tracking-tighter">{config.name}</h3>
              <div className="mt-1">
                {isActive ? (
                  <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    ENCRYPTED VOICE UPLINK
                  </span>
                ) : (
                  <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">Ready for signal</span>
                )}
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleToggleCall}
            className={`px-10 py-4 rounded font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 ${
              isActive ? 'bg-zinc-100 text-black hover:bg-white' : 'bg-zinc-800 text-white hover:bg-zinc-700'
            }`}
          >
            {isActive ? 'Disconnect' : 'Start Transmission'}
          </button>
        </div>

        {/* Transcript Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-8 bg-black/40 scroll-smooth">
          {error && (
            <div className="p-6 bg-white/5 border border-white/10 text-white font-mono text-[10px] uppercase tracking-widest rounded text-center">
              SYSTEM_FAULT: {error}
            </div>
          )}
          
          {history.length === 0 && !currentTranscription.text && !error && (
            <div className="h-full flex flex-col items-center justify-center text-zinc-700 text-center px-20">
              <h4 className="text-zinc-500 font-black uppercase tracking-[0.5em] text-xs mb-4">Awaiting Signal</h4>
              <p className="text-[10px] font-bold leading-relaxed uppercase tracking-widest opacity-50">
                FrontDesk Core is listening. Start the call to initiate dialogue simulation with your custom parameters.
              </p>
            </div>
          )}

          {history.map((t, i) => (
            <div key={i} className={`flex ${t.isUser ? 'justify-end' : 'justify-start'} animate-slideUp`}>
              <div className={`max-w-[70%] px-6 py-4 rounded text-sm font-medium tracking-tight ${
                t.isUser 
                  ? 'bg-zinc-900 text-zinc-100 border border-white/10' 
                  : 'bg-white text-black'
              }`}>
                {t.text}
              </div>
            </div>
          ))}

          {currentTranscription.text && (
            <div className={`flex ${currentTranscription.isUser ? 'justify-end' : 'justify-start'} opacity-60`}>
              <div className={`max-w-[70%] px-6 py-4 rounded text-sm font-medium border border-white/5 ${
                currentTranscription.isUser 
                  ? 'bg-zinc-900 text-zinc-400' 
                  : 'bg-zinc-100 text-zinc-800'
              }`}>
                {currentTranscription.text}
                <span className="inline-block w-2 h-4 ml-2 bg-white animate-pulse align-middle"></span>
              </div>
            </div>
          )}
        </div>

        {/* Console Status */}
        <div className="px-10 py-5 bg-black border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-zinc-600 uppercase tracking-[0.4em]">
          <span>Vapi_AI_v1.0</span>
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white"></span> Low_Latency_Audio</span>
            <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white"></span> Secure_Stream</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSection;
