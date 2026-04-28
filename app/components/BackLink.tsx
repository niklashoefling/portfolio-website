import Link from 'next/link';

interface BackLinkProps {
  href?: string;
  label?: string;
}

export default function BackLink({ href = '/', label = 'Back to Home' }: BackLinkProps) {
  return (
    <nav className="py-12 px-6 md:px-16 lg:px-32">
      <Link
        href={href}
        className="text-xs font-mono text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>{' '}
        {label}
      </Link>
    </nav>
  );
}
