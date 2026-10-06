import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Locale } from "@/content/types";
import { BLOG_PUBLIC_PATH } from "@/lib/seo-routes";
import { getLatestPosts } from "@/sanity/lib/posts";
import { getTranslations } from "next-intl/server";

export async function HomeArticlesSection({ locale }: { locale: Locale }) {
  const [posts, t, tn, tc, tb] = await Promise.all([
    getLatestPosts(3),
    getTranslations("home"),
    getTranslations("nav"),
    getTranslations("common"),
    getTranslations("blog"),
  ]);

  if (!posts.length) return null;

  return (
    <section className="overflow-x-clip border-y border-line bg-surface-2 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={tn("blog")}
          title={t("latestArticles")}
          description={t("latestArticlesSub")}
        />
        <ul className="mt-10 grid list-none gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <li key={post._id} className="h-full">
              <Reveal delay={i * 0.04} className="h-full">
                <BlogPostCard
                  post={post}
                  locale={locale}
                  variant="grid"
                  readMoreLabel={tc("readMore")}
                  featuredLabel={tb("featured")}
                />
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <ButtonLink href={BLOG_PUBLIC_PATH} variant="secondary">
            {t("viewAllArticles")}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
