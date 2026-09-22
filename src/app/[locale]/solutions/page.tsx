import { Icon } from "@/components/icons";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { loc, type Locale } from "@/content/types";
import { solutions } from "@/content/solutions";
import { Link } from "@/i18n/navigation";
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
    title: t("solutionsTitle"),
    description: t("solutionsDescription"),
    path: "/solutions",
  });
}

export default async function SolutionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tn = await getTranslations("nav");
  const tm = await getTranslations("meta");

  return (
    <>
      <PageHero
        eyebrow={tn("solutions")}
        title={tm("solutionsTitle")}
        description={tm("solutionsDescription")}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="solutions-list-heading">
        <h2 id="solutions-list-heading" className="sr-only">
          {tm("solutionsTitle")}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <Link
                href={`/solutions/${s.slug}`}
                className="card-hover block h-full rounded-2xl border border-line bg-surface p-6"
              >
              <Icon name={s.icon} className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">{loc(s.title, l)}</h3>
              <p className="mt-2 text-sm text-muted">{loc(s.tagline, l)}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
