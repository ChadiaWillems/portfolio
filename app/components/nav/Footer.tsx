'use client';

export default function Footer({ name, year }: { name: string; year: number }) {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto w-full gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-white font-black uppercase tracking-tighter text-xl">
            {name}
            <span className="text-[#d4ff00]">.</span>
          </p>
          <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest" suppressHydrationWarning>
            &copy; {year}
          </p>
        </div>


        <div className="flex gap-6">
          <a href="https://github.com/ChadiaWillems" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-neutral-400 hover:text-[#d4ff00] transition-colors font-mono text-xs uppercase tracking-widest">
            <span className="text-[10px] group-hover:translate-x-1 transition-transform">→</span> GitHub
          </a>
          <a href="https://www.linkedin.com/in/chadia-willems-6a83b8201/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-neutral-400 hover:text-[#d4ff00] transition-colors font-mono text-xs uppercase tracking-widest">
            <span className="text-[10px] group-hover:translate-x-1 transition-transform">→</span> LinkedIn
          </a>
        </div>
      </div>


      <div className="h-2 w-full bg-[#d4ff00]"></div>
    </footer>
  );
}
