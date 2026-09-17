import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "zahi. | AI Virtual Try-On",
  description:
    "AI-powered virtual try-on for fashion commerce. Turn your product catalog into realistic try-on experiences.",
  openGraph: {
    title: "zahi. | AI Virtual Try-On",
    description:
      "AI-powered virtual try-on for fashion commerce.",
    url: "https://zahi.pk",
    siteName: "zahi.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zahi. | AI Virtual Try-On",
    description:
      "AI-powered virtual try-on for fashion commerce.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} bg-[#050505] text-[#f5f5f2] antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}