import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Fluex Media",
  description: "Contactate con Fluex Media y contanos qué necesita tu marca.",
};

export default function ContactoPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="px-6 py-24 sm:px-10">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                Contacto
              </span>
              <h1 className="mt-4 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
                Contanos qué necesita tu <span className="text-accent">marca</span>.
              </h1>
              <p className="mt-6 max-w-md text-sm text-brown-dark sm:text-base">
                Completá el formulario y te respondemos en menos de 48 horas
                para agendar una primera charla sin compromiso.
              </p>
              <div className="mt-10 space-y-3 text-sm text-brown-dark">
                <a
                  href="mailto:fluex.mediax@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0"
                    aria-hidden
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                  fluex.mediax@gmail.com
                </a>
                <a
                  href="https://wa.me/5493875938541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0"
                    aria-hidden
                  >
                    <path d="M4 20l1.3-3.9A7.5 7.5 0 1 1 8.5 19L4 20Z" />
                    <path d="M8.5 9.5c0 3 2.5 5.5 5.5 5.5" />
                  </svg>
                  +54 9 387 593 8541
                </a>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
