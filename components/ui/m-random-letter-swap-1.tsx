'use client';

import { RandomLetterSwap } from '@/components/ui/random-letter-swap';

const links = [
  { href: '#history', label: 'History' },
  { href: '#work', label: 'Projects' },
] as const;

export default function RandomLetterSwapNav() {
  return (
    <nav
      className="hidden items-center gap-7 text-[0.6875rem] uppercase tracking-[0.1em] sm:flex"
      aria-label="Primary navigation"
    >
      {links.map((link) => (
        <RandomLetterSwap
          className="cursor-pointer font-medium text-[#899087] transition-colors hover:text-[#B7F34A] focus-visible:text-[#B7F34A] focus-visible:outline-none"
          href={link.href}
          key={link.label}
          label={link.label}
          staggerDuration={0.025}
          transition={{ duration: 0.6, type: 'spring' }}
        />
      ))}
    </nav>
  );
}
