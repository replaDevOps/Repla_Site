import { SocialLinks } from "@/components/layout/SocialLinks";
import { COMPANY } from "@/lib/site";
import { cn } from "@/lib/cn";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

type ContactCard = {
  key: string;
  label: string;
  value: string;
  href?: string;
  icon: LucideIcon;
};

const cardClass = cn(
  "group relative flex h-full min-h-full min-w-0 flex-col rounded-2xl border border-line bg-surface p-6",
  "shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-[border-color,box-shadow] duration-200",
  "hover:border-brand/30 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]",
  "dark:shadow-none dark:hover:shadow-[0_4px_16px_rgba(0,0,0,0.25)]",
);

const iconWrapClass =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-foreground/[0.03] text-foreground/60";

function ContactCardItem({ card }: { card: ContactCard }) {
  const Tag = card.href ? "a" : "div";

  return (
    <Tag {...(card.href ? { href: card.href } : {})} className={cardClass}>
      <span className={iconWrapClass}>
        <card.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </span>

      <span className="mt-5 block font-display text-base font-semibold text-foreground">
        {card.label}
      </span>
      <span
        className={cn(
          "mt-1.5 block flex-1 text-sm font-normal leading-snug text-muted",
          card.key.startsWith("email") && "break-words",
          (card.key === "phone" || card.key === "office") && "break-words",
          card.key === "office" && "leading-relaxed",
        )}
        dir={card.key !== "office" ? "ltr" : undefined}
      >
        {card.value}
      </span>

      <span aria-hidden className="mt-6 block h-1 w-9 shrink-0 rounded-full bg-brand/70" />
    </Tag>
  );
}

export async function ContactDetailCards() {
  const tc = await getTranslations("common");
  const tf = await getTranslations("footer");

  const cards: ContactCard[] = [
    {
      key: "phone",
      label: tc("phone"),
      value: `${COMPANY.phone} (${tf("hr")})`,
      href: COMPANY.phoneHref,
      icon: Phone,
    },
    {
      key: "email-info",
      label: tc("email"),
      value: COMPANY.emailInfo,
      href: `mailto:${COMPANY.emailInfo}`,
      icon: Mail,
    },
    {
      key: "email-hr",
      label: tc("email"),
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
      icon: Mail,
    },
    {
      key: "office",
      label: tc("office"),
      value: COMPANY.address,
      icon: MapPin,
    },
  ];

  return (
    <div className="space-y-5">
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <ContactCardItem key={card.key} card={card} />
        ))}
      </div>
      <SocialLinks />
    </div>
  );
}
