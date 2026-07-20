import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-300";

const variants = {
  primary:
    "btn-shine bg-accent text-ink shadow-md shadow-accent/20 hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-lg hover:shadow-accent/30",
  secondary:
    "border border-current/30 hover:-translate-y-0.5 hover:border-current/60 hover:bg-current/[0.06]",
} as const;

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
