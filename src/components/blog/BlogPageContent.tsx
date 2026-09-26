"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import { BlogFilterBar } from "@/components/blog/BlogFilterBar";
import { BlogLatestHero } from "@/components/blog/BlogLatestHero";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/content/types";
import { pickLocale } from "@/sanity/lib/locale";
import { filterPostsByCategory, filterPostsBySearch } from "@/sanity/lib/posts";
import type { SanityCategory, SanityPostListItem } from "@/sanity/lib/types";

type BlogPageContentProps = {
  locale: Locale;
  posts: SanityPostListItem[];
  categories: SanityCategory[];
  initialCategory?: string;
  initialQuery?: string;
  labels: {
    latestArticle: string;
    readArticle: string;
    allCategories: string;
    searchArticles: string;
    searchResultsFor: string;
    inCategory: string;
    filteredBy: string;
    clearFilter: string;
    allArticles: string;
    article: string;
    articles: string;
    featured: string;
    readMore: string;
    blogEmpty: string;
    needHelp: string;
    contactCta: string;
    contactUs: string;
  };
  contactHref: string;
};

function readFiltersFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return {
    category: params.get("category") ?? undefined,
    query: params.get("q") ?? "",
  };
}

function syncBlogUrl(category?: string, query?: string) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (query?.trim()) params.set("q", query.trim());

  const suffix = params.toString();
  const nextUrl = suffix ? `${window.location.pathname}?${suffix}` : window.location.pathname;
  window.history.replaceState(window.history.state, "", nextUrl);
}

export function BlogPageContent({
  locale,
  posts,
  categories,
  initialCategory,
  initialQuery = "",
  labels,
  contactHref,
}: BlogPageContentProps) {
  const latestPost = posts[0] ?? null;
  const [categorySlug, setCategorySlug] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchInput, setSearchInput] = useState(initialQuery);

  const applyFilters = useCallback((category?: string, query?: string) => {
    setCategorySlug(category);
    setSearchQuery(query ?? "");
    syncBlogUrl(category, query);
  }, []);

  useEffect(() => {
    const onPopState = () => {
      const { category, query } = readFiltersFromUrl();
      setCategorySlug(category);
      setSearchQuery(query);
      setSearchInput(query);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (searchInput === searchQuery) return;
      applyFilters(categorySlug, searchInput);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [applyFilters, categorySlug, searchInput, searchQuery]);

  const gridPosts = useMemo(() => {
    let filtered = filterPostsByCategory(posts, categorySlug);
    filtered = filterPostsBySearch(filtered, searchQuery, locale);
    if (!categorySlug && !searchQuery.trim() && latestPost) {
      filtered = filtered.filter((post) => post._id !== latestPost._id);
    }
    return filtered;
  }, [categorySlug, latestPost, locale, posts, searchQuery]);

  const activeCategory = categories.find((category) => category.slug === categorySlug);
  const hasActiveFilters = Boolean(categorySlug || searchQuery.trim());

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:space-y-10 sm:px-6 sm:py-16">
      {latestPost ? (
        <Reveal>
          <BlogLatestHero
            post={latestPost}
            locale={locale}
            label={labels.latestArticle}
            readArticleLabel={labels.readArticle}
          />
        </Reveal>
      ) : null}

      <BlogFilterBar
        locale={locale}
        categories={categories}
        activeCategory={categorySlug}
        searchValue={searchInput}
        onCategoryChange={(slug) => applyFilters(slug, searchInput)}
        onSearchChange={setSearchInput}
        labels={{
          allCategories: labels.allCategories,
          searchArticles: labels.searchArticles,
        }}
      />

      {hasActiveFilters ? (
        <div className="flex flex-col gap-3 rounded-2xl border border-line bg-surface px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <p className="min-w-0 text-sm text-muted">
            {searchQuery.trim() ? (
              <>
                {labels.searchResultsFor}{" "}
                <span className="font-medium text-foreground">&ldquo;{searchQuery.trim()}&rdquo;</span>
                {activeCategory ? (
                  <>
                    {" "}
                    {labels.inCategory}{" "}
                    <span className="font-medium text-foreground">
                      {pickLocale(activeCategory.title, locale)}
                    </span>
                  </>
                ) : null}
              </>
            ) : activeCategory ? (
              <>
                {labels.filteredBy}{" "}
                <span className="font-medium text-foreground">
                  {pickLocale(activeCategory.title, locale)}
                </span>
              </>
            ) : null}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchInput("");
              applyFilters(undefined, "");
            }}
            className="shrink-0 self-start text-sm text-brand hover:underline sm:self-auto"
          >
            {labels.clearFilter}
          </button>
        </div>
      ) : null}

      <section aria-labelledby="all-articles-heading">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-2 sm:mb-6 sm:gap-3">
          <h2
            id="all-articles-heading"
            className="font-display text-xl font-semibold text-foreground sm:text-2xl"
          >
            {labels.allArticles}
          </h2>
          <p className="text-sm text-muted">
            {gridPosts.length} {gridPosts.length === 1 ? labels.article : labels.articles}
          </p>
        </div>

        {gridPosts.length === 0 ? (
          <p className="rounded-2xl border border-line bg-surface p-6 text-center text-sm text-muted sm:p-8 sm:text-base">
            {labels.blogEmpty}
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {gridPosts.map((post, i) => (
              <li key={post._id} className="h-full">
                <Reveal delay={i * 0.03} className="h-full">
                  <BlogPostCard
                    post={post}
                    locale={locale}
                    variant="grid"
                    readMoreLabel={labels.readMore}
                    featuredLabel={labels.featured}
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-2xl border border-brand/20 bg-brand/5 p-5 sm:p-8">
        <h2 className="font-display text-lg font-semibold text-foreground sm:text-xl">{labels.needHelp}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{labels.contactCta}</p>
        <ButtonLink href={contactHref} className="mt-5" size="sm">
          {labels.contactUs}
        </ButtonLink>
      </section>
    </div>
  );
}
