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
          "relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28",
          containerClassName,
        )}
      >
        {eyebrow ? (
          <span className="mb-4 inline-block max-w-full break-words rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="max-w-4xl break-words text-balance font-display text-[clamp(1.75rem,5.5vw,3.25rem)] font-bold leading-[1.1] text-foreground">
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
