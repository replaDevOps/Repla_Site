import type { Locale } from "@/content/types";

export type LocaleField = {
  en?: string | null;
  ar?: string | null;
};

export function pickLocale(field: LocaleField | null | undefined, locale: Locale): string {
  if (!field) return "";
  const primary = locale === "ar" ? field.ar : field.en;
  const fallback = locale === "ar" ? field.en : field.ar;
  return primary || fallback || "";
}
