import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "zahi — Virtual Try-On for eCommerce",
  description:
    "AI virtual try-on for Pakistani and international eCommerce stores. Paste a product link, get photorealistic try-ons in under a second.",
  openGraph: {
    title: "zahi — Virtual Try-On for eCommerce",
    description:
      "AI virtual try-on for Pakistani and international eCommerce stores.",
    url: "https://zahi.pk",
    siteName: "zahi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zahi — Virtual Try-On for eCommerce",
    description:
      "AI virtual try-on for Pakistani and international eCommerce stores.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-display antialiased dark:bg-coal dark:text-canvas-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}