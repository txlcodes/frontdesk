
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
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
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-5deg) scale(0.95); }
          to { opacity: 1; transform: rotate(0deg) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 40px rgba(255, 255, 255, 0.3); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn { 
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }
        .animate-slideUp { 
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slideDown { 
          animation: slideDown 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slideLeft { 
          animation: slideLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-slideRight { 
          animation: slideRight 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-scaleIn { 
          animation: scaleIn 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-rotateIn { 
          animation: rotateIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(255, 255, 255, 0.1);
        }
        
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        .hover-glow {
          transition: box-shadow 0.3s ease;
        }
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
        }
        
        .gradient-animated {
          background: linear-gradient(-45deg, #ffffff, #9ca3af, #ffffff, #9ca3af);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
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
        
        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
