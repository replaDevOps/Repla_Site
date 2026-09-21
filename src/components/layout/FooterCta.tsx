"use client";

import { usePathname } from "@/i18n/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { ReactNode } from "react";

export function FooterCta({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  if (isContactPage) {
    return null;
  }

  return <>{children}</>;
}

export function FooterExploreServicesButton({ label }: { label: string }) {
  const pathname = usePathname();
  const isServicesPage = pathname === "/services" || pathname.startsWith("/services/");

  if (isServicesPage) {
    return null;
  }

  return (
    <ButtonLink href="/services" variant="secondary" size="lg">
      {label}
    </ButtonLink>
  );
}
