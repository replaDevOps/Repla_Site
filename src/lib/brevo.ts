const BREVO_CONTACTS_URL = "https://api.brevo.com/v3/contacts";
const BREVO_SMTP_URL = "https://api.brevo.com/v3/smtp/email";

/** Brevo attribute IDs used by the contact form (must exist in Brevo dashboard). */
export const BREVO_CONTACT_ATTRIBUTES = [
  "FIRSTNAME",
  "LASTNAME",
  "SMS",
  "COMPANY",
  "SERVICE",
  "INDUSTRY",
  "BUDGET",
  "TIMELINE",
  "SOURCE",
  "SUBJECT",
  "MESSAGE",
] as const;

/** Extra attributes for career applications (create these in Brevo if missing). */
export const BREVO_CAREER_ATTRIBUTES = [
  "FIRSTNAME",
  "LASTNAME",
  "SMS",
  "POSITION",
  "EXPERIENCE",
  "PORTFOLIO_URL",
  "FORM_TYPE",
  "SUBJECT",
  "MESSAGE",
] as const;

export type BrevoContactPayload = {
  email: string;
  attributes: Record<string, string>;
  listIds: number[];
};

export function splitFullName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

/** Drops empty strings so Brevo only receives populated attributes. */
export function compactAttributes(attributes: Record<string, string | undefined>) {
  return Object.fromEntries(
    Object.entries(attributes).filter(([, value]) => Boolean(value?.trim())),
  ) as Record<string, string>;
}

export async function createOrUpdateBrevoContact(payload: BrevoContactPayload, apiKey: string) {
  const res = await fetch(BREVO_CONTACTS_URL, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: payload.email,
      attributes: payload.attributes,
      listIds: payload.listIds,
      updateEnabled: true,
    }),
  });

  if (res.ok) return { ok: true as const };

  let message = "brevo_request_failed";
  try {
    const body = (await res.json()) as { message?: string; code?: string };
    message = body.message ?? body.code ?? message;
  } catch {
    // ignore parse errors
  }

  return { ok: false as const, status: res.status, message };
}

function parseListId(raw: string | undefined) {
  const value = raw?.trim();
  if (!value) return null;
  const listId = Number(value);
  if (!Number.isFinite(listId) || listId <= 0) return null;
  return listId;
}

export function getBrevoConfig() {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const listId = parseListId(process.env.BREVO_CONTACT_LIST_ID);

  if (!apiKey || !listId) return null;
  return { apiKey, listId };
}

export function getBrevoCareersConfig() {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  const listId = parseListId(process.env.BREVO_CAREERS_LIST_ID);

  if (!apiKey || !listId) return null;
  return { apiKey, listId };
}

export function getBrevoSender() {
  return {
    email: process.env.BREVO_SENDER_EMAIL?.trim() || "replaofficials@gmail.com",
    name: process.env.BREVO_SENDER_NAME?.trim() || "Repla Technologies",
  };
}

export type BrevoTransactionalEmail = {
  to: { email: string; name?: string };
  replyTo: { email: string; name?: string };
  subject: string;
  textContent: string;
  htmlContent?: string;
  attachment?: { name: string; content: string };
};

export async function sendBrevoTransactionalEmail(payload: BrevoTransactionalEmail, apiKey: string) {
  const sender = getBrevoSender();
  const res = await fetch(BREVO_SMTP_URL, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender,
      to: [payload.to],
      replyTo: payload.replyTo,
      subject: payload.subject,
      textContent: payload.textContent,
      ...(payload.htmlContent ? { htmlContent: payload.htmlContent } : {}),
      ...(payload.attachment ? { attachment: [payload.attachment] } : {}),
    }),
  });

  if (res.ok) return { ok: true as const };

  let message = "brevo_email_failed";
  try {
    const body = (await res.json()) as { message?: string; code?: string };
    message = body.message ?? body.code ?? message;
  } catch {
    // ignore parse errors
  }

  return { ok: false as const, status: res.status, message };
}
