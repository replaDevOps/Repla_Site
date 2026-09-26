import type { SchemaTypeDefinition } from "sanity";

import { author } from "@/sanity/schemaTypes/author";
import { blockContent, localeBlockContent } from "@/sanity/schemaTypes/blockContent";
import { contentCallout, contentFaq, contentTable } from "@/sanity/schemaTypes/contentBlocks";
import { category } from "@/sanity/schemaTypes/category";
import { faq } from "@/sanity/schemaTypes/faq";
import { localeString, localeText } from "@/sanity/schemaTypes/localeString";
import { post } from "@/sanity/schemaTypes/post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    localeText,
    contentCallout,
    contentTable,
    contentFaq,
    blockContent,
    localeBlockContent,
    post,
    author,
    category,
    faq,
  ],
};
