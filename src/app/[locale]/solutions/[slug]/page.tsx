import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { getSolution, solutions } from "@/content/solutions";
import { getSolutionSeo } from "@/content/seo";
import { getService } from "@/content/services";
import { getIndustry } from "@/content/industries";
import { loc, locList, type Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pageMetadata, webPageJsonLd } from "@/lib/metadata";
import {
  CONTACT_PUBLIC_PATH,
  getSolutionPublicSlug,
  resolveSolutionContentSlug,
  servicePagePath,
  solutionPagePath,
} from "@/lib/seo-routes";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    solutions.map((s) => ({ locale, slug: getSolutionPublicSlug(s.slug) })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const contentSlug = resolveSolutionContentSlug(slug);
  const solution = getSolution(contentSlug);
  if (!solution) return { robots: { index: false, follow: false } };
  const l = locale as Locale;
  const seo = l === "en" ? getSolutionSeo(contentSlug) : undefined;
  return pageMetadata({
    locale: l,
    title: seo?.title ?? loc(solution.title, l),
    description: seo?.description ?? loc(solution.description, l),
    path: solutionPagePath(contentSlug),
    absoluteTitle: Boolean(seo),
  });
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug: paramSlug } = await params;
  setRequestLocale(locale);
  const contentSlug = resolveSolutionContentSlug(paramSlug);
  const solution = getSolution(contentSlug);
  if (!solution) notFound();
  const l = locale as Locale;
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");
  const tm = await getTranslations("meta");
  const solutionPath = solutionPagePath(contentSlug);
  const seo = l === "en" ? getSolutionSeo(contentSlug) : undefined;
  const solutionTitle = loc(solution.title, l);
  const solutionDescription = loc(solution.description, l);
  const breadcrumbLabel = seo?.breadcrumbName ?? solutionTitle;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: tn("home"), path: "" },
            ...(seo
              ? [{ name: breadcrumbLabel, path: solutionPath }]
              : [
                  { name: tm("solutionsTitle"), path: "/solutions" },
                  { name: breadcrumbLabel },
                ]),
          ],
          l,
        )}
      />
      <JsonLd
        data={webPageJsonLd({
          name: solutionTitle,
          description: solutionDescription,
          locale: l,
          path: solutionPath,
        })}
      />
      <PageHero
        eyebrow={tn("solutions")}
        title={solutionTitle}
        description={loc(solution.tagline, l)}
      />
      <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Icon name={solution.icon} className="h-8 w-8 text-brand" />
        <p className="mt-6 max-w-3xl leading-relaxed text-muted">{loc(solution.description, l)}</p>
        <h2 className="mt-10 font-display text-2xl font-semibold text-foreground">{tc("capabilities")}</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {locList(solution.capabilities, l).map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </ul>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted">{tc("relatedServices")}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {solution.relatedServices.map((s) => {
                const svc = getService(s);
                if (!svc) return null;
                return (
                  <li key={s}>
                    <Link href={servicePagePath(s)} className="hover:text-brand">
                      {loc(svc.title, l)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted">{tc("relatedIndustries")}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {solution.relatedIndustries.map((s) => {
                const ind = getIndustry(s);
                if (!ind) return null;
                return (
                  <li key={s}>
                    <Link href={`/industries/${s}`} className="hover:text-brand">
                      {loc(ind.title, l)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <ButtonLink href={CONTACT_PUBLIC_PATH}>{tn("startProject")}</ButtonLink>
        </div>
      </article>
    </>
  );
}
