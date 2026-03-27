import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { JsonLd } from "./components/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const BASE_URL = "https://jonmarron.github.io/altesa";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Grupo Altesa | Óptica, Optometría y Audiología",
    template: "%s | Grupo Altesa",
  },
  description:
    "Grupo Altesa es un grupo empresarial especializado en óptica, optometría y audiología con más de 30 años de experiencia en el País Vasco. Cuatro empresas, un mismo compromiso con la salud visual y auditiva.",
  keywords: [
    "óptica", "optometría", "audiología", "audífonos", "gafas", "lentes de contacto",
    "Irún", "Gipuzkoa", "País Vasco", "Grupo Altesa", "Federópticos", "BEGIRA", "ATENEA",
  ],
  authors: [{ name: "Grupo Altesa" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: BASE_URL,
    siteName: "Grupo Altesa",
    title: "Grupo Altesa | Óptica, Optometría y Audiología",
    description:
      "Grupo empresarial especializado en óptica, optometría y audiología. Más de 30 años al servicio de profesionales y clientes en el País Vasco.",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Grupo Altesa — Óptica, Optometría y Audiología",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Altesa | Óptica, Optometría y Audiología",
    description:
      "Grupo empresarial especializado en óptica, optometría y audiología. Más de 30 años al servicio de profesionales y clientes en el País Vasco.",
    images: ["/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
