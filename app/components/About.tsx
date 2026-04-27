import Image from 'next/image';

export default function About() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-32 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-[0.3em] mb-6">
              01. About Me
            </h2>
            <h3 className="text-4xl font-bold text-white leading-tight mb-8">
              Learning to build <br />
              <span className="text-zinc-500 italic">the future.</span>
            </h3>

            <div className="aspect-square w-full max-w-[320px] md:max-w-95 lg:max-w-112.5 bg-zinc-900 rounded-2xl border border-zinc-800 relative overflow-hidden group shadow-2xl shadow-blue-500/10 transition-transform duration-500 hover:scale-[1.01] mx-auto md:mx-0">
              <Image
                src="/profile.jpeg"
                alt="Niklas Höfling"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/60 to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="lg:w-2/3 space-y-8">
            <div className="prose prose-invert max-w-none text-zinc-400 leading-relaxed text-lg font-light">
              <p>
                I am a dual student in{' '}
                <span className="text-white font-medium">
                  Business Information Systems at DHBW Mannheim
                </span>
                , in cooperation with{' '}
                <span className="text-white font-medium">SAP</span>. My path is
                focused on exploring the synergy between business processes and
                technical possibilities.
              </p>

              <p>
                Driven by curiosity and a commitment to teamwork, I am currently
                building a solid foundation through my studies and initial
                hands-on experience within real-world enterprise environments.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="p-7 bg-zinc-900/40 border border-zinc-800/50 rounded-xl group hover:border-blue-500/30 transition-all duration-300 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-blue-500 text-xs font-mono font-bold tracking-tighter">
                      01
                    </span>
                    <h4 className="text-zinc-100 font-semibold italic text-base">
                      Tech & AI Exploration
                    </h4>
                  </div>
                  <p className="text-[15px] leading-relaxed text-zinc-400 font-light">
                    Gaining insights into how{' '}
                    <span className="text-zinc-200">
                      Artificial Intelligence
                    </span>{' '}
                    and cloud technologies can be leveraged to simplify
                    processes and support software development.
                  </p>
                </div>

                <div className="p-7 bg-zinc-900/40 border border-zinc-800/50 rounded-xl group hover:border-blue-500/30 transition-all duration-300 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-blue-500 text-xs font-mono font-bold tracking-tighter">
                      02
                    </span>
                    <h4 className="text-zinc-100 font-semibold italic text-base">
                      Business Foundations
                    </h4>
                  </div>
                  <p className="text-[15px] leading-relaxed text-zinc-400 font-light">
                    Learning to analyze requirements and understand the
                    principles behind scalable{' '}
                    <span className="text-zinc-200">
                      Enterprise Architectures
                    </span>{' '}
                    that underpin modern digital transformation.
                  </p>
                </div>
              </div>

              <p>
                As a{' '}
                <span className="text-zinc-200 font-medium">STAR Student</span>,
                I appreciate the opportunity to rotate through diverse teams at
                SAP, learning from experts and contributing to impactful topics.
                I am looking forward to connecting with professionals and
                growing within the field of IT and business.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-900/50">
              <a
                href="https://www.linkedin.com/in/niklas-ralf-h%C3%B6fling-6834b4382/"
                target="_blank"
                rel="me noopener noreferrer"
                className="group text-sm font-mono text-blue-500 hover:text-white transition-colors flex items-center gap-2"
              >
                View LinkedIn Profile{' '}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
