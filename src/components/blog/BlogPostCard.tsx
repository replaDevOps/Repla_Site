import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import type { Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { pickLocale } from "@/sanity/lib/locale";
import { formatPostDate } from "@/sanity/lib/posts";
import type { SanityPostListItem } from "@/sanity/lib/types";
import { cn } from "@/lib/cn";

type BlogPostCardProps = {
  post: SanityPostListItem;
  locale: Locale;
  readMoreLabel: string;
  variant?: "default" | "compact" | "featured" | "grid";
  showFeaturedBadge?: boolean;
  featuredLabel?: string;
};

export function BlogPostCard({
  post,
  locale,
  readMoreLabel,
  variant = "default",
  showFeaturedBadge = false,
  featuredLabel = "Featured",
}: BlogPostCardProps) {
  const title = pickLocale(post.title, locale);
  const excerpt = pickLocale(post.excerpt, locale);

  if (variant === "compact") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-xl border border-line bg-surface/60 p-4 transition-colors hover:border-brand/30 hover:bg-surface"
      >
        <p className="font-medium text-foreground transition-colors group-hover:text-brand">{title}</p>
        {post.publishedAt ? (
          <time dateTime={post.publishedAt} className="mt-1 block text-xs text-muted">
            {formatPostDate(post.publishedAt, locale)}
          </time>
        ) : null}
      </Link>
    );
  }

  if (variant === "grid") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface"
      >
        {post.mainImage?.asset ? (
          <BlogCoverImage
            image={post.mainImage}
            aspectRatio="16 / 10"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        ) : (
          <div className="aspect-[16/10] bg-surface-2" />
        )}
        <div className="flex flex-1 flex-col p-5">
          <BlogCategories categories={post.categories} locale={locale} />
          <h3 className="mt-3 line-clamp-2 font-display text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">{excerpt}</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted">
            {post.author?.name ? <span>{post.author.name}</span> : null}
            {post.author?.name && post.publishedAt ? <span aria-hidden>·</span> : null}
            {post.publishedAt ? (
              <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt, locale)}</time>
            ) : null}
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="card-hover group block overflow-hidden rounded-3xl border border-line bg-surface"
      >
        {post.mainImage?.asset ? (
          <BlogCoverImage
            image={post.mainImage}
            priority
            aspectRatio="16 / 9"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        ) : (
          <div className="aspect-[16/9] bg-surface-2" />
        )}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            {showFeaturedBadge || post.featured ? (
              <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
                {featuredLabel}
              </span>
            ) : null}
            <BlogCategories categories={post.categories} locale={locale} />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
          <p className="mt-4 line-clamp-3 text-base leading-relaxed text-muted sm:line-clamp-4">{excerpt}</p>
          {post.publishedAt ? (
            <time dateTime={post.publishedAt} className="mt-4 block text-xs uppercase tracking-widest text-muted">
              {formatPostDate(post.publishedAt, locale)}
            </time>
          ) : null}
          <span className="mt-6 inline-flex text-sm font-medium text-brand">{readMoreLabel}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn("card-hover block overflow-hidden rounded-2xl border border-line bg-surface")}
    >
      <div className="flex flex-col sm:flex-row sm:items-start">
        {post.mainImage?.asset ? (
          <BlogCoverImage
            image={post.mainImage}
            aspectRatio="4 / 3"
            className="w-full shrink-0 sm:w-40 md:w-48 lg:w-52"
            sizes="(max-width: 640px) 100vw, 208px"
          />
        ) : null}
        <div className="flex min-w-0 flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-2">
            {post.featured ? (
              <span className="rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-brand">
                {featuredLabel}
              </span>
            ) : null}
            <BlogCategories categories={post.categories} locale={locale} />
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">{title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{excerpt}</p>
          {post.publishedAt ? (
            <time dateTime={post.publishedAt} className="mt-3 block text-xs uppercase tracking-widest text-muted">
              {formatPostDate(post.publishedAt, locale)}
            </time>
          ) : null}
          <span className="mt-4 inline-block text-sm text-brand">{readMoreLabel}</span>
        </div>
      </div>
    </Link>
  );
}
