"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Code, ArrowRight, Send, ExternalLink, Mail } from "lucide-react";

export default function Hero() {
  const skills = [
    { icon: Terminal, label: "SQL Server", level: "Advanced" },
    { icon: Database, label: "Crystal Reports", level: "Expert" },
    { icon: Code, label: "VB6", level: "Intermediate" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-2.5 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full text-sm sm:text-base animate-fade-in">
                <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                Available for freelance Crystal Reports & SQL Server projects
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[var(--text-primary)]"
            >
              <span className="block">Hi, I'm</span>
              <span className="block gradient-text mt-2">Abbas Rasool</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl text-[var(--text-secondary)] leading-relaxed"
            >
              Crystal Reports Developer & SQL Server Specialist - 2+ Years Experience
              <br />
              <span className="text-[var(--text-tertiary)]">Enterprise Reporting & Legacy Development Expert in Karachi, Pakistan</span>
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/50 transition-all duration-300 card-hover flex items-center sm:block"
                >
                  <skill.icon className="w-6 h-6 text-[var(--accent)] mr-4 sm:mr-0 sm:mb-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">{skill.label}</p>
                    <p className="text-xs text-[var(--text-tertiary)]">{skill.level}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4"
            >
              <a
                href="/hire"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-semibold rounded-lg hover:bg-[var(--accent)]/90 transition-all duration-300 btn-primary flex-1"
              >
                <span>Hire Me</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--bg-elevated)] text-[var(--text-primary)] font-semibold rounded-lg border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 card-hover flex-1"
              >
                <Mail size={18} />
                <span>Get in Touch</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-3 sm:gap-4 pt-4"
            >
              <a
                href="https://github.com/Reysajju/abbasrasool"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 card-hover"
                aria-label="GitHub"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="https://linkedin.com/in/abbas-rasool"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 card-hover"
                aria-label="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="mailto:abbasrasool04@gmail.com"
                className="p-3 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 card-hover"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Premium Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:pl-8 relative hidden md:block"
          >
            <div className="bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-2xl glass">
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-[var(--bg-elevated)] border border-[var(--accent)]/30 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                    <span className="font-display text-2xl font-bold text-[var(--accent)]">AR</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">Abbas Rasool</h3>
                    <p className="text-[var(--text-secondary)]">Enterprise Database Consultant</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] border-l-2 border-l-[var(--accent)]">
                    <p className="text-sm text-[var(--text-secondary)] mb-1">Current Focus</p>
                    <p className="text-[var(--text-primary)] font-medium">Enterprise Reporting & Legacy System Modernization</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] border-l-2 border-l-[var(--accent-secondary)]">
                    <p className="text-sm text-[var(--text-secondary)] mb-1">Key Value</p>
                    <p className="text-[var(--text-primary)] font-medium">Transforming complex ERP data into actionable business intelligence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -right-4 px-4 py-2 bg-[var(--bg-elevated)] border border-[var(--accent)] rounded-lg animate-fade-in"
            >
              <p className="text-xs text-[var(--accent)] font-medium">2+ Years Experience in Crystal Reports & SQL Server</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
