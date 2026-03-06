"use client";

import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  Shield,
  Zap,
} from "lucide-react";

const perks = [
  { icon: Zap, text: "Access exclusive wholesale pricing" },
  { icon: Clock, text: "Priority on weekly inventory drops" },
  { icon: Shield, text: "Dedicated account representative" },
  { icon: CheckCircle, text: "Flexible payment terms" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          businessType: data.get("businessType"),
          volume: data.get("volume"),
          message: data.get("message"),
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Header */}
      <section className="relative hero-gradient py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
            Get Started
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-5 font-[var(--font-display)]">
            Become a Buyer
          </h1>
          <p className="text-gray-300/90 max-w-xl mx-auto text-lg">
            Fill out the form below and our sales team will reach out within 24
            hours with pricing and available inventory.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 bg-gray-50/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 md:gap-14">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-primary mb-6">
                Get in Touch
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "(123) 456-7890",
                    href: "tel:+1234567890",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "sales@ardenora.com",
                    href: "mailto:sales@ardenora.com",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "New Jersey, USA",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/8 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-xs text-muted uppercase tracking-wider mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-primary hover:text-accent transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-primary font-medium">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-7">
              <h3 className="text-gold font-bold text-sm mb-5 uppercase tracking-wider">
                Buyer Benefits
              </h3>
              <ul className="space-y-4">
                {perks.map((perk) => (
                  <li key={perk.text} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center">
                      <perk.icon size={13} className="text-gold" />
                    </div>
                    <span className="text-sm text-gray-300">{perk.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 md:p-16 text-center border border-border shadow-sm">
                <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-emerald" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 font-[var(--font-display)]">
                  Application Received!
                </h3>
                <p className="text-muted max-w-md mx-auto">
                  Our sales team will contact you within 24 hours with available
                  inventory and pricing. Check your email for a confirmation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 md:p-10 border border-border shadow-sm"
              >
                <h3 className="font-bold text-primary text-lg mb-1">
                  Buyer Application
                </h3>
                <p className="text-sm text-muted mb-8">
                  All fields marked * are required
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Full Name", type: "text", required: true, placeholder: "John Smith" },
                    { name: "company", label: "Company Name", type: "text", required: true, placeholder: "Your Retail Store" },
                    { name: "email", label: "Email", type: "email", required: true, placeholder: "john@company.com" },
                    { name: "phone", label: "Phone", type: "tel", required: false, placeholder: "(555) 000-0000" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                        {field.label} {field.required && <span className="text-accent">*</span>}
                      </label>
                      <input
                        name={field.name}
                        required={field.required}
                        type={field.type}
                        className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-accent bg-gray-50 focus:bg-white transition-colors"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                      Business Type <span className="text-accent">*</span>
                    </label>
                    <select
                      name="businessType"
                      required
                      className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-accent bg-gray-50 focus:bg-white transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="off-price-chain">Off-Price Chain</option>
                      <option value="discount-retailer">Discount Retailer</option>
                      <option value="online-reseller">Online Reseller</option>
                      <option value="independent-store">Independent Store</option>
                      <option value="liquidator">Liquidator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                      Monthly Volume
                    </label>
                    <select
                      name="volume"
                      className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-accent bg-gray-50 focus:bg-white transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="under-1000">Under 1,000 units</option>
                      <option value="1000-5000">1,000 - 5,000 units</option>
                      <option value="5000-20000">5,000 - 20,000 units</option>
                      <option value="20000+">20,000+ units</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-accent bg-gray-50 focus:bg-white transition-colors resize-none"
                    placeholder="Tell us about your business and what categories you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 w-full bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-hover transition-all text-sm uppercase tracking-wide flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
                >
                  <Send size={16} />
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
