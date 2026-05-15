import type { Metadata } from "next";

import { Roboto } from "next/font/google";

const robotoSansSerif = Roboto({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

import "@/_styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bombaybites.co.za"),
  title: "Bombay Bites",
  description: "Bombay Bites - Authentic Indian cuisine in South Africa",
  keywords: "Bombay Bites, Indian restaurant, Indian cuisine, South Africa, authentic Indian food, curry, biryani, Indian takeaway, Indian food delivery, spicy food, Bombay street food, Indian restaurant South Africa",
  openGraph: {
    description: "Bombay Bites - Authentic Indian cuisine in South Africa",
    type: "website",
    locale: "en_ZA",
    siteName: "Bombay Bites",
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
      <body className={`${robotoSansSerif.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
