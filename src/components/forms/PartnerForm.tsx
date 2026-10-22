"use client";

import { FormSelect } from "@/components/forms/FormSelect";
import { Button } from "@/components/ui/Button";
import { companyCopy } from "@/content/company";
import {
  isPartnerType,
  partnerCopy,
  type PartnerTypeId,
} from "@/content/partner";
import { loc, type Locale } from "@/content/types";
import { Link } from "@/i18n/navigation";
import { isValidEmail } from "@/lib/contact-options";
import { cn } from "@/lib/cn";
import { COMPANY } from "@/lib/site";
import { Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useId, useState } from "react";

type Status = "idle" | "submitting" | "success" | "invalid" | "not_configured" | "error";

const PROPOSAL_MAX = 3500;

export function PartnerForm({ locale }: { locale: Locale }) {
  const t = useTranslations("form");
  const tFooter = useTranslations("footer");
  const searchParams = useSearchParams();
  const consentId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [partnershipType, setPartnershipType] = useState<PartnerTypeId | "">("");
  const [consent, setConsent] = useState(false);
  const requestedType = searchParams.get("type");
  const [appliedType, setAppliedType] = useState<string | null>(null);

  if (requestedType !== appliedType) {
    setAppliedType(requestedType);
    if (isPartnerType(requestedType)) {
      setPartnershipType(requestedType);
      setErrors((prev) => {
        if (!prev.partnershipType) return prev;
        const next = { ...prev };
        delete next.partnershipType;
        return next;
      });
    }
  }

  const typeOptions = partnerCopy.models.map((model) => ({
    value: model.id,
    label: loc(model.title, locale),
  }));

  function validateField(name: string, value: string): string | undefined {
    const v = value.trim();
    if (name === "fullName") {
      if (!v) return t("requiredName");
      if (v.length > 120) return loc(partnerCopy.validation.nameMax, locale);
    }
    if (name === "email") {
      if (!v) return t("requiredEmail");
      if (v.length > 160) return loc(partnerCopy.validation.emailMax, locale);
      return isValidEmail(v) ? undefined : t("invalidEmail");
    }
    if (name === "company") {
      if (!v) return loc(partnerCopy.validation.company, locale);
      if (v.length > 160) return loc(partnerCopy.validation.companyMax, locale);
    }
    if (name === "country") {
      if (v.length < 2) return loc(partnerCopy.validation.country, locale);
      if (v.length > 80) return loc(partnerCopy.validation.countryMax, locale);
    }
    if (name === "partnershipType") {
      return isPartnerType(v) ? undefined : loc(partnerCopy.validation.type, locale);
    }
    if (name === "message") {
      if (!v) return loc(partnerCopy.validation.proposal, locale);
      if (v.length < 10) return t("messageMin");
      if (v.length > PROPOSAL_MAX) return loc(partnerCopy.validation.proposalMax, locale);
    }
    if (name === "consent") return value === "yes" ? undefined : t("requiredConsent");
    return undefined;
  }

  function clearFieldError(name: string, value: string) {
    setErrors((prev) => {
      if (!prev[name]) return prev;
      if (validateField(name, value)) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
    setStatus((current) => (current === "invalid" ? "idle" : current));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("fullName") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const country = String(data.get("country") || "");
    const message = String(data.get("message") || "");

    const next: Record<string, string> = {};
    const checks: [string, string][] = [
      ["fullName", fullName],
      ["email", email],
      ["company", company],
      ["country", country],
      ["partnershipType", partnershipType],
      ["message", message],
      ["consent", consent ? "yes" : ""],
    ];
    for (const [name, value] of checks) {
      const error = validateField(name, value);
      if (error) next[name] = error;
    }

    if (Object.keys(next).length) {
      setErrors(next);
      setStatus("invalid");
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }

    const typeLabel =
      partnerCopy.models.find((model) => model.id === partnershipType)?.title.en ??
      partnershipType;
    const proposal = message.trim();
    const deliveredMessage = [
      `Partnership type: ${typeLabel}`,
      `Country: ${country.trim()}`,
      `Company or website: ${company.trim()}`,
      "Consent to be contacted: yes",
      "",
      proposal,
    ].join("\n");

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          company: company.trim(),
          subject: `Partnership application — ${typeLabel}`,
          message: deliveredMessage,
        }),
      });
      if (res.status === 503) {
        setStatus("not_configured");
        return;
      }
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
      setPartnershipType("");
      setConsent(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="contact-form-shell relative z-20 w-full min-w-0 max-w-full space-y-5 overflow-visible rounded-2xl border border-line bg-surface p-4 sm:space-y-6 sm:p-6 lg:p-10"
      noValidate
      aria-busy={status === "submitting"}
    >
      <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 md:gap-x-5 md:gap-y-4">
        <Field
          name="fullName"
          label={loc(partnerCopy.fields.fullName, locale)}
          error={errors.fullName}
          placeholder={loc(partnerCopy.fields.fullNamePlaceholder, locale)}
          autoComplete="name"
          maxLength={120}
          onValue={(value) => clearFieldError("fullName", value)}
        />
        <Field
          name="email"
          label={loc(partnerCopy.fields.email, locale)}
          type="email"
          error={errors.email}
          placeholder={loc(partnerCopy.fields.emailPlaceholder, locale)}
          autoComplete="email"
          maxLength={160}
          onValue={(value) => clearFieldError("email", value)}
        />
        <Field
          name="company"
          label={loc(partnerCopy.fields.company, locale)}
          error={errors.company}
          placeholder={loc(partnerCopy.fields.companyPlaceholder, locale)}
          autoComplete="organization"
          maxLength={160}
          onValue={(value) => clearFieldError("company", value)}
        />
        <Field
          name="country"
          label={loc(partnerCopy.fields.country, locale)}
          error={errors.country}
          placeholder={loc(partnerCopy.fields.countryPlaceholder, locale)}
          autoComplete="country-name"
          maxLength={80}
          onValue={(value) => clearFieldError("country", value)}
        />

          <label className="block min-w-0 text-sm md:col-span-2">
          <FieldCaption label={loc(partnerCopy.fields.type, locale)} required />
          <FormSelect
            name="partnershipType"
            value={partnershipType}
            onChange={(value) => {
              setPartnershipType(isPartnerType(value) ? value : "");
              clearFieldError("partnershipType", value);
            }}
            options={typeOptions}
            placeholder={loc(partnerCopy.fields.selectType, locale)}
            error={errors.partnershipType}
            required
          />
          <FieldError message={errors.partnershipType} />
        </label>

          <label className="block min-w-0 text-sm md:col-span-2">
          <FieldCaption label={loc(partnerCopy.fields.message, locale)} required />
          <textarea
            name="message"
            data-field="message"
            rows={5}
            maxLength={PROPOSAL_MAX}
            className={cn(
              "form-field mt-1.5 min-h-[8.5rem] resize-y sm:min-h-[9rem]",
              errors.message && "form-field-error",
            )}
            placeholder={loc(partnerCopy.fields.messagePlaceholder, locale)}
            aria-invalid={Boolean(errors.message)}
            onChange={(e) => clearFieldError("message", e.target.value)}
          />
          <FieldError message={errors.message} />
        </label>

        <div className="min-w-0 md:col-span-2">
          <div className="flex items-start gap-3 text-sm text-foreground/90">
            <input
              id={consentId}
              name="consent"
              data-field="consent"
              type="checkbox"
              checked={consent}
              className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
              aria-invalid={Boolean(errors.consent)}
              onChange={(e) => {
                setConsent(e.target.checked);
                clearFieldError("consent", e.target.checked ? "yes" : "");
              }}
            />
            <span>
              <label htmlFor={consentId} className="cursor-pointer">
                {loc(partnerCopy.fields.consent, locale)}
              </label>{" "}
              <Link
                href="/privacy"
                className="font-medium text-brand underline underline-offset-2"
              >
                {tFooter("privacy")}
              </Link>
              <span className="text-brand" aria-hidden>
                {" "}
                *
              </span>
            </span>
          </div>
          <FieldError message={errors.consent} />
        </div>
      </div>

      <div className="flex justify-stretch pt-2 sm:justify-end">
        <Button
          type="submit"
          disabled={status === "submitting"}
          size="lg"
          className="w-full min-w-0 px-8 sm:w-auto sm:min-w-[8.75rem]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              {t("submitting")}
            </>
          ) : (
            loc(partnerCopy.fields.submit, locale)
          )}
        </Button>
      </div>

      {status === "success" ? (
        <p
          className="break-words rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
          role="status"
        >
          {loc(partnerCopy.formSuccess, locale)}
        </p>
      ) : null}
      {status === "not_configured" ? (
        <p
          className="break-words rounded-xl border border-amber-400/25 bg-amber-400/10 px-4 py-3 text-sm text-amber-300"
          role="status"
        >
          {loc(companyCopy.formNotConfigured, locale)}{" "}
          <a className="underline" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>
        </p>
      ) : null}
      {status === "error" ? (
        <p
          className="break-words rounded-xl border border-brand/30 bg-brand-soft px-4 py-3 text-sm text-brand"
          role="alert"
        >
          {loc(companyCopy.formError, locale)}{" "}
          <a className="underline" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>
        </p>
      ) : null}
      {status === "invalid" ? (
        <p className="text-sm text-brand" role="alert">
          {t("invalidForm")}
        </p>
      ) : null}
    </form>
  );
}

function FieldCaption({ label, required }: { label: string; required?: boolean }) {
  return (
    <span className="break-words text-foreground/90">
      {label}
      {required ? (
        <span className="text-brand" aria-hidden>
          {" "}
          *
        </span>
      ) : null}
    </span>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <span className="mt-1 block text-xs text-brand">{message}</span>;
}

function Field({
  name,
  label,
  type = "text",
  error,
  placeholder,
  autoComplete,
  maxLength,
  onValue,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  placeholder: string;
  autoComplete?: string;
  maxLength?: number;
  onValue?: (value: string) => void;
}) {
  return (
    <label className="block min-w-0 text-sm">
      <FieldCaption label={label} required />
      <input
        name={name}
        data-field={name}
        type={type}
        autoComplete={autoComplete}
        maxLength={maxLength}
        className={cn("form-field mt-1.5 min-w-0", error && "form-field-error")}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        onChange={(e) => onValue?.(e.target.value)}
      />
      <FieldError message={error} />
    </label>
  );
}
