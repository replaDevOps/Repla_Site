"use client";

import { useEffect } from "react";

/**
 * Eases mouse-wheel scrolling instead of letting the browser jump in fixed steps.
 * Native scroll position is still the source of truth, so sticky headers,
 * IntersectionObserver reveals, and anchor links keep working.
 */
export function SmoothScroll() {
  useEffect(() => {
    // Touch devices already have momentum from the OS; don't fight it.
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    // Reduced motion keeps the glide, just short enough to feel near-instant.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let easePerFrame = reduced.matches ? 0.45 : 0.16;
    const onMotionChange = (e: MediaQueryListEvent) => {
      easePerFrame = e.matches ? 0.45 : 0.16;
    };
    reduced.addEventListener("change", onMotionChange);

    const root = document.documentElement;
    let target = window.scrollY;
    let frame = 0;
    let animating = false;

    const maxScroll = () => Math.max(0, root.scrollHeight - window.innerHeight);

    /** Lets nested scrollers (mobile menu, dialogs, code blocks) scroll natively. */
    const insideOwnScroller = (node: EventTarget | null, delta: number) => {
      let el = node instanceof Element ? node : null;
      while (el && el !== document.body && el !== root) {
        if (el.hasAttribute("data-no-smooth-scroll")) return true;
        if (el.hasAttribute("data-scroll-container")) {
          const atTop = el.scrollTop <= 0;
          const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
          if (!((delta < 0 && atTop) || (delta > 0 && atBottom))) return true;
        }
        el = el.parentElement;
      }
      return false;
    };

    let last = 0;
    let written = -1;
    let stalled = 0;

    const release = (position: number) => {
      animating = false;
      frame = 0;
      last = 0;
      written = -1;
      stalled = 0;
      target = position;
    };

    const tick = (now: number) => {
      if (document.hidden) {
        release(window.scrollY);
        return;
      }

      const dt = last ? Math.min(now - last, 64) : 16.7;
      last = now;
      const current = window.scrollY;

      // Anchor jump, keyboard, or scrollbar drag moved the page: hand control back.
      if (written >= 0 && Math.abs(current - written) > 40) {
        release(current);
        return;
      }
      const distance = target - current;
      if (Math.abs(distance) <= 1) {
        release(current);
        return;
      }

      // Time-based easing so the feel is identical on 60Hz and 144Hz displays.
      const ease = 1 - Math.pow(1 - easePerFrame, dt / 16.7);
      window.scrollTo({ top: current + distance * ease, behavior: "instant" });

      // Fractional device pixel ratios can make the target unreachable, and the
      // document ends clamp scrolling; either way, stop instead of fighting it.
      const applied = window.scrollY;
      if (Math.abs(applied - current) < 0.05 && ++stalled > 2) {
        release(applied);
        return;
      }
      if (Math.abs(applied - current) >= 0.05) stalled = 0;
      written = applied;
      frame = requestAnimationFrame(tick);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || event.defaultPrevented) return;
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (insideOwnScroller(event.target, event.deltaY)) return;

      // Line/page wheel modes report small deltas; convert them to pixels.
      const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
      const delta = event.deltaY * scale;
      if (!delta) return;

      event.preventDefault();
      const base = animating ? target : window.scrollY;
      target = Math.min(Math.max(base + delta, 0), maxScroll());
      stalled = 0;
      written = -1;
      if (!animating) {
        animating = true;
        last = 0;
        frame = requestAnimationFrame(tick);
      }
    };

    // Keyboard, scrollbar drags, and anchor jumps bypass the wheel handler.
    const onScroll = () => {
      if (!animating) target = window.scrollY;
    };

    const onVisibility = () => {
      if (document.hidden && animating) release(window.scrollY);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onMotionChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
