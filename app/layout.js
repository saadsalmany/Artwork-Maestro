//layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artwork Maestro | Handcrafted Hornware Products",
  description:
  "Explore Artwork Maestro's exquisite collection of handcrafted hornware products. Discover unique beer cups, bone items, and artisanal holders. Premium quality for discerning international buyers.",
  keywords: [
    "hornware",
    "handcrafted",
    "beer cups",
    "bone items",
    "holders",
    "handicrafts",
    "artisanal products",
    "hornware products",
    "handcrafted beer cups",
    "bone handicrafts",
    "artisanal horn holders",
    "premium hornware",
    "unique horn gifts",
    "sustainable handicrafts",
    "luxury horn items",
  ],
  openGraph: {
    title: "Artwork Maestro | Handcrafted Hornware Products",
    description:
      "Explore our collection of exquisite handcrafted hornware products. Find unique beer cups, bone items, holders, and more for international buyers.",
    url: "https://www.artworkmaestro.com",
    siteName: "Artwork Maestro",
    images: [
      {
        url: "https://www.canva.com/design/DAGOr9QW_S0/4Yavl1PKI2rcgoGl4d6CaA/view?utm_content=DAGOr9QW_S0&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  canonical: "https://www.artworkmaestro.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
