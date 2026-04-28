import React from 'react';

interface TypoSectionHeaderProps {
  number: string;
  title: string;
}

export default function TypoSectionHeader({ number, title }: TypoSectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tighter text-white whitespace-nowrap">
        {number} <span className="text-[#d4ff00]">/</span> {title}
      </h2>
      <div className="h-[2px] w-full bg-white/10"></div>
    </div>
  );
}
