import type { Locale } from "@/content/types";
import { pickLocale } from "@/sanity/lib/locale";
import type { SanityCategory } from "@/sanity/lib/types";

export function BlogCategories({
  categories,
  locale,
}: {
  categories?: SanityCategory[];
  locale: Locale;
}) {
  if (!categories?.length) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {categories.map((category) => {
        const label = pickLocale(category.title, locale);
        if (!label) return null;

        return (
          <li key={category.slug ?? label}>
            <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
