import { client } from '@/sanity/lib/client';
import TypoSectionHeader from '@/app/components/typo/TypoSectionHeader';
import ButtonAction from '@/app/components/buttons/ButtonAction';
import { cacheLife } from 'next/cache';
import Nav from '@/app/components/nav/Nav';
import Footer from '@/app/components/nav/Footer';

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  async function getProjectData(slug: string) {
    'use cache';
    cacheLife('hours');

    // We halen hier nu expliciet alle nieuwe velden op
    return await client.fetch(
      `*[_type == "project" && slug.current == $slug][0]{
      title,
      description,
      challenge,
      concept,
      solution,
      technicalText,
      tags,
      links,
      cloudinaryUrl
    }`,
      { slug },
    );
  }

  const project = await getProjectData(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center gap-6 font-mono">
        <h1 className="text-4xl font-black">404 // PROJECT_NOT_FOUND</h1>
        <ButtonAction label="Go Back" href="/" variant="secondary" />
      </div>
    );
  }

  return (
    <>
      <Nav logoName="CW" />
      <main className="min-h-screen bg-[#0a0a0a] text-white pb-24">
        <div className="max-w-7xl mx-auto px-8 py-24">
          {/* Header Sectie */}
          <div className="mb-16">
            <div className="pb-12">
              <ButtonAction label="Back to overview" href="/" variant="secondary" />
            </div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8 break-words">
              {project.title}
              <span className="text-[#d4ff00]">.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
            {/* LINKER KOLOM: De Basis Info */}
            <div className="lg:col-span-1 space-y-12">
              <section>
                <TypoSectionHeader number="01" title="The Brief" />
                <p className="text-neutral-400 text-lg leading-relaxed font-medium whitespace-pre-line">{project.description}</p>
              </section>

              <section className="space-y-4">
                <h3 className="font-mono text-[#d4ff00] uppercase text-xs tracking-[0.2em] font-bold">Tech Stack //</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag: string) => (
                    <span key={tag} className="border border-white/10 px-3 py-1 font-mono text-[10px] uppercase text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              {/* Technische Breakdown - In een apart blok voor extra nadruk */}
              {project.technicalText && (
                <section className="p-6 bg-neutral-900/50 border-l-2 border-[#d4ff00] space-y-4">
                  <h3 className="font-mono text-[#d4ff00] uppercase text-xs tracking-widest font-bold">Technical Breakdown</h3>
                  <p className="font-mono text-sm text-neutral-400 leading-relaxed whitespace-pre-line italic">{project.technicalText}</p>
                </section>
              )}
            </div>

            {/* RECHTER KOLOM: Het Verhaal & Visuals */}
            <div className="lg:col-span-2 space-y-20">
              {/* Hoofdafbeelding */}
              <div className="border border-white/10 p-2 bg-neutral-900/50 group overflow-hidden">
                <img src={project.cloudinaryUrl} alt={project.title} className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>

              {/* Content Secties: Concept, Challenge & Solution */}
              <div className="grid grid-cols-1 gap-16">
                {project.challenge && (
                  <section>
                    <TypoSectionHeader number="02" title="The Challenge" />
                    <p className="text-neutral-300 text-xl leading-relaxed whitespace-pre-line">{project.challenge}</p>
                  </section>
                )}

                {project.concept && (
                  <section>
                    <TypoSectionHeader number="03" title="The Concept" />
                    <p className="text-neutral-300 text-xl leading-relaxed whitespace-pre-line">{project.concept}</p>
                  </section>
                )}

                {project.solution && (
                  <section>
                    <TypoSectionHeader number="04" title="The Solution" />
                    <p className="text-neutral-300 text-xl leading-relaxed whitespace-pre-line">{project.solution}</p>
                  </section>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12 border-t border-white/10">
                {project.links?.map((link: any) => (
                  <ButtonAction key={link.label} label={link.label} href={link.url} variant="primary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer name="Chadia Willems" year={new Date().getFullYear()} />
    </>
  );
}
