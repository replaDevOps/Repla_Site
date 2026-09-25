import { defineArrayMember, defineField, defineType } from "sanity";

export const contentCallout = defineType({
  name: "contentCallout",
  title: "Callout box",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Style",
      type: "string",
      options: {
        list: [
          { title: "What you'll learn", value: "learn" },
          { title: "Key takeaways", value: "takeaway" },
          { title: "Note / info", value: "info" },
        ],
        layout: "radio",
      },
      initialValue: "info",
    }),
    defineField({
      name: "items",
      title: "Bullet points",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: { title: "title", variant: "variant", items: "items" },
    prepare({ title, variant, items }) {
      return {
        title: title || "Callout",
        subtitle: `${variant ?? "info"} · ${items?.length ?? 0} items`,
      };
    },
  },
});

export const contentTable = defineType({
  name: "contentTable",
  title: "Comparison table",
  type: "object",
  fields: [
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
      description: "Optional title shown above the table.",
    }),
    defineField({
      name: "headers",
      title: "Column headers",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.min(2).max(6),
    }),
    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "tableRow",
          title: "Row",
          fields: [
            defineField({
              name: "cells",
              title: "Cells",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
              validation: (rule) => rule.min(2).max(6),
            }),
          ],
          preview: {
            select: { cells: "cells" },
            prepare({ cells }) {
              return { title: cells?.join(" · ") || "Empty row" };
            },
          },
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: { caption: "caption", headers: "headers", rows: "rows" },
    prepare({ caption, headers, rows }) {
      return {
        title: caption || "Table",
        subtitle: `${headers?.length ?? 0} columns · ${rows?.length ?? 0} rows`,
      };
    },
  },
});

export const contentFaq = defineType({
  name: "contentFaq",
  title: "FAQ section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Section title",
      type: "string",
      initialValue: "Frequently Asked Questions",
    }),
    defineField({
      name: "items",
      title: "Questions",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "faqItem",
          title: "FAQ item",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "question" },
          },
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: { title: "title", items: "items" },
    prepare({ title, items }) {
      return {
        title: title || "FAQ",
        subtitle: `${items?.length ?? 0} questions`,
      };
    },
  },
});
