import { PortfolioHeroSlider } from "@/components/home/PortfolioHeroSlider";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Locale } from "@/content/types";
import {
  getLatestPortfolioProjects,
  mapPortfolioSliderProjects,
} from "@/sanity/lib/portfolio";
import { getTranslations } from "next-intl/server";

export async function HomePortfolioSection({ locale }: { locale: Locale }) {
  const [projects, t, tn, th] = await Promise.all([
    getLatestPortfolioProjects(5),
    getTranslations("portfolio"),
    getTranslations("nav"),
    getTranslations("home"),
  ]);

  const items = mapPortfolioSliderProjects(projects, locale);
  if (!items.length) return null;

  return (
    <section id="portfolio" className="overflow-x-clip border-b border-line py-14 sm:py-20">
      <div className="mx-auto min-w-0 max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            eyebrow={tn("portfolio")}
            title={th("latestPortfolio")}
            description={th("latestPortfolioSub")}
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <Reveal delay={0.08} className="mt-8 sm:mt-10">
          <PortfolioHeroSlider projects={items} locale={locale} />
        </Reveal>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/portfolio" variant="secondary">
            {t("viewAll")}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
