"use client";

import { cn } from "@/lib/cn";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const SIZE = 40;
const STROKE = 2;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollToTop() {
  const t = useTranslations("nav");
  const progressRef = useRef<SVGCircleElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const top = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(Math.max(top / max, 0), 1) : 0;

      if (progressRef.current) {
        progressRef.current.style.strokeDashoffset = `${CIRCUMFERENCE * (1 - progress)}`;
      }

      setVisible((current) => {
        const next = top > 280;
        return current === next ? current : next;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const goTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label={t("scrollToTop")}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={cn(
        "scroll-to-top fixed z-40 flex h-10 w-10 items-center justify-center rounded-full",
        "transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        visible
          ? "pointer-events-auto visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-3 opacity-0",
      )}
    >
      <svg
        className="pointer-events-none absolute inset-0 -rotate-90"
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        aria-hidden="true"
      >
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          className="text-foreground/12"
        />
        <circle
          ref={progressRef}
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          className="text-brand"
        />
      </svg>
      <span className="scroll-to-top-core relative flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
        <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
      </span>
    </button>
  );
}
