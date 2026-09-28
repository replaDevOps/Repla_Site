import { loc, type Locale, type L as LocaleString } from "@/content/types";
import { cn } from "@/lib/cn";

type TestimonialCardProps = {
  locale: Locale;
  name: LocaleString;
  role: LocaleString;
  company: LocaleString;
  location?: LocaleString;
  review: LocaleString;
  rating: number;
  initials: string;
  className?: string;
};

export function TestimonialCard({
  locale,
  name,
  role,
  company,
  location,
  review,
  rating,
  initials,
  className,
}: TestimonialCardProps) {
  const reviewText = loc(review, locale);
  const roleLine = [loc(role, locale), loc(company, locale)].filter(Boolean).join(", ");

  return (
    <article
      className={cn(
        "flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-4 sm:p-6 md:p-7",
        className,
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <p
          className="shrink-0 text-xs tracking-[0.18em] text-brand sm:text-sm sm:tracking-[0.2em]"
          role="img"
          aria-label={`${rating} out of 5 stars`}
        >
          ★★★★★
        </p>
        <blockquote className="testimonial-quote-scroll mt-2 min-h-0 flex-1 overflow-y-auto sm:mt-2.5">
          <p className="text-sm leading-relaxed text-foreground/90 [overflow-wrap:anywhere] sm:text-base md:text-[1.05rem]">
            &ldquo;{reviewText}&rdquo;
          </p>
        </blockquote>
      </div>

      <footer className="mt-4 flex shrink-0 items-center gap-2.5 border-t border-line pt-4 sm:mt-6 sm:gap-3 sm:pt-5">
        <div
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white sm:h-[42px] sm:w-[42px] sm:text-sm"
        >
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="break-words text-sm font-semibold text-foreground sm:text-[15px]">
            {loc(name, locale)}
          </p>
          <p className="break-words text-xs text-muted sm:text-sm">{roleLine}</p>
          {location ? (
            <p className="break-words text-[11px] text-muted/80 sm:text-xs">{loc(location, locale)}</p>
          ) : null}
        </div>
      </footer>
    </article>
  );
}
