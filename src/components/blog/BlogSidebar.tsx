import { ButtonLink } from "@/components/ui/Button";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import type { Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { CONTACT_PUBLIC_PATH } from "@/lib/seo-routes";
import { pickLocale } from "@/sanity/lib/locale";
import type { TocItem } from "@/sanity/lib/toc";
import type { SanityCategory, SanityPostListItem } from "@/sanity/lib/types";

type BlogSidebarProps = {
  locale: Locale;
  latestPosts: SanityPostListItem[];
  categories: SanityCategory[];
  toc?: TocItem[];
  labels: {
    latestPosts: string;
    categories: string;
    needHelp: string;
    contactCta: string;
    contactButton: string;
    viewAll: string;
    featuredLabel: string;
    readMore: string;
    inThisArticle?: string;
  };
  activeCategory?: string;
};

export function BlogSidebar({
  locale,
  latestPosts,
  categories,
  toc,
  labels,
  activeCategory,
}: BlogSidebarProps) {
  const visibleCategories = categories.filter((category) => (category.postCount ?? 0) > 0);

  return (
    <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
      {toc?.length && labels.inThisArticle ? (
        <BlogTableOfContents title={labels.inThisArticle} items={toc} />
      ) : null}

      {latestPosts.length > 0 ? (
        <section className="rounded-2xl border border-line bg-surface p-5">
          <h2 className="font-display text-lg font-semibold text-foreground">{labels.latestPosts}</h2>
          <ul className="mt-4 space-y-3">
            {latestPosts.map((post) => (
              <li key={post._id}>
                <BlogPostCard
                  post={post}
                  locale={locale}
                  variant="compact"
                  readMoreLabel={labels.readMore}
                  featuredLabel={labels.featuredLabel}
                />
              </li>
            ))}
          </ul>
          <Link href="/blog" className="mt-4 inline-block text-sm text-brand hover:underline">
            {labels.viewAll}
          </Link>
        </section>
      ) : null}

      {visibleCategories.length > 0 ? (
        <section className="rounded-2xl border border-line bg-surface p-5">
          <h2 className="font-display text-lg font-semibold text-foreground">{labels.categories}</h2>
          <ul className="mt-4 space-y-2">
            {visibleCategories.map((category) => {
              const label = pickLocale(category.title, locale);
              if (!label || !category.slug) return null;
              const isActive = activeCategory === category.slug;

              return (
                <li key={category.slug}>
                  <Link
                    href={`/blog?category=${category.slug}`}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-brand/10 font-medium text-brand"
                        : "text-foreground/80 hover:bg-foreground/[0.04] hover:text-foreground"
                    }`}
                  >
                    <span>{label}</span>
                    <span className="text-xs text-muted">{category.postCount}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      <section className="rounded-2xl border border-brand/20 bg-brand/5 p-5">
        <h2 className="font-display text-lg font-semibold text-foreground">{labels.needHelp}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{labels.contactCta}</p>
        <ButtonLink href={CONTACT_PUBLIC_PATH} className="mt-4 w-full" size="sm">
          {labels.contactButton}
        </ButtonLink>
      </section>
    </aside>
  );
}
