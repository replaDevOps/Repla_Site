"use client";

import { PortfolioProjectModal } from "@/components/portfolio/PortfolioProjectModal";
import type { PortfolioSliderProject } from "@/sanity/lib/portfolio";
import type { Locale } from "@/content/types";
import { cn } from "@/lib/cn";
import { portfolioProjectImageSeo } from "@/lib/seo-image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";

const TITLE_LINE_REM = 2.6;
const SLIDE_EASE = "cubic-bezier(0.7, 0, 0.2, 1)";

export function PortfolioSplitSlider({
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
  const [reducedMotion, setReducedMotion] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [needsSeeMore, setNeedsSeeMore] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const isRtl = locale === "ar";

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    setModalOpen(false);
  }, [activeIndex]);

  useEffect(() => {
    const el = descRef.current;
    if (!el) return;

    const measure = () => {
      setNeedsSeeMore(el.scrollHeight > el.clientHeight + 1);
    };

    const frame = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [activeIndex, projects]);

  const goTo = useCallback(
    (next: number) => {
      setActiveIndex(((next % count) + count) % count);
    },
    [count],
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (modalOpen) return;
      if (!regionRef.current?.contains(document.activeElement) && document.activeElement !== document.body) {
        return;
      }
      if (event.key === "ArrowRight") goTo(activeIndex + (isRtl ? -1 : 1));
      if (event.key === "ArrowLeft") goTo(activeIndex + (isRtl ? 1 : -1));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, goTo, isRtl, modalOpen]);

  if (count === 0) return null;

  const active = projects[activeIndex]!;
  const progress = ((activeIndex + 1) / count) * 100;
  const showMotion = !reducedMotion;

  return (
    <div
      ref={regionRef}
      className="mx-auto w-full min-w-0 max-w-7xl"
      role="region"
      aria-roledescription="carousel"
      aria-label={t("portfolioSliderLabel")}
    >
      <div className="portfolio-split grid grid-cols-1 gap-4 sm:gap-[18px] md:grid-cols-2 md:h-[420px] md:grid-rows-1">
        {/* Left: counter + title mask + copy */}
        <div className="flex min-h-0 flex-col justify-between overflow-hidden rounded-[22px] border border-line bg-surface/80 p-5 sm:rounded-[26px] sm:p-6 md:h-full md:p-[30px]">
          <div
            className="font-display text-[clamp(2.5rem,9vw,5rem)] font-extrabold leading-none tracking-[-0.04em] text-brand"
            aria-hidden
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </div>

          <div className="min-w-0">
            <div
              className="portfolio-split-mask overflow-hidden"
              style={{ height: `${TITLE_LINE_REM}rem` }}
            >
              <div
                className="portfolio-split-titles will-change-transform"
                style={{
                  transform: `translateY(${-activeIndex * TITLE_LINE_REM}rem)`,
                  transition: showMotion ? `transform 0.6s ${SLIDE_EASE}` : "none",
                }}
              >
                {projects.map((project) => (
                  <h3
                    key={project.id}
                    className="m-0 truncate font-display text-[clamp(1.15rem,3.8vw,1.8rem)] font-semibold leading-[2.6rem]"
                    style={{ height: `${TITLE_LINE_REM}rem` }}
                  >
                    {project.title}
                  </h3>
                ))}
              </div>
            </div>

            <div
              ref={descRef}
              key={`desc-${active.id}`}
              className="portfolio-split-summary relative mt-3 mb-2.5 min-h-0 overflow-hidden break-words text-sm leading-relaxed text-muted [overflow-wrap:anywhere] sm:text-[15px]"
            >
              {needsSeeMore ? (
                <>
                  <span className="portfolio-split-summary-spacer" aria-hidden />
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="portfolio-split-summary-more text-sm font-medium leading-relaxed text-brand transition-opacity hover:opacity-80 sm:text-[15px]"
                  >
                    {tp("seeMore")}
                  </button>
                </>
              ) : null}
              <p className="mb-0 break-words [overflow-wrap:anywhere]">{active.description}</p>
            </div>

            <div className="mb-3 flex flex-wrap gap-1.5">
              <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-foreground/80">
                {active.categoryTitle}
              </span>
            </div>

            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-foreground px-3.5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:w-auto"
            >
              {tp("visitLiveSite")}
              <ArrowUpRight className="size-4 shrink-0" />
            </a>
          </div>
        </div>

        {/* Right: bordered image panel — full box, no crop */}
        <div className="portfolio-split-stage relative order-first h-[220px] w-full min-w-0 overflow-hidden rounded-[22px] border border-line bg-surface-2 sm:h-[260px] sm:rounded-[26px] md:order-none md:h-full">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const { alt: imageAlt, title: imageTitle } = portfolioProjectImageSeo(
              project,
              project.image,
            );

            return (
              <div
                key={project.id}
                aria-hidden={!isActive}
                className={cn(
                  "portfolio-split-wipe absolute inset-0",
                  isActive && "is-active",
                  !showMotion && isActive && "is-instant",
                )}
              >
                <div className="portfolio-split-image-frame absolute inset-0">
                  <Image
                    src={project.imageSrc}
                    alt={imageAlt}
                    title={imageTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="portfolio-split-image"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            );
          })}
        </div>
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

        <div className="h-[3px] w-[min(120px,28vw)] overflow-hidden rounded-full bg-line sm:w-[min(220px,36vw)]">
          <div
            className="h-full rounded-full bg-brand motion-safe:transition-[width] motion-safe:duration-500 motion-safe:ease-out"
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

      <PortfolioProjectModal
        project={active}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
