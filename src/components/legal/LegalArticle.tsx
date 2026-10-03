import { PageHero } from "@/components/ui/PageHero";
import type { LegalBlock } from "@/content/legal";
import { loc, locList, type Locale } from "@/content/types";
import type { ReactNode } from "react";

function linkify(text: string): ReactNode[] {
  const parts = text.split(/(https?:\/\/[^\s]+|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi);
  return parts.map((part, index) => {
    if (/^https?:\/\//i.test(part)) {
      const href = part.replace(/[),.;:]+$/g, "");
      const trailing = part.slice(href.length);
      return (
        <span key={`${href}-${index}`}>
          <a href={href} className="break-all text-brand underline underline-offset-2">
            {href}
          </a>
          {trailing}
        </span>
      );
    }
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(part)) {
      return (
        <a
          key={`${part}-${index}`}
          href={`mailto:${part}`}
          className="break-all text-brand underline underline-offset-2"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export function LegalArticle({
  locale,
  title,
  updated,
  sections,
}: {
  locale: Locale;
  title: string;
  updated: string;
  sections: { title: { en: string; ar: string }; blocks: LegalBlock[] }[];
}) {
  return (
    <>
      <PageHero title={title} description={updated} />
      <article className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6">
        {sections.map((section) => (
          <section key={section.title.en}>
            <h2 className="font-display text-2xl font-semibold text-foreground">{loc(section.title, locale)}</h2>
            {section.blocks.map((block, index) => {
              if (block.type === "p") {
                return (
                  <p key={`${section.title.en}-p-${index}`} className="mt-3 leading-relaxed text-muted">
                    {linkify(loc(block.text, locale))}
                  </p>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3
                    key={`${section.title.en}-h3-${index}`}
                    className="mt-6 font-display text-lg font-semibold text-foreground"
                  >
                    {loc(block.text, locale)}
                  </h3>
                );
              }
              return (
                <ul key={`${section.title.en}-ul-${index}`} className="mt-3 list-disc space-y-1.5 ps-5 text-muted">
                  {locList(block.items, locale).map((item) => (
                    <li key={item} className="leading-relaxed">
                      {linkify(item)}
                    </li>
                  ))}
                </ul>
              );
            })}
          </section>
        ))}
      </article>
    </>
  );
}
