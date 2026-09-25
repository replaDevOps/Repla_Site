import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import { BlogCallout } from "@/components/blog/BlogCallout";
import { BlogContentFaq } from "@/components/blog/BlogContentFaq";
import { BlogImage } from "@/components/blog/BlogImage";
import { BlogTable } from "@/components/blog/BlogTable";

const headingClassName = "scroll-mt-28";

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => (
      <h2
        id={value._key}
        className={`mt-8 break-words font-display text-xl font-semibold text-foreground sm:mt-10 sm:text-2xl ${headingClassName}`}
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={value._key}
        className={`mt-6 break-words font-display text-lg font-semibold text-foreground sm:mt-8 sm:text-xl ${headingClassName}`}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-s-4 border-brand/50 ps-4 italic text-muted">{children}</blockquote>
    ),
    normal: ({ children }) => (
      <p className="break-words leading-relaxed text-foreground/80">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc space-y-2 ps-6 text-foreground/80">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal space-y-2 ps-6 text-foreground/80">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-surface-2 px-1.5 py-0.5 text-sm text-foreground">{children}</code>
    ),
    link: ({ children, value }) => {
      const href = value?.href;
      if (!href) return <>{children}</>;
      const external = href.startsWith("http");
      return (
        <a
          href={href}
          className="text-brand underline-offset-2 hover:underline"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => (
      <BlogImage
        image={value}
        figureClassName="my-8 rounded-2xl border border-line"
        sizes="(max-width: 768px) 100vw, 720px"
      />
    ),
    contentCallout: ({ value }) => (
      <BlogCallout
        title={value.title}
        variant={value.variant}
        items={value.items}
      />
    ),
    contentTable: ({ value }) => (
      <BlogTable caption={value.caption} headers={value.headers} rows={value.rows} />
    ),
    contentFaq: ({ value }) => <BlogContentFaq title={value.title} items={value.items} />,
  },
};

export function PortableTextContent({ value }: { value: PortableTextBlock[] }) {
  if (!value.length) return null;
  return (
    <div className="max-w-full space-y-5 break-words [overflow-wrap:anywhere]">
      <PortableText value={value} components={components} />
    </div>
  );
}
