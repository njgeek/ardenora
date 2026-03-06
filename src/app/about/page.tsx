import { CTABanner } from "@/components/CTABanner";
import { Stats } from "@/components/Stats";
import { CheckCircle, Target, Handshake, BarChart3, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ardenora | Wholesale Women's Apparel — Juniors & Missy",
  description:
    "Learn about Ardenora — a wholesale women's apparel supplier specializing in juniors and missy for off-price retailers.",
};

const values = [
  "Transparent pricing with no hidden fees",
  "First-quality and inspected merchandise only",
  "Flexible minimum orders for growing retailers",
  "Nationwide shipping with tracking on every order",
  "Dedicated account managers for every buyer",
  "Weekly fresh juniors & missy inventory drops",
];

const clientTypes = [
  { icon: Target, name: "Off-Price Chains", desc: "Regional & national discount chains" },
  { icon: BarChart3, name: "Discount Retailers", desc: "Independent discount stores" },
  { icon: Globe, name: "Online Resellers", desc: "E-commerce & marketplace sellers" },
  { icon: Handshake, name: "Independent Stores", desc: "Boutiques & specialty shops" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient py-24 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
            Our Story
          </span>
          <h1 className="text-3xl md:text-6xl font-bold text-white mt-4 mb-8 font-[var(--font-display)] leading-tight">
            Young Contemporary{" "}
            <span className="gradient-text">Women&apos;s Wholesale</span>
          </h1>
          <p className="text-gray-300/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Ardenora specializes in wholesale women&apos;s apparel — juniors and
            missy — for off-price retailers. We bridge the gap between brands
            with excess inventory and buyers who need on-trend styles at the
            right price.
          </p>
        </div>
      </section>

      <Stats />

      {/* Story */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
              About Us
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-primary mt-3 mb-8 font-[var(--font-display)]">
              Why Ardenora Exists
            </h2>
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                We started in women&apos;s apparel wholesale with a simple
                observation: too many retailers struggle to find consistent,
                on-trend juniors and missy inventory at prices that work for
                the off-price model.
              </p>
              <p>
                Ardenora solves that problem. We specialize in young
                contemporary women&apos;s fashion — sourcing directly from brands,
                manufacturers, and licensed distributors to offer deep discounts
                on current and past-season styles. The kind of merchandise
                that flies off shelves at TJ Maxx, Marshalls, Ross, and
                Burlington.
              </p>
              <p>
                Whether you&apos;re buying women&apos;s apparel for a single discount
                store or managing purchasing for a regional chain, we have the
                juniors and missy depth to help you compete.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-border">
            <h3 className="font-bold text-primary mb-8 text-lg">
              What We Stand For
            </h3>
            <ul className="space-y-5">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={14} className="text-emerald" />
                  </div>
                  <span className="text-sm text-muted leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 px-4 bg-gray-50/80">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
            Our Clients
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mt-3 mb-5 font-[var(--font-display)]">
            Who We Serve
          </h2>
          <p className="text-muted mb-14 max-w-2xl mx-auto text-lg">
            From national chains to independent shops — we partner with
            retailers who understand the off-price opportunity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {clientTypes.map((type) => (
              <div
                key={type.name}
                className="bg-white p-6 md:p-8 rounded-2xl border border-border hover:shadow-lg hover:border-transparent transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/10 transition-colors">
                  <type.icon size={22} className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-primary mb-1">
                  {type.name}
                </h3>
                <p className="text-xs text-muted hidden md:block">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
