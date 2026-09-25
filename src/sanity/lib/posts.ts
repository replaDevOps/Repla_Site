import type { Locale } from "@/content/types";
import { client } from "@/sanity/lib/client";
import { pickLocale } from "@/sanity/lib/locale";
import {
  categoriesQuery,
  featuredPostsQuery,
  latestPostsQuery,
  postBySlugQuery,
  postSlugsQuery,
  postsQuery,
} from "@/sanity/lib/queries";
import type { SanityCategory, SanityPost, SanityPostListItem } from "@/sanity/lib/types";

export async function getPosts(): Promise<SanityPostListItem[]> {
  return client.fetch<SanityPostListItem[]>(postsQuery, {}, { next: { tags: ["posts"] } });
}

export async function getFeaturedPosts(): Promise<SanityPostListItem[]> {
  return client.fetch<SanityPostListItem[]>(featuredPostsQuery, {}, { next: { tags: ["posts"] } });
}

export async function getLatestPosts(
  limit = 5,
  excludeSlug?: string,
): Promise<SanityPostListItem[]> {
  return client.fetch<SanityPostListItem[]>(
    latestPostsQuery,
    { limit, excludeSlug: excludeSlug ?? "" },
    { next: { tags: ["posts"] } },
  );
}

export async function getCategories(): Promise<SanityCategory[]> {
  return client.fetch<SanityCategory[]>(categoriesQuery, {}, { next: { tags: ["categories"] } });
}

export async function getPostSlugs(): Promise<string[]> {
  return client.fetch<string[]>(postSlugsQuery, {}, { next: { tags: ["posts"] } });
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return client.fetch<SanityPost | null>(
    postBySlugQuery,
    { slug },
    { next: { tags: [`post:${slug}`] } },
  );
}

export function getPostTitle(post: SanityPostListItem, locale: Locale): string {
  return pickLocale(post.seoTitle, locale) || pickLocale(post.title, locale);
}

export function getPostExcerpt(post: SanityPostListItem, locale: Locale): string {
  return pickLocale(post.seoDescription, locale) || pickLocale(post.excerpt, locale);
}

export function getPostBodyBlocks(post: SanityPost, locale: Locale) {
  const localized = post.body?.[locale];
  const fallback = locale === "ar" ? post.body?.en : post.body?.ar;
  return localized?.length ? localized : fallback ?? [];
}

export function formatPostDate(date: string | undefined, locale: Locale) {
  if (!date) return "";
  return new Date(date).toLocaleDateString(locale === "ar" ? "ar-SA" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function filterPostsByCategory(
  posts: SanityPostListItem[],
  categorySlug?: string,
): SanityPostListItem[] {
  if (!categorySlug) return posts;
  return posts.filter((post) => post.categories?.some((category) => category.slug === categorySlug));
}

export function filterPostsBySearch(
  posts: SanityPostListItem[],
  query?: string,
  locale: Locale = "en",
): SanityPostListItem[] {
  const normalized = query?.trim().toLowerCase();
  if (!normalized) return posts;

  return posts.filter((post) => {
    const title = pickLocale(post.title, locale).toLowerCase();
    const excerpt = pickLocale(post.excerpt, locale).toLowerCase();
    const author = post.author?.name?.toLowerCase() ?? "";
    const categories =
      post.categories
        ?.map((category) => pickLocale(category.title, locale).toLowerCase())
        .join(" ") ?? "";

    return (
      title.includes(normalized) ||
      excerpt.includes(normalized) ||
      author.includes(normalized) ||
      categories.includes(normalized)
    );
  });
}

export function sortPostsByDate(posts: SanityPostListItem[]): SanityPostListItem[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime(),
  );
}
