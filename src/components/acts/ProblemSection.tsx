"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const LINES = [
  { d: "M10 80 L40 20 L60 60 L90 10", rotate: 6, duration: 7 },
  { d: "M15 20 L45 70 L70 30 L95 75", rotate: -8, duration: 9 },
  { d: "M5 50 L35 45 L55 85 L88 40", rotate: 5, duration: 6.5 },
  { d: "M20 90 L50 30 L75 65 L92 20", rotate: -4, duration: 8 },
];

function ChaosGraphic() {
  return (
    <div className="relative mx-auto aspect-square max-w-[240px] sm:max-w-sm" aria-hidden>
      {LINES.map((line, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full text-accent-soft/40"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: [0, line.rotate, 0], opacity: [0.3, 0.75, 0.3] }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        >
          <path d={line.d} />
        </motion.svg>
      ))}
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-cream sm:px-10">
      <SectionBackdrop variant="problem" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal variant="rise">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">
              La realidad
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-snug sm:text-4xl">
              Pero seamos honestos: es abrumador.
            </h2>
          </Reveal>

          <Reveal variant="rise" delay={0.1} duration={0.55}>
            <p className="mt-5 text-base text-cream/80 sm:text-lg">
              Los algoritmos se reacomodan de un día para el otro. Lo que
              funcionaba el mes pasado ya quedó viejo. Las métricas se
              redefinen, las plataformas compiten entre ellas por tu
              atención, y encima aparecen herramientas e inteligencias
              nuevas cada semana prometiendo cambiarlo todo otra vez. Nada
              se queda quieto el tiempo suficiente como para dominarlo del
              todo.
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.2} duration={0.55}>
            <p className="mt-6 font-display text-xl font-medium text-accent-soft sm:text-2xl">
              Estar al día es un trabajo de tiempo completo — y vos ya
              tenés uno.
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.3} duration={0.55}>
            <p className="mt-6 text-base text-cream/80 sm:text-lg">
              Vos sos quien mejor hace tu negocio. Nadie conoce tu producto
              como vos. Nadie puede hacer lo que vos hacés.
            </p>
            <p className="mt-3 font-display text-2xl font-semibold text-cream sm:text-3xl">
              Ahí es donde debería estar toda tu energía.
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={0.2}>
          <ChaosGraphic />
        </Reveal>
      </div>
    </section>
  );
}
