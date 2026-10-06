"use client";

import type { PortfolioProjectView, PortfolioSliderProject } from "@/sanity/lib/portfolio";
import { cn } from "@/lib/cn";
import { portfolioProjectImageSeo } from "@/lib/seo-image";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";

import { PortfolioDescription } from "@/components/portfolio/PortfolioDescription";

type ModalProject = (PortfolioSliderProject | PortfolioProjectView) & {
  imageSrc: string;
};

export function PortfolioProjectModal({
  project,
  open,
  onClose,
}: {
  project: ModalProject;
  open: boolean;
  onClose: () => void;
}) {
  const tp = useTranslations("portfolio");
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const { alt: imageAlt, title: imageTitle } = portfolioProjectImageSeo(
    project,
    project.image,
  );

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { body } = document;
    const previous = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    };
    const scrollbarGap = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    if (scrollbarGap > 0) body.style.paddingRight = `${scrollbarGap}px`;

    // Blur page content behind the portal and keep it until the modal closes.
    const blurred: HTMLElement[] = [];
    Array.from(body.children).forEach((child) => {
      if (!(child instanceof HTMLElement)) return;
      if (child.dataset.portfolioModalRoot === "true") return;
      child.dataset.portfolioModalBlurred = "true";
      child.style.filter = "blur(10px)";
      child.style.pointerEvents = "none";
      child.style.userSelect = "none";
      blurred.push(child);
    });

    dialogRef.current?.focus({ preventScroll: true });
    closeRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      blurred.forEach((el) => {
        el.style.filter = "";
        el.style.pointerEvents = "";
        el.style.userSelect = "";
        delete el.dataset.portfolioModalBlurred;
      });
      body.style.overflow = previous.overflow;
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      body.style.paddingRight = previous.paddingRight;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      data-portfolio-modal-root="true"
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4 md:p-6"
    >
      <button
        type="button"
        aria-label={tp("closeDetails")}
        className="absolute inset-0 bg-black/55 backdrop-blur-md"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={cn(
          "relative z-[1] flex max-h-[min(90dvh,880px)] w-full max-w-4xl flex-col overflow-hidden outline-none",
          "rounded-t-[24px] border border-line bg-surface pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl sm:rounded-[24px] sm:pb-0",
        )}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 sm:px-5">
          <div className="min-w-0">
            <p className="truncate text-xs font-medium uppercase tracking-wide text-muted">
              {project.categoryTitle}
            </p>
            <h2
              id={titleId}
              className="truncate font-display text-base font-semibold text-foreground sm:text-xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-foreground/[0.03] text-foreground transition-colors hover:border-brand/30 hover:text-brand"
            aria-label={tp("closeDetails")}
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="portfolio-split-desc-scroll min-h-0 flex-1 overflow-y-auto">
          <div className="relative aspect-[16/10] max-h-[40vh] w-full bg-surface-2 sm:aspect-video sm:max-h-none">
            <Image
              src={project.imageSrc}
              alt={imageAlt}
              title={imageTitle}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-contain object-center"
              priority
            />
          </div>

          <div className="space-y-5 px-4 py-5 sm:px-6 sm:py-6">
            <PortfolioDescription value={project.descriptionBlocks} compact={false} />

            <div className="flex justify-center">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                {tp("visitLiveSite")}
                <ArrowUpRight className="size-4 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
