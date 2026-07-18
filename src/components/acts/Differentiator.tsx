import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const points = [
  "No vendemos antes de entender.",
  "No asumimos que la publicidad es la solución.",
  "No aplicamos el mismo plan a todos.",
  "No medimos métricas aisladas del negocio.",
  "No recomendamos acciones sin una razón estratégica.",
];

export default function Differentiator() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 sm:px-10">
      <SectionBackdrop variant="differentiator" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal variant="fade" className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            El diferencial
          </span>
          <h2 className="mt-4 font-display text-2xl font-medium uppercase leading-snug text-ink sm:text-4xl">
            No llegamos con una receta.
            <br />
            <span className="text-accent">Llegamos con preguntas.</span>
          </h2>
        </Reveal>

        <Reveal variant="fade" delay={0.1} className="mt-10">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {points.map((point) => (
              <li
                key={point}
                className="text-sm leading-relaxed text-brown-dark sm:text-base"
              >
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="rise" delay={0.2} duration={0.5} className="mt-10">
          <p className="text-center font-display text-xl font-medium text-ink sm:text-2xl">
            Si algo no conviene hacer todavía,{" "}
            <span className="text-accent">lo decimos.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
