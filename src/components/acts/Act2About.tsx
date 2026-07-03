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
          <h2 className="mt-4 font-display text-4xl font-medium uppercase leading-[1.1] text-ink sm:text-5xl">
            ¿Necesitás más visibilidad? ¿Más ventas? ¿Posicionarte en un
            mercado nuevo?
          </h2>
          <p className="mt-6 max-w-md text-sm text-brown-dark sm:text-base">
            Trabajamos mediante estrategia, contenido y campañas de
            captación medibles: auditamos tu marca, definimos el mensaje
            que te distingue y lo llevamos a la plataforma donde realmente
            está tu público. El resultado: más visibilidad, más consultas
            y más ventas — lo aplicamos a empresas de cualquier rubro, sin
            fórmulas genéricas.
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
