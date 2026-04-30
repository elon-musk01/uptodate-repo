import type { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import { CheckCircle, ArrowRight, Clock, Star, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hire Crystal Reports Developer & SQL Server Specialist - Abbas Rasool | Freelance Legacy Developer',
  description: 'Hire Abbas Rasool - Crystal Reports Developer and SQL Server Specialist with 2+ years experience. Expert in VB6, ERP reporting, stored procedures, and database optimization. Available for freelance projects in Karachi, Pakistan.',
  keywords: ['hire Crystal Reports developer', 'hire SQL Server specialist', 'freelance Crystal Reports developer', 'hire VB6 developer', 'reporting specialist Pakistan', 'hire database developer Karachi', 'Crystal Reports freelancer', 'SQL Server consultant Pakistan', 'legacy developer hire', 'ERP reporting specialist'],
  openGraph: {
    title: 'Hire Abbas Rasool — Crystal Reports Developer | SQL Server Specialist',
    description: 'Hire Abbas Rasool for Crystal Reports development, SQL Server optimization, stored procedure design, and VB6 application maintenance. Available for freelance projects.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Abbas Rasool — Crystal Reports Developer | SQL Server Specialist',
    description: 'Hire Abbas Rasool for Crystal Reports development, SQL Server optimization, stored procedure design, and VB6 application maintenance. Available for freelance projects.',
  },
  alternates: { canonical: 'https://abbasrasool.com/hire' },
};

const services = [
  {
    icon: Star,
    title: 'Crystal Reports',
    accent: 'var(--accent)',
    bg: 'bg-[var(--accent)]/10',
    features: [
      'Custom report design & development',
      'Parameterized & subreports',
      'Charts, graphs & dashboards',
      'Data extraction & formatting',
      'ERP report integration',
    ],
  },
  {
    icon: Shield,
    title: 'SQL Server & Database',
    accent: 'var(--accent-secondary)',
    bg: 'bg-[var(--accent-secondary)]/10',
    features: [
      'Stored procedures & functions',
      'Query performance tuning',
      'Database schema design',
      'ETL pipeline development',
      'Views, triggers & indexes',
    ],
  },
  {
    icon: Zap,
    title: 'Legacy Development',
    accent: '#4ECDC4',
    bg: 'bg-[#4ECDC4]/10',
    features: [
      'VB6 application maintenance',
      'Feature additions & bug fixes',
      'Code modernisation',
      'VB6 → VB.NET migration support',
      'Legacy system integration',
    ],
  },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We discuss your requirements, timeline, and expected deliverables.' },
  { step: '02', title: 'Proposal', desc: 'I provide a detailed scope, cost estimate, and project plan.' },
  { step: '03', title: 'Development', desc: 'Work begins with regular updates and check-ins throughout.' },
  { step: '04', title: 'Delivery', desc: 'Final delivery with documentation, revisions included.' },
];

export default function HirePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Crystal Reports & SQL Server Development',
    description: 'Expert Crystal Reports development, SQL Server optimization, stored procedure design, and VB6 application maintenance.',
    provider: {
      '@type': 'Person',
      name: 'Abbas Rasool'
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: services.map((svc, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: svc.title
        },
        position: index + 1
      }))
    }
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to hire Abbas Rasool',
    description: 'The simple 4-step process to work together on your database and reporting projects.',
    step: process.map((p, index) => ({
      '@type': 'HowToStep',
      name: p.title,
      text: p.desc,
      url: `https://abbasrasool.com/hire#step-${p.step}`,
      position: index + 1
    }))
  };

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-2 sm:px-6 sm:py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full text-sm text-[var(--accent)] mb-4 sm:mb-6">
              Available for Hire
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[var(--text-primary)]">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
              I&apos;m available for freelance projects involving Crystal Reports, SQL Server, and legacy
              development. Whether you need a single report or a full-scale ERP integration, I deliver
              quality on time.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-8 card-hover flex flex-col"
              >
                <div className={`w-12 h-12 ${svc.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <svc.icon className="w-6 h-6" style={{ color: svc.accent }} />
                </div>
                <h2
                  className="font-display text-xl font-semibold mb-5"
                  style={{ color: svc.accent }}
                >
                  {svc.title}
                </h2>
                <ul className="space-y-3 flex-1">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: svc.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-12 text-[var(--text-primary)]">
              How It Works
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <div key={p.step} className="relative">
                  <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-6 card-hover h-full">
                    <div className="font-display text-4xl font-bold text-[var(--border)] mb-3">{p.step}</div>
                    <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mb-2">{p.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
                  </div>
                  {i < process.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-[var(--border)]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Why Me */}
          <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="font-display text-2xl font-bold text-center mb-8 text-[var(--text-primary)]">Why Hire Me?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Clock, label: 'On-Time Delivery', desc: '95%+ projects delivered on schedule', accent: 'var(--accent)' },
                { icon: Star, label: 'Quality Focus', desc: 'Clean, documented, maintainable code', accent: 'var(--accent-secondary)' },
                { icon: Shield, label: 'Niche Expertise', desc: '2+ years in Crystal Reports & SQL Server', accent: '#4ECDC4' },
                { icon: Zap, label: 'Fast Turnaround', desc: 'Most reports ready within 3–5 business days', accent: '#FF6B6B' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.accent}15` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.accent }} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[var(--text-primary)] mb-1">{item.label}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-semibold rounded-lg hover:bg-[var(--accent)]/90 transition-all duration-300 btn-primary text-lg"
            >
              Get in Touch
              <ArrowRight size={20} />
            </a>
            <p className="text-sm text-[var(--text-tertiary)] mt-4">Usually responds within 24 hours</p>
          </div>

        </div>
      </section>
    </MainLayout>
  );
}
