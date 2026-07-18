import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const capabilities = [
  "Diagnóstico estratégico",
  "Planificación y priorización",
  "Sistemas de adquisición de clientes",
  "Publicidad digital",
  "Estrategia de contenido",
  "Posicionamiento y propuesta de valor",
  "Optimización comercial",
  "Experiencia del cliente",
  "Automatización e IA aplicada",
  "Sitios web y landing pages",
  "Mejora de procesos",
  "Análisis de mercado y competencia",
  "Seguimiento estratégico",
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
            No todas las empresas necesitan las mismas herramientas.
          </h2>
          <p className="mt-3 text-sm text-brown-dark sm:text-base">
            El diagnóstico define cuáles tienen sentido para tu negocio y en
            qué orden conviene implementarlas.
          </p>
        </Reveal>

        <Reveal variant="fade" delay={0.1} className="mt-8 flex flex-wrap gap-2.5">
          {capabilities.map((item) => (
            <span
              key={item}
              className="rounded-full border border-brown-dark/15 bg-cream px-4 py-2 text-xs font-medium text-brown-dark sm:text-sm"
            >
              {item}
            </span>
          ))}
        </Reveal>

        <Reveal variant="fade" delay={0.15} className="mt-16 max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Cómo trabajamos con vos
          </span>
          <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            Tres formas de acompañamiento.
          </h3>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {modes.map((mode, index) => (
            <Reveal
              key={mode.name}
              variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 0.1}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-3xl border border-brown-dark/10 bg-cream p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">
                <span className="font-display text-3xl font-semibold text-accent">
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

        <Reveal variant="fade" delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-brown-dark/70">
            No todas las empresas necesitan las tres modalidades ni todas
            las herramientas. El diagnóstico define el alcance, las
            prioridades y la inversión necesaria.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
