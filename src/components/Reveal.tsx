"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "fade" | "slide-left" | "slide-right" | "rise";

const variants: Record<Variant, Variants> = {
  fade: {
    hidden: { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -48 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0 },
  },
  rise: {
    hidden: { opacity: 0, y: 56 },
    visible: { opacity: 1, y: 0 },
  },
};

export default function Reveal({
  children,
  variant = "fade",
  delay = 0,
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
