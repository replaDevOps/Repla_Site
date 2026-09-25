import { NavbarClient, type NavEntry } from "@/components/layout/NavbarClient";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { loc, type L, type Locale } from "@/content/types";
import { getLocale } from "next-intl/server";

const featuredNav = [
  "ai-intelligent-automation",
  "custom-software-development",
  "web-development",
  "api-development",
  "mobile-app-development",
  "cloud-devops",
  "cybersecurity",
  "dedicated-development-teams",
  "iot-embedded-systems",
  "ui-ux-design",
  "quality-assurance",
];

type Localizable = {
  slug: string;
  icon?: string;
  title: L;
  shortTitle?: L;
  tagline?: L;
};

function toEntry(item: Localizable, locale: Locale): NavEntry {
  return {
    slug: item.slug,
    title: loc(item.title, locale),
    shortTitle: loc(item.shortTitle ?? item.title, locale),
    tagline: loc(item.tagline ?? item.title, locale),
    icon: item.icon ?? "sparkles",
  };
}

export async function Navbar() {
  const locale = (await getLocale()) as Locale;

  const featured = featuredNav
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => toEntry(s, locale));

  return (
    <NavbarClient
      featured={featured}
      industries={industries.map((i) => toEntry(i, locale))}
      solutions={solutions.map((s) => toEntry(s, locale))}
    />
  );
}
