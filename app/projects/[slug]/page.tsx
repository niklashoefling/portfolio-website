import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/lib/projects';
import ProjectPage from '@/app/components/ProjectPage';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.isComingSoon) {
    notFound();
  }

  return <ProjectPage project={project} />;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug && !p.isComingSoon)
    .map((p) => ({ slug: p.slug }));
}
