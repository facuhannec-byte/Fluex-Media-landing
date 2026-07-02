import Link from "next/link";

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
    <section id="planes" className="min-h-screen bg-cream-soft px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Planes
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
            No hay un plan único. Hay uno para lo que estás buscando.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paths.map((path) => (
            <div
              key={path.plan}
              className="flex flex-col rounded-2xl border border-brown-dark/10 bg-cream p-8"
            >
              <span className="text-sm font-medium text-brown-dark">
                {path.goal}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
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
          ))}
        </div>
      </div>
    </section>
  );
}
