import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-6 backdrop-blur-sm bg-zinc-950/50">
      <Link href="/" className="font-bold text-xl tracking-tighter">
        N.
      </Link>
      <div className="flex gap-8 text-sm font-medium text-zinc-400">
        <Link href="/#about" className="hover:text-zinc-300 transition-colors">
          About
        </Link>
        <Link
          href="/#projects"
          className="hover:text-zinc-300 transition-colors"
        >
          Projects
        </Link>
        <Link href="/contact" className="hover:text-zinc-300 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
