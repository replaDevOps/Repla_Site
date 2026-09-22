import { ServiceCard } from "@/components/ui/Cards";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { getCatalogServices } from "@/content/services";
import { loc, type Locale } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata({
    locale: locale as Locale,
    title: t("servicesTitle"),
    description: t("servicesDescription"),
    path: "/services",
    keywords: [
      "IT services Saudi Arabia",
      "AI automation services",
      "custom software development",
      "web development company",
      "mobile app development",
      "cloud and DevOps services",
      "cybersecurity services",
      "REPLA Technologies services",
    ],
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tc = await getTranslations("common");
  const tn = await getTranslations("nav");
  const tm = await getTranslations("meta");
  const all = getCatalogServices();
  const featured = all.filter((s) => s.category === "featured");
  const catalog = all.filter((s) => s.category === "catalog");

  return (
    <>
      <PageHero
        eyebrow={tn("services")}
        title={tm("servicesTitle")}
        description={tm("servicesHeroDescription")}
        containerClassName="max-w-7xl"
      />

      <div className="mx-auto max-w-7xl overflow-x-clip px-4 py-16 sm:px-6">
        <section aria-labelledby="services-intro-heading" className="max-w-3xl">
          <h2 id="services-intro-heading" className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            {tm("servicesIntroTitle")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{tm("servicesIntroBody")}</p>
        </section>

        <section aria-labelledby="services-featured-heading" className="mt-16">
          <h2 id="services-featured-heading" className="font-display text-2xl font-semibold text-foreground">
            {tm("servicesFeaturedHeading")}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4">
            {featured.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={(i % 4) * 0.06}
                tone="bold"
                from={i % 2 === 0 ? "start" : "end"}
              >
                <ServiceCard
                  href={`/services/${s.slug}`}
                  icon={s.icon}
                  title={loc(s.title, l)}
                  description={loc(s.description, l)}
                  cta={tc("viewService")}
                  featured={i < 2}
                  layout="row"
                />
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="services-catalog-heading" className="mt-16">
          <h2 id="services-catalog-heading" className="font-display text-2xl font-semibold text-foreground">
            {tm("servicesCatalogHeading")}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4">
            {catalog.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={(i % 4) * 0.06}
                tone="bold"
                from={i % 2 === 0 ? "start" : "end"}
              >
                <ServiceCard
                  href={`/services/${s.slug}`}
                  icon={s.icon}
                  title={loc(s.title, l)}
                  description={loc(s.description, l)}
                  cta={tc("viewService")}
                  layout="row"
                />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
