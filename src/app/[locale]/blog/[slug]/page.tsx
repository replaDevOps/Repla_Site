import { BlogCategories } from "@/components/blog/BlogCategories";
import { BlogCoverImage } from "@/components/blog/BlogCoverImage";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { PortableTextContent } from "@/components/blog/PortableTextContent";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { getService } from "@/content/services";
import { loc, type Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { articleJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/metadata";
import { servicePagePath } from "@/lib/seo-routes";
import {
  extractTocFromBlocks,
} from "@/sanity/lib/toc";
import {
  formatPostDate,
  getCategories,
  getLatestPosts,
  getPostBodyBlocks,
  getPostBySlug,
  getPostExcerpt,
  getPostSlugs,
  getPostTitle,
} from "@/sanity/lib/posts";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return routing.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { robots: { index: false, follow: false } };
  const l = locale as Locale;
  return pageMetadata({
    locale: l,
    title: getPostTitle(post, l),
    description: getPostExcerpt(post, l),
    path: `/blog/${slug}`,
    openGraphType: "article",
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const l = locale as Locale;
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");
  const tm = await getTranslations("meta");
  const tb = await getTranslations("blog");

  const [latestPosts, categories] = await Promise.all([
    getLatestPosts(5, slug),
    getCategories(),
  ]);

  const articlePath = `/blog/${slug}`;
  const articleTitle = getPostTitle(post, l);
  const articleDescription = getPostExcerpt(post, l);
  const bodyBlocks = getPostBodyBlocks(post, l);
  const toc = extractTocFromBlocks(bodyBlocks);
  const authorName = post.author?.name ?? tc("author");

  const sidebarLabels = {
    latestPosts: tb("latestPosts"),
    categories: tb("browseCategories"),
    needHelp: tb("needHelp"),
    contactCta: tb("contactCta"),
    contactButton: tc("contactUs"),
    viewAll: tb("viewAllPosts"),
    featuredLabel: tb("featured"),
    readMore: tc("readMore"),
    inThisArticle: tb("inThisArticle"),
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: tn("home"), path: "" },
            { name: tm("blogTitle"), path: "/blog" },
            { name: articleTitle },
          ],
          l,
        )}
      />
      <JsonLd
        data={articleJsonLd({
          headline: articleTitle,
          description: articleDescription,
          locale: l,
          path: articlePath,
        })}
      />
      <PageHero
        title={articleTitle}
        description={articleDescription}
        backLink={{ href: "/blog", label: tb("backToBlog") }}
      />
      <div className="mx-auto grid max-w-7xl gap-8 overflow-x-clip px-4 py-10 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_min(100%,320px)] xl:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            {post.featured ? (
              <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
                {tb("featured")}
              </span>
            ) : null}
            <BlogCategories categories={post.categories} locale={l} />
          </div>
          {post.mainImage?.asset ? (
            <BlogCoverImage
              image={post.mainImage}
              priority
              aspectRatio="16 / 9"
              className="mt-6 max-h-[28rem] rounded-2xl border border-line"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          ) : null}
          <p className="mt-6 text-sm text-muted">
            {tc("blogBy")} {authorName}
            {post.publishedAt ? (
              <>
                {" · "}
                <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt, l)}</time>
              </>
            ) : null}
          </p>
          <div className="mt-8">
            <PortableTextContent value={bodyBlocks} />
          </div>
          {post.relatedServices?.length ? (
            <>
              <h2 className="mt-12 font-display text-xl font-semibold text-foreground">
                {tc("relatedServices")}
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {post.relatedServices.map((s) => {
                  const svc = getService(s);
                  if (!svc) return null;
                  return (
                    <li key={s}>
                      <Link href={servicePagePath(s)} className="text-brand hover:underline">
                        {loc(svc.title, l)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : null}
        </article>

        <BlogSidebar
          locale={l}
          latestPosts={latestPosts}
          categories={categories}
          toc={toc}
          labels={sidebarLabels}
        />
      </div>
    </>
  );
}
