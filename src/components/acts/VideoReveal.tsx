"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

export default function VideoReveal() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 sm:px-10">
      <SectionBackdrop variant="page" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal variant="fade">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Así trabajamos
          </span>
          <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            Acá te explicamos cómo lo hacemos{" "}
            <span className="text-accent">posible</span>.
          </h2>
        </Reveal>

        <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl bg-ink">
          <motion.div
            className="absolute inset-y-0 left-0 z-10 w-1/2 bg-brown-dark"
            initial={{ x: 0 }}
            whileInView={{ x: "-100%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
          />
          <motion.div
            className="absolute inset-y-0 right-0 z-10 w-1/2 bg-brown-dark"
            initial={{ x: 0 }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1], delay: 0.1 }}
          />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-cream"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/40">
              <svg
                viewBox="0 0 24 24"
                className="ml-1 h-6 w-6"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8 5v14l11-7Z" />
              </svg>
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-cream/70">
              Video próximamente
            </p>
          </motion.div>
        </div>

        <Reveal variant="fade" delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-sm text-brown-dark sm:text-base">
            Somos FLUEX Media. Ayudamos a negocios a conseguir más clientes de
            forma predecible. Diseñamos la estrategia, creamos las campañas y
            las optimizamos continuamente. Somos como el equipo de marketing
            que una empresa quiere tener, sin los costos de armarlo
            internamente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
