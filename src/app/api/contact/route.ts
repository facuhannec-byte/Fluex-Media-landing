import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "fluex.mediax@gmail.com";

export async function POST(request: Request) {
  const { nombre, email, empresa, mensaje } = await request.json();

  if (!nombre || !email || !mensaje) {
    return NextResponse.json(
      { error: "Faltan campos requeridos." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error(
      "RESEND_API_KEY no está configurada — no se puede enviar el email de contacto.",
    );
    return NextResponse.json(
      { error: "El envío de contacto no está configurado todavía." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Fluex Media <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Nuevo contacto de ${nombre}${empresa ? ` (${empresa})` : ""}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nEmpresa: ${empresa || "-"}\n\nMensaje:\n${mensaje}`,
    });

    if (error) {
      console.error("Resend devolvió un error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error enviando email de contacto:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 500 },
    );
  }
}
