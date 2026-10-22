import { PartnerForm } from "@/components/forms/PartnerForm";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { partnerCopy, PARTNER_PATH, PARTNER_SERVICE_SLUGS } from "@/content/partner";
import { getService } from "@/content/services";
import { loc, locList, type Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { faqPageJsonLd, pageMetadata } from "@/lib/metadata";
import { servicePagePath } from "@/lib/seo-routes";
import { COMPANY } from "@/lib/site";
import { ArrowUpRight, Check, Handshake, Mail, UserPlus, Users, type LucideIcon } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Suspense } from "react";

const modelIcons: Record<(typeof partnerCopy.models)[number]["id"], LucideIcon> = {
  referral: UserPlus,
  delivery: Users,
  collaboration: Handshake,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return pageMetadata({
    locale: locale as Locale,
    title: t("partnerTitle"),
    description: t("partnerDescription"),
    path: PARTNER_PATH,
  });
}

function applyHref(type: string) {
  return `${PARTNER_PATH}?type=${type}#apply`;
}

export default async function PartnerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations("common");
  const services = PARTNER_SERVICE_SLUGS.map((slug) => getService(slug)).filter(
    (service): service is NonNullable<typeof service> => Boolean(service),
  );
  const faqItems = partnerCopy.faqs.map((item) => ({
    q: loc(item.q, l),
    a: loc(item.a, l),
  }));

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems)} />

      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0">
          <div className="glow-orb absolute -top-24 start-1/4 h-80 w-80" />
          <div className="absolute inset-0 grid-bg opacity-70" />
        </div>
        <div className="relative mx-auto w-full min-w-0 max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:py-28">
          <span className="mb-4 inline-block max-w-full break-words rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand">
            {loc(partnerCopy.eyebrow, l)}
          </span>
          <h1 className="max-w-4xl text-balance break-words font-display text-[clamp(1.75rem,5.5vw,3.25rem)] font-bold leading-[1.1] text-foreground">
            {loc(partnerCopy.title, l)}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-muted sm:text-lg">
            {loc(partnerCopy.description, l)}
          </p>
          <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={`${PARTNER_PATH}#apply`} size="lg" className="w-full max-w-full sm:w-auto">
              {loc(partnerCopy.applyCta, l)}
            </ButtonLink>
            <ButtonLink
              href={`${PARTNER_PATH}#models`}
              variant="secondary"
              size="lg"
              className="w-full max-w-full whitespace-normal text-center sm:w-auto"
            >
              {loc(partnerCopy.exploreCta, l)}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        id="models"
        className="scroll-mt-24 mx-auto w-full min-w-0 max-w-7xl px-4 py-14 sm:scroll-mt-28 sm:px-6 sm:py-20"
        aria-labelledby="partner-models-heading"
      >
        <Reveal>
          <p className="max-w-full break-words text-xs font-medium uppercase tracking-[0.16em] text-brand sm:tracking-[0.22em]">
            {loc(partnerCopy.modelsEyebrow, l)}
          </p>
          <h2
            id="partner-models-heading"
            className="mt-3 max-w-3xl font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-foreground"
          >
            {loc(partnerCopy.modelsTitle, l)}
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {loc(partnerCopy.modelsBody, l)}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {partnerCopy.models.map((model, index) => {
            const ModelIcon = modelIcons[model.id];
            return (
              <Reveal key={model.id} delay={index * 0.06} tone="bold" className="h-full">
                <article className="card-hover flex h-full min-w-0 flex-col rounded-2xl border border-line bg-surface p-5 sm:p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                    <ModelIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 break-words font-display text-xl font-semibold text-foreground">
                    {loc(model.title, l)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                    {loc(model.body, l)}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {locList(model.points, l).map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={applyHref(model.id)}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand"
                  >
                    {loc(partnerCopy.applyWithModel, l)}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="partner-benefits-heading">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand sm:tracking-[0.22em]">
              {loc(partnerCopy.benefitsEyebrow, l)}
            </p>
            <h2
              id="partner-benefits-heading"
              className="mt-3 max-w-3xl font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-foreground"
            >
              {loc(partnerCopy.benefitsTitle, l)}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {loc(partnerCopy.benefitsBody, l)}
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2">
            {partnerCopy.benefits.map((benefit, index) => (
              <Reveal key={benefit.title.en} delay={index * 0.05} className="h-full">
                <li className="flex h-full min-w-0 items-start gap-3 rounded-2xl border border-line bg-surface p-5 sm:p-6">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                    <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block break-words font-display text-base font-semibold text-foreground">
                      {loc(benefit.title, l)}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {loc(benefit.body, l)}
                    </span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="partner-audience-heading">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <p className="max-w-full break-words text-xs font-medium uppercase tracking-[0.16em] text-brand sm:tracking-[0.22em]">
              {loc(partnerCopy.audienceEyebrow, l)}
            </p>
            <h2
              id="partner-audience-heading"
              className="mt-3 max-w-3xl font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-foreground"
            >
              {loc(partnerCopy.audienceTitle, l)}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {loc(partnerCopy.audienceBody, l)}
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2">
            {partnerCopy.audiences.map((audience, index) => (
              <Reveal key={audience.title.en} delay={index * 0.05} className="h-full">
                <li className="h-full">
                  <Link
                    href={applyHref(audience.type)}
                    className="card-hover group flex h-full min-w-0 flex-col rounded-2xl border border-line bg-surface p-5 sm:p-6"
                  >
                    <span className="break-words font-display text-lg font-semibold text-foreground">
                      {loc(audience.title, l)}
                    </span>
                    <span className="mt-2 text-sm leading-relaxed text-muted">
                      {loc(audience.body, l)}
                    </span>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                      {loc(partnerCopy.applyWithModel, l)}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="partner-services-heading">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <p className="max-w-full break-words text-xs font-medium uppercase tracking-[0.16em] text-brand sm:tracking-[0.22em]">
              {loc(partnerCopy.servicesEyebrow, l)}
            </p>
            <h2
              id="partner-services-heading"
              className="mt-3 max-w-3xl font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-foreground"
            >
              {loc(partnerCopy.servicesTitle, l)}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {loc(partnerCopy.servicesBody, l)}
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <li key={service.slug} className="min-w-0">
                <Link
                  href={servicePagePath(service.slug)}
                  className="card-hover group flex h-full min-w-0 flex-col rounded-2xl border border-line bg-surface p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                  <span className="mt-4 break-words font-display text-base font-semibold text-foreground">
                    {loc(service.title, l)}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-muted">
                    {loc(service.tagline, l)}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand">
                    {t("viewService")}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/services" variant="secondary">
              {t("allServices")}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="partner-process-heading">
        <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <p className="max-w-full break-words text-xs font-medium uppercase tracking-[0.16em] text-brand sm:tracking-[0.22em]">
              {loc(partnerCopy.processEyebrow, l)}
            </p>
            <h2
              id="partner-process-heading"
              className="mt-3 max-w-3xl font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-foreground"
            >
              {loc(partnerCopy.processTitle, l)}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {loc(partnerCopy.processBody, l)}
            </p>
          </Reveal>
          <ol className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
            {partnerCopy.steps.map((step, index) => (
              <li key={step.title.en} className="min-w-0 rounded-2xl border border-line bg-surface p-5 sm:p-6">
                <span className="font-display text-sm font-semibold tracking-[0.18em] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 break-words font-display text-lg font-semibold text-foreground">
                  {loc(step.title, l)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{loc(step.body, l)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line" aria-labelledby="partner-faq-heading">
        <div className="mx-auto w-full min-w-0 max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <p className="max-w-full break-words text-xs font-medium uppercase tracking-[0.16em] text-brand sm:tracking-[0.22em]">
              {loc(partnerCopy.faqEyebrow, l)}
            </p>
            <h2
              id="partner-faq-heading"
              className="mt-3 font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-foreground"
            >
              {loc(partnerCopy.faqTitle, l)}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {loc(partnerCopy.faqBody, l)}
            </p>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section
        id="apply"
        className="scroll-mt-24 border-t border-line sm:scroll-mt-28"
        aria-labelledby="partner-apply-heading"
      >
        <div className="mx-auto grid w-full min-w-0 max-w-7xl items-start gap-8 px-4 py-14 sm:gap-10 sm:px-6 sm:py-20 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:gap-12">
          <Reveal className="min-w-0">
            <p className="max-w-full break-words text-xs font-medium uppercase tracking-[0.16em] text-brand sm:tracking-[0.22em]">
              {loc(partnerCopy.formEyebrow, l)}
            </p>
            <h2
              id="partner-apply-heading"
              className="mt-3 font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-foreground"
            >
              {loc(partnerCopy.formTitle, l)}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {loc(partnerCopy.formIntro, l)}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{loc(partnerCopy.formDirect, l)}</p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex max-w-full items-center gap-2 break-all text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                {COMPANY.email}
              </a>
              <a
                href={`mailto:${COMPANY.emailInfo}`}
                className="inline-flex max-w-full items-center gap-2 break-all text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                {COMPANY.emailInfo}
              </a>
            </div>
          </Reveal>
          <Suspense
            fallback={
              <div
                className="min-h-[28rem] rounded-2xl border border-line bg-surface"
                aria-hidden
              />
            }
          >
            <PartnerForm locale={l} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
