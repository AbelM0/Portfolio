import { Reveal } from './reveal';

const statusItems = [
  ['Currently', 'Open to opportunities'],
  ['Focus', 'AI product engineering'],
  ['Graduated', '2026'],
] as const;

export function StatusStripSection() {
  return (
    <section className="border-y border-[#30352F] bg-[#0E110E]">
      <div className="mx-auto grid w-[min(calc(100%-2rem),84rem)] sm:w-[min(calc(100%-3rem),84rem)] md:grid-cols-3">
        {statusItems.map(([title, value], index) => (
          <Reveal
            className={`py-6 md:px-7 ${index > 0 ? 'border-t border-[#30352F] md:border-l md:border-t-0' : ''}`}
            delay={index * 0.05}
            key={title}
          >
            <p className="font-mono text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[#737A70]">
              {title}
            </p>
            <p className="mt-2 font-sans text-base font-semibold tracking-[-0.02em] text-[#E8ECE7]">
              {value}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
