import { insights } from "@/content/insights";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

const staticPaths = [
  "",
  "/about",
  "/services",
  "/industries",
  "/solutions",
  "/portfolio",
  "/team",
  "/contact",
  "/careers",
  "/insights",
  "/faq",
  "/privacy",
  "/terms",
];

const priorityFor = (path: string) => {
  if (path === "") return 1;
  if (path === "/services" || path === "/contact") return 0.9;
  if (path.startsWith("/services/")) return 0.8;
  if (path.startsWith("/industries/")) return 0.7;
  if (path.startsWith("/solutions/")) return 0.7;
  if (path.startsWith("/insights/")) return 0.6;
  if (path === "/privacy" || path === "/terms") return 0.3;
  return 0.6;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...insights.map((i) => `/insights/${i.slug}`),
  ];

  return routing.locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: priorityFor(path),
      alternates: {
        languages: {
          en: `${SITE_URL}/en${path}`,
          ar: `${SITE_URL}/ar${path}`,
          "x-default": `${SITE_URL}/en${path}`,
        },
      },
    })),
  );
}
