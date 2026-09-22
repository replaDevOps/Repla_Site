"use client";

import { cn } from "@/lib/cn";
import {
  DEFAULT_PHONE_COUNTRY,
  PHONE_COUNTRIES,
  findCountry,
  formatInternationalPhone,
} from "@/lib/phone-countries";
import { ChevronDown, Search } from "lucide-react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

export function PhoneField({
  error,
  placeholder,
  searchLabel,
  emptyLabel,
  onChange,
}: {
  error?: string;
  placeholder: string;
  searchLabel: string;
  emptyLabel: string;
  onChange?: (value: string, iso: string, national: string) => void;
}) {
  const [iso, setIso] = useState(DEFAULT_PHONE_COUNTRY);
  const [national, setNational] = useState("");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const country = findCountry(iso);
  const combined = formatInternationalPhone(iso, national);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PHONE_COUNTRIES;
    return PHONE_COUNTRIES.filter(
      (c) => c.name.toLowerCase().includes(q) || c.dial.includes(q) || c.iso.toLowerCase().includes(q),
    );
  }, [query]);

  function emit(nextIso: string, nextNational: string) {
    onChange?.(formatInternationalPhone(nextIso, nextNational), nextIso, nextNational);
  }

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    const focusTimer = window.setTimeout(() => searchRef.current?.focus(), 20);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative mt-1.5 min-w-0", open && "z-20")}>
      <input type="hidden" name="phone" value={combined} />
      <input type="hidden" name="phoneCountry" value={iso} />
      <div className={cn("form-control flex overflow-hidden", error && "form-control-error")} dir="ltr">
        <button
          type="button"
          className="flex shrink-0 touch-manipulation items-center gap-1 border-e border-line px-2.5 py-2.5 text-xs text-foreground outline-none transition-colors hover:bg-foreground/[0.03] focus-visible:outline-none sm:gap-1.5 sm:px-3 sm:py-3 sm:text-sm"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={country.name}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-medium tabular-nums">{country.dial}</span>
          <ChevronDown
            className={cn("h-3.5 w-3.5 text-muted transition-transform duration-200", open && "rotate-180")}
            aria-hidden
          />
        </button>
        <input
          data-field="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder={placeholder}
          value={national}
          aria-invalid={Boolean(error)}
          className="min-w-0 flex-1 bg-transparent px-2.5 py-2.5 text-base text-foreground outline-none placeholder:text-muted sm:px-3 sm:py-3 sm:text-sm"
          onChange={(e) => {
            setNational(e.target.value);
            emit(iso, e.target.value);
          }}
        />
      </div>
      {open ? (
        <div className="form-menu absolute inset-x-0 top-[calc(100%+6px)] z-30 overflow-hidden rounded-xl border border-line bg-surface shadow-[var(--panel-shadow)]">
          <div className="flex items-center gap-2 border-b border-line px-3 py-2">
            <Search className="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden />
            <input
              ref={searchRef}
              type="search"
              value={query}
              placeholder={searchLabel}
              className="w-full bg-transparent py-1 text-sm text-foreground outline-none placeholder:text-muted"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <ul id={listId} role="listbox" className="max-h-[min(14rem,45dvh)] overflow-auto p-1 sm:max-h-56">
            {filtered.length === 0 ? (
              <li className="px-3 py-2 text-sm text-muted">{emptyLabel}</li>
            ) : (
              filtered.map((c) => {
                const selected = c.iso === iso;
                return (
                  <li key={c.iso}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={selected}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-start text-sm transition-colors hover:bg-foreground/[0.04]",
                        selected && "bg-brand-soft",
                      )}
                      onClick={() => {
                        setIso(c.iso);
                        setOpen(false);
                        setQuery("");
                        emit(c.iso, national);
                      }}
                    >
                      <span className="min-w-0 flex-1 break-words text-foreground">{c.name}</span>
                      <span className="tabular-nums text-muted">{c.dial}</span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
