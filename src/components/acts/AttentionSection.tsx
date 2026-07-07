"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const stats = [
  {
    value: "5.660 M",
    label:
      "de personas usan redes sociales en el mundo — 7 de cada 10 en el planeta.",
  },
  {
    value: "+2,5 hs",
    label:
      "por día se nos van en redes sociales — más de la mitad de todo el tiempo que pasamos conectados.",
  },
  {
    value: "3.000 M",
    label:
      "de usuarios activos solo en Instagram, todos los días, mirando una pantalla.",
  },
];

const SCREENS = Array.from({ length: 24 });

function ScreensGraphic() {
  return (
    <div
      className="mx-auto grid max-w-[220px] grid-cols-6 gap-2.5 sm:max-w-xs sm:gap-3"
      aria-hidden
    >
      {SCREENS.map((_, i) => (
        <motion.div
          key={i}
          className="aspect-[9/16] rounded-md bg-accent-soft/25"
          animate={{ opacity: [0.15, 0.85, 0.15] }}
          transition={{
            duration: 2.2 + (i % 5) * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i % 7) * 0.22,
          }}
        />
      ))}
    </div>
  );
}

export default function AttentionSection() {
  return (
    <section className="relative overflow-hidden bg-brown-dark px-6 py-24 text-cream sm:px-10">
      <SectionBackdrop variant="attention" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal variant="rise">
            <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">
              El contexto
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-snug sm:text-4xl md:text-5xl">
              La atención es el activo más valioso para las empresas hoy.
            </h2>
          </Reveal>

          <Reveal variant="rise" delay={0.1} duration={0.55}>
            <p className="mt-5 text-base text-cream/80 sm:text-lg">
              Hoy vive en las redes, vive en el teléfono: ahí millones de
              personas deciden, todos los días, qué comprar y en quién
              confiar.
            </p>
            <p className="mt-4 font-display text-xl italic text-accent-soft sm:text-2xl">
              Ya no alcanza con tener el mejor producto — hoy, además, hay
              que ganarse la atención.
            </p>
          </Reveal>

          <Reveal
            variant="rise"
            delay={0.2}
            duration={0.55}
            className="mt-10 space-y-6"
          >
            {stats.map((stat) => (
              <div key={stat.value} className="flex items-baseline gap-4">
                <span className="shrink-0 font-display text-3xl font-semibold text-accent sm:text-4xl">
                  {stat.value}
                </span>
                <p className="text-sm text-cream/75 sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal variant="fade" delay={0.3} duration={0.55}>
            <p className="mt-8 text-sm text-cream/80 sm:text-base">
              La vidriera de los negocios ya no es la calle ni el local — es
              esa pantalla. Ahí se decide hoy qué marca se ve y cuál se
              pierde entre cientos.
            </p>
            <p className="mt-3 text-sm text-cream/80 sm:text-base">
              Gran parte de esa atención se concentra en Meta (Instagram y
              Facebook) — ahí es donde trabajamos.
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-cream/40">
              Fuente: DataReportal, Digital 2026
            </p>
          </Reveal>

          <Reveal variant="rise" delay={0.35} duration={0.55} className="mt-10">
            <p className="font-display text-2xl font-medium text-cream sm:text-3xl">
              ¿Ves por qué esto te importa?
            </p>
            <p className="mt-2 text-base text-accent-soft sm:text-lg">
              Tu negocio debería ser parte de esa conversación.
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={0.15}>
          <ScreensGraphic />
        </Reveal>
      </div>
    </section>
  );
}
