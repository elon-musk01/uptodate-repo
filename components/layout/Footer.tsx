import Link from "next/link";
import { Send, ExternalLink, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column */}
          <div>
            <Link
              href="/"
              className="font-display text-2xl sm:text-3xl font-bold text-[var(--accent)] animate-fade-in"
            >
              AR
            </Link>
            <p className="mt-3 text-[var(--text-secondary)] text-sm leading-relaxed">
              Senior SQL & Crystal Reports Specialist — Transitioning to Modern Web
            </p>
            <p className="mt-2 text-[var(--text-tertiary)] text-xs">
              📍 Karachi, Pakistan · Open to Remote · Responds within 24hrs
            </p>
          </div>

          {/* Center Column - Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold text-[var(--text-primary)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-[var(--bg-elevated)]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-[var(--bg-elevated)]"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/hire"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-[var(--bg-elevated)]"
                >
                  Hire Me
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-[var(--bg-elevated)]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-[var(--bg-elevated)]"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <a
                  href="/Abbas_Rasool_CV_v3.pdf"
                  download
                  className="btn-primary px-3 py-2 text-[var(--bg-primary)] font-medium rounded-lg text-sm inline-block"
                >
                  Download Full CV (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold text-[var(--text-primary)] mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:abbasrasool04@gmail.com"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300 text-sm py-1 px-2 rounded-lg hover:bg-[var(--bg-elevated)]"
                >
                  abbasrasool04@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+923203087202"
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-all duration-300 text-sm py-1 px-2 rounded-lg hover:bg-[var(--bg-elevated)]"
                >
                  +92 320 308 7202
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-sm">
                  N. Nazimabad Block L, Karachi, Pakistan
                </span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="mailto:abbasrasool04@gmail.com"
                className="p-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
                aria-label="Email"
              >
                <Send size={20} />
              </a>
              <a
                href="https://github.com/elon-musk01/uptodate-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
                aria-label="GitHub"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="https://linkedin.com/in/abbas-rasool"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-[var(--border)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[var(--text-tertiary)] text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Abbas Rasool. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/sitemap.xml"
                className="text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-all duration-300 text-xs py-1 px-2 rounded-lg hover:bg-[var(--bg-elevated)]"
              >
                sitemap.xml
              </Link>
              <span className="text-[var(--border)]">|</span>
              <p className="text-[var(--text-tertiary)] text-xs text-center sm:text-left">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
