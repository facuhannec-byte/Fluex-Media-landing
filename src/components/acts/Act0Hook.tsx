export default function Act0Hook() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="font-display text-4xl font-medium leading-tight text-ink sm:text-6xl md:text-7xl">
        Tu empresa está
        <br />
        por crecer.
      </p>
      <div className="absolute bottom-10 flex flex-col items-center gap-2 text-brown-dark">
        <span className="text-xs uppercase tracking-[0.3em]">
          Deslizá hacia arriba
        </span>
        <span aria-hidden className="text-xl">
          ↑
        </span>
      </div>
    </section>
  );
}
