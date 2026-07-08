import Reveal from "@/components/Reveal";

export default function WelcomeTagline() {
  return (
    // -mt-px: se solapa 1px con el wrapper pineado de HookDoors para que el
    // spacer que genera ScrollTrigger (a veces una fracción de píxel corto)
    // nunca deje ver el fondo cream del body entre las dos secciones oscuras.
    <section className="relative -mt-px flex flex-col items-center justify-center gap-4 bg-ink px-6 py-24 text-center text-cream sm:py-32">
      <Reveal variant="fade">
        <p className="mx-auto max-w-2xl font-display text-2xl font-medium leading-snug sm:text-3xl md:text-4xl">
          Somos la agencia que ayuda a tu marca a{" "}
          <span className="text-accent">crecer</span> y captar la atención
          del mercado.
        </p>
      </Reveal>
    </section>
  );
}
