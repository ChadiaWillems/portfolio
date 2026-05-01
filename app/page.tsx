import { client } from '@/sanity/lib/client';
import { unstable_cache } from 'next/cache';
import Nav from './components/nav/Nav';
import Hero from './widgets/Hero';
import Skills from './widgets/Skills';
import Project from './widgets/Project';
import Footer from './components/nav/Footer';
import TypoSectionHeader from './components/typo/TypoSectionHeader';

const getProjects = unstable_cache(
  async () => {
    return await client.fetch(`*[_type == "project"]| order(year desc){
      _id,
      title,
      description,
      links,
      tags,
      "cloudinaryUrl": projectImage.secure_url,
      slug,
      year
    }`);
  },
  ['projects-cache-vFINAL'],
  { revalidate: 3600 },
);

const getAboutMe = unstable_cache(
  async () => {
    const aboutMe = await client.fetch(`*[_type == "about"]{
      _id,
      title,
      subtitle,
      bio,
      "cloudinaryUrl": aboutImage.secure_url
    }`);
    return aboutMe;
  },
  ['  about-cache-vFINAL'],
  { revalidate: 3600 },
);

const getSkills = unstable_cache(
  async () => {
    return await client.fetch(`*[_type == "skills"]{
      _id,
      title,
      tag
    }`);
  },
  ['skills-cache'],
  { revalidate: 3600 },
);

export default async function Home() {
  const projects = await getProjects();
  const aboutMe = await getAboutMe();
  const skills = await getSkills();

  return (
    <>
      <Nav logoName="CW" />
      <Hero name={aboutMe[0]?.title} subtitle={aboutMe[0]?.subtitle} bio={aboutMe[0]?.bio} photo={aboutMe[0]?.cloudinaryUrl} />
      <main className="flex flex-col gap-24 py-24 px-8 max-w-7xl mx-auto w-full">
        <section>
          <TypoSectionHeader number="01" title="Skills" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-white/10">
            <Skills title={skills[2]?.title} skills={skills[2]?.tag} />
            <Skills title={skills[1]?.title} skills={skills[1]?.tag} />
            <Skills title={skills[0]?.title} skills={skills[0]?.tag} />
          </div>
        </section>

        <section id="projects">
          <TypoSectionHeader number="02" title="Selected Works" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project: any) => (
              <Project key={project._id} title={project.title} description={project.description} cloudinaryUrl={project.cloudinaryUrl} tags={project.tags} links={project.links} slug={project.slug} year={project.year} />
            ))}
          </div>
        </section>
      </main>

      <Footer name="Chadia Willems" year={2026} />
    </>
  );
}
