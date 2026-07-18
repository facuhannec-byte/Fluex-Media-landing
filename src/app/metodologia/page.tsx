import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

export const metadata: Metadata = {
  title: "Metodología — FLUEX",
  description:
    "El Método ICE: cómo diagnosticamos, priorizamos y construimos un sistema de crecimiento para cada negocio.",
};

const phases = [
  {
    letter: "I",
    title: "Inmersión",
    tagline: "Entramos al negocio antes de entrar a las herramientas.",
    description:
      "Antes de proponer nada, nos sumergimos en el negocio: investigamos, observamos, escuchamos y entendemos cómo funciona realmente la empresa — su operación, clientes, equipo, propuesta, mercado, comunicación y objetivos.",
  },
  {
    letter: "C",
    title: "Construcción",
    tagline: "No hacemos acciones aisladas. Construimos una dirección.",
    description:
      "Convertimos el diagnóstico en prioridades y las prioridades en un sistema. Definimos qué debe resolverse primero, qué puede esperar, qué herramientas hacen falta y cómo deben trabajar juntas.",
  },
  {
    letter: "E",
    title: "Evolución",
    tagline: "Crecer no es un evento. Es un proceso continuo.",
    description:
      "Medimos qué cambió, qué funcionó y cuál es el próximo cuello de botella. El negocio evoluciona y el sistema también.",
  },
];

export default function MetodologiaPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden px-6 py-24 sm:px-10">
          <SectionBackdrop variant="page" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <Reveal variant="fade">
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Metodología
              </span>
              <h1 className="mt-4 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
                Un proceso claro, <span className="text-accent">sin vueltas</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-sm text-brown-dark sm:text-base">
                No partimos de una herramienta. Todo lo que hacemos con
                cada negocio pasa por tres fases, en este orden. No es una
                fórmula: es una forma de pensar el crecimiento.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-6 pb-16 sm:px-10">
          <div className="mx-auto max-w-4xl divide-y divide-brown-dark/10 border-t border-brown-dark/10">
            {phases.map((phase, index) => (
              <Reveal
                key={phase.letter}
                variant={index % 2 === 0 ? "slide-left" : "slide-right"}
              >
                <div className="flex flex-col gap-2 py-10 sm:flex-row sm:gap-10">
                  <span className="font-display text-4xl font-semibold text-accent sm:w-20">
                    {phase.letter}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-ink">
                      {phase.title}
                    </h2>
                    <p className="mt-1 font-display italic text-brown-dark">
                      {phase.tagline}
                    </p>
                    <p className="mt-3 max-w-xl text-sm text-brown-dark sm:text-base">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <p className="max-w-2xl font-display text-xl italic text-brown-dark sm:text-2xl">
              El ciclo es continuo: la Evolución alimenta de nuevo la
              Construcción. El sistema mejora con el tiempo.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
