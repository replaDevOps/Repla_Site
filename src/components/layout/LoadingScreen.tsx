"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Non-blocking first-visit mark — does not cover the page. */
export function LoadingScreen() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (sessionStorage.getItem("repla-loaded")) return;
    setPulse(true);
    const t = window.setTimeout(() => {
      sessionStorage.setItem("repla-loaded", "1");
      setPulse(false);
    }, 500);
    return () => window.clearTimeout(t);
  }, []);

  if (!pulse) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-20 end-6 z-40 opacity-80 sm:bottom-6"
      role="status"
      aria-label="Loading"
    >
      <Image
        src="/logo.png"
        alt="REPLA Technologies"
        title="REPLA Technologies"
        width={36}
        height={36}
        className="logo-dark-only h-9 w-9 rounded-full"
      />
      <Image
        src="/logo-light.png"
        alt="REPLA Technologies"
        title="REPLA Technologies"
        width={36}
        height={36}
        className="logo-light-only h-9 w-9 object-contain"
      />
    </div>
  );
}
