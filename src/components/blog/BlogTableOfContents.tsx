import type { TocItem } from "@/sanity/lib/toc";
import { cn } from "@/lib/cn";

export function BlogTableOfContents({ title, items }: { title: string; items: TocItem[] }) {
  if (!items.length) return null;

  return (
    <nav aria-label={title} className="rounded-2xl border border-line bg-surface p-5">
      <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
      <ol className="mt-4 space-y-2 text-sm">
        {items.map((item) => (
          <li
            key={item.id}
            className={cn(item.level === 3 && "ps-4")}
          >
            <a
              href={`#${item.id}`}
              className="block rounded-lg px-2 py-1.5 text-foreground/80 transition-colors hover:bg-foreground/[0.04] hover:text-brand"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
