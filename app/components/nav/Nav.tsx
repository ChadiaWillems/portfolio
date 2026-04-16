"use client";
import React from 'react';
import { useTheme } from "next-themes";
import { Sun, Moon } from 'lucide-react';

export default function Nav({ logoName }: { logoName?: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto w-full">
      <div 
        onClick={handleLogoClick} 
        className="cursor-pointer text-2xl font-bold tracking-tighter dark:text-white text-black"
      >
        {logoName || 'CW'}
        <span className="text-blue-600">.</span>
      </div>

      <button 
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
        className="p-2 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-neutral-900 transition-all bg-white dark:bg-black shadow-sm flex items-center justify-center"
        aria-label="Toggle Dark Mode"
      >
        {/* De Sun icon is alleen zichtbaar als de parent (html) de class 'dark' heeft */}
        <Sun size={20} className="hidden dark:block text-yellow-500" />
        {/* De Moon icon is zichtbaar in light mode en wordt verborgen in dark mode */}
        <Moon size={20} className="block dark:hidden text-blue-600" />
      </button>
    </nav>
  );
}