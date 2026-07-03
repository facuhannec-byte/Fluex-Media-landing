export default function FireFlame({
  className,
  scale = 1,
}: {
  className?: string;
  scale?: number;
}) {
  return (
    <div
      className={`pointer-events-none relative h-20 w-14 origin-bottom ${className ?? ""}`}
      style={{ transform: `scale(${scale})` }}
      aria-hidden
    >
      <span
        data-flame
        className="absolute bottom-0 left-1/2 h-16 w-10 -translate-x-1/2 rounded-[50%_50%_50%_50%/_65%_65%_35%_35%] blur-[2px]"
        style={{
          background:
            "radial-gradient(circle at 50% 70%, var(--color-accent) 0%, var(--color-brown-dark) 75%)",
          animation: "flame-flicker 2.6s ease-in-out infinite",
        }}
      />
      <span
        data-flame
        className="absolute bottom-0 left-1/2 h-11 w-6 -translate-x-1/2 rounded-[50%_50%_50%_50%/_65%_65%_35%_35%] blur-[1px]"
        style={{
          background:
            "radial-gradient(circle at 50% 65%, var(--color-accent-soft) 0%, var(--color-accent) 80%)",
          animation: "flame-flicker 1.9s ease-in-out infinite",
          animationDelay: "-0.6s",
        }}
      />
      <span
        data-flame
        className="absolute bottom-0 left-1/2 h-6 w-3 -translate-x-1/2 rounded-[50%_50%_50%_50%/_65%_65%_35%_35%]"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, #fff2d9 0%, var(--color-accent-soft) 85%)",
          animation: "flame-flicker 1.4s ease-in-out infinite",
          animationDelay: "-1.1s",
        }}
      />
    </div>
  );
}
