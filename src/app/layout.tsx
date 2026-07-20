import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  // "latin" solo no trae todos los acentos mayúsculos que necesita el
  // español (por ejemplo "QUÉ"/"ESTÁ" en mayúscula perdían la tilde al
  // transformar con CSS uppercase). "latin-ext" los cubre.
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "FLUEX | Socios estratégicos de crecimiento",
  description:
    "Detectamos qué está frenando el crecimiento de tu negocio y construimos un sistema adaptado para resolverlo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sourceSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
