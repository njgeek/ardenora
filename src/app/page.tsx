import Link from "next/link";
import { Stats } from "@/components/Stats";
import { WhyArdenora } from "@/components/WhyArdenora";
import { Categories } from "@/components/Categories";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { TrustBar } from "@/components/TrustBar";
import { HowItWorks } from "@/components/HowItWorks";
import { ArrowRight, Zap, ShieldCheck, Truck, Lock } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-gradient overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(230,57,70,0.08)_0%,transparent_60%)]" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl hidden md:block" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl hidden md:block" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 animate-fade-up">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse-dot" />
              <span className="text-xs text-white/80 font-medium">
                Now accepting new wholesale buyers for 2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 animate-fade-up animation-delay-200 font-[var(--font-display)]">
              Women&apos;s Apparel at{" "}
              <span className="gradient-text">Off-Price Wholesale</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300/90 mb-12 leading-relaxed max-w-2xl animate-fade-up animation-delay-400">
              Ardenora specializes in young contemporary, juniors &amp; missy
              wholesale apparel — at margins that move product. Trusted by TJ Maxx
              buyers, discount chains, and off-price retailers nationwide.
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
                href="/portal"
                className="glass text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/15 transition-all text-sm uppercase tracking-wide text-center flex items-center justify-center gap-2"
              >
                <Lock size={16} />
                Buyer Portal Login
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

      {/* How It Works */}
      <HowItWorks />

      {/* Why Ardenora */}
      <WhyArdenora />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTABanner />
    </>
  );
}
