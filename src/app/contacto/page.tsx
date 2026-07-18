import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — FLUEX",
  description:
    "Hablemos de tu negocio: contanos qué está pasando y detectemos juntos dónde está la oportunidad.",
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
                Hablemos de tu <span className="text-accent">negocio</span>.
              </h1>
              <p className="mt-6 max-w-md text-sm text-brown-dark sm:text-base">
                Completá el formulario y te respondemos en menos de 48 horas
                para agendar una primera conversación estratégica, sin
                compromiso.
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
                  <FaWhatsapp className="h-4 w-4 shrink-0" aria-hidden />
                  +54 9 387 593 8541
                </a>
                <p>Buenos Aires, Argentina</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/5493875938541"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-cream"
                >
                  <FaWhatsapp className="h-4 w-4 shrink-0" aria-hidden />
                  Escribinos por WhatsApp
                </a>
                <a
                  href="https://instagram.com/fluex.media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brown-dark/20 px-5 py-2.5 text-sm font-medium text-brown-dark transition-colors hover:border-accent hover:text-accent"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0"
                    aria-hidden
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                  @fluex.media
                </a>
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
