type IconName = "megaphone" | "chart" | "target" | "circle" | "triangle" | "spark";

const icons: Record<IconName, React.ReactNode> = {
  megaphone: (
    <path d="M3 10v4a1 1 0 0 0 1 1h2l4 4V5L6 9H4a1 1 0 0 0-1 1Zm14-4a8 8 0 0 1 0 12M15 8a4 4 0 0 1 0 8" />
  ),
  chart: <path d="M3 17 9 11l4 4 8-8M15 7h6v6" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" />
    </>
  ),
  circle: <circle cx="12" cy="12" r="9" />,
  triangle: <path d="M12 3 21 20H3Z" />,
  spark: <path d="M12 2v6M12 16v6M2 12h6M16 12h6M5 5l4 4M15 15l4 4M19 5l-4 4M9 15l-4 4" />,
};

function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
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

interface Placement {
  icon: IconName;
  className: string;
  animation: string;
}

const variants: Record<string, Placement[]> = {
  about: [
    { icon: "chart", className: "left-[6%] top-[12%] h-24 w-24 text-brown/20", animation: "animate-drift-a" },
    { icon: "target", className: "right-[10%] top-[55%] h-20 w-20 text-accent/15", animation: "animate-drift-b" },
    { icon: "circle", className: "left-[45%] bottom-[8%] h-16 w-16 text-brown-dark/10", animation: "animate-spin-slow" },
  ],
  bridge: [
    { icon: "spark", className: "left-[12%] top-[20%] h-32 w-32 text-cream/15", animation: "animate-drift-b" },
    { icon: "circle", className: "right-[15%] bottom-[15%] h-40 w-40 text-cream/10", animation: "animate-drift-a" },
  ],
  plans: [
    { icon: "target", className: "right-[6%] top-[8%] h-24 w-24 text-accent/10", animation: "animate-drift-a" },
    { icon: "triangle", className: "left-[8%] bottom-[10%] h-16 w-16 text-brown/15", animation: "animate-drift-b" },
  ],
  cta: [
    { icon: "spark", className: "left-[10%] top-[15%] h-20 w-20 text-cream/10", animation: "animate-spin-slow" },
    { icon: "megaphone", className: "right-[12%] bottom-[20%] h-24 w-24 text-cream/10", animation: "animate-drift-a" },
  ],
  page: [
    { icon: "chart", className: "right-[8%] top-[10%] h-20 w-20 text-brown/15", animation: "animate-drift-b" },
    { icon: "circle", className: "left-[6%] bottom-[12%] h-14 w-14 text-accent/10", animation: "animate-drift-a" },
  ],
};

export default function SectionBackdrop({ variant }: { variant: keyof typeof variants }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {variants[variant].map((placement, index) => (
        <Icon
          key={index}
          name={placement.icon}
          className={`absolute ${placement.className} ${placement.animation}`}
        />
      ))}
    </div>
  );
}
