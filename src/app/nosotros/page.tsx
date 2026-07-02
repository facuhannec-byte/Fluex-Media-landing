import Image from "next/image";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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

export default function NosotrosPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Nosotros
            </span>
            <h1 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Una agencia hecha por gente obsesionada con el crecimiento.
            </h1>
            <p className="mt-6 max-w-2xl text-brown-dark">
              Fluex Media nació de una idea simple: la mayoría de las empresas
              no tienen un problema de producto, tienen un problema de
              atención. Nadie las ve. Nos dedicamos a cambiar eso, combinando
              estrategia, contenido y captación para marcas de cualquier
              rubro.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-10">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/8] w-full">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
                alt="Equipo de Fluex Media trabajando"
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-cream-soft px-6 py-24 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-display text-3xl font-medium text-ink">
              Lo que nos guía
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title}>
                  <h3 className="font-display text-lg font-semibold text-ink">
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
