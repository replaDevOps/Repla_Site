import { BrevoChat } from "@/components/layout/BrevoChat";
import { Footer } from "@/components/layout/Footer";
import { HtmlLang } from "@/components/layout/HtmlLang";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { routing } from "@/i18n/routing";
import { organizationJsonLd } from "@/lib/metadata";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <>
      <HtmlLang locale={locale} dir={dir} />
      <ThemeScript />
      <div className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={organizationJsonLd()} />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <LoadingScreen />
            <SmoothScroll />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ScrollToTop />
            <BrevoChat />
          </ThemeProvider>
        </NextIntlClientProvider>
      </div>
    </>
  );
}
