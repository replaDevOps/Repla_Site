import Image from "next/image";

import { getSanityImageDimensions, getSanityImageUrl } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/lib/types";
import { cn } from "@/lib/cn";

type BlogCoverImageProps = {
  image?: SanityImage | null;
  alt?: string;
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

  const imageAlt = alt ?? image.alt ?? "";

  return (
    <div
      className={cn("relative w-full overflow-hidden bg-surface-2", className)}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
