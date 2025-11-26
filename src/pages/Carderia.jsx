// src/pages/Carderia.jsx
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { mapPoints } from "../data/carderia";

/** Tiny floating info card that stays within the map bounds */
function Popover({ anchor, onClose, children }) {
  if (!anchor) return null;
  const { leftPx, topPx, wrapperRect } = anchor;

  const CARD_W = 300;
  const CARD_H = 220;
  const M = 14;

  let left = leftPx + M;          // default: to the right of the pin
  let top  = topPx - CARD_H / 2;  // vertically centered

  // Clamp inside wrapper
  left = Math.max(M, Math.min(left, wrapperRect.width  - CARD_W - M));
  top  = Math.max(M, Math.min(top,  wrapperRect.height - CARD_H - M));

  return (
    <div
      className="absolute z-30"
      style={{ left, top, width: CARD_W, height: CARD_H }}
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-full rounded-xl border border-white/15 bg-black/75 backdrop-blur-md shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-xs px-2 py-0.5 rounded border border-white/20 hover:bg-white/10"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="p-4 pr-8 h-full overflow-auto">{children}</div>
      </div>

      {/* little arrow toward the pin */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -left-1.5 h-3 w-3 rotate-45 bg-white/10 border-l border-t border-white/20"
        aria-hidden
      />
    </div>
  );
}

export default function Carderia() {
  const wrapperRef = useRef(null);

  // which entry is open
  const [activeId, setActiveId] = useState(null);
  const [anchor, setAnchor] = useState(null); // { leftPx, topPx, wrapperRect }

  // pin filters (toggle on/off to declutter)
  const [filters, setFilters] = useState({
    history: true,
    lore: true,
    region: true,
    chapter: true,
    continent: true,
  });

  // optional “area” filter (limits points to continent/division)
  const [areaFilter, setAreaFilter] = useState({ continent: null, division: null });

  // Close popover on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setActiveId(null);
        setAnchor(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onPin = useCallback((pt) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();

    // support 0–1 or 0–100 values
    const fx = pt.x <= 1 ? pt.x : pt.x / 100;
    const fy = pt.y <= 1 ? pt.y : pt.y / 100;

    const leftPx = fx * rect.width;
    const topPx  = fy * rect.height;

    setActiveId(pt.id);
    setAnchor({ leftPx, topPx, wrapperRect: { width: rect.width, height: rect.height } });
  }, []);

  /** Helpers to infer continent/division from data */
  const getContinent = useCallback((p) => {
    if (p.continent) return p.continent;
    if (p.region && p.region.includes(" of ")) {
      const parts = p.region.split(" of ");
      return parts[parts.length - 1].trim();
    }
    return null;
  }, []);

  const getDivision = useCallback((p) => {
    if (p.subregion) return p.subregion;
    if (p.region && p.region.includes(" of ")) {
      return p.region.split(" of ").slice(0, -1).join(" of ").trim();
    }
    return p.region || null;
  }, []);

  const enabledKinds = useMemo(() => {
    const on = [];
    for (const k in filters) if (filters[k]) on.push(k);
    return new Set(on);
  }, [filters]);

  const visiblePoints = useMemo(() => {
    return mapPoints.filter((p) => {
      const k = (p.kind || "lore").toLowerCase();
      if (!enabledKinds.has(k)) return false;

      if (areaFilter.continent) {
        const cont = getContinent(p);
        if (cont !== areaFilter.continent) return false;
        if (areaFilter.division) {
          const div = getDivision(p);
          if (div !== areaFilter.division) return false;
        }
      }
      return true;
    });
  }, [enabledKinds, areaFilter, getContinent, getDivision]);

  const active = mapPoints.find((p) => p.id === activeId) || null;

  // color styles per kind (pins + accent bar)
  const kindStyles = {
    history:   { dot: "bg-sky-300 ring-sky-400",      bar: "bg-sky-400" },
    lore:      { dot: "bg-violet-300 ring-violet-400", bar: "bg-violet-400" },
    region:    { dot: "bg-amber-300 ring-amber-400",   bar: "bg-amber-400" },
    chapter:   { dot: "bg-rose-300 ring-rose-400",     bar: "bg-rose-400" },
    continent: { dot: "bg-teal-300 ring-teal-400",      bar: "bg-teal-400" },
  };
  const kindLabel = {
    history: "History",
    lore: "Lore",
    region: "Region",
    chapter: "Chapter",
    continent: "Continent",
  };

  const kinds = ["history", "lore", "region", "chapter", "continent"];

  return (
    <div className="min-h-[100vh] bg-black text-white pt-16 md:pt-24">
      {/* Header */}
      <header className="px-6 md:px-8 mb-2">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-[0.15em] uppercase">
          Cárderia — World Map
        </h1>
        <p className="mt-1 text-sm text-neutral-300 tracking-widest">
          Tap a marker to explore a location.
        </p>
      </header>

      {/* Active area filter banner */}
      {areaFilter.continent && (
        <div className="mx-auto max-w-[1400px] px-4 mt-2">
          <div className="flex items-center gap-2 text-xs rounded-md border border-white/10 bg-black/60 backdrop-blur-sm px-3 py-2">
            <span>
              Filtering to <strong>{areaFilter.continent}</strong>
              {areaFilter.division ? ` • ${areaFilter.division}` : ""}
            </span>
            <button
              className="ml-auto border border-white/15 rounded px-2 py-0.5 hover:bg-white/10"
              onClick={() => setAreaFilter({ continent: null, division: null })}
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Filter chips — ABOVE the map */}
      <div className="mx-auto max-w-[1400px] px-4 mt-3 z-10">
        <div className="inline-flex flex-wrap gap-2 rounded-lg border border-white/10 bg-black/60 backdrop-blur-sm px-2 py-2">
          {kinds.map((k) => {
            const on = !!filters[k];
            return (
              <button
                key={k}
                onClick={() => setFilters((f) => ({ ...f, [k]: !f[k] }))}
                className={
                  "text-xs px-2.5 py-1.5 rounded-md border transition " +
                  (on ? "border-white/25 bg-white/5" : "border-white/10 opacity-60 hover:opacity-90")
                }
                aria-pressed={on}
              >
                <span className={`inline-block h-2 w-2 rounded-full mr-2 align-middle ${kindStyles[k].dot}`} />
                <span className="align-middle">{kindLabel[k]}</span>
              </button>
            );
          })}

          {/* quick master toggle */}
          <button
            onClick={() => {
              const anyOn = Object.values(filters).some(Boolean);
              setFilters({
                history: !anyOn, lore: !anyOn, region: !anyOn, chapter: !anyOn, continent: !anyOn
              });
            }}
            className="text-xs px-2.5 py-1.5 rounded-md border border-white/10 hover:bg-white/5"
            title="Toggle all"
          >
            {Object.values(filters).every(Boolean) ? "Hide all" : "Show all"}
          </button>
        </div>
      </div>

      <main className="relative z-10">
        <div className="mx-auto max-w-[1400px] p-4">
          {/* Positioning wrapper: pins & popovers use this box for % coords */}
          <div
            ref={wrapperRef}
            className="relative inline-block w-full"
            onClick={() => { setActiveId(null); setAnchor(null); }}
          >
            {/* IMPORTANT: block-level image to avoid baseline gap shifting coords */}
            <img
              src="/maps/cardia.jpg"
              alt="Map of Cárderia"
              className="block w-full h-auto rounded-xl border border-white/10 shadow-xl select-none"
              draggable="false"
            />

            {/* Pins (only visible ones based on filters) */}
            {visiblePoints.map((p) => {
              const k = (p.kind || "lore").toLowerCase();
              const fx = p.x <= 1 ? p.x : p.x / 100;
              const fy = p.y <= 1 ? p.y : p.y / 100;
              const size = k === "continent" ? "h-4 w-4 ring-[3px]" : "h-3 w-3 ring-2"; // continent pins larger

              return (
                <button
                  key={p.id}
                  onClick={(e) => { e.stopPropagation(); onPin(p); }}
                  className={
                    `absolute -translate-x-1/2 -translate-y-1/2 rounded-full hover:scale-110 transition focus:outline-none focus:ring-2 ${size} ` +
                    (kindStyles[k]?.dot || kindStyles.lore.dot)
                  }
                  style={{ left: `${fx * 100}%`, top: `${fy * 100}%` }}
                  title={p.name}
                  aria-label={p.name}
                />
              );
            })}

            {/* Floating info card */}
            <Popover
              anchor={active ? anchor : null}
              onClose={() => { setActiveId(null); setAnchor(null); }}
            >
              {active && (() => {
                const k = (active.kind || "lore").toLowerCase();
                const barClass = kindStyles[k]?.bar || kindStyles.lore.bar;

                // If this is a continent “tag”, gather divisions & locations
                const isContinent = k === "continent";
                let divisions = [];
                let locations = [];

                if (isContinent) {
                  const allIn = mapPoints.filter((q) => {
                    if ((q.kind || "").toLowerCase() === "continent") return false;
                    return (getContinent(q) || "") === active.name;
                  });
                  const set = new Set(
                    allIn.map((q) => getDivision(q)).filter(Boolean)
                  );
                  divisions = Array.from(set).sort();
                  locations = allIn
                    .map((q) => q.name)
                    .filter(Boolean)
                    .sort()
                    .slice(0, 10);
                }

                return (
                  <>
                    {/* Header row with label + short accent bar */}
                    <div className="flex items-center gap-2">
                      <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">
                        {(isContinent ? "CONTINENT" : (active.kind || "lore").toUpperCase())}
                      </div>
                      <span className={`inline-block h-0.5 w-24 rounded ${barClass}`} aria-hidden />
                    </div>

                    {/* Title + location line */}
                    <h2 className="mt-1 text-lg font-bold">{active.name}</h2>
                    {!isContinent && active.region && (
                      <div className="text-sm text-neutral-300">Location: {active.region}</div>
                    )}

                    {/* Continent contents */}
                    {isContinent ? (
                      <>
                        {active.blurb && (
                          <p className="mt-2 text-sm text-neutral-200 leading-relaxed">
                            {active.blurb}
                          </p>
                        )}

                        {divisions.length > 0 && (
                          <>
                            <div className="mt-3 text-[11px] tracking-[0.3em] uppercase text-neutral-300">
                              Divisions
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {divisions.map((d) => (
                                <button
                                  key={d}
                                  className="text-xs px-2 py-0.5 rounded border border-white/20 hover:bg-white/10"
                                  onClick={() => setAreaFilter({ continent: active.name, division: d })}
                                >
                                  {d}
                                </button>
                              ))}
                            </div>
                          </>
                        )}

                        {locations.length > 0 && (
                          <>
                            <div className="mt-3 text-[11px] tracking-[0.3em] uppercase text-neutral-300">
                              Locations
                            </div>
                            <ul className="mt-1 text-sm text-neutral-200 list-disc list-inside space-y-0.5">
                              {locations.map((n) => <li key={n}>{n}</li>)}
                            </ul>
                          </>
                        )}

                        <div className="mt-3 flex gap-2">
                          <button
                            className="text-xs px-3 py-1 rounded border border-white/20 hover:bg-white/10"
                            onClick={() => setAreaFilter({ continent: active.name, division: null })}
                          >
                            Show only {active.name}
                          </button>
                          <button
                            className="text-xs px-3 py-1 rounded border border-white/20 hover:bg-white/10"
                            onClick={() => setAreaFilter({ continent: null, division: null })}
                          >
                            Clear region filter
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        {active.subtitle && (
                          <div className="text-emerald-300 text-sm">{active.subtitle}</div>
                        )}
                        <p className="mt-2 text-sm text-neutral-200 leading-relaxed">
                          {active.blurb || "No description yet."}
                        </p>

                        <div className="mt-3 flex gap-2">
                          {active.readHref && (
                            <a
                              href={active.readHref}
                              className="text-xs px-3 py-1 rounded border border-white/20 hover:bg-white/10"
                              target="_blank" rel="noreferrer"
                            >
                              Read
                            </a>
                          )}
                          {active.listenHref && (
                            <a
                              href={active.listenHref}
                              className="text-xs px-3 py-1 rounded border border-white/20 hover:bg-white/10"
                              target="_blank" rel="noreferrer"
                            >
                              Listen
                            </a>
                          )}
                          {active.watchHref && (
                            <a
                              href={active.watchHref}
                              className="text-xs px-3 py-1 rounded border border-white/20 hover:bg-white/10"
                              target="_blank" rel="noreferrer"
                            >
                              Watch
                            </a>
                          )}
                        </div>
                      </>
                    )}
                  </>
                );
              })()}
            </Popover>
          </div>
        </div>
      </main>
    </div>
  );
}