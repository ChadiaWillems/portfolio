import ButtonAction from '../components/buttons/ButtonAction';

export default function Project({ title, description, cloudinaryUrl, tags, links, slug, year }: { title: string; description: string; cloudinaryUrl: string; tags: string[]; links: { label: string; url: string }[]; slug: { current: string }; year: number }) {
  const optimizedUrl = cloudinaryUrl && typeof cloudinaryUrl === 'string' ? cloudinaryUrl.replace('/upload/', '/upload/f_auto,q_100,w_1200/') : null;
  
  return (
    <div className="border border-white/10 group hover:border-white transition-colors flex flex-col h-full bg-[#0a0a0a]">
      <div className="relative overflow-hidden aspect-video">{optimizedUrl ? <img src={optimizedUrl} alt={title} className="..." /> : <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-500 font-mono text-xs">IMG_NOT_FOUND</div>}</div>
      <div className="p-8 flex flex-col flex-grow gap-1">
        <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">{title}</h3>
        <p className="text-sm font-mono text-[#d4ff00] mb-4 opacity-60">{year}</p>
        <p className="text-neutral-400 mb-6 line-clamp-3 font-medium">{description}</p>

        <div className="flex flex-col gap-3 mb-8">
          {links?.map((link, index) => (
            <a key={index} href={link.url} target="_blank" className="text-[#d4ff00] font-mono text-sm uppercase hover:text-white flex items-center gap-2">
              <span>[{link.label}]</span>
              <span className="text-[10px]">↗</span>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span key={index} className="text-[10px] font-mono border border-white/20 px-2 py-1 uppercase text-neutral-500">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex-grow" />

        <div className="mt-2">
          <ButtonAction label="View Project" href={`/projects/${slug.current}`} variant="secondary" />
        </div>
      </div>
    </div>
  );
}
