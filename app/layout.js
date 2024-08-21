//layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        url: "https://www.google.com/imgres?q=artwork%20maestro&imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4E03AQH2Z2GDsZrOMQ%2Fprofile-displayphoto-shrink_200_200%2F0%2F1657993913813%3Fe%3D2147483647%26v%3Dbeta%26t%3DHDc7Bpp6iXMVvesrASFiK7oxTf_64s3rU_x7sG13zVQ&imgrefurl=https%3A%2F%2Fin.linkedin.com%2Fin%2Fartworkmaestro&docid=Ww4PHMpEQhTdQM&tbnid=1hgzP0JFxEpiKM&vet=12ahUKEwjPlsTixYWIAxX4T2wGHTbZIskQM3oECE8QAA..i&w=200&h=200&hcb=2&ved=2ahUKEwjPlsTixYWIAxX4T2wGHTbZIskQM3oECE8QAA",
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
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
