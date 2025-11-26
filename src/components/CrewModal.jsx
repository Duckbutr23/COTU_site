import { useEffect } from "react";
import { Link } from "react-router-dom";
import PixelAvatar from "./PixelAvatar";
import StatBar from "./StatBar";

export default function CrewModal({ open, person, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open || !person) return null;

  return (
    <div
      className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${person.name} dossier`}
    >
      <div
        className="
          relative mx-auto mt-[96px] mb-10 max-w-5xl w-[92vw]
          rounded-2xl border border-white/12 bg-black/70 backdrop-blur p-5 text-white
          max-h-[calc(100vh-160px)] overflow-y-auto
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">
              Dossier // {person.role}
            </div>
            <h2 className="text-2xl font-extrabold mt-1">{person.name}</h2>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/crew-quarters/${person.id}`}
              className="text-xs px-3 py-1 border border-white/20 rounded hover:bg-white/10"
            >
              Open in Crew Quarters ↗
            </Link>
            <button
              onClick={onClose}
              className="text-xs px-3 py-1 border border-white/20 rounded hover:bg-white/10"
            >
              Close (Esc)
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left rail */}
          <div className="border border-white/10 rounded bg-black/40 p-4">
            <PixelAvatar src={person.avatar} name={person.name} />
            <div className="mt-4 text-xs uppercase tracking-widest text-neutral-400">
              ID: {person.id} • {person.faction ?? "—"}
            </div>
            {person.citizenCode && (
              <div className="mt-1 text-xs uppercase tracking-widest text-neutral-400">
                Citizen Code: {person.citizenCode}
              </div>
            )}
          <div className="mt-1 leading-snug">
  <div className="text-emerald-300">{person.title}</div>
  <div className="text-fuchsia-300">{person.class}</div>
</div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <StatBar label="POWER" value={person.stats?.power} />
              <StatBar label="TECH" value={person.stats?.tech} />
              <StatBar label="CHARM" value={person.stats?.charm} />
              <StatBar label="GRIT" value={person.stats?.grit} />
            </div>

            {/* External links */}
            <div className="mt-4 flex gap-2 text-xs">
              {person.links?.site && (
                <a
                  href={person.links.site}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 border border-white/20 rounded hover:bg-white/10"
                >
                  SITE
                </a>
              )}
              {person.links?.ig && (
                <a
                  href={person.links.ig}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 border border-white/20 rounded hover:bg-white/10"
                >
                  IG
                </a>
              )}
            </div>
          </div>

          {/* Personal Log + Tour of Duty */}
          <div className="md:col-span-2 border border-white/10 rounded bg-black/40 p-4">
            <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">
              Personal Log
            </div>
            <p className="mt-2 text-neutral-200 leading-relaxed">
              {person.bio || "No bio available yet."}
            </p>

            {person.previousWorks?.length > 0 && (
              <>
                <div className="mt-6 text-[11px] tracking-[0.3em] uppercase text-neutral-300">
                  Tour of Duty
                </div>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-neutral-200 text-sm list-disc list-inside">
                  {person.previousWorks.map((title, i) => (
                    <li key={i}>{title}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Prev / Next */}
        <div className="absolute inset-y-0 left-0 right-0 pointer-events-none">
          <div className="h-full flex items-center justify-between">
            <button
              onClick={onPrev}
              className="pointer-events-auto ml-[-18px] md:ml-[-28px] text-2xl text-white/70 hover:text-white px-3 py-2"
              aria-label="Previous (←)"
              title="Previous (←)"
            >
              ◀
            </button>
            <button
              onClick={onNext}
              className="pointer-events-auto mr-[-18px] md:mr-[-28px] text-2xl text-white/70 hover:text-white px-3 py-2"
              aria-label="Next (→)"
              title="Next (→)"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
