import { defineField, defineType } from "sanity";

export const portfolioProject = defineType({
  name: "portfolioProject",
  title: "Portfolio Project",
  type: "document",
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "title.en", direction: "asc" },
      ],
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => (doc?.title as { en?: string } | undefined)?.en ?? "",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "localeText",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Cover image",
      type: "image",
      description: "Homepage screenshot or cover image shown on the portfolio card.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Describe the screenshot for SEO and accessibility (e.g. “HyfaTech homepage”).",
        }),
      ],
      validation: (rule) => rule.required().error("Cover image is required."),
    }),
    defineField({
      name: "url",
      title: "Live site URL",
      type: "url",
      description: "Production URL opened when visitors click “Visit live site”.",
      validation: (rule) =>
        rule.required().uri({ allowRelative: false, scheme: ["http", "https"] }),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "portfolioCategory" }],
      validation: (rule) => rule.required().error("Category is required."),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first on the portfolio page.",
      initialValue: 0,
      validation: (rule) =>
        rule
          .integer()
          .min(0)
          .error("Display order must be a whole number of 0 or greater."),
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "category.title.en",
      media: "image",
      order: "order",
    },
    prepare({ title, subtitle, media, order }) {
      const orderLabel = order != null ? `#${order}` : null;
      return {
        title: title || "Untitled project",
        subtitle: [orderLabel, subtitle].filter(Boolean).join(" · "),
        media,
      };
    },
  },
});
