'use client';

import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    id: '01',
    title: 'Meeting Intelligence',
    type: 'AI product',
    description:
      'Turns meeting audio into searchable transcripts, concise summaries, key decisions, and structured action items.',
    stack: ['Next.js', 'NestJS', 'Claude'],
    mark: 'MI',
  },
  {
    id: '02',
    title: 'AI Operations Assistant',
    type: 'Document intelligence',
    description:
      'A bilingual assistant helping Ethiopian SMEs understand invoices, receipts, PDFs, and expenses.',
    stack: ['Next.js', 'Supabase', 'pgvector'],
    mark: 'AO',
  },
  {
    id: '03',
    title: 'Women, Children & Youth Affairs',
    type: 'Civic technology',
    description:
      'A government platform supporting adoption, complaints, applicant portals, care centers, and complex case workflows.',
    stack: ['React', 'TypeScript', 'PostgreSQL'],
    mark: 'WC',
  },
];

const stack = [
  'TypeScript',
  'Next.js',
  'React',
  'NestJS',
  'Python',
  'PostgreSQL',
  'Supabase',
  'pgvector',
  'LangGraph',
  'Vercel AI SDK',
  'Zod',
  'Git',
];

export default function Page() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-10">
        <a
          href="#top"
          className="font-mono text-sm font-bold tracking-[-0.08em]"
          aria-label="Abel Mulat home"
        >
          abel<span className="text-primary">/</span>mulat
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#work" className="hover:text-foreground">
            Work
          </a>
          <a href="#about" className="hover:text-foreground">
            About
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </div>
        <a
          href="mailto:mulatabel0@gmail.com"
          className="border border-foreground px-4 py-2 text-xs font-medium transition-colors hover:bg-foreground hover:text-background"
        >
          Get in touch <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero-grid relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-28 pt-20 md:px-10 md:pt-32 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-primary">
              <span className="h-2 w-2 bg-primary" /> AI engineer / Addis Ababa
            </div>
            <h1 className="max-w-4xl text-balance text-[clamp(4rem,10vw,9rem)] font-medium leading-[.86] tracking-[-.09em]">
              BUILDING
              <br />
              <span className="text-muted-foreground">USEFUL</span>
              <br />
              INTELLIGENCE
            </h1>
          </div>
          <div className="border-l border-primary pl-6 lg:mb-2">
            <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
              I&apos;m Abel Mulat, an AI engineer with a full-stack foundation. I build thoughtful,
              production-ready AI products for the web.
            </p>
            <a
              href="#work"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3"
            >
              View selected work <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl justify-between border-t border-border px-6 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:px-10">
          <span>Independent engineer</span>
          <span>Available for select projects</span>
          <span className="hidden sm:inline">Scroll to explore ↓</span>
        </div>
      </section>

      <section id="work" className="border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-6 md:px-10">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Selected work
            </p>
            <p className="font-mono text-xs text-muted-foreground">2023—26</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl lg:grid-cols-[1fr_1fr]">
          <div className="project-feature flex min-h-[28rem] flex-col justify-between border-t border-border p-6 md:p-10 lg:border-r">
            <div className="flex items-start justify-between">
              <span className="font-mono text-sm text-primary">{projects[activeProject].id}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {projects[activeProject].type}
              </span>
            </div>
            <div>
              <div className="project-mark mb-8">{projects[activeProject].mark}</div>
              <h2 className="max-w-lg text-4xl tracking-[-.06em] md:text-6xl">
                {projects[activeProject].title}
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                {projects[activeProject].description}
              </p>
            </div>
          </div>
          <div className="border-t border-border">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`flex w-full items-start justify-between border-b border-border p-6 text-left transition-colors md:p-10 ${activeProject === index ? 'bg-secondary' : 'hover:bg-secondary/50'}`}
              >
                <div>
                  <span className="font-mono text-xs text-primary">{project.id}</span>
                  <h3 className="mt-8 text-xl tracking-tight md:text-2xl">{project.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className={activeProject === index ? 'text-primary' : 'text-muted-foreground'}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:px-10 lg:grid-cols-[.7fr_1.3fr]"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">The toolkit</p>
          <p className="mt-4 text-muted-foreground">
            Tools I use to turn ideas into reliable products.
          </p>
        </div>
        <div className="flex flex-wrap content-start gap-x-8 gap-y-5">
          {stack.map((item, index) => (
            <span
              key={item}
              className={`text-2xl tracking-[-.04em] transition-colors hover:text-primary md:text-3xl ${index % 4 === 0 ? 'text-primary' : ''}`}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-28 md:px-10 lg:grid-cols-[.7fr_1.3fr]">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Contact</p>
          <div>
            <h2 className="max-w-3xl text-balance text-5xl leading-[.92] tracking-[-.075em] md:text-8xl">
              Have an idea?
              <br />
              <span className="text-muted-foreground">Let&apos;s talk.</span>
            </h2>
            <a
              href="mailto:mulatabel0@gmail.com"
              className="mt-12 inline-flex items-center gap-3 border-b border-foreground pb-3 text-lg hover:text-primary"
            >
              mulatabel0@gmail.com <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-4 border-t border-border px-6 py-6 text-xs text-muted-foreground md:flex-row md:px-10">
          <span>© 2026 Abel Mulat</span>
          <span className="flex items-center gap-2">
            <MapPin size={13} /> Addis Ababa, Ethiopia{' '}
            <a
              href="https://linkedin.com/in/abel-mulat-517b23297"
              className="ml-4 hover:text-foreground"
            >
              LinkedIn
            </a>
            <a href="mailto:mulatabel0@gmail.com" className="hover:text-foreground">
              <Mail size={14} />
            </a>
          </span>
        </footer>
      </section>
    </main>
  );
}
