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
        className="card-hover group grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]"
      >
        {post.mainImage?.asset ? (
          <BlogCoverImage
            image={post.mainImage}
            priority
            aspectRatio="16 / 10"
            sizes="(max-width: 1024px) 100vw, 640px"
            className="min-h-[240px] lg:min-h-[360px]"
          />
        ) : (
          <div className="min-h-[240px] bg-surface-2 lg:min-h-[360px]" />
        )}
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <BlogCategories categories={post.categories} locale={locale} />
          <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 line-clamp-4 text-base leading-relaxed text-muted">{excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AuthorAvatar name={post.author?.name} />
              <div className="min-w-0">
                {post.author?.name ? (
                  <p className="text-sm font-medium text-foreground">{post.author.name}</p>
                ) : null}
                {post.publishedAt ? (
                  <time dateTime={post.publishedAt} className="block text-xs text-muted">
                    {formatPostDate(post.publishedAt, locale)}
                  </time>
                ) : null}
              </div>
            </div>
            <span className="text-sm font-medium text-brand transition-colors group-hover:underline">
              {readArticleLabel}
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
