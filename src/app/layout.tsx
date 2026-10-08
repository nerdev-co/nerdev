import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { company, identifierRows } from "@/lib/company";

const description =
  `${company.brand} is a product engineering studio run by ${company.legalName}. ` +
  `We architect, build, and ship production systems for startups — web applications, ` +
  `AI integration, mobile apps, and backend infrastructure.`;

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
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.brand} — Product Engineering Studio`,
    template: `%s · ${company.brand}`,
  },
  description,
  keywords: ["product engineering", "startup development", "Next.js", "AI integration", "SaaS development"],
  authors: [{ name: company.legalName, url: company.siteUrl }],
  creator: company.legalName,
  publisher: company.brand,
  openGraph: {
    title: `${company.brand} — Product Engineering Studio`,
    description,
    url: company.siteUrl,
    siteName: company.brand,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.brand} — Product Engineering Studio`,
    description,
    creator: "@nerdev_in",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Structured data for the business. Placeholder fields are omitted rather than
 * published as "TODO", so nothing unverified reaches search engines.
 */
const organizationSchema = () => {
  const addr = company.registeredOffice;
  const ids = identifierRows();

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${company.siteUrl}/#organization`,
    name: company.brand,
    description,
    url: company.siteUrl,
    email: company.email,
    foundingDate: String(company.foundingYear),
    founder: { '@type': 'Person', name: company.legalName },
    ...(addr.isPlaceholder
      ? {}
      : {
          address: {
            '@type': 'PostalAddress',
            addressLocality: addr.city,
            addressRegion: addr.state,
            postalCode: addr.postalCode,
            addressCountry: 'IN',
          },
        }),
    ...(ids.length > 0
      ? {
          identifier: ids.map(id =>
            `${id.label}: ${id.value}`
          ),
        }
      : {}),
    sameAs: Object.values(company.social),
    areaServed: 'Worldwide',
    knowsAbout: [
      'Product engineering',
      'Next.js',
      'TypeScript',
      'LLM integration',
      'Cloud infrastructure',
    ],
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <CustomCursor />
        <AmbientBackground />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}