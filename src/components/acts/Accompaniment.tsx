import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const areas = [
  {
    title: "Diagnóstico y prioridades",
    description:
      "Entender qué limita hoy el crecimiento y definir dónde existe la mayor oportunidad de impacto.",
    icon: (
      <>
        <circle cx="10" cy="10" r="6" />
        <path d="m20 20-4.35-4.35" />
      </>
    ),
  },
  {
    title: "Adquisición y publicidad",
    description:
      "Construir sistemas para atraer oportunidades, consultas y clientes adecuados.",
    icon: (
      <>
        <path d="M3 9v6h3l5 4V5L6 9H3Z" />
        <path d="M14 10a3 3 0 0 1 0 4" />
        <path d="M17 7a6 6 0 0 1 0 10" />
      </>
    ),
  },
  {
    title: "Comunicación y contenido",
    description:
      "Expresar mejor la propuesta de valor y desarrollar los mensajes necesarios para cada objetivo.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="12" rx="3" />
        <path d="M8 17v3.5L12 17" />
      </>
    ),
  },
  {
    title: "Experiencia y conversión",
    description:
      "Mejorar los puntos de contacto, la atención, el seguimiento y la transformación de una consulta en una venta.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12.5 2.5 2.5L16 9" />
      </>
    ),
  },
  {
    title: "Procesos y operación",
    description:
      "Detectar problemas internos que dificultan atender, vender, cumplir o crecer de forma sostenible.",
    icon: (
      <path d="M14.7 6.3a4 4 0 0 0-5.66 5.66L4 17v3h3l5.04-5.04a4 4 0 0 0 5.66-5.66l-2.12 2.12-2-2Z" />
    ),
  },
  {
    title: "Automatización e IA",
    description:
      "Incorporar herramientas que simplifiquen tareas, ordenen información y multipliquen la capacidad del equipo.",
    icon: (
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" />
    ),
  },
];

const modes = [
  {
    name: "Diagnóstico estratégico",
    description:
      "Comprensión profunda del negocio, detección de cuellos de botella, prioridades y plan inicial.",
  },
  {
    name: "Acompañamiento estratégico",
    description:
      "Seguimiento, dirección, análisis de resultados, toma de decisiones y evolución continua del sistema.",
  },
  {
    name: "Implementación especializada",
    description:
      "Ejecución de las herramientas que defina la estrategia: publicidad, contenido, web, automatización, experiencia del cliente, procesos u otras intervenciones.",
  },
];

export default function Accompaniment() {
  return (
    <section
      id="acompanamiento"
      className="relative overflow-hidden bg-cream-soft px-6 py-24 sm:px-10"
    >
      <SectionBackdrop variant="accompaniment" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal variant="fade" className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Áreas de intervención
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
            Esto puede ser lo que hoy necesita tu negocio.
          </h2>
          <p className="mt-3 text-sm text-brown-dark sm:text-base">
            No todas las empresas necesitan las mismas herramientas. El
            diagnóstico define dónde intervenir, qué debe resolverse
            primero y en qué orden conviene avanzar.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <Reveal
              key={area.title}
              variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 0.06}
              duration={0.45}
              className="h-full"
            >
              <div className="group h-full rounded-2xl border border-brown-dark/10 bg-white-warm p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 text-accent transition-transform duration-300 group-hover:scale-110"
                  aria-hidden
                >
                  {area.icon}
                </svg>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brown-dark">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={0.15} className="mt-20 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Cómo trabajamos con vos
          </span>
          <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            Tres formas de acompañar el crecimiento.
          </h3>
          <p className="mt-3 text-sm text-brown-dark sm:text-base">
            No son paquetes universales. Se combinan y adaptan según el
            diagnóstico, las prioridades y la realidad de cada empresa.
          </p>
        </Reveal>

        <div className="relative mt-10 grid gap-8 lg:grid-cols-3">
          <div
            className="absolute left-[8.5%] right-[8.5%] top-6 hidden border-t border-dashed border-accent/30 lg:block"
            aria-hidden
          />
          {modes.map((mode, index) => (
            <Reveal
              key={mode.name}
              variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 0.1}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-3xl border border-brown-dark/10 bg-cream p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-cream font-display text-lg font-semibold text-accent">
                  {index + 1}
                </span>
                <h4 className="mt-4 font-display text-xl font-semibold text-ink">
                  {mode.name}
                </h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brown-dark">
                  {mode.description}
                </p>
                <Link
                  href="/contacto"
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-cream"
                >
                  Conversemos →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
