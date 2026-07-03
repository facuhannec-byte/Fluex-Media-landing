import Reveal from "@/components/Reveal";

export default function WelcomeTagline() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-ink px-6 py-24 text-center text-cream sm:py-32">
      <Reveal variant="fade">
        <p className="mx-auto max-w-2xl font-display text-2xl font-medium leading-snug sm:text-3xl md:text-4xl">
          Somos la agencia que ayuda a tu marca a crecer y captar la
          atención del mercado.
        </p>
      </Reveal>
    </section>
  );
}
