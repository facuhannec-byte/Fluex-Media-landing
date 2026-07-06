import Image from "next/image";
import Link from "next/link";
import SectionBackdrop from "@/components/SectionBackdrop";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brown-dark/10 bg-cream-soft">
      <SectionBackdrop variant="page" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <Image
            src="/fluex-logo-full.png"
            alt="Fluex Media"
            width={709}
            height={424}
            className="h-12 w-auto"
          />
          <p className="mt-3 text-sm text-brown-dark">
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
