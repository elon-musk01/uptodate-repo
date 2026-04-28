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
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A24] border border-[#2A2A38] rounded-full text-sm">
                <span className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse" />
                Available for freelance projects
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block text-[#F0F0F8]">Hi, I'm</span>
              <span className="block text-[#00D4FF] mt-2">Abbas Rasool</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#9090A8] leading-relaxed"
            >
              Senior SQL & Crystal Reports Specialist
              <br />
              <span className="text-[#5A5A72]">Transitioning to Modern Web Development</span>
            </motion.p>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-3 gap-4"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#111118] border border-[#2A2A38] rounded-xl hover:border-[#00D4FF]/50 transition-colors duration-300"
                >
                  <skill.icon className="w-6 h-6 text-[#00D4FF] mb-2" />
                  <p className="text-sm font-medium text-[#F0F0F8]">{skill.label}</p>
                  <p className="text-xs text-[#5A5A72]">{skill.level}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/hire"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4FF] text-[#0A0A0F] font-semibold rounded-lg hover:bg-[#00D4FF]/90 transition-all duration-200"
              >
                <span>Hire Me</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A24] text-[#F0F0F8] font-semibold rounded-lg border border-[#2A2A38] hover:border-[#00D4FF]/50 transition-all duration-200"
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
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1A1A24] border border-[#2A2A38] rounded-lg text-[#9090A8] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all duration-200"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1A1A24] border border-[#2A2A38] rounded-lg text-[#9090A8] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all duration-200"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="mailto:abbasrasool04@gmail.com"
                className="p-3 bg-[#1A1A24] border border-[#2A2A38] rounded-lg text-[#9090A8] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:pl-8"
          >
            <div className="bg-[#111118] border border-[#2A2A38] rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A24] border-b border-[#2A2A38]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-4 text-xs text-[#5A5A72]">terminal.sql</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-[#00D4FF]">
                  <span className="text-[#5A5A72]">SELECT</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#9090A8]">developer_name</span>
                </div>
                <div className="text-[#00D4FF]">
                  <span className="text-[#5A5A72]">FROM</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#9090A8]">talent_pool</span>
                </div>
                <div className="text-[#00D4FF]">
                  <span className="text-[#5A5A72]">WHERE</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#9090A8]">specialization</span>
                  <span className="text-[#5A5A72]"> =</span>
                  <span className="text-[#9090A8]">'Crystal Reports & SQL Server'</span>
                </div>
                <div className="text-[#00D4FF]">
                  <span className="text-[#5A5A72]">AND</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#9090A8]">available</span>
                  <span className="text-[#5A5A72]"> =</span>
                  <span className="text-[#28C840]">TRUE</span>
                </div>
                <div className="text-[#00D4FF]">
                  <span className="text-[#5A5A72]">RETURN</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#00D4FF]">'Abbas Rasool'</span>
                </div>

                {/* Cursor */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-[#9090A8]">$</span>
                  <span className="w-2 h-4 bg-[#00D4FF] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-4 -right-4 px-4 py-2 bg-[#1A1A24] border border-[#00D4FF] rounded-lg"
            >
              <p className="text-xs text-[#00D4FF] font-medium">2+ Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
