import Link from "next/link";

export default function Act5CTA() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-8 bg-ink px-6 text-center text-cream">
      <p className="font-display text-3xl font-medium leading-snug sm:text-5xl md:text-6xl">
        ¿Te interesa?
      </p>
      <Link
        href="/contacto"
        className="rounded-full bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-accent-soft"
      >
        Hacé clic acá
      </Link>
    </section>
  );
}
