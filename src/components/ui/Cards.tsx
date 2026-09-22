import { Icon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({
  href,
  icon,
  title,
  description,
  cta,
  featured = false,
  layout = "stack",
}: {
  href: string;
  icon: string;
  title: string;
  description: string;
  cta: string;
  featured?: boolean;
  layout?: "stack" | "row";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "card-hover group relative flex h-full rounded-2xl border border-line bg-surface p-6",
        layout === "row"
          ? "flex-col gap-5 sm:flex-row sm:items-start sm:gap-6 sm:p-7"
          : "flex-col",
        featured && "bg-linear-to-b from-brand/10 to-surface",
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110",
          layout === "row" ? "h-12 w-12 sm:h-14 sm:w-14" : "mb-5 h-11 w-11",
        )}
      >
        <Icon name={icon} className={layout === "row" ? "h-6 w-6" : "h-5 w-5"} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{description}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function IndustryCard({
  href,
  icon,
  title,
  tagline,
  cta,
  layout = "stack",
}: {
  href: string;
  icon: string;
  title: string;
  tagline: string;
  cta?: string;
  layout?: "stack" | "row";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "card-hover group relative flex h-full rounded-2xl border border-line bg-surface",
        layout === "row"
          ? "flex-col gap-5 p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-7"
          : "flex-col p-5",
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-center text-brand transition-transform duration-300 group-hover:scale-110",
          layout === "row"
            ? "h-12 w-12 rounded-xl border border-brand/30 bg-brand/10 sm:h-14 sm:w-14"
            : "mb-4 h-6 w-6",
        )}
      >
        <Icon name={icon} className={layout === "row" ? "h-6 w-6" : "h-6 w-6"} />
      </div>
      <div className="min-w-0 flex-1">
        <h3
          className={cn(
            "font-display font-semibold text-foreground",
            layout === "row" ? "text-xl sm:text-2xl" : "text-lg",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-2 leading-relaxed text-muted",
            layout === "row" ? "text-sm sm:text-base" : "text-sm",
          )}
        >
          {tagline}
        </p>
        {cta ? (
          <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
            {cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
          </span>
        ) : null}
      </div>
    </Link>
  );
}

export function EmptyState({
  title,
  body,
  cta,
  href,
}: {
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-dashed border-line bg-surface px-6 py-16 text-center sm:px-12">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <h2 className="relative break-words text-balance font-display text-[clamp(1.5rem,4vw,1.875rem)] font-bold text-foreground">{title}</h2>
      <p className="relative mx-auto mt-4 max-w-2xl text-muted">{body}</p>
      <div className="relative mt-8 flex justify-center">
        <ButtonLink href={href}>{cta}</ButtonLink>
      </div>
    </div>
  );
}
