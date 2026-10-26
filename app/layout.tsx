import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CAPI-LIFT | Hair Total Repair - La Science au Service de vos Cheveux",
  description: "Colorer. Réparer. Revitaliser. Découvrez les soins capillaires d'excellence avec nos formules innovantes V-Plex, TheraVitx5, ADN Moléculaire & Tripeptides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-montserrat)] text-slate-800 bg-white">
        {children}
      </body>
    </html>
  );
}
