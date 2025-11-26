// src/pages/ThePast.jsx
import { useMemo, useState } from "react";
import PastCard from "../components/PastCard";
import PastModal from "../components/PastModal";
import NavSpacer from "../components/NavSpacer";
import { pastShows } from "../data/past";

export default function ThePast() {
  const [openIndex, setOpenIndex] = useState(null);

  // Build list of years once
  const years = useMemo(() => {
    const unique = Array.from(new Set(pastShows.map((s) => s.year)));
    unique.sort((a, b) => b - a); // newest first
    return ["All", ...unique];
  }, []);

  const [activeYear, setActiveYear] = useState("All");

  const filtered =
    activeYear === "All" ? pastShows : pastShows.filter((s) => s.year === activeYear);

  const show = openIndex != null ? filtered[openIndex] : null;

  return (
    <div
      className="relative min-h-[120vh] px-6 md:px-10 pb-16 text-white overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.95)), url('/images/thepast-bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Leave navbar to App; just add top spacing so content isn't hidden */}
      <NavSpacer />

      {/* Sticky page header */}
      <div className="sticky top-0 z-40 py-2 bg-black/70 backdrop-blur-sm border-b border-white/10">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-[0.15em]">
          THE PAST
        </h1>
        <p className="mt-1 text-emerald-300 text-sm md:text-base tracking-widest animate-chyron">
          WELCOME TO THE ARCHIVES
        </p>
      </div>

      {/* Year filter row */}
      <div className="mx-auto max-w-6xl mt-4 flex flex-wrap gap-2">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => {
              setActiveYear(y);
              setOpenIndex(null);
            }}
            className={
              "text-xs px-3 py-1.5 rounded-md border transition " +
              (activeYear === y
                ? "border-white/30 bg-white/5"
                : "border-white/10 hover:bg-white/5 opacity-80")
            }
            aria-pressed={activeYear === y}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Grid of past shows (renders even if empty) */}
      <main className="mx-auto mt-6 max-w-6xl">
        {filtered.length === 0 ? (
          <div className="text-sm text-neutral-300">
            No shows yet for this year.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s, i) => (
              <PastCard
                key={s.id ?? `${s.title}-${i}`}
                show={s}
                onOpen={() => setOpenIndex(i)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Fullscreen modal */}
      <PastModal
        open={openIndex != null}
        show={show}
        onClose={() => setOpenIndex(null)}
        onPrev={() =>
          setOpenIndex((i) =>
            i == null ? 0 : (i - 1 + filtered.length) % filtered.length
          )
        }
        onNext={() =>
          setOpenIndex((i) =>
            i == null ? 0 : (i + 1) % filtered.length
          )
        }
      />
    </div>
  );
}
