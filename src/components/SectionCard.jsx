// src/components/SectionCard.jsx
import React from "react";

function toRGB(glow = "emerald") {
  switch (glow) {
    case "emerald": return [16, 185, 129];
    case "cyan":    return [34, 211, 238];
    case "violet":  return [139, 92, 246];
    case "amber":   return [245, 158, 11];
    case "fuchsia": return [232, 121, 249];
    default:        return [99, 102, 241];
  }
}

/**
 * SectionCard
 * Props:
 *  - title
 *  - cta?: { href, label }
 *  - glow?: palette key
 *  - minHeight?: px
 *  - bgImage?: url
 *  - bgOpacity?: 0..1   (default 0.125 — about 25% brighter than 0.10)
 *  - bgSize?: string
 */
export default function SectionCard({
  title,
  cta,
  glow = "emerald",
  minHeight = 130,
  bgImage = "/textures/soft-grid.avif",
  bgOpacity = 0.125,
  bgSize = "520px",
  children,
}) {
  const [r, g, b] = toRGB(glow);
  const ringColor  = `rgba(${r},${g},${b},0.24)`;

  return (
    <div className="relative">
      {/* OUTER HALO (around the card, not under it) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-2 rounded-3xl"
        style={{
          boxShadow: `0 0 36px rgba(${r},${g},${b},0.32), 0 0 84px rgba(${r},${g},${b},0.18)`,
        }}
      />

      {/* CARD */}
      <div
        className="relative rounded-2xl border bg-black/35 backdrop-blur-sm overflow-hidden"
        style={{
          borderColor: "rgba(255,255,255,0.12)",
          minHeight,
        }}
      >
        {/* inner colored ring */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ boxShadow: `inset 0 0 0 1px ${ringColor}` }}
        />

        {/* texture inside card */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            backgroundSize: bgSize,
            opacity: bgOpacity,
          }}
        />

        {/* content */}
        <div className="relative p-4 md:p-5">
          <div className="flex items-center gap-3">
            <div className="text-[11px] tracking-[0.35em] uppercase text-neutral-300">
              {title}
            </div>
            <div
              className="h-[2px] rounded"
              style={{ backgroundColor: `rgba(${r},${g},${b},0.65)`, width: 24 }}
              aria-hidden
            />
            {cta && (
              <a
                className="ml-auto text-xs px-3 py-1.5 rounded-md border hover:bg-white/10 transition"
                style={{ borderColor: "rgba(255,255,255,0.18)" }}
                href={cta.href}
              >
                {cta.label}
              </a>
            )}
          </div>

          <div className="mt-3 text-sm text-neutral-200">{children}</div>
        </div>
      </div>
    </div>
  );
}
