import '@/app/about/globals.css';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'About Abbas Rasool | Crystal Reports Developer & SQL Server Specialist - Legacy Developer Profile',
  description: 'About Abbas Rasool - Crystal Reports Developer with 2+ years experience in SQL Server, VB6, and legacy development. Expert in enterprise reporting, ERP dashboards, and database optimization. Based in Karachi, Pakistan.',
  keywords: ['Crystal Reports developer', 'SQL Server specialist', 'VB6 developer', 'legacy developer Pakistan', 'enterprise reporting', 'ERP reports Karachi', 'About Abbas Rasool', 'database developer Pakistan', 'reporting specialist Karachi'],
  openGraph: {
    title: 'About Abbas Rasool — Crystal Reports Developer | SQL Server Specialist',
    description: '2+ years building enterprise Crystal Reports dashboards and SQL Server stored procedures for ERP systems. Available for freelance reporting projects.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Abbas Rasool — Crystal Reports Developer | SQL Server Specialist',
    description: '2+ years building enterprise Crystal Reports dashboards and SQL Server stored procedures for ERP systems. Available for freelance reporting projects.',
  },
  alternates: { canonical: 'https://abbasrasool.com/about' },
};

export default function AboutPage() {
  return (
    <MainLayout>
      <section className="py-24 px-6 bg-[#0A0A0F] text-[#F0F0F8]">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-[#00D4FF]">
            About Me
          </h1>
          <p className="mb-6 text-lg leading-relaxed">
            I am a senior SQL Server and Crystal Reports specialist with over two years of experience building enterprise‑grade data solutions for ERP systems. I have a strong background in VB6 development and a passion for modern web technologies.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            My work focuses on creating performant stored procedures, designing complex reports, and delivering actionable insights to drive business decisions. I am currently transitioning to modern front‑end development with React and Next.js to offer full‑stack capabilities.
          </p>
          <a
            href="/Abbas_Rasool_CV_v3.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0A0A0F] font-semibold rounded-lg hover:bg-[#00D4FF]/90 transition"
          >
            Download Full CV
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
