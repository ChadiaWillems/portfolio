import ButtonAction from '../components/buttons/ButtonAction';

export default function Project({ title, description, cloudinaryUrl, tags, links, slug }: { title: string; description: string; cloudinaryUrl: string; tags: string[]; links: { label: string; url: string }[]; slug: { current: string } }) {
  return (
    <div className="border border-white/10 group hover:border-white transition-colors">
      <div className="relative overflow-hidden aspect-video">
        <img src={cloudinaryUrl.replace('/upload/', '/upload/f_auto,q_100,w_1200/')} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
      </div>
      <div className="p-8">
        <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">{title}</h3>
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

        <div className="mt-6">
          <ButtonAction label="View Project" href={`/projects/${slug.current}`} variant="secondary" />
        </div>
      </div>
    </div>
  );
}
