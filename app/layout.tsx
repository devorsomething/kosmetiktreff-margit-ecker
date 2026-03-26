import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kosmetiktreff Margit Ecker | Kosmetik & Fusspflege in Bregenz",
  description:
    "Ihr Studio für Kosmetik, Fusspflege und Nagelstudio in Bregenz. Individuelle Behandlungen für Ihr Wohlbefinden – seit Jahren vertrauensvoll.",
  keywords: "Kosmetik, Fusspflege, Nagelstudio, Bregenz, Waxing, Augenbrauen, Geschenkgutschein",
  openGraph: {
    title: "Kosmetiktreff Margit Ecker Bregenz",
    description: "Kosmetik, Fusspflege & Wellness in Bregenz",
    images: [
      {
        url: '/og?name=Kosmetiktreff%20Margit%20Ecker&tagline=Kosmetik%20%C2%B7%20Fusspflege%20%C2%B7%20Wohlbefinden&color=%23E6E0F0',
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kosmetiktreff Margit Ecker Bregenz",
    description: "Kosmetik, Fusspflege & Wellness in Bregenz",
    images: ['/og'],
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
