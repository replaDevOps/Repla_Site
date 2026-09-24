import { TECHNOLOGIES } from "@/lib/site";
import { cn } from "@/lib/cn";

export type TechName = (typeof TECHNOLOGIES)[number];

/** Brand accent per technology, used for glows and hover tints. */
export const TECH_COLORS: Record<TechName, string> = {
  "Next.js": "#ffffff",
  React: "#61DAFB",
  TypeScript: "#3178C6",
  "Node.js": "#5FA04E",
  Python: "#3776AB",
  AWS: "#FF9900",
  Azure: "#0078D4",
  GCP: "#4285F4",
  Docker: "#2496ED",
  Kubernetes: "#326CE5",
  Flutter: "#027DFD",
  Sanity: "#F03E2F",
};

const LOGO_SRC: Record<TechName, string> = {
  "Next.js": "/technologies/nextdotjs.svg",
  React: "/technologies/react.svg",
  TypeScript: "/technologies/typescript.svg",
  "Node.js": "/technologies/nodedotjs.svg",
  Python: "/technologies/python.svg",
  AWS: "/technologies/aws.svg",
  Azure: "/technologies/azure.svg",
  GCP: "/technologies/gcp.svg",
  Docker: "/technologies/docker.svg",
  Kubernetes: "/technologies/kubernetes.svg",
  Flutter: "/technologies/flutter.svg",
  Sanity: "/technologies/sanity.svg",
};

export function TechLogo({ name, className }: { name: string; className?: string }) {
  const src = LOGO_SRC[name as TechName];
  if (!src) return null;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static brand SVG marks with mixed viewBoxes
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={cn("object-contain", name === "Next.js" && "dark:invert", className)}
    />
  );
}
