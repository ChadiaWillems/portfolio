export default function Skills({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="border border-white/10 p-8 flex-1 min-w-[280px] hover:border-[#d4ff00] transition-colors group">
      <h3 className="text-xs font-mono text-[#d4ff00] mb-4 uppercase tracking-[0.2em]">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="text-xl font-bold text-white group-hover:text-[#d4ff00]">
            {skill}
            {i !== skills.length - 1 && ','}
          </span>
        ))}
      </div>
    </div>
  );
}
