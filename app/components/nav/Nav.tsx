'use client';
import React from 'react';

export default function Nav({ logoName }: { logoName?: React.ReactNode }) {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 w-full">
      <div className="flex justify-between items-center py-5 px-8 max-w-7xl mx-auto w-full">
        <div onClick={handleLogoClick} className="cursor-pointer text-2xl font-black tracking-tighter text-white uppercase group">
          {logoName || 'CW'}
          <span className="text-[#d4ff00] group-hover:animate-pulse">.</span>
        </div>
      </div>
    </nav>
  );
}
