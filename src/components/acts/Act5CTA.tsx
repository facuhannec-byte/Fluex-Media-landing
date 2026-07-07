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
        <p className="font-display text-3xl font-medium leading-snug sm:text-5xl md:text-6xl">
          Todo comienza con una conversación.
        </p>
        <p className="text-base text-cream/80 sm:text-lg">
          Empecemos. Reservá tu primera auditoría estratégica — gratuita y
          sin compromiso. Analizamos tu negocio, te mostramos dónde puede
          mejorar, y te contamos, en concreto, la visión que tenemos para
          hacerlo crecer.
        </p>
        <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/contacto"
            className="rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-accent-soft"
          >
            Reservá tu auditoría gratuita
          </Link>
          <Link
            href="/contacto"
            className="rounded-full border border-cream/30 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-cream/90 transition-colors hover:border-cream/60 hover:text-cream"
          >
            Contanos de tu empresa
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
