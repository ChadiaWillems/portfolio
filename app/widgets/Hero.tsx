export default function Hero({ name, subtitle, bio, photo }: { name?: string; subtitle?: string; bio?: string; photo?: string }) {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-20 px-8 max-w-7xl mx-auto w-full min-h-[70vh]">
      <div className="flex flex-col items-start gap-8 flex-1">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1] dark:text-white text-black">
            Hi, I&apos;m <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">{name}</span>
          </h1>

          <div className="flex flex-col gap-1">
            <h2 className="text-xl md:text-2xl font-bold dark:text-neutral-200 text-neutral-800">{subtitle}</h2>
          </div>
        </div>

        <p className="max-w-md text-neutral-500 dark:text-neutral-400 leading-relaxed">{bio}</p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(37,99,235,0.5)] hover:-translate-y-1">See projects</button>
      </div>
      <div className="relative flex-1 flex justify-center items-center">
        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-blue-400/20 dark:bg-blue-600/10 blur-[80px] rounded-full -z-10" />

        <div className="w-64 h-64 md:w-96 md:h-96 rounded-[3rem] overflow-hidden border-4 border-white dark:border-neutral-900 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">{photo ? <img src={photo} alt={name} className="w-full h-full object-top object-cover" /> : <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center italic text-neutral-400">Plaats hier je foto</div>}</div>
      </div>
    </section>
  );
}
