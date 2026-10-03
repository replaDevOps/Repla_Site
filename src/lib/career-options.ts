export const CAREER_POSITION_VALUES = [
  "frontend-developer",
  "backend-developer",
  "full-stack-developer",
  "mobile-app-developer",
  "ui-ux-designer",
  "qa-engineer",
  "devops-engineer",
  "project-manager",
  "internship",
  "other",
] as const;

export type CareerPositionValue = (typeof CAREER_POSITION_VALUES)[number];

/** English labels for outbound email — UI copy lives in next-intl messages. */
export const CAREER_POSITION_LABELS: Record<CareerPositionValue, string> = {
  "frontend-developer": "Frontend Developer",
  "backend-developer": "Backend Developer",
  "full-stack-developer": "Full-Stack Developer",
  "mobile-app-developer": "Mobile App Developer",
  "ui-ux-designer": "UI/UX Designer",
  "qa-engineer": "QA Engineer",
  "devops-engineer": "DevOps Engineer",
  "project-manager": "Project Manager",
  internship: "Internship",
  other: "Other",
};

export const CAREER_RESUME_MAX_BYTES = 5 * 1024 * 1024;
export const CAREER_RESUME_EXTENSIONS = ["pdf", "doc", "docx"] as const;
export const CAREER_RESUME_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export function careerResumeExtension(fileName: string) {
  const match = fileName.toLowerCase().match(/\.([a-z0-9]+)$/);
  return match?.[1] ?? "";
}

export function isAllowedCareerResume(file: { name: string; type: string; size: number }) {
  const ext = careerResumeExtension(file.name);
  const allowedExt = (CAREER_RESUME_EXTENSIONS as readonly string[]).includes(ext);
  const allowedMime =
    !file.type ||
    file.type === "application/octet-stream" ||
    (CAREER_RESUME_MIME_TYPES as readonly string[]).includes(file.type);
  if (!allowedExt || !allowedMime) return "type" as const;
  if (file.size > CAREER_RESUME_MAX_BYTES) return "size" as const;
  return null;
}

export function isValidHttpUrl(value: string) {
  return /^https?:\/\/.+/i.test(value.trim());
}
