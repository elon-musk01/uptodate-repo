import type { Metadata } from "next";
import { Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL('https://abbasrasool.com'),
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
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance Crystal Reports Developer',
      description: 'Enterprise reporting and database solutions provider',
    },
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Abbas Rasool Portfolio',
    url: 'https://abbasrasool.com',
    description: 'Crystal Reports Developer and SQL Server Specialist portfolio',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://abbasrasool.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Abbas Rasool - Crystal Reports Developer',
    url: 'https://abbasrasool.com',
    logo: 'https://abbasrasool.com/logo.png',
    description: 'Professional Crystal Reports Developer and SQL Server Specialist offering enterprise reporting solutions and legacy development services',
    sameAs: [
      'https://github.com/elon-musk01/uptodate-repo',
      'https://linkedin.com/in/abbas-rasool',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'N. Nazimabad Block L',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      postalCode: '74700',
      addressCountry: 'PK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-320-308-7202',
      contactType: 'customer service',
      email: 'abbasrasool04@gmail.com',
      availableLanguage: ['English', 'Urdu'],
    },
    areaServed: ['Pakistan', 'International'],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://abbasrasool.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://abbasrasool.com/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Hire',
        item: 'https://abbasrasool.com/hire',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Contact',
        item: 'https://abbasrasool.com/contact',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'FAQ',
        item: 'https://abbasrasool.com/faq',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Abbas Rasool - Crystal Reports Developer',
    image: 'https://abbasrasool.com/og-image.jpg',
    description: 'Professional Crystal Reports Developer and SQL Server Specialist providing enterprise reporting solutions, database optimization, and legacy development services in Karachi, Pakistan',
    url: 'https://abbasrasool.com',
    telephone: '+92-320-308-7202',
    email: 'abbasrasool04@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'N. Nazimabad Block L',
      addressLocality: 'Karachi',
      addressRegion: 'Sindh',
      postalCode: '74700',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.8607',
      longitude: '67.0011',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    areaServed: ['Pakistan', 'International'],
    sameAs: [
      'https://github.com/elon-musk01/uptodate-repo',
      'https://linkedin.com/in/abbas-rasool',
    ],
  };

  return (
    <html lang="en" className={`${display.variable} ${mono.variable} h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Abbas Rasool - Crystal Reports Developer and SQL Server Specialist with 2+ years experience. Expert in VB6, ERP reporting, and database optimization. Available for freelance projects." />
        <meta name="keywords" content="Crystal Reports developer, SQL Server specialist, VB6 developer, legacy developer Pakistan, enterprise reporting" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
