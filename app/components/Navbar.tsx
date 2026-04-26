'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-6 backdrop-blur-sm bg-zinc-950/50">
        <Link href="/" className="font-bold text-xl tracking-tighter">
          N.
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-zinc-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-60 flex justify-end">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-zinc-900 w-64 min-h-full p-8 flex flex-col gap-6 shadow-2xl">
            <button
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mt-10 flex flex-col gap-4 text-sm font-medium text-zinc-400">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors py-2 border-b border-zinc-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
