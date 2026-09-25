import { defineArrayMember, defineField, defineType } from "sanity";

const serviceSlugOptions = [
  { title: "AI & Intelligent Automation", value: "ai-intelligent-automation" },
  { title: "Custom Software Development", value: "custom-software-development" },
  { title: "Web Development", value: "web-development" },
  { title: "Mobile App Development", value: "mobile-app-development" },
  { title: "Cloud & DevOps", value: "cloud-devops" },
  { title: "Cybersecurity", value: "cybersecurity" },
  { title: "IoT & Embedded Systems", value: "iot-embedded-systems" },
  { title: "UI/UX Design", value: "ui-ux-design" },
  { title: "Quality Assurance", value: "quality-assurance" },
  { title: "API Development", value: "api-development" },
  { title: "Dedicated Development Teams", value: "dedicated-development-teams" },
  { title: "IT Consulting", value: "it-consulting" },
  { title: "Maintenance & Support", value: "maintenance-support" },
  { title: "Data Engineering & Analytics", value: "data-engineering-analytics" },
];

export const post = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "seo", title: "SEO" },
    { name: "relations", title: "Relations" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: {
        source: (doc) => (doc?.title as { en?: string } | undefined)?.en ?? "",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "localeText",
      group: "content",
      description: "Short summary shown on listing cards and meta description fallback.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Cover image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "content",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured post",
      type: "boolean",
      group: "content",
      description: "Show this post in the featured section on the blog page.",
      initialValue: false,
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      group: "content",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "localeBlockContent",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "relatedServices",
      title: "Related services",
      type: "array",
      group: "relations",
      of: [
        defineArrayMember({
          type: "string",
          options: { list: serviceSlugOptions },
        }),
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "localeString",
      group: "seo",
      description: "Optional override for page title tags.",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "localeText",
      group: "seo",
      description: "Optional override for meta descriptions.",
    }),
  ],
  orderings: [
    {
      title: "Published date, newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "publishedAt",
      featured: "featured",
      media: "mainImage",
    },
    prepare({ title, subtitle, featured, media }) {
      return {
        title: title || "Untitled post",
        subtitle: `${featured ? "Featured · " : ""}${subtitle ? new Date(subtitle).toLocaleDateString() : "Draft"}`,
        media,
      };
    },
  },
});
