import { groq } from "next-sanity";

const imageFields = groq`
  alt,
  hotspot,
  crop,
  asset->{
    _id,
    url,
    metadata {
      dimensions {
        width,
        height,
        aspectRatio
      }
    }
  }
`;

const portableTextBlock = groq`
  ...,
  markDefs[]{
    ...,
    _type == "link" => {
      ...,
      href
    }
  },
  _type == "image" => {
    ${imageFields}
  }
`;

export const postFields = groq`
  _id,
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  featured,
  mainImage {
    ${imageFields}
  },
  relatedServices,
  seoTitle,
  seoDescription,
  "author": author->{
    name,
    "slug": slug.current,
    image {
      ${imageFields}
    }
  },
  "categories": categories[]->{
    title,
    "slug": slug.current
  }
`;

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(featured desc, publishedAt desc) {
    ${postFields}
  }
`;

export const featuredPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && featured == true] | order(publishedAt desc) [0...3] {
    ${postFields}
  }
`;

export const latestPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && slug.current != $excludeSlug]
    | order(publishedAt desc) [0...$limit] {
    ${postFields}
  }
`;

export const categoriesQuery = groq`
  *[_type == "category" && defined(slug.current)] | order(title.en asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "postCount": count(*[_type == "post" && references(^._id) && defined(slug.current)])
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }.slug
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    ${postFields},
    body {
      en[]{ ${portableTextBlock} },
      ar[]{ ${portableTextBlock} }
    }
  }
`;

export const teamMembersQuery = groq`
  *[_type == "teamMember" && defined(name) && defined(role) && defined(image.asset)]
    | order(order asc, _createdAt asc) {
    _id,
    name,
    role,
    order,
    image {
      ${imageFields}
    }
  }
`;

export const faqsQuery = groq`
  *[_type == "faq" && published != false] | order(order asc, _createdAt asc) {
    _id,
    question,
    answer,
    order
  }
`;

export const portfolioCategoriesQuery = groq`
  *[_type == "portfolioCategory" && defined(slug.current)] | order(order asc, title.en asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    order,
    "projectCount": count(*[
      _type == "portfolioProject" &&
      references(^._id) &&
      published != false &&
      defined(slug.current) &&
      defined(image.asset)
    ])
  }
`;

export const latestPortfolioProjectsQuery = groq`
  *[_type == "portfolioProject" && published != false && defined(slug.current) && defined(image.asset)]
    | order(_createdAt desc) [0...$limit] {
    _id,
    "slug": slug.current,
    title,
    description,
    url,
    order,
    _createdAt,
    "category": category->{
      _id,
      title,
      "slug": slug.current,
      order
    },
    image {
      ${imageFields}
    }
  }
`;

export const portfolioProjectsQuery = groq`
  *[_type == "portfolioProject" && published != false && defined(slug.current) && defined(image.asset)]
    | order(order asc, _createdAt asc) {
    _id,
    "slug": slug.current,
    title,
    description,
    url,
    order,
    "category": category->{
      _id,
      title,
      "slug": slug.current,
      order
    },
    image {
      ${imageFields}
    }
  }
`;
