import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
  title: 'FAQs – Abbas Rasool',
  description: 'Frequently asked questions about Abbas Rasool services and expertise.',
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
  return (
    <MainLayout>
      <section className="py-24 px-6 bg-[#0A0A0F] text-[#F0F0F8]">
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
