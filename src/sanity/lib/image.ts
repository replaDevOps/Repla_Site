import { createImageUrlBuilder } from "@sanity/image-url";

import { client } from "@/sanity/lib/client";
import type { SanityImage } from "@/sanity/lib/types";

const builder = createImageUrlBuilder(client);

function parseDimensionsFromRef(ref: string) {
  const match = ref.match(/-(\d+)x(\d+)-/);
  if (!match) return { width: 1200, height: 675 };
  return { width: Number(match[1]), height: Number(match[2]) };
}

export function getSanityImageDimensions(image?: SanityImage | null) {
  const dimensions = image?.asset?.metadata?.dimensions;
  if (dimensions?.width && dimensions?.height) {
    return { width: dimensions.width, height: dimensions.height };
  }

  const ref = image?.asset?._ref;
  if (ref) return parseDimensionsFromRef(ref);

  return { width: 1200, height: 675 };
}

export function getSanityImageUrl(
  image?: SanityImage | null,
  options?: { width?: number; height?: number },
) {
  if (!image?.asset) return null;

  if (image.asset.url) {
    const url = new URL(image.asset.url);
    if (options?.width) url.searchParams.set("w", String(options.width));
    if (options?.height) url.searchParams.set("h", String(options.height));
    url.searchParams.set("auto", "format");
    return url.toString();
  }

  let imageBuilder = urlForImage(image).auto("format").quality(85);
  if (options?.width) imageBuilder = imageBuilder.width(options.width);
  if (options?.height) imageBuilder = imageBuilder.height(options.height);
  return imageBuilder.url();
}

export function urlForImage(source: Parameters<ReturnType<typeof createImageUrlBuilder>["image"]>[0]) {
  return builder.image(source);
}
