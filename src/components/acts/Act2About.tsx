import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    alt: "Equipo trabajando en una estrategia de marca",
    className: "col-span-2 aspect-[16/10]",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
    alt: "Panel de métricas de campañas",
    className: "aspect-square",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    alt: "Espacio de trabajo creativo",
    className: "aspect-square",
  },
];

export default function Act2About() {
  return (
    <section className="min-h-screen bg-cream px-6 py-24 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            Quiénes somos
          </span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
            Somos la agencia que ayuda a tu marca a crecer y a captar la
            atención del mercado.
          </h2>
          <p className="mt-6 max-w-md text-brown-dark">
            Trabajamos con empresas de cualquier rubro que necesitan crecer
            de verdad: más visibilidad, más clientes, más resultados. Sin
            fórmulas genéricas — con estrategia hecha a medida.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden rounded-2xl ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 30vw, 45vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
