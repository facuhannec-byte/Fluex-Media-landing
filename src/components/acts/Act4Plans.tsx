import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const plans = [
  {
    name: "Plan Impulso",
    price: "USD 300",
    hook: "Tu primer sistema de clientes, funcionando.",
    forWhom:
      "Para negocios locales que quieren empezar a atraer clientes con publicidad que sí funciona.",
    leadIn: null as string | null,
    includes: [
      "Investigación de mercado y estrategia personalizada",
      "Configuración completa de campañas en Meta",
      "4-6 creativos mensuales (videos, imágenes o carruseles)",
      "Optimización semanal",
      "Reporte mensual + reunión mensual",
    ],
    featured: false,
  },
  {
    name: "Plan Escala",
    price: "USD 600",
    hook: "Ya vendés. Ahora crecé en serio.",
    forWhom:
      "Para negocios que ya venden y quieren crecimiento constante y medible.",
    leadIn: "Todo lo de Impulso, más:",
    includes: [
      "8-12 creativos mensuales",
      "Más campañas simultáneas + tests A/B continuos",
      "Remarketing",
      "Optimizaciones más frecuentes",
      "Reuniones quincenales",
      "Análisis competitivo continuo",
    ],
    featured: true,
  },
  {
    name: "Plan Growth",
    price: "USD 1.000",
    hook: "Escalá sin techo.",
    forWhom: "Para empresas listas para crecer de forma agresiva y sostenida.",
    leadIn: "Todo lo de Escala, más:",
    includes: [
      "Estrategia integral de crecimiento",
      "Múltiples líneas de campañas + embudos completos",
      "Mayor capacidad creativa",
      "Automatizaciones (según proyecto)",
      "Asesoramiento estratégico continuo",
      "Reuniones semanales + soporte prioritario",
    ],
    featured: false,
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
      aria-hidden
    >
      <path d="M5 12.5 9.5 17 19 7" />
    </svg>
  );
}

export default function Act4Plans() {
  return (
    <section
      id="planes"
      className="relative overflow-hidden bg-cream-soft px-6 py-24 sm:px-10"
    >
      <SectionBackdrop variant="plans" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal variant="fade" className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Planes
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
            No vendemos anuncios.{" "}
            <span className="text-accent">
              Diseñamos sistemas de adquisición de clientes
            </span>
            .
          </h2>
          <p className="mt-3 text-sm text-brown-dark sm:text-base">
            Todo se trabaja bajo el Método ICE — el mismo proceso, aplicado
            con distinta profundidad según dónde estés.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((item, index) => (
            <Reveal
              key={item.name}
              variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 0.1}
              className="h-full"
            >
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10 ${
                  item.featured
                    ? "border-accent/50 bg-accent/[0.07] shadow-xl shadow-accent/10 ring-1 ring-accent/20 hover:shadow-2xl hover:ring-accent/40"
                    : "border-brown-dark/10 bg-cream"
                }`}
              >
                <h3 className="text-sm font-medium text-brown-dark">
                  {item.name}
                </h3>
                <p className="mt-3 font-display text-2xl font-semibold leading-snug text-ink">
                  {item.hook}
                </p>
                <p className="mt-5 font-display text-4xl font-semibold text-ink">
                  {item.price}
                  <span className="ml-1 font-sans text-base font-normal text-brown-dark">
                    /mes
                  </span>
                </p>
                <p className="mt-3 text-sm text-brown-dark">{item.forWhom}</p>

                <div className="mt-8 flex-1 border-t border-brown-dark/10 pt-6">
                  {item.leadIn && (
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-brown-dark/70">
                      {item.leadIn}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {item.includes.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2 text-sm text-brown-dark"
                      >
                        <CheckIcon />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contacto"
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-cream"
                >
                  Quiero este plan →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={0.2}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-brown-dark">
            Todos los planes incluyen diagnóstico inicial, investigación de
            mercado, gestión profesional de Meta Ads, optimización continua y
            reportes.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-center text-xs text-brown-dark/60">
            El presupuesto publicitario se paga directo a Meta, aparte de
            nuestros honorarios. Desarrollo web y producción profesional
            (actores, estudio) se cotizan por separado.
          </p>
        </Reveal>

        <Reveal variant="rise" delay={0.3} className="mt-10 flex justify-center">
          <Link
            href="/contacto"
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft hover:shadow-xl"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 shrink-0"
              aria-hidden
            >
              <rect x="3" y="5" width="18" height="16" rx="3" />
              <path d="M3 10h18M8 3v4M16 3v4" />
              <path d="m9 15 2 2 4-4" />
            </svg>
            Reservá tu Auditoría Estratégica gratuita
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
