import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'Hire Me – Abbas Rasool | Crystal Reports & SQL Server Developer',
  description: 'Hire Abbas Rasool for Crystal Reports development, SQL Server optimization, stored procedure design, and VB6 application maintenance. Available for freelance projects in Karachi, Pakistan.',
  keywords: ['hire Crystal Reports developer', 'hire SQL Server specialist', 'freelance developer Karachi', 'VB6 developer hire', 'reporting specialist Pakistan'],
  openGraph: {
    title: 'Hire Me – Abbas Rasool | Crystal Reports & SQL Server Developer',
    description: 'Hire Abbas Rasool for Crystal Reports development, SQL Server optimization, stored procedure design, and VB6 application maintenance. Available for freelance projects.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Me – Abbas Rasool | Crystal Reports & SQL Server Developer',
    description: 'Hire Abbas Rasool for Crystal Reports development, SQL Server optimization, stored procedure design, and VB6 application maintenance. Available for freelance projects.',
  },
  alternates: { canonical: 'https://abbasrasool.com/hire' },
};

export default function HirePage() {
  return (
    <MainLayout>
      <section className="py-24 px-6 bg-[#0A0A0F] text-[#F0F0F8]">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-[#00D4FF]">
            Hire Me
          </h1>
          <p className="mb-6 text-lg leading-relaxed">
            I am available for freelance projects involving Crystal Reports development, SQL Server optimization, stored procedure design, and VB6 application maintenance.
          </p>
          <p className="mb-6 text-lg leading-relaxed">
            Whether you need a new report, performance tuning for your database, or legacy code updates, I can help deliver robust solutions.
          </p>
          <div className="bg-[#111118] border border-[#2A2A38] rounded-xl p-8">
            <h2 className="font-display text-2xl font-semibold mb-4 text-[#F0F0F8]">
              Services Offered
            </h2>
            <ul className="list-disc list-inside space-y-2 text-[#9090A8]">
              <li>Crystal Reports design and development</li>
              <li>SQL Server stored procedures, views, functions</li>
              <li>Database performance tuning and query optimization</li>
              <li>VB6 application maintenance and feature addition</li>
              <li>Data extraction, transformation, and loading (ETL)</li>
              <li>Dashboard and KPI reporting</li>
            </ul>
          </div>
          <div className="mt-8 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4FF] text-[#0A0A0F] font-semibold rounded-lg hover:bg-[#00D4FF]/90 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
