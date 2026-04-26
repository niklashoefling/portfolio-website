import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16 lg:px-32 bg-[#0f1115]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-[0.3em] mb-12">
          03. Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index}>
              {project.isComingSoon ? (
                <div className="h-full p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest italic">
                      Coming Soon
                    </span>
                    <h3 className="text-xl font-bold text-zinc-500 mt-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-zinc-600 mt-4 leading-relaxed font-light">
                      {project.intro}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    <div className="w-16 h-4 bg-zinc-800 rounded animate-pulse" />
                    <div className="w-12 h-4 bg-zinc-800 rounded animate-pulse" />
                  </div>
                </div>
              ) : (
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full p-8 rounded-2xl bg-white/2 border border-white/5 hover:border-blue-500/30 hover:bg-white/4 transition-all duration-500 shadow-xl"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <span className="text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                          ↗
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-50 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-zinc-400 mt-4 leading-relaxed font-light">
                        {project.intro}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-[9px] border border-zinc-800 rounded bg-black/20 text-zinc-500 uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="https://github.com/niklashoefling"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 bg-white/2 border border-white/5 rounded-full hover:border-blue-500/50 transition-all duration-500"
          >
            <span className="text-sm font-mono text-zinc-400 group-hover:text-white transition-colors">
              Explore more on{' '}
              <span className="text-blue-400 font-bold">GitHub</span>
            </span>
            <span className="text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
