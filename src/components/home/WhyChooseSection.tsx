import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhyChooseCards } from "@/components/home/WhyChooseCards";
import { loc, type Locale } from "@/content/types";
import { companyCopy } from "@/content/company";

export function WhyChooseSection({ locale }: { locale: Locale }) {
  return (
    <section className="overflow-x-clip py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={loc(companyCopy.whyChooseEyebrow, locale)}
          title={loc(companyCopy.whyChooseTitle, locale)}
          description={loc(companyCopy.whyChooseBody, locale)}
        />
        <WhyChooseCards locale={locale} items={companyCopy.whyChoose} />
      </div>
    </section>
  );
}

