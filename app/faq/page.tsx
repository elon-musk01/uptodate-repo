import type { Metadata } from 'next';
import FAQContent from './FAQContent';

export const metadata: Metadata = {
  title: 'FAQs - Abbas Rasool Crystal Reports Developer & SQL Server Specialist - Legacy Developer Questions',
  description: 'Frequently asked questions about Abbas Rasool services as Crystal Reports developer and SQL Server specialist. Topics include hiring Crystal Reports developer, SQL Server consultant fees, VB6 developer availability, project turnaround time, and legacy developer services.',
  keywords: ['FAQ', 'Crystal Reports FAQ', 'SQL Server FAQ', 'hire Crystal Reports developer', 'hire SQL Server specialist', 'VB6 developer FAQ', 'legacy developer FAQ', 'project turnaround time', 'Crystal Reports pricing', 'database consultant Pakistan'],
  openGraph: {
    title: 'FAQs – Abbas Rasool | Frequently Asked Questions',
    description: 'Frequently asked questions about Abbas Rasool services, expertise, availability, and project turnaround times for Crystal Reports and SQL Server development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs – Abbas Rasool | Frequently Asked Questions',
    description: 'Frequently asked questions about Abbas Rasool services, expertise, availability, and project turnaround times for Crystal Reports and SQL Server development.',
  },
  alternates: { canonical: 'https://abbasrasool.com/faq' },
};

export default function FAQPage() {
  return <FAQContent />;
}
