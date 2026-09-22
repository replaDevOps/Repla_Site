import { PageHero } from "@/components/ui/PageHero";
import { privacy } from "@/content/legal";
import { loc, locList, type Locale } from "@/content/types";
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
    title: t("privacyTitle"),
    description: t("privacyDescription"),
    path: "/privacy",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  return (
    <>
      <PageHero title={loc(privacy.title, l)} description={loc(privacy.updated, l)} />
      <article className="mx-auto max-w-3xl space-y-10 px-4 py-16 sm:px-6">
        {privacy.sections.map((section) => (
          <section key={section.title.en}>
            <h2 className="font-display text-2xl font-semibold text-foreground">{loc(section.title, l)}</h2>
            {locList(section.body, l).map((p) => (
              <p key={p.slice(0, 20)} className="mt-3 leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>
    </>
  );
}
