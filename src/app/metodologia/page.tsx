import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Metodología — Fluex Media",
  description: "Así trabajamos en Fluex Media, paso a paso.",
};

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos tu marca, tu mercado y tu competencia para entender dónde estás parado hoy.",
  },
  {
    number: "02",
    title: "Estrategia",
    description:
      "Definimos objetivos concretos y el camino más corto para llegar a ellos.",
  },
  {
    number: "03",
    title: "Ejecución",
    description:
      "Producimos contenido, campañas y piezas con foco en captar atención real.",
  },
  {
    number: "04",
    title: "Medición y ajuste",
    description:
      "Revisamos resultados y optimizamos en base a datos, no a intuición.",
  },
];

export default function MetodologiaPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Metodología
            </span>
            <h1 className="mt-4 font-display text-4xl font-medium uppercase leading-[1.1] text-ink sm:text-6xl">
              Un proceso claro, sin vueltas.
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-brown-dark sm:text-base">
              No improvisamos. Cada proyecto pasa por las mismas cuatro
              etapas, adaptadas a la realidad de cada marca.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-10">
          <div className="mx-auto max-w-4xl divide-y divide-brown-dark/10 border-t border-brown-dark/10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col gap-2 py-10 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <span className="font-display text-3xl font-semibold text-accent sm:w-20">
                  {step.number}
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold uppercase text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-brown-dark">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
