import TypoSectionHeader from '@/app/components/typo/TypoSectionHeader';

interface SidebarProps {
  description: string;
  tags: string[];
  technicalText?: string;
}

export default function ProjectSidebar({ description, tags, technicalText }: SidebarProps) {
  return (
    <div className="lg:col-span-1 space-y-12">
      <section>
        <TypoSectionHeader number="01" title="The Brief" />
        <p className="text-neutral-400 text-lg leading-relaxed font-medium whitespace-pre-line">
          {description}
        </p>
      </section>

      <section className="space-y-4">
        <h3 className="font-mono text-[#d4ff00] uppercase text-xs tracking-[0.2em] font-bold">Tech Stack //</h3>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span key={tag} className="border border-white/10 px-3 py-1 font-mono text-[10px] uppercase text-neutral-300">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {technicalText && (
        <section className="p-6 bg-neutral-900/50 border-l-2 border-[#d4ff00] space-y-4">
          <h3 className="font-mono text-[#d4ff00] uppercase text-xs tracking-widest font-bold">Technical Breakdown</h3>
          <p className="font-mono text-sm text-neutral-400 leading-relaxed whitespace-pre-line italic">
            {technicalText}
          </p>
        </section>
      )}
    </div>
  );
}