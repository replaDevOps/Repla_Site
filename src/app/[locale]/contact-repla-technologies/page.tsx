import { ContactDetailCards } from "@/components/contact/ContactDetailCards";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { companyCopy } from "@/content/company";
import { staticPageSeo } from "@/content/seo";
import { loc, type Locale } from "@/content/types";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/metadata";
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
  const l = locale as Locale;
  const seo = l === "en" ? staticPageSeo.contact : null;
  const seoTitle = seo?.title ?? (l === "en" ? t("contactSeoTitle") : t("contactTitle"));
  return pageMetadata({
    locale: l,
    title: seoTitle,
    description: seo?.description ?? t("contactDescription"),
    path: CONTACT_PUBLIC_PATH,
    absoluteTitle: Boolean(seo),
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
  const tm = await getTranslations("meta");
  const contactSeo = l === "en" ? staticPageSeo.contact : null;

  return (
    <>
      {contactSeo ? (
        <JsonLd
          data={breadcrumbJsonLd(
            [
              { name: "Home", path: "" },
              { name: contactSeo.breadcrumbName!, path: CONTACT_PUBLIC_PATH },
            ],
            l,
          )}
        />
      ) : null}
      <PageHero
        eyebrow={tn("contact")}
        title={tm("contactTitle")}
        description={loc(companyCopy.contactIntro, l)}
        containerClassName="max-w-7xl"
      />
      <div className="mx-auto min-w-0 max-w-7xl space-y-6 px-4 py-16 sm:px-6 lg:space-y-8 lg:py-20">
        <ContactForm />
        <ContactDetailCards />
      </div>
    </>
  );
}
