import type { Locale } from "@/content/types";
import { client } from "@/sanity/lib/client";
import { pickLocale } from "@/sanity/lib/locale";
import { faqsQuery } from "@/sanity/lib/queries";
import type { SanityFaq } from "@/sanity/lib/types";

export async function getFaqs(): Promise<SanityFaq[]> {
  return client.fetch<SanityFaq[]>(faqsQuery, {}, { next: { tags: ["faqs"] } });
}

export function mapFaqsToAccordionItems(faqs: SanityFaq[], locale: Locale) {
  return faqs
    .map((faq) => ({
      q: pickLocale(faq.question, locale),
      a: pickLocale(faq.answer, locale),
    }))
    .filter((item) => item.q && item.a);
}
