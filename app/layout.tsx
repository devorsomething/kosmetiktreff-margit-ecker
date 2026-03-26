import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kosmetiktreff Margit Ecker | Kosmetik & Fusspflege in Bregenz",
  description:
    "Ihr Studio für Kosmetik, Fusspflege und Nagelstudio in Bregenz. Individuelle Behandlungen für Ihr Wohlbefinden – seit Jahren vertrauensvoll.",
  keywords: "Kosmetik, Fusspflege, Nagelstudio, Bregenz, Waxing, Augenbrauen, Geschenkgutschein",
  openGraph: {
    title: "Kosmetiktreff Margit Ecker | Bregenz",
    description: "Kosmetik · Fusspflege · Wohlbefinden – Ihr persönliches Studio in Bregenz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
