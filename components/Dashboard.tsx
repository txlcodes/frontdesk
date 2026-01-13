
import React from 'react';
import { MOCK_CALL_LOGS } from '../constants';
import { BusinessConfig } from '../types';

interface DashboardProps {
  config: BusinessConfig;
  setConfig: (config: BusinessConfig) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ config, setConfig }) => {
  return (
    <div className="pt-32 px-6 pb-20 max-w-7xl mx-auto animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">Command</h1>
          <p className="text-zinc-500 font-bold text-xs uppercase tracking-[0.3em] mt-2">Environment Control Panel</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">Operations: Stable</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Settings Column */}
        <div className="lg:col-span-4 space-y-8">
          <div className="p-10 bg-zinc-950 border border-white/10 rounded-2xl">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 mb-10 flex items-center gap-3">
              Core Parameters
            </h2>
            
            <div className="space-y-8">
              <div>
                <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-3">Identity</label>
                <input 
                  type="text" 
                  value={config.name}
                  onChange={(e) => setConfig({...config, name: e.target.value})}
                  className="w-full bg-black border-b border-white/10 px-0 py-3 focus:outline-none focus:border-white transition-all text-sm font-bold placeholder-zinc-800"
                  placeholder="Business Name"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-3">Industry Vertical</label>
                <select 
                  value={config.industry}
                  onChange={(e) => setConfig({...config, industry: e.target.value})}
                  className="w-full bg-black border-b border-white/10 px-0 py-3 focus:outline-none focus:border-white transition-all text-sm font-bold appearance-none uppercase tracking-tighter"
                >
                  <option value="Healthcare">Healthcare / Dental</option>
                  <option value="Legal">Legal Services</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Home Services">Home Services (HVAC/Plumbing)</option>
                  <option value="Finance">Financial Services</option>
                  <option value="Hospitality">Hospitality / Events</option>
                  <option value="E-commerce">Direct-to-Consumer</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-3">Profile</label>
                  <select 
                    value={config.tone}
                    onChange={(e) => setConfig({...config, tone: e.target.value as any})}
                    className="w-full bg-black border-b border-white/10 px-0 py-3 focus:outline-none focus:border-white transition-all text-sm font-bold appearance-none uppercase tracking-tighter"
                  >
                    <option value="professional">Professional</option>
                    <option value="friendly">Friendly</option>
                    <option value="enthusiastic">Enthusiastic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-3">Voice</label>
                  <select 
                    value={config.voice}
                    onChange={(e) => setConfig({...config, voice: e.target.value as any})}
                    className="w-full bg-black border-b border-white/10 px-0 py-3 focus:outline-none focus:border-white transition-all text-sm font-bold appearance-none uppercase tracking-tighter"
                  >
                    <option value="Kore">Neutral</option>
                    <option value="Zephyr">Soft</option>
                    <option value="Puck">Cheerful</option>
                    <option value="Charon">Deep</option>
                    <option value="Fenrir">Assertive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-3">Scheduling & Knowledge</label>
                <textarea 
                  rows={5}
                  value={config.instructions}
                  onChange={(e) => setConfig({...config, instructions: e.target.value})}
                  className="w-full bg-black border border-white/5 rounded-lg p-4 focus:outline-none focus:border-white/30 transition-all text-xs font-medium leading-relaxed text-zinc-400"
                  placeholder="Define how to handle intake and appointments..."
                />
              </div>

              <button className="w-full py-5 bg-white text-black rounded font-black text-[11px] uppercase tracking-[0.3em] hover:invert transition-all duration-500">
                Commit System Update
              </button>
            </div>
          </div>

          {/* Efficiency Metric */}
          <div className="p-10 bg-white text-black rounded-2xl shadow-2xl">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-zinc-500">System Performance</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest">Call Capture Rate</span>
                  <span className="text-xl font-black">100%</span>
                </div>
                <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                   <div className="w-[100%] h-full bg-black"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest">Auto-Booked</span>
                  <span className="text-xl font-black">42</span>
                </div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">Appointments scheduled this month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Logs Column */}
        <div className="lg:col-span-8 space-y-8">
          <div className="p-10 bg-zinc-950 border border-white/10 rounded-2xl h-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500">Intake Telemetry</h2>
              <div className="flex gap-4">
                {['Live Feed', 'Appointments', 'History'].map(tab => (
                  <button key={tab} className={`text-[10px] font-black uppercase tracking-widest transition ${tab === 'Live Feed' ? 'text-white' : 'text-zinc-700 hover:text-zinc-500'}`}>
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {MOCK_CALL_LOGS.map(log => (
                <div key={log.id} className="p-8 bg-black border border-white/5 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-zinc-900 border border-white/10 flex items-center justify-center font-black text-white text-lg">
                        {log.customerName.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-black text-lg uppercase tracking-tight">{log.customerName}</h4>
                        <div className="flex items-center gap-4 mt-1 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                          <span>{log.timestamp}</span>
                          <span className="w-1 h-1 rounded-full bg-zinc-800"></span>
                          <span>{log.duration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1.5 border border-white/10 rounded text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
                        {log.sentiment}
                      </div>
                      <div className="px-3 py-1.5 bg-white text-black rounded text-[9px] font-black uppercase tracking-[0.2em]">
                        {log.type}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed mb-6 md:pl-20">
                    {log.summary}
                  </p>
                  <div className="flex items-center gap-8 md:pl-20">
                    <button className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      View Transcript
                    </button>
                    <button className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Listen Playback
                    </button>
                    {log.type === 'appointment' && (
                       <span className="ml-auto text-[9px] font-black text-white bg-zinc-800 px-2 py-1 uppercase tracking-tighter rounded">Added to Calendar</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
