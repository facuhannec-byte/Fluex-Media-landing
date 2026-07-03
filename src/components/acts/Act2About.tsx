import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1000&auto=format&fit=crop",
    alt: "Espacio de trabajo creativo con moodboard y notas en pantalla",
    caption: "Estrategia creativa",
    className: "col-span-2 aspect-[16/10]",
    variant: "fade" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop",
    alt: "Gráfico de crecimiento en la pantalla de una laptop",
    caption: "Resultados medibles",
    className: "aspect-square",
    variant: "slide-left" as const,
  },
];

// Solo las plataformas donde Fluex opera realmente — nada de logos
// genéricos de una foto de stock (Discord, Figma, Netflix, Spotify...).
const platformIcons = {
  facebook: (
    <path d="M16 3h-2.5A4.5 4.5 0 0 0 9 7.5V10H7v4h2v7h4v-7h2.6l.4-4H13V7.8c0-.6.4-1 1-1H16Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  google: (
    <path d="M21 12.2c0-.7-.1-1.4-.2-2H12v4h5a4.6 4.6 0 0 1-4.8 3.4A5.6 5.6 0 0 1 12 6.6a5.5 5.5 0 0 1 3.5 1.3l2.8-2.8A9.5 9.5 0 1 0 21 12.2Z" />
  ),
  tiktok: (
    <path d="M10 20a4 4 0 1 1 0-8h1V4h3.2c.3 2.4 1.9 4 4.3 4.3V11c-1.6 0-3-.5-4.3-1.4V16a5 5 0 0 1-8.7 3.4" />
  ),
};

export default function Act2About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream px-6 py-24 sm:px-10">
      <SectionBackdrop variant="about" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal variant="slide-left">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Quiénes somos
          </span>
          <div className="mt-5 space-y-5">
            <div>
              <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                ¿Buscás más <span className="text-accent">visibilidad</span>?
              </p>
              <p className="mt-1 text-sm text-brown-dark">
                Que tu marca aparezca donde tu cliente ya está mirando, no
                donde nadie la busca.
              </p>
            </div>
            <div>
              <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                ¿Necesitás más <span className="text-accent">ventas</span>?
              </p>
              <p className="mt-1 text-sm text-brown-dark">
                Convertir esa atención en resultados medibles — no solo
                likes.
              </p>
            </div>
            <div>
              <p className="font-display text-xl font-medium leading-snug text-ink sm:text-2xl">
                ¿Querés entrar a un{" "}
                <span className="text-accent">mercado nuevo</span>?
              </p>
              <p className="mt-1 text-sm text-brown-dark">
                Con estrategia desde el primer paso, no a los tropezones.
              </p>
            </div>
          </div>
          <p className="mt-8 max-w-md text-sm text-brown-dark sm:text-base">
            Somos FLUEX Media, una agencia de crecimiento estratégico.
            Ayudamos a negocios a conseguir más clientes de forma
            predecible: diseñamos la estrategia, creamos las campañas y
            las optimizamos de forma continua. Trabajamos con cualquier
            empresa que tenga un producto o servicio probado — no un rubro
            específico.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo) => (
            <Reveal
              key={photo.src}
              variant={photo.variant}
              className={photo.className}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 30vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-ink/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cream">
                  {photo.caption}
                </span>
              </div>
            </Reveal>
          ))}
          <Reveal variant="slide-right" className="aspect-square">
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-brown-dark">
              <div className="grid h-full grid-cols-2 gap-3 p-6">
                {Object.entries(platformIcons).map(([name, path]) => (
                  <span
                    key={name}
                    className="flex items-center justify-center rounded-xl bg-cream/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-cream sm:h-7 sm:w-7"
                      aria-hidden
                    >
                      {path}
                    </svg>
                  </span>
                ))}
              </div>
              <span className="absolute bottom-3 left-3 rounded-full bg-ink/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cream">
                Presencia multiplataforma
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
