import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const phases = [
  {
    letter: "I",
    title: "Inmersión",
    tagline: "Entender el negocio como si fuéramos parte de él.",
    description:
      "Antes de proponer cualquier solución, investigamos en profundidad: qué vende el cliente y por qué la gente lo compra, quién es su cliente ideal, qué hace la competencia y qué lenguaje usa la audiencia.",
    icon: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m20 20-5-5" />
      </>
    ),
  },
  {
    letter: "C",
    title: "Construcción",
    tagline: "Construir estrategias específicas para cada empresa.",
    description:
      "Con la inmersión completa, construimos la estrategia de crecimiento, el framework de mensajes, las creatividades y la estructura de campañas. No existe una estrategia universal.",
    icon: (
      <>
        <rect x="4" y="10" width="6" height="10" />
        <rect x="14" y="4" width="6" height="16" />
      </>
    ),
  },
  {
    letter: "E",
    title: "Evolución",
    tagline: "Medición y optimización continua basada en datos reales.",
    description:
      "Medimos performance semanalmente, optimizamos con evidencia, escalamos lo que funciona y pausamos lo que no.",
    icon: <path d="M3 17 9 11l4 4 8-8M15 7h6v6" />,
  },
];

export default function ICEPreview() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 sm:px-10">
      <SectionBackdrop variant="ice" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal variant="fade" className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Nuestro método
          </span>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            ¿Y cómo hacemos todo esto? No existe un mismo plan que sirva
            para todas las empresas — cada una es distinta. Pero sí existe
            un método definitivo para hacer crecer cada una:{" "}
            <span className="text-accent">el nuestro.</span>
          </h2>
          <p className="mt-3 text-sm text-brown-dark sm:text-base">
            El Método ICE es nuestra forma de hacerlo efectivo: los mismos
            pasos que aplicamos con cada empresa para que crezca —
            Inmersión, Construcción, Evolución.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {phases.map((phase, index) => (
            <Reveal
              key={phase.letter}
              variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 0.15}
            >
              <div className="flex h-full flex-col rounded-3xl border border-brown-dark/10 bg-cream-soft p-8">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 text-accent"
                  aria-hidden
                >
                  {phase.icon}
                </svg>
                <span className="mt-4 font-display text-4xl font-semibold text-accent">
                  {phase.letter}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm italic text-brown-dark/80">
                  {phase.tagline}
                </p>
                <p className="mt-3 text-sm text-brown-dark">
                  {phase.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={0.3}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-brown-dark/70">
            El ciclo es continuo: la Evolución alimenta de nuevo la
            Construcción. El sistema mejora con el tiempo.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/metodologia"
              className="text-sm font-medium text-accent underline underline-offset-2 transition-colors hover:text-brown-dark"
            >
              Conocé el método completo →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
