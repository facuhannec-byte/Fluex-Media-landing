import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const plans = [
  {
    goal: "Recién empezando",
    plan: "Plan Impulso",
    intro: "Tu marca necesita empezar a ocupar espacio.",
    services: [
      {
        name: "Estrategia",
        description:
          "Diagnóstico del negocio, definición de objetivos y roadmap de 30/60/90 días.",
      },
      {
        name: "Creatividad",
        description:
          "Copy, guiones y ángulos creativos alineados con datos de audiencia.",
      },
    ],
  },
  {
    goal: "Ocupando espacio",
    plan: "Plan Crecimiento",
    intro: "Ya tenés base. Ahora hace falta captar de forma predecible.",
    services: [
      {
        name: "Media Buying",
        description:
          "Campañas pagas en Meta Ads y Google Ads: estructuradas, testeables, escalables.",
      },
      {
        name: "Growth Marketing",
        description:
          "Funnels, retargeting y optimización de landing pages para mejorar conversión.",
      },
    ],
  },
  {
    goal: "Con presencia, generando contenido",
    plan: "Plan Escala",
    intro: "Buscás llevar lo que ya funciona al siguiente nivel.",
    services: [
      {
        name: "IA Aplicada",
        description:
          "IA para acelerar investigación, estrategia y producción, sin sacrificar criterio humano.",
      },
      {
        name: "Sistemas y Optimización",
        description:
          "Tracking, atribución y flujos de trabajo. Orden dentro del caos.",
      },
    ],
  },
];

export default function Act4Plans() {
  return (
    <section
      id="planes"
      className="relative min-h-screen overflow-hidden bg-cream-soft px-6 py-24 sm:px-10"
    >
      <SectionBackdrop variant="plans" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal variant="fade" className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Planes
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
            Cada negocio <span className="text-accent">crece distinto</span>.
            Tu plan también debería.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((item, index) => (
            <Reveal
              key={item.plan}
              variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 0.1}
            >
              <div className="flex h-full flex-col rounded-3xl border border-brown-dark/10 bg-cream p-10">
                <span className="text-sm font-medium text-brown-dark">
                  {item.goal}
                </span>
                <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
                  {item.plan}
                </h3>
                <p className="mt-3 text-sm text-brown-dark">{item.intro}</p>
                <div className="mt-8 flex-1 space-y-5 border-t border-brown-dark/10 pt-6">
                  {item.services.map((service) => (
                    <div key={service.name}>
                      <p className="font-display text-lg font-semibold text-ink">
                        {service.name}
                      </p>
                      <p className="mt-1 text-sm text-brown-dark">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contacto"
                  className="mt-8 text-sm font-medium text-accent transition-colors hover:text-brown-dark"
                >
                  Ver si me sirve →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
