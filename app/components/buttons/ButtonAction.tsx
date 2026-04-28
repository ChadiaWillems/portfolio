import React from 'react';

interface ButtonActionProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
}

export default function ButtonAction({ label, onClick, href, variant = 'primary', type = 'button' }: ButtonActionProps) {
  const baseStyles = 'relative inline-flex items-center justify-center px-8 py-4 font-black uppercase tracking-tighter transition-all duration-300 group overflow-hidden';

  const variants = {
    primary: 'bg-[#d4ff00] text-black hover:bg-white',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-[#d4ff00] hover:border-[#d4ff00] hover:text-black',
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <span className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
      </span>
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-black group-hover:w-full transition-all duration-500"></div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {content}
    </button>
  );
}
