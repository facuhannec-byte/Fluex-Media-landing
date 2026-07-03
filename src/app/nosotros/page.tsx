import Image from "next/image";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

export const metadata: Metadata = {
  title: "Nosotros — Fluex Media",
  description:
    "Conocé la historia, el equipo y los valores detrás de Fluex Media.",
};

const values = [
  {
    title: "Estrategia antes que fórmulas",
    description:
      "Cada marca es distinta. Empezamos entendiendo el negocio, no aplicando una plantilla.",
  },
  {
    title: "Resultados medibles",
    description:
      "Trabajamos con objetivos claros y métricas concretas, no con promesas vagas.",
  },
  {
    title: "Cercanía real",
    description:
      "Nos involucramos con cada cliente como si su marca fuera parte de la nuestra.",
  },
];

const ice = [
  {
    letter: "I",
    title: "Impacto",
    description: "Cuánto puede mover la aguja para tu marca.",
  },
  {
    letter: "C",
    title: "Confianza",
    description: "Qué tan seguros estamos de que va a funcionar.",
  },
  {
    letter: "E",
    title: "Facilidad",
    description: "Cuánto esfuerzo lleva implementarlo ya.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative overflow-hidden px-6 py-24 sm:px-10">
          <SectionBackdrop variant="page" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <Reveal variant="fade">
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Nosotros
              </span>
              <h1 className="mt-4 font-display text-4xl font-medium uppercase leading-[1.1] text-ink sm:text-6xl">
                Una agencia hecha por gente obsesionada con el crecimiento.
              </h1>
              <p className="mt-6 max-w-2xl text-sm text-brown-dark sm:text-base">
                Fluex Media nació de una idea simple: la mayoría de las
                empresas no tienen un problema de producto, tienen un
                problema de atención. Nadie las ve. Nos dedicamos a cambiar
                eso, combinando estrategia, contenido y captación para
                marcas de cualquier rubro.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-10">
          <Reveal variant="rise" className="mx-auto max-w-4xl overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/8] w-full">
              <Image
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1400&auto=format&fit=crop"
                alt="Escritorio de oficina con vista a la ciudad"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </section>

        <section className="relative overflow-hidden px-6 pb-24 sm:px-10">
          <SectionBackdrop variant="page" />
          <div className="relative z-10 mx-auto grid max-w-4xl gap-10 md:grid-cols-2 md:items-center md:gap-14">
            <Reveal variant="slide-right" className="overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=900&auto=format&fit=crop"
                  alt="Pantalla de TV mostrando Netflix junto a otras plataformas de streaming"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal variant="slide-left">
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                El mercado ya no es el mismo
              </span>
              <h2 className="mt-4 font-display text-2xl font-medium uppercase leading-tight text-ink sm:text-3xl">
                Netflix no ganó por tener las mejores películas.
              </h2>
              <p className="mt-4 text-sm text-brown-dark sm:text-base">
                Ganó por entender antes que nadie que la gente ya no quería
                esperar. Hoy pasa lo mismo con la atención: se mueve rápido,
                entre plataformas, y las marcas que no se adaptan quedan
                afuera. Nuestro equipo son especialistas en marketing — no
                generalistas — y diseñamos cada estrategia pensando en cómo
                consume tu público hoy, no en cómo consumía hace cinco años.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Cómo decidimos
            </span>
            <h2 className="mt-4 font-display text-2xl font-medium uppercase leading-tight text-ink sm:text-3xl">
              Método ICE: qué hacer primero
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-brown-dark sm:text-base">
              Antes de ejecutar, priorizamos cada idea con el método ICE —
              así evitamos perder tiempo en cosas que suenan bien pero no
              mueven resultados.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {ice.map((item) => (
                <div
                  key={item.letter}
                  className="rounded-2xl border border-brown-dark/10 bg-cream-soft p-6"
                >
                  <span className="font-display text-3xl font-semibold text-accent">
                    {item.letter}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold uppercase text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-brown-dark">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream-soft px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-medium uppercase text-ink sm:text-4xl">
              Lo que nos guía
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title}>
                  <h3 className="font-display text-lg font-semibold uppercase text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-brown-dark">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
