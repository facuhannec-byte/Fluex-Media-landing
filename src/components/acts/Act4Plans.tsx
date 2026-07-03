import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const paths = [
  {
    goal: "Quiero visibilidad",
    plan: "Plan Impulso",
    description:
      "Tu marca necesita empezar a ocupar espacio: presencia, contenido y una identidad que se note.",
  },
  {
    goal: "Quiero más clientes",
    plan: "Plan Crecimiento",
    description:
      "Ya tenés base. Ahora hace falta una estrategia de captación que convierta atención en resultados.",
  },
  {
    goal: "Quiero escalar mi negocio",
    plan: "Plan Escala",
    description:
      "Buscás llevar lo que ya funciona al siguiente nivel, con procesos y equipo dedicado a tu marca.",
  },
];

export default function Act4Plans() {
  return (
    <section
      id="planes"
      className="relative min-h-screen overflow-hidden bg-cream-soft px-6 py-24 sm:px-10"
    >
      <SectionBackdrop variant="plans" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal variant="fade" className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Planes
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium uppercase leading-[1.1] text-ink sm:text-5xl">
            No hay un plan único. Hay uno para lo que estás buscando.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paths.map((path, index) => (
            <Reveal
              key={path.plan}
              variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 0.1}
            >
              <div className="flex h-full flex-col rounded-2xl border border-brown-dark/10 bg-cream p-8">
                <span className="text-sm font-medium text-brown-dark">
                  {path.goal}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold uppercase text-ink">
                  {path.plan}
                </h3>
                <p className="mt-4 flex-1 text-sm text-brown-dark">
                  {path.description}
                </p>
                <Link
                  href="/contacto"
                  className="mt-6 text-sm font-medium text-accent transition-colors hover:text-brown-dark"
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
