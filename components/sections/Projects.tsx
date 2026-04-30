"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database } from "lucide-react";

const projects = [
  {
    title: "Enterprise ERP Dashboard",
    description: "Comprehensive dashboard for manufacturing ERP system with real-time inventory tracking, production metrics, and financial reports.",
    tags: ["Crystal Reports", "SQL Server", "VB6", "Enterprise"],
    color: "from-[var(--accent)] to-[var(--accent-secondary)]",
  },
  {
    title: "Sales Analytics Platform",
    description: "Multi-channel sales analytics with regional breakdown, trend analysis, and predictive forecasting for retail clients.",
    tags: ["SQL Server", "Stored Procedures", "Reporting", "Analytics"],
    color: "from-[var(--text-primary)] to-[var(--bg-elevated)]",
  },
  {
    title: "HR Payroll System",
    description: "End-to-end payroll processing system with tax calculations, benefits management, and automated compliance reporting.",
    tags: ["SQL Server", "Crystal Reports", "Data Processing", "Compliance"],
    color: "from-[var(--accent-secondary)] to-[var(--text-secondary)]",
  },
  {
    title: "Inventory Management",
    description: "Real-time inventory tracking with low-stock alerts, supplier integration, and automated reordering systems.",
    tags: ["SQL Server", "Crystal Reports", "Automation", "Real-time"],
    color: "from-[var(--text-secondary)] to-[var(--bg-elevated)]",
  },
];

export default function Projects() {
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
            Projects
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            Featured Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Enterprise solutions built for real business problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--accent)]/50 transition-all duration-300 card-hover"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <Database className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors" />
                </div>

                <p className="text-[var(--text-secondary)] mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full text-xs text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 sm:gap-4">
                  <a
                    href="https://github.com/Reysajju/abbasrasool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--accent)]/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
