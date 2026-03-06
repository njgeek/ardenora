import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(230,57,70,0.12)_0%,transparent_60%)]" />

      <div className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald rounded-full animate-pulse-dot" />
            <span className="text-xs text-white/80 font-medium">
              Accepting new buyer applications
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-[var(--font-display)] leading-tight">
            Ready to Stock Your Shelves
            <br />
            <span className="gradient-text">with Ardenora?</span>
          </h2>

          <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg">
            Join hundreds of retailers who trust Ardenora for premium wholesale
            apparel at unbeatable prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-accent text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-hover transition-all text-sm uppercase tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-accent/30 hover:shadow-accent/40"
            >
              <Zap size={16} fill="currentColor" />
              Apply to Become a Buyer
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/inventory"
              className="glass text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/15 transition-all text-sm uppercase tracking-wide text-center"
            >
              Browse Inventory
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
