import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "zahi. | AI Virtual Try-On",
  description:
    "AI-powered virtual try-on for fashion commerce. Turn your product catalog into realistic try-on experiences.",
  metadataBase: new URL("https://zahi.pk"),
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
      <body className={`${inter.variable} antialiased`}>
        <Navbar />

        <div className="relative min-h-screen overflow-x-clip">
          {children}
        </div>
      </body>
    </html>
  );
}