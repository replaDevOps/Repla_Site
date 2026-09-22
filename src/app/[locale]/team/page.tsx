import { EmptyState } from "@/components/ui/Cards";
import { PageHero } from "@/components/ui/PageHero";
import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
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
  const title = t("teamTitle");
  const meta = pageMetadata({
    locale: locale as Locale,
    title,
    description: t("teamDescription"),
    path: "/team",
  });
  return {
    ...meta,
    title: { absolute: title },
    openGraph: { ...meta.openGraph, title },
    twitter: { ...meta.twitter, title },
  };
}

export default async function TeamPage({
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
        eyebrow={tn("team")}
        title={tm("teamTitle")}
        description={loc(companyCopy.emptyTeamBody, l)}
      />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <EmptyState
          title={loc(companyCopy.emptyTeamTitle, l)}
          body={loc(companyCopy.emptyTeamBody, l)}
          cta={te("cta")}
          href="/contact"
        />
      </section>
    </>
  );
}
