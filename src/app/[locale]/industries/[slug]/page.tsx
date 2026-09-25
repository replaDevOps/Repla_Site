import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { getIndustry, industries } from "@/content/industries";
import { getIndustrySeo } from "@/content/seo";
import { getService } from "@/content/services";
import { loc, locList, type Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
import {
  CONTACT_PUBLIC_PATH,
  getIndustryPublicSlug,
  industryPagePath,
  resolveIndustryContentSlug,
  servicePagePath,
} from "@/lib/seo-routes";
import { routing } from "@/i18n/routing";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, pageMetadata, webPageJsonLd } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    industries.map((i) => ({ locale, slug: getIndustryPublicSlug(i.slug) })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const contentSlug = resolveIndustryContentSlug(slug);
  const industry = getIndustry(contentSlug);
  if (!industry) return { robots: { index: false, follow: false } };
  const l = locale as Locale;
  const seo = l === "en" ? getIndustrySeo(contentSlug) : undefined;
  return pageMetadata({
    locale: l,
    title: seo?.title ?? loc(industry.metaTitle, l),
    description: seo?.description ?? loc(industry.metaDescription, l),
    path: industryPagePath(contentSlug),
    absoluteTitle: Boolean(seo),
    descriptionMax: seo ? 160 : 155,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug: paramSlug } = await params;
  setRequestLocale(locale);
  const contentSlug = resolveIndustryContentSlug(paramSlug);
  const industry = getIndustry(contentSlug);
  if (!industry) notFound();
  const publicSlug = getIndustryPublicSlug(contentSlug);
  if (paramSlug !== publicSlug) {
    permanentRedirect(`/${locale}/industries/${publicSlug}`);
  }
  const l = locale as Locale;
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");
  const industryPath = industryPagePath(contentSlug);
  const seo = l === "en" ? getIndustrySeo(contentSlug) : undefined;
  const industryName = loc(industry.title, l);
  const industryDescription = seo?.description ?? loc(industry.metaDescription, l);
  const breadcrumbLabel = seo?.breadcrumbName ?? industryName;
  const faqItems = industry.faqs.map((f) => ({ q: loc(f.q, l), a: loc(f.a, l) }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: tn("home"), path: "" },
            ...(seo
              ? [{ name: breadcrumbLabel, path: industryPath }]
              : [
                  { name: tn("industries"), path: "/industries" },
                  { name: breadcrumbLabel },
                ]),
          ],
          l,
        )}
      />
      <JsonLd
        data={webPageJsonLd({
          name: industryName,
          description: industryDescription,
          locale: l,
          path: industryPath,
        })}
      />
      {faqItems.length ? <JsonLd data={faqPageJsonLd(faqItems)} /> : null}
      <PageHero
        eyebrow={tn("industries")}
        title={loc(industry.heroTitle, l)}
        description={loc(industry.tagline, l)}
      />

      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
          <Icon name={industry.icon} className="h-6 w-6" />
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">{tc("overview")}</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{loc(industry.overview, l)}</p>
        </section>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">{tc("challenges")}</h2>
            <ul className="mt-4 space-y-3">
              {locList(industry.challenges, l).map((item) => (
                <li key={item} className="rounded-xl border border-line bg-surface p-4 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-foreground">{tc("industrySolutions")}</h2>
            <ul className="mt-4 space-y-3">
              {locList(industry.solutions, l).map((item) => (
                <li key={item} className="rounded-xl border border-line bg-surface p-4 text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">{tc("industryFeatures")}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {locList(industry.features, l).map((item) => (
              <li key={item} className="rounded-xl border border-line bg-surface p-4 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">{tc("aiAutomation")}</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{loc(industry.aiIntro, l)}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {locList(industry.aiUseCases, l).map((item) => (
              <li key={item} className="rounded-xl border border-line bg-surface p-4 text-sm text-muted">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">{tc("technologies")}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {industry.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-3 py-1 text-sm text-foreground/80"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">{tc("whyReplaIndustry")}</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {locList(industry.whyRepla, l).map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold text-foreground">{tc("relatedServices")}</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {industry.relatedServices.map((s) => {
              const svc = getService(s);
              if (!svc) return null;
              return (
                <li key={s}>
                  <Link
                    href={servicePagePath(s)}
                    className="inline-flex rounded-full border border-line px-3 py-1 text-sm hover:border-brand/50"
                  >
                    {loc(svc.shortTitle, l)}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-8">
            <ButtonLink href={CONTACT_PUBLIC_PATH}>{tn("startProject")}</ButtonLink>
          </div>
        </section>

        {industry.faqs.length ? (
          <section className="mt-12">
            <h2 className="mb-4 font-display text-2xl font-semibold text-foreground">{tc("faq")}</h2>
            <FaqAccordion
              items={industry.faqs.map((f) => ({ q: loc(f.q, l), a: loc(f.a, l) }))}
            />
          </section>
        ) : null}
      </article>
    </>
  );
}
