import Link from "next/link";
import { Shirt, Wind, Sun, Snowflake } from "lucide-react";

const categories = [
  {
    icon: Shirt,
    name: "Women's Apparel",
    description: "Tops, dresses, activewear, and more",
    count: "3,000+ SKUs",
  },
  {
    icon: Wind,
    name: "Men's Apparel",
    description: "T-shirts, polos, pants, outerwear",
    count: "2,500+ SKUs",
  },
  {
    icon: Sun,
    name: "Kids & Baby",
    description: "Toddler to teen, all seasons",
    count: "2,000+ SKUs",
  },
  {
    icon: Snowflake,
    name: "Seasonal Lots",
    description: "Holiday, summer, back-to-school",
    count: "1,500+ SKUs",
  },
];

export function Categories() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-muted">
            Deep inventory across all major apparel categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/inventory"
              className="group p-6 rounded-lg border border-border text-center hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <cat.icon
                  size={24}
                  className="text-primary group-hover:text-accent transition-colors"
                />
              </div>
              <h3 className="font-semibold text-primary text-sm mb-1">
                {cat.name}
              </h3>
              <p className="text-xs text-muted mb-2 hidden md:block">
                {cat.description}
              </p>
              <span className="text-xs font-medium text-accent">
                {cat.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
