import { ButtonLink } from "@/components/ui/Button";
import { getIndustry } from "@/content/industries";
import { getFeaturedServices } from "@/content/services";
import { loc, type Locale } from "@/content/types";
import { companyCopy } from "@/content/company";
import { Link } from "@/i18n/navigation";
import { CONTACT_PUBLIC_PATH, servicePagePath } from "@/lib/seo-routes";
import { COMPANY } from "@/lib/site";
import { getLocale, getTranslations } from "next-intl/server";
import { Mail, MapPin, Phone } from "lucide-react";
import { SocialLinks } from "@/components/layout/SocialLinks";
import Image from "next/image";
import { FooterCta, FooterExploreServicesButton } from "@/components/layout/FooterCta";

const footerIndustrySlugs = [
  "fintech-banking",
  "healthcare",
  "real-estate",
  "retail-ecommerce",
  "education",
  "insurance",
  "government",
  "travel-hospitality",
] as const;

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const featured = getFeaturedServices();
  const featuredIndustries = footerIndustrySlugs.map((slug) => getIndustry(slug)!);

  const companyLinks = [
    { href: "/services", label: tn("services") },
    { href: "/about", label: tn("about") },
    { href: "/team", label: tn("team") },
    { href: "/careers", label: tn("careers") },
    { href: CONTACT_PUBLIC_PATH, label: tn("contact") },
  ];

  const resourceLinks = [
    { href: "/portfolio", label: tn("portfolio") },
    { href: "/insights", label: tn("insights") },
    { href: "/faq", label: tn("faq") },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-line bg-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb absolute -top-28 start-[12%] h-80 w-80 opacity-80" />
        <div className="glow-orb absolute -bottom-24 end-0 h-72 w-72 opacity-50" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-12 sm:px-6">
        <FooterCta>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface/85 px-6 py-10 text-center shadow-[0_24px_70px_rgba(196,30,36,0.1)] sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute inset-0">
              <div className="glow-orb absolute start-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2" />
              <div className="absolute inset-0 grid-bg opacity-50" />
            </div>
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-7 end-4 select-none font-display text-[4rem] font-bold leading-none text-foreground/[0.045] sm:text-[5.5rem] md:text-[7.5rem]"
            >
              REPLA
            </span>
            <p className="relative text-xs font-medium uppercase tracking-[0.22em] text-brand">{t("ctaEyebrow")}</p>
            <h2 className="relative mt-3 font-display text-2xl font-bold text-foreground sm:text-4xl">
              {t("ctaTitle")}
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm font-normal leading-relaxed text-muted sm:text-base">
              {t("ctaBody")}
            </p>
            <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href={CONTACT_PUBLIC_PATH} size="lg">
                {t("getStarted")}
              </ButtonLink>
              <FooterExploreServicesButton label={tn("exploreServices")} />
            </div>
          </div>
        </FooterCta>

        {/* Equal-width tracks made the gutters look uneven, because each column's longest
            link differs. Sizing tracks to their content and spreading the leftover space
            with justify-between gives every column the same visual breathing room. */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(5,auto)] xl:justify-between">
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="REPLA Technologies"
                title="REPLA Technologies"
                width={40}
                height={40}
                className="logo-dark-only h-10 w-10 rounded-full"
              />
              <Image
                src="/logo-light.png"
                alt="REPLA Technologies"
                title="REPLA Technologies"
                width={40}
                height={40}
                className="logo-light-only h-10 w-10 object-contain"
              />
              <span className="font-display text-lg font-semibold">{COMPANY.shortName}</span>
            </Link>
            <p className="mt-4 max-w-[17.5rem] text-sm leading-relaxed text-muted">
              {loc(companyCopy.footerBlurb, locale)}
            </p>
            <ul className="mt-6 max-w-[17.5rem] space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                <span className="min-w-0 break-words">{COMPANY.address}</span>
              </li>
              <li>
                <a href={COMPANY.phoneHref} className="footer-link gap-2.5" dir="ltr">
                  <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  {COMPANY.phone} ({t("hr")})
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.emailInfo}`} className="footer-link gap-2.5 break-all">
                  <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  {COMPANY.emailInfo}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="footer-link gap-2.5 break-all">
                  <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  {COMPANY.email}
                </a>
              </li>
            </ul>
            <p className="footer-heading mt-8">{t("followUs")}</p>
            <SocialLinks className="mt-4" />
          </div>

          <div>
            <p className="footer-heading">{t("company")}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-heading">{t("services")}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {featured.map((s) => (
                <li key={s.slug}>
                  <Link href={servicePagePath(s.slug)} className="footer-link">
                    {loc(s.shortTitle, locale)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={servicePagePath("ui-ux-design")} className="footer-link">
                  UI/UX
                </Link>
              </li>
              <li>
                <Link href={servicePagePath("iot-embedded-systems")} className="footer-link">
                  IoT
                </Link>
              </li>
              <li>
                <Link href={servicePagePath("blockchain-web3")} className="footer-link">
                  Web3
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">{tn("industries")}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {featuredIndustries.map((industry) => (
                <li key={industry.slug}>
                  <Link href={`/industries/${industry.slug}`} className="footer-link">
                    {loc(industry.title, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-heading">{t("resources")}</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-line bg-background/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {COMPANY.copyrightYear} {COMPANY.shortName}. {t("rights")}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="footer-link">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="footer-link">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
