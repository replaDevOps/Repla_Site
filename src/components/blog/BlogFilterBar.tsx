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

  return (
    <section
      aria-label={labels.searchArticles}
      className="rounded-2xl border border-line bg-surface-2 px-4 py-4 sm:px-5"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onCategoryChange(undefined)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              !activeCategory
                ? "bg-brand text-white"
                : "border border-line bg-surface text-foreground/80 hover:border-brand/30 hover:text-foreground",
            )}
          >
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
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand text-white"
                    : "border border-line bg-surface text-foreground/80 hover:border-brand/30 hover:text-foreground",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>

        <label className="relative block w-full min-w-0 sm:max-w-xs lg:max-w-sm">
          <span className="sr-only">{labels.searchArticles}</span>
          <svg
            aria-hidden
            className="pointer-events-none absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
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
            className="w-full rounded-full border border-line bg-surface py-2.5 ps-11 pe-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-brand/50 focus:ring-2 focus:ring-brand/20"
          />
        </label>
      </div>
    </section>
  );
}
