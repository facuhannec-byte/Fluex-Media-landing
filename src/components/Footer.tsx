import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import SectionBackdrop from "@/components/SectionBackdrop";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brown-dark/10 bg-cream-soft">
      <SectionBackdrop variant="page" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            <Wordmark text="Fluex Media" />
          </p>
          <p className="mt-1 text-sm text-brown-dark">
            Crecimiento y captación de atención para tu marca.
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brown-dark">
          <li>
            <Link href="/" className="transition-colors hover:text-accent">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/nosotros"
              className="transition-colors hover:text-accent"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/metodologia"
              className="transition-colors hover:text-accent"
            >
              Metodología
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="transition-colors hover:text-accent"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
