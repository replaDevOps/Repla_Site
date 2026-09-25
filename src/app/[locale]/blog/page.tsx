import { BlogPageContent } from "@/components/blog/BlogPageContent";
import { PageHero } from "@/components/ui/PageHero";
import { type Locale } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT_PUBLIC_PATH } from "@/lib/seo-routes";
import { getCategories, getPosts, sortPostsByDate } from "@/sanity/lib/posts";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata({
    locale: locale as Locale,
    title: t("blogTitle"),
    description: t("blogDescription"),
    path: "/blog",
  });
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const { locale } = await params;
  const { category: categorySlug, q: searchQuery } = await searchParams;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");
  const tm = await getTranslations("meta");
  const tb = await getTranslations("blog");

  const [allPosts, categories] = await Promise.all([getPosts(), getCategories()]);
  const sortedPosts = sortPostsByDate(allPosts);

  return (
    <div className="overflow-x-clip">
      <PageHero eyebrow={tn("blog")} title={tm("blogTitle")} description={tm("blogDescription")} centered />

      <BlogPageContent
        locale={l}
        posts={sortedPosts}
        categories={categories}
        initialCategory={categorySlug}
        initialQuery={searchQuery ?? ""}
        contactHref={CONTACT_PUBLIC_PATH}
        labels={{
          latestArticle: tb("latestArticle"),
          readArticle: tb("readArticle"),
          allCategories: tb("allCategories"),
          searchArticles: tb("searchArticles"),
          searchResultsFor: tb("searchResultsFor"),
          inCategory: tb("inCategory"),
          filteredBy: tb("filteredBy"),
          clearFilter: tb("clearFilter"),
          allArticles: tb("allArticles"),
          article: tb("article"),
          articles: tb("articles"),
          featured: tb("featured"),
          readMore: tc("readMore"),
          blogEmpty: tc("blogEmpty"),
          needHelp: tb("needHelp"),
          contactCta: tb("contactCta"),
          contactUs: tc("contactUs"),
        }}
      />
    </div>
  );
}
