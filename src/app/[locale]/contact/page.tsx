import { redirect } from "next/navigation";
import { CONTACT_PUBLIC_PATH } from "@/lib/seo-routes";

export default async function LegacyContactRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}${CONTACT_PUBLIC_PATH}`);
}
