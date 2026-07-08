import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const desktopPhoto =
  "https://images.unsplash.com/photo-1751257983922-a627088d4c21?q=80&w=1000&auto=format&fit=crop";

const steps = [
  {
    label: "Analizamos tu negocio — lo entendemos primero",
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m20 20-4.35-4.35" />
      </>
    ),
  },
  {
    label: "Estudiamos tu mercado y tu competencia",
    icon: <path d="M4 20V13M10 20V6M16 20v-9M22 20H2" />,
  },
  {
    label: "Creamos tu contenido y tus creativos",
    icon: (
      <>
        <path d="M4 20 15 9l3 3-11 11H4v-3Z" />
        <path d="m14 10 3-3 3 3-3 3" />
      </>
    ),
  },
  {
    label: "Gestionamos tus campañas donde vive la atención: Meta",
    icon: (
      <>
        <path d="M3 9v6h3l5 4V5L6 9H3Z" />
        <path d="M14 10a3 3 0 0 1 0 4" />
        <path d="M17 7a6 6 0 0 1 0 10" />
      </>
    ),
  },
  {
    label: "Medimos todo, todo el tiempo",
    icon: <path d="M3 17 9 11l4 4 8-8M15 7h6v6" />,
  },
  {
    label: "Optimizamos cada semana",
    icon: (
      <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2M8.5 15.5l-2 2m0-11 2 2m7 7 2 2M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
    ),
  },
  {
    label: "Te lo mostramos en reportes claros",
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
  },
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
              Somos una agencia obsesionada con el crecimiento. Analizamos
              hacia dónde va la atención: qué cambia, qué funciona, qué
              dejó de funcionar.{" "}
              <span className="text-accent">Vivimos ahí adentro.</span>
            </p>
          </Reveal>

          <Reveal variant="slide-left" delay={0.14} duration={0.55}>
            <p className="mt-6 font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
              La delegación es la{" "}
              <span className="text-accent">nueva sabiduría</span> de las
              empresas.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brown-dark sm:text-base">
              Delegar esto en quien vive obsesionado con este mundo te
              devuelve lo que más vale y menos se recupera:{" "}
              <span className="text-accent">horas y foco.</span>
            </p>
          </Reveal>

          <Reveal
            variant="slide-left"
            delay={0.2}
            duration={0.55}
            className="mt-8"
          >
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {steps.map((step) => (
                <li
                  key={step.label}
                  className="flex items-start gap-2.5 text-sm text-brown-dark"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden
                  >
                    {step.icon}
                  </svg>
                  <span>{step.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade" delay={0.24} className="my-10 flex justify-center">
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
            delay={0.28}
            duration={0.6}
            className="rounded-2xl border border-accent/20 bg-accent/[0.06] p-6 sm:p-8"
          >
            <p className="font-display text-lg font-medium leading-snug text-ink sm:text-xl">
              No generamos solo más clientes para tu empresa.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brown-dark sm:text-base">
              Te devolvemos tiempo. Tiempo para tu negocio, para tus ideas,
              para lo que solo vos podés hacer.
            </p>
            <p className="mt-3 font-display text-3xl font-semibold text-accent sm:text-4xl">
              Tiempo para vos.
            </p>
            <p className="mt-3 text-sm font-medium text-brown-dark sm:text-base">
              Tu crecimiento, lo construimos juntos.
            </p>
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
              El orden que te devolvemos
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
