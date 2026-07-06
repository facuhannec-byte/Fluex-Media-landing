"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  if (status === "sent") {
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
      onSubmit={async (event) => {
        event.preventDefault();
        setStatus("sending");
        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          if (!response.ok) throw new Error("request failed");
          setStatus("sent");
        } catch {
          setStatus("error");
        }
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

      {status === "error" && (
        <p className="text-sm text-red-700">
          No se pudo enviar el mensaje — escribinos directamente a{" "}
          <a
            href="https://instagram.com/fluex.media"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            @fluex.media
          </a>{" "}
          en Instagram.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-accent-soft disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
