import type { PortableTextBlock } from "@portabletext/types";

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function blockToPlainText(block: PortableTextBlock): string {
  if (block._type !== "block" || !("children" in block) || !block.children) return "";
  return block.children.map((child) => ("text" in child ? child.text : "") ?? "").join("");
}

export function extractTocFromBlocks(blocks: PortableTextBlock[]): TocItem[] {
  return blocks
    .filter(
      (block): block is PortableTextBlock & { style: string; _key: string } =>
        block._type === "block" &&
        (block.style === "h2" || block.style === "h3") &&
        typeof block._key === "string",
    )
    .map((block) => ({
      id: block._key,
      text: blockToPlainText(block),
      level: (block.style === "h2" ? 2 : 3) as 2 | 3,
    }))
    .filter((item) => item.text.trim().length > 0);
}
