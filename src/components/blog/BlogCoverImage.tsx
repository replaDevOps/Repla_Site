import Image from "next/image";

import { getSanityImageDimensions, getSanityImageUrl, resolveSanityImageAltTitle } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/lib/types";
import { cn } from "@/lib/cn";

type BlogCoverImageProps = {
  image?: SanityImage | null;
  alt?: string;
  /** Used when Sanity image alt and `alt` prop are both empty (e.g. post title). */
  fallbackLabel?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  /** CSS aspect ratio, e.g. "16 / 9" */
  aspectRatio?: string;
};

/** Fixed-ratio cover image for blog cards and heroes. Avoids layout overlap from fill mode. */
export function BlogCoverImage({
  image,
  alt,
  fallbackLabel,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 720px",
  aspectRatio = "16 / 9",
}: BlogCoverImageProps) {
  if (!image?.asset) return null;

  const { width, height } = getSanityImageDimensions(image);
  const targetWidth = Math.min(width, 1200);
  const src = getSanityImageUrl(image, { width: targetWidth });
  if (!src) return null;

  const { alt: imageAlt, title: imageTitle } = resolveSanityImageAltTitle(image, {
    alt,
    fallback: fallbackLabel,
    defaultText: "REPLA Technologies blog cover image",
  });

  return (
    <div
      className={cn("relative w-full overflow-hidden bg-surface-2", className)}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={imageAlt}
        title={imageTitle}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
