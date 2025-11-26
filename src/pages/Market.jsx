// src/pages/Market.jsx
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Market() {
  return (
    <div
      className="relative min-h-[100vh] p-6 md:p-10 text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.9)), url('/images/market-bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header className="mb-8">
        <h1 className="text-3xl font-bold">The Market</h1>
        <p className="mt-2 text-neutral-300 max-w-3xl">
          Limited runs, show posters, zines, and gear. Checkout uses external buy links
          (Stripe Payment Links, Etsy, etc.). Replace the <code>buyUrl</code> fields to go live.
        </p>
        <div className="mt-4 flex gap-3">
          <Link
            to="/enlist"
            className="px-3 py-1.5 rounded border border-white/20 hover:bg-white/10"
          >
            Vendor / Collab?
          </Link>
          <a
            href="/transparency"
            className="px-3 py-1.5 rounded border border-emerald-400/40 hover:bg-emerald-400/10"
          >
            Transparency (501c3)
          </a>
        </div>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>

      <footer className="mt-10 text-sm text-neutral-400">
        Prices exclude shipping unless noted. Questions?{" "}
        <Link className="underline" to="/enlist">
          Open a channel
        </Link>
        .
      </footer>
    </div>
  );
}
