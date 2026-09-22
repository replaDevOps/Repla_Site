import { ContactDetailCards } from "@/components/contact/ContactDetailCards";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { contactPageJsonLd, pageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const l = locale as Locale;
  const seoTitle = l === "en" ? t("contactSeoTitle") : t("contactTitle");
  const meta = pageMetadata({
    locale: l,
    title: seoTitle,
    description: t("contactDescription"),
    path: "/contact",
  });
  return {
    ...meta,
    title: { absolute: seoTitle },
    openGraph: { ...meta.openGraph, title: seoTitle },
    twitter: { ...meta.twitter, title: seoTitle },
  };
}

export default async function ContactPage({
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
      <JsonLd data={contactPageJsonLd(l)} />
      <PageHero
        eyebrow={tn("contact")}
        title={tm("contactTitle")}
        description={loc(companyCopy.contactIntro, l)}
        containerClassName="max-w-7xl"
      />
      <div className="mx-auto max-w-7xl space-y-6 px-4 py-16 sm:px-6 lg:space-y-8 lg:py-20">
        <ContactForm />
        <ContactDetailCards />
        <section>
          <h2 className="sr-only">{tc("map")}</h2>
          <div className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title={tc("map")}
              className="h-[320px] w-full grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Riyadh%20Taif%20Road%20Riyadh%20Saudi%20Arabia&z=12&output=embed"
            />
          </div>
        </section>
      </div>
    </>
  );
}
