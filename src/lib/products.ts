export interface Product {
  id: string;
  title: string;
  image: string;
  video?: string;
  category: string;
  minOrder: string;
  priceRange: string;
}

function placeholder(label: string, hue: number, saturation: number = 25) {
  const bg = `hsl(${hue},${saturation}%,94%)`;
  const shape = `hsl(${hue},${saturation + 10}%,85%)`;
  const text = `hsl(${hue},${saturation}%,35%)`;
  const sub = `hsl(${hue},${saturation - 5}%,55%)`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
    <defs>
      <linearGradient id="g${hue}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${bg}"/>
        <stop offset="100%" stop-color="hsl(${hue},${saturation}%,88%)"/>
      </linearGradient>
    </defs>
    <rect width="600" height="800" fill="url(#g${hue})"/>
    <circle cx="300" cy="320" r="120" fill="${shape}" opacity="0.6"/>
    <rect x="200" y="260" width="200" height="120" rx="60" fill="${shape}" opacity="0.4"/>
    <text x="300" y="520" text-anchor="middle" font-family="system-ui,sans-serif" font-size="22" font-weight="600" fill="${text}">${label}</text>
    <text x="300" y="560" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" letter-spacing="4" fill="${sub}">ARDENORA</text>
    <line x1="250" y1="585" x2="350" y2="585" stroke="${sub}" stroke-width="1" opacity="0.4"/>
    <text x="300" y="610" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="${sub}" opacity="0.6">WHOLESALE</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// Replace placeholder images with real product photos for production
export const products: Product[] = [
  {
    id: "1",
    title: "Women's Cotton Blend T-Shirts — Assorted Colors",
    image: placeholder("Women's Tees", 340, 30),
    category: "Women's",
    minOrder: "500 pcs",
    priceRange: "$2.50 - $4.00",
  },
  {
    id: "2",
    title: "Men's Performance Polo Shirts — Bulk Pack",
    image: placeholder("Men's Polos", 215, 35),
    category: "Men's",
    minOrder: "300 pcs",
    priceRange: "$3.75 - $5.50",
  },
  {
    id: "3",
    title: "Kids' Summer Shorts — Mixed Sizes & Styles",
    image: placeholder("Kids' Shorts", 35, 40),
    category: "Kids",
    minOrder: "200 pcs",
    priceRange: "$1.80 - $3.25",
  },
  {
    id: "4",
    title: "Women's Activewear Leggings — Premium Grade",
    image: placeholder("Leggings", 290, 25),
    category: "Women's",
    minOrder: "250 pcs",
    priceRange: "$4.00 - $6.50",
  },
  {
    id: "5",
    title: "Men's Fleece Hoodies — Winter Clearance Lot",
    image: placeholder("Hoodies", 200, 20),
    category: "Men's",
    minOrder: "200 pcs",
    priceRange: "$5.00 - $8.00",
  },
  {
    id: "6",
    title: "Women's Dresses — Spring Collection Overstock",
    image: placeholder("Dresses", 355, 35),
    category: "Women's",
    minOrder: "150 pcs",
    priceRange: "$4.50 - $7.00",
  },
  {
    id: "7",
    title: "Baby Onesies — Organic Cotton, 0-24M",
    image: placeholder("Baby Onesies", 55, 35),
    category: "Kids",
    minOrder: "500 pcs",
    priceRange: "$1.50 - $2.75",
  },
  {
    id: "8",
    title: "Men's Chino Pants — Assorted Fits & Colors",
    image: placeholder("Chinos", 170, 20),
    category: "Men's",
    minOrder: "200 pcs",
    priceRange: "$4.25 - $6.75",
  },
  {
    id: "9",
    title: "Women's Puffer Jackets — Seasonal Closeout",
    image: placeholder("Puffer Jackets", 250, 20),
    category: "Seasonal",
    minOrder: "100 pcs",
    priceRange: "$8.00 - $14.00",
  },
];

export const categories = ["All", "Women's", "Men's", "Kids", "Seasonal"];
