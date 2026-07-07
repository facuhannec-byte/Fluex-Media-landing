import Image from "next/image";
import { FaFacebook, FaGoogle, FaInstagram, FaTiktok } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import SectionBackdrop from "@/components/SectionBackdrop";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop",
    alt: "Bocetos de interfaces dibujados a mano con acuarela",
    caption: "Estrategia creativa",
    className: "col-span-2 aspect-[16/10]",
    variant: "fade" as const,
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    alt: "Dashboard de analítica con gráficos en la pantalla de una laptop",
    caption: "Resultados medibles",
    className: "aspect-square",
    variant: "slide-left" as const,
  },
];

// Solo las plataformas donde Fluex opera realmente — íconos de marca
// reales (react-icons), no recreados a mano.
const platformIcons = [
  { name: "facebook", Icon: FaFacebook },
  { name: "instagram", Icon: FaInstagram },
  { name: "google", Icon: FaGoogle },
  { name: "tiktok", Icon: FaTiktok },
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
          <div className="mt-8 max-w-md space-y-4 text-sm leading-relaxed text-brown-dark sm:text-base">
            <p>
              Somos FLUEX Media, una agencia de crecimiento estratégico.
              Ayudamos a negocios a conseguir más clientes{" "}
              <span className="text-accent">de forma predecible</span>{" "}
              mediante estrategia, media buying, growth marketing,
              creatividad y análisis de datos — diseñamos la campaña, la
              ejecutamos y la optimizamos de forma continua.
            </p>
            <p>
              No trabajamos por rubro, trabajamos por potencial: cualquier
              empresa con un producto o servicio ya probado que quiera
              construir un{" "}
              <span className="text-accent">
                sistema predecible de adquisición
              </span>{" "}
              de clientes.
            </p>
          </div>
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
                {platformIcons.map(({ name, Icon }) => (
                  <span
                    key={name}
                    className="flex items-center justify-center rounded-xl bg-cream/10"
                  >
                    <Icon className="h-6 w-6 text-cream sm:h-7 sm:w-7" aria-hidden />
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
