"use client";

import { useRef, useState, useEffect } from "react";
import { ClipboardCheck, UserCheck, ShoppingBag, Truck } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Apply",
    description:
      "Fill out our quick buyer application with your business details and what categories you need.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Get Approved",
    description:
      "Our team reviews your application and sets up your buyer portal account within 24 hours.",
  },
  {
    icon: ShoppingBag,
    step: "03",
    title: "Shop & Order",
    description:
      "Browse real-time inventory, view pricing, and place orders directly from your buyer portal.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Receive & Sell",
    description:
      "Orders ship within 48 hours. Stock your shelves and watch the product move.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-4 bg-gray-50/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
            Getting Started
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3 mb-5 font-[var(--font-display)]">
            How It Works
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From application to delivery in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`relative text-center p-8 rounded-2xl bg-white border border-border hover:shadow-xl hover:border-transparent transition-all duration-500 group ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border z-10" />
              )}

              <div className="text-[11px] font-bold text-accent uppercase tracking-[0.3em] mb-4">
                Step {s.step}
              </div>
              <div className="w-14 h-14 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                <s.icon size={24} className="text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
