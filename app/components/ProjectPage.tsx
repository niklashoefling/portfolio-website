import Image from 'next/image';
import { Project } from '@/lib/projects';
import BackLink from './BackLink';

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <main className="min-h-screen bg-[#0f1115] text-white pb-32">
      <BackLink href="/#projects" label="Back to Projects" />

      <header className="px-6 md:px-16 lg:px-32 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
            <div className="max-w-3xl">
              <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em] mb-6 block">
                {project.year}
              </span>
              <h1 className="text-5xl md:text-8xl font-light italic tracking-tight leading-[0.9]">
                {project.title}
              </h1>
            </div>

            <div className="grid grid-cols-2 lg:flex gap-12 border-l border-zinc-800 pl-8 h-fit">
              <div>
                <p className="text-[10px] font-mono text-zinc-600 uppercase mb-2 tracking-widest">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[9px] border border-zinc-800 rounded bg-black/20 text-zinc-400 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {project.heroImage && (
            <div className="relative aspect-21/9 w-full bg-zinc-900 rounded-sm overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-linear-to-t from-[#0f1115] to-transparent opacity-40 z-10" />
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </header>

      <article className="px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {project.intro && (
            <div className="lg:col-span-5">
              <p className="text-2xl md:text-3xl text-zinc-200 leading-snug font-light italic">
                {project.intro}
              </p>
            </div>
          )}

          <div className={project.intro ? 'lg:col-span-7' : 'lg:col-span-12'}>
            <div className="prose prose-invert prose-zinc max-w-none">
              <div className="space-y-8 text-zinc-400 font-light leading-relaxed text-lg whitespace-pre-line">
                {project.fullDescription}
              </div>

              <div className="mt-16 pt-16 border-t border-zinc-900">
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="text-white font-medium hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                >
                  View on GitHub{' '}
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
