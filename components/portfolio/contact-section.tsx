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
      <div className="mx-auto w-full max-w-[82rem] px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-[15ch] text-balance font-sans text-[clamp(3.25rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-[#F0F3EF]">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-8 max-w-[46rem] font-sans text-lg leading-[1.75] text-[#9CA39A]">
            I&apos;m open to AI and software engineering roles, product collaborations, and
            technically ambitious projects. Email is the best way to reach me.
          </p>
        </Reveal>

        <div className="mt-14 grid border-y border-[#394038] md:grid-cols-3">
          {contactItems.map(([ContactIcon, title, value], index) => (
            <Reveal delay={index * 0.05} key={title}>
              <div
                className={`flex min-h-[170px] flex-col p-6 sm:p-8 ${index > 0 ? 'border-t border-[#394038] md:border-l md:border-t-0' : ''}`}
              >
                <ContactIcon className="text-[#B7F34A]" size={34} weight="regular" />
                <h3 className="mt-auto font-sans text-xl font-semibold text-[#F0F3EF]">{title}</h3>
                <p className="mt-3 font-mono text-xs leading-relaxed text-[#929A90]">{value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col gap-4 sm:flex-row" delay={0.08}>
          <a
            className="inline-flex min-h-16 items-center justify-center gap-3 bg-[#B7F34A] px-8 font-sans text-sm font-bold text-[#0B0D0C] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B7F34A] active:translate-y-px"
            href="mailto:mulatabel0@gmail.com"
          >
            <PaperPlaneTilt size={20} weight="bold" />
            Send me an email
          </a>
          <a
            className="inline-flex min-h-16 items-center justify-center gap-3 border border-[#4B5249] px-8 font-mono text-sm font-semibold text-[#D8DDD8] transition-colors hover:border-[#B7F34A] hover:text-[#B7F34A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B7F34A] active:translate-y-px"
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
