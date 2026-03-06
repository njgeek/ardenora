"use client";

import { useRef, useState, useEffect } from "react";
import { Package, Users, Truck, TrendingDown } from "lucide-react";

const stats = [
  { value: "500+", label: "Retail Partners", icon: Users },
  { value: "10K+", label: "Women's SKUs", icon: Package },
  { value: "48hr", label: "Shipping Turnaround", icon: Truck },
  { value: "60%", label: "Below MSRP", icon: TrendingDown },
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-primary py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass mb-4">
              <stat.icon size={20} className="text-gold" />
            </div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-1.5">
              {stat.value}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-[0.15em] font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
