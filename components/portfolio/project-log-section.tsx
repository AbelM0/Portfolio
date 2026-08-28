import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import { RandomLetterSwapText } from '@/components/ui/random-letter-swap';
import { projects } from './portfolio-data';
import { Reveal } from './reveal';

export function ProjectLogSection() {
  return (
    <section
      className="mx-auto w-[min(calc(100%-2rem),84rem)] pb-24 sm:w-[min(calc(100%-3rem),84rem)] sm:pb-32"
      id="work"
    >
      <Reveal className="border-t border-[#394038] pt-5">
        <p className="font-mono text-[0.625rem] font-semibold tracking-[0.08em] text-[#B7F34A]">
          $ ls ./selected-work
        </p>
        <RandomLetterSwapText
          className="mt-5 cursor-default font-sans text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[#F0F3EF]"
          label="Project log"
        />
        <p className="mt-5 max-w-[38rem] font-sans text-sm leading-relaxed text-[#899087]">
          A working record of systems built across applied AI, public service, and real-time
          collaboration.
        </p>
      </Reveal>

      <div className="mt-16 space-y-20 sm:mt-20">
        {projects.map((project, index) => (
          <Reveal
            className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"
            delay={index * 0.04}
            key={project.title}
          >
            <div className="relative min-h-[320px] overflow-hidden border border-[#30352F] bg-[#101310]">
              <Image
                className="object-contain p-2 opacity-95 saturate-100 transition-opacity duration-300 hover:opacity-100 sm:p-3"
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute right-4 top-4 flex gap-2">
                {project.liveUrl ? (
                  <a
                    className="grid size-11 place-items-center border border-[#4B5249] bg-[#0B0D0C]/90 text-[#D8DDD8] transition-colors hover:border-[#B7F34A] hover:text-[#B7F34A]"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} live site`}
                    title="Open live site"
                  >
                    <ArrowUpRight size={18} weight="bold" />
                  </a>
                ) : (
                  <span
                    className="grid size-11 cursor-not-allowed place-items-center border border-[#4B5249] bg-[#0B0D0C]/90 text-[#697067]"
                    aria-label={`${project.title} has no public deployment`}
                    aria-disabled="true"
                    title="No public deployment"
                  >
                    <ArrowUpRight size={18} weight="bold" />
                  </span>
                )}
                {project.githubUrl ? (
                  <a
                    className="grid size-11 place-items-center border border-[#4B5249] bg-[#0B0D0C]/90 text-[#D8DDD8] transition-colors hover:border-[#B7F34A] hover:text-[#B7F34A]"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    title="View on GitHub"
                  >
                    <GithubLogo size={19} weight="bold" />
                  </a>
                ) : (
                  <span
                    className="grid size-11 cursor-not-allowed place-items-center border border-[#4B5249] bg-[#0B0D0C]/90 text-[#697067]"
                    aria-label={`${project.title} GitHub repository is private`}
                    aria-disabled="true"
                    title="Private GitHub repository"
                  >
                    <GithubLogo size={19} weight="bold" />
                  </span>
                )}
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 font-mono text-[0.625rem] uppercase tracking-[0.1em]">
                <span className="border border-[#4B5249] bg-[#0B0D0C]/90 px-3 py-2 text-[#B7F34A]">
                  PRJ_0{index + 1}
                </span>
                <span className="text-right text-[#D8DDD8]">{project.type}</span>
              </div>
            </div>
            <article className="self-center">
              <div className="flex justify-between font-mono text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#697067]">
                <span>Build / {project.year}</span>
                <span>{project.privateNote ? 'Private / Testing' : 'Selected'}</span>
              </div>
              <h3 className="mt-5 max-w-[16ch] font-sans text-[clamp(2.2rem,4vw,4.2rem)] font-semibold leading-[0.95] tracking-[-0.055em] text-[#E8ECE7]">
                {project.title}
              </h3>
              <p className="mt-6 max-w-[40rem] font-sans text-base leading-relaxed text-[#9CA39A]">
                {project.description}
              </p>
              {project.privateNote ? (
                <p className="mt-5 border border-[#4B5249] bg-[#101310] px-4 py-3 font-mono text-[0.625rem] uppercase tracking-[0.08em] text-[#B7F34A]">
                  {project.privateNote}
                </p>
              ) : null}
              <div className="mt-7 border-l-2 border-[#B7F34A] pl-5">
                <p className="font-mono text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#B7F34A]">
                  Build highlight
                </p>
                <p className="mt-2 max-w-[40rem] font-sans text-sm leading-relaxed text-[#899087]">
                  {project.contribution}
                </p>
              </div>
              <div className="mt-7">
                <p className="font-mono text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[#D8DDD8]">
                  Stack
                </p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.625rem] text-[#B7F34A]">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
