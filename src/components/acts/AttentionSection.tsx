"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const SCREENS = Array.from({ length: 70 });

function ScreensBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 grid grid-cols-8 gap-4 p-6 opacity-[0.08] sm:grid-cols-14 sm:gap-6 sm:p-10"
      aria-hidden
    >
      {SCREENS.map((_, i) => (
        <motion.div
          key={i}
          className="aspect-[9/16] rounded-md bg-accent-soft"
          animate={{ opacity: [0.15, 0.9, 0.15] }}
          transition={{
            duration: 2.2 + (i % 5) * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i % 9) * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export default function AttentionSection() {
  return (
    <section className="relative overflow-hidden bg-brown-dark px-6 py-28 text-center text-cream sm:px-10">
      <SectionBackdrop variant="attention" />
      <ScreensBackdrop />
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal variant="rise">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">
            El contexto
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug sm:text-4xl md:text-5xl">
            La atención es el activo más valioso para las empresas hoy.
          </h2>
        </Reveal>

        <Reveal variant="rise" delay={0.1} duration={0.5}>
          <p className="mx-auto mt-5 max-w-xl text-base text-cream/80 sm:text-lg">
            Millones de personas deciden todos los días qué comprar y en
            quién confiar — desde el teléfono.
          </p>
        </Reveal>

        <Reveal variant="fade" delay={0.2} duration={0.5} className="mt-14">
          <p className="font-display text-5xl font-semibold text-accent sm:text-6xl md:text-7xl">
            5 a 7 horas
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-cream/70 sm:text-base">
            por día pasa hoy una persona con el teléfono en la mano. En
            cada scroll, cientos de marcas compiten por su atención.
          </p>
        </Reveal>

        <Reveal variant="rise" delay={0.25} duration={0.5} className="mt-16">
          <p className="font-display text-2xl font-medium leading-snug text-cream sm:text-4xl">
            La vidriera de los negocios ya no está en la calle.
            <br />
            Está en la pantalla.
          </p>
          <p className="mt-3 text-base font-medium text-accent-soft sm:text-lg">
            Ahí se decide qué marca se ve — y cuál desaparece.
          </p>
        </Reveal>

        <Reveal variant="fade" delay={0.3} duration={0.5} className="mt-12">
          <p className="text-lg font-medium text-cream sm:text-xl">
            Tu negocio debería ser parte de esa conversación.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
