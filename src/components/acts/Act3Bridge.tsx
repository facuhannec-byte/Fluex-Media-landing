import SectionBackdrop from "@/components/SectionBackdrop";

export default function Act3Bridge() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brown-dark px-6 text-center text-cream">
      <SectionBackdrop variant="bridge" />
      <div className="relative z-10 flex flex-col items-center">
        <svg
          viewBox="0 0 64 48"
          className="mb-6 h-12 w-16 text-cream/40"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden
        >
          <rect x="4" y="4" width="56" height="32" rx="10" />
          <path d="M20 36 12 46 24 36" fill="currentColor" stroke="none" />
          <circle cx="22" cy="20" r="2" fill="currentColor" stroke="none" />
          <circle cx="32" cy="20" r="2" fill="currentColor" stroke="none" />
          <circle cx="42" cy="20" r="2" fill="currentColor" stroke="none" />
        </svg>
        <p className="font-display text-3xl font-medium uppercase leading-snug sm:text-5xl md:text-6xl">
          ¿Estás buscando
          <br />
          hacer crecer tu empresa?
        </p>
        <div className="mt-8 h-px w-16 bg-accent" aria-hidden />
      </div>
    </section>
  );
}
