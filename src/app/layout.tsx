import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altercode | Ingeniería de Software & IA",
  description: "Estudio de desarrollo liderado por César Guajardo. Especializado en aplicaciones escalables, IA Generativa y soluciones GovTech.",
  keywords: ["Desarrollo de Software", "IA", "Chile", "Next.js", "Laravel", "TalkFit"],
  authors: [{ name: "César Guajardo" }],
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Altercode | Ingeniería de Software & IA",
    description: "Transformando ideas complejas en productos digitales de alto rendimiento.",
    url: "https://altercode.cl",
    siteName: "Altercode",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altercode | César Guajardo",
    description: "Desarrollo Full-Stack e IA de alto impacto.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}