
import React from 'react';
import { Page } from '../types';
import Logo from './Logo';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="cursor-pointer" 
          onClick={() => setCurrentPage(Page.LANDING)}
        >
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => setCurrentPage(Page.LANDING)} className={`text-xs font-bold tracking-widest uppercase transition ${currentPage === Page.LANDING ? 'text-white' : 'text-zinc-500 hover:text-white'}`}>Features</button>
          <button onClick={() => setCurrentPage(Page.DASHBOARD)} className={`text-xs font-bold tracking-widest uppercase transition ${currentPage === Page.DASHBOARD ? 'text-white' : 'text-zinc-500 hover:text-white'}`}>Dashboard</button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentPage(Page.DASHBOARD)}
            className="px-6 py-2 rounded bg-white text-black hover:bg-zinc-200 transition text-xs font-black uppercase tracking-widest"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
