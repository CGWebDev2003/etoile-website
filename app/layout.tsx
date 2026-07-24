import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ballettschule-etoile.de"),
  title: {
    default: "Ballettschule Étoile Leipzig – Grazie, Eleganz, Inspiration",
    template: "%s | Ballettschule Étoile",
  },
  description:
    "Klassisches Ballett auf professionellem Niveau in Leipzig. Kurse für Kinder ab 3 Jahren, Jugendliche und Erwachsene unter der Leitung von Primaballerina Oksana Kulchytska.",
  keywords: [
    "Ballettschule",
    "Ballett Leipzig",
    "Kinderballett",
    "Spitzentraining",
    "Oksana Kulchytska",
    "Étoile",
  ],
  openGraph: {
    title: "Ballettschule Étoile Leipzig",
    description:
      "Klassisches Ballett auf professionellem Niveau in Leipzig – für alle Altersgruppen.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${montserrat.variable} ${dancingScript.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Setzt das gewählte Theme vor dem ersten Paint – verhindert FOUC. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.dataset.theme=t;}}catch(e){}})();",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
