import { cn } from "@/lib/cn";

type BlogCalloutProps = {
  title: string;
  variant?: "learn" | "takeaway" | "info";
  items?: string[];
};

const variantStyles = {
  learn: "border-brand/30 bg-brand/5",
  takeaway: "border-emerald-500/30 bg-emerald-500/5",
  info: "border-line bg-surface-2",
} as const;

export function BlogCallout({ title, variant = "info", items = [] }: BlogCalloutProps) {
  if (!items.length) return null;

  return (
    <aside
      className={cn(
        "my-8 rounded-2xl border px-5 py-5 sm:px-6",
        variantStyles[variant] ?? variantStyles.info,
      )}
    >
      <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/80">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
