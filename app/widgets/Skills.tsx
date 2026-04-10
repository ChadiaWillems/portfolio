import { LucideIcon } from "lucide-react";

export default function Skills({ Icon, title, skills, gradient }: { Icon?: LucideIcon; title: string; skills: string[]; gradient: string }) {
  return (
    <div className="bg-white dark:bg-[#111111] border border-neutral-100 dark:border-neutral-800 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all group flex-1 min-w-[280px]">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg`}>
         {Icon && <Icon size={24} strokeWidth={2.5} />}
        </div>
        <h3 className="text-xl font-bold dark:text-white text-black">{title}</h3>
      </div>
      
      <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium">
        {skills.join(', ')}
      </p>
    </div>
  );
}