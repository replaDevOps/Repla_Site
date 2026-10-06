import type { PortableTextBlock } from "@portabletext/types";

import type { Locale } from "@/content/types";

export type LocaleField = {
  en?: string | null;
  ar?: string | null;
};

/** Localized portable text, with string fallback for legacy plain-text fields. */
export type LocalePortableText = {
  en?: PortableTextBlock[] | string | null;
  ar?: PortableTextBlock[] | string | null;
};

export function pickLocale(field: LocaleField | null | undefined, locale: Locale): string {
  if (!field) return "";
  const primary = locale === "ar" ? field.ar : field.en;
  const fallback = locale === "ar" ? field.en : field.ar;
  return primary || fallback || "";
}

function stringToPortableText(text: string): PortableTextBlock[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  return trimmed.split(/\n+/).map((paragraph, index) => ({
    _type: "block" as const,
    _key: `legacy-${index}`,
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span" as const,
        _key: `legacy-span-${index}`,
        text: paragraph,
        marks: [],
      },
    ],
  }));
}

export function portableTextToPlain(blocks: PortableTextBlock[] | null | undefined): string {
  if (!blocks?.length) return "";

  return blocks
    .map((block) => {
      if (block._type !== "block" || !("children" in block) || !Array.isArray(block.children)) {
        return "";
      }
      return block.children
        .map((child) => ("text" in child && typeof child.text === "string" ? child.text : ""))
        .join("");
    })
    .filter(Boolean)
    .join("\n")
    .trim();
}

export function pickLocalePortableText(
  field: LocalePortableText | LocaleField | null | undefined,
  locale: Locale,
): PortableTextBlock[] {
  if (!field) return [];

  const primary = locale === "ar" ? field.ar : field.en;
  const fallback = locale === "ar" ? field.en : field.ar;
  const value = primary || fallback;
  if (!value) return [];

  if (typeof value === "string") return stringToPortableText(value);
  if (Array.isArray(value)) return value as PortableTextBlock[];
  return [];
}
