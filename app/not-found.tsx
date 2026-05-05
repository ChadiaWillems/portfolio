import ButtonAction from '@/app/components/buttons/ButtonAction';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-8 text-center bg-[#0a0a0a]">
      <h1 className="text-9xl font-black text-[#d4ff00] mb-4 uppercase tracking-tighter">404</h1>
      <h2 className="text-3xl font-bold uppercase mb-6">Lost in Space?</h2>
      <p className="text-neutral-400 mb-12 max-w-md font-medium">The project or page you are looking for doesn&apos;t exist or has been moved.</p>
      <ButtonAction label="Return Home" href="/" variant="primary" />
    </div>
  );
}
