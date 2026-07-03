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
  | "reddit"
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
  reddit: (
    <>
      <circle cx="12" cy="14.5" r="7" />
      <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />
      <path d="M8.5 17.5c1.8 1.2 5.2 1.2 7 0" />
      <path d="M12 7.5V3M12 3a1.6 1.6 0 1 1 0 3.2" />
    </>
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

interface IconPlacement {
  type: "icon";
  icon: IconName;
  className: string;
  animation: string;
}

interface WordPlacement {
  type: "word";
  text: string;
  className: string;
  animation: string;
}

type Placement = IconPlacement | WordPlacement;

const icon = (
  iconName: IconName,
  className: string,
  animation: string,
): IconPlacement => ({ type: "icon", icon: iconName, className, animation });

const word = (
  text: string,
  className: string,
  animation: string,
): WordPlacement => ({ type: "word", text, className, animation });

const variants: Record<string, Placement[]> = {
  about: [
    icon("chart", "left-[6%] top-[14%] h-12 w-12 text-brown/20", "animate-drift-a"),
    icon("target", "right-[10%] top-[52%] h-10 w-10 text-accent/15", "animate-drift-b"),
    icon("circle", "left-[42%] bottom-[10%] h-6 w-6 text-brown-dark/15", "animate-spin-slow"),
    icon("facebook", "left-[22%] top-[68%] h-7 w-7 text-brown/15", "animate-drift-b"),
    icon("instagram", "right-[24%] top-[18%] h-7 w-7 text-accent/15", "animate-drift-a"),
    icon("spark", "left-[10%] top-[45%] h-5 w-5 text-accent/15", "animate-spin-slow"),
    icon("spark", "right-[6%] bottom-[30%] h-4 w-4 text-brown/15", "animate-drift-a"),
    icon("circle", "right-[35%] top-[8%] h-4 w-4 text-brown-dark/10", "animate-drift-b"),
    word("VISIBILIDAD", "left-[4%] bottom-[32%] text-[10px] text-brown/25", "animate-drift-b"),
  ],
  bridge: [
    icon("message", "left-[10%] top-[16%] h-9 w-9 text-cream/20", "animate-drift-b"),
    icon("bell", "right-[12%] top-[22%] h-8 w-8 text-cream/20", "animate-drift-a"),
    icon("dollar", "left-[16%] bottom-[20%] h-8 w-8 text-cream/15", "animate-drift-a"),
    icon("chart", "right-[16%] bottom-[16%] h-9 w-9 text-cream/15", "animate-drift-b"),
    icon("spark", "left-[30%] top-[35%] h-5 w-5 text-cream/20", "animate-spin-slow"),
    icon("spark", "right-[32%] top-[65%] h-4 w-4 text-cream/15", "animate-drift-a"),
    icon("circle", "left-[8%] top-[55%] h-5 w-5 text-cream/10", "animate-drift-b"),
    icon("circle", "right-[8%] top-[45%] h-4 w-4 text-cream/10", "animate-spin-slow"),
    word("ATENCIÓN", "right-[6%] bottom-[38%] text-[10px] text-cream/20", "animate-drift-a"),
  ],
  plans: [
    icon("target", "right-[6%] top-[10%] h-10 w-10 text-accent/15", "animate-drift-a"),
    icon("triangle", "left-[8%] bottom-[10%] h-7 w-7 text-brown/15", "animate-drift-b"),
    icon("tiktok", "right-[16%] bottom-[14%] h-7 w-7 text-brown-dark/15", "animate-drift-a"),
    icon("meta", "left-[22%] top-[20%] h-7 w-7 text-accent/15", "animate-drift-b"),
    icon("reddit", "right-[32%] top-[45%] h-6 w-6 text-brown/10", "animate-spin-slow"),
    icon("bars", "left-[6%] top-[45%] h-6 w-6 text-brown-dark/15", "animate-drift-a"),
    icon("spark", "right-[8%] bottom-[35%] h-4 w-4 text-accent/15", "animate-spin-slow"),
    word("ESTRATEGIA", "left-[4%] top-[8%] text-[10px] text-brown/20", "animate-drift-b"),
  ],
  cta: [
    icon("megaphone", "right-[12%] bottom-[22%] h-10 w-10 text-cream/15", "animate-drift-a"),
    icon("spark", "left-[10%] top-[18%] h-5 w-5 text-cream/15", "animate-spin-slow"),
    icon("spark", "right-[20%] top-[30%] h-4 w-4 text-cream/10", "animate-drift-b"),
    icon("circle", "left-[16%] bottom-[18%] h-4 w-4 text-cream/10", "animate-drift-a"),
    word("IMPULSO", "right-[8%] top-[14%] text-[10px] text-cream/15", "animate-drift-b"),
  ],
  page: [
    icon("chart", "right-[8%] top-[10%] h-10 w-10 text-brown/15", "animate-drift-b"),
    icon("circle", "left-[6%] bottom-[14%] h-6 w-6 text-accent/10", "animate-drift-a"),
    icon("spark", "left-[10%] top-[25%] h-4 w-4 text-brown/10", "animate-spin-slow"),
    icon("flame", "right-[10%] bottom-[16%] h-6 w-6 text-accent/15", "animate-drift-a"),
  ],
};

export default function SectionBackdrop({
  variant,
}: {
  variant: keyof typeof variants;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {variants[variant].map((placement, index) =>
        placement.type === "icon" ? (
          <Icon
            key={index}
            name={placement.icon}
            className={`absolute ${placement.className} ${placement.animation}`}
          />
        ) : (
          <span
            key={index}
            className={`absolute font-display font-medium uppercase tracking-[0.3em] ${placement.className} ${placement.animation}`}
          >
            {placement.text}
          </span>
        ),
      )}
    </div>
  );
}
