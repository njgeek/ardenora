"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";
import { products, categories } from "@/lib/products";
import { Search } from "lucide-react";

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
      <section className="bg-primary py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Current Inventory
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Browse our available lots. All items are in-stock and ready to ship.
            Hover over items to see video previews. Contact us for pricing on
            large orders.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b border-border sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-muted hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="text"
              placeholder="Search inventory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-border rounded text-sm focus:outline-none focus:border-accent"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <>
              <p className="text-sm text-muted mb-6">
                Showing {filtered.length} item{filtered.length !== 1 && "s"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted text-lg">
                No items found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
