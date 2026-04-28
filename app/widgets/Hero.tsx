import ButtonAction from "../components/buttons/ButtonAction";

export default function Hero({ name, subtitle, bio, photo }: { name?: string; subtitle?: string; bio?: string; photo?: string }) {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-24 px-8 max-w-7xl mx-auto w-full border-b border-white/10">
      <div className="flex flex-col items-start gap-6 flex-1">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">{name}</h1>
        <h2 className="text-xl md:text-2xl font-mono text-[#d4ff00] uppercase tracking-widest">{subtitle}</h2>
        <p className="max-w-md text-neutral-400 text-lg leading-snug">{bio}</p>
        <ButtonAction label="Explore Projects" href="#projects" variant="primary" />
      </div>
      <div className="relative flex-1 flex justify-center">
        <div className="w-72 h-72 md:w-[400px] md:h-[500px] border-2 border-[#d4ff00] p-2">{photo ? <img src={photo} alt={name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" /> : <div className="w-full h-full bg-neutral-900 flex items-center justify-center font-mono text-neutral-500">IMG_NULL</div>}</div>
      </div>
    </section>
  );
}
