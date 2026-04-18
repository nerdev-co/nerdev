'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ScrambleLink } from '@/components/ui/scramble-link';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/work', label: 'WORK' },
  { href: '/about', label: 'ABOUT' },
  { href: '/process', label: 'PROCESS' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    setActivePath(window.location.pathname);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-bg/85 backdrop-blur-xl border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="nerdev" className="h-8 w-auto" />
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <ScrambleLink
                key={link.href}
                href={link.href}
                className={`font-mono text-xs tracking-wider transition-colors ${
                  activePath === link.href ? 'text-orange' : 'text-text-2'
                }`}
              >
                {activePath === link.href ? `● ${link.label}` : link.label}
              </ScrambleLink>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 bg-orange text-white font-mono text-xs font-bold uppercase tracking-wider border border-orange shadow-[2px_2px_0_#b34500] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_#b34500] transition-all"
          >
            Start a project →
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-text transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-text transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-text transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}