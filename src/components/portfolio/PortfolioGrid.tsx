"use client";

import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { portfolioProjectImageSeo } from "@/lib/seo-image";
import { getPortfolioProjectImageUrl } from "@/sanity/lib/portfolio";
import type { PortfolioCategoryView, PortfolioProjectView } from "@/sanity/lib/portfolio";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo, useState } from "react";

export function PortfolioGrid({
  projects,
  categories,
}: {
  projects: PortfolioProjectView[];
  categories: PortfolioCategoryView[];
}) {
  const t = useTranslations("portfolio");
  const [categorySlug, setCategorySlug] = useState<string | "all">("all");

  const filteredProjects = useMemo(
    () =>
      categorySlug === "all"
        ? projects
        : projects.filter((project) => project.categorySlug === categorySlug),
    [categorySlug, projects],
  );

  const pillClass = (active: boolean) =>
    cn(
      "inline-flex min-h-9 shrink-0 items-center whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition-colors sm:min-h-10 sm:px-4 sm:text-sm",
      active
        ? "bg-brand text-white"
        : "border border-line bg-surface text-foreground/80 hover:border-brand/30 hover:text-foreground",
    );

  return (
    <div>
      {categories.length > 0 ? (
        <Reveal className="mb-8">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label={t("filters")}>
            <button type="button" className={pillClass(categorySlug === "all")} onClick={() => setCategorySlug("all")}>
              {t("all")}
            </button>
            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                className={pillClass(categorySlug === category.slug)}
                onClick={() => setCategorySlug(category.slug)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </Reveal>
      ) : null}

      <ul
        key={categorySlug}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-stretch xl:grid-cols-3"
      >
        {filteredProjects.map((project, index) => {
          const src = getPortfolioProjectImageUrl(project.image);
          if (!src) return null;

          const { alt: imageAlt, title: imageTitle } = portfolioProjectImageSeo(project, project.image);

          return (
            <li key={project.id} className="flex min-w-0">
              <Reveal
                tone="bold"
                className="flex h-full min-h-0 w-full"
                delay={Math.min(index * 0.08, 0.48)}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-hover flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface"
                >
                  <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-surface-2">
                    <Image
                      src={src}
                      alt={imageAlt}
                      title={imageTitle}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <span className="absolute start-3 top-3 z-10 inline-flex max-w-[calc(100%-1.5rem)] rounded-full border border-white/30 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm sm:start-4 sm:top-4 sm:text-xs">
                      {project.categoryTitle}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h2 className="font-display text-xl font-semibold leading-snug text-foreground">
                      {project.title}
                    </h2>
                    <p className="mt-2 line-clamp-5 text-sm leading-relaxed text-muted">{project.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-brand">
                      {t("visitLiveSite")}
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
