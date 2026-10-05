import type { Locale } from "@/content/types";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { pickLocale } from "@/sanity/lib/locale";
import {
  latestPortfolioProjectsQuery,
  portfolioCategoriesQuery,
  portfolioProjectsQuery,
} from "@/sanity/lib/queries";
import type { SanityImage, SanityPortfolioCategory, SanityPortfolioProject } from "@/sanity/lib/types";

export type PortfolioCategoryView = {
  slug: string;
  title: string;
  projectCount: number;
};

export type PortfolioProjectView = {
  id: string;
  slug: string;
  title: string;
  description: string;
  url: string;
  categorySlug: string;
  categoryTitle: string;
  image?: SanityImage;
};

export type PortfolioSliderProject = PortfolioProjectView & {
  imageSrc: string;
};

/** @deprecated Use PortfolioSliderProject */
export type PortfolioFanProject = PortfolioSliderProject;

export async function getPortfolioCategories(): Promise<SanityPortfolioCategory[]> {
  try {
    return await client.fetch<SanityPortfolioCategory[]>(
      portfolioCategoriesQuery,
      {},
      { next: { tags: ["portfolio-categories"] } },
    );
  } catch (error) {
    console.error("Failed to load portfolio categories from Sanity.", error);
    return [];
  }
}

function isValidPortfolioProject(project: SanityPortfolioProject) {
  return Boolean(
    project._id &&
      project.slug?.trim() &&
      pickLocale(project.title, "en") &&
      pickLocale(project.description, "en") &&
      project.url?.trim() &&
      project.category?.slug &&
      pickLocale(project.category.title, "en") &&
      getPortfolioProjectImageUrl(project.image),
  );
}

export async function getLatestPortfolioProjects(limit = 5): Promise<SanityPortfolioProject[]> {
  try {
    const projects = await client.fetch<SanityPortfolioProject[]>(
      latestPortfolioProjectsQuery,
      { limit },
      { next: { tags: ["portfolio"] } },
    );

    return projects.filter(isValidPortfolioProject);
  } catch (error) {
    console.error("Failed to load latest portfolio projects from Sanity.", error);
    return [];
  }
}

export async function getPortfolioProjects(): Promise<SanityPortfolioProject[]> {
  try {
    const projects = await client.fetch<SanityPortfolioProject[]>(
      portfolioProjectsQuery,
      {},
      { next: { tags: ["portfolio"] } },
    );

    return projects.filter(isValidPortfolioProject);
  } catch (error) {
    console.error("Failed to load portfolio projects from Sanity.", error);
    return [];
  }
}

export function mapPortfolioCategories(
  categories: SanityPortfolioCategory[],
  locale: Locale,
): PortfolioCategoryView[] {
  return categories
    .map((category) => ({
      slug: category.slug,
      title: pickLocale(category.title, locale),
      projectCount: category.projectCount ?? 0,
    }))
    .filter((category) => category.slug && category.title && category.projectCount > 0);
}

export function mapPortfolioProjects(
  projects: SanityPortfolioProject[],
  locale: Locale,
): PortfolioProjectView[] {
  return projects
    .map((project) => ({
      id: project._id,
      slug: project.slug,
      title: pickLocale(project.title, locale),
      description: pickLocale(project.description, locale),
      url: project.url,
      categorySlug: project.category?.slug ?? "",
      categoryTitle: pickLocale(project.category?.title, locale),
      image: project.image,
    }))
    .filter(
      (project) =>
        project.title && project.description && project.url && project.categorySlug && project.categoryTitle,
    );
}

/** Card cover tuned for 16:10 portfolio tiles. */
export function getPortfolioProjectImageUrl(image?: SanityImage | null) {
  if (!image?.asset) return null;

  return urlForImage(image).width(1440).height(900).fit("crop").auto("format").quality(85).url();
}

/** Wide cover for the home page portfolio hero slider (fills card, no letterboxing). */
export function getPortfolioHeroImageUrl(image?: SanityImage | null) {
  if (!image?.asset) return null;

  return urlForImage(image).width(1600).height(900).fit("crop").auto("format").quality(85).url();
}

export function mapPortfolioSliderProjects(
  projects: SanityPortfolioProject[],
  locale: Locale,
): PortfolioSliderProject[] {
  return mapPortfolioProjects(projects, locale)
    .map((project) => {
      const imageSrc = getPortfolioHeroImageUrl(project.image);
      if (!imageSrc) return null;
      return { ...project, imageSrc };
    })
    .filter((project): project is PortfolioSliderProject => project !== null);
}

/** @deprecated Use mapPortfolioSliderProjects */
export function mapPortfolioFanProjects(
  projects: SanityPortfolioProject[],
  locale: Locale,
): PortfolioFanProject[] {
  return mapPortfolioSliderProjects(projects, locale);
}
