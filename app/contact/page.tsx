import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact Abbas Rasool | Crystal Reports Developer & SQL Server Specialist - Hire Legacy Developer',
  description: 'Contact Abbas Rasool for Crystal Reports development, SQL Server optimization, and legacy developer services. Available for freelance projects in Karachi, Pakistan. Get quotes for VB6, Crystal Reports, and database development.',
  keywords: ['contact Abbas Rasool', 'hire developer Karachi', 'Crystal Reports contact', 'SQL Server developer contact', 'contact VB6 developer', 'legacy developer contact', 'project inquiry', 'hire Crystal Reports developer Pakistan', 'contact database specialist', 'Abbas Rasool contact'],
  openGraph: {
    title: 'Contact Abbas Rasool — Crystal Reports Developer | SQL Server Specialist',
    description: 'Get in touch with Abbas Rasool for project inquiries, collaborations, or questions. Available for Crystal Reports and SQL Server freelance projects.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Abbas Rasool — Crystal Reports Developer | SQL Server Specialist',
    description: 'Get in touch with Abbas Rasool for project inquiries, collaborations, or questions. Available for Crystal Reports and SQL Server freelance projects.',
  },
  alternates: { canonical: 'https://abbasrasool.com/contact' },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Abbas Rasool',
    description: 'Contact Abbas Rasool for Crystal Reports development, SQL Server optimization, and legacy developer services.',
    url: 'https://abbasrasool.com/contact',
    mainEntity: {
      '@type': 'Person',
      name: 'Abbas Rasool',
      email: 'abbasrasool04@gmail.com',
      telephone: '+92-320-308-7202'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactContent />
    </>
  );
}
