import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">
              ARDENORA
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted wholesale apparel partner. We supply off-price
              retailers with premium inventory at unbeatable margins.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-wide text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/inventory"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  View Inventory
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Become a Buyer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-wide text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={14} className="text-gold" />
                <a href="tel:+1234567890" className="hover:text-white">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={14} className="text-gold" />
                <a href="mailto:sales@ardenora.com" className="hover:text-white">
                  sales@ardenora.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin size={14} className="text-gold mt-0.5" />
                <span>New Jersey, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Ardenora. All rights reserved. |
          Wholesale Only
        </div>
      </div>
    </footer>
  );
}
