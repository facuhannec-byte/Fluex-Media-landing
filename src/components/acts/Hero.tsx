import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import SectionBackdrop from "@/components/SectionBackdrop";

export default function Hero() {
  return (
    // -mt-px: se solapa 1px con el wrapper pineado de HookDoors para que el
    // spacer que genera ScrollTrigger (a veces una fracción de píxel corto)
    // nunca deje ver el fondo cream del body entre las dos secciones oscuras.
    <section className="relative -mt-px flex flex-col items-center justify-center gap-6 overflow-hidden bg-ink px-6 py-28 text-center text-cream sm:py-36">
      <SectionBackdrop variant="hero" />
      <svg
        viewBox="0 0 100 60"
        className="pointer-events-none absolute -right-10 top-10 h-64 w-64 text-accent-soft opacity-[0.07] animate-drift-a sm:h-80 sm:w-80"
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M4 54 L38 24 L58 40 L96 6" />
      </svg>

      <Reveal variant="fade">
        <span className="text-xs uppercase tracking-[0.35em] text-accent-soft">
          Somos socios estratégicos de crecimiento
        </span>
      </Reveal>

      <Reveal variant="rise" delay={0.08} duration={0.6}>
        <h1 className="mx-auto max-w-3xl font-display text-4xl font-medium uppercase leading-[1.15] sm:text-6xl md:text-7xl">
          El crecimiento no se improvisa.
          <br />
          <span className="text-accent">Se construye.</span>
        </h1>
      </Reveal>

      <Reveal variant="rise" delay={0.16} duration={0.5}>
        <p className="mx-auto max-w-xl text-base text-cream/80 sm:text-lg">
          Nos sumergimos en tu negocio, detectamos qué está frenando su
          crecimiento y construimos un sistema adaptado para resolverlo.
        </p>
      </Reveal>

      <Reveal
        variant="fade"
        delay={0.24}
        duration={0.5}
        className="relative z-10 mt-4 flex flex-col items-center gap-4 sm:flex-row"
      >
        <Button href="/contacto" variant="primary">
          Hablemos de tu negocio
        </Button>
        <Button
          href="#metodo-ice"
          variant="secondary"
          className="text-cream/90"
        >
          Conocé el método ICE
        </Button>
      </Reveal>

      <Reveal variant="fade" delay={0.32} duration={0.5}>
        <p className="text-xs uppercase tracking-[0.2em] text-cream/50">
          Primero entendemos. Después proponemos.
        </p>
      </Reveal>
    </section>
  );
}
