"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

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
      <section className="bg-primary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Become a Buyer
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Fill out the form below and our sales team will reach out within 24
            hours with pricing and available inventory.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-accent mt-1" />
                <div>
                  <div className="font-medium text-sm text-primary">Phone</div>
                  <a
                    href="tel:+1234567890"
                    className="text-sm text-muted hover:text-accent"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-accent mt-1" />
                <div>
                  <div className="font-medium text-sm text-primary">Email</div>
                  <a
                    href="mailto:sales@ardenora.com"
                    className="text-sm text-muted hover:text-accent"
                  >
                    sales@ardenora.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1" />
                <div>
                  <div className="font-medium text-sm text-primary">
                    Location
                  </div>
                  <span className="text-sm text-muted">New Jersey, USA</span>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-primary rounded-lg">
              <h3 className="text-gold font-semibold text-sm mb-3">
                Why Apply?
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>- Access to exclusive wholesale pricing</li>
                <li>- Priority on new inventory drops</li>
                <li>- Dedicated account representative</li>
                <li>- Flexible payment terms for qualified buyers</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-lg p-12 text-center border border-border">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">
                  Application Received!
                </h3>
                <p className="text-muted">
                  Our sales team will contact you within 24 hours. Check your
                  email for a confirmation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-8 border border-border shadow-sm"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      className="w-full px-4 py-2.5 border border-border rounded text-sm focus:outline-none focus:border-accent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Company Name *
                    </label>
                    <input
                      name="company"
                      required
                      type="text"
                      className="w-full px-4 py-2.5 border border-border rounded text-sm focus:outline-none focus:border-accent"
                      placeholder="Your Retail Store"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Email *
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      className="w-full px-4 py-2.5 border border-border rounded text-sm focus:outline-none focus:border-accent"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-2.5 border border-border rounded text-sm focus:outline-none focus:border-accent"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      required
                      className="w-full px-4 py-2.5 border border-border rounded text-sm focus:outline-none focus:border-accent bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="off-price-chain">Off-Price Chain</option>
                      <option value="discount-retailer">
                        Discount Retailer
                      </option>
                      <option value="online-reseller">Online Reseller</option>
                      <option value="independent-store">
                        Independent Store
                      </option>
                      <option value="liquidator">Liquidator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-1.5">
                      Monthly Volume
                    </label>
                    <select
                      name="volume"
                      className="w-full px-4 py-2.5 border border-border rounded text-sm focus:outline-none focus:border-accent bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="under-1000">Under 1,000 units</option>
                      <option value="1000-5000">1,000 - 5,000 units</option>
                      <option value="5000-20000">5,000 - 20,000 units</option>
                      <option value="20000+">20,000+ units</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-primary mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2.5 border border-border rounded text-sm focus:outline-none focus:border-accent resize-none"
                    placeholder="Tell us about your business and what categories you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full sm:w-auto bg-accent text-white font-semibold px-8 py-3 rounded hover:bg-accent-hover transition-colors text-sm uppercase tracking-wide flex items-center justify-center gap-2 disabled:opacity-50"
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
