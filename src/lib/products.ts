export interface Product {
  id: string;
  title: string;
  image: string;
  video?: string;
  category: string;
  minOrder: string;
  priceRange: string;
}

function placeholder(label: string, hue: number) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="600" height="800" fill="hsl(${hue},15%,90%)"/><rect x="150" y="200" width="300" height="300" rx="20" fill="hsl(${hue},20%,80%)"/><text x="300" y="360" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" fill="hsl(${hue},20%,40%)">${label}</text><text x="300" y="560" text-anchor="middle" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="hsl(${hue},15%,50%)">ARDENORA</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Replace placeholder images with real product photos for production
export const products: Product[] = [
  {
    id: "1",
    title: "Women's Cotton Blend T-Shirts — Assorted Colors",
    image: placeholder("Women's Tees", 340),
    category: "Women's",
    minOrder: "500 pcs",
    priceRange: "$2.50 - $4.00",
  },
  {
    id: "2",
    title: "Men's Performance Polo Shirts — Bulk Pack",
    image: placeholder("Men's Polos", 220),
    category: "Men's",
    minOrder: "300 pcs",
    priceRange: "$3.75 - $5.50",
  },
  {
    id: "3",
    title: "Kids' Summer Shorts — Mixed Sizes & Styles",
    image: placeholder("Kids' Shorts", 40),
    category: "Kids",
    minOrder: "200 pcs",
    priceRange: "$1.80 - $3.25",
  },
  {
    id: "4",
    title: "Women's Activewear Leggings — Premium Grade",
    image: placeholder("Leggings", 300),
    category: "Women's",
    minOrder: "250 pcs",
    priceRange: "$4.00 - $6.50",
  },
  {
    id: "5",
    title: "Men's Fleece Hoodies — Winter Clearance Lot",
    image: placeholder("Hoodies", 200),
    category: "Men's",
    minOrder: "200 pcs",
    priceRange: "$5.00 - $8.00",
  },
  {
    id: "6",
    title: "Women's Dresses — Spring Collection Overstock",
    image: placeholder("Dresses", 0),
    category: "Women's",
    minOrder: "150 pcs",
    priceRange: "$4.50 - $7.00",
  },
  {
    id: "7",
    title: "Baby Onesies — Organic Cotton, 0-24M",
    image: placeholder("Baby Onesies", 60),
    category: "Kids",
    minOrder: "500 pcs",
    priceRange: "$1.50 - $2.75",
  },
  {
    id: "8",
    title: "Men's Chino Pants — Assorted Fits & Colors",
    image: placeholder("Chinos", 180),
    category: "Men's",
    minOrder: "200 pcs",
    priceRange: "$4.25 - $6.75",
  },
  {
    id: "9",
    title: "Women's Puffer Jackets — Seasonal Closeout",
    image: placeholder("Puffer Jackets", 260),
    category: "Seasonal",
    minOrder: "100 pcs",
    priceRange: "$8.00 - $14.00",
  },
];

export const categories = ["All", "Women's", "Men's", "Kids", "Seasonal"];
