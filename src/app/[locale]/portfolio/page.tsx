import { EmptyState } from "@/components/ui/Cards";
import { PageHero } from "@/components/ui/PageHero";
import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { CONTACT_PUBLIC_PATH } from "@/lib/seo-routes";
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
  const tn = await getTranslations("nav");
  const te = await getTranslations("empty");
  const tm = await getTranslations("meta");

  return (
    <>
      <PageHero
        eyebrow={tn("portfolio")}
        title={tm("portfolioTitle")}
        description={tm("portfolioDescription")}
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <EmptyState
          title={loc(companyCopy.emptyPortfolioTitle, l)}
          body={loc(companyCopy.emptyPortfolioBody, l)}
          cta={te("cta")}
          href={CONTACT_PUBLIC_PATH}
        />
      </section>
    </>
  );
}
