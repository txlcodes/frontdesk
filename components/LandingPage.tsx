
import React from 'react';
import { Page } from '../types';
import { FEATURES } from '../constants';
import Logo from './Logo';

interface LandingPageProps {
  setCurrentPage: (page: Page) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="overflow-hidden bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] animate-float"></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[150px] animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/3 rounded-full blur-[100px] animate-pulse-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-fadeIn hover-glow hover-scale">
            Universal Voice AI for Every Industry
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 animate-slideUp leading-[0.9]">
            NEVER MISS<br />
            <span className="gradient-animated">ANOTHER CALL.</span>
          </h1>
          
          <p className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg font-medium animate-slideUp leading-relaxed" style={{ animationDelay: '0.2s' }}>
            FrontDesk is the intelligent voice receptionist for Law, HVAC, Real Estate, and beyond. We handle your leads, answer FAQs, and book appointments 24/7 without a second of downtime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => setCurrentPage(Page.DASHBOARD)}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded font-black text-sm uppercase tracking-widest hover-lift hover-glow transition-all duration-300 animate-bounce-slow"
            >
              Get Started
            </button>
            <button 
              onClick={() => setCurrentPage(Page.DASHBOARD)}
              className="w-full sm:w-auto px-10 py-5 border border-white/20 hover:bg-white/10 rounded font-black text-sm uppercase tracking-widest hover-lift transition-all"
            >
              Configure Yours
            </button>
          </div>
        </div>

      </section>

      {/* Appointment Focus Section */}
      <section className="py-24 px-6 bg-zinc-950/50 relative overflow-hidden">
        <div className="absolute inset-0 shimmer-effect opacity-20"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="animate-slideLeft">
            <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em] inline-block animate-fadeIn">Seamless Integration</span>
            <h2 className="text-4xl font-black tracking-tight mt-4 mb-6 uppercase leading-tight animate-slideUp" style={{ animationDelay: '0.1s' }}>Autonomous<br />Scheduling.</h2>
            <p className="text-zinc-400 font-medium mb-8 leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
              No more back-and-forth. FrontDesk AI syncs directly with your calendar. When a customer calls, it finds an open slot, confirms their details, and adds it to your schedule automatically.
            </p>
            <ul className="space-y-4">
              {['Syncs with Google & Outlook', 'Handles cancellations & rescheduling', 'Instant SMS confirmations'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest animate-slideLeft hover-scale" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <svg className="w-5 h-5 text-white animate-bounce-slow" style={{ animationDelay: `${i * 0.2}s` }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 border border-white/10 rounded-3xl bg-black shadow-2xl hover-lift hover-glow animate-slideRight animate-scaleIn">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500">Upcoming Appointments</h3>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse animate-glow"></div>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Marcus Chen', time: 'Today at 2:00 PM', type: 'Consultation' },
                { name: 'Elena Rodriguez', time: 'Tomorrow at 9:30 AM', type: 'Intake' },
                { name: 'James Wilson', time: 'Wed at 4:15 PM', type: 'Meeting' }
              ].map((apt, i) => (
                <div key={i} className="p-4 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-between hover-lift hover-scale transition-all animate-slideUp" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                  <div>
                    <div className="text-sm font-bold">{apt.name}</div>
                    <div className="text-[10px] text-zinc-500 font-mono mt-1">{apt.time}</div>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-2 py-1 rounded hover-glow">{apt.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black tracking-tight mb-4 uppercase">Any Business.<br />Any Scale.</h2>
              <p className="text-zinc-500 font-medium">From solo practitioners to nationwide franchises, FrontDesk AI scales your capacity instantly.</p>
            </div>
            <div className="h-px bg-white/10 flex-1 hidden md:block mb-4 mx-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="p-12 bg-black hover:bg-zinc-950 transition-all duration-500 group hover-lift hover-glow animate-scaleIn" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="w-12 h-12 rounded-lg bg-white text-black flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float" style={{ animationDelay: `${idx * 0.2}s` }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight group-hover:scale-105 transition-transform">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em]">Pricing</span>
            <h2 className="text-5xl font-black tracking-tighter mt-4 mb-6 uppercase">Simple, Transparent Pricing</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto font-medium">
              Choose the plan that fits your practice. All plans include 24/7 AI receptionist service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-zinc-950 border-2 border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all hover-lift hover-glow animate-scaleIn">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-4">
                  STARTER
                </div>
                <h3 className="text-sm font-black uppercase mb-3">After-Hours Call Coverage</h3>
                <p className="text-xs text-zinc-400 mb-4">Best for small clinics / testing AI</p>
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">One-Time Setup</span>
                    <div className="text-2xl font-black">$1,250</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Monthly</span>
                    <div className="text-3xl font-black">$900</div>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 font-medium mb-4">
                  Stops losing patients after clinic hours and captures missed opportunities automatically.
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3">Includes</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>AI answers calls after hours only</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>Missed-call SMS auto text-back</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>Lead capture (name, phone, reason)</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>CRM access (view leads & calls)</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>Basic monthly reporting</span>
                  </li>
                </ul>
                <ul className="space-y-2 border-t border-white/5 pt-4">
                  <li className="flex items-start gap-2 text-xs text-zinc-600">
                    <span className="text-zinc-600 mt-0.5">✗</span>
                    <span>No appointment booking</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-600">
                    <span className="text-zinc-600 mt-0.5">✗</span>
                    <span>No calendar integration</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-600">
                    <span className="text-zinc-600 mt-0.5">✗</span>
                    <span>No overflow or daytime backup</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-6 border-t border-white/5">
                <p className="text-[9px] text-zinc-500 mb-4 italic">Low-risk entry plan. Easy upsell to Growth.</p>
                <button 
                  onClick={() => setCurrentPage(Page.DASHBOARD)}
                  className="w-full px-6 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded font-black text-xs uppercase tracking-widest transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Growth Plan - Most Popular */}
            <div className="bg-zinc-950 border-2 border-white/20 rounded-2xl p-8 relative hover:scale-105 transition-all hover-lift hover-glow animate-scaleIn" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-bounce-slow">
                <span className="px-4 py-1 bg-white text-black rounded-full text-[9px] font-black uppercase tracking-widest border-2 border-black animate-glow">
                  ⭐ MOST POPULAR
                </span>
              </div>
              
              <div className="mb-6 mt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest mb-4 text-zinc-400">
                  GROWTH
                </div>
                <h3 className="text-sm font-black uppercase mb-3 text-white">Core Offer</h3>
                <p className="text-xs text-zinc-400 mb-4">For clinics that want more booked appointments</p>
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">One-Time Setup</span>
                    <div className="text-2xl font-black text-white">$1,750</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Monthly</span>
                    <div className="text-3xl font-black text-white">$1,350</div>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 font-medium mb-4">
                  Turns missed and overflow calls into booked appointments automatically.
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3">Includes</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>AI answers after-hours + overflow calls</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>Appointment booking</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>Live calendar integration</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>CRM pipeline (lead → booked → showed)</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>Missed-call → automated follow-ups</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>SMS reminders & confirmations</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>Performance reporting dashboard</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-6 border-t border-white/5">
                <p className="text-[9px] text-zinc-500 mb-4 font-bold">Most clinics choose this plan.</p>
                <button 
                  onClick={() => setCurrentPage(Page.DASHBOARD)}
                  className="w-full px-6 py-4 bg-white text-black hover:bg-zinc-200 rounded font-black text-xs uppercase tracking-widest transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-zinc-950 border-2 border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all hover-lift hover-glow animate-scaleIn" style={{ animationDelay: '0.4s' }}>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-4">
                  PRO
                </div>
                <h3 className="text-sm font-black uppercase mb-3">Full Front-Desk Support</h3>
                <p className="text-xs text-zinc-400 mb-4">For busy, high-volume or multi-location clinics</p>
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">One-Time Setup</span>
                    <div className="text-2xl font-black">$2,750</div>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Monthly</span>
                    <div className="text-3xl font-black">$2,750</div>
                  </div>
                </div>
                <p className="text-xs text-zinc-300 font-medium mb-4">
                  Replaces a large part of front-desk workload and ensures no patient opportunity is missed — 24/7.
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-3">Includes</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>AI answers calls 24/7</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>After-hours + overflow + daytime backup</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>Priority call routing (staff → AI → fallback)</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>No-show reduction system</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>Recall & reactivation campaigns</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>Advanced reporting & insights</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <span className="text-white mt-0.5">✓</span>
                    <span>Multi-location support (1 extra location)</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-6 border-t border-white/5">
                <p className="text-[9px] text-zinc-500 mb-4 italic">Acts like a 24/7 front desk without hiring more staff.</p>
                <button 
                  onClick={() => setCurrentPage(Page.DASHBOARD)}
                  className="w-full px-6 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded font-black text-xs uppercase tracking-widest transition-all"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Call Usage Note */}
          <div className="max-w-4xl mx-auto mt-12 p-6 bg-zinc-950 border border-white/10 rounded-xl">
            <p className="text-xs text-zinc-400 text-center">
              <span className="font-bold">Call Usage:</span> Each plan is designed around real dental clinic call volumes. 
              Most clinics never hit their limit. If usage increases, calls never stop — a small per-minute top-up applies ($0.25/minute).
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 shimmer-effect opacity-10"></div>
        <div className="max-w-5xl mx-auto border border-white/10 rounded-[40px] p-20 text-center relative overflow-hidden bg-zinc-950 hover-glow animate-scaleIn">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1s' }}></div>
          
          <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter leading-tight animate-slideUp gradient-animated">Capture every lead.</h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto font-medium animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Stop losing business to voicemail. Deploy your FrontDesk in minutes.
          </p>
          <button 
             onClick={() => setCurrentPage(Page.DASHBOARD)}
             className="px-12 py-5 bg-white text-black rounded font-black text-sm uppercase tracking-widest hover:scale-110 transition-all shadow-xl shadow-white/10 animate-bounce-slow hover-glow"
             style={{ animationDelay: '0.4s' }}
          >
            Start Your Implementation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <Logo />
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
            <a href="#" className="hover:text-white transition">System Status</a>
            <a href="#" className="hover:text-white transition">API Documentation</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
          <p className="text-zinc-700 text-[10px] font-bold uppercase tracking-[0.2em]">© 2024 FRONTDESK TECHNOLOGY CORP.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
