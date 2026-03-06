"use client";

import { useRef, useState, useEffect } from "react";
import {
  TrendingDown,
  Truck,
  ShieldCheck,
  Package,
  RefreshCw,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Below-Market Pricing",
    description:
      "Branded and unbranded apparel at 40-70% below wholesale. Margins that make your business thrive.",
    highlight: "40-70% savings",
  },
  {
    icon: Package,
    title: "Bulk Ready Inventory",
    description:
      "Thousands of SKUs in-stock and ready to ship. No waiting on production — buy it today, sell it tomorrow.",
    highlight: "10,000+ SKUs",
  },
  {
    icon: Truck,
    title: "Fast Fulfillment",
    description:
      "Orders ship within 48 hours. Nationwide delivery direct to your warehouse or storefront.",
    highlight: "48hr shipping",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "Every lot is inspected and graded. First-quality goods you can confidently put on your shelves.",
    highlight: "100% inspected",
  },
  {
    icon: RefreshCw,
    title: "Fresh Inventory Weekly",
    description:
      "New lots drop every week across all categories. Keep your floors fresh and customers coming back.",
    highlight: "Weekly drops",
  },
  {
    icon: Users,
    title: "Dedicated Account Support",
    description:
      "Personal account reps who understand off-price retail. Strategic partnership, not just transactions.",
    highlight: "1-on-1 support",
  },
];

export function WhyArdenora() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
            Our Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3 mb-5 font-[var(--font-display)]">
            Why Retailers Choose Ardenora
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            We understand what off-price retailers need — deep discounts,
            reliable supply, and fast turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group relative p-7 rounded-2xl border border-border bg-white hover:bg-gray-50/50 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/8 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
                  <b.icon size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1.5 text-[15px]">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-3">
                    {b.description}
                  </p>
                  <span className="inline-flex items-center text-[11px] font-bold text-emerald bg-emerald/8 px-3 py-1 rounded-full uppercase tracking-wider">
                    {b.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
