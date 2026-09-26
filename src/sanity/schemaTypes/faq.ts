import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "_createdAt", direction: "asc" },
      ],
    },
  ],
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "localeString",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "localeText",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first on the FAQ page.",
      initialValue: 0,
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
      title: "question.en",
      subtitle: "answer.en",
      order: "order",
    },
    prepare({ title, subtitle, order }) {
      return {
        title: title || "Untitled FAQ",
        subtitle: order != null ? `#${order} · ${subtitle ?? ""}` : subtitle,
      };
    },
  },
});
