"use client";

import {
  applyTheme,
  getStoredTheme,
  resolveTheme,
  switchTheme,
  type Theme,
} from "@/components/theme/theme";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: (origin?: { x: number; y: number }) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const current = resolveTheme();
    // Sync DOM without writing storage — system default must stay unset until the user toggles.
    applyTheme(current, { persist: false });
    setThemeState(current);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const onSystemChange = () => {
      // Only follow OS changes when the visitor has not chosen a theme manually.
      if (getStoredTheme()) return;
      const next: Theme = media.matches ? "dark" : "light";
      applyTheme(next, { persist: false });
      setThemeState(next);
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next);
    setThemeState(next);
  }, []);

  const toggle = useCallback((origin?: { x: number; y: number }) => {
    setThemeState((current) => {
      const next: Theme = current === "dark" ? "light" : "dark";
      switchTheme(next, origin);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ theme, setTheme, toggle }), [theme, setTheme, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
