"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const steps = [
  {
    verb: "Observamos",
    detail: "el negocio completo, no solo la comunicación.",
  },
  {
    verb: "Diagnosticamos",
    detail: "qué está frenando realmente el crecimiento.",
  },
  {
    verb: "Priorizamos",
    detail: "según el impacto real, no según lo urgente.",
  },
  {
    verb: "Construimos",
    detail: "un plan, no una lista de tareas sueltas.",
  },
  {
    verb: "Implementamos",
    detail: "las herramientas que ese plan realmente necesita.",
  },
  {
    verb: "Evolucionamos",
    detail: "medimos, ajustamos y volvemos a empezar.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 text-cream sm:px-10">
      <SectionBackdrop variant="whatwedo" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal variant="rise" className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">
            Nuestro enfoque
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug sm:text-4xl">
            Miramos el negocio completo.
          </h2>
          <p className="mt-2 text-sm text-cream/60 sm:text-base">
            Porque el crecimiento rara vez se frena en un solo lugar.
          </p>
        </Reveal>

        <div className="relative mt-20">
          <motion.div
            className="absolute left-1/2 top-2 hidden w-px -translate-x-1/2 bg-cream/15 sm:block"
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% - 16px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute left-[19px] top-2 w-px bg-cream/15 sm:hidden"
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% - 16px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          />

          <ol className="space-y-10 sm:space-y-14">
            {steps.map((step, index) => {
              const isRight = index % 2 === 1;
              return (
                <Reveal
                  key={step.verb}
                  variant={isRight ? "slide-right" : "slide-left"}
                  delay={index * 0.06}
                  duration={0.5}
                >
                  <li
                    className={`flex items-center gap-5 sm:gap-0 ${
                      isRight
                        ? "sm:flex-row-reverse sm:text-right"
                        : "sm:text-left"
                    }`}
                  >
                    <div
                      className={`hidden flex-1 sm:block ${isRight ? "pl-10" : "pr-10"}`}
                    >
                      <p className="font-display text-xl font-semibold text-cream sm:text-2xl">
                        {step.verb}
                      </p>
                      <p className="mt-1 text-sm text-cream/70 sm:text-base">
                        {step.detail}
                      </p>
                    </div>

                    <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-ink font-display text-sm font-semibold text-accent">
                      {index + 1}
                    </span>

                    <div className="sm:hidden">
                      <p className="font-display text-lg font-semibold text-cream">
                        {step.verb}
                      </p>
                      <p className="mt-0.5 text-sm text-cream/70">
                        {step.detail}
                      </p>
                    </div>

                    <div className="hidden flex-1 sm:block" aria-hidden />
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
