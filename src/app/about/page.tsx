import { CTABanner } from "@/components/CTABanner";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ardenora | Wholesale Apparel Supplier",
  description:
    "Learn about Ardenora — a trusted wholesale apparel supplier serving off-price retailers with premium inventory at unbeatable margins.",
};

const values = [
  "Transparent pricing with no hidden fees",
  "First-quality and inspected merchandise only",
  "Flexible minimum orders for growing retailers",
  "Nationwide shipping with tracking on every order",
  "Dedicated account managers for every buyer",
  "Weekly new inventory across all categories",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Built for Off-Price Retail
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ardenora was founded with one mission: to be the most reliable
            wholesale apparel partner for off-price retailers. We bridge the gap
            between brands with excess inventory and retailers who need quality
            goods at the right price.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                We started in the apparel wholesale industry with a simple
                observation: too many retailers struggle to find consistent,
                quality inventory at prices that work for the off-price model.
              </p>
              <p>
                Ardenora solves that problem. We source directly from brands,
                manufacturers, and licensed distributors to offer deep discounts
                on current and past-season apparel — the kind of merchandise
                that sells fast in stores like TJ Maxx, Marshalls, Ross, and
                Burlington.
              </p>
              <p>
                Whether you run a single discount store or manage buying for a
                regional chain, we have the inventory depth and pricing to help
                you compete.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-border">
            <h3 className="font-semibold text-primary mb-6 text-lg">
              What We Stand For
            </h3>
            <ul className="space-y-4">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-muted">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Who We Serve
          </h2>
          <p className="text-muted mb-12 max-w-2xl mx-auto">
            Our buyers include national chains, regional discount retailers,
            online sellers, and independent store owners.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Off-Price Chains",
              "Discount Retailers",
              "Online Resellers",
              "Independent Stores",
            ].map((type) => (
              <div
                key={type}
                className="bg-white p-6 rounded-lg border border-border"
              >
                <span className="text-sm font-semibold text-primary">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
