import { client } from '@/sanity/lib/client';
import { unstable_cache } from 'next/cache';
import Nav from '@/app/components/nav/Nav';
import Footer from '@/app/components/nav/Footer';
import ProjectHeader from '@/app/widgets/ProjectHero';
import ProjectSidebar from '@/app/widgets/ProjectSideBar';
import ProjectContent from '@/app/widgets/ProjectContent';


export async function generateStaticParams() {
  const projects = await client.fetch(`*[_type == "project"]{ "slug": slug.current }`);

  return projects.map((project: { slug: string }) => ({
    slug: project.slug,
  }));
}

const getProjectData = unstable_cache(
  async (slug: string) => {
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
      "cloudinaryUrl": projectImage.secure_url,
      year
    }`,
      { slug },
    );
  },
  ['project-detail-cache'],
  { revalidate: 3600 },
);

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  return (
    <>
      <Nav logoName="CW" />
      <main className="min-h-screen bg-[#0a0a0a] text-white pb-24">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <ProjectHeader title={project.title} year={project.year} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">
            <ProjectSidebar description={project.description} tags={project.tags} technicalText={project.technicalText} />

            <ProjectContent image={project.cloudinaryUrl} title={project.title} challenge={project.challenge} concept={project.concept} solution={project.solution} links={project.links}/>
          </div>
        </div>
      </main>
      <Footer name="Chadia Willems" year={2026} />
    </>
  );
}
