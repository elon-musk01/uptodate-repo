"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 lg:p-12 text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-6 sm:mb-8 max-w-2xl mx-auto">
            I'm available for freelance Crystal Reports and SQL Server projects. Let's discuss how I can help transform your data into actionable insights.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 justify-center mb-10 sm:mb-12">
            <a
              href="/hire"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-semibold rounded-lg hover:bg-[var(--accent)]/90 transition-all duration-300 btn-primary flex-1"
            >
              <span>View My Services</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--bg-elevated)] text-[var(--text-primary)] font-semibold rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 card-hover flex-1"
            >
              <Mail size={18} />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[var(--border)]">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Mail className="w-5 h-5 text-[var(--accent)]" />
              <div className="text-left">
                <p className="text-xs text-[var(--text-tertiary)]">Email</p>
                <p className="text-sm text-[var(--text-secondary)]">abbasrasool04@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Phone className="w-5 h-5 text-[var(--accent)]" />
              <div className="text-left">
                <p className="text-xs text-[var(--text-tertiary)]">Phone</p>
                <p className="text-sm text-[var(--text-secondary)]">+92 320 308 7202</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <MapPin className="w-5 h-5 text-[var(--accent)]" />
              <div className="text-left">
                <p className="text-xs text-[var(--text-tertiary)]">Location</p>
                <p className="text-sm text-[var(--text-secondary)]">Karachi, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <Clock className="w-5 h-5 text-[var(--accent)]" />
              <div className="text-left">
                <p className="text-xs text-[var(--text-tertiary)]">Response Time</p>
                <p className="text-sm text-[var(--text-secondary)]">Within 24 hours</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
