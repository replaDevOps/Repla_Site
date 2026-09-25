import { defineArrayMember, defineType } from "sanity";

import { contentCallout, contentFaq, contentTable } from "@/sanity/schemaTypes/contentBlocks";

export const blockContent = defineType({
  name: "blockContent",
  title: "Block content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (rule) =>
                  rule.uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineArrayMember({ type: "contentCallout" }),
    defineArrayMember({ type: "contentTable" }),
    defineArrayMember({ type: "contentFaq" }),
  ],
});

export const localeBlockContent = defineType({
  name: "localeBlockContent",
  title: "Localized content",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    {
      name: "en",
      title: "English",
      type: "blockContent",
      validation: (rule) => rule.required(),
    },
    {
      name: "ar",
      title: "Arabic",
      type: "blockContent",
    },
  ],
});
