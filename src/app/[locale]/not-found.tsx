import { NotFoundActions } from "@/components/layout/NotFoundActions";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default async function NotFound() {
  const t = await getTranslations("notFound");
  const tc = await getTranslations("common");

  return (
    <section className="relative overflow-hidden px-4 py-28 text-center">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="glow-orb pointer-events-none absolute start-1/2 top-10 h-72 w-72 -translate-x-1/2 rtl:translate-x-1/2" />
      <p className="relative font-display text-5xl font-bold text-brand sm:text-7xl">{t("code")}</p>
      <h1 className="relative mt-4 font-display text-3xl font-bold text-foreground sm:text-5xl">{t("title")}</h1>
      <p className="relative mx-auto mt-4 max-w-md text-muted">{t("body")}</p>
      <NotFoundActions backLabel={tc("back")} homeLabel={tc("backHome")} />
    </section>
  );
}
