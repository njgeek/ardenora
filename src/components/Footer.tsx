import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-gold font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold tracking-[0.15em]">
                ARDENORA
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Wholesale women&apos;s apparel — young contemporary, juniors &amp;
              missy. We supply off-price retailers with premium women&apos;s
              inventory at margins that grow your business.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse-dot" />
              <span className="text-xs text-emerald font-medium">
                Now accepting new buyers
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-[0.15em] text-xs mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/inventory", label: "View Inventory" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Become a Buyer" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-[0.15em] text-xs mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <Phone size={14} className="text-gold" />
                </div>
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <Mail size={14} className="text-gold" />
                </div>
                <a href="mailto:sales@ardenora.com" className="hover:text-white transition-colors">
                  sales@ardenora.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
                  <MapPin size={14} className="text-gold" />
                </div>
                <span>New Jersey, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <span>
            &copy; {new Date().getFullYear()} Ardenora. All rights reserved.
          </span>
          <span className="text-gold/60">Wholesale Only — Minimum Orders Apply</span>
        </div>
      </div>
    </footer>
  );
}
