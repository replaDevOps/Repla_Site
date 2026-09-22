"use client";

import { loc, type Locale } from "@/content/types";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Cpu, Handshake, ShieldCheck, type LucideIcon } from "lucide-react";
import { useState } from "react";

const ICONS: Record<string, LucideIcon> = {
  Cpu,
  Briefcase,
  ShieldCheck,
  Handshake,
};

type Item = {
  icon: string;
  title: { en: string; ar: string };
  body: { en: string; ar: string };
};

/* Extra metadata for split card layout (subtitles & bottom tags) */
const ITEM_META = [
  {
    subtitle: { en: "Modern technology & architecture.", ar: "تقنيات حديثة وبنية هندسية." },
    tags: [
      { en: "Architecture", ar: "البنية الهندسية" },
      { en: "APIs", ar: "واجهات البرمجة" },
      { en: "Performance", ar: "الأداء العالي" },
    ],
  },
  {
    subtitle: { en: "Understand first. Build second.", ar: "افهم أولاً. ابْنِ ثانياً." },
    tags: [
      { en: "Strategy", ar: "الاستراتيجية" },
      { en: "ROI", ar: "عائد الاستثمار" },
      { en: "Scalability", ar: "القابلية للتوسع" },
    ],
  },
  {
    subtitle: { en: "Reliable from development to deployment.", ar: "موثوق من التطوير إلى النشر." },
    tags: [
      { en: "Security", ar: "الأمان" },
      { en: "Testing", ar: "الاختبارات" },
      { en: "Clean Code", ar: "كود نظيف" },
    ],
  },
  {
    subtitle: { en: "Support as your business evolves.", ar: "دعم مستمر مع نمو أعمالكم." },
    tags: [
      { en: "Support", ar: "الدعم المستمر" },
      { en: "Evolution", ar: "التطوير" },
      { en: "Collaboration", ar: "التعاون" },
    ],
  },
] as const;

export function WhyChooseCards({ locale, items }: { locale: Locale; items: Item[] }) {
  const [active, setActive] = useState(0);

  const activeItem = items[active] ?? items[0];
  const activeMeta = ITEM_META[active % ITEM_META.length];
  const Icon = ICONS[activeItem.icon] ?? Cpu;

  return (
    <div className="relative mx-auto mt-10 w-full overflow-hidden rounded-[24px] border border-brand/35 bg-surface/80 p-5 shadow-2xl backdrop-blur-xl transition-colors duration-300 sm:rounded-[32px] sm:p-8 lg:p-10">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand/10 blur-[120px] [.dark_&]:bg-brand/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-brand/5 blur-[120px]"
      />

      <div className="relative grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-10">
        {/* Left Side: Selectable Tabs */}
        <div
          className="flex flex-col justify-center gap-3 lg:col-span-5"
          role="tablist"
          aria-label="Why Choose REPLA"
        >
          {items.map((item, i) => {
            const isActive = active === i;
            const meta = ITEM_META[i % ITEM_META.length];

            return (
              <div
                key={item.title.en}
                className={cn(
                  "group relative rounded-2xl transition-colors duration-300",
                  !isActive && "hover:bg-foreground/[0.03]",
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="whyActiveTabBg"
                    className="absolute inset-0 rounded-2xl border border-line bg-surface shadow-md [.dark_&]:border-white/15 [.dark_&]:bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <h3 className="relative z-10 m-0">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`why-tabpanel-${i}`}
                    id={`why-tab-${i}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setActive((i + 1) % items.length);
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        setActive((i - 1 + items.length) % items.length);
                      }
                    }}
                    className={cn(
                      "w-full rounded-2xl p-4 pb-1.5 text-left font-display text-lg font-bold tracking-tight outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-brand sm:p-6 sm:pb-1.5 sm:text-xl",
                      locale === "ar" && "text-right",
                      isActive
                        ? "text-foreground"
                        : "text-muted/70 group-hover:text-foreground",
                    )}
                  >
                    {loc(item.title, locale)}
                  </button>
                </h3>
                <p
                  className={cn(
                    "relative z-10 cursor-pointer px-4 pb-4 text-xs font-normal transition-colors duration-200 sm:px-6 sm:pb-6 sm:text-sm",
                    locale === "ar" && "text-right",
                    isActive ? "text-muted" : "text-muted/60",
                  )}
                  onClick={() => setActive(i)}
                >
                  {loc(meta.subtitle, locale)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Side: Detailed Content Card */}
        <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-7 shadow-xl transition-colors duration-300 sm:min-h-[460px] sm:p-10 lg:col-span-7 lg:min-h-[480px] lg:p-12 [.dark_&]:border-white/10 [.dark_&]:bg-[#0d0d12]/90">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              id={`why-tabpanel-${active}`}
              role="tabpanel"
              aria-labelledby={`why-tab-${active}`}
              className="flex flex-1 flex-col justify-between"
            >
              <div>
                {/* Minimalist Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-brand/10 text-brand shadow-sm transition-colors duration-300 [.dark_&]:border-white/10 [.dark_&]:bg-white/5">
                  <Icon className="h-7 w-7 text-brand" />
                </div>

                {/* Visual title only — H3s live on the tab list for a clean outline */}
                <p className="mt-7 font-display text-3xl font-bold tracking-tight text-foreground transition-colors duration-300 sm:text-4xl lg:text-[2.6rem] lg:leading-tight [.dark_&]:text-white">
                  {loc(activeItem.title, locale)}
                </p>

                {/* Paragraph */}
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted transition-colors duration-300 sm:text-lg [.dark_&]:text-white/70">
                  {loc(activeItem.body, locale)}
                </p>
              </div>

              {/* Bottom Row: Arrow Button + Tags */}
              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-8 transition-colors duration-300 [.dark_&]:border-white/10">
                <button
                  type="button"
                  aria-label="Next feature"
                  onClick={() => setActive((active + 1) % items.length)}
                  className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface-2/60 text-foreground transition-all duration-300 hover:scale-105 hover:border-brand hover:bg-brand/10 hover:text-brand active:scale-95 [.dark_&]:border-white/15 [.dark_&]:bg-white/5 [.dark_&]:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="flex flex-wrap items-center gap-2.5">
                  {activeMeta.tags.map((tag) => (
                    <span
                      key={tag.en}
                      className="rounded-full border border-line bg-surface-2/70 px-4 py-2 text-xs font-medium text-foreground/80 shadow-xs transition-colors hover:border-brand/40 sm:text-sm [.dark_&]:border-white/10 [.dark_&]:bg-white/[0.04] [.dark_&]:text-white/80 [.dark_&]:hover:border-white/20"
                    >
                      {loc(tag, locale)}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}



