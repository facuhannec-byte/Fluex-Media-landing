import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const desktopPhoto =
  "https://images.unsplash.com/photo-1751257983922-a627088d4c21?q=80&w=1000&auto=format&fit=crop";

const fitFor = [
  "Ya construyeron algo valioso",
  "Quieren ordenar su crecimiento",
  "Están dispuestos a mirar su empresa con honestidad",
  "Valoran la estrategia y el acompañamiento",
];

const notFitFor = [
  "Buscan una fórmula mágica",
  "Quieren resultados garantizados",
  "Solo necesitan publicaciones sueltas",
  "No están dispuestos a involucrarse",
];

export default function Act2About() {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-24 sm:px-10">
      <SectionBackdrop variant="about" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start md:gap-16">
        <div>
          <Reveal variant="slide-left">
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Quiénes somos
            </span>
            <h2 className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              Y acá es donde entramos nosotros.
            </h2>
          </Reveal>

          <Reveal variant="slide-left" delay={0.08} duration={0.55}>
            <p className="mt-5 text-sm leading-relaxed text-brown-dark sm:text-base">
              Somos un socio estratégico de crecimiento. No partimos de una
              herramienta ni asumimos que todos los negocios necesitan lo
              mismo. Nos involucramos en tu negocio, lo entendemos en
              profundidad y{" "}
              <span className="text-accent">
                construimos un sistema a su medida.
              </span>
            </p>
          </Reveal>

          <Reveal variant="slide-left" delay={0.14} duration={0.55}>
            <p className="mt-6 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
              La claridad es la{" "}
              <span className="text-accent">ventaja competitiva</span> que
              más falta.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brown-dark sm:text-base">
              Tener a alguien que entiende tu negocio integralmente — no
              solo tus anuncios — te devuelve algo que no se recupera
              fácil: <span className="text-accent">dirección y foco.</span>
            </p>
          </Reveal>

          <Reveal variant="fade" delay={0.2} className="my-10 flex justify-center">
            <Image
              src="/fluex-logo-icon.png"
              alt=""
              width={477}
              height={307}
              className="h-10 w-auto opacity-15"
              aria-hidden
            />
          </Reveal>

          <Reveal
            variant="fade"
            delay={0.24}
            duration={0.6}
            className="rounded-2xl border border-accent/20 bg-accent/[0.06] p-6 sm:p-8"
          >
            <p className="font-display text-lg font-medium leading-snug text-ink sm:text-xl">
              No llegamos a vender publicidad.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brown-dark sm:text-base">
              Llegamos a entender tu negocio y construir, con vos, el
              sistema que lo haga crecer.
            </p>
            <p className="mt-4 font-display text-lg italic leading-snug text-brown-dark sm:text-xl">
              Buscamos que sientas esto: “Entendieron mi negocio mejor que
              cualquier agencia con la que hablé.”
            </p>
          </Reveal>

          <Reveal
            variant="slide-left"
            delay={0.3}
            duration={0.5}
            className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                FLUEX es para negocios que
              </p>
              <ul className="mt-3 space-y-2">
                {fitFor.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-brown-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-brown-dark/50">
                No es para quienes
              </p>
              <ul className="mt-3 space-y-2">
                {notFitFor.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-brown-dark/60"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal variant="slide-right" delay={0.1} className="md:sticky md:top-28">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src={desktopPhoto}
              alt="Escritorio prolijo y ordenado, con una laptop y acentos naranjas"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-ink/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cream">
              Claridad, antes que herramientas
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
