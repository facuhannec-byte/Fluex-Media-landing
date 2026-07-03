import Wordmark from "@/components/Wordmark";

export const LOGO_VIEWBOX = "0 0 160 100";
export const LOGO_LINE_PATH = "M4 100 H42 L74 46 L91 63 L128 25 L146 11";
export const LOGO_ARROW_POINTS = "157,2 150,19 139,5";

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={6.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={LOGO_LINE_PATH} />
      <polygon points={LOGO_ARROW_POINTS} fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Logo({
  className,
  iconClassName,
  wordmarkClassName,
}: {
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={`inline-flex flex-col items-start gap-1 ${className ?? ""}`}>
      <LogoIcon className={`h-6 w-auto text-accent ${iconClassName ?? ""}`} />
      <Wordmark
        text="Fluex Media"
        className={`font-display font-semibold text-ink ${wordmarkClassName ?? ""}`}
      />
    </span>
  );
}
