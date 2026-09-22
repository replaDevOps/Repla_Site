import { PageHero } from "@/components/ui/PageHero";
import { getInsight, insights } from "@/content/insights";
import { getService } from "@/content/services";
import { loc, locList, type Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    insights.map((i) => ({ locale, slug: i.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getInsight(slug);
  if (!article) return { robots: { index: false, follow: false } };
  return pageMetadata({
    locale: locale as Locale,
    title: loc(article.title, locale as Locale),
    description: loc(article.excerpt, locale as Locale),
    path: `/insights/${slug}`,
    openGraphType: "article",
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getInsight(slug);
  if (!article) notFound();
  const l = locale as Locale;
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");
  const tm = await getTranslations("meta");
  const articlePath = `/insights/${slug}`;
  const articleTitle = loc(article.title, l);
  const articleDescription = loc(article.excerpt, l);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: tn("home"), path: "" },
            { name: tm("insightsTitle"), path: "/insights" },
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
      <PageHero title={articleTitle} description={articleDescription} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-muted">{tc("insightsBy")}</p>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
          {locList(article.body, l).map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <h2 className="mt-12 font-display text-xl font-semibold text-foreground">{tc("relatedServices")}</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {article.relatedServices.map((s) => {
            const svc = getService(s);
            if (!svc) return null;
            return (
              <li key={s}>
                <Link href={`/services/${s}`} className="text-brand hover:underline">
                  {loc(svc.title, l)}
                </Link>
              </li>
            );
          })}
        </ul>
      </article>
    </>
  );
}
