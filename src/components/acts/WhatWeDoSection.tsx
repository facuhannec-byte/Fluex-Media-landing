"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const steps = [
  "Analizamos el negocio de manera integral.",
  "Detectamos el cuello de botella.",
  "Priorizamos según impacto.",
  "Construimos un plan.",
  "Coordinamos o implementamos las herramientas necesarias.",
  "Medimos y ajustamos.",
];

export default function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 text-cream sm:px-10">
      <SectionBackdrop variant="whatwedo" />
      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal variant="rise" className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">
            Nuestro enfoque
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug sm:text-4xl">
            Encontramos lo que otros no están mirando.
          </h2>
        </Reveal>

        <div className="relative mt-16 pl-2">
          <motion.div
            className="absolute left-[19px] top-2 w-px bg-cream/15"
            initial={{ height: 0 }}
            whileInView={{ height: "calc(100% - 16px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
          <ol className="space-y-8">
            {steps.map((step, index) => (
              <Reveal
                key={step}
                variant="slide-left"
                delay={index * 0.08}
                duration={0.45}
              >
                <li className="flex items-center gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-ink font-display text-sm font-semibold text-accent">
                    {index + 1}
                  </span>
                  <span className="text-base text-cream/85 sm:text-lg">
                    {step}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
