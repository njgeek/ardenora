import {
  TrendingDown,
  Truck,
  ShieldCheck,
  Package,
  RefreshCw,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Below-Market Pricing",
    description:
      "Get branded and unbranded apparel at 40-70% below wholesale. Maximize your margins.",
  },
  {
    icon: Package,
    title: "Bulk Ready Inventory",
    description:
      "Thousands of SKUs in stock and ready to ship. No waiting on production runs.",
  },
  {
    icon: Truck,
    title: "Fast Fulfillment",
    description:
      "Orders ship within 48 hours. Nationwide delivery to your warehouse or store.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "Every lot is inspected and graded. First-quality goods you can trust on your shelves.",
  },
  {
    icon: RefreshCw,
    title: "Fresh Inventory Weekly",
    description:
      "New lots every week across all categories. Your customers will always find something new.",
  },
  {
    icon: Users,
    title: "Dedicated Account Support",
    description:
      "Personal account reps who understand off-price retail. We speak your language.",
  },
];

export function WhyArdenora() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Retailers Choose Ardenora
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We understand what off-price retailers need — deep discounts,
            reliable supply, and fast turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="p-6 rounded-lg border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <b.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{b.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
