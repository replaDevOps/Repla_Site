import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="break-words text-balance font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight text-foreground">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base font-normal leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
