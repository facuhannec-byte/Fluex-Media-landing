import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#planes", label: "Planes" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/metodologia", label: "Metodología" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-brown-dark/10 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/fluex-logo-full.png"
            alt="Fluex Media"
            width={709}
            height={424}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-brown-dark sm:gap-8">
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
      </nav>
    </header>
  );
}
