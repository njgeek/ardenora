import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Stats } from "@/components/Stats";
import { WhyArdenora } from "@/components/WhyArdenora";
import { Categories } from "@/components/Categories";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-block bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              Wholesale Apparel Supplier
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Premium Apparel at{" "}
              <span className="text-gold">Off-Price Wholesale</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Ardenora supplies off-price retailers with quality branded and
              unbranded apparel — at margins that move product. Trusted by
              discount chains, liquidators, and independent retailers nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-accent text-white font-semibold px-8 py-4 rounded hover:bg-accent-hover transition-colors text-sm uppercase tracking-wide text-center"
              >
                Become a Buyer
              </Link>
              <Link
                href="/inventory"
                className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded hover:border-white/60 hover:bg-white/5 transition-all text-sm uppercase tracking-wide text-center flex items-center justify-center gap-2"
              >
                View Inventory <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Categories */}
      <Categories />

      {/* Featured Products */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Featured Inventory
              </h2>
              <p className="text-muted">
                Hover to preview — tap on mobile for full view
              </p>
            </div>
            <Link
              href="/inventory"
              className="hidden md:flex items-center gap-1 text-accent font-medium text-sm hover:underline"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/inventory"
              className="inline-flex items-center gap-1 text-accent font-medium text-sm"
            >
              View All Inventory <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Ardenora */}
      <WhyArdenora />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTABanner />
    </>
  );
}
