import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/lib/projects';
import ProjectPage from '@/app/components/ProjectPage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.intro,
    openGraph: {
      title: `${project.title} — Niklas Höfling`,
      description: project.intro,
      url: `https://niklas-hoefling.de/projects/${slug}`,
      ...(project.heroImage && {
        images: [
          {
            url: project.heroImage,
            width: 1200,
            height: 630,
            alt: project.title,
          },
        ],
      }),
    },
  };
}

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
