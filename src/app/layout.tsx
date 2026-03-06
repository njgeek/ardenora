import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ardenora | Wholesale Women's Apparel — Juniors & Missy",
  description:
    "Ardenora is a wholesale women's apparel supplier specializing in young contemporary, juniors, and missy. Serving TJ Maxx, Marshalls, Ross, Burlington, and off-price retailers nationwide.",
  keywords: [
    "wholesale womens apparel",
    "juniors wholesale clothing",
    "missy wholesale apparel",
    "young contemporary wholesale",
    "off-price retail supplier",
    "TJ Maxx vendor",
    "wholesale fashion supplier",
    "womens closeout apparel",
    "wholesale dresses tops leggings",
    "discount retail inventory",
  ],
  openGraph: {
    title: "Ardenora | Wholesale Women's Apparel — Juniors & Missy",
    description:
      "Wholesale women's apparel at off-price margins. Young contemporary, juniors & missy for off-price retailers.",
    url: "https://ardenora.com",
    siteName: "Ardenora",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
