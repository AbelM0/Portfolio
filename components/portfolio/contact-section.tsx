import {
  ArrowUpRight,
  EnvelopeSimple,
  MapPin,
  PaperPlaneTilt,
  Phone,
} from '@phosphor-icons/react/dist/ssr';
import { Reveal } from './reveal';

const contactItems = [
  [EnvelopeSimple, 'Email', 'mulatabel0@gmail.com'],
  [Phone, 'Phone', '+251911677687'],
  [MapPin, 'Location', 'Addis Ababa, Ethiopia'],
] as const;

export function ContactSection() {
  return (
    <footer
      className="border-t border-[#30352F] bg-[#0E110E] py-24 text-[#D8DDD8] sm:py-28"
      id="contact"
    >
      <div className="mx-auto w-[min(calc(100%-2rem),82rem)] sm:w-[min(calc(100%-3rem),82rem)]">
        <Reveal>
          <h2 className="font-sans text-[clamp(3.25rem,7vw,6.5rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-[#F0F3EF]">
            Get in touch
          </h2>
          <span className="mt-6 block h-1.5 w-28 bg-[#B7F34A]" />
          <p className="mt-8 max-w-[46rem] font-sans text-lg leading-[1.75] text-[#9CA39A]">
            I&apos;m always open to new opportunities, collaborations, and interesting projects.
            Whether you have a question or just want to say hello, feel free to reach out.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {contactItems.map(([ContactIcon, title, value], index) => (
            <Reveal delay={index * 0.05} key={title}>
              <article className="group flex min-h-[220px] flex-col border border-[#394038] bg-[#101310] p-6 transition-[transform,border-color,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#B7F34A] hover:bg-[#131712] motion-reduce:transform-none sm:p-8">
                <ContactIcon
                  className="text-[#B7F34A] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 motion-reduce:transform-none"
                  size={34}
                  weight="regular"
                />
                <h3 className="mt-auto font-sans text-xl font-semibold text-[#F0F3EF]">
                  {title}
                </h3>
                <p className="mt-3 font-mono text-xs leading-relaxed text-[#929A90]">{value}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col gap-4 sm:flex-row" delay={0.08}>
          <a
            className="inline-flex min-h-16 items-center justify-center gap-3 bg-[#B7F34A] px-8 font-sans text-sm font-bold text-[#0B0D0C] transition-opacity hover:opacity-90 active:translate-y-px"
            href="mailto:mulatabel0@gmail.com"
          >
            <PaperPlaneTilt size={20} weight="bold" />
            Send me an email
          </a>
          <a
            className="inline-flex min-h-16 items-center justify-center gap-3 border border-[#4B5249] px-8 font-mono text-sm font-semibold text-[#D8DDD8] transition-colors hover:border-[#B7F34A] hover:text-[#B7F34A] active:translate-y-px"
            href="/Abel_Mulat_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            title="Open Abel Mulat's resume in a new tab"
          >
            View resume
            <ArrowUpRight size={18} weight="bold" />
          </a>
        </Reveal>
      </div>
    </footer>
  );
}
