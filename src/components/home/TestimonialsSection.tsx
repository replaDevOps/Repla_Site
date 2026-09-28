import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/content/types";
import { getTranslations } from "next-intl/server";

export async function TestimonialsSection({ locale }: { locale: Locale }) {
  const t = await getTranslations("home");

  return (
    <section
      className="relative overflow-x-clip border-t border-line bg-surface-2 py-14 sm:py-16 lg:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 grid-bg opacity-30 sm:opacity-35" />
        <div className="glow-orb testimonials-bg-orb absolute -top-16 start-[5%] h-48 w-48 opacity-60 sm:-top-24 sm:start-[10%] sm:h-80 sm:w-80 sm:opacity-70" />
        <div className="glow-orb testimonials-bg-orb-alt absolute -bottom-20 end-[4%] h-56 w-56 opacity-45 sm:-bottom-28 sm:end-[8%] sm:h-96 sm:w-96 sm:opacity-55" />
        <div className="testimonials-bg-shimmer absolute inset-0" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-brand">
              {t("testimonialsEyebrow")}
            </p>
            <h2
              id="testimonials-heading"
              className="break-words text-balance font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-foreground"
            >
              {t("testimonialsTitle")}
            </h2>
            <p className="mt-4 text-base font-normal leading-relaxed text-muted sm:text-lg">
              {t("testimonialsSubtitle")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 w-full sm:mt-10">
          <TestimonialsCarousel locale={locale} />
        </Reveal>
      </div>
    </section>
  );
}
