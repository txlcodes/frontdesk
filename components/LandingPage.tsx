
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
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-fadeIn">
            Universal Voice AI for Every Industry
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 animate-slideUp leading-[0.9]">
            NEVER MISS<br />
            <span className="gradient-text">ANOTHER CALL.</span>
          </h1>
          
          <p className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg font-medium animate-slideUp leading-relaxed">
            FrontDesk is the intelligent voice receptionist for Law, HVAC, Real Estate, and beyond. We handle your leads, answer FAQs, and book appointments 24/7 without a second of downtime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-slideUp">
            <button 
              onClick={() => setCurrentPage(Page.DASHBOARD)}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded font-black text-sm uppercase tracking-widest hover:invert transition-all duration-300"
            >
              Get Started
            </button>
            <button 
              onClick={() => setCurrentPage(Page.DASHBOARD)}
              className="w-full sm:w-auto px-10 py-5 border border-white/20 hover:bg-white/10 rounded font-black text-sm uppercase tracking-widest transition-all"
            >
              Configure Yours
            </button>
          </div>
        </div>

      </section>

      {/* Appointment Focus Section */}
      <section className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.4em]">Seamless Integration</span>
            <h2 className="text-4xl font-black tracking-tight mt-4 mb-6 uppercase leading-tight">Autonomous<br />Scheduling.</h2>
            <p className="text-zinc-400 font-medium mb-8 leading-relaxed">
              No more back-and-forth. FrontDesk AI syncs directly with your calendar. When a customer calls, it finds an open slot, confirms their details, and adds it to your schedule automatically.
            </p>
            <ul className="space-y-4">
              {['Syncs with Google & Outlook', 'Handles cancellations & rescheduling', 'Instant SMS confirmations'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 border border-white/10 rounded-3xl bg-black shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500">Upcoming Appointments</h3>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Marcus Chen', time: 'Today at 2:00 PM', type: 'Consultation' },
                { name: 'Elena Rodriguez', time: 'Tomorrow at 9:30 AM', type: 'Intake' },
                { name: 'James Wilson', time: 'Wed at 4:15 PM', type: 'Meeting' }
              ].map((apt, i) => (
                <div key={i} className="p-4 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold">{apt.name}</div>
                    <div className="text-[10px] text-zinc-500 font-mono mt-1">{apt.time}</div>
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-2 py-1 rounded">{apt.type}</div>
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
              <div key={idx} className="p-12 bg-black hover:bg-zinc-950 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-white text-black flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{feature.description}</p>
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
            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-4">
                  Starter
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black">$349</span>
                  <span className="text-zinc-500 text-sm font-bold">/month</span>
                </div>
                <p className="text-zinc-500 text-sm font-medium mt-4 leading-relaxed">
                  Perfect for small practices getting started
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 AI voice receptionist</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited calls & conversations</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Calendar integration</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Call transcripts & analytics</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Email support</span>
                </li>
              </ul>
              
              <div className="pt-6 border-t border-white/5">
                <button 
                  onClick={() => setCurrentPage(Page.DASHBOARD)}
                  className="w-full px-6 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded font-black text-xs uppercase tracking-widest transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Growth Plan - Most Popular */}
            <div className="bg-white text-black border-2 border-white rounded-2xl p-8 relative hover:scale-105 transition-transform">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 bg-white text-black rounded-full text-[9px] font-black uppercase tracking-widest border-2 border-black">
                  ⭐ Most Popular
                </span>
              </div>
              
              <div className="mb-6 mt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/10 text-[9px] font-black uppercase tracking-widest mb-4">
                  Growth
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black">$449</span>
                  <span className="text-zinc-600 text-sm font-bold">/month</span>
                </div>
                <p className="text-zinc-600 text-sm font-medium mt-4 leading-relaxed">
                  Ideal for growing practices with higher call volume
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-zinc-800">
                  <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-800">
                  <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced call routing & queuing</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-800">
                  <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>CRM integrations</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-800">
                  <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom voice & personality</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-800">
                  <svg className="w-5 h-5 text-black mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              
              <div className="pt-6 border-t border-black/10">
                <button 
                  onClick={() => setCurrentPage(Page.DASHBOARD)}
                  className="w-full px-6 py-4 bg-black text-white hover:bg-zinc-900 rounded font-black text-xs uppercase tracking-widest transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Pro / HIPAA Plan */}
            <div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-4">
                  Pro / HIPAA
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black">Starting at</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black">$749</span>
                  <span className="text-zinc-500 text-sm font-bold">/month</span>
                </div>
                <p className="text-zinc-500 text-sm font-medium mt-4 leading-relaxed">
                  Enterprise solution for multi-location practices
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Growth</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full HIPAA compliance & BAA</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multi-location management</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom integrations & workflows</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 phone & email support</span>
                </li>
              </ul>
              
              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-4">
                  Custom pricing based on practice size
                </p>
                <button 
                  onClick={() => setCurrentPage(Page.DASHBOARD)}
                  className="w-full px-6 py-4 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded font-black text-xs uppercase tracking-widest transition-all"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto border border-white/10 rounded-[40px] p-20 text-center relative overflow-hidden bg-zinc-950">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
          
          <h2 className="text-5xl font-black mb-8 uppercase tracking-tighter leading-tight">Capture every lead.</h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Stop losing business to voicemail. Deploy your FrontDesk in minutes.
          </p>
          <button 
             onClick={() => setCurrentPage(Page.DASHBOARD)}
             className="px-12 py-5 bg-white text-black rounded font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-white/10"
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
