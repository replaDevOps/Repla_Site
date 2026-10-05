"use client";

import { TestimonialCard } from "@/components/home/TestimonialCard";
import { testimonials } from "@/content/testimonials";
import type { Locale } from "@/content/types";
import { cn } from "@/lib/cn";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 5000;

type TestimonialsCarouselProps = {
  locale: Locale;
};

export function TestimonialsCarousel({ locale }: TestimonialsCarouselProps) {
  const t = useTranslations("home");
  const items = testimonials;
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const goPrev = useCallback(() => {
    goTo(index - 1);
  }, [goTo, index]);

  const goNext = useCallback(() => {
    goTo(index + 1);
  }, [goTo, index]);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, paused, reducedMotion, index]);

  return (
    <div
      ref={carouselRef}
      className="mx-auto flex w-full min-w-0 max-w-3xl items-stretch gap-2.5 sm:gap-4"
      role="region"
      aria-roledescription="carousel"
      aria-label={t("testimonialsCarouselLabel")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!carouselRef.current?.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
      onTouchStart={(event) => {
        touchStartY.current = event.touches[0]?.clientY ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStartY.current;
        const end = event.changedTouches[0]?.clientY;
        touchStartY.current = null;
        if (start == null || end == null) return;
        const delta = end - start;
        if (Math.abs(delta) < 48) return;
        if (delta > 0) goPrev();
        else goNext();
      }}
    >
      <div className="relative min-w-0 flex-1" aria-live="polite">
        {items.map((item, slideIndex) => {
          const isActive = slideIndex === index;

          return (
            <div
              key={item.id}
              className={cn(
                "motion-safe:transition-opacity motion-safe:duration-500",
                isActive
                  ? "relative z-10 opacity-100"
                  : "pointer-events-none absolute inset-0 z-0 opacity-0",
              )}
              aria-hidden={!isActive}
            >
              <TestimonialCard
                locale={locale}
                name={item.name}
                role={item.role}
                company={item.company}
                location={item.location}
                review={item.review}
                rating={item.rating}
                initials={item.initials}
              />
            </div>
          );
        })}
      </div>

      <div className="flex w-8 shrink-0 flex-col items-center justify-between self-stretch py-1 sm:w-10 sm:py-2">
        <button
          type="button"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface/80 text-foreground backdrop-blur-sm transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:h-9 sm:w-9"
          aria-label={t("testimonialsPrev")}
          onClick={goPrev}
        >
          <ChevronUp className="h-4 w-4" aria-hidden="true" />
        </button>

        <div
          className="flex min-h-0 flex-1 flex-col items-center justify-center gap-1.5 py-2 sm:gap-2.5 sm:py-3"
          role="tablist"
          aria-label={t("testimonialsCarouselLabel")}
        >
          {items.map((item, dotIndex) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={dotIndex === index}
              aria-label={t("testimonialsGoToSlide", { index: dotIndex + 1 })}
              className={cn(
                "w-1.5 shrink-0 rounded-full border-0 bg-line p-0 transition-all motion-safe:duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                dotIndex === index ? "h-5 bg-brand sm:h-[26px]" : "h-1.5 hover:bg-brand/40",
              )}
              onClick={() => goTo(dotIndex)}
            />
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface/80 text-foreground backdrop-blur-sm transition-colors hover:border-brand hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:h-9 sm:w-9"
          aria-label={t("testimonialsNext")}
          onClick={goNext}
        >
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
