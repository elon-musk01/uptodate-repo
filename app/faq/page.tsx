import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'FAQs – Abbas Rasool | Frequently Asked Questions',
  description: 'Frequently asked questions about Abbas Rasool services, expertise, availability, and project turnaround times for Crystal Reports and SQL Server development.',
  keywords: ['FAQ', 'Crystal Reports FAQ', 'SQL Server FAQ', 'hire questions', 'project turnaround time'],
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

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I specialize in Crystal Reports development, SQL Server stored procedures, database optimization, and VB6 application maintenance.',
  },
  {
    question: 'Are you available for remote work?',
    answer: 'Yes, I work remotely and have experience collaborating with clients across different time zones.',
  },
  {
    question: 'What is your typical turnaround time?',
    answer: 'Depending on the complexity, most reports or stored procedures are delivered within 3-5 business days.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, I offer ongoing maintenance and support packages for long-term projects.',
  },
  {
    question: 'Can you work with existing ERP systems?',
    answer: 'Absolutely. I have extensive experience integrating reports and data extraction with various ERP platforms.',
  },
];

export default function FAQPage() {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I specialize in Crystal Reports development, SQL Server stored procedures, database optimization, and VB6 application maintenance.',
    },
    {
      question: 'Are you available for remote work?',
      answer: 'Yes, I work remotely and have experience collaborating with clients across different time zones.',
    },
    {
      question: 'What is your typical turnaround time?',
      answer: 'Depending on the complexity, most reports or stored procedures are delivered within 3-5 business days.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, I offer ongoing maintenance and support packages for long-term projects.',
    },
    {
      question: 'Can you work with existing ERP systems?',
      answer: 'Absolutely. I have extensive experience integrating reports and data extraction with various ERP platforms.',
    },
  ];

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
      <section className="py-24 px-6 bg-[#0A0A0F] text-[#F0F0F8]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-[#00D4FF]">
            Frequently Asked Questions
          </h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#111118] border border-[#2A2A38] rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-[#F0F0F8]">
                  {faq.question}
                </h3>
                <p className="text-[#9090A8] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
