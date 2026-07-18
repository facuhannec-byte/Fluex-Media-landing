import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
