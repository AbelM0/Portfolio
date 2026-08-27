import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import RandomLetterSwapNav from '@/components/ui/m-random-letter-swap-1';

export function SiteHeader() {
  return (
    <header className="flex min-h-[72px] items-center justify-between border-b border-[#30352F] font-mono">
      <a className="group flex items-center gap-3" href="#top">
        <span className="grid size-8 place-items-center border border-[#4B5249] text-[0.625rem] font-bold text-[#B7F34A] transition-colors group-hover:border-[#B7F34A]">
          AM
        </span>
        <span className="text-[0.6875rem] text-[#B7F34A]">abel@portfolio:~$</span>
      </a>
      <RandomLetterSwapNav />
      <a
        className="flex items-center gap-2 border border-[#4B5249] px-3 py-2 text-[0.6875rem] uppercase tracking-[0.08em] transition-colors hover:border-[#B7F34A] hover:text-[#B7F34A]"
        href="mailto:mulatabel0@gmail.com"
      >
        Let&apos;s talk
        <ArrowUpRight size={14} weight="bold" />
      </a>
    </header>
  );
}
