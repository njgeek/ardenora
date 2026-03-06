import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Stats } from "@/components/Stats";
import { WhyArdenora } from "@/components/WhyArdenora";
import { Categories } from "@/components/Categories";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { TrustBar } from "@/components/TrustBar";
import { products } from "@/lib/products";
import { ArrowRight, Zap, ShieldCheck, Truck } from "lucide-react";

export default function Home() {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(230,57,70,0.08)_0%,transparent_60%)]" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl hidden md:block" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl hidden md:block" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse-dot" />
              <span className="text-xs text-white/80 font-medium">
                Now accepting new wholesale buyers for 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 animate-fade-up animation-delay-200 font-[var(--font-display)]">
              Premium Apparel at{" "}
              <span className="gradient-text">Off-Price Wholesale</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300/90 mb-12 leading-relaxed max-w-2xl animate-fade-up animation-delay-400">
              Ardenora supplies off-price retailers with quality branded and
              unbranded apparel — at margins that move product. Trusted by
              discount chains, liquidators, and independent retailers nationwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up animation-delay-600">
              <Link
                href="/contact"
                className="group bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-hover transition-all text-sm uppercase tracking-wide text-center flex items-center justify-center gap-2 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40"
              >
                <Zap size={16} fill="currentColor" />
                Become a Buyer
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/inventory"
                className="glass text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/15 transition-all text-sm uppercase tracking-wide text-center"
              >
                View Inventory
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 animate-fade-up animation-delay-600">
              {[
                { icon: ShieldCheck, text: "Quality Guaranteed" },
                { icon: Truck, text: "48hr Shipping" },
                { icon: Zap, text: "500+ Retail Partners" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-white/50"
                >
                  <item.icon size={14} className="text-gold" />
                  <span className="text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Stats */}
      <Stats />

      {/* Categories */}
      <Categories />

      {/* Featured Products */}
      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">
                Available Now
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mt-3 mb-3 font-[var(--font-display)]">
                Featured Inventory
              </h2>
              <p className="text-muted text-lg">
                Hover to preview — tap on mobile for full video view
              </p>
            </div>
            <Link
              href="/inventory"
              className="hidden md:flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all group"
            >
              View All
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              href="/inventory"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-xl"
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
