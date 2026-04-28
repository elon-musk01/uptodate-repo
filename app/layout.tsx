import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Abbas Rasool — Crystal Reports Developer | SQL Server Specialist",
  description: "2+ years building enterprise Crystal Reports dashboards and SQL Server stored procedures for ERP systems. Available for freelance reporting projects. Based in Karachi, Pakistan.",
  keywords: ['Crystal Reports developer', 'SQL Server specialist', 'VB6 developer', 'enterprise reporting', 'ERP reports Karachi'],
  openGraph: {
    title: 'Abbas Rasool — Crystal Reports Developer | SQL Server Specialist',
    description: '2+ years building enterprise Crystal Reports dashboards and SQL Server stored procedures for ERP systems. Available for freelance reporting projects.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abbas Rasool — Crystal Reports Developer | SQL Server Specialist',
    description: '2+ years building enterprise Crystal Reports dashboards and SQL Server stored procedures for ERP systems. Available for freelance reporting projects.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://abbasrasool.com' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abbas Rasool',
    jobTitle: 'Crystal Reports Developer | SQL Server Specialist',
    description: '2+ years building enterprise Crystal Reports dashboards and SQL Server stored procedures for ERP systems.',
    url: 'https://abbasrasool.com',
    sameAs: [
      'https://github.com/elon-musk01/uptodate-repo',
      'https://linkedin.com/in/abbas-rasool',
      'mailto:abbasrasool04@gmail.com',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'Pakistan',
    },
  };

  return (
    <html lang="en" className={`${display.variable} ${mono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0F] text-[#F0F0F8]">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
