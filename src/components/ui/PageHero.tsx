import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  containerClassName,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Match navbar/footer width (`max-w-7xl`) when set. */
  containerClassName?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb absolute -top-24 start-1/4 h-80 w-80" />
        <div className="absolute inset-0 grid-bg opacity-70" />
      </div>
      <div
        className={cn(
          "relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28",
          containerClassName,
        )}
      >
        {eyebrow ? (
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl font-display text-[clamp(1.9rem,7vw,2.5rem)] font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base font-normal leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
