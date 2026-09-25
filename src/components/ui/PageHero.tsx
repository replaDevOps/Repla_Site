import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { ArrowLeft } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  containerClassName,
  centered = false,
  backLink,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Match navbar/footer width (`max-w-7xl`) when set. */
  containerClassName?: string;
  centered?: boolean;
  backLink?: {
    href: string;
    label: string;
  };
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb absolute -top-24 start-1/4 h-80 w-80" />
        <div className="absolute inset-0 grid-bg opacity-70" />
      </div>
      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 sm:px-6",
          backLink
            ? "pb-16 pt-6 sm:pb-24 sm:pt-8 lg:pb-28"
            : "py-16 sm:py-24 lg:py-28",
          centered && "text-center",
          containerClassName,
        )}
      >
        {backLink ? (
          <Link
            href={backLink.href}
            className={cn(
              "mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand",
              centered && "mx-auto",
            )}
          >
            <ArrowLeft className="h-4 w-4 shrink-0 rtl:rotate-180" aria-hidden />
            {backLink.label}
          </Link>
        ) : null}
        {eyebrow ? (
          <span
            className={cn(
              "mb-4 inline-block max-w-full break-words rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand",
              centered && "mx-auto",
            )}
          >
            {eyebrow}
          </span>
        ) : null}
        <h1
          className={cn(
            "max-w-4xl break-words text-balance font-display text-[clamp(1.75rem,5.5vw,3.25rem)] font-bold leading-[1.1] text-foreground",
            centered && "mx-auto",
          )}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-base font-normal leading-relaxed text-muted sm:text-lg",
              centered && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
