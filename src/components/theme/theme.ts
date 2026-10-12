/** Bumped so older auto-saved "light" defaults don't override the new system preference. */
export const THEME_STORAGE_KEY = "repla-theme-v2";

export type Theme = "light" | "dark";

/** Inline boot script: saved choice wins; otherwise follow OS/browser color scheme. */
export const THEME_SCRIPT = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");var r=document.documentElement;r.classList.remove("light","dark");r.classList.add(t);r.style.colorScheme=t;r.setAttribute("data-theme",t);}catch(e){var d=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;var f=d?"dark":"light";document.documentElement.classList.add(f);document.documentElement.style.colorScheme=f;}})();`;

export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Explicit user choice from storage, or `null` when the site should follow the system. */
export function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* ignore private-mode storage failures */
  }
  return null;
}

export function resolveTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme();
}

export function readTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

export function applyTheme(theme: Theme, options?: { persist?: boolean }) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
  root.setAttribute("data-theme", theme);

  if (options?.persist === false) return;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* ignore private-mode storage failures */
  }
}

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => { ready: Promise<void> };
};

export function switchTheme(next: Theme, origin?: { x: number; y: number }) {
  const apply = () => applyTheme(next);
  const doc = document as ViewTransitionDocument;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || typeof doc.startViewTransition !== "function") {
    apply();
    return;
  }

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? 0;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  const transition = doc.startViewTransition(apply);
  transition.ready
    .then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
        },
        {
          duration: 560,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    })
    .catch(() => {
      /* view transition aborted */
    });
}
