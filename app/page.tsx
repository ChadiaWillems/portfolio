import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { cacheLife } from 'next/cache';
import Image from 'next/image';

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

export default async function Home() {
  const projects = await getProjects();

  return (
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
  );
}
