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
    <section className="py-24 px-6 bg-[#111118]">
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
            Achievements
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0F0F8]">
            Numbers That Matter
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 bg-[#1A1A24] border border-[#2A2A38] rounded-xl hover:border-[#00D4FF]/50 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-5xl md:text-6xl font-display font-bold text-[#00D4FF] mb-4"
              >
                {stat.number}
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-[#F0F0F8] mb-2">
                {stat.label}
              </h3>
              <p className="text-[#5A5A72] text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
