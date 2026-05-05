'use client';

import { useEffect } from 'react';
import ButtonAction from '@/app/components/buttons/ButtonAction';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optioneel: log de fout naar een service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 text-center bg-[#0a0a0a]">
      <h1 className="text-9xl font-black text-[#d4ff00] mb-4 uppercase tracking-tighter">Oops</h1>
      <h2 className="text-3xl font-bold uppercase mb-6">Something went wrong</h2>
      <p className="text-neutral-400 mb-12 max-w-md font-medium">
        An unexpected error occurred while loading this page. 
        It might be a temporary connection issue.
      </p>
      
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-8 py-4 bg-[#d4ff00] text-black font-black uppercase tracking-tighter hover:bg-white transition-colors"
        >
          Try Again
        </button>
        <ButtonAction label="Return Home" href="/" variant="secondary" />
      </div>
    </div>
  );
}