/** Maps content slugs to public SEO URL segments (without locale prefix). */

export const SERVICE_PUBLIC_SLUGS = {
  "mobile-app-development": "mobile-app-development-in-riyadh",
  "web-development": "web-app-development-in-riyadh",
  "custom-software-development": "custom-software-development-in-riyadh",
  "ai-intelligent-automation": "ai-automation-services-in-riyadh",
  "api-development": "api-development-and-integration-in-riyadh",
  "cloud-devops": "cloud-and-devops-service-in-riyadh",
  cybersecurity: "cybersecurity-service-in-riyadh",
  "iot-embedded-systems": "iot-and-embedded-system-development-in-riyadh",
  "ui-ux-design": "figma-ui-ux-services-in-riyadh",
  "quality-assurance": "software-quality-assurance-services-in-riyadh",
  "dedicated-development-teams": "dedicated-software-development-team-in-riyadh",
} as const;

export const SOLUTION_PUBLIC_SLUGS = {
  "enterprise-ai-platform": "enterprise-ai-platform-development-in-riyadh",
  "hr-workforce": "hr-software-development-in-riyadh",
  "saas-product-suite": "software-as-a-service-development-in-riyadh",
  "smart-locker-iot": "iot-smart-locker-development-in-riyadh",
  "ai-onboarding-chatbot": "ai-chatbot-integration-in-riyadh",
  "custom-crm-erp": "custom-crm-and-erp-solution-in-riyadh",
} as const;

export const INDUSTRY_PUBLIC_SLUGS = {
  healthcare: "healthcare-software-solution-in-riyadh",
  "fintech-banking": "fintech-and-banking-solutions-in-riyadh",
  education: "e-learning-platform-development-services-in-riyadh",
  "real-estate": "real-estate-software-development-in-riyadh",
  "retail-ecommerce": "e-commerce-software-development-in-riyadh",
  manufacturing: "manufacturing-software-development-in-riyadh",
  logistics: "logistics-software-solutions-development-in-riyadh",
  "travel-hospitality": "hospitality-software-solutions-development-in-riyadh",
  construction: "construction-software-development-in-riyadh",
  government: "government-software-development-in-riyadh",
  telecommunications: "telecommunications-software-development-in-riyadh",
  energy: "energy-software-development-in-riyadh",
  automotive: "automotive-software-development-in-riyadh",
  insurance: "insurance-software-development-in-riyadh",
  "ai-saas": "ai-saas-development-in-riyadh",
  "b2b-software": "b2b-software-development-in-riyadh",
} as const;

export type ServiceContentSlug = keyof typeof SERVICE_PUBLIC_SLUGS;
export type SolutionContentSlug = keyof typeof SOLUTION_PUBLIC_SLUGS;
export type IndustryContentSlug = keyof typeof INDUSTRY_PUBLIC_SLUGS;

export const CONTACT_PUBLIC_PATH = "/contact-repla-technologies";
export const LEGACY_CONTACT_PATH = "/contact";
export const BLOG_PUBLIC_PATH = "/blog";
export const LEGACY_INSIGHTS_PATH = "/insights";

const serviceReverse = Object.fromEntries(
  Object.entries(SERVICE_PUBLIC_SLUGS).map(([content, pub]) => [pub, content]),
) as Record<string, ServiceContentSlug>;

const solutionReverse = Object.fromEntries(
  Object.entries(SOLUTION_PUBLIC_SLUGS).map(([content, pub]) => [pub, content]),
) as Record<string, SolutionContentSlug>;

const industryReverse = Object.fromEntries(
  Object.entries(INDUSTRY_PUBLIC_SLUGS).map(([content, pub]) => [pub, content]),
) as Record<string, IndustryContentSlug>;

export function getServicePublicSlug(contentSlug: string): string {
  return (
    SERVICE_PUBLIC_SLUGS[contentSlug as ServiceContentSlug] ?? contentSlug
  );
}

export function getSolutionPublicSlug(contentSlug: string): string {
  return (
    SOLUTION_PUBLIC_SLUGS[contentSlug as SolutionContentSlug] ?? contentSlug
  );
}

export function getIndustryPublicSlug(contentSlug: string): string {
  return (
    INDUSTRY_PUBLIC_SLUGS[contentSlug as IndustryContentSlug] ?? contentSlug
  );
}

/** Resolve a URL param slug to the internal content slug. */
export function resolveServiceContentSlug(paramSlug: string): string {
  return serviceReverse[paramSlug] ?? paramSlug;
}

export function resolveSolutionContentSlug(paramSlug: string): string {
  return solutionReverse[paramSlug] ?? paramSlug;
}

export function resolveIndustryContentSlug(paramSlug: string): string {
  return industryReverse[paramSlug] ?? paramSlug;
}

export function servicePagePath(contentSlug: string): string {
  return `/services/${getServicePublicSlug(contentSlug)}`;
}

export function solutionPagePath(contentSlug: string): string {
  return `/solutions/${getSolutionPublicSlug(contentSlug)}`;
}

export function industryPagePath(contentSlug: string): string {
  return `/industries/${getIndustryPublicSlug(contentSlug)}`;
}

/** Build permanent redirect rules for next.config (legacy → SEO URLs). */
export function buildSeoRedirects() {
  const locales = ["en", "ar"] as const;
  const rules: { source: string; destination: string; permanent: boolean }[] = [];

  for (const locale of locales) {
    rules.push({
      source: `/${locale}${LEGACY_CONTACT_PATH}`,
      destination: `/${locale}${CONTACT_PUBLIC_PATH}`,
      permanent: true,
    });

    rules.push({
      source: `/${locale}${LEGACY_INSIGHTS_PATH}`,
      destination: `/${locale}${BLOG_PUBLIC_PATH}`,
      permanent: true,
    });

    rules.push({
      source: `/${locale}${LEGACY_INSIGHTS_PATH}/:slug`,
      destination: `/${locale}${BLOG_PUBLIC_PATH}/:slug`,
      permanent: true,
    });

    for (const [contentSlug, publicSlug] of Object.entries(SERVICE_PUBLIC_SLUGS)) {
      if (contentSlug === publicSlug) continue;
      rules.push({
        source: `/${locale}/services/${contentSlug}`,
        destination: `/${locale}/services/${publicSlug}`,
        permanent: true,
      });
    }

    for (const [contentSlug, publicSlug] of Object.entries(SOLUTION_PUBLIC_SLUGS)) {
      if (contentSlug === publicSlug) continue;
      rules.push({
        source: `/${locale}/solutions/${contentSlug}`,
        destination: `/${locale}/solutions/${publicSlug}`,
        permanent: true,
      });
    }

    for (const [contentSlug, publicSlug] of Object.entries(INDUSTRY_PUBLIC_SLUGS)) {
      if (contentSlug === publicSlug) continue;
      rules.push({
        source: `/${locale}/industries/${contentSlug}`,
        destination: `/${locale}/industries/${publicSlug}`,
        permanent: true,
      });
    }
  }

  return rules;
}
