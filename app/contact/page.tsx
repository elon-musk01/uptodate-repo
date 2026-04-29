"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import '@/app/contact/globals.css';
import MainLayout from '@/components/layout/MainLayout';

export const metadata = {
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <section className="py-24 px-6 bg-[#0A0A0F] text-[#F0F0F8]">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-center text-[#00D4FF]">
            Contact Me
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-center max-w-2xl mx-auto">
            Feel free to reach out for project discussions, collaborations, or any questions. I'll get back to you within 24 hours.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-[#111118] border border-[#2A2A38] rounded-xl p-8">
              <h2 className="font-display text-2xl font-semibold mb-6 text-[#F0F0F8]">
                Send a Message
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400"
                >
                  <CheckCircle size={20} />
                  <span className="font-medium">Message sent successfully!</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400"
                >
                  <AlertCircle size={20} />
                  <span className="font-medium">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#F0F0F8] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#0A0A0F] border ${errors.name ? 'border-red-500' : 'border-[#2A2A38]'} rounded-lg text-[#F0F0F8] transition`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#F0F0F8] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#0A0A0F] border ${errors.email ? 'border-red-500' : 'border-[#2A2A38]'} rounded-lg text-[#F0F0F8] transition`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#F0F0F8] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#0A0A0F] border ${errors.subject ? 'border-red-500' : 'border-[#2A2A38]'} rounded-lg text-[#F0F0F8] transition`}
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#F0F0F8] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-[#0A0A0F] border ${errors.message ? 'border-red-500' : 'border-[#2A2A38]'} rounded-lg text-[#F0F0F8] transition resize-none`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00D4FF] text-[#0A0A0F] font-semibold rounded-lg hover:bg-[#00D4FF]/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-4 focus-visible:ring-[#00D4FF]/30"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-[#111118] border border-[#2A2A38] rounded-xl p-8">
                <h2 className="font-display text-2xl font-semibold mb-6 text-[#F0F0F8]">
                  Direct Contact
                </h2>
                <ul className="space-y-6">
                  <li>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center">
                        <Send size={20} className="text-[#00D4FF]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#5A5A72] mb-1">Email</p>
                        <a
                          href="mailto:abbasrasool04@gmail.com"
                          className="text-[#F0F0F8] hover:text-[#00D4FF] transition"
                        >
                          abbasrasool04@gmail.com
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center">
                        <Send size={20} className="text-[#00D4FF]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#5A5A72] mb-1">Phone</p>
                        <a
                          href="tel:+923203087202"
                          className="text-[#F0F0F8] hover:text-[#00D4FF] transition"
                        >
                          +92 320 308 7202
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center">
                        <Send size={20} className="text-[#00D4FF]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#5A5A72] mb-1">Location</p>
                        <p className="text-[#F0F0F8]">
                          N. Nazimabad Block L, Karachi, Pakistan
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[#111118] border border-[#2A2A38] rounded-xl p-8">
                <h2 className="font-display text-2xl font-semibold mb-6 text-[#F0F0F8]">
                  Social Links
                </h2>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#7B61FF]/10 rounded-lg flex items-center justify-center">
                        <Send size={20} className="text-[#7B61FF]" />
                      </div>
                      <a
                        href="https://github.com/elon-musk01/uptodate-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F0F0F8] hover:text-[#7B61FF] transition"
                      >
                        github.com/elon-musk01
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#00D4FF]/10 rounded-lg flex items-center justify-center">
                        <Send size={20} className="text-[#00D4FF]" />
                      </div>
                      <a
                        href="https://linkedin.com/in/abbas-rasool"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F0F0F8] hover:text-[#00D4FF] transition"
                      >
                        linkedin.com/in/abbas-rasool
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
