"use client";

import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I specialize in Crystal Reports development, SQL Server stored procedures, database optimization, and VB6 application maintenance. I also offer ETL pipeline design, dashboard creation, and ERP report integration.',
  },
  {
    question: 'Are you available for remote work?',
    answer: 'Yes — I work fully remotely and have extensive experience collaborating with clients across different time zones, including Pakistan, UAE, and international clients.',
  },
  {
    question: 'What is your typical turnaround time?',
    answer: 'Most Crystal Reports or stored procedures are delivered within 3–5 business days. Complex enterprise solutions with multiple data sources may take 1–2 weeks. Rush projects with priority processing are available.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes. I offer ongoing maintenance and support packages for long-term projects, including report updates, database optimization, bug fixes, and performance improvements.',
  },
  {
    question: 'Can you work with existing ERP systems?',
    answer: 'Absolutely. I have extensive experience integrating reports and data extraction with various ERP platforms including SAP, Oracle ERP, Microsoft Dynamics, and custom enterprise solutions.',
  },
  {
    question: 'How much does it cost to hire you?',
    answer: 'Rates depend on project complexity and timeline. I offer competitive freelance rates for Crystal Reports, SQL Server, and VB6 work. Contact me with your requirements for a customized quote.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[var(--bg-surface)] border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-[var(--accent)]/50' : 'border-[var(--border)]'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
        aria-expanded={isOpen}
      >
        <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[var(--accent)] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQContent() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <MainLayout>
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block px-4 py-2 sm:px-6 sm:py-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full text-sm text-[var(--accent)] mb-4 sm:mb-6">
              FAQs
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 text-[var(--text-primary)]">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[var(--text-secondary)]">
              Everything you need to know before getting started.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="mt-14 text-center bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-8">
            <h2 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-3">
              Still have questions?
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              Can&apos;t find the answer you&apos;re looking for? Reach out directly.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--accent)] text-[var(--bg-primary)] font-semibold rounded-lg hover:bg-[var(--accent)]/90 transition-all duration-300 btn-primary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
