"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const BLOCKS = Array.from({ length: 70 });

// Mismo sistema de recuadros que AttentionSection, pero con un parpadeo
// más corto y errático — transmite "caos" en vez de "escala calma".
function GlitchBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 grid grid-cols-8 gap-4 p-6 opacity-[0.08] sm:grid-cols-14 sm:gap-6 sm:p-10"
      aria-hidden
    >
      {BLOCKS.map((_, i) => (
        <motion.div
          key={i}
          className="aspect-[9/16] rounded-md bg-accent-soft"
          animate={{ opacity: [0.1, 0.85, 0.1] }}
          transition={{
            duration: 0.7 + ((i * 37) % 9) * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ((i * 13) % 11) * 0.1,
          }}
        />
      ))}
    </div>
  );
}

const hits = [
  "Los algoritmos se reacomodan de un día para el otro.",
  "Lo que funcionaba el mes pasado ya quedó viejo.",
  "Y cada semana aparece una herramienta nueva que promete cambiarlo todo.",
];

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 text-center text-cream sm:px-10">
      <SectionBackdrop variant="problem" />
      <GlitchBackdrop />
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal variant="rise">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">
            El entorno
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug sm:text-4xl">
            La realidad de hoy.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-4">
          {hits.map((line, index) => (
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
            Estar al día es un trabajo de tiempo completo — y vos ya
            tenés el tuyo.
          </p>
        </Reveal>

        <Reveal variant="rise" delay={0.48} duration={0.5} className="mt-10">
          <p className="font-display text-2xl font-semibold text-cream sm:text-3xl">
            Tu energía tiene que estar en tu negocio — nadie puede hacer
            lo que vos hacés.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
