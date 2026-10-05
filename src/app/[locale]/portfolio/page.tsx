import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { EmptyState } from "@/components/ui/Cards";
import { PageHero } from "@/components/ui/PageHero";
import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT_PUBLIC_PATH } from "@/lib/seo-routes";
import {
  getPortfolioCategories,
  getPortfolioProjects,
  mapPortfolioCategories,
  mapPortfolioProjects,
} from "@/sanity/lib/portfolio";
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
    title: t("portfolioTitle"),
    description: t("portfolioDescription"),
    path: "/portfolio",
  });
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const [projects, categories, tn, te, tm] = await Promise.all([
    getPortfolioProjects(),
    getPortfolioCategories(),
    getTranslations("nav"),
    getTranslations("empty"),
    getTranslations("meta"),
  ]);
  const items = mapPortfolioProjects(projects, l);
  const categoryItems = mapPortfolioCategories(categories, l);
  const hasProjects = items.length > 0;

  return (
    <>
      <PageHero
        eyebrow={tn("portfolio")}
        title={tm("portfolioTitle")}
        description={hasProjects ? tm("portfolioDescription") : loc(companyCopy.emptyPortfolioBody, l)}
      />
      <section className="mx-auto min-w-0 max-w-7xl overflow-x-clip px-4 py-14 sm:px-6 sm:py-16">
        {hasProjects ? (
          <PortfolioGrid projects={items} categories={categoryItems} />
        ) : (
          <EmptyState
            title={loc(companyCopy.emptyPortfolioTitle, l)}
            body={loc(companyCopy.emptyPortfolioBody, l)}
            cta={te("cta")}
            href={CONTACT_PUBLIC_PATH}
          />
        )}
      </section>
    </>
  );
}
