import { BrandNetworkGlobe } from "@/components/home/BrandNetworkGlobe";
import { getTranslations } from "next-intl/server";

export async function TrustedBrands() {
  const t = await getTranslations("home");

  return (
    <section
      className="relative overflow-x-clip border-y border-line"
      aria-labelledby="trusted-brands-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 end-0 w-full bg-[radial-gradient(ellipse_at_80%_50%,rgba(255,186,164,0.22),transparent_58%)] lg:w-1/2" />
        <div className="glow-orb absolute end-[12%] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 opacity-50" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="max-w-xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand">
            <span className="relative inline-block pb-2 after:absolute after:bottom-0 after:start-0 after:h-0.5 after:w-10 after:rounded-full after:bg-brand">
              {t("brandsEyebrow")}
            </span>
          </p>
          <h2
            id="trusted-brands-heading"
            className="mt-5 break-words text-balance font-display text-[clamp(1.5rem,4.5vw,2.75rem)] font-bold leading-[1.15] text-foreground"
          >
            {t.rich("brandsTitle", {
              brand: (chunks) => <span className="text-brand">{chunks}</span>,
            })}
          </h2>
          <p className="mt-5 text-base font-normal leading-relaxed text-muted sm:text-lg">
            {t("brandsBody")}
          </p>
        </div>
        <BrandNetworkGlobe />
      </div>
    </section>
  );
}
