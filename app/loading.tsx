export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#d4ff00] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#d4ff00] font-mono text-sm uppercase tracking-widest animate-pulse">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}