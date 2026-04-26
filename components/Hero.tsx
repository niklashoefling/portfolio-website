import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 bg-black overflow-hidden">
      
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="glow-spot top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600 animate-[float_8s_ease-in-out_infinite]" />
        <div className="glow-spot bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 animate-[float_12s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="max-w-3xl relative z-10">
        <p className="text-sm font-mono text-zinc-500 mb-4 tracking-[0.2em] uppercase">
          Hi, I am
        </p>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          Niklas Höfling.
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-10 max-w-125">
          STAR Student in Business Information Systems @ SAP
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/projects"
            className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-transform active:scale-95"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 border border-zinc-800 text-white rounded-lg font-semibold hover:bg-zinc-900 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-zinc-500">
        <span className="text-[10px] font-mono tracking-widest uppercase opacity-50">scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent animate-bounce" />
      </div>
    </section>
  );
}