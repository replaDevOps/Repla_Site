"use client";

import { cn } from "@/lib/cn";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FAQ_MOTION_EASE = "motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)]";
const iconTransition = cn(
  "motion-safe:transition-[opacity,transform] motion-safe:duration-[650ms]",
  FAQ_MOTION_EASE,
);
const panelTransition = cn(
  "grid motion-safe:transition-[grid-template-rows,opacity] motion-safe:duration-[780ms]",
  FAQ_MOTION_EASE,
);

export function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="relative flex w-full items-center justify-between gap-4 px-5 py-4 text-start btn-animate-soft"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="min-w-0 flex-1 font-semibold text-foreground">{item.q}</span>
              <span className="relative h-4 w-4 shrink-0" aria-hidden="true">
                <Plus
                  className={cn(
                    "absolute inset-0 h-4 w-4 text-muted",
                    iconTransition,
                    isOpen ? "scale-75 opacity-0" : "scale-100 opacity-100",
                  )}
                />
                <Minus
                  className={cn(
                    "absolute inset-0 h-4 w-4 text-muted",
                    iconTransition,
                    isOpen ? "scale-100 opacity-100" : "scale-75 opacity-0",
                  )}
                />
              </span>
            </button>
            <div
              className={cn(
                panelTransition,
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
