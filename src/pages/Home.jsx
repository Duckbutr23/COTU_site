// src/pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import SectionCard from "../components/SectionCard";
import ImageScroller from "../components/ImageScroller";
import FullscreenViewer from "../components/FullscreenViewer";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import RotatingTransmission from "../components/RotatingTransmission";

const CARD_HEIGHT = 130;

/* ---------------- About Modal ---------------- */
function AboutModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-title"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative z-10 w-[min(680px,92vw)] rounded-2xl border border-white/15 bg-neutral-950/95 shadow-[0_0_80px_rgba(0,250,180,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-emerald-400/20" />
        <div className="border-b border-white/10 px-5 py-3 flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_4px_rgba(16,185,129,.55)]" />
          <h2 id="about-title" className="text-sm tracking-[0.25em] uppercase text-neutral-200">
            About Citizens of the Universe
          </h2>
          <button
            onClick={onClose}
            className="ml-auto text-xs px-2 py-1 rounded border border-white/15 hover:bg-white/10"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="px-6 py-5 text-[13px] leading-relaxed text-neutral-200 space-y-3">
          <p>
            <strong>Citizens of the Universe</strong> is powered by <strong>Stage One, Inc.</strong> — a
            non-profit 501(c)(3). <span className="opacity-80">[EIN #: 56-1922771]</span>
          </p>
          <p>
            We are a proud member of the Metropolitan Arts Council, the CL Syndicate, Maryland State Arts
            Council, and we support the Metrolina Theatre Association.
          </p>
          <p>
            Our goal is to bring new talent and audiences to our local community, and to give opportunities
            for existing talents to showcase their work while increasing skill sets.
          </p>
          <p className="text-neutral-400">© 2001–2026 Citizens of the Universe. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Page ---------------- */
export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const project = openIndex != null ? projects[openIndex] : null;

  const vidRef = useRef(null);

  // Try autoplay immediately, then retry on first user interaction (some browsers demand a gesture)
  useEffect(() => {
    const v = vidRef.current;
    if (!v) return;

    v.muted = true; // must be true before calling play()
    const tryPlay = () => {
      const p = v.play?.();
      if (p && typeof p.then === "function") {
        p.catch(() => {
          // ignore; we'll try again on interaction
        });
      }
    };

    // respect reduced motion
    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!media?.matches) tryPlay();

    const onInteract = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
    window.addEventListener("pointerdown", onInteract);
    window.addEventListener("keydown", onInteract);

    return () => {
      window.removeEventListener("pointerdown", onInteract);
      window.removeEventListener("keydown", onInteract);
    };
  }, []);

  return (
    <div className="min-h-[120vh] text-white relative">
      {/* --- Background VIDEO --- */}
      <video
        ref={vidRef}
        className="fixed inset-0 z-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/starbase_poster.jpg"
        onLoadedData={() => {
          // a second attempt once the buffer is ready
          vidRef.current?.play?.().catch(() => {});
        }}
        aria-hidden="true"
      >
        {/* cache-busters help during dev when files change */}
        <source src="/video/starbase_bg.webm?v=1" type="video/webm" />
        <source src="/video/starbase_bg.mp4?v=1" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div
        className="fixed inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 800px at 70% -10%, rgba(0,0,0,0.35), transparent 70%), " +
            "radial-gradient(800px 500px at 10% 110%, rgba(0,0,0,0.25), transparent 60%), " +
            "linear-gradient(rgba(10,10,10,0.70), rgba(10,10,10,0.85))",
        }}
      />
      <div
        className="fixed inset-0 z-20 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Content */}
      <main className="relative z-30 p-6 md:p-8">
        <div className="flex items-center gap-3">
          <img
            src="/brand/cotu-mark.png"
            alt="COTU mark"
            className="h-8 w-auto select-none pointer-events-none"
            draggable="false"
          />
          <h1 className="text-3xl font-bold">Starbase 23</h1>
        </div>

        <RotatingTransmission />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <section className="md:col-span-8 space-y-6">
<SectionCard
  title="Next Transmission"
  glow="emerald"
  minHeight={160}
  bgImage="/textures/soft-grid.avif"
  bgOpacity={0.125}
  bgSize="520px"
>
  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
    {/* left: blurb */}
    <p className="text-neutral-200">
      [EYE. HEART. ZOMBIE.] — touring soon!
    </p>

<div className="grid grid-cols-2 gap-3 w-full md:w-[420px] md:shrink-0">
  <Link
    to="#"
    className="px-4 py-3 text-sm font-semibold text-white/90 rounded-xl border border-emerald-400/50 bg-emerald-400/15 hover:bg-emerald-400/25 shadow-[0_0_20px_rgba(16,185,129,.25)] transition"
  >
    New Ship 23!
  </Link>

  <Link
    to="#"
    className="px-4 py-3 text-sm font-semibold text-white/90 rounded-xl border border-fuchsia-400/50 bg-fuchsia-400/15 hover:bg-fuchsia-400/25 shadow-[0_0_20px_rgba(217,70,239,.25)] transition"
  >
    New Comics!
  </Link>

  <Link
    to="#"
    className="px-4 py-3 text-sm font-semibold text-white/90 rounded-xl border border-cyan-400/50 bg-cyan-400/15 hover:bg-cyan-400/25 shadow-[0_0_20px_rgba(34,211,238,.25)] transition"
  >
    New Video!
  </Link>

  <Link
    to="#"
    className="px-4 py-3 text-sm font-semibold text-white/90 rounded-xl border border-amber-400/50 bg-amber-400/15 hover:bg-amber-400/25 shadow-[0_0_20px_rgba(251,191,36,.25)] transition"
  >
    News!
  </Link>
</div>

  </div>
</SectionCard>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SectionCard
                title="Donate"
                glow="fuchsia"
                minHeight={CARD_HEIGHT}
                bgImage="/textures/soft-grid.avif"
                bgOpacity={0.125}
                bgSize="520px"
                cta={{ href: "/enlist", label: "Power the Core" }}
              >
                Fuel new missions with a tax-deductible contribution.
              </SectionCard>

              <SectionCard
                title="Volunteer"
                glow="cyan"
                minHeight={CARD_HEIGHT}
                bgImage="/textures/soft-grid.avif"
                bgOpacity={0.125}
                bgSize="520px"
                cta={{ href: "/crew-quarters", label: "Join the Crew" }}
              >
                Build, run, and conjure—we always need brilliant hands and minds.
              </SectionCard>

              <SectionCard
                title="Friends of COTU"
                glow="amber"
                minHeight={CARD_HEIGHT}
                bgImage="/textures/soft-grid.avif"
                bgOpacity={0.125}
                bgSize="520px"
                cta={{ href: "/the-past", label: "Allies & Partners" }}
              >
                A constellation of collaborators across venues and cities. ***CURRENTLY UPDATING***
              </SectionCard>

              <SectionCard
                title="Contact"
                glow="violet"
                minHeight={CARD_HEIGHT}
                bgImage="/textures/soft-grid.avif"
                bgOpacity={0.125}
                bgSize="520px"
                cta={{ href: "/enlist", label: "Open Channel" }}
              >
                Send a transmission. We’ll reply at FTL speed.
              </SectionCard>
            </div>
          </section>

          <aside className="md:col-span-4">
            <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300 mb-3">
              Featured Missions
            </div>
            <ImageScroller items={projects} onOpen={(i) => setOpenIndex(i)} />
          </aside>
        </div>

        <FullscreenViewer
          open={openIndex != null}
          project={project}
          onClose={() => setOpenIndex(null)}
          onPrev={() =>
            setOpenIndex((i) => (i == null ? 0 : (i - 1 + projects.length) % projects.length))
          }
          onNext={() => setOpenIndex((i) => (i == null ? 0 : (i + 1) % projects.length))}
        />

        {/* About */}
        <button
          onClick={() => setAboutOpen(true)}
          className="fixed bottom-4 left-4 z-40 text-xs px-3 py-1.5 rounded-md border border-white/20 bg-black/40 hover:bg-white/10 backdrop-blur-sm"
          aria-label="About Citizens of the Universe"
        >
          About
        </button>
        <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />

        <div className="h-24" />
      </main>
    </div>
  );
}
