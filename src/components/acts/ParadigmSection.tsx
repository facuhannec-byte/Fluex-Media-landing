"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const NODES = Array.from({ length: 60 });

// Grilla de puntos que laten sin ritmo fijo — sugiere un sistema con muchas
// piezas moviéndose, no una única señal (la atención en una pantalla).
function NodesBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 grid grid-cols-8 gap-8 p-10 opacity-[0.1] sm:grid-cols-12"
      aria-hidden
    >
      {NODES.map((_, i) => (
        <motion.div
          key={i}
          className="aspect-square rounded-full bg-accent-soft"
          animate={{ opacity: [0.15, 0.9, 0.15], scale: [0.8, 1, 0.8] }}
          transition={{
            duration: 2 + (i % 6) * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i % 11) * 0.18,
          }}
        />
      ))}
    </div>
  );
}

const points = [
  "Una campaña no resuelve una operación desordenada.",
  "Más clientes no ayudan si no hay capacidad para atenderlos.",
  "Más contenido no corrige una propuesta que nadie entiende.",
];

export default function ParadigmSection() {
  return (
    <section className="relative overflow-hidden bg-brown-dark px-6 py-28 text-center text-cream sm:px-10">
      <SectionBackdrop variant="paradigm" />
      <NodesBackdrop />
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal variant="rise">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">
            El cambio de mirada
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium uppercase leading-snug sm:text-4xl md:text-5xl">
            Tu negocio no necesita hacer más.
            <br />
            <span className="text-accent">Necesita hacer lo correcto.</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {points.map((line, index) => (
            <Reveal
              key={line}
              variant="rise"
              delay={0.1 + index * 0.08}
              duration={0.45}
            >
              <p className="text-lg text-cream/85 sm:text-xl">{line}</p>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade" delay={0.4} duration={0.5} className="mt-12">
          <p className="font-display text-2xl font-medium text-accent-soft sm:text-3xl">
            Antes de sumar herramientas, hay que encontrar el verdadero
            límite.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
