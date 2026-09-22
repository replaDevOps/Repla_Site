import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { loc, locList, type Locale } from "@/content/types";
import { getChildServices, getService, services } from "@/content/services";
import { getIndustry } from "@/content/industries";
import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  pageMetadata,
  serviceJsonLd,
} from "@/lib/metadata";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) return { robots: { index: false, follow: false } };
  return pageMetadata({
    locale: locale as Locale,
    title: loc(service.title, locale as Locale),
    description: loc(service.description, locale as Locale),
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const service = getService(slug);
  if (!service) notFound();
  const l = locale as Locale;
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");
  const children = getChildServices(slug);
  const servicePath = `/services/${slug}`;
  const serviceTitle = loc(service.title, l);
  const serviceDescription = loc(service.description, l);
  const faqItems = service.faqs.map((f) => ({ q: loc(f.q, l), a: loc(f.a, l) }));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          [
            { name: tn("home"), path: "" },
            { name: tn("services"), path: "/services" },
            { name: serviceTitle },
          ],
          l,
        )}
      />
      <JsonLd
        data={serviceJsonLd({
          name: serviceTitle,
          description: serviceDescription,
          locale: l,
          path: servicePath,
        })}
      />
      {faqItems.length ? <JsonLd data={faqPageJsonLd(faqItems)} /> : null}
      <PageHero
        eyebrow={tn("services")}
        title={serviceTitle}
        description={loc(service.tagline, l)}
      />
      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_240px] xl:grid-cols-[1fr_280px]">
          <div>
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand">
              <Icon name={service.icon} className="h-6 w-6" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground">{tc("overview")}</h2>
            <p className="mt-3 leading-relaxed text-muted">{loc(service.overview, l)}</p>
            <section className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-foreground">{tc("problems")}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {locList(service.problems, l).map((item) => (
                  <li key={item} className="rounded-xl border border-line bg-surface p-4 text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-foreground">{tc("approach")}</h2>
              <ol className="mt-4 space-y-3">
                {locList(service.approach, l).map((item, i) => (
                  <li key={item} className="flex gap-3 text-sm text-muted">
                    <span className="font-display font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </section>
            <section className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-foreground">{tc("capabilities")}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {locList(service.capabilities, l).map((item) => (
                  <li key={item} className="rounded-full border border-line px-3 py-1 text-sm text-foreground/80">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-foreground">{tc("benefits")}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {locList(service.benefits, l).map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </section>
            {service.faqs.length ? (
              <section className="mt-10">
                <h2 className="mb-4 font-display text-2xl font-semibold text-foreground">{tc("faq")}</h2>
                <FaqAccordion items={faqItems} />
              </section>
            ) : null}
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="text-xs uppercase tracking-widest text-muted">{tc("technologies")}</p>
              <ul className="mt-3 space-y-1 text-sm text-foreground/80">
                {service.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-surface p-5">
              <p className="text-xs uppercase tracking-widest text-muted">{tc("relatedIndustries")}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {service.relatedIndustries.map((slug) => {
                  const ind = getIndustry(slug);
                  if (!ind) return null;
                  return (
                    <li key={slug}>
                      <Link href={`/industries/${slug}`} className="hover:text-brand">
                        {loc(ind.title, l)}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {children.length ? (
              <div className="rounded-2xl border border-line bg-surface p-5">
                <p className="text-xs uppercase tracking-widest text-muted">{tc("relatedServices")}</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {children.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/services/${c.slug}`} className="hover:text-brand">
                        {loc(c.title, l)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <ButtonLink href="/contact">{tn("startProject")}</ButtonLink>
          </aside>
        </div>
      </article>
    </>
  );
}
