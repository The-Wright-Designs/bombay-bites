import type { Metadata } from "next";

import { DynaPuff } from "next/font/google";

const dynaPuffDisplay = DynaPuff({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-dynapuff",
});

import "@/_styles/globals.css";
import HeaderComponent from "@/_components/navigation/header-component";
import FooterComponent from "@/_components/navigation/footer-component";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bombaybites.co.za"),
  title: "Bombay Bites | Plettenberg Bay",
  description:
    "Bombay Bites - Authentic Indian cuisine at Market Off Main in Plettenberg Bay",
  keywords:
    "Bombay Bites, Plettenberg Bay, Plettenberg Bay restaurant, Plettenberg Bay food, Plettenberg Bay takeaway, Plett restaurant, Plett food, Plett takeaway, Indian restaurant, Indian cuisine, authentic Indian food, curry, biryani, Indian takeaway, Indian restaurant Plettenberg Bay",
  openGraph: {
    description:
      "Bombay Bites - Authentic Indian cuisine at Market Off Main in Plettenberg Bay",
    type: "website",
    locale: "en_ZA",
    siteName: "Bombay Bites | Plettenberg Bay",
    images: [
      {
        url: "/open-graph-image.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bombay Bites",
    url: "https://www.bombaybites.co.za",
  };
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${dynaPuffDisplay.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
