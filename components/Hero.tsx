import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, 
    rgba(24, 24, 27, 0.3) 0%, 
    rgba(24, 24, 27, 0.8) 60%, 
    rgba(24, 24, 27, 1) 100%), 
    url('/hero.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10 max-w-3xl">
        <p className="text-sm font-mono text-zinc-400 mb-4 tracking-[0.2em] uppercase drop-shadow-md">
          Hi, I am
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-linear-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          Niklas Höfling.
        </h1>

        <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-10 max-w-125 drop-shadow-lg">
          STAR Student in Business Information Systems @ SAP
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-transform active:scale-95 text-center"
          >
            View Projects
          </a>

          <Link
            href="/contact"
            className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-white/10 transition-all active:scale-95"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-zinc-400">
        <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">
          scroll
        </span>
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  );
}
