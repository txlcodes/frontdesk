
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import DemoSection from './components/DemoSection';
import { Page, BusinessConfig } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LANDING);
  const [config, setConfig] = useState<BusinessConfig>({
    name: "Modern Dentistry",
    industry: "Healthcare",
    tone: "professional",
    voice: "Kore",
    instructions: "You are a receptionist for Modern Dentistry. Help patients book dental appointments and answer basic questions about pricing and services. If you don't know an answer, offer to take a message."
  });

  const renderPage = () => {
    switch (currentPage) {
      case Page.LANDING:
        return <LandingPage setCurrentPage={setCurrentPage} />;
      case Page.DASHBOARD:
        return <Dashboard config={config} setConfig={setConfig} />;
      case Page.DEMO:
        return <DemoSection config={config} />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="relative">
        {renderPage()}
      </main>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
        
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #000000;
        }
        ::-webkit-scrollbar-thumb {
          background: #333333;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #555555;
        }

        input, select, textarea {
          color-scheme: dark;
        }
      `}</style>
    </div>
  );
};

export default App;
