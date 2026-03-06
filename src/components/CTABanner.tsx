import Link from "next/link";

export function CTABanner() {
  return (
    <section className="bg-accent py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Stock Your Shelves with Ardenora?
        </h2>
        <p className="text-white/90 mb-8 max-w-xl mx-auto">
          Join hundreds of retailers who trust Ardenora for quality wholesale
          apparel at unbeatable prices. Get started today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-accent font-semibold px-8 py-3 rounded hover:bg-gray-100 transition-colors text-sm uppercase tracking-wide"
          >
            Apply to Become a Buyer
          </Link>
          <Link
            href="/inventory"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded hover:bg-white/10 transition-colors text-sm uppercase tracking-wide"
          >
            Browse Inventory
          </Link>
        </div>
      </div>
    </section>
  );
}
