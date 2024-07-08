import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


const metadata = {
  title: "Artwork Maestro: Handcrafted Bone Products",
  description: "Explore our collection of authentic Viking hornware, meticulously crafted from bone. We ship worldwide - perfect for collectors and enthusiasts.",
  keywords: "Viking hornware, bone crafts, artisanal products, handmade artifacts",
  openGraph: {
    title: "Artwork Maestro: Handcrafted Bone Products",
    description: "Authentic Viking hornware, meticulously crafted from bone. Global shipping available.",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Artwork Maestro products showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artwork Maestro: Handcrafted Bone Products",
    description: "Authentic Viking hornware, crafted from bone. Shop our unique collection.",
    images: ["https://example.com/twitter-image.jpg"],
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
