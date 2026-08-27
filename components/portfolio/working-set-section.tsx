import { skillGroups } from './portfolio-data';
import { Reveal } from './reveal';

export function WorkingSetSection() {
  return (
    <section className="mx-auto grid w-[min(calc(100%-2rem),84rem)] gap-12 pb-24 pt-20 sm:w-[min(calc(100%-3rem),84rem)] sm:pb-28 lg:grid-cols-[18rem_1fr]">
      <Reveal>
        <p className="font-mono text-xs text-[#B7F34A]">$ cat stack.txt</p>
        <h2 className="mt-5 font-sans text-5xl font-semibold tracking-[-0.05em] text-[#F0F3EF]">
          Working set
        </h2>
      </Reveal>
      <Reveal className="grid gap-3 sm:grid-cols-2" delay={0.08}>
        {skillGroups.map(([group, skills]) => (
          <div className="border-l-2 border-[#B7F34A] bg-[#101310] p-5" key={group}>
            <p className="font-mono text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-[#D8DDD8]">
              {group}
            </p>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[#899087]">{skills}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
