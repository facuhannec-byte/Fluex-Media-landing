import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

export default function Act5CTA() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden bg-ink px-6 text-center text-cream">
      <SectionBackdrop variant="cta" />
      <Reveal variant="fade" className="relative z-10 flex flex-col items-center gap-8">
        <p className="font-display text-3xl font-medium leading-snug sm:text-5xl md:text-6xl">
          ¿Te interesa?
        </p>
        <Link
          href="/contacto"
          className="rounded-full bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-accent-soft"
        >
          Hacé clic acá
        </Link>
      </Reveal>
    </section>
  );
}
