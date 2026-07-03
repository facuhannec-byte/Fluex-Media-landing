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
              <div className="mt-10 space-y-2 text-sm text-brown-dark">
                <p>hola@fluexmedia.com</p>
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
