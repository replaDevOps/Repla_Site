"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
  tone = "soft",
  from = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** `soft` = light rise; `bold` = deeper rise + scale for feature cards */
  tone?: "soft" | "bold";
  /** Slide origin: vertical (`up`) or horizontal (`start` / `end`) */
  from?: "up" | "start" | "end";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    const fallback = window.setTimeout(() => setShown(true), 900);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  const hiddenMotion =
    from === "start"
      ? tone === "bold"
        ? "-translate-x-12 opacity-0 rtl:translate-x-12"
        : "-translate-x-8 opacity-0 rtl:translate-x-8"
      : from === "end"
        ? tone === "bold"
          ? "translate-x-12 opacity-0 rtl:-translate-x-12"
          : "translate-x-8 opacity-0 rtl:-translate-x-8"
        : tone === "bold"
          ? "translate-y-8 scale-[0.96] opacity-0"
          : "translate-y-4 opacity-0";

  return (
    <div
      ref={ref}
      className={cn(
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100" : hiddenMotion,
        "motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        className,
      )}
      style={{ transitionDelay: shown ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
