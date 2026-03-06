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
  title: "Ardenora | Premium Wholesale Apparel for Off-Price Retailers",
  description:
    "Ardenora supplies premium branded and unbranded apparel at wholesale prices. Serving TJ Maxx, Marshalls, Ross, Burlington, and independent off-price retailers nationwide.",
  keywords: [
    "wholesale apparel",
    "off-price retail supplier",
    "bulk clothing wholesale",
    "TJ Maxx vendor",
    "wholesale fashion supplier",
    "closeout apparel deals",
    "overstock clothing lots",
    "discount retail inventory",
    "wholesale clothing distributor",
  ],
  openGraph: {
    title: "Ardenora | Premium Wholesale Apparel",
    description:
      "Premium wholesale apparel at unbeatable prices. Your trusted partner for off-price retail inventory.",
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
