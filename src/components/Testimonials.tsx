"use client";

import { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ardenora has been our go-to for women's apparel. Their juniors and missy selection is always on-trend, pricing is unbeatable, and sell-through improved 35% after switching.",
    name: "Sarah Mitchell",
    role: "VP of Women's Buying, Regional Off-Price Chain",
    initials: "SM",
    rating: 5,
  },
  {
    quote:
      "The juniors variety is unmatched. Every week there's fresh women's styles our customers love. Our margins have never been better — 60%+ on most lots.",
    name: "Lisa Chen",
    role: "Owner, 12-Location Women's Discount Chain",
    initials: "LC",
    rating: 5,
  },
  {
    quote:
      "Professional team, competitive pricing, and the fastest turnaround in the business. They understand what off-price buyers need. True partners.",
    name: "Michelle Torres",
    role: "Purchasing Director, National Retailer",
    initials: "MT",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 px-4 bg-gray-50/80">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3 mb-5 font-[var(--font-display)]">
            What Our Buyers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:border-transparent transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="text-gold"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-muted">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
