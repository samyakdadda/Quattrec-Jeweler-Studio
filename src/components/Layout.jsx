import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-obsidian text-cream font-body overflow-x-hidden relative">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <footer className="w-full py-12 border-t border-gold/20 flex flex-col items-center justify-center mt-auto bg-obsidian">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-display text-gradient-gold tracking-widest mb-2">QuattreC</h2>
          <p className="text-[10px] tracking-[0.3em] text-cream/70 uppercase">Jeweler's Studio</p>
        </div>
        <p className="text-xs text-cream/50 tracking-wider">
          &copy; {new Date().getFullYear()} QuattreC Jeweler Studio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
