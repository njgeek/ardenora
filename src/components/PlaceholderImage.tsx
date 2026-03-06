"use client";

/**
 * Generates an SVG placeholder for product images.
 * Replace with real product photos for production.
 */
export function getPlaceholderSrc(label: string, color: string = "#E2E8F0") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
    <rect width="600" height="800" fill="${color}"/>
    <text x="300" y="380" text-anchor="middle" font-family="Arial" font-size="20" fill="#64748B">${label}</text>
    <text x="300" y="420" text-anchor="middle" font-family="Arial" font-size="14" fill="#94A3B8">ARDENORA</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
