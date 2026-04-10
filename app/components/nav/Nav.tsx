"use client";
import React from 'react';

export default function Nav({ logoName }: { logoName?: React.ReactNode }) {
  const handleThemeToggle = () => {
    console.log('Thema knop geklikt! Straks switch ik tussen light en dark mode.');
    alert('Thema switch geactiveerd (preview)');
  };

  const handleLogoClick = () => {
    console.log('Logo geklikt! Terug naar top van de page.');
  };

  return (
    <nav className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto w-full">
      <div onClick={handleLogoClick} className="cursor-pointer text-2xl font-bold tracking-tighter dark:text-white text-black">
        {logoName || 'CW'}
        <span className="text-blue-600">.</span>
      </div>
      <button onClick={handleThemeToggle} className="p-2 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all" aria-label="Toggle Dark Mode">
        <span className="dark:hidden">☀️</span>
        <span className="hidden dark:inline">🌙</span>
      </button>
    </nav>
  );
}
