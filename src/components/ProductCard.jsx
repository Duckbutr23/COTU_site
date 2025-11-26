// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
  const { title, price, image, buyUrl, status, badge, subtitle } = product;
  const isComing = status === "coming-soon" || !buyUrl;

  return (
    <div className="relative rounded-2xl border border-white/15 bg-neutral-900/60 p-4 shadow-[0_0_60px_rgba(0,255,200,0.06)] hover:bg-white/[0.06] transition">
      {badge && (
        <span className="absolute -top-2 -right-2 text-[10px] tracking-widest px-2 py-1 rounded bg-emerald-500/20 border border-emerald-400/40">
          {badge}
        </span>
      )}

      <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-black/40 mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <h3 className="font-semibold leading-tight">{title}</h3>
      {subtitle && <p className="text-neutral-400 text-sm mt-1">{subtitle}</p>}

      <div className="mt-3 flex items-center justify-between">
        <div className="text-neutral-200">${price.toFixed(2)}</div>

        {isComing ? (
          <a
            href="/enlist"
            className="text-xs px-3 py-1.5 rounded border border-white/20 hover:bg-white/10"
            title="Get notified"
          >
            Notify Me
          </a>
        ) : (
          <a
            href={buyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs px-3 py-1.5 rounded border border-emerald-400/40 hover:bg-emerald-400/10"
          >
            Buy
          </a>
        )}
      </div>
    </div>
  );
}
