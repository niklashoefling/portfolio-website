import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center px-6 bg-black text-center">
      {/* Subtiler Hintergrund-Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zinc-900/30 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        <p className="text-sm font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">
          Error 404
        </p>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          Lost in the peaks.
        </h1>
        
        <p className="text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed">
          The page you are looking for has been moved or doesn&apos;t exist. 
          Let&apos;s get you back to the base camp.
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}