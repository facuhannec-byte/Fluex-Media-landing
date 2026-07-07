import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import SectionBackdrop from "@/components/SectionBackdrop";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brown-dark/10 bg-cream-soft">
      <SectionBackdrop variant="page" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-10">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/fluex-logo-icon.png"
              alt=""
              width={477}
              height={307}
              className="h-8 w-auto"
              aria-hidden
            />
            <span className="font-display text-xl font-semibold tracking-tight text-ink">
              Flue<span className="text-accent">x</span> Media
            </span>
          </div>
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
        <div className="space-y-1.5 text-sm text-brown-dark">
          <a
            href="mailto:fluex.mediax@gmail.com"
            className="block transition-colors hover:text-accent"
          >
            fluex.mediax@gmail.com
          </a>
          <a
            href="https://wa.me/5493875938541"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <FaWhatsapp className="h-4 w-4 shrink-0" aria-hidden />
            +54 9 387 593 8541
          </a>
          <a
            href="https://instagram.com/fluex.media"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-colors hover:text-accent"
          >
            @fluex.media
          </a>
        </div>
      </div>
    </footer>
  );
}
