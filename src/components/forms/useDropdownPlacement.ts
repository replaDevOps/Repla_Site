"use client";

import { useEffect, useState, type RefObject } from "react";

export type DropdownPlacement = {
  placement: "down" | "up";
  maxHeight: number;
};

export function useDropdownPlacement(open: boolean, anchorRef: RefObject<HTMLElement | null>) {
  const [state, setState] = useState<DropdownPlacement>({
    placement: "down",
    maxHeight: 240,
  });

  useEffect(() => {
    if (!open) return;

    const update = () => {
      const el = anchorRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const gap = 6;
      const preferred = Math.min(240, window.innerHeight * 0.45);
      const spaceBelow = window.innerHeight - rect.bottom - gap;
      const spaceAbove = rect.top - gap;
      const openDown = spaceBelow >= 120 || spaceBelow >= spaceAbove;
      const available = Math.max(0, openDown ? spaceBelow : spaceAbove);

      setState({
        placement: openDown ? "down" : "up",
        maxHeight: Math.min(preferred, Math.max(available, 120)),
      });
    };

    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open, anchorRef]);

  return state;
}
