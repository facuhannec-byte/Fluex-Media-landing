import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

export const metadata: Metadata = {
  title: "Nosotros | FLUEX",
  description:
    "Socios estratégicos de crecimiento: quiénes somos, cómo pensamos y de dónde viene el nombre FLUEX.",
};

const comparison = [
  {
    them: "Vende un servicio antes de escuchar",
    us: "Diagnostica antes de proponer",
  },
  {
    them: "Aplica el mismo paquete a todos",
    us: "Construye un sistema a medida",
  },
  {
    them: "Mide solo métricas de marketing",
    us: "Mide el impacto real en el negocio",
  },
  {
    them: "Asume que la publicidad es la solución",
    us: "Prioriza según el verdadero cuello de botella",
  },
  {
    them: "Es un proveedor más",
    us: "Es un socio estratégico",
  },
  {
    them: "Ejecuta tareas sueltas",
    us: "Construye una dirección",
  },
];

const ice = [
  {
    letter: "I",
    title: "Inmersión",
    description: "Entramos al negocio antes de entrar a las herramientas.",
  },
  {
    letter: "C",
    title: "Construcción",
    description: "No hacemos acciones aisladas. Construimos una dirección.",
  },
  {
    letter: "E",
    title: "Evolución",
    description: "Crecer no es un evento. Es un proceso continuo.",
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
                Entendemos negocios,{" "}
                <span className="text-accent">no solo marketing</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-sm text-brown-dark sm:text-base">
                FLUEX nació de una idea simple: la mayoría de los negocios
                no tienen un problema de producto, tienen un problema de
                foco. No siempre saben qué les está frenando el
                crecimiento. Nos dedicamos a encontrarlo, y a construir,
                con cada empresa, el sistema que lo resuelva.
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
                <span className="text-accent">Nosotros diagnosticamos</span>{" "}
                primero.
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-brown-dark sm:text-base">
                Reciben un pedido, lo ejecutan y entregan un reporte.
                Nosotros nos involucramos en el negocio para entenderlo
                desde adentro: antes de proponer nada, entendemos la
                operación, el cliente ideal, la competencia y el momento
                del mercado.
              </p>
            </Reveal>
            <div className="mt-10 overflow-hidden rounded-2xl border border-brown-dark/10">
              <div className="grid grid-cols-2 bg-cream-soft text-xs font-medium uppercase tracking-[0.2em] text-brown-dark">
                <div className="px-5 py-3">Agencia tradicional</div>
                <div className="px-5 py-3 text-accent">FLUEX</div>
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
              Tres fases, en este orden, con cada negocio. No es una
              fórmula, es una forma de pensar el crecimiento.{" "}
              <Link href="/metodologia" className="text-accent underline underline-offset-2">
                Ver el proceso completo
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

        <section className="relative overflow-hidden bg-brown-dark px-6 py-24 text-cream sm:px-10">
          <SectionBackdrop variant="paradigm" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <Reveal variant="fade">
              <span className="text-xs uppercase tracking-[0.3em] text-accent-soft">
                De dónde viene el nombre
              </span>
              <h2 className="mt-4 font-display text-2xl font-medium leading-snug sm:text-3xl">
                FLUEX nace de <span className="text-accent">“Flow”</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
                Creemos que el crecimiento de un negocio no debería
                depender de la suerte, del algoritmo o de una acción
                aislada. Cuando una empresa tiene claridad, dirección y un
                sistema bien construido, el crecimiento empieza a fluir.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-cream/80 sm:text-base">
                La <span className="text-accent">X</span> representa el
                punto donde la estrategia se convierte en acción, y ese
                flujo empieza a multiplicar resultados.
              </p>
            </Reveal>
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
