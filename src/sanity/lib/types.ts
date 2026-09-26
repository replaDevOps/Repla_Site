import type { PortableTextBlock } from "@portabletext/types";

import type { LocaleField } from "@/sanity/lib/locale";

export type SanityImageAsset = {
  _ref?: string;
  _type?: string;
  url?: string;
  metadata?: {
    dimensions?: {
      width?: number;
      height?: number;
      aspectRatio?: number;
    };
  };
};

export type SanityImage = {
  _type?: "image";
  asset?: SanityImageAsset;
  alt?: string;
};

export type SanityAuthor = {
  name?: string;
  slug?: string;
  image?: SanityImage;
};

export type SanityCategory = {
  _id?: string;
  title?: LocaleField;
  slug?: string;
  description?: LocaleField;
  postCount?: number;
};

export type SanityPostListItem = {
  _id: string;
  slug: string;
  title: LocaleField;
  excerpt: LocaleField;
  publishedAt?: string;
  featured?: boolean;
  mainImage?: SanityImage;
  relatedServices?: string[];
  seoTitle?: LocaleField;
  seoDescription?: LocaleField;
  author?: SanityAuthor;
  categories?: SanityCategory[];
};

export type SanityPost = SanityPostListItem & {
  body?: {
    en?: PortableTextBlock[];
    ar?: PortableTextBlock[];
  };
};

export type SanityFaq = {
  _id: string;
  question: LocaleField;
  answer: LocaleField;
  order?: number;
};
