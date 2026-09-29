import { JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { faqPageJsonLd, pageMetadata } from "@/lib/metadata";
import { getFaqPageAccordionItems } from "@/sanity/lib/faqs";
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
    title: t("faqTitle"),
    description: t("faqDescription"),
    path: "/faq",
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const [faqItems, tn, tm] = await Promise.all([
    getFaqPageAccordionItems(l),
    getTranslations("nav"),
    getTranslations("meta"),
  ]);

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <PageHero eyebrow={tn("faq")} title={tm("faqTitle")} description={loc(companyCopy.faqIntro, l)} />
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6" aria-labelledby="faq-list-heading">
        <h2 id="faq-list-heading" className="sr-only">
          {tm("faqTitle")}
        </h2>
        <FaqAccordion items={faqItems} />
      </section>
    </>
  );
}
