import { defineField, defineType } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Localized string",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: "en",
      title: "English",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ar",
      title: "Arabic",
      type: "string",
    }),
  ],
});

export const localeText = defineType({
  name: "localeText",
  title: "Localized text",
  type: "object",
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: "en",
      title: "English",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ar",
      title: "Arabic",
      type: "text",
      rows: 4,
    }),
  ],
});
