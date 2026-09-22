"use client";

import { Icon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { COMPANY } from "@/lib/site";
import { cn } from "@/lib/cn";
import { ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/replaofficials";

const BOOK_A_CALL_CLASSES = cn(
  "relative inline-flex items-center justify-center gap-2 rounded-full font-button tracking-wide",
  "btn-animate btn-slide-round btn-primary bg-brand text-white font-semibold",
  "shadow-[0_0_0_1px_rgba(196,30,36,0.4),0_10px_30px_rgba(196,30,36,0.18)]",
);

/** Pre-localized nav entries built on the server, so content modules stay out of this bundle. */
export type NavEntry = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  icon: string;
};

const COMPANY_LINKS = [
  { href: "/about", labelKey: "about" as const, icon: "Building2" },
  { href: "/services", labelKey: "services" as const, icon: "Briefcase" },
  { href: "/industries", labelKey: "industries" as const, icon: "Globe" },
  { href: "/team", labelKey: "team" as const, icon: "Users" },
  { href: "/portfolio", labelKey: "portfolio" as const, icon: "FolderKanban" },
  { href: "/careers", labelKey: "careers" as const, icon: "UserPlus" },
  { href: "/contact", labelKey: "contact" as const, icon: "Mail" },
];

export function NavbarClient({
  featured,
  industries,
  solutions,
  technologiesPreview,
}: {
  featured: NavEntry[];
  industries: NavEntry[];
  solutions: NavEntry[];
  technologiesPreview: string;
}) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const menuId = useId();
  const bookACallLabel = locale === "ar" ? "احجز مكالمة" : "Book a Call";

  useEffect(() => {
    let frame = 0;
    // Hysteresis avoids flicker when SmoothScroll eases past a single threshold.
    const sync = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled((was) => {
        if (was) return y > 4;
        return y > 20;
      });
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(sync);
    };
    sync();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    if (!mobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobile]);

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === "en" ? "ar" : "en" });
  };

  const toggleMobileSection = (id: string) => {
    setMobileSection((current) => (current === id ? null : id));
  };

  return (
    <header
      className={cn(
        "navbar-shell sticky top-0 z-50 border-b",
        scrolled || mobile ? "navbar-shell-scrolled" : "navbar-shell-top",
      )}
    >
      <div className="hidden border-b border-line lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-3 px-4 text-xs text-foreground/80 sm:px-6">
          <div className="flex min-w-0 items-center gap-3 overflow-hidden">
            <a
              href={`mailto:${COMPANY.emailInfo}`}
              className="inline-flex min-w-0 max-w-[14rem] items-center gap-1.5 truncate transition-colors hover:text-foreground xl:max-w-none"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
              <span className="truncate">{COMPANY.emailInfo}</span>
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-foreground xl:inline-flex"
            >
              <Mail className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {COMPANY.email}
            </a>
            <a
              href={COMPANY.phoneHref}
              className="hidden items-center gap-1.5 transition-colors hover:text-foreground xl:inline-flex"
              dir="ltr"
            >
              <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {COMPANY.phone}
            </a>
            <span className="hidden items-center gap-1.5 2xl:inline-flex">
              <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {t("location")}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={switchLocale}
              className="social-icon social-icon-sm !w-auto min-w-7 px-2.5 text-xs font-medium"
              aria-label={locale === "en" ? t("switchToArabic") : t("switchToEnglish")}
            >
              {locale === "en" ? "العربية" : "English"}
            </button>
            <ThemeToggle />
            <div className="hidden xl:block">
              <SocialLinks size="sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl min-w-0 items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2">
          <Image
            src="/logo.png"
            alt="REPLA Technologies"
            title="REPLA Technologies"
            width={40}
            height={40}
            priority
            sizes="40px"
            className="logo-dark-only h-9 w-9 shrink-0 rounded-full sm:h-10 sm:w-10"
          />
          <Image
            src="/logo-light.png"
            alt="REPLA Technologies"
            title="REPLA Technologies"
            width={40}
            height={40}
            priority
            sizes="40px"
            className="logo-light-only h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
          />
          <span className="font-display text-base font-semibold tracking-wide text-foreground sm:text-lg">
            <span className="sm:hidden">REPLA</span>
            <span className="hidden sm:inline">Repla Technologies</span>
          </span>
        </Link>

        {/* No Home entry: the logo is the route home. */}
        <nav className="hidden min-w-0 items-center gap-0.5 lg:flex xl:gap-1" aria-label="Primary">
          <Mega
            id={`${menuId}-services`}
            label={t("services")}
            href="/services"
            open={open === "services"}
            onOpen={() => setOpen("services")}
            onClose={() => setOpen(null)}
            panelClassName="w-[min(1160px,calc(100vw-2rem))]"
          >
            <div>
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs uppercase tracking-widest text-muted">{t("services")}</p>
                <Link href="/services" className="text-sm text-muted transition-colors hover:text-foreground">
                  {t("viewAll")}
                </Link>
              </div>
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {featured.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="flex items-start gap-3.5 rounded-xl px-3 py-3 transition-colors hover:bg-foreground/[0.04]"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-foreground/[0.03] text-foreground/60">
                        <Icon name={s.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-foreground">{s.title}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted line-clamp-2">{s.tagline}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Mega>
          <Mega
            id={`${menuId}-industries`}
            label={t("industries")}
            href="/industries"
            open={open === "industries"}
            onOpen={() => setOpen("industries")}
            onClose={() => setOpen(null)}
            panelClassName="w-[min(1040px,calc(100vw-2rem))]"
          >
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground/90 transition-colors hover:bg-foreground/[0.04]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-foreground/[0.03] text-foreground/60">
                      <Icon name={i.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Mega>
          <Mega
            id={`${menuId}-solutions`}
            label={t("solutions")}
            open={open === "solutions"}
            onOpen={() => setOpen("solutions")}
            onClose={() => setOpen(null)}
            panelClassName="w-[min(720px,calc(100vw-2rem))]"
          >
            <ul className="grid gap-2 sm:grid-cols-2">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="flex items-start gap-3.5 rounded-xl px-3 py-3 transition-colors hover:bg-foreground/[0.04]"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-foreground/[0.03] text-foreground/60">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-foreground">{s.title}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted">{s.tagline}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Mega>
          <Mega
            id={`${menuId}-company`}
            label={t("company")}
            open={open === "company"}
            onOpen={() => setOpen("company")}
            onClose={() => setOpen(null)}
            panelClassName="w-[min(700px,calc(100vw-2rem))]"
          >
            <div className="grid gap-10 sm:grid-cols-2">
              <ul className="space-y-1 text-sm">
                {COMPANY_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-foreground/[0.04]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-foreground/[0.03] text-foreground/60">
                        <Icon name={item.icon} className="h-5 w-5" />
                      </span>
                      {t(item.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-sm text-muted">{t("partnersNote")}</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted">{t("technologies")}</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{technologiesPreview}</p>
              </div>
            </div>
          </Mega>
          <NavLink href="/contact" active={pathname === "/contact"}>
            {t("contact")}
          </NavLink>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(BOOK_A_CALL_CLASSES, "h-9 px-4 text-sm")}
          >
            {bookACallLabel}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle size="md" />
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line btn-animate-soft"
            aria-expanded={mobile}
            aria-label={mobile ? t("closeMenu") : t("openMenu")}
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobile ? (
        <div className="border-t border-line bg-background lg:hidden">
          <div
            className="mx-auto flex max-h-[calc(100dvh-4.75rem)] max-w-7xl flex-col overflow-y-auto px-4 pb-[max(2rem,env(safe-area-inset-bottom))] pt-2 sm:px-6"
            data-no-smooth-scroll
          >
            <nav className="flex flex-col" aria-label="Mobile">
              <MobileNavLink href="/" active={pathname === "/"}>
                {t("home")}
              </MobileNavLink>

              <MobileAccordion
                label={t("services")}
                open={mobileSection === "services"}
                onToggle={() => toggleMobileSection("services")}
              >
                {featured.slice(0, 8).map((s) => (
                  <MobileSubLink key={s.slug} href={`/services/${s.slug}`}>
                    {s.shortTitle}
                  </MobileSubLink>
                ))}
                <MobileSubLink href="/services">{t("viewAll")}</MobileSubLink>
              </MobileAccordion>

              <MobileAccordion
                label={t("industries")}
                open={mobileSection === "industries"}
                onToggle={() => toggleMobileSection("industries")}
              >
                {industries.slice(0, 8).map((i) => (
                  <MobileSubLink key={i.slug} href={`/industries/${i.slug}`}>
                    {i.title}
                  </MobileSubLink>
                ))}
                <MobileSubLink href="/industries">{t("viewAll")}</MobileSubLink>
              </MobileAccordion>

              <MobileAccordion
                label={t("solutions")}
                open={mobileSection === "solutions"}
                onToggle={() => toggleMobileSection("solutions")}
              >
                {solutions.map((s) => (
                  <MobileSubLink key={s.slug} href={`/solutions/${s.slug}`}>
                    {s.title}
                  </MobileSubLink>
                ))}
                <MobileSubLink href="/solutions">{t("viewAll")}</MobileSubLink>
              </MobileAccordion>

              <MobileAccordion
                label={t("company")}
                open={mobileSection === "company"}
                onToggle={() => toggleMobileSection("company")}
              >
                <MobileSubLink href="/about">{t("about")}</MobileSubLink>
                <MobileSubLink href="/team">{t("team")}</MobileSubLink>
                <MobileSubLink href="/portfolio">{t("portfolio")}</MobileSubLink>
                <MobileSubLink href="/careers">{t("careers")}</MobileSubLink>
              </MobileAccordion>

              <MobileNavLink href="/contact" active={pathname === "/contact"}>
                {t("contact")}
              </MobileNavLink>
            </nav>

            <div className="mt-6 space-y-5">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(BOOK_A_CALL_CLASSES, "h-12 w-full px-6 text-[15px]")}
                onClick={() => setMobile(false)}
              >
                {bookACallLabel}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
              </a>

              <ul className="space-y-3.5 px-0.5">
                <li className="flex items-start gap-3 text-sm text-foreground/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  <span className="min-w-0 break-words">{COMPANY.address}</span>
                </li>
                <li>
                  <a
                    href={COMPANY.phoneHref}
                    className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-foreground"
                    dir="ltr"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.emailInfo}`}
                    className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span className="break-all">{COMPANY.emailInfo}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <span className="break-all">{COMPANY.email}</span>
                  </a>
                </li>
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <SocialLinks />
                <button
                  type="button"
                  onClick={switchLocale}
                  className="social-icon social-icon-md !w-auto min-w-10 px-4 text-sm font-medium"
                >
                  {locale === "en" ? "العربية" : "English"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

    </header>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-full px-2 py-2 text-[13px] font-medium btn-animate-soft xl:px-3 xl:text-sm",
        active ? "text-brand" : "text-foreground/80 hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}

function Mega({
  id,
  label,
  href,
  open,
  onOpen,
  onClose,
  panelClassName,
  children,
}: {
  id: string;
  label: string;
  href?: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  panelClassName?: string;
  children: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!open) return;

    const place = () => {
      const wrap = wrapRef.current;
      const panel = panelRef.current;
      if (!wrap || !panel) return;

      const trigger = wrap.getBoundingClientRect();
      const width = panel.offsetWidth;
      const pad = 16;
      // Center on the trigger label, then keep the panel inside the viewport.
      const ideal = trigger.left + trigger.width / 2 - width / 2;
      const left = Math.min(Math.max(ideal, pad), window.innerWidth - width - pad);
      panel.style.left = `${left - trigger.left}px`;
      panel.style.right = "auto";
    };

    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [open]);

  const triggerClass = cn(
    "relative inline-flex items-center gap-1 rounded-full px-2 py-2 text-[13px] font-medium text-foreground/80 btn-animate-soft hover:text-foreground xl:px-3 xl:text-sm",
    open && "text-foreground",
  );

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      {href ? (
        <Link
          href={href}
          className={triggerClass}
          aria-expanded={open}
          aria-controls={id}
          onFocus={onOpen}
        >
          {label}
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
        </Link>
      ) : (
        <button
          type="button"
          className={triggerClass}
          aria-expanded={open}
          aria-controls={id}
          onClick={() => (open ? onClose() : onOpen())}
          onFocus={onOpen}
        >
          {label}
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
        </button>
      )}
      {open ? (
        <div
          ref={panelRef}
          id={id}
          className={cn(
            "absolute top-full z-50 pt-3",
            panelClassName ?? "w-[min(720px,calc(100vw-2rem))]",
          )}
        >
          <div className="nav-panel rounded-2xl p-7 lg:p-8">{children}</div>
        </div>
      ) : null}
    </div>
  );
}

function MobileNavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex min-h-14 items-center border-b border-line text-[17px] font-medium transition-colors",
        active ? "text-brand" : "text-foreground hover:text-brand",
      )}
    >
      {children}
    </Link>
  );
}

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        className="flex min-h-14 w-full items-center justify-between gap-3 text-start text-[17px] font-medium text-foreground transition-colors hover:text-brand"
        aria-expanded={open}
        onClick={onToggle}
      >
        {label}
        <ChevronDown
          className={cn("h-4 w-4 shrink-0 text-muted transition-transform duration-300", open && "rotate-180 text-brand")}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-0.5 pb-3 ps-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

function MobileSubLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-3 py-2.5 text-[15px] text-foreground/75 transition-colors hover:bg-foreground/5 hover:text-foreground"
    >
      {children}
    </Link>
  );
}
