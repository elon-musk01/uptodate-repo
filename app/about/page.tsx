import type { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import { Terminal, Database, Code, BookOpen, Briefcase, Award, Download } from 'lucide-react';

export const metadata: Metadata = {
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

const techStack = [
  { icon: Database, name: 'SQL Server', color: 'text-[var(--accent)]', bg: 'bg-[var(--accent)]/10' },
  { icon: Terminal, name: 'Crystal Reports', color: 'text-[var(--accent-secondary)]', bg: 'bg-[var(--accent-secondary)]/10' },
  { icon: Code, name: 'VB6 / VB.NET', color: 'text-[#4ECDC4]', bg: 'bg-[#4ECDC4]/10' },
  { icon: BookOpen, name: 'T-SQL', color: 'text-[#FF6B6B]', bg: 'bg-[#FF6B6B]/10' },
  { icon: Briefcase, name: 'ERP Systems', color: 'text-[#FFD93D]', bg: 'bg-[#FFD93D]/10' },
  { icon: Award, name: 'Data Modeling', color: 'text-[#FF6B9D]', bg: 'bg-[#FF6B9D]/10' },
];

const experience = [
  {
    year: '2022 – Present',
    role: 'Crystal Reports & SQL Server Specialist',
    company: 'Freelance / Enterprise Clients',
    description: 'Designing and delivering enterprise-grade Crystal Reports dashboards, stored procedures, and ERP reporting solutions for manufacturing, HR, and retail clients across Pakistan and UAE.',
    accent: 'var(--accent)',
  },
  {
    year: '2022',
    role: 'Junior Database Developer',
    company: 'Private ERP Firm, Karachi',
    description: 'Built and maintained VB6 desktop applications with SQL Server backends. Created parameterized reports and ETL pipelines for inventory and payroll management.',
    accent: 'var(--accent-secondary)',
  },
];

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Person',
      name: 'Abbas Rasool',
      description: 'A senior SQL Server and Crystal Reports specialist with over two years of experience building enterprise-grade data solutions for ERP systems.',
      knowsAbout: ['SQL Server', 'Crystal Reports', 'VB6', 'T-SQL', 'ERP Systems', 'Data Modeling']
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      xpath: [
        "/html/head/title",
        "/html/head/meta[@name='description']/@content"
      ]
    }
  };

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <div className="max-w-5xl mx-auto">

          {/* Hero Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full text-sm text-[var(--accent)] mb-6">
              About Me
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[var(--text-primary)]">
              Hi, I&apos;m <span className="gradient-text">Abbas Rasool</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl mx-auto">
              A senior SQL Server and Crystal Reports specialist with over two years of experience
              building enterprise-grade data solutions for ERP systems. Passionate about turning
              complex data into actionable insights.
            </p>
          </div>

          {/* Bio Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-8 card-hover">
              <h2 className="font-display text-xl font-semibold mb-4 text-[var(--text-primary)]">My Background</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                I have a strong background in VB6 development and a passion for modern web
                technologies. My work focuses on creating performant stored procedures, designing
                complex reports, and delivering actionable insights to drive business decisions.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Currently transitioning to modern front-end development with React and Next.js
                to offer full-stack capabilities alongside my legacy expertise.
              </p>
            </div>

            <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-8 card-hover">
              <h2 className="font-display text-xl font-semibold mb-4 text-[var(--text-primary)]">At a Glance</h2>
              <ul className="space-y-4">
                {[
                  { label: 'Location', value: 'Karachi, Pakistan', icon: '📍' },
                  { label: 'Availability', value: 'Open to Freelance & Remote', icon: '✅' },
                  { label: 'Experience', value: '2+ Years Enterprise Dev', icon: '⚡' },
                  { label: 'Response Time', value: 'Within 24 Hours', icon: '⏱️' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <div>
                      <span className="text-xs text-[var(--text-tertiary)] block">{item.label}</span>
                      <span className="text-sm text-[var(--text-primary)] font-medium">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12 sm:mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10 text-[var(--text-primary)]">
              Core Technologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-4 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-5 card-hover"
                >
                  <div className={`w-11 h-11 ${tech.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                  </div>
                  <span className="font-medium text-[var(--text-primary)] text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10 text-[var(--text-primary)]">
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl p-8 card-hover relative overflow-hidden"
                >
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                    style={{ background: exp.accent }}
                  />
                  <div className="pl-4">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span
                        className="text-xs font-mono px-3 py-1 rounded-full border"
                        style={{ color: exp.accent, borderColor: `${exp.accent}40`, background: `${exp.accent}10` }}
                      >
                        {exp.year}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-1">{exp.role}</h3>
                    <p className="text-sm text-[var(--text-tertiary)] mb-3">{exp.company}</p>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/Abbas_Rasool_CV_v3.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-semibold rounded-lg hover:bg-[var(--accent)]/90 transition-all duration-300 btn-primary"
            >
              <Download size={18} />
              Download Full CV
            </a>
          </div>

        </div>
      </section>
    </MainLayout>
  );
}
