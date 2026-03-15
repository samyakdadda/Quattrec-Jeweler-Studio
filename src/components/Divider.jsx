import React from 'react';

const Divider = () => {
  return (
    <div className="w-full py-24 flex items-center justify-center bg-obsidian">
      <div className="flex items-center w-full max-w-lg px-8 opacity-70">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-gold"></div>
        
        <div className="px-6 flex items-center justify-center relative text-gold w-16 h-8">
          <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
            <path d="M 0,25 C 25,25 35,0 50,0 C 65,0 75,25 100,25" />
            <path d="M 0,25 C 25,25 35,50 50,50 C 65,50 75,25 100,25" />
            <polygon points="50,15 60,25 50,35 40,25" fill="currentColor" stroke="none" />
            <circle cx="50" cy="25" r="2" fill="#0a0805" stroke="none" />
          </svg>
        </div>
        
        <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-gold"></div>
      </div>
    </div>
  );
};

export default Divider;
