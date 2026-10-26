import { cn } from "@/lib/cn";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg" | "sm";

const variants: Record<Variant, string> = {
  primary:
    "btn-animate btn-slide-round btn-primary bg-brand text-white font-semibold shadow-[0_0_0_1px_rgba(196,30,36,0.4),0_10px_30px_rgba(196,30,36,0.18)]",
  secondary:
    "btn-animate btn-slide-round btn-secondary border border-line bg-foreground/5 text-foreground font-medium",
  ghost:
    "btn-animate btn-slide-round btn-ghost text-foreground/80 font-medium hover:text-foreground",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-button tracking-wide disabled:opacity-50 disabled:pointer-events-none";

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={buttonClassName({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: Common & { href: string }) {
  return (
    <Link href={href} className={buttonClassName({ variant, size, className })}>
      {children}
    </Link>
  );
}
