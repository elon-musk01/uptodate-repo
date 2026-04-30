"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Cpu, Code2, Layers, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Database & SQL",
    icon: Database,
    barColor: "bg-[var(--accent)]",
    skills: [
      { name: "SQL Server", level: 90 },
      { name: "T-SQL", level: 85 },
      { name: "Stored Procedures", level: 88 },
      { name: "Views & Functions", level: 85 },
      { name: "Query Optimization", level: 80 },
      { name: "Database Design", level: 82 },
    ],
  },
  {
    title: "Reporting Tools",
    icon: Terminal,
    barColor: "bg-[var(--accent-secondary)]",
    skills: [
      { name: "Crystal Reports", level: 95 },
      { name: "Report Design", level: 90 },
      { name: "Parameterized Reports", level: 88 },
      { name: "Subreports", level: 85 },
      { name: "Charting & Graphs", level: 88 },
      { name: "Data Extraction", level: 90 },
    ],
  },
  {
    title: "Programming",
    icon: Code2,
    barColor: "bg-[var(--text-primary)]",
    skills: [
      { name: "VB6", level: 75 },
      { name: "VB.NET", level: 70 },
      { name: "SQL", level: 90 },
      { name: "Python (Learning)", level: 50 },
      { name: "JavaScript (Learning)", level: 45 },
      { name: "React (Learning)", level: 40 },
    ],
  },
  {
    title: "Tools & Concepts",
    icon: Layers,
    barColor: "bg-[var(--text-secondary)]",
    skills: [
      { name: "Git", level: 70 },
      { name: "Version Control", level: 70 },
      { name: "ER Diagrams", level: 80 },
      { name: "Data Modeling", level: 82 },
      { name: "API Integration", level: 75 },
      { name: "Web Services", level: 70 },
    ],
  },
];

export default function Skills() {
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
            Skills
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            Technical Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Years of hands-on experience building data-driven solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl p-5 sm:p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-[var(--accent)]" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--text-primary)]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[var(--text-secondary)]">{skill.name}</span>
                      <span className="text-sm text-[var(--accent)] font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: index * 0.1 + skillIndex * 0.05 }}
                        className={`h-full ${category.barColor} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
