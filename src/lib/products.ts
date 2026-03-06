export interface Product {
  id: string;
  title: string;
  image: string;
  video?: string;
  category: string;
  minOrder: string;
  priceRange: string;
}

function placeholder(label: string, hue: number, saturation: number = 30) {
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
    title: "Junior Crop Tops — Assorted Prints & Solids",
    image: placeholder("Crop Tops", 340, 35),
    category: "Juniors",
    minOrder: "500 pcs",
    priceRange: "$2.50 - $4.00",
  },
  {
    id: "2",
    title: "Missy Blouses — Woven & Knit Mix, S-XL",
    image: placeholder("Blouses", 280, 25),
    category: "Missy",
    minOrder: "300 pcs",
    priceRange: "$3.75 - $5.50",
  },
  {
    id: "3",
    title: "Junior Bodycon Dresses — Going Out Styles",
    image: placeholder("Bodycon Dresses", 355, 35),
    category: "Juniors",
    minOrder: "200 pcs",
    priceRange: "$4.00 - $6.50",
  },
  {
    id: "4",
    title: "Missy Activewear Leggings — Premium Grade",
    image: placeholder("Leggings", 290, 25),
    category: "Activewear",
    minOrder: "250 pcs",
    priceRange: "$3.50 - $5.75",
  },
  {
    id: "5",
    title: "Junior Graphic Tees — Trending Prints, XS-L",
    image: placeholder("Graphic Tees", 215, 30),
    category: "Juniors",
    minOrder: "500 pcs",
    priceRange: "$2.00 - $3.50",
  },
  {
    id: "6",
    title: "Missy Maxi Dresses — Spring/Summer Collection",
    image: placeholder("Maxi Dresses", 25, 35),
    category: "Missy",
    minOrder: "150 pcs",
    priceRange: "$5.00 - $8.00",
  },
  {
    id: "7",
    title: "Junior Denim Shorts — Distressed & Clean Wash",
    image: placeholder("Denim Shorts", 210, 20),
    category: "Juniors",
    minOrder: "300 pcs",
    priceRange: "$3.25 - $5.50",
  },
  {
    id: "8",
    title: "Missy Cardigans & Sweaters — Fall Closeout",
    image: placeholder("Sweaters", 15, 25),
    category: "Missy",
    minOrder: "200 pcs",
    priceRange: "$4.50 - $7.00",
  },
  {
    id: "9",
    title: "Sports Bras & Matching Sets — Seamless",
    image: placeholder("Sports Bras", 330, 30),
    category: "Activewear",
    minOrder: "500 pcs",
    priceRange: "$2.75 - $4.50",
  },
  {
    id: "10",
    title: "Junior Rompers & Jumpsuits — Assorted Styles",
    image: placeholder("Rompers", 50, 35),
    category: "Juniors",
    minOrder: "200 pcs",
    priceRange: "$3.50 - $6.00",
  },
  {
    id: "11",
    title: "Missy Pull-On Pants — Ponte & Stretch Knit",
    image: placeholder("Pull-On Pants", 250, 20),
    category: "Missy",
    minOrder: "300 pcs",
    priceRange: "$3.75 - $5.50",
  },
  {
    id: "12",
    title: "Yoga Pants & Joggers — Butter Soft Fabric",
    image: placeholder("Yoga Pants", 170, 25),
    category: "Activewear",
    minOrder: "300 pcs",
    priceRange: "$3.00 - $5.00",
  },
];

export const categories = ["All", "Juniors", "Missy", "Activewear"];
