// src/pages/ThePub.jsx
import { useMemo, useState } from "react";
import { crew } from "../data/crew";
import PixelCard from "../components/PixelCard";
import CrewModal from "../components/CrewModal";

export default function ThePub() {
  const [filter, setFilter] = useState("All");       // All | Cast | Crew
  const [openIndex, setOpenIndex] = useState(null);  // which card is open in modal

  const filtered = useMemo(
    () => (filter === "All" ? crew : crew.filter((p) => p.role === filter)),
    [filter]
  );

  const openPerson = openIndex != null ? filtered[openIndex] : null;

  return (
    <div className="relative min-h-[120vh]">
      {/* --- FIXED BACKGROUND VIDEO (z-0) --- */}
      <video
        src="/pixelnightclub_2.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/"  // optional still
        className="fixed inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlays */}
      <div className="fixed inset-0 bg-black/0 z-10 pointer-events-none" />
      <div className="fixed inset-0 z-10 pub-bg opacity-20 pointer-events-none" />

      {/* --- STICKY LEFT TITLE --- */}
      <div className="sticky top-0 z-30">
        <div className="pl-4 md:pl-6 pt-3">
          <div className="inline-block rounded-xl border border-white/10 bg-black/80 backdrop-blur-sm px-3 py-2">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.15em] uppercase">
              THE PUB
            </h1>
            <p className="mt-0.5 pixel-font text-[10px] tracking-[0.3em] text-neutral-300 uppercase">
              Cantina & Crew Roster
            </p>
          </div>
        </div>
      </div>

      {/* --- PAGE CONTENT --- */}
      <div className="relative z-20 p-6 md:p-10">
        {/* Filters — right-justified inside the same max width as the grid */}
        <div className="mx-auto max-w-6xl mt-2 flex justify-end gap-2">
          {["All", "Cast", "Crew"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`pixel-btn rounded-sm text-xs tracking-widest ${
                filter === tab ? "border-emerald-300 text-emerald-300" : "text-neutral-200"
              }`}
              aria-pressed={filter === tab}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid — click a card to open modal (NO <Link> here) */}
        <main className="mx-auto max-w-6xl mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              role="button"
              tabIndex={0}
              onClick={() => setOpenIndex(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setOpenIndex(i);
              }}
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-xl"
            >
              <PixelCard person={p} />
            </div>
          ))}
        </main>

        {/* Modal — dossier overlay */}
        <CrewModal
          open={openIndex != null}
          person={openPerson}
          onClose={() => setOpenIndex(null)}
          onPrev={() =>
            setOpenIndex((i) => (i == null ? 0 : (i - 1 + filtered.length) % filtered.length))
          }
          onNext={() =>
            setOpenIndex((i) => (i == null ? 0 : (i + 1) % filtered.length))
          }
        />

        {/* Footer */}
        <footer className="mx-auto max-w-6xl mt-8 px-mono text-neutral-300 text-sm">
          <div className="pixel-border rounded-sm bg-black/35 backdrop-blur-[2px] p-4">
            Tip: press <span className="text-emerald-300">UP, UP, DOWN, DOWN</span> at the bar
            to unlock a secret drink. (Coming soon!)
          </div>
        </footer>

        <div className="h-24" />
      </div>
    </div>
  );
}
