import { Reveal } from './reveal';
import { RandomLetterSwapText } from '@/components/ui/random-letter-swap';

export function FieldLogSection() {
  return (
    <section
      className="mx-auto w-[min(calc(100%-2rem),84rem)] pt-24 sm:w-[min(calc(100%-3rem),84rem)] sm:pt-28"
      id="history"
    >
      <div className="grid gap-12 lg:grid-cols-[18rem_1fr]">
        <Reveal>
          <p className="font-mono text-xs text-[#B7F34A]">$ git log --career</p>
          <RandomLetterSwapText
            className="mt-5 cursor-default font-sans text-5xl font-semibold tracking-[-0.05em] text-[#F0F3EF]"
            label="Field log"
          />
        </Reveal>
        <div className="border-l border-[#394038] pl-6 sm:pl-10">
          <Reveal className="relative pb-16">
            <span className="absolute -left-[29px] top-1 size-2 bg-[#B7F34A] sm:-left-[45px]" />
            <p className="font-mono text-[0.625rem] text-[#B7F34A]">JUN / SEP 2025</p>
            <h3 className="mt-3 font-sans text-3xl font-medium tracking-[-0.035em] text-[#E8ECE7]">
              Frontend Developer Intern
            </h3>
            <p className="mt-2 font-mono text-xs text-[#828A80]">
              Addis Ababa Innovation and Technology Development Bureau
            </p>
            <p className="mt-5 max-w-[44rem] font-sans text-[0.9375rem] leading-relaxed text-[#9CA39A]">
              Built frontend architecture, forms, dashboards, and API integrations for a
              government-wide social welfare management system.
            </p>
          </Reveal>
          <Reveal className="relative">
            <span className="absolute -left-[29px] top-1 size-2 bg-[#B7F34A] sm:-left-[45px]" />
            <p className="font-mono text-[0.625rem] text-[#B7F34A]">GRADUATED / 2026</p>
            <h3 className="mt-3 font-sans text-3xl font-medium tracking-[-0.035em] text-[#E8ECE7]">
              BSc Software Engineering
            </h3>
            <p className="mt-2 font-mono text-xs text-[#828A80]">
              Addis Ababa Science and Technology University
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
