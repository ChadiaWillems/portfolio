import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { cacheLife } from 'next/cache';
import Image from 'next/image';
import Nav from './components/nav/Nav';
import Hero from './widgets/Hero';
import Skills from './widgets/Skills';
import { FileCodeCorner, Palette, Settings } from 'lucide-react';
import Project from './widgets/Project';
import Footer from './components/nav/Footer';

async function getProjects() {
  'use cache';
  cacheLife('hours'); // Cache de resultaten voor een paar uur

  const projects = await client.fetch(`*[_type == "project"]{
    _id,
    title,
    description,
    link,
    tags,
    cloudinaryUrl
  }`);
  return projects;
}

async function getAboutMe() {
  'use cache';
  cacheLife('hours'); // Cache de resultaten voor een paar uur

  const aboutMe = await client.fetch(`*[_type == "about"]{
    _id,
    title,
    subtitle,
    bio,
    cloudinaryUrl
  }`);
  return aboutMe;
}

async function getSkills() {
  'use cache';
  cacheLife('hours'); // Cache de resultaten voor een paar uur

  const skills = await client.fetch(`*[_type == "skills"]{
    _id,
    title,
    tag
  }`);
  return skills;
}

export default async function Home() {
  const projects = await getProjects();
  const aboutMe = await getAboutMe();
  const skills = await getSkills();

  return (
    <>
      <Nav logoName="CW" />
      <Hero name={aboutMe[0]?.title} subtitle={aboutMe[0]?.subtitle} bio={aboutMe[0]?.bio} photo={aboutMe[0]?.cloudinaryUrl} />

      <main className="flex flex-col items-center justify-between gap-12 py-20 px-8 max-w-7xl mx-auto w-full min-h-[70vh]">
        <h2 className="font-bold text-3xl item-start">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Skills title={skills[2]?.title} Icon={FileCodeCorner} skills={skills[2]?.tag} gradient="from-blue-500 to-cyan-500" />
          <Skills title={skills[1]?.title} Icon={Settings} skills={skills[1]?.tag} gradient="from-green-500 to-teal-500" />
          <Skills title={skills[0]?.title} Icon={Palette} skills={skills[0]?.tag} gradient="from-purple-500 to-pink-500" />
        </div>
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        {projects.map((project: any) => (
          <Project key={project._id} title={project.title} description={project.description} link={project.link} cloudinaryUrl={project.cloudinaryUrl} tags={project.tags} />
        ))}
      </main>
      <Footer name="Chadia Willems" />
    </>
  );
}
