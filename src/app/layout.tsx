import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ardenora | Wholesale Apparel for Off-Price Retailers",
  description:
    "Ardenora supplies premium branded and unbranded apparel at wholesale prices. Serving TJ Maxx, Marshalls, Ross, Burlington, and independent off-price retailers nationwide.",
  keywords: [
    "wholesale apparel",
    "off-price retail",
    "bulk clothing",
    "TJ Maxx supplier",
    "wholesale fashion",
    "closeout apparel",
    "overstock clothing",
    "discount retail supplier",
  ],
  openGraph: {
    title: "Ardenora | Wholesale Apparel for Off-Price Retailers",
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
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
