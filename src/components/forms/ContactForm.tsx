"use client";

import { companyCopy } from "@/content/company";
import { loc, type Locale } from "@/content/types";
import { COMPANY } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FormSelect } from "@/components/forms/FormSelect";
import { PhoneField } from "@/components/forms/PhoneField";
import {
  BUDGET_VALUES,
  INDUSTRY_VALUES,
  SERVICE_LABELS,
  SERVICE_VALUES,
  SOURCE_VALUES,
  TIMELINE_VALUES,
  isValidEmail,
} from "@/lib/contact-options";
import { isValidPhoneNumber } from "@/lib/phone-countries";
import { cn } from "@/lib/cn";
import { useLocale, useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";
import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "invalid" | "not_configured" | "error";
type Variant = "inquiry" | "careers";

export function ContactForm({
  defaultSubject,
  variant = "inquiry",
}: {
  defaultSubject?: string;
  variant?: Variant;
}) {
  const t = useTranslations("form");
  const locale = useLocale() as Locale;
  const isInquiry = variant === "inquiry";
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formKey, setFormKey] = useState(0);
  const [service, setService] = useState("");
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [source, setSource] = useState("");
  const [phoneCountry, setPhoneCountry] = useState("PK");
  const [phoneNational, setPhoneNational] = useState("");

  function validateField(name: string, value: string): string | undefined {
    const v = value.trim();
    if (name === "fullName") return v ? undefined : t("requiredName");
    if (name === "email") {
      if (!v) return t("requiredEmail");
      return isValidEmail(v) ? undefined : t("invalidEmail");
    }
    if (name === "service" && isInquiry) return v ? undefined : t("requiredService");
    if (name === "message") {
      if (!v) return t("requiredMessage");
      return v.length >= 10 ? undefined : t("messageMin");
    }
    if (name === "phone") {
      return isValidPhoneNumber(phoneCountry, phoneNational) ? undefined : t("invalidPhone");
    }
    return undefined;
  }

  function clearFieldError(name: string, value: string) {
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const nextError = validateField(name, value);
      if (nextError) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
    setStatus((s) => (s === "invalid" ? "idle" : s));
  }

  function resetInquiryFields() {
    setService("");
    setIndustry("");
    setBudget("");
    setTimeline("");
    setSource("");
    setPhoneCountry("PK");
    setPhoneNational("");
    setFormKey((k) => k + 1);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const next: Record<string, string> = {};
    const fullNameErr = validateField("fullName", String(data.fullName || ""));
    const emailErr = validateField("email", String(data.email || ""));
    const phoneErr = validateField("phone", String(data.phone || ""));
    const messageErr = validateField("message", String(data.message || ""));
    if (fullNameErr) next.fullName = fullNameErr;
    if (emailErr) next.email = emailErr;
    if (phoneErr) next.phone = phoneErr;
    if (messageErr) next.message = messageErr;
    if (isInquiry) {
      const serviceErr = validateField("service", service);
      if (serviceErr) next.service = serviceErr;
    }
    if (Object.keys(next).length) {
      setErrors(next);
      setStatus("invalid");
      const first = Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus();
      return;
    }
    setErrors({});
    setStatus("submitting");
    const serviceLabel = service ? SERVICE_LABELS[service as keyof typeof SERVICE_LABELS] : "";
    const subject =
      defaultSubject ||
      (serviceLabel ? `Project inquiry — ${serviceLabel}` : "Project inquiry");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          company: data.company,
          phone: data.phone,
          phoneCountry: data.phoneCountry,
          service: service || undefined,
          industry: industry || undefined,
          budget: budget || undefined,
          timeline: timeline || undefined,
          source: source || undefined,
          subject,
          message: data.message,
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
      resetInquiryFields();
    } catch {
      setStatus("error");
    }
  }

  const serviceOptions = SERVICE_VALUES.map((value) => ({ value, label: t(`serviceOptions.${value}`) }));
  const industryOptions = INDUSTRY_VALUES.map((value) => ({ value, label: t(`industryOptions.${value}`) }));
  const budgetOptions = BUDGET_VALUES.map((value) => ({ value, label: t(`budgetOptions.${value}`) }));
  const timelineOptions = TIMELINE_VALUES.map((value) => ({ value, label: t(`timelineOptions.${value}`) }));
  const sourceOptions = SOURCE_VALUES.map((value) => ({ value, label: t(`sourceOptions.${value}`) }));

  const form = (
    <form
      onSubmit={onSubmit}
      className="contact-form-shell w-full min-w-0 max-w-full space-y-5 overflow-visible rounded-2xl border border-line bg-surface p-4 sm:space-y-6 sm:p-6 lg:p-10"
      noValidate
    >
      <div className="min-w-0">
        <h2 className="break-words text-balance font-display text-[clamp(1.25rem,3.5vw,1.5rem)] font-semibold leading-snug text-foreground">
          {t("title")}
        </h2>
        <p className="mt-2 break-words text-sm leading-relaxed text-muted">{loc(companyCopy.contactHelp, locale)}</p>
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
          label={t("email")}
          type="email"
          error={errors.email}
          placeholder={t("placeholders.email")}
          autoComplete="email"
          onValue={(v) => clearFieldError("email", v)}
        />
        <Field
          name="company"
          label={t("company")}
          optional={t("optional")}
          error={errors.company}
          placeholder={t("placeholders.company")}
          autoComplete="organization"
        />
        <label className="block min-w-0 text-sm">
          <FieldCaption label={t("phone")} optional={t("optional")} />
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

        {isInquiry ? (
          <>
            <label className="block min-w-0 text-sm">
              <FieldCaption label={t("service")} required />
              <FormSelect
                name="service"
                value={service}
                onChange={(v) => {
                  setService(v);
                  clearFieldError("service", v);
                }}
                options={serviceOptions}
                placeholder={t("selectService")}
                error={errors.service}
                required
              />
              <FieldError message={errors.service} />
            </label>
            <label className="block min-w-0 text-sm">
              <FieldCaption label={t("industry")} optional={t("optional")} />
              <FormSelect
                name="industry"
                value={industry}
                onChange={setIndustry}
                options={industryOptions}
                placeholder={t("selectIndustry")}
              />
            </label>
            <label className="block min-w-0 text-sm">
              <FieldCaption label={t("budget")} optional={t("optional")} />
              <FormSelect
                name="budget"
                value={budget}
                onChange={setBudget}
                options={budgetOptions}
                placeholder={t("selectBudget")}
              />
            </label>
            <label className="block min-w-0 text-sm">
              <FieldCaption label={t("timeline")} optional={t("optional")} />
              <FormSelect
                name="timeline"
                value={timeline}
                onChange={setTimeline}
                options={timelineOptions}
                placeholder={t("selectTimeline")}
              />
            </label>
          </>
        ) : null}

        <label className="block min-w-0 text-sm sm:col-span-2">
          <FieldCaption label={isInquiry ? t("message") : t("application")} required />
          <textarea
            name="message"
            data-field="message"
            rows={5}
            className={cn(
              "form-field mt-1.5 min-h-[8.5rem] resize-y sm:min-h-[9rem]",
              errors.message && "form-field-error",
            )}
            placeholder={isInquiry ? t("placeholders.message") : t("placeholders.application")}
            aria-invalid={Boolean(errors.message)}
            onChange={(e) => clearFieldError("message", e.target.value)}
          />
          <FieldError message={errors.message} />
        </label>

        {isInquiry ? (
          <label className="block min-w-0 text-sm sm:col-span-2">
            <FieldCaption label={t("source")} optional={t("optional")} />
            <FormSelect
              name="source"
              value={source}
              onChange={setSource}
              options={sourceOptions}
              placeholder={t("selectSource")}
            />
          </label>
        ) : null}
      </div>

      <div className="flex justify-stretch pt-2 sm:justify-end">
        <Button type="submit" disabled={status === "submitting"} size="lg" className="w-full min-w-0 px-8 sm:w-auto sm:min-w-[8.75rem]">
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              {t("submitting")}
            </>
          ) : (
            t("submit")
          )}
        </Button>
      </div>

      {status === "success" ? (
        <p className="break-words rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400" role="status">
          {loc(companyCopy.formSuccess, locale)}
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

  if (variant === "careers") return form;
  return <Reveal className="min-w-0">{form}</Reveal>;
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
  type = "text",
  error,
  placeholder,
  autoComplete,
  onValue,
}: {
  name: string;
  label: string;
  optional?: string;
  type?: string;
  error?: string;
  placeholder: string;
  autoComplete?: string;
  onValue?: (value: string) => void;
}) {
  return (
    <label className="block min-w-0 text-sm">
      <FieldCaption label={label} optional={optional} required={!optional} />
      <input
        name={name}
        data-field={name}
        type={type}
        autoComplete={autoComplete}
        className={cn("form-field mt-1.5 min-w-0", error && "form-field-error")}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        onChange={(e) => onValue?.(e.target.value)}
      />
      <FieldError message={error} />
    </label>
  );
}
