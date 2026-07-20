import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const phases = [
  {
    letter: "I",
    title: "Inmersión",
    tagline: "Entramos al negocio antes de entrar a las herramientas.",
    description:
      "Investigamos, observamos y escuchamos cómo funciona realmente tu negocio: operación, clientes, equipo, propuesta y mercado.",
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
    tagline: "No hacemos acciones aisladas. Construimos una dirección.",
    description:
      "Convertimos el diagnóstico en prioridades: qué resolver primero, qué puede esperar y qué herramientas hacen falta.",
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
    tagline: "Crecer no es un evento. Es un proceso continuo.",
    description:
      "Medimos qué cambió, qué funcionó, y cuál es el próximo cuello de botella por resolver.",
    icon: <path d="M3 17 9 11l4 4 8-8M15 7h6v6" />,
  },
];

export default function ICEPreview() {
  return (
    <section
      id="metodo-ice"
      className="relative overflow-hidden bg-cream px-6 py-24 sm:px-10"
    >
      <SectionBackdrop variant="ice" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal variant="fade" className="mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Nuestro método
          </span>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            Cada negocio necesita un plan distinto.
          </h2>
          <p className="mt-3 text-sm text-brown-dark sm:text-base">
            Lo que no cambia es la forma de construirlo:{" "}
            <span className="font-semibold text-accent">el Método ICE.</span>
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
