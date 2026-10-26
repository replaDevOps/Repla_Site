"use client";

import { PARTNER_PATH } from "@/content/partner";
import { Link, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, type ComponentProps, type MouseEvent, type ReactNode } from "react";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scheduleScroll(id: string) {
  const run = () => scrollToSection(id);
  run();
  requestAnimationFrame(run);
  window.setTimeout(run, 50);
  window.setTimeout(run, 150);
  window.setTimeout(run, 300);
}

function partnerHref(section: string, type?: string) {
  const query = type ? `?type=${encodeURIComponent(type)}` : "";
  return `${PARTNER_PATH}${query}#${section}`;
}

type PartnerInPageLinkProps = {
  section: "apply" | "models";
  type?: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "scroll" | "onClick" | "children" | "className">;

/**
 * Same-page partner CTAs. Next.js soft-nav often updates the hash without scrolling
 * (or resets scroll afterward). This link forces scroll to the target section and can
 * preselect a partnership type for the apply form.
 */
export function PartnerInPageLink({
  section,
  type,
  className,
  children,
  ...rest
}: PartnerInPageLinkProps) {
  const router = useRouter();
  const href = partnerHref(section, type);

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (type) {
      // Query change must go through the router so PartnerForm's useSearchParams updates.
      router.replace(href, { scroll: false });
      scheduleScroll(section);
      return;
    }

    // Hash-only: keep the locale prefix (/en/partner) and avoid a soft-nav scroll reset.
    window.history.pushState(null, "", `${window.location.pathname}#${section}`);
    scheduleScroll(section);
  }

  return (
    <Link href={href} scroll={false} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}

/** Scroll to `#hash` on load and when `?type=` changes (Apply with this model). */
export function PartnerHashScroll() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    scheduleScroll(id);
  }, [searchParams]);

  return null;
}
