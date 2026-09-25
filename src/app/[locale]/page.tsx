import { ButtonLink } from "@/components/ui/Button";
import { IndustryGrid, IndustryReveal } from "@/components/home/IndustryGrid";
import { ServiceCard } from "@/components/ui/Cards";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCounter } from "@/components/ui/StatCounter";
import { companyCopy } from "@/content/company";
import { industries } from "@/content/industries";
import { getFeaturedServices, getService } from "@/content/services";
import { loc, type Locale } from "@/content/types";
import { staticPageSeo } from "@/content/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessJsonLd, pageMetadata, websiteJsonLd } from "@/lib/metadata";
import { SITE_H1, SITE_TITLE } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Link } from "@/i18n/navigation";
import { CONTACT_PUBLIC_PATH, industryPagePath, servicePagePath } from "@/lib/seo-routes";
import { getTranslations, setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const TechSlider = dynamic(
  () => import("@/components/ui/TechSlider").then((m) => ({ default: m.TechSlider })),
  { loading: () => <div className="h-[4.5rem]" aria-hidden /> },
);

const TrustedBrands = dynamic(() =>
  import("@/components/home/TrustedBrands").then((m) => ({ default: m.TrustedBrands })),
);

const WhyChooseSection = dynamic(() =>
  import("@/components/home/WhyChooseSection").then((m) => ({ default: m.WhyChooseSection })),
);

const HERO_SERVICE_SLUGS = [
  "ai-intelligent-automation",
  "blockchain-web3",
  "iot-embedded-systems",
  "cybersecurity",
  "cloud-devops",
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const seo = l === "en" ? staticPageSeo.home : null;
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata({
    locale: l,
    title: seo?.title ?? SITE_TITLE,
    description: seo?.description ?? t("homeDescription"),
    path: "/",
    absoluteTitle: Boolean(seo),
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations("home");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");
  const featured = getFeaturedServices();
  const heroServices = HERO_SERVICE_SLUGS.map((slug) => getService(slug)!);

  return (
    <>
      <JsonLd data={websiteJsonLd(l)} />
      <JsonLd data={localBusinessJsonLd()} />
      <section className="relative overflow-hidden grain">
        <div className="pointer-events-none absolute inset-0">
          <div className="glow-orb absolute -top-32 start-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rtl:translate-x-1/2" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:gap-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="inline-block max-w-full break-words rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand">
              {loc(companyCopy.eyebrow, l)}
            </p>
            <h1 className="mt-5 break-words text-balance font-display text-[clamp(1.75rem,5.5vw,3rem)] font-bold leading-[1.15] text-foreground">
              {loc(SITE_H1, l)}
            </h1>
            <p className="mt-4 max-w-xl font-display text-lg font-semibold leading-snug text-foreground/90 sm:text-xl">
              {loc(companyCopy.heroTitle, l)}
            </p>
            <p className="mt-4 max-w-xl text-base font-normal leading-relaxed text-muted sm:text-lg">
              {loc(companyCopy.heroBody, l)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/services" size="lg">
                {tn("exploreServices")}
              </ButtonLink>
              <ButtonLink href={CONTACT_PUBLIC_PATH} variant="secondary" size="lg">
                {tn("contact")}
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-w-0">
            <div className="rounded-3xl border border-line bg-surface/80 p-5 sm:p-6">
              <p className="text-xs uppercase tracking-widest text-muted">{tn("services")}</p>
              <ul className="mt-4 grid gap-2.5 sm:gap-3 md:grid-cols-2 lg:grid-cols-1">
                {heroServices.map((s, i) => (
                  <li key={s.slug} style={{ animationDelay: `${i * 0.1}s` }} className="card-enter">
                    <Link
                      href={servicePagePath(s.slug)}
                      className="card-hover flex items-center gap-3 rounded-xl border border-line bg-foreground/[0.04] px-3 py-3 transition-colors hover:border-brand/40"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand">
                        <Icon name={s.icon} className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 text-sm text-foreground">
                        {s.slug === "ai-intelligent-automation" || s.slug === "cloud-devops"
                          ? loc(s.shortTitle, l)
                          : loc(s.title, l)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-line bg-surface-2 py-12" aria-label={loc(companyCopy.technologiesLabel, l)}>
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="glow-orb absolute start-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2" />
        </div>
        <p className="relative mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-muted">
          {loc(companyCopy.technologiesLabel, l)}
        </p>
        <TechSlider />
        <p className="relative mt-6 text-center text-xs text-muted">{loc(companyCopy.technologiesNote, l)}</p>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <SectionHeader
            eyebrow={tn("about")}
            title={loc(companyCopy.aboutTeaserTitle, l)}
            description={loc(companyCopy.aboutTeaserBody, l)}
          />
          <div className="mt-6">
            <ButtonLink href="/about" variant="secondary">
              {t("aboutCta")}
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="grid grid-cols-1 gap-3 overflow-x-clip min-[420px]:grid-cols-2">
          {companyCopy.stats.map((s) => (
            <StatCounter
              key={s.value}
              value={s.value}
              numeric={s.numeric}
              suffix={s.suffix}
              label={loc(s.label, l)}
            />
          ))}
        </Reveal>
      </section>

      <section className="border-y border-line bg-surface-2 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader eyebrow={tn("services")} title={t("coreServices")} description={t("coreServicesSub")} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <ServiceCard
                  href={servicePagePath(s.slug)}
                  icon={s.icon}
                  title={loc(s.title, l)}
                  description={loc(s.description, l)}
                  cta={tc("viewService")}
                  featured={i === 0}
                />
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/services" variant="secondary">
              {tc("allServices")}
            </ButtonLink>
          </div>
        </div>
      </section>

      <TrustedBrands />

      <WhyChooseSection locale={l} />

      <section id="industries" className="overflow-x-clip border-t border-line py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <IndustryReveal>
            <SectionHeader title={t("industries")} description={t("industriesSub")} />
          </IndustryReveal>
          <IndustryGrid
            items={industries.map((ind) => ({
              href: industryPagePath(ind.slug),
              icon: ind.icon,
              title: loc(ind.title, l),
              tagline: loc(ind.tagline, l),
            }))}
          />
        </div>
      </section>
    </>
  );
}
