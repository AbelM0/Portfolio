import { ContactSection } from '@/components/portfolio/contact-section';
import { FieldLogSection } from '@/components/portfolio/field-log-section';
import { HeroSection } from '@/components/portfolio/hero-section';
import { PortfolioBackground } from '@/components/portfolio/portfolio-background';
import { ProjectLogSection } from '@/components/portfolio/project-log-section';
import { SiteHeader } from '@/components/portfolio/site-header';
import { StatusStripSection } from '@/components/portfolio/status-strip-section';
import { WorkingSetSection } from '@/components/portfolio/working-set-section';

export default function Page() {
  return (
    <main
      id="top"
      className="relative isolate min-h-dvh bg-[#0B0D0C] text-[#D8DDD8] selection:bg-[#B7F34A] selection:text-[#0B0D0C]"
    >
      <PortfolioBackground />
      <div className="relative z-10">
        <div className="mx-auto w-[min(calc(100%-2rem),84rem)] sm:w-[min(calc(100%-3rem),84rem)]">
          <SiteHeader />
          <HeroSection />
        </div>
        <StatusStripSection />
        <FieldLogSection />
        <WorkingSetSection />
        <ProjectLogSection />
        <ContactSection />
      </div>
    </main>
  );
}
