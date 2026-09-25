import Image from "next/image";

import { getSanityImageDimensions, getSanityImageUrl } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/lib/types";
import { cn } from "@/lib/cn";

type BlogImageProps = {
  image?: SanityImage | null;
  alt?: string;
  className?: string;
  figureClassName?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
};

export function BlogImage({
  image,
  alt,
  className,
  figureClassName,
  imgClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 720px",
  fill = false,
}: BlogImageProps) {
  if (!image?.asset) return null;

  const { width, height } = getSanityImageDimensions(image);
  const targetWidth = fill ? Math.min(width, 1400) : Math.min(width, 1200);
  const src = getSanityImageUrl(image, { width: targetWidth });
  if (!src) return null;

  const imageAlt = alt ?? image.alt ?? "";

  if (fill) {
    return (
      <figure className={cn("relative overflow-hidden", figureClassName, className)}>
        <Image
          src={src}
          alt={imageAlt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imgClassName)}
        />
      </figure>
    );
  }

  const scaledHeight = Math.round((targetWidth / width) * height);

  return (
    <figure className={cn("overflow-hidden", figureClassName)}>
      <Image
        src={src}
        alt={imageAlt}
        width={targetWidth}
        height={scaledHeight}
        priority={priority}
        sizes={sizes}
        className={cn("h-auto w-full", imgClassName, className)}
      />
      {imageAlt ? <figcaption className="px-1 pt-2 text-sm text-muted">{imageAlt}</figcaption> : null}
    </figure>
  );
}
