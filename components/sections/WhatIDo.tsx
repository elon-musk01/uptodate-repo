"use client";

import { motion } from "framer-motion";
import { Database, Layout, Zap, BarChart3, Shield, Globe } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Crystal Reports Development",
    description: "Building enterprise-grade reports, dashboards, and data visualization tools that transform raw data into actionable insights.",
    color: "text-[#00D4FF]",
    bgColor: "bg-[#00D4FF]/10",
  },
  {
    icon: Layout,
    title: "SQL Server Expertise",
    description: "Creating complex stored procedures, views, and database optimizations for high-performance data operations.",
    color: "text-[#7B61FF]",
    bgColor: "bg-[#7B61FF]/10",
  },
  {
    icon: Zap,
    title: "VB6 Development",
    description: "Maintaining and enhancing legacy VB6 applications with modern best practices and performance improvements.",
    color: "text-[#FF6B6B]",
    bgColor: "bg-[#FF6B6B]/10",
  },
  {
    icon: BarChart3,
    title: "Dashboard Design",
    description: "Designing intuitive, data-rich dashboards that make complex data easy to understand and act upon.",
    color: "text-[#4ECDC4]",
    bgColor: "bg-[#4ECDC4]/10",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Implementing robust data security measures including encryption, access controls, and audit trails.",
    color: "text-[#FFD93D]",
    bgColor: "bg-[#FFD93D]/10",
  },
  {
    icon: Globe,
    title: "ERP Integration",
    description: "Seamlessly integrating reports and data with ERP systems to streamline business operations.",
    color: "text-[#FF6B9D]",
    bgColor: "bg-[#FF6B9D]/10",
  },
];

export default function WhatIDo() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#1A1A24] border border-[#2A2A38] rounded-full text-sm text-[#00D4FF] mb-4">
            What I Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0F0F8]">
            Services I Offer
          </h2>
          <p className="mt-4 text-lg text-[#9090A8] max-w-2xl mx-auto">
            Specialized expertise in building data-driven solutions that help businesses make better decisions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 bg-[#111118] border border-[#2A2A38] rounded-xl hover:border-[#00D4FF]/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-[#F0F0F8] mb-3">
                {service.title}
              </h3>
              <p className="text-[#9090A8] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
