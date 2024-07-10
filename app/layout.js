import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artwork Maestro | Handcrafted Hornware Products",
  description:
    "Discover exquisite handcrafted hornware products at Artwork Maestro. Browse our collection of beer cups, bone items, holders, and more for international buyers.",
  keywords: [
    "hornware",
    "handcrafted",
    "beer cups",
    "bone items",
    "holders",
    "handicrafts",
    "artisanal products",
  ],
  openGraph: {
    title: "Artwork Maestro | Handcrafted Hornware Products",
    description:
      "Explore our collection of exquisite handcrafted hornware products. Find unique beer cups, bone items, holders, and more for international buyers.",
    url: "https://www.artworkmaestro.com",
    siteName: "Artwork Maestro",
    images: [
      {
        url: "https://www.artworkmaestro.com/og-image.jpg",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
