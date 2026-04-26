export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 py-12 px-6 md:px-16 lg:px-32 text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-xs font-mono uppercase tracking-widest">
            Copyright © {currentYear} — Niklas Höfling
          </p>
        </div>

        <div className="flex gap-8 text-sm font-medium items-center">
          <a
            href="/contact"
            className="hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            Contact
          </a>
          <a
            href="https://github.com/niklashoefling"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="GitHub profile (opens in new tab)"
            className="hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/niklas-ralf-h%C3%B6fling-6834b4382/"
            target="_blank"
            rel="me noopener noreferrer"
            aria-label="LinkedIn profile (opens in new tab)"
            className="hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="/impressum"
            className="hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
}
