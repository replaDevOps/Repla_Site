import { WhyChooseCards } from "@/components/home/WhyChooseCards";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { getTranslations } from "next-intl/server";

export async function WhyChooseSection({ locale }: { locale: Locale }) {
  const th = await getTranslations("home");

  return (
    <section className="overflow-x-clip py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow={loc(companyCopy.whyChooseEyebrow, locale)}
          title={loc(companyCopy.whyChooseTitle, locale)}
          description={loc(companyCopy.whyChooseBody, locale)}
        />
        <WhyChooseCards locale={locale} items={companyCopy.whyChoose} />
        <Reveal delay={0.08} className="mt-10 flex justify-center">
          <ButtonLink href="/careers" variant="secondary" size="lg">
            {th("joinOurTeam")}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}

