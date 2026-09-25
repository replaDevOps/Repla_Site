import type { Locale } from "@/content/types";
import { loc, type L } from "@/content/types";
import { COMPANY, SITE_URL } from "@/lib/site";
import { CONTACT_PUBLIC_PATH } from "@/lib/seo-routes";
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
  absoluteTitle = false,
  descriptionMax = 155,
}: {
  locale: Locale;
  title: string | L;
  description: string | L;
  path: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
  noIndex?: boolean;
  absoluteTitle?: boolean;
  descriptionMax?: number;
}): Metadata {
  const t = typeof title === "string" ? title : loc(title, locale);
  const rawDescription = typeof description === "string" ? description : loc(description, locale);
  const d = seoDescription(rawDescription, descriptionMax);
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const pagePath = normalized === "/" ? "" : normalized;
  const canonical = `${SITE_URL}/${locale}${pagePath}`;
  const ogTitle = absoluteTitle ? t : `${t} | ${COMPANY.shortName}`;

  return {
    title: absoluteTitle ? { absolute: t } : t,
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
    name: "Repla Technologies",
    alternateName: "Repla Technologies",
    url: "https://www.replatechnologies.com",
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      "https://www.facebook.com/replatechnologies/",
      "https://www.instagram.com/replatechnologies",
      "https://www.youtube.com/@replasecuritytechnology6261",
      "https://www.linkedin.com/company/replatech/",
      "https://www.replatechnologies.com/",
    ],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Repla Technologies",
    image: `${SITE_URL}/logo.png`,
    url: `${SITE_URL}/`,
    telephone: "+966556448298",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Taif Road",
      addressLocality: "Riyadh",
      postalCode: "13782",
      addressCountry: "SA",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
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
    itemListElement: items.map((item, index) => {
      const url =
        item.path === undefined
          ? undefined
          : item.path === ""
            ? `${SITE_URL}/${locale}`
            : `${SITE_URL}/${locale}${item.path}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(url ? { item: url } : {}),
      };
    }),
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
    url: `${SITE_URL}/${locale}${CONTACT_PUBLIC_PATH}`,
    about: { "@type": "Organization", name: COMPANY.legalName },
  };
}
