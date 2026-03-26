import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gasthaus Zeigerle | Traditionelles Wirtshaus in Bregenz",
  description:
    "Genießen Sie traditionelle österreichische Küche im Gasthaus Zeigerle in Bregenz. Wiener Schnitzel, Kässpätzle, Rösti und mehr — mitten in Vorarlberg, nahe der Pfänderbahn.",
  keywords: [
    "Gasthaus Zeigerle",
    "Bregenz Restaurant",
    "Wiener Schnitzel",
    "Vorarlberg",
    "traditionelle österreichische Küche",
    "Wirtshaus",
    "Pfänderbahn",
  ],
  openGraph: {
    title: "Gasthaus Zeigerle | Traditionelles Wirtshaus in Bregenz",
    description:
      "Tradition seit Generationen — Genießen Sie Wiener Schnitzel, Kässpätzle und mehr im Herzen von Bregenz.",
    locale: "de_AT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased min-h-screen bg-cream font-sans">
        {children}
      </body>
    </html>
  );
}
