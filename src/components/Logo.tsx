import Wordmark from "@/components/Wordmark";

export const LOGO_VIEWBOX = "0 0 200 110";
export const LOGO_LINE_PATH = "M15 78 H45 L68 42 L90 58 L115 22 L150 9";
export const LOGO_ARROW_POINTS = "156,3 138,3 148,22";

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={7}
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
