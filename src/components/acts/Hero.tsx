import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    // -mt-px: se solapa 1px con el wrapper pineado de HookDoors para que el
    // spacer que genera ScrollTrigger (a veces una fracción de píxel corto)
    // nunca deje ver el fondo cream del body entre las dos secciones oscuras.
    <section className="relative -mt-px flex flex-col items-center justify-center gap-6 bg-ink px-6 py-28 text-center text-cream sm:py-36">
      <Reveal variant="fade">
        <span className="text-xs uppercase tracking-[0.35em] text-accent-soft">
          Socios estratégicos de crecimiento
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
        className="mt-4 flex flex-col items-center gap-4 sm:flex-row"
      >
        <Link
          href="/contacto"
          className="rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-accent-soft"
        >
          Hablemos de tu negocio
        </Link>
        <Link
          href="#metodo-ice"
          className="rounded-full border border-cream/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-cream/90 transition-colors hover:border-cream/60 hover:text-cream"
        >
          Conocé el método ICE
        </Link>
      </Reveal>

      <Reveal variant="fade" delay={0.32} duration={0.5}>
        <p className="text-xs uppercase tracking-[0.2em] text-cream/50">
          Primero entendemos. Después proponemos.
        </p>
      </Reveal>
    </section>
  );
}
