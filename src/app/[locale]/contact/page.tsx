import { ContactDetailCards } from "@/components/contact/ContactDetailCards";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { COMPANY, SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    title: locale === "ar" ? "اتصل بنا" : "Contact Us",
    description: loc(companyCopy.contactIntro, locale as Locale),
    path: "/contact",
  });
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

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: COMPANY.shortName,
          url: `${SITE_URL}/${locale}/contact`,
        }}
      />
      <PageHero
        eyebrow={tn("contact")}
        title={tn("contact")}
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
