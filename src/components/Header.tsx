"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Become a Buyer" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              <Phone size={12} />
              <span className="hidden sm:inline">(123) 456-7890</span>
            </a>
            <a
              href="mailto:sales@ardenora.com"
              className="flex items-center gap-1 hover:text-gold transition-colors"
            >
              <Mail size={12} />
              <span className="hidden sm:inline">sales@ardenora.com</span>
            </a>
          </div>
          <span className="text-gold font-medium">
            Wholesale Only — Minimum Orders Apply
          </span>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
              ARDENORA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-accent ${
                  link.label === "Become a Buyer"
                    ? "bg-accent text-white px-5 py-2.5 rounded hover:bg-accent-hover"
                    : "text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-6 py-3 text-sm font-medium uppercase tracking-wide ${
                    link.label === "Become a Buyer"
                      ? "bg-accent text-white mx-4 mt-2 rounded text-center"
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
