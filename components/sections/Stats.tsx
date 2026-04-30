"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "2+",
    label: "Years Experience",
    description: "Building data-driven solutions since 2022",
  },
  {
    number: "50+",
    label: "Projects Completed",
    description: "Enterprise reports, dashboards & systems",
  },
  {
    number: "30+",
    label: "Happy Clients",
    description: "Businesses across Pakistan & UAE",
  },
  {
    number: "100%",
    label: "Client Satisfaction",
    description: "On-time delivery & quality work",
  },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-surface)]">
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
            Achievements
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            Numbers That Matter
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 sm:p-8 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/50 transition-all duration-300 card-hover"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--accent)] mb-3 sm:mb-4"
              >
                {stat.number}
              </motion.div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2">
                {stat.label}
              </h3>
              <p className="text-[var(--text-tertiary)] text-xs sm:text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
