"use client";

import type { PortableTextBlock } from "@portabletext/types";

import { PortableTextContent } from "@/components/blog/PortableTextContent";
import { cn } from "@/lib/cn";

/**
 * Renders portfolio description with the same portable-text features as the blog body
 * (headings, lists, bold, italic, highlight, links, images, callouts, tables, FAQ).
 */
export function PortfolioDescription({
  value,
  className,
  compact = true,
}: {
  value: PortableTextBlock[];
  className?: string;
  compact?: boolean;
}) {
  if (!value?.length) return null;

  return (
    <div
      className={cn(
        "portfolio-description",
        compact &&
          "min-w-0 overflow-x-auto text-sm sm:text-[15px] [&_.space-y-5]:space-y-2 [&_h2]:mt-3 [&_h2]:text-base [&_h3]:mt-2 [&_h3]:text-sm [&_p]:text-muted [&_figure]:my-3 [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto",
        className,
      )}
    >
      <PortableTextContent value={value} />
    </div>
  );
}
