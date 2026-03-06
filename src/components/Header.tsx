"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Zap } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Become a Buyer" },
  { href: "/portal", label: "Buyer Login" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white/80 text-xs py-2.5 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Phone size={11} />
              <span className="hidden sm:inline">(123) 456-7890</span>
            </a>
            <a
              href="mailto:sales@ardenora.com"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail size={11} />
              <span className="hidden sm:inline">sales@ardenora.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-gold font-medium">
            <Zap size={11} fill="currentColor" />
            <span>Wholesale Only — Minimum Orders Apply</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-white/95 backdrop-blur-sm"
        } border-b border-border`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold tracking-[0.15em] text-primary">
                ARDENORA
              </span>
              <span className="hidden md:block text-[10px] text-muted tracking-[0.3em] uppercase -mt-0.5">
                Women's Wholesale
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.label === "Become a Buyer" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ml-4 bg-accent text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20 uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ) : link.label === "Buyer Login" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="ml-2 border border-primary/20 text-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted hover:text-primary px-4 py-2 rounded-lg hover:bg-gray-50 transition-all"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-white animate-fade-up">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3.5 text-sm font-medium rounded-lg transition-colors ${
                    link.label === "Become a Buyer"
                      ? "bg-accent text-white text-center mt-2 font-semibold uppercase tracking-wide"
                      : "text-primary hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
