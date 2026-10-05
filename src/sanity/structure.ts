import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blog posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Blog posts")),
      S.listItem()
        .title("Authors")
        .schemaType("author")
        .child(S.documentTypeList("author").title("Authors")),
      S.listItem()
        .title("Categories")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("FAQs")
        .schemaType("faq")
        .child(
          S.documentTypeList("faq")
            .title("FAQs")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Team Members")
        .schemaType("teamMember")
        .child(
          S.documentTypeList("teamMember")
            .title("Team Members")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Portfolio Categories")
        .schemaType("portfolioCategory")
        .child(
          S.documentTypeList("portfolioCategory")
            .title("Portfolio Categories")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
      S.listItem()
        .title("Portfolio Projects")
        .schemaType("portfolioProject")
        .child(
          S.documentTypeList("portfolioProject")
            .title("Portfolio Projects")
            .defaultOrdering([{ field: "order", direction: "asc" }]),
        ),
    ]);
