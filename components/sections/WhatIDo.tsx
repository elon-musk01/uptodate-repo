"use client";

import { motion } from "framer-motion";
import { Database, Layout, Zap, BarChart3, Shield, Globe } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Crystal Reports Development",
    description: "Building enterprise-grade reports, dashboards, and data visualization tools that transform raw data into actionable insights.",
    color: "text-[var(--accent)]",
    bgColor: "bg-[var(--accent)]/10",
  },
  {
    icon: Layout,
    title: "SQL Server Expertise",
    description: "Creating complex stored procedures, views, and database optimizations for high-performance data operations.",
    color: "text-[var(--accent-secondary)]",
    bgColor: "bg-[var(--accent-secondary)]/10",
  },
  {
    icon: Zap,
    title: "VB6 Development",
    description: "Maintaining and enhancing legacy VB6 applications with modern best practices and performance improvements.",
    color: "text-[var(--text-primary)]",
    bgColor: "bg-[var(--bg-elevated)]",
  },
  {
    icon: BarChart3,
    title: "Dashboard Design",
    description: "Designing intuitive, data-rich dashboards that make complex data easy to understand and act upon.",
    color: "text-[var(--accent)]",
    bgColor: "bg-[var(--accent)]/10",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Implementing robust data security measures including encryption, access controls, and audit trails.",
    color: "text-[var(--accent-secondary)]",
    bgColor: "bg-[var(--accent-secondary)]/10",
  },
  {
    icon: Globe,
    title: "ERP Integration",
    description: "Seamlessly integrating reports and data with ERP systems to streamline business operations.",
    color: "text-[var(--text-secondary)]",
    bgColor: "bg-[var(--bg-elevated)]",
  },
];

export default function WhatIDo() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 sm:px-6 sm:py-2.5 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full text-sm sm:text-base text-[var(--accent)] mb-4 animate-fade-in">
            What I Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            Services I Offer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Specialized expertise in building data-driven solutions that help businesses make better decisions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-6 sm:p-8 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/50 transition-all duration-300 card-hover"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.color}`} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-3">
                {service.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
