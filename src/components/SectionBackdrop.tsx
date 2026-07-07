type IconName =
  | "megaphone"
  | "chart"
  | "bars"
  | "target"
  | "circle"
  | "triangle"
  | "spark"
  | "message"
  | "bell"
  | "dollar"
  | "facebook"
  | "meta"
  | "instagram"
  | "tiktok"
  | "google"
  | "flame";

const icons: Record<IconName, React.ReactNode> = {
  megaphone: (
    <>
      <path d="M3 9v6h3l5 4V5L6 9H3Z" />
      <path d="M14 10a3 3 0 0 1 0 4" />
      <path d="M17 7a6 6 0 0 1 0 10" />
    </>
  ),
  chart: <path d="M3 17 9 11l4 4 8-8M15 7h6v6" />,
  bars: <path d="M4 20V13M10 20V6M16 20v-9M22 20h-20" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" />
    </>
  ),
  circle: <circle cx="12" cy="12" r="9" />,
  triangle: <path d="M12 3 21 20H3Z" />,
  spark: <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />,
  message: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="3" />
      <path d="M8 17v3.5L12 17" />
    </>
  ),
  bell: (
    <>
      <path d="M12 3a5 5 0 0 0-5 5v3l-2 4h14l-2-4V8a5 5 0 0 0-5-5Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </>
  ),
  dollar: <path d="M12 2v20M16.5 6.5H10a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6H7.5" />,
  facebook: (
    <path d="M16 3h-2.5A4.5 4.5 0 0 0 9 7.5V10H7v4h2v7h4v-7h2.6l.4-4H13V7.8c0-.6.4-1 1-1H16Z" />
  ),
  meta: <path d="M5 15c0-4 2-8 4.5-8S13 11 13 15s2 4 4.5 4 4.5-4 4.5-8" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  tiktok: (
    <path d="M10 20a4 4 0 1 1 0-8h1V4h3.2c.3 2.4 1.9 4 4.3 4.3V11c-1.6 0-3-.5-4.3-1.4V16a5 5 0 0 1-8.7 3.4" />
  ),
  google: (
    <path d="M21 12.2c0-.7-.1-1.4-.2-2H12v4h5a4.6 4.6 0 0 1-4.8 3.4A5.6 5.6 0 0 1 12 6.6a5.5 5.5 0 0 1 3.5 1.3l2.8-2.8A9.5 9.5 0 1 0 21 12.2Z" />
  ),
  flame: (
    <path d="M12 21a6 6 0 0 0 6-6c0-3-2-5-3-8-1 2-1 4-2 4-1-2 0-4-1-6-3 3-5 6-5 10a6 6 0 0 0 5 6Z" />
  ),
};

function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={0.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {icons[name]}
    </svg>
  );
}

type Corner = "tl" | "tr" | "bl" | "br";
type Size = "lg" | "md" | "sm";

interface Placement {
  icon: IconName;
  corner: Corner;
  size: Size;
  animation: string;
}

const cornerClass: Record<Corner, string> = {
  tl: "left-[6%] top-[10%]",
  tr: "right-[6%] top-[10%]",
  bl: "left-[6%] bottom-[10%]",
  br: "right-[6%] bottom-[10%]",
};

// Larger elements sit further back (lower opacity); smaller ones can read a
// touch stronger since they take up less visual weight. Every section gets
// exactly three icons, anchored to three of the four corners — never
// scattered mid-canvas — so the pattern always reads as intentional.
const sizeClass: Record<Size, string> = {
  lg: "h-16 w-16 opacity-10",
  md: "h-10 w-10 opacity-[0.15]",
  sm: "h-7 w-7 opacity-20",
};

const place = (
  icon: IconName,
  corner: Corner,
  size: Size,
  animation: string,
): Placement => ({ icon, corner, size, animation });

// Light-background sections read in brown-dark; dark sections (ink/brown-dark
// bg) read in cream. One tone per section keeps the whole cluster looking
// like a single deliberate layer instead of mismatched fragments.
const variants: Record<string, { tone: string; placements: Placement[] }> = {
  about: {
    tone: "text-brown-dark",
    placements: [
      place("chart", "tl", "lg", "animate-drift-a"),
      place("instagram", "br", "md", "animate-drift-b"),
      place("target", "tr", "sm", "animate-spin-slow"),
    ],
  },
  bridge: {
    tone: "text-cream",
    placements: [
      place("message", "tl", "lg", "animate-drift-b"),
      place("dollar", "br", "md", "animate-drift-a"),
      place("chart", "tr", "sm", "animate-drift-b"),
    ],
  },
  plans: {
    tone: "text-brown-dark",
    placements: [
      place("target", "tr", "lg", "animate-drift-a"),
      place("tiktok", "bl", "md", "animate-drift-b"),
      place("meta", "br", "sm", "animate-spin-slow"),
    ],
  },
  cta: {
    tone: "text-cream",
    placements: [
      place("megaphone", "br", "lg", "animate-drift-a"),
      place("spark", "tl", "md", "animate-spin-slow"),
      place("facebook", "bl", "sm", "animate-drift-b"),
    ],
  },
  page: {
    tone: "text-brown-dark",
    placements: [
      place("chart", "tr", "lg", "animate-drift-b"),
      place("flame", "br", "md", "animate-drift-a"),
      place("google", "bl", "sm", "animate-spin-slow"),
    ],
  },
  ice: {
    tone: "text-brown-dark",
    placements: [
      place("target", "tl", "lg", "animate-drift-a"),
      place("spark", "br", "md", "animate-spin-slow"),
      place("bars", "tr", "sm", "animate-drift-b"),
    ],
  },
};

export default function SectionBackdrop({
  variant,
}: {
  variant: keyof typeof variants;
}) {
  const { tone, placements } = variants[variant];
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${tone}`}
      aria-hidden
    >
      {placements.map((placement, index) => (
        <Icon
          key={index}
          name={placement.icon}
          className={`absolute ${cornerClass[placement.corner]} ${sizeClass[placement.size]} ${placement.animation}`}
        />
      ))}
    </div>
  );
}
