'use client';
import React from 'react';

export default function Nav({ logoName }: { logoName?: React.ReactNode }) {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 w-full">
      <div className="flex justify-between items-center py-5 px-8 max-w-7xl mx-auto w-full">
        <button 
          onClick={handleLogoClick} 
          className="text-2xl font-black tracking-tighter text-white uppercase group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#d4ff00] rounded-sm"
          aria-label="Scroll naar boven"
        >
          {logoName || 'CW'}
          <span className="text-[#d4ff00] group-hover:animate-pulse">.</span>
        </button>
      </div>
    </nav>
  );
}