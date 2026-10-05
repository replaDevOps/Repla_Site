import { defineField, defineType } from "sanity";

export const portfolioCategory = defineType({
  name: "portfolioCategory",
  title: "Portfolio Category",
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
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first in portfolio filters.",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title.en",
      order: "order",
    },
    prepare({ title, order }) {
      return {
        title: title || "Untitled category",
        subtitle: order != null ? `#${order}` : undefined,
      };
    },
  },
});
