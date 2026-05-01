import ButtonAction from '@/app/components/buttons/ButtonAction';

export default function ProjectHeader({ title, year }: { title: string; year: number }) {
  return (
    <div className="mb-16">
      <div className="pb-12">
        <ButtonAction label="Back to overview" href="/" variant="secondary" />
      </div>
      <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8 break-words">
        {title}
        <span className="text-[#d4ff00]">.</span>
      </h1>
      <p className="text-lg text-neutral-500">{year}</p>
    </div>
  );
}
