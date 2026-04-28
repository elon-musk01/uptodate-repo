import Link from "next/link";
import { Send, ExternalLink, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A38] bg-[#111118]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-bold text-[#00D4FF]"
            >
              AR
            </Link>
            <p className="mt-3 text-[#9090A8] text-sm leading-relaxed">
              Senior SQL & Crystal Reports Specialist — Transitioning to Modern Web
            </p>
            <p className="mt-2 text-[#5A5A72] text-xs">
              📍 Karachi, Pakistan · Open to Remote · Responds within 24hrs
            </p>
          </div>

          {/* Center Column - Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-[#F0F0F8] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200 text-sm"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/hire"
                  className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200 text-sm"
                >
                  Hire Me
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200 text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/hire"
                  className="text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors duration-200 text-sm"
                >
                  Download Full CV (PDF)
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-[#F0F0F8] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-[#00D4FF] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:abbasrasool04@gmail.com"
                  className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200 text-sm"
                >
                  abbasrasool04@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-[#00D4FF] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:abbas@abbasrasool.com"
                  className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200 text-sm"
                >
                  abbas@abbasrasool.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-[#00D4FF] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+923203087202"
                  className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200 text-sm"
                >
                  +92 320 308 7202
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#00D4FF] mt-0.5 flex-shrink-0" />
                <span className="text-[#9090A8] text-sm">
                  N. Nazimabad Block L, Karachi, Pakistan
                </span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="mailto:abbasrasool04@gmail.com"
                className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200"
                aria-label="Email"
              >
                <Send size={20} />
              </a>
              <a
                href="https://github.com/elon-musk01/uptodate-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200"
                aria-label="GitHub"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="https://linkedin.com/in/abbas-rasool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9090A8] hover:text-[#00D4FF] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#2A2A38]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#5A5A72] text-xs">
              © {new Date().getFullYear()} Abbas Rasool. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/sitemap.xml"
                className="text-[#5A5A72] hover:text-[#00D4FF] transition-colors duration-200 text-xs"
              >
                sitemap.xml
              </Link>
              <span className="text-[#2A2A38]">|</span>
              <p className="text-[#5A5A72] text-xs">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
