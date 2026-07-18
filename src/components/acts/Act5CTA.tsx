import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

export default function Act5CTA() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden bg-ink px-6 text-center text-cream">
      <SectionBackdrop variant="cta" />
      <Reveal
        variant="fade"
        className="relative z-10 flex max-w-2xl flex-col items-center gap-6"
      >
        <p className="font-display text-3xl font-medium uppercase leading-snug sm:text-5xl md:text-6xl">
          ¿Qué está frenando hoy
          <br />
          el crecimiento de tu negocio?
        </p>
        <p className="text-base text-cream/80 sm:text-lg">
          Conversemos. La primera etapa no consiste en venderte una
          solución, sino en comprender tu empresa y detectar dónde existe
          la mayor oportunidad de impacto.
        </p>
        <div className="mt-4">
          <Link
            href="/contacto"
            className="rounded-full bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-accent-soft"
          >
            Analicemos tu negocio
          </Link>
        </div>
        <p className="text-xs uppercase tracking-[0.15em] text-cream/50">
          Una conversación estratégica, sin fórmulas genéricas y sin
          compromiso de avanzar.
        </p>
      </Reveal>
    </section>
  );
}
