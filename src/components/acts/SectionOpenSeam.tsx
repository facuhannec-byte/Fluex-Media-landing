"use client";

import { motion } from "framer-motion";

// Costura decorativa entre dos secciones: dos paneles del color de la
// sección anterior se abren como puertas al hacer scroll, en vez de un
// corte plano — mismo espíritu que la apertura del hook inicial, pero
// liviano (sin scroll-jacking).
export default function SectionOpenSeam() {
  return (
    <div className="relative h-20 w-full overflow-hidden bg-cream sm:h-28" aria-hidden>
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-maroon"
        initial={{ x: 0 }}
        whileInView={{ x: "-100%" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-maroon"
        initial={{ x: 0 }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      />
    </div>
  );
}
