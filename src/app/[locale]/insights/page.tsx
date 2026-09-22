import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { insights } from "@/content/insights";
import { loc, type Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata({
    locale: locale as Locale,
    title: t("insightsTitle"),
    description: t("insightsDescription"),
    path: "/insights",
  });
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");
  const tm = await getTranslations("meta");

  return (
    <>
      <PageHero
        eyebrow={tn("insights")}
        title={tm("insightsTitle")}
        description={tm("insightsDescription")}
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6" aria-labelledby="insights-list-heading">
        <h2 id="insights-list-heading" className="sr-only">
          {tm("insightsTitle")}
        </h2>
        <ul className="space-y-4">
          {insights.map((article, i) => (
            <li key={article.slug}>
              <Reveal delay={i * 0.04}>
                <Link
                  href={`/insights/${article.slug}`}
                  className="card-hover block rounded-2xl border border-line bg-surface p-6"
                >
                <h3 className="font-display text-2xl font-semibold text-foreground">{loc(article.title, l)}</h3>
                <p className="mt-2 text-sm text-muted">{loc(article.excerpt, l)}</p>
                <span className="mt-4 inline-block text-sm text-brand">{tc("readMore")}</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
