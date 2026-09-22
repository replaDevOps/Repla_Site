import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { StatCounter } from "@/components/ui/StatCounter";
import { companyCopy } from "@/content/company";
import { loc, locList, type Locale } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { TECHNOLOGIES } from "@/lib/site";
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
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");
  const tm = await getTranslations("meta");

  return (
    <>
      <PageHero
        eyebrow={tn("about")}
        title={tm("aboutTitle")}
        description={
          l === "en"
            ? "Your trusted partner for AI-first digital transformation"
            : "شريككم الموثوق للتحول الرقمي القائم على الذكاء الاصطناعي"
        }
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {companyCopy.stats.map((s) => (
            <StatCounter
              key={s.value}
              value={s.value}
              numeric={s.numeric}
              suffix={s.suffix}
              label={loc(s.label, l)}
            />
          ))}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="card-hover h-full rounded-2xl border border-line bg-surface p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {loc(companyCopy.missionTitle, l)}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{loc(companyCopy.mission, l)}</p>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="card-hover h-full rounded-2xl border border-line bg-surface p-8">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                {loc(companyCopy.visionTitle, l)}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{loc(companyCopy.vision, l)}</p>
            </article>
          </Reveal>
        </div>
        <Reveal className="mt-8 rounded-2xl border border-line bg-surface p-8">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            {loc(companyCopy.storyTitle, l)}
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted">{loc(companyCopy.story, l)}</p>
        </Reveal>
        <div id="values" className="mt-16 scroll-mt-28">
          <h2 className="font-display text-3xl font-bold text-foreground">
            {loc(companyCopy.valuesTitle, l)}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {companyCopy.values.map((v) => (
              <article key={v.title.en} className="card-hover rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{loc(v.title, l)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{loc(v.body, l)}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <h2 className="font-display text-3xl font-bold text-foreground">{tc("journey")}</h2>
          <ol className="mt-10 space-y-10 border-s border-line ps-6 sm:space-y-12">
            {companyCopy.journey.map((step) => (
              <li key={step.year} className="relative pb-1">
                <span className="absolute -start-[1.9rem] top-1.5 h-3 w-3 rounded-full bg-brand" />
                <p className="text-xs uppercase tracking-widest text-brand">{step.year}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{loc(step.title, l)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{loc(step.body, l)}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-20 grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">{tc("expertise")}</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              {locList(companyCopy.expertise, l).map((item) => (
                <li key={item} className="border-s-2 border-brand/50 py-1 ps-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">{tc("technologies")}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{loc(companyCopy.technologiesNote, l)}</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {TECHNOLOGIES.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-line bg-surface-2 px-3 py-1 text-sm text-foreground/80"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/team" variant="secondary">
                {tn("team")}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
