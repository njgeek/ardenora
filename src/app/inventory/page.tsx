"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";
import { products, categories } from "@/lib/products";
import { Search, SlidersHorizontal } from "lucide-react";

export default function InventoryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      {/* Page Header */}
      <section className="relative hero-gradient py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto">
          <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
            In Stock & Ready to Ship
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-5 font-[var(--font-display)]">
            Current Inventory
          </h1>
          <p className="text-gray-300/90 max-w-2xl text-lg">
            Browse our available lots. All items are in-stock and ready to ship
            within 48 hours. Hover for video previews.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-5 px-4 bg-white border-b border-border sticky top-[65px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <SlidersHorizontal size={16} className="text-muted shrink-0 hidden md:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-gray-100 text-muted hover:bg-gray-200 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="text"
              placeholder="Search inventory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl text-sm focus:outline-none focus:border-accent bg-gray-50 focus:bg-white transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 bg-gray-50/50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <>
              <p className="text-sm text-muted mb-8">
                Showing {filtered.length} item{filtered.length !== 1 && "s"}
                {activeCategory !== "All" && (
                  <> in <span className="font-medium text-primary">{activeCategory}</span></>
                )}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-muted text-lg mb-2">No items found</p>
              <p className="text-sm text-muted">
                Try adjusting your search or category filter
              </p>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
