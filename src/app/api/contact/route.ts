import { NextResponse } from "next/server";
import { z } from "zod";
import {
  BUDGET_LABELS,
  INDUSTRY_LABELS,
  SERVICE_LABELS,
  SOURCE_LABELS,
  TIMELINE_LABELS,
  labelOf,
} from "@/lib/contact-options";
import {
  compactAttributes,
  createOrUpdateBrevoContact,
  getBrevoConfig,
  splitFullName,
} from "@/lib/brevo";
import { COMPANY } from "@/lib/site";

const optionalText = z.string().trim().max(160).optional();

const schema = z.object({
  fullName: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(160),
  company: optionalText,
  phone: z.string().trim().max(40).optional(),
  phoneCountry: z.string().trim().max(4).optional(),
  service: optionalText,
  industry: optionalText,
  budget: optionalText,
  timeline: optionalText,
  source: optionalText,
  subject: z.string().trim().min(1).max(160),
  message: z.string().trim().min(10).max(4000),
});

function line(label: string, value: string | undefined) {
  const v = value?.trim();
  return `${label}: ${v ? v : "—"}`;
}

function buildBrevoAttributes(data: z.infer<typeof schema>) {
  const { firstName, lastName } = splitFullName(data.fullName);

  return compactAttributes({
    FIRSTNAME: firstName,
    LASTNAME: lastName,
    SMS: data.phone,
    COMPANY: data.company,
    SERVICE: data.service ? labelOf(SERVICE_LABELS, data.service) : undefined,
    INDUSTRY: data.industry ? labelOf(INDUSTRY_LABELS, data.industry) : undefined,
    BUDGET: data.budget ? labelOf(BUDGET_LABELS, data.budget) : undefined,
    TIMELINE: data.timeline ? labelOf(TIMELINE_LABELS, data.timeline) : undefined,
    SOURCE: data.source ? labelOf(SOURCE_LABELS, data.source) : undefined,
    SUBJECT: data.subject,
    MESSAGE: data.message,
  });
}

async function sendResendNotification(data: z.infer<typeof schema>, to: string) {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return { ok: true as const, skipped: true as const };

  const details = [
    line("Name", data.fullName),
    line("Email", data.email),
    data.company?.trim() ? line("Company", data.company) : null,
    data.phone?.trim() ? line("Phone", data.phone) : null,
    data.service?.trim() ? line("Service", labelOf(SERVICE_LABELS, data.service)) : null,
    data.industry?.trim() ? line("Industry", labelOf(INDUSTRY_LABELS, data.industry)) : null,
    data.budget?.trim() ? line("Budget", labelOf(BUDGET_LABELS, data.budget)) : null,
    data.timeline?.trim() ? line("Timeline", labelOf(TIMELINE_LABELS, data.timeline)) : null,
    data.source?.trim() ? line("How they heard about us", labelOf(SOURCE_LABELS, data.source)) : null,
  ].filter(Boolean);

  const text = `${details.join("\n")}\n\n${data.message}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "REPLA Website <noreply@replatechnologies.com>",
      to: [to],
      reply_to: data.email,
      subject: `[REPLA] ${data.subject}`,
      text,
    }),
  });

  if (res.ok) return { ok: true as const, skipped: false as const };
  return { ok: false as const, skipped: false as const };
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL ?? COMPANY.email;
  const brevo = getBrevoConfig();
  const hasResend = Boolean(process.env.RESEND_API_KEY?.trim());

  if (!brevo && !hasResend) {
    return NextResponse.json(
      {
        error: "not_configured",
        message: `Contact delivery is not configured. Write to ${to}.`,
      },
      { status: 503 },
    );
  }

  if (brevo) {
    const result = await createOrUpdateBrevoContact(
      {
        email: data.email,
        attributes: buildBrevoAttributes(data),
        listIds: [brevo.listId],
      },
      brevo.apiKey,
    );

    if (!result.ok) {
      console.error("[contact] Brevo sync failed:", result.status, result.message);
      return NextResponse.json({ error: "brevo_failed" }, { status: 502 });
    }

    const emailResult = await sendResendNotification(data, to);
    if (!emailResult.ok && !emailResult.skipped) {
      console.error("[contact] Brevo saved but optional email notification failed");
    }

    return NextResponse.json({ ok: true });
  }

  const emailResult = await sendResendNotification(data, to);
  if (!emailResult.ok && !emailResult.skipped) {
    console.error("[contact] Email notification failed");
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
