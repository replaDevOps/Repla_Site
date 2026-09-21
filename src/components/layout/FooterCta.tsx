"use client";

import { usePathname } from "@/i18n/navigation";
import { ReactNode } from "react";

export function FooterCta({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  if (isContactPage) {
    return null;
  }

  return <>{children}</>;
}
