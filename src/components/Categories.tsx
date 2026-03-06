"use client";

import Link from "next/link";

const categories = [
  {
    name: "Juniors",
    description: "Crop tops, bodycon, graphic tees, shorts",
    count: "4,000+",
    gradient: "from-pink-500/20 to-rose-500/10",
    emoji: "✨",
  },
  {
    name: "Missy",
    description: "Blouses, dresses, pants, sweaters",
    count: "3,500+",
    gradient: "from-purple-500/20 to-violet-500/10",
    emoji: "👗",
  },
  {
    name: "Activewear",
    description: "Leggings, sports bras, joggers, sets",
    count: "2,000+",
    gradient: "from-rose-500/20 to-pink-500/10",
    emoji: "🏃‍♀️",
  },
  {
    name: "Seasonal Lots",
    description: "Holiday, summer, back-to-school closeouts",
    count: "1,500+",
    gradient: "from-amber-500/20 to-yellow-500/10",
    emoji: "🏷️",
  },
];

export function Categories() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
            Categories
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3 mb-5 font-[var(--font-display)]">
            Shop by Category
          </h2>
          <p className="text-muted text-lg">
            Young contemporary, juniors &amp; missy — deep inventory across every category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/inventory"
              className={`group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br ${cat.gradient} text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-border overflow-hidden`}
            >
              <div className="text-4xl mb-4">{cat.emoji}</div>
              <h3 className="font-bold text-primary text-sm md:text-base mb-1">
                {cat.name}
              </h3>
              <p className="text-xs text-muted mb-3 hidden md:block">
                {cat.description}
              </p>
              <span className="inline-flex items-center text-xs font-bold text-accent bg-white/80 px-3 py-1 rounded-full">
                {cat.count} SKUs
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
