"use client";

import type { PortfolioSliderProject } from "@/sanity/lib/portfolio";
import type { Locale } from "@/content/types";
import { cn } from "@/lib/cn";
import { portfolioProjectImageSeo } from "@/lib/seo-image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTOPLAY_MS = 5000;

export function PortfolioHeroSlider({
  projects,
  locale,
}: {
  projects: PortfolioSliderProject[];
  locale: Locale;
}) {
  const t = useTranslations("home");
  const tp = useTranslations("portfolio");
  const count = projects.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const regionRef = useRef<HTMLDivElement>(null);
  const isRtl = locale === "ar";

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const goTo = useCallback(
    (next: number) => {
      setActiveIndex(((next % count) + count) % count);
      setProgressKey((key) => key + 1);
    },
    [count],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!regionRef.current?.contains(document.activeElement) && document.activeElement !== document.body) {
        return;
      }
      if (event.key === "ArrowRight") goTo(activeIndex + (isRtl ? -1 : 1));
      if (event.key === "ArrowLeft") goTo(activeIndex + (isRtl ? 1 : -1));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, goTo, isRtl]);

  useEffect(() => {
    if (paused || reducedMotion || count <= 1) return;
    const timer = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [count, goNext, paused, reducedMotion, activeIndex]);

  if (count === 0) return null;

  const progress = ((activeIndex + 1) / count) * 100;

  return (
    <div
      ref={regionRef}
      className="mx-auto w-full min-w-0 max-w-6xl"
      role="region"
      aria-roledescription="carousel"
      aria-label={t("portfolioSliderLabel")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!regionRef.current?.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="relative h-[min(380px,78vw)] w-full overflow-hidden rounded-[20px] bg-surface-2 text-white sm:h-[420px] sm:rounded-[26px] lg:h-[460px]">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          const { alt: imageAlt, title: imageTitle } = portfolioProjectImageSeo(project, project.image);

          return (
            <article
              key={project.id}
              aria-hidden={!isActive}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                isActive ? "pointer-events-auto z-10 opacity-100" : "pointer-events-none z-0 opacity-0",
              )}
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.imageSrc}
                  alt={imageAlt}
                  title={imageTitle}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
                  className="h-full w-full object-cover object-top"
                  priority={index === 0}
                />
              </div>

              <div
                aria-hidden
                className={cn(
                  "absolute inset-0 z-[1] bg-linear-to-r from-black/70 via-black/35 to-black/10",
                  isRtl && "bg-linear-to-l",
                )}
              />

              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute z-[2] top-5 text-[clamp(3rem,11vw,7rem)] font-display font-bold leading-none text-white/15 sm:top-8",
                  isRtl ? "start-6 sm:start-10" : "end-6 sm:end-10",
                  isActive ? "opacity-100" : "opacity-0",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 z-[3] flex flex-col justify-end p-5 sm:p-[34px]",
                  "transition-[transform,opacity] duration-500 ease-out",
                  isActive ? "translate-y-0 opacity-100 delay-150" : "translate-y-5 opacity-0",
                )}
              >
                <div className="relative max-w-xl">
                  <span className="mb-2 inline-flex max-w-full rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide sm:mb-3 sm:text-xs">
                    {project.categoryTitle}
                  </span>
                  <h3 className="break-words font-display text-[clamp(1.35rem,4.5vw,2.8rem)] font-semibold leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 max-w-[480px] text-sm leading-relaxed text-white/90 sm:text-base">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isActive ? 0 : -1}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0c0d10] shadow-sm transition-colors hover:bg-white/90 sm:mt-5"
                  >
                    {tp("visitLiveSite")}
                    <ArrowUpRight className="size-4 shrink-0" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-3 flex w-full justify-center gap-2 sm:hidden">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={`dot-${project.id}`}
              type="button"
              onClick={() => goTo(index)}
              aria-label={project.title}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                isActive ? "w-6 bg-brand" : "w-2 bg-line hover:bg-brand/40",
              )}
            />
          );
        })}
      </div>

      <div className="mt-3 hidden w-full gap-2.5 sm:grid sm:grid-cols-5">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={project.title}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "relative min-w-0 overflow-hidden rounded-[14px] border bg-surface/80 px-3 py-2.5 text-start text-xs transition-colors",
                isActive ? "border-brand text-foreground" : "border-line text-foreground hover:border-brand/30",
              )}
            >
              <span className="line-clamp-1 font-semibold">{project.title}</span>
              <span className="mt-0.5 block text-muted">{String(index + 1).padStart(2, "0")}</span>
              {isActive && !reducedMotion ? (
                <span
                  key={progressKey}
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[3px] origin-left animate-[portfolio-thumb-progress_5s_linear_forwards] bg-brand rtl:origin-right"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-3 sm:mt-6 sm:gap-4">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-foreground transition-colors hover:border-brand/30 hover:text-brand sm:size-11"
          aria-label={t("portfolioPrev")}
        >
          <ChevronLeft className="size-5 rtl:rotate-180" />
        </button>

        <span className="min-w-12 text-center text-sm tabular-nums text-muted">
          {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>

        <div className="hidden h-1 w-[min(220px,36vw)] overflow-hidden rounded-full bg-line sm:block">
          <div
            className="h-full rounded-full bg-brand transition-[width] duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-foreground transition-colors hover:border-brand/30 hover:text-brand sm:size-11"
          aria-label={t("portfolioNext")}
        >
          <ChevronRight className="size-5 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}
