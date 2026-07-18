"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#acompanamiento", label: "Cómo trabajamos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/metodologia", label: "Método ICE" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brown-dark/10 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/fluex-logo-icon.png"
            alt=""
            width={477}
            height={307}
            priority
            className="h-7 w-auto sm:h-8"
            aria-hidden
          />
          <span className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
            FLUE<span className="text-accent">X</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-brown-dark sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out sm:hidden ${open ? "max-h-64" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-1 border-t border-brown-dark/10 bg-cream px-6 py-3 text-sm font-medium text-brown-dark">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
