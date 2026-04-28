"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Send, ExternalLink, Mail } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/hire", label: "Hire Me" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl md:text-3xl font-bold text-[#00D4FF] animate-fade-in"
          >
            AR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#9090A8] hover:text-[#00D4FF] transition-all duration-300 text-sm font-medium relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D4FF] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/hire"
              className="btn-primary px-6 py-2.5 text-[#0A0A0F] font-medium rounded-lg text-sm"
            >
              Hire Me →
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#1A1A24] border border-[#2A2A38] hover:border-[#00D4FF] transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="py-4 border-t border-[#2A2A38] backdrop-blur-sm bg-[#111118]/95">
              <div className="flex flex-col gap-3">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#9090A8] hover:text-[#00D4FF] transition-all duration-300 text-sm font-medium py-3 px-4 rounded-lg hover:bg-[#1A1A24] active:scale-95"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-[#2A2A38]">
                  <a
                    href="/hire"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary px-5 py-3 text-[#0A0A0F] font-medium rounded-lg text-sm text-center active:scale-95"
                  >
                    Hire Me →
                  </a>
                  <div className="flex gap-4 justify-center pt-2">
                    <a
                      href="mailto:abbasrasool04@gmail.com"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-3 bg-[#1A1A24] border border-[#2A2A38] rounded-lg text-[#9090A8] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all duration-300 active:scale-95"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                    <a
                      href="https://github.com/elon-musk01/uptodate-repo"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-3 bg-[#1A1A24] border border-[#2A2A38] rounded-lg text-[#9090A8] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all duration-300 active:scale-95"
                      aria-label="GitHub"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/in/abbas-rasool"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-3 bg-[#1A1A24] border border-[#2A2A38] rounded-lg text-[#9090A8] hover:text-[#00D4FF] hover:border-[#00D4FF] transition-all duration-300 active:scale-95"
                      aria-label="LinkedIn"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
