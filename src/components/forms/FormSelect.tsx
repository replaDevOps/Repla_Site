"use client";

import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

export type FormSelectOption = { value: string; label: string };

export function FormSelect({
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
  required,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: FormSelectOption[];
  placeholder: string;
  error?: string;
  required?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() => Math.max(0, options.findIndex((o) => o.value === value)));
  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();
  const selected = options.find((o) => o.value === value);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const justOpened = open && !wasOpen.current;
    wasOpen.current = open;
    if (!justOpened) return;
    const idx = options.findIndex((o) => o.value === value);
    setActive(idx >= 0 ? idx : 0);
    const id = window.requestAnimationFrame(() => listRef.current?.focus());
    return () => window.cancelAnimationFrame(id);
  }, [open, options, value]);

  function choose(next: string) {
    onChange(next);
    setOpen(false);
  }

  function onButtonKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  }

  function onListKeyDown(e: React.KeyboardEvent<HTMLUListElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(options.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(options.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const opt = options[active];
      if (opt) choose(opt.value);
    }
  }

  return (
    <div ref={rootRef} className={cn("relative mt-1.5 min-w-0", open && "z-20")}>
      <input type="hidden" name={name} value={value} required={required} />
      <button
        ref={btnRef}
        type="button"
        data-field={name}
        className={cn(
          "form-field flex min-h-11 touch-manipulation items-center justify-between gap-2 text-start sm:min-h-0 sm:gap-3",
          error && "form-field-error",
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={Boolean(error)}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onButtonKeyDown}
      >
        <span className={cn("min-w-0 line-clamp-2 text-start", selected ? "text-foreground" : "text-muted")}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          className={cn("h-4 w-4 shrink-0 text-muted transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>
      {open ? (
        <ul
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={`${listId}-${active}`}
          className="form-menu absolute inset-x-0 top-[calc(100%+6px)] z-30 max-h-[min(15rem,45dvh)] overflow-auto rounded-xl border border-line bg-surface p-1 shadow-[var(--panel-shadow)] sm:max-h-60"
          onKeyDown={onListKeyDown}
          ref={listRef}
        >
          {options.map((opt, i) => {
            const isSelected = opt.value === value;
            const isActive = i === active;
            return (
              <li
                key={opt.value}
                id={`${listId}-${i}`}
                role="option"
                aria-selected={isSelected}
                className={cn(
                  "cursor-pointer break-words rounded-lg px-3 py-2.5 text-sm leading-snug transition-colors",
                  isActive && "bg-foreground/[0.04]",
                  isSelected && "bg-brand-soft text-foreground",
                )}
                onMouseEnter={() => setActive(i)}
                onPointerDown={(e) => e.preventDefault()}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  choose(opt.value);
                }}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
