import { resolveSanityImageAltTitle } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/lib/types";

export function portfolioProjectImageSeo(
  project: { title: string; categoryTitle: string },
  image?: SanityImage | null,
) {
  const fallback = `${project.title} – ${project.categoryTitle} portfolio project screenshot`;

  return resolveSanityImageAltTitle(image, {
    fallback,
    defaultText: fallback,
  });
}

export function teamMemberImageSeo(
  member: { name: string; role: string },
  image?: SanityImage | null,
) {
  const fallback = `${member.name}, ${member.role} at REPLA Technologies`;

  return resolveSanityImageAltTitle(image, {
    fallback,
    defaultText: fallback,
  });
}

export function companyLogoSeo(label = "REPLA Technologies") {
  return {
    alt: `${label} logo`,
    title: label,
  };
}

export function brandLogoSeo(brandName: string) {
  return {
    alt: `${brandName} logo`,
    title: brandName,
  };
}
