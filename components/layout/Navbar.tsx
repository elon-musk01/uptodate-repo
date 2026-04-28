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
          ? "bg-[#111118]/80 backdrop-blur-xl border-b border-[#2A2A38]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-bold text-[#00D4FF]">
            AR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/hire"
              className="px-5 py-2.5 bg-[#00D4FF] text-[#0A0A0F] font-medium rounded-lg hover:bg-[#00D4FF]/90 transition-all duration-200 text-sm"
            >
              Hire Me →
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#F0F0F8]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[#2A2A38]">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-[#2A2A38]">
                <a
                  href="/hire"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-5 py-2.5 bg-[#00D4FF] text-[#0A0A0F] font-medium rounded-lg hover:bg-[#00D4FF]/90 transition-all duration-200 text-sm text-center"
                >
                  Hire Me →
                </a>
                <div className="flex gap-4 justify-center">
                  <a
                    href="mailto:abbasrasool04@gmail.com"
                    className="text-[#9090A8] hover:text-[#00D4FF] transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://github.com/elon-musk01/uptodate-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9090A8] hover:text-[#00D4FF] transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/abbas-rasool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9090A8] hover:text-[#00D4FF] transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
