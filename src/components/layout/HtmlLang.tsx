"use client";

import { notoArabic } from "@/lib/fonts";
import { useEffect } from "react";

export function HtmlLang({
  locale,
  dir,
}: {
  locale: string;
  dir: "ltr" | "rtl";
}) {
  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = dir;
    root.classList.add("h-full", "antialiased");

    if (locale === "ar") {
      root.classList.add(notoArabic.variable);
    } else {
      root.classList.remove(notoArabic.variable);
    }
  }, [dir, locale]);

  return null;
}
