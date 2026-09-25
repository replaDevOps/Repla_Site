import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import type { Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { pickLocale } from "@/sanity/lib/locale";
import { formatPostDate } from "@/sanity/lib/posts";
import type { SanityPostListItem } from "@/sanity/lib/types";

type BlogLatestHeroProps = {
  post: SanityPostListItem;
  locale: Locale;
  label: string;
  readArticleLabel: string;
};

function AuthorAvatar({ name }: { name?: string }) {
  const initial = name?.trim().charAt(0).toUpperCase() ?? "R";

  return (
    <span
      aria-hidden
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-sm font-semibold text-brand"
    >
      {initial}
    </span>
  );
}

export function BlogLatestHero({ post, locale, label, readArticleLabel }: BlogLatestHeroProps) {
  const title = pickLocale(post.title, locale);
  const excerpt = pickLocale(post.excerpt, locale);

  return (
    <section aria-labelledby="latest-article-heading">
      <p
        id="latest-article-heading"
        className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted"
      >
        {label}
      </p>
      <Link
        href={`/blog/${post.slug}`}
        className="card-hover group grid min-w-0 overflow-hidden rounded-2xl border border-line bg-surface sm:rounded-3xl lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
      >
        {post.mainImage?.asset ? (
          <BlogCoverImage
            image={post.mainImage}
            priority
            aspectRatio="16 / 10"
            sizes="(max-width: 1024px) 100vw, 640px"
            className="min-h-[180px] sm:min-h-[220px] lg:min-h-[360px]"
          />
        ) : (
          <div className="min-h-[180px] bg-surface-2 sm:min-h-[220px] lg:min-h-[360px]" />
        )}
        <div className="flex min-w-0 flex-col justify-center p-4 sm:p-6 lg:p-10">
          <BlogCategories categories={post.categories} locale={locale} />
          <h2 className="mt-3 break-words font-display text-xl font-bold text-foreground sm:mt-4 sm:text-2xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted sm:mt-4 sm:line-clamp-4 sm:text-base">
            {excerpt}
          </p>
          <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <AuthorAvatar name={post.author?.name} />
              <div className="min-w-0">
                {post.author?.name ? (
                  <p className="truncate text-sm font-medium text-foreground">{post.author.name}</p>
                ) : null}
                {post.publishedAt ? (
                  <time dateTime={post.publishedAt} className="block text-xs text-muted">
                    {formatPostDate(post.publishedAt, locale)}
                  </time>
                ) : null}
              </div>
            </div>
            <span className="text-sm font-medium text-brand transition-colors group-hover:underline sm:shrink-0">
              {readArticleLabel}
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
