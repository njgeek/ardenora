"use client";

import { useRef, useState, useEffect } from "react";

const stats = [
  { value: "500+", label: "Retail Partners" },
  { value: "10K+", label: "SKUs Available" },
  { value: "48hr", label: "Shipping Turnaround" },
  { value: "60%", label: "Below MSRP" },
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
    <section ref={ref} className="bg-primary py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-300 uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
