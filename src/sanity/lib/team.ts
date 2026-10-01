import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { teamMembersQuery } from "@/sanity/lib/queries";
import type { SanityImage, SanityTeamMember } from "@/sanity/lib/types";

export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  try {
    const members = await client.fetch<SanityTeamMember[]>(
      teamMembersQuery,
      {},
      { next: { tags: ["team"] } },
    );

    return members.filter(
      (member) =>
        Boolean(
          member._id &&
            member.name?.trim() &&
            member.role?.trim() &&
            getTeamMemberImageUrl(member.image),
        ),
    );
  } catch (error) {
    console.error("Failed to load team members from Sanity.", error);
    return [];
  }
}

/** Portrait URL that respects the Sanity image hotspot and crop. */
export function getTeamMemberImageUrl(image?: SanityImage | null) {
  if (!image?.asset) return null;

  return urlForImage(image).width(800).height(1000).fit("crop").auto("format").quality(80).url();
}
