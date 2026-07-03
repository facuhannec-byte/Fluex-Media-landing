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
  {
    src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    alt: "Íconos de plataformas digitales y redes sociales",
    caption: "Presencia multiplataforma",
    className: "aspect-square",
    variant: "slide-right" as const,
  },
];

export default function Act2About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-cream px-6 py-24 sm:px-10">
      <SectionBackdrop variant="about" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal variant="slide-left">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Quiénes somos
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
            ¿Buscás más visibilidad? ¿Más ventas? ¿Posicionarte en un{" "}
            <span className="text-accent">mercado nuevo</span>?
          </h2>
          <p className="mt-6 max-w-md text-sm text-brown-dark sm:text-base">
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
        </div>
      </div>
    </section>
  );
}
