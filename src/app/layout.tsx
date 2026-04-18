import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/custom-cursor";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--sans',
  display: 'swap',
  preload: true,
});

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--mono',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "nerdev — Product Engineering Studio",
  description: "We build the software serious startups actually ship. A two-person product engineering studio that embeds with early-stage startups to architect, build, and ship production systems.",
  keywords: ["product engineering", "startup development", "Next.js", "AI integration", "SaaS development"],
  authors: [{ name: "nerdev" }],
  openGraph: {
    title: "nerdev — Product Engineering Studio",
    description: "We build the software serious startups actually ship.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-text antialiased">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}