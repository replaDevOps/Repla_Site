import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { COMPANY } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { Check, Mail } from "lucide-react";
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
    title: t("careersTitle"),
    description: t("careersDescription"),
    path: "/careers",
  });
}

export default async function CareersPage({
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
        eyebrow={tn("careers")}
        title={tm("careersTitle")}
        description={loc(companyCopy.careersIntro, l)}
      />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="glow-orb absolute -start-24 top-24 h-72 w-72 opacity-50" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-start gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">
          <div className="space-y-8">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand">
                {loc(companyCopy.careersEyebrow, l)}
              </p>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(1.75rem,4vw,2.35rem)] font-semibold leading-tight text-foreground">
                {loc(companyCopy.careersSectionTitle, l)}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {loc(companyCopy.careersBody, l)}
              </p>
            </Reveal>

            <ul className="grid gap-3 sm:grid-cols-2">
              {companyCopy.careersPoints.map((point, i) => (
                <Reveal key={point.title.en} delay={i * 0.06} tone="bold">
                  <li className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-brand/45 hover:shadow-[0_16px_40px_rgba(196,30,36,0.12)]">
                    <div
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(196,30,36,0.14),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                    <div className="relative flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand transition-colors duration-300 group-hover:border-brand/50 group-hover:bg-brand/20">
                        <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-base font-semibold text-foreground">
                          {loc(point.title, l)}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted">
                          {loc(point.body, l)}
                        </span>
                      </span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-line bg-surface/80 p-5 sm:p-6">
                <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
                  {loc(companyCopy.careersClose, l)}
                </p>
                <p className="mt-3 text-sm text-muted">{loc(companyCopy.careersNote, l)}</p>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-[#d4252c]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {COMPANY.email}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <ContactForm
              variant="careers"
              defaultSubject={l === "en" ? "Open application — careers" : "طلب مفتوح — وظائف"}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
