import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import type { Metadata } from 'next';
import { PortfolioBackground } from '@/components/portfolio/portfolio-background';
import { RandomLetterSwap } from '@/components/ui/random-letter-swap';

export const metadata: Metadata = {
  title: 'Page Not Found | Abel Mulat',
  description: 'The requested page could not be found.',
};

const navigation = [
  { href: '/#history', label: 'History' },
  { href: '/#work', label: 'Projects' },
] as const;

export default function NotFound() {
  return (
    <main className="relative isolate min-h-dvh overflow-hidden bg-[#0B0D0C] text-[#D8DDD8] selection:bg-[#B7F34A] selection:text-[#0B0D0C]">
      <PortfolioBackground />

      <div className="relative z-10 mx-auto grid min-h-dvh w-[min(calc(100%-2rem),84rem)] grid-rows-[auto_1fr_auto] sm:w-[min(calc(100%-3rem),84rem)]">
        <header className="flex min-h-[72px] items-center justify-between border-b border-[#30352F] font-mono">
          <a className="group flex items-center gap-3" href="/" aria-label="Return to homepage">
            <span className="grid size-8 place-items-center border border-[#4B5249] text-[0.625rem] font-bold text-[#B7F34A] transition-colors group-hover:border-[#B7F34A]">
              AM
            </span>
            <span className="hidden text-[0.6875rem] text-[#B7F34A] sm:inline">
              abel@portfolio:~$
            </span>
          </a>

          <nav
            className="hidden items-center gap-7 text-[0.6875rem] uppercase tracking-[0.1em] sm:flex"
            aria-label="404 page navigation"
          >
            {navigation.map((item) => (
              <RandomLetterSwap
                className="font-medium text-[#899087] transition-colors hover:text-[#B7F34A] focus-visible:text-[#B7F34A] focus-visible:outline-none"
                href={item.href}
                key={item.label}
                label={item.label}
              />
            ))}
          </nav>

          <a
            className="flex items-center gap-2 border border-[#4B5249] px-3 py-2 text-[0.6875rem] uppercase tracking-[0.08em] transition-colors hover:border-[#B7F34A] hover:text-[#B7F34A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B7F34A]"
            href="mailto:mulatabel0@gmail.com"
            aria-label="Let's talk"
          >
            <span className="hidden sm:inline">Let&apos;s talk</span>
            <ArrowUpRight size={14} weight="bold" />
          </a>
        </header>

        <section className="grid min-w-0 items-center gap-10 py-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:py-16">
          <div className="relative z-10 min-w-0">
            <p className="font-mono text-xs text-[#B7F34A]">$ route --status</p>
            <h1 className="mt-5 max-w-[12ch] font-sans text-[clamp(3.5rem,7vw,6.75rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[#F0F3EF]">
              Route not found.
            </h1>
            <p className="mt-7 max-w-[32rem] font-sans text-base leading-relaxed text-[#9CA39A] sm:text-lg">
              This page may have moved, or the address might be mistyped. The main site is still
              online.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#B7F34A] px-6 font-sans text-sm font-bold text-[#0B0D0C] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B7F34A] active:translate-y-px sm:w-auto"
                href="/"
              >
                <ArrowLeft size={18} weight="bold" />
                Return home
              </a>
              <a
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 border border-[#4B5249] px-6 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#D8DDD8] transition-colors hover:border-[#B7F34A] hover:text-[#B7F34A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B7F34A] active:translate-y-px sm:w-auto"
                href="/#work"
              >
                View projects
                <ArrowUpRight size={16} weight="bold" />
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[15rem] min-w-0 items-center justify-center overflow-hidden border-t border-[#30352F] sm:min-h-[20rem] lg:min-h-[30rem] lg:border-l lg:border-t-0">
            <p
              className="select-none font-sans text-[clamp(9rem,27vw,23rem)] font-semibold leading-none tracking-[-0.09em] text-[#111511] [-webkit-text-stroke:1px_#394038]"
              aria-hidden="true"
            >
              404
            </p>
            <div className="absolute bottom-4 left-5 border-l-2 border-[#B7F34A] pl-4 font-mono text-[0.625rem] uppercase tracking-[0.1em] sm:bottom-7 sm:left-8">
              <p className="text-[#B7F34A]">Error code</p>
              <p className="mt-2 text-[#899087]">Page not found</p>
            </div>
          </div>
        </section>

        <footer className="flex min-h-14 items-center justify-between gap-4 border-t border-[#30352F] font-mono text-[0.625rem] uppercase tracking-[0.08em] text-[#697067]">
          <span>HTTP / 404</span>
          <span className="text-right">The rest of the portfolio is operational</span>
        </footer>
      </div>
    </main>
  );
}
