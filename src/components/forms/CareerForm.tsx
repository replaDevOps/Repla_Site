"use client";

import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { COMPANY } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { FormSelect } from "@/components/forms/FormSelect";
import { PhoneField } from "@/components/forms/PhoneField";
import {
  CAREER_POSITION_VALUES,
  isAllowedCareerResume,
  isValidHttpUrl,
} from "@/lib/career-options";
import { isValidEmail } from "@/lib/contact-options";
import { isValidPhoneNumber } from "@/lib/phone-countries";
import { cn } from "@/lib/cn";
import { useLocale, useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import { useId, useState } from "react";

type Status = "idle" | "submitting" | "success" | "invalid" | "not_configured" | "error";

export function CareerForm() {
  const t = useTranslations("form");
  const locale = useLocale() as Locale;
  const consentId = useId();
  const fileId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formKey, setFormKey] = useState(0);
  const [position, setPosition] = useState("");
  const [phoneCountry, setPhoneCountry] = useState("PK");
  const [phoneNational, setPhoneNational] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);

  function resumeError(file: File | null) {
    if (!file) return t("requiredResume");
    const issue = isAllowedCareerResume(file);
    if (issue === "type") return t("invalidResumeType");
    if (issue === "size") return t("invalidResumeSize");
    return undefined;
  }

  function validateField(name: string, value: string): string | undefined {
    const v = value.trim();
    if (name === "fullName") return v ? undefined : t("requiredName");
    if (name === "email") {
      if (!v) return t("requiredEmail");
      return isValidEmail(v) ? undefined : t("invalidEmail");
    }
    if (name === "phone") {
      if (!phoneNational.trim()) return t("invalidPhone");
      return isValidPhoneNumber(phoneCountry, phoneNational) ? undefined : t("invalidPhone");
    }
    if (name === "position") return v ? undefined : t("requiredPosition");
    if (name === "experience" && v) {
      const n = Number(v);
      if (!Number.isInteger(n) || n < 0 || n > 50) return t("required");
    }
    if (name === "link" && v && !isValidHttpUrl(v)) return t("invalidLink");
    if (name === "consent") return value === "yes" ? undefined : t("requiredConsent");
    return undefined;
  }

  function clearFieldError(name: string, value: string) {
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const nextError =
        name === "resume" ? resumeError(resume) : validateField(name, value);
      if (nextError) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
    setStatus((s) => (s === "invalid" ? "idle" : s));
  }

  function resetFields() {
    setPosition("");
    setPhoneCountry("PK");
    setPhoneNational("");
    setResume(null);
    setConsent(false);
    setFormKey((k) => k + 1);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const fullName = String(data.get("fullName") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const experience = String(data.get("experience") || "");
    const link = String(data.get("link") || "");

    const fullNameErr = validateField("fullName", fullName);
    const emailErr = validateField("email", email);
    const phoneErr = validateField("phone", phone);
    const positionErr = validateField("position", position);
    const experienceErr = validateField("experience", experience);
    const linkErr = validateField("link", link);
    const resumeErr = resumeError(resume);
    const consentErr = validateField("consent", consent ? "yes" : "");

    if (fullNameErr) next.fullName = fullNameErr;
    if (emailErr) next.email = emailErr;
    if (phoneErr) next.phone = phoneErr;
    if (positionErr) next.position = positionErr;
    if (experienceErr) next.experience = experienceErr;
    if (linkErr) next.link = linkErr;
    if (resumeErr) next.resume = resumeErr;
    if (consentErr) next.consent = consentErr;

    if (Object.keys(next).length) {
      setErrors(next);
      setStatus("invalid");
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      data.set("position", position);
      data.set("consent", "yes");
      if (resume) data.set("resume", resume);

      const res = await fetch("/api/careers", {
        method: "POST",
        body: data,
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
      resetFields();
    } catch {
      setStatus("error");
    }
  }

  const positionOptions = CAREER_POSITION_VALUES.map((value) => ({
    value,
    label: t(`positionOptions.${value}`),
  }));

  return (
    <form
      onSubmit={onSubmit}
      className="contact-form-shell relative z-20 w-full min-w-0 max-w-full space-y-5 overflow-visible rounded-2xl border border-line bg-surface p-4 sm:space-y-6 sm:p-6 lg:p-10"
      noValidate
    >
      <div className="min-w-0">
        <h2 className="break-words text-balance font-display text-[clamp(1.25rem,3.5vw,1.5rem)] font-semibold leading-snug text-foreground">
          {t("careerTitle")}
        </h2>
        <p className="mt-2 break-words text-sm leading-relaxed text-muted">{t("careerIntro")}</p>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4">
        <Field
          name="fullName"
          label={t("fullName")}
          error={errors.fullName}
          placeholder={t("placeholders.fullName")}
          autoComplete="name"
          onValue={(v) => clearFieldError("fullName", v)}
        />
        <Field
          name="email"
          label={t("careerEmail")}
          type="email"
          error={errors.email}
          placeholder={t("placeholders.careerEmail")}
          autoComplete="email"
          onValue={(v) => clearFieldError("email", v)}
        />
        <label className="block min-w-0 text-sm">
          <FieldCaption label={t("phone")} required />
          <PhoneField
            key={formKey}
            error={errors.phone}
            placeholder={t("placeholders.phone")}
            searchLabel={t("countrySearch")}
            emptyLabel={t("noCountry")}
            onChange={(value, iso, national) => {
              setPhoneCountry(iso);
              setPhoneNational(national);
              clearFieldError("phone", value);
            }}
          />
          <FieldError message={errors.phone} />
        </label>
        <label className="block min-w-0 text-sm">
          <FieldCaption label={t("position")} required />
          <FormSelect
            name="position"
            value={position}
            onChange={(v) => {
              setPosition(v);
              clearFieldError("position", v);
            }}
            options={positionOptions}
            placeholder={t("selectPosition")}
            error={errors.position}
            required
          />
          <FieldError message={errors.position} />
        </label>
        <Field
          name="experience"
          label={t("experience")}
          type="number"
          error={errors.experience}
          placeholder={t("placeholders.experience")}
          min={0}
          max={50}
          required={false}
          onValue={(v) => clearFieldError("experience", v)}
        />
        <Field
          name="link"
          label={t("link")}
          type="url"
          error={errors.link}
          placeholder={t("placeholders.link")}
          autoComplete="url"
          required={false}
          onValue={(v) => clearFieldError("link", v)}
        />

        <label className="block min-w-0 text-sm sm:col-span-2">
          <FieldCaption label={t("resume")} required />
          <input
            key={formKey}
            id={fileId}
            name="resume"
            data-field="resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className={cn(
              "form-field mt-1.5 min-w-0 cursor-pointer file:me-3 file:rounded-lg file:border-0 file:bg-brand/10 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-brand",
              errors.resume && "form-field-error",
            )}
            aria-invalid={Boolean(errors.resume)}
            onChange={(e) => {
              const file = e.target.files?.[0] ?? null;
              setResume(file);
              setErrors((prev) => {
                const next = { ...prev };
                const err = resumeError(file);
                if (err) next.resume = err;
                else delete next.resume;
                return next;
              });
              setStatus((s) => (s === "invalid" ? "idle" : s));
            }}
          />
          <p className="mt-1 text-xs text-muted">{t("resumeHint")}</p>
          <FieldError message={errors.resume} />
        </label>

        <label className="block min-w-0 text-sm sm:col-span-2">
          <FieldCaption label={t("careerMessage")} />
          <textarea
            name="message"
            data-field="message"
            rows={5}
            className="form-field mt-1.5 min-h-[8.5rem] resize-y sm:min-h-[9rem]"
            placeholder={t("placeholders.careerMessage")}
          />
        </label>

        <div className="min-w-0 sm:col-span-2">
          <label className="flex items-start gap-3 text-sm text-foreground/90">
            <input
              id={consentId}
              name="consent"
              data-field="consent"
              type="checkbox"
              checked={consent}
              className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
              onChange={(e) => {
                setConsent(e.target.checked);
                clearFieldError("consent", e.target.checked ? "yes" : "");
              }}
            />
            <span>
              {t("consent")}
              <span className="text-brand" aria-hidden>
                {" "}
                *
              </span>
            </span>
          </label>
          <FieldError message={errors.consent} />
        </div>
      </div>

      <div className="flex justify-stretch pt-2 sm:justify-end">
        <Button type="submit" disabled={status === "submitting"} size="lg" className="w-full min-w-0 px-8 sm:w-auto sm:min-w-[8.75rem]">
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              {t("submitting")}
            </>
          ) : (
            t("submitApplication")
          )}
        </Button>
      </div>

      {status === "success" ? (
        <p className="break-words rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400" role="status">
          {t("careerSuccess")}
        </p>
      ) : null}
      {status === "not_configured" ? (
        <p className="break-words rounded-xl border border-amber-400/25 bg-amber-400/10 px-4 py-3 text-sm text-amber-300" role="status">
          {loc(companyCopy.formNotConfigured, locale)}{" "}
          <a className="underline" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>
        </p>
      ) : null}
      {status === "error" ? (
        <p className="break-words rounded-xl border border-brand/30 bg-brand-soft px-4 py-3 text-sm text-brand" role="alert">
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

function FieldCaption({
  label,
  optional,
  required,
}: {
  label: string;
  optional?: string;
  required?: boolean;
}) {
  return (
    <span className="break-words text-foreground/90">
      {label}
      {optional ? <span className="text-muted"> ({optional})</span> : null}
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
  optional,
  required,
  type = "text",
  error,
  placeholder,
  autoComplete,
  min,
  max,
  onValue,
}: {
  name: string;
  label: string;
  optional?: string;
  required?: boolean;
  type?: string;
  error?: string;
  placeholder: string;
  autoComplete?: string;
  min?: number;
  max?: number;
  onValue?: (value: string) => void;
}) {
  return (
    <label className="block min-w-0 text-sm">
      <FieldCaption label={label} optional={optional} required={required ?? !optional} />
      <input
        name={name}
        data-field={name}
        type={type}
        autoComplete={autoComplete}
        min={min}
        max={max}
        step={type === "number" ? 1 : undefined}
        className={cn("form-field mt-1.5 min-w-0", error && "form-field-error")}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        onChange={(e) => onValue?.(e.target.value)}
      />
      <FieldError message={error} />
    </label>
  );
}
