import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { cacheLife } from 'next/cache';
import Image from 'next/image';
import Nav from './components/nav/Nav';
import Hero from './widgets/Hero';
import Skills from './widgets/Skills';

async function getProjects() {
  'use cache';
  cacheLife('hours'); // Cache de resultaten voor een paar uur

  const projects = await client.fetch(`*[_type == "project"]{
    _id,
    title,
    description,
    link,
    cloudinaryUrl
  }`);
  return projects;
}

async function getAboutMe() {
  // 'use cache';
  // cacheLife('hours'); // Cache de resultaten voor een paar uur

  const aboutMe = await client.fetch(`*[_type == "about"]{
    _id,
    title,
    subtitle,
    bio,
    cloudinaryUrl
  }`);
  return aboutMe;
}

export default async function Home() {
  const projects = await getProjects();
  const aboutMe = await getAboutMe();
  console.log(aboutMe[0]);

  return (
    <>
      <Nav logoName="CW" />
      <Hero name={aboutMe[0]?.title} subtitle={aboutMe[0]?.subtitle} bio={aboutMe[0]?.bio} photo={aboutMe[0]?.cloudinaryUrl} />
      <section className='px-30'>
        <h2 className='font-bold text-3xl'>Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Skills title="Design & UX" skills="Figma" />
          <Skills title="Frontend Development" skills="React, Next.js, TypeScript." />
          <Skills title="Backend Development" skills="Node.js, Express, MongoDB." />
        </div>
      </section>
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-8">Mijn Projecten</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: any) => (
            <div key={project._id} className="border p-4 rounded-lg shadow">
              {project.cloudinaryUrl && <Image src={project.cloudinaryUrl} alt={project.title} width={500} height={300} className="rounded-md object-cover" />}

              <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>

              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 block">
                  Bekijk op GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
