import { FaqAccordion } from "@/components/ui/FaqAccordion";

type BlogContentFaqProps = {
  title?: string;
  items?: { question?: string; answer?: string }[];
};

export function BlogContentFaq({ title, items = [] }: BlogContentFaqProps) {
  const faqItems = items
    .filter((item) => item.question && item.answer)
    .map((item) => ({ q: item.question!, a: item.answer! }));

  if (!faqItems.length) return null;

  return (
    <section className="my-10">
      <h2 className="font-display text-2xl font-semibold text-foreground">
        {title || "Frequently Asked Questions"}
      </h2>
      <div className="mt-5">
        <FaqAccordion items={faqItems} />
      </div>
    </section>
  );
}
