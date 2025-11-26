// src/pages/Carderia.jsx
import { useState } from "react";
import { mapPoints } from "../data/carderia2"; // <-- uses the data file you made

export default function Carderia() {
  const [activeId, setActiveId] = useState(null);
  const active = mapPoints.find((p) => p.id === activeId) || null;

  return (
    <div className="min-h-[100vh] p-6 md:p-10">
      {/* Sticky-style header to match your site */}
      <div className="sticky top-0 z-20 bg-black/70 backdrop-blur-md border-b border-white/10 -mx-6 md:-mx-10 px-6 md:px-10 py-3">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-[0.15em] uppercase">
          Cárderia — World Map
        </h1>
        <p className="mt-1 text-sm text-neutral-300 tracking-widest">
          Tap a marker to explore a location.
        </p>
      </div>

      {/* Map + pins */}
      <div className="mx-auto max-w-5xl mt-6">
        <div className="relative">
          {/* Put your map image at /public/maps/cardia.jpg */}
          <img
            src="/maps/cardia.jpg"
            alt="Map of Cárderia"
            className="w-full h-auto rounded-xl border border-white/10 shadow-xl"
          />

          {mapPoints.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className="
                absolute -translate-x-1/2 -translate-y-1/2
                h-3 w-3 rounded-full
                bg-emerald-300 ring-2 ring-emerald-400
                hover:scale-110 transition
                focus:outline-none focus:ring-2 focus:ring-emerald-400
              "
              style={{
                // mapPoints uses 0–1 numbers; convert to %
                left: `${p.x * 100}%`,
                top: `${p.y * 100}%`,
              }}
              aria-label={p.name}
              title={p.name}
            />
          ))}
        </div>

        {/* Simple details panel */}
        {active && (
          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-4">
            <div className="text-xs uppercase tracking-widest text-neutral-400">
              {active.region || "Region"}
            </div>
            <h2 className="text-xl font-bold mt-1">{active.name}</h2>
            <p className="mt-2 text-neutral-200">{active.blurb}</p>

            <div className="mt-4 flex gap-2">
              {/* You can wire real links later */}
              {active.readHref && (
                <a href={active.readHref} className="px-3 py-1 text-xs rounded border border-white/20 hover:bg-white/10">
                  Read
                </a>
              )}
              {active.listenHref && (
                <a href={active.listenHref} className="px-3 py-1 text-xs rounded border border-white/20 hover:bg-white/10">
                  Listen
                </a>
              )}
              {active.watchHref && (
                <a href={active.watchHref} target="_blank" rel="noreferrer" className="px-3 py-1 text-xs rounded border border-white/20 hover:bg-white/10">
                  Watch
                </a>
              )}
              <button
                onClick={() => setActiveId(null)}
                className="ml-auto px-3 py-1 text-xs rounded border border-white/20 hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="h-24" />
    </div>
  );
}
