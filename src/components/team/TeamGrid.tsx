import { Reveal } from "@/components/ui/Reveal";
import { getTeamMemberImageUrl } from "@/sanity/lib/team";
import type { SanityTeamMember } from "@/sanity/lib/types";
import Image from "next/image";

export function TeamGrid({ members }: { members: SanityTeamMember[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member, index) => {
        const src = getTeamMemberImageUrl(member.image);
        if (!src) return null;

        return (
          <li key={member._id} className="min-w-0">
            <Reveal className="h-full" delay={Math.min(index * 0.05, 0.24)}>
              <article className="card-hover flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface">
                <div className="relative aspect-[4/5] w-full shrink-0 bg-surface-2">
                  <Image
                    src={src}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex h-[6.25rem] shrink-0 flex-col justify-center overflow-hidden px-4 text-center sm:px-5">
                  <h2 className="line-clamp-2 break-words font-display text-xl font-semibold text-foreground">
                    {member.name}
                  </h2>
                  <p className="mt-1 line-clamp-2 break-words text-sm text-muted">{member.role}</p>
                </div>
              </article>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
