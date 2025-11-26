// src/pages/CrewQuarters.jsx
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { crew } from "../data/crew";
import PixelAvatar from "../components/PixelAvatar";
import StatBar from "../components/StatBar";

export default function CrewQuarters() {
  const { id } = useParams(); // slug, e.g., "xavier-neuro"
  const navigate = useNavigate();

  // Search (roster view only)
  const [q, setQ] = useState("");

  const idx = useMemo(() => crew.findIndex((p) => p.id === id), [id]);
  const person = idx >= 0 ? crew[idx] : null;

  // Filtered roster list (used only when !id)
  const roster = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return crew;
    return crew.filter((p) =>
      [p.name, p.role, p.title, p.class, p.faction, p.citizenCode]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(s))
    );
  }, [q]);

  // Scroll to top when changing dossiers
  useEffect(() => {
    if (id) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  // Keyboard shortcuts in dossier view
  useEffect(() => {
    if (!person) return;
    function onKey(e) {
      if (e.key === "Escape") navigate("/the-pub");
      if (e.key === "ArrowLeft")
        navigate(`/crew-quarters/${crew[(idx - 1 + crew.length) % crew.length].id}`);
      if (e.key === "ArrowRight")
        navigate(`/crew-quarters/${crew[(idx + 1) % crew.length].id}`);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [person, idx, navigate]);

  const Header = (
    <div className="sticky top-0 bg-black/70 backdrop-blur-sm z-40 py-2">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.15em] uppercase">
            CREW QUARTERS
          </h1>
          <p className="mt-1 text-sm text-emerald-300 tracking-widest">
            Dossier // Current Mission
          </p>
        </div>

        {/* Search (hidden on dossier view) */}
        {!id && (
          <div className="w-full max-w-md">
            <label htmlFor="crew-search" className="sr-only">Search</label>
            <div className="relative">
              <input
                id="crew-search"
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && roster.length > 0) {
                    navigate(`/crew-quarters/${roster[0].id}`);
                  }
                }}
                placeholder="Search name, role, title, class, faction…"
                className="w-full rounded-lg bg-black/80 border border-white/15 px-3 py-2 pr-9 outline-none focus:border-emerald-400/60"
              />
              <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-sm text-neutral-400">
                ⌘K
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative min-h-[120vh]">
{/* --- FIXED BACKGROUND GIF --- */}
<div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
  <img
    src="/images/crewquarters-bg.gif"
    alt=""
    className="w-full h-full object-cover select-none"
  />
</div>
{/* subtle dark tint to keep UI readable */}
<div className="fixed inset-0 bg-black/10 z-10 pointer-events-none" />


      {/* --- PAGE CONTENT --- */}
      <div className="relative z-20 p-6 md:p-10">
        {Header}

        {/* ----- ROSTER (no ID) ----- */}
        {!id && (
          <>
            {q ? (
              <p className="mt-4 text-neutral-300">
                Showing <span className="text-emerald-300">{roster.length}</span> result
                {roster.length === 1 ? "" : "s"} for <span className="text-neutral-100">“{q}”</span>.
              </p>
            ) : (
              <p className="mt-4 text-neutral-300">Select a profile to open their dossier.</p>
            )}

            {roster.length === 0 ? (
              <div className="mx-auto max-w-4xl mt-6 pixel-border rounded-sm bg-black/80 p-5">
                <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">
                  No Matches
                </div>
                <p className="mt-2 text-neutral-200">
                  Try a different name, role, or title—or clear the search.
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => setQ("")}
                    className="pixel-btn rounded-sm text-xs"
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            ) : (
              <div className="mx-auto max-w-6xl mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {roster.map((p) => (
                  <Link
                    key={p.id}
                    to={`/crew-quarters/${p.id}`}
                    className="pixel-border rounded-sm bg-black/90 p-4 hover:bg-white/5 transition block"
                    aria-label={`Open dossier for ${p.name}`}
                  >
                    <div className="flex items-center gap-4">
                      <PixelAvatar src={p.avatar} name={p.name} />
                      <div className="min-w-0">
                        <div className="text-xs text-neutral-400 uppercase tracking-widest">
                          {p.role} • {p.faction}
                        </div>
                        <div className="text-lg font-bold truncate">{p.name}</div>
                        <div className="text-sm leading-snug">
                          <div className="text-emerald-300 truncate">{p.title}</div>
                          <div className="text-fuchsia-300 truncate">{p.class}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

        {/* ----- INVALID ID (friendly fallback) ----- */}
        {id && !person && (
          <div className="mx-auto max-w-4xl mt-8 pixel-border rounded-sm bg-black/80 p-5">
            <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">Not Found</div>
            <p className="mt-2 text-neutral-200">
              We couldn’t find that dossier. It may have been reassigned to another mission.
            </p>
            <div className="mt-4">
              <Link to="/crew-quarters" className="pixel-btn rounded-sm text-xs">
                ← Back to Crew Roster
              </Link>
            </div>
          </div>
        )}

        {/* ----- DOSSIER (with valid ID) ----- */}
        {person && (
          <div className="mx-auto max-w-6xl mt-6">
            {/* Top controls */}
            <div className="flex items-center justify-between">
              <Link to="/the-pub" className="pixel-btn rounded-sm text-xs">
                ← Back to The Pub
              </Link>
              <div className="flex gap-2 text-xs">
                <button
                  className="pixel-btn rounded-sm"
                  onClick={() =>
                    navigate(`/crew-quarters/${crew[(idx - 1 + crew.length) % crew.length].id}`)
                  }
                  aria-label="Previous profile"
                >
                  ◀ Prev
                </button>
                <button
                  className="pixel-btn rounded-sm"
                  onClick={() => navigate(`/crew-quarters/${crew[(idx + 1) % crew.length].id}`)}
                  aria-label="Next profile"
                >
                  Next ▶
                </button>
              </div>
            </div>

            {/* Dossier panel */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Avatar / ID block */}
              <div className="pixel-border rounded-sm bg-black/90 p-5">
                <PixelAvatar src={person.avatar} name={person.name} />
                <div className="mt-4 text-xs uppercase tracking-widest text-neutral-400">
                  ID: {person.id} • {person.role}
                </div>
                {person.citizenCode && (
                  <div className="text-xs uppercase tracking-widest text-neutral-400">
                    Citizen Code: {person.citizenCode}
                  </div>
                )}
                <h2 className="mt-1 text-xl font-bold">{person.name}</h2>
                <div className="leading-snug">
                  <div className="text-emerald-300">{person.title}</div>
                  <div className="text-fuchsia-300">{person.class}</div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <StatBar label="POWER" value={person.stats?.power} />
                  <StatBar label="TECH" value={person.stats?.tech} />
                  <StatBar label="CHARM" value={person.stats?.charm} />
                  <StatBar label="GRIT" value={person.stats?.grit} />
                </div>

                <div className="mt-4 flex gap-2 text-xs">
                  {person.links?.site && (
                    <a
                      href={person.links.site}
                      className="pixel-btn rounded-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SITE
                    </a>
                  )}
                  {person.links?.ig && (
                    <a
                      href={person.links.ig}
                      className="pixel-btn rounded-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IG
                    </a>
                  )}
                </div>
              </div>

              {/* Bio / notes */}
              <div className="md:col-span-2 pixel-border rounded-sm bg-black/80 p-5">
                <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">
                  Personal Log
                </div>
                <p className="mt-2 text-neutral-200 leading-relaxed">
                  {person.bio || "No bio available yet."}
                </p>

                {/* Tour of Duty (previous works) */}
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

                {/* Gallery (optional) */}
                {person.gallery?.length > 0 && (
                  <>
                    <div className="mt-6 text-[11px] tracking-[0.3em] uppercase text-neutral-300">
                      Stills
                    </div>
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
                      {person.gallery.map((src, i) => (
                        <div
                          key={i}
                          className="aspect-[4/3] rounded-sm overflow-hidden pixel-border bg-black/80"
                        >
                          <img src={src} alt="" className="w-full h-full object-cover pixelate" />
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Mini roster (other crew) */}
            <div className="mt-8">
              <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300 mb-3">
                Other Profiles
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {crew
                  .filter((_, i) => i !== idx)
                  .map((p) => (
                    <Link
                      key={p.id}
                      to={`/crew-quarters/${p.id}`}
                      className="pixel-border rounded-sm bg-black/80 p-3 hover:bg-white/5 transition"
                      aria-label={`Open dossier for ${p.name}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12">
                          <PixelAvatar src={p.avatar} name={p.name} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-neutral-400 uppercase tracking-widest">
                            {p.role}
                          </div>
                          <div className="text-sm font-semibold truncate">{p.name}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
