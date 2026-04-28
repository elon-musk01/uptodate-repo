"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database } from "lucide-react";

const projects = [
  {
    title: "Enterprise ERP Dashboard",
    description: "Comprehensive dashboard for manufacturing ERP system with real-time inventory tracking, production metrics, and financial reports.",
    tags: ["Crystal Reports", "SQL Server", "VB6", "Enterprise"],
    color: "from-[#00D4FF] to-[#7B61FF]",
  },
  {
    title: "Sales Analytics Platform",
    description: "Multi-channel sales analytics with regional breakdown, trend analysis, and predictive forecasting for retail clients.",
    tags: ["SQL Server", "Stored Procedures", "Reporting", "Analytics"],
    color: "from-[#4ECDC4] to-[#00D4FF]",
  },
  {
    title: "HR Payroll System",
    description: "End-to-end payroll processing system with tax calculations, benefits management, and automated compliance reporting.",
    tags: ["SQL Server", "Crystal Reports", "Data Processing", "Compliance"],
    color: "from-[#FF6B6B] to-[#FFD93D]",
  },
  {
    title: "Inventory Management",
    description: "Real-time inventory tracking with low-stock alerts, supplier integration, and automated reordering systems.",
    tags: ["SQL Server", "Crystal Reports", "Automation", "Real-time"],
    color: "from-[#7B61FF] to-[#FF6B9D]",
  },
];

export default function Projects() {
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
            Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0F0F8]">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-[#9090A8] max-w-2xl mx-auto">
            Enterprise solutions built for real business problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-[#111118] border border-[#2A2A38] rounded-xl overflow-hidden hover:border-[#00D4FF]/50 transition-all duration-300"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl font-semibold text-[#F0F0F8] group-hover:text-[#00D4FF] transition-colors">
                    {project.title}
                  </h3>
                  <Database className="w-8 h-8 text-[#5A5A72] group-hover:text-[#00D4FF] transition-colors" />
                </div>

                <p className="text-[#9090A8] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#1A1A24] border border-[#2A2A38] rounded-full text-xs text-[#9090A8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Project</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-[#9090A8] hover:text-[#00D4FF] transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Code</span>
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
