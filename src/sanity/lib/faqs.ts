import { getCoreFaqAccordionItems } from "@/content/coreFaqs";
import type { Locale } from "@/content/types";
import { client } from "@/sanity/lib/client";
import { pickLocale } from "@/sanity/lib/locale";
import { faqsQuery } from "@/sanity/lib/queries";
import type { SanityFaq } from "@/sanity/lib/types";

export type FaqAccordionItem = { q: string; a: string };

export async function getFaqs(): Promise<SanityFaq[]> {
  return client.fetch<SanityFaq[]>(faqsQuery, {}, { next: { tags: ["faqs"] } });
}

export function mapFaqsToAccordionItems(faqs: SanityFaq[], locale: Locale): FaqAccordionItem[] {
  return faqs
    .map((faq) => ({
      q: pickLocale(faq.question, locale),
      a: pickLocale(faq.answer, locale),
    }))
    .filter((item) => item.q && item.a);
}

function normalizeFaqQuestion(question: string) {
  return question.trim().toLowerCase();
}

/** FAQ page: core FAQs first, then published Sanity FAQs (deduped by question). */
export async function getFaqPageAccordionItems(locale: Locale): Promise<FaqAccordionItem[]> {
  const coreItems = getCoreFaqAccordionItems(locale);
  const sanityItems = mapFaqsToAccordionItems(await getFaqs(), locale);
  const coreQuestions = new Set(coreItems.map((item) => normalizeFaqQuestion(item.q)));
  const additionalSanityItems = sanityItems.filter(
    (item) => !coreQuestions.has(normalizeFaqQuestion(item.q)),
  );

  return [...coreItems, ...additionalSanityItems];
}
