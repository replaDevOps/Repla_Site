"use client";

import type { Locale } from "@/content/types";
import { pickLocale } from "@/sanity/lib/locale";
import type { SanityCategory } from "@/sanity/lib/types";
import { cn } from "@/lib/cn";

type BlogFilterBarProps = {
  locale: Locale;
  categories: SanityCategory[];
  activeCategory?: string;
  searchValue: string;
  onCategoryChange: (slug?: string) => void;
  onSearchChange: (query: string) => void;
  labels: {
    allCategories: string;
    searchArticles: string;
  };
};

export function BlogFilterBar({
  locale,
  categories,
  activeCategory,
  searchValue,
  onCategoryChange,
  onSearchChange,
  labels,
}: BlogFilterBarProps) {
  const visibleCategories = categories.filter((category) => (category.postCount ?? 0) > 0);
  const isAllActive = !activeCategory && !searchValue.trim();

  const pillClass = (isActive: boolean) =>
    cn(
      "inline-flex min-h-9 shrink-0 items-center whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium transition-colors sm:min-h-10 sm:px-4 sm:text-sm",
      isActive
        ? "bg-brand text-white"
        : "border border-line bg-surface text-foreground/80 hover:border-brand/30 hover:text-foreground",
    );

  return (
    <section
      aria-label={labels.searchArticles}
      className="overflow-visible rounded-2xl border border-line bg-surface-2 px-3 py-4 sm:px-5"
    >
      <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-5">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => onCategoryChange(undefined)} className={pillClass(isAllActive)}>
              {labels.allCategories}
            </button>
            {visibleCategories.map((category) => {
              const label = pickLocale(category.title, locale);
              if (!label || !category.slug) return null;
              const isActive = activeCategory === category.slug;

              return (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => onCategoryChange(category.slug)}
                  className={pillClass(isActive)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <label className="relative block w-full min-w-0 shrink-0 lg:w-auto lg:min-w-[220px] lg:max-w-sm xl:min-w-[260px]">
          <span className="sr-only">{labels.searchArticles}</span>
          <svg
            aria-hidden
            className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted sm:start-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
            />
          </svg>
          <input
            type="search"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder={labels.searchArticles}
            className="w-full rounded-full border border-line bg-surface py-2.5 ps-10 pe-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-brand/50 focus:ring-2 focus:ring-brand/20 sm:ps-11"
          />
        </label>
      </div>
    </section>
  );
}
