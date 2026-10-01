import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "name", direction: "asc" },
      ],
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required().error("Name is required."),
    }),
    defineField({
      name: "role",
      title: "Role / Job Title",
      type: "string",
      validation: (rule) => rule.required().error("Role is required."),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required().error("Profile image is required."),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first on the Team page.",
      validation: (rule) =>
        rule
          .integer()
          .min(0)
          .error("Display order must be a whole number of 0 or greater."),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
      order: "order",
    },
    prepare({ title, subtitle, media, order }) {
      const orderLabel = order != null ? `#${order}` : null;
      return {
        title: title || "Untitled team member",
        subtitle: [orderLabel, subtitle].filter(Boolean).join(" · "),
        media,
      };
    },
  },
});
