// src/data/products.js
// Replace buyUrl with your Stripe Payment Link / Etsy / Shopify URL.
// Place images in /public/merch/...

const products = [
  {
    id: "tee-zombie",
    title: "EYE. HEART. ZOMBIE. Tee",
    subtitle: "Unisex • Black • S–3XL",
    price: 28,
    image: "/merch/zombie_tee.jpg",
    buyUrl: "https://buy.stripe.com/test_replace_me", // ← replace
    badge: "NEW",
    status: "available",
  },
  {
    id: "poster-zombie-a2",
    title: "Show Poster (A2)",
    subtitle: "Heavy matte stock",
    price: 20,
    image: "/merch/zombie_poster.jpg",
    buyUrl: "https://buy.stripe.com/test_replace_me", // ← replace
    status: "available",
  },
  {
    id: "sticker-pack",
    title: "COTU Sticker Pack",
    subtitle: "5 die-cut stickers",
    price: 8,
    image: "/merch/stickers.jpg",
    buyUrl: "https://buy.stripe.com/test_replace_me", // ← replace
    status: "available",
  },
  {
    id: "zine-01",
    title: "Program Zine #1",
    subtitle: "Behind the scenes • 36pp",
    price: 12,
    image: "/merch/zine01.jpg",
    buyUrl: "", // coming soon
    badge: "SOON",
    status: "coming-soon",
  },
];

export default products;
