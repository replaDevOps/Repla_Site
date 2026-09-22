import { IndustryCard } from "@/components/ui/Cards";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/content/industries";
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
    title: t("industriesTitle"),
    description: t("industriesDescription"),
    path: "/industries",
  });
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tn = await getTranslations("nav");
  const t = await getTranslations("home");
  const tc = await getTranslations("common");
  const tm = await getTranslations("meta");

  return (
    <>
      <PageHero eyebrow={tn("industries")} title={tm("industriesTitle")} description={tm("industriesDescription")} />
      <section className="mx-auto max-w-7xl overflow-x-clip px-4 py-16 sm:px-6" aria-labelledby="industries-list-heading">
        <h2 id="industries-list-heading" className="sr-only">
          {tm("industriesTitle")}
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.slug}
              delay={(i % 4) * 0.06}
              tone="bold"
              from={i % 2 === 0 ? "start" : "end"}
            >
              <IndustryCard
                href={`/industries/${ind.slug}`}
                icon={ind.icon}
                title={loc(ind.title, l)}
                tagline={loc(ind.tagline, l)}
                cta={tc("learnMore")}
                layout="row"
              />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
