//layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artwork Maestro | Handcrafted Products",
  description:
  "Explore Artwork Maestro's exquisite collection of handicraft products. Discover unique beer cups, bone items, and artisanal holders. Premium quality for discerning international buyers.",
  keywords: [
    "hornware",
    "handcrafted",
    "beer cups",
    "bone items",
    "wood handicraft",
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
    "Mukhbar Bakhoor products",
    "Shofar",
    "Wood handicrafts",
    "Bone inlay products",
    "Buffalo horn products",
    "Copper magnetic bracelets",
    "Fashion jewellery",
    "Mother of pearl products",
    "Bakhoor burners",
    "Handmade wooden crafts",
    "Bone inlay furniture",
    "Buffalo horn accessories",
    "Magnetic healing jewelry",
    "Artisanal fashion accessories",
    "Mother of pearl inlay",
  ],
  openGraph: {
    title: "Artwork Maestro | Handcrafted Hornware Products",
    description:
      "Explore our collection of exquisite handicraft products. Find unique beer cups, bone items, holders, and more for international buyers.",
    url: "https://www.artworkmaestro.com",
    siteName: "Artwork Maestro",
    images: [
      {
        url: "https://www.artworkmaestro.com/craftStore.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    sitemap: 'https://www.artworkmaestro.com/sitemap.xml',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Artwork Maestro | Handicraft Products',
    description: 'Explore our collection of exquisite handicraft products. Find unique beer cups, bone items, holders, and more for international buyers.',
    images: ['https://www.artworkmaestro.com/craftStore.webp'],
  },
  alternates: {
    canonical: 'https://www.artworkmaestro.com',
  },
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
