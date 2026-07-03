import Image from "next/image";
import Link from "next/link";
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

const comparison = [
  {
    them: "Ejecutan sin entender el negocio",
    us: "Nos involucramos antes de hacer un solo anuncio",
  },
  {
    them: "Mensajes genéricos",
    us: "Copy basado en el lenguaje real de la audiencia",
  },
  {
    them: "Métricas de vanidad",
    us: "Reportes orientados a decisiones de negocio",
  },
  {
    them: "Solo negocios digitales",
    us: "Cualquier negocio que quiera crecer",
  },
  {
    them: "IA como buzzword",
    us: "IA integrada en cada paso del proceso",
  },
  {
    them: "Proceso opaco",
    us: "Sistema documentado y transferible",
  },
];

const ice = [
  {
    letter: "I",
    title: "Inmersión",
    description: "Entendemos el negocio como si fuéramos parte de él.",
  },
  {
    letter: "C",
    title: "Construcción",
    description: "Armamos la estrategia específica para tu empresa.",
  },
  {
    letter: "E",
    title: "Evolución",
    description: "Medimos, optimizamos y escalamos lo que funciona.",
  },
];

const values = [
  {
    title: "Honestidad brutal",
    description:
      "Decimos lo difícil a tiempo, no después de tres meses.",
  },
  {
    title: "Calidad sobre cantidad",
    description: "Límite de clientes por equipo, intencional.",
  },
  {
    title: "Accountability",
    description:
      "Si algo salió mal, lo decimos y proponemos cómo corregirlo.",
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
              <h1 className="mt-4 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
                Una agencia hecha por gente obsesionada con el{" "}
                <span className="text-accent">crecimiento</span>.
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
          <SectionBackdrop variant="about" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <Reveal variant="fade">
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Cómo nos diferenciamos
              </span>
              <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                Las agencias tradicionales ejecutan.{" "}
                <span className="text-accent">Nosotros entendemos</span> el
                negocio primero.
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-brown-dark sm:text-base">
                Reciben un brief, ejecutan una campaña y entregan un reporte.
                Nosotros nos involucramos en el negocio para entenderlo desde
                dentro: antes de diseñar un anuncio, entendemos el producto,
                el cliente ideal, la competencia y el momento del mercado.
              </p>
            </Reveal>
            <div className="mt-10 overflow-hidden rounded-2xl border border-brown-dark/10">
              <div className="grid grid-cols-2 bg-cream-soft text-xs font-medium uppercase tracking-[0.2em] text-brown-dark">
                <div className="px-5 py-3">Agencia tradicional</div>
                <div className="px-5 py-3 text-accent">Fluex Media</div>
              </div>
              {comparison.map((row, index) => (
                <Reveal
                  key={row.them}
                  variant={index % 2 === 0 ? "slide-left" : "slide-right"}
                >
                  <div className="grid grid-cols-2 border-t border-brown-dark/10 text-sm">
                    <div className="px-5 py-4 text-brown-dark/70">
                      {row.them}
                    </div>
                    <div className="border-l border-brown-dark/10 px-5 py-4 font-medium text-ink">
                      {row.us}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Cómo trabajamos
            </span>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              Método <span className="text-accent">ICE</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-brown-dark sm:text-base">
              Tres fases, en este orden, con cada cliente. No es una fórmula:
              es una forma de pensar el crecimiento —{" "}
              <Link href="/metodologia" className="text-accent underline underline-offset-2">
                ver el proceso completo
              </Link>
              .
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
                  <h3 className="mt-2 font-display text-base font-semibold text-ink">
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
            <h2 className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
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
