"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col justify-center rounded-2xl border border-brown-dark/10 bg-cream-soft p-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          ¡Gracias!
        </h2>
        <p className="mt-2 text-brown-dark">
          Recibimos tu mensaje. Te vamos a contactar en menos de 48 horas.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-5 rounded-2xl border border-brown-dark/10 bg-cream-soft p-8"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="nombre" className="text-sm font-medium text-ink">
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="rounded-lg border border-brown-dark/20 bg-cream px-4 py-3 text-ink outline-none focus:border-accent"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-brown-dark/20 bg-cream px-4 py-3 text-ink outline-none focus:border-accent"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="empresa" className="text-sm font-medium text-ink">
          Empresa
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          className="rounded-lg border border-brown-dark/20 bg-cream px-4 py-3 text-ink outline-none focus:border-accent"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensaje" className="text-sm font-medium text-ink">
          Contanos tu objetivo
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          required
          className="resize-none rounded-lg border border-brown-dark/20 bg-cream px-4 py-3 text-ink outline-none focus:border-accent"
        />
      </div>
      <button
        type="submit"
        className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-accent-soft"
      >
        Enviar
      </button>
    </form>
  );
}
