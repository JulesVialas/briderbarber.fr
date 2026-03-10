import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Brider Barber | Barbier à Toulouse",
  description:
    "Réservez votre coupe avec Brider Barber, barbier indépendant à Toulouse. Coupe 15€, Barbe 20€, Transfo 20€.",
  openGraph: {
    title: "Brider Barber | Barbier à Toulouse",
    description:
      "Réservez votre coupe avec Brider Barber, barbier indépendant à Toulouse. Coupe 15€, Barbe 20€, Transfo 20€.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
