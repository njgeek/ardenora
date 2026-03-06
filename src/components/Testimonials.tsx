const testimonials = [
  {
    quote:
      "Ardenora has been our go-to supplier for two years. Consistent quality, great pricing, and they always deliver on time.",
    name: "Sarah M.",
    role: "Buyer, Regional Off-Price Chain",
  },
  {
    quote:
      "The variety is unmatched. Every week there's new inventory that our customers love. Our margins have never been better.",
    name: "David K.",
    role: "Owner, Discount Retail Store",
  },
  {
    quote:
      "Professional team, competitive pricing, and the fastest turnaround in the business. Highly recommend for any retailer.",
    name: "Michelle T.",
    role: "Purchasing Manager",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-14">
          What Our Buyers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-lg shadow-sm border border-border"
            >
              <div className="text-gold text-3xl mb-4">&ldquo;</div>
              <p className="text-sm text-muted leading-relaxed mb-6">
                {t.quote}
              </p>
              <div>
                <div className="font-semibold text-primary text-sm">
                  {t.name}
                </div>
                <div className="text-xs text-muted">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
