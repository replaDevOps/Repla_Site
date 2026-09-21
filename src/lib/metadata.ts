import type { Locale } from "@/content/types";
import { loc, type L } from "@/content/types";
import { COMPANY, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export function pageMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title: string | L;
  description: string | L;
  path: string;
}): Metadata {
  const t = typeof title === "string" ? title : loc(title, locale);
  const d = typeof description === "string" ? description : loc(description, locale);
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const pagePath = normalized === "/" ? "" : normalized;
  const canonical = `${SITE_URL}/${locale}${pagePath}`;

  return {
    title: t,
    description: d,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en${pagePath}`,
        ar: `${SITE_URL}/ar${pagePath}`,
      },
    },
    openGraph: {
      title: `${t} | ${COMPANY.shortName}`,
      description: d,
      url: canonical,
      siteName: COMPANY.shortName,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/logo.png`,
          width: 1200,
          height: 630,
          alt: `${COMPANY.brand} Logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t} | ${COMPANY.shortName}`,
      description: d,
      images: [`${SITE_URL}/logo.png`],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.legalName,
    alternateName: COMPANY.shortName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    foundingDate: String(COMPANY.founded),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Riyadh - Taif Road",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
    email: [COMPANY.emailInfo, COMPANY.email],
    telephone: COMPANY.phone,
    sameAs: [COMPANY.linkedin, COMPANY.instagram, COMPANY.facebook, COMPANY.youtube],
    areaServed: ["SA", "PK", "Worldwide"],
  };
}
