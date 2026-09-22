import type { Locale } from "@/content/types";
import { loc, type L } from "@/content/types";
import { COMPANY, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

const OG_IMAGE = {
  url: `${SITE_URL}/logo.png`,
  width: 1200,
  height: 630,
  alt: `${COMPANY.shortName} logo`,
};

/** Trim meta descriptions to a search-friendly length without mid-word breaks. */
export function seoDescription(text: string, max = 155): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  const slice = normalized.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${(lastSpace > 80 ? slice.slice(0, lastSpace) : slice).trim()}…`;
}

function localeAlternates(pagePath: string) {
  return {
    en: `${SITE_URL}/en${pagePath}`,
    ar: `${SITE_URL}/ar${pagePath}`,
    "x-default": `${SITE_URL}/en${pagePath}`,
  };
}

export function pageMetadata({
  locale,
  title,
  description,
  path,
  keywords,
  openGraphType = "website",
  noIndex = false,
}: {
  locale: Locale;
  title: string | L;
  description: string | L;
  path: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const t = typeof title === "string" ? title : loc(title, locale);
  const rawDescription = typeof description === "string" ? description : loc(description, locale);
  const d = seoDescription(rawDescription);
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const pagePath = normalized === "/" ? "" : normalized;
  const canonical = `${SITE_URL}/${locale}${pagePath}`;
  const ogTitle = `${t} | ${COMPANY.shortName}`;

  return {
    title: t,
    description: d,
    ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    alternates: {
      canonical,
      languages: localeAlternates(pagePath),
    },
    openGraph: {
      title: ogTitle,
      description: d,
      url: canonical,
      siteName: COMPANY.shortName,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: openGraphType,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
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

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.shortName,
    url: `${SITE_URL}/${locale}`,
    publisher: { "@type": "Organization", name: COMPANY.legalName },
    inLanguage: locale === "ar" ? "ar" : "en",
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path?: string }[],
  locale: Locale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: `${SITE_URL}/${locale}${item.path}` } : {}),
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  locale,
  path,
}: {
  name: string;
  description: string;
  locale: Locale;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description: seoDescription(description, 300),
    provider: { "@type": "Organization", name: COMPANY.legalName, url: SITE_URL },
    areaServed: ["SA", "Worldwide"],
    url: `${SITE_URL}/${locale}${path}`,
  };
}

export function webPageJsonLd({
  name,
  description,
  locale,
  path,
}: {
  name: string;
  description: string;
  locale: Locale;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description: seoDescription(description, 300),
    url: `${SITE_URL}/${locale}${path}`,
    isPartOf: { "@type": "WebSite", name: COMPANY.shortName, url: `${SITE_URL}/${locale}` },
    inLanguage: locale === "ar" ? "ar" : "en",
  };
}

export function articleJsonLd({
  headline,
  description,
  locale,
  path,
}: {
  headline: string;
  description: string;
  locale: Locale;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description: seoDescription(description, 300),
    url: `${SITE_URL}/${locale}${path}`,
    publisher: {
      "@type": "Organization",
      name: COMPANY.legalName,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    author: { "@type": "Organization", name: COMPANY.shortName },
    inLanguage: locale === "ar" ? "ar" : "en",
  };
}

export function faqPageJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function contactPageJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: locale === "ar" ? "اتصل بنا" : "Contact Us",
    url: `${SITE_URL}/${locale}/contact`,
    about: { "@type": "Organization", name: COMPANY.legalName },
  };
}
