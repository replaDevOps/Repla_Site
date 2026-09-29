import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getCoreFaqAccordionItems } from "@/content/coreFaqs";
import type { Locale } from "@/content/types";
import { getTranslations } from "next-intl/server";

export async function HomeFaqSection({ locale }: { locale: Locale }) {
  const [t, tn] = await Promise.all([getTranslations("home"), getTranslations("nav")]);
  const items = getCoreFaqAccordionItems(locale);

  return (
    <section className="border-t border-line py-20" aria-labelledby="home-faq-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow={tn("faq")}
            title={t("faqTitle")}
            description={t("faqSubtitle")}
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <Reveal delay={0.08} className="mx-auto mt-10 w-full max-w-5xl">
          <FaqAccordion items={items} />
        </Reveal>
      </div>
    </section>
  );
}
