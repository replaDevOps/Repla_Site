import { NextResponse } from "next/server";
import { z } from "zod";
import {
  CAREER_POSITION_LABELS,
  CAREER_POSITION_VALUES,
  isAllowedCareerResume,
} from "@/lib/career-options";
import {
  compactAttributes,
  createOrUpdateBrevoContact,
  getBrevoCareersConfig,
  sendBrevoTransactionalEmail,
  splitFullName,
} from "@/lib/brevo";
import { buildCareerEmailHtml, buildCareerEmailText } from "@/lib/career-email";
import { isValidEmail, labelOf } from "@/lib/contact-options";
import { COMPANY } from "@/lib/site";

const schema = z.object({
  fullName: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(8).max(40),
  phoneCountry: z.string().trim().max(4).optional(),
  position: z.enum(CAREER_POSITION_VALUES),
  experience: z
    .string()
    .trim()
    .max(8)
    .optional()
    .refine((v) => !v || (/^\d+$/.test(v) && Number(v) >= 0 && Number(v) <= 50), "invalid_experience"),
  link: z
    .string()
    .trim()
    .max(300)
    .optional()
    .refine((v) => !v || /^https?:\/\/.+/i.test(v), "invalid_link"),
  message: z.string().trim().max(4000).optional(),
  consent: z.literal("yes"),
});

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "invalid_form" }, { status: 400 });
  }

  const resumeFile = form.get("resume");
  if (!(resumeFile instanceof File) || resumeFile.size === 0) {
    return NextResponse.json({ error: "resume_required" }, { status: 400 });
  }

  const resumeIssue = isAllowedCareerResume(resumeFile);
  if (resumeIssue) {
    return NextResponse.json({ error: `resume_${resumeIssue}` }, { status: 400 });
  }

  const parsed = schema.safeParse({
    fullName: String(form.get("fullName") ?? ""),
    email: String(form.get("email") ?? ""),
    phone: String(form.get("phone") ?? ""),
    phoneCountry: String(form.get("phoneCountry") ?? "") || undefined,
    position: String(form.get("position") ?? ""),
    experience: String(form.get("experience") ?? "") || undefined,
    link: String(form.get("link") ?? "") || undefined,
    message: String(form.get("message") ?? "") || undefined,
    consent: String(form.get("consent") ?? ""),
  });

  if (!parsed.success || !isValidEmail(parsed.data.email)) {
    return NextResponse.json(
      { error: "invalid", issues: parsed.success ? undefined : parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const to = process.env.CAREERS_TO_EMAIL?.trim() || COMPANY.email;
  const brevo = getBrevoCareersConfig();

  if (!brevo) {
    return NextResponse.json(
      {
        error: "not_configured",
        message: `Career delivery is not configured. Write to ${to}.`,
      },
      { status: 503 },
    );
  }

  const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
  const resumeName = resumeFile.name.replace(/[^\w.\- ()[\]]+/g, "_");
  const positionLabel = labelOf(CAREER_POSITION_LABELS, data.position);
  const { firstName, lastName } = splitFullName(data.fullName);
  const emailApplication = {
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    position: positionLabel,
    experience: data.experience,
    link: data.link,
    message: data.message,
    resumeName,
  };
  const textContent = buildCareerEmailText(emailApplication);

  const contactResult = await createOrUpdateBrevoContact(
    {
      email: data.email,
      attributes: compactAttributes({
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        SMS: data.phone,
        POSITION: positionLabel,
        EXPERIENCE: data.experience,
        PORTFOLIO_URL: data.link,
        FORM_TYPE: "career",
        SUBJECT: `Career application — ${positionLabel}`,
        MESSAGE: textContent,
      }),
      listIds: [brevo.listId],
    },
    brevo.apiKey,
  );

  if (!contactResult.ok) {
    console.error("[careers] Brevo contact sync failed:", contactResult.status, contactResult.message);
    return NextResponse.json({ error: "brevo_failed" }, { status: 502 });
  }

  const emailResult = await sendBrevoTransactionalEmail(
    {
      to: { email: to, name: "REPLA HR" },
      replyTo: { email: data.email, name: data.fullName },
      subject: `[REPLA Website] Job application — ${positionLabel}`,
      textContent,
      htmlContent: buildCareerEmailHtml(emailApplication),
      attachment: {
        name: resumeName,
        content: resumeBuffer.toString("base64"),
      },
    },
    brevo.apiKey,
  );

  if (!emailResult.ok) {
    console.error("[careers] Brevo HR email failed:", emailResult.status, emailResult.message);
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
