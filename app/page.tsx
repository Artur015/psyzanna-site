import {
  focusAreas,
  pricingItems,
  principles,
  steps,
} from "@/app/sections/home-content";
import { AboutSection } from "@/app/sections/about-section";
import { HeroSection } from "@/app/sections/hero-section";
import { PricingSection } from "@/app/sections/pricing-section";
import { QuestionnaireSection } from "@/app/sections/questionnaire-section";
import { ServicesSection } from "@/app/sections/services-section";
import { SiteFooter } from "@/app/sections/site-footer";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(194,156,255,0.45),_transparent_48%),radial-gradient(circle_at_top_right,_rgba(104,75,123,0.22),_transparent_36%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_bottom_right,_rgba(104,75,123,0.22),_transparent_38%),radial-gradient(circle_at_bottom_left,_rgba(237,224,255,0.75),_transparent_44%)]"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-12 pt-4 sm:px-8 sm:pt-5 lg:px-10">
        <header className="mb-8 rounded-[2rem] border border-white/55 bg-white/72 px-4 py-3 shadow-[0_12px_40px_rgba(52,26,92,0.08)] backdrop-blur sm:rounded-full sm:px-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#top"
              className="max-w-full text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-[var(--accent-deep)] sm:text-sm sm:tracking-[0.28em]"
            >
              Жанна Кононенко
            </a>
            <nav className="flex w-full flex-wrap items-center gap-3 text-sm text-[var(--muted-foreground)] sm:w-auto">
              <a href="#about" className="transition hover:text-[var(--accent-deep)]">
                О работе
              </a>
              <a
                href="#services"
                className="transition hover:text-[var(--accent-deep)]"
              >
                Направления
              </a>
              <a
                href="#questionnaire"
                className="rounded-full bg-[var(--accent-deep)] px-4 py-2 font-medium text-white transition hover:opacity-90"
              >
                Записаться
              </a>
            </nav>
          </div>
        </header>

        <main id="top" className="flex flex-1 flex-col gap-7">
          <HeroSection />
          <AboutSection principles={principles} />
          <ServicesSection focusAreas={focusAreas} />
          <PricingSection pricingItems={pricingItems} />
          <QuestionnaireSection steps={steps} />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
