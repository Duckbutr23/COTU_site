import { useState } from "react";
import Starfield from "../components/Starfield";
import Viewport from "../components/Viewport";

export default function TheFuture() {
  const [hudTab, setHudTab] = useState("nav"); // nav | mission | systems

  return (
    <div className="min-h-[120vh] relative p-6 md:p-10">
      {/* background: stars + nebula */}
      <Starfield />

      {/* everything above the stars */}
      <div className="relative z-10">
        {/* sticky page header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-sm z-40 py-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.15em] uppercase">
            THE FUTURE
          </h1>
          <p className="mt-1 text-sm text-neutral-400 tracking-widest">
            Command Deck // Forward Visual Array // Sector 23
          </p>
        </div>

        {/* main viewport */}
        <Viewport>
          {/* galaxy view */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(900px 500px at 65% 40%, rgba(140,190,255,0.22), transparent 60%), radial-gradient(600px 400px at 20% 70%, rgba(0,255,200,0.18), transparent 60%)",
              }}
            />
            {/* distant galaxy “core” */}
            <div
              className="absolute left-[60%] top-[42%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-70"
              style={{
                animation: "coreDrift 18s ease-in-out infinite",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(120,170,255,0.3) 40%, transparent 70%)",
              }}
            />
          </div>

          {/* HUD overlays */}
          <div className="absolute left-0 right-0 top-0 p-4 flex items-center justify-between">
            <div className="text-[10px] tracking-[0.3em] uppercase text-neutral-300">
              Forward Array • Online
            </div>
            <div className="flex gap-2 text-xs">
              {["nav", "mission", "systems"].map((t) => (
                <button
                  key={t}
                  onClick={() => setHudTab(t)}
                  className={`px-3 py-1 rounded border ${
                    hudTab === t
                      ? "border-emerald-300/50 text-emerald-300"
                      : "border-white/15 text-neutral-300 hover:bg-white/5"
                  }`}
                >
                  {t.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* bottom HUD bar */}
          <div className="absolute left-0 right-0 bottom-0 p-4">
            <div className="rounded-xl border border-white/10 bg-black/35 backdrop-blur-md p-4">
              {hudTab === "nav" && (
                <div className="text-sm text-neutral-200">
                  Vector: <span className="text-neutral-400">Aquila Spur</span> •{" "}
                  Warp Window: <span className="text-neutral-400">T+03:17</span> •{" "}
                  Drift: <span className="text-neutral-400">0.02%</span>
                </div>
              )}
              {hudTab === "mission" && (
                <div className="text-sm text-neutral-200">
                  Next Operation:{" "}
                  <span className="text-neutral-400">STARBASE TRANSMISSION LIVE</span>{" "}
                  — Standby for orders and crew assignments.
                </div>
              )}
              {hudTab === "systems" && (
                <div className="text-sm text-neutral-200">
                  Shields <span className="text-emerald-300">98%</span> • Life Support{" "}
                  <span className="text-emerald-300">Nominal</span> • Power{" "}
                  <span className="text-emerald-300">Stable</span>
                </div>
              )}
            </div>
          </div>
        </Viewport>

        {/* callouts under viewport */}
        <section className="mx-auto mt-8 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
            <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">
              Next Mission
            </div>
            <div className="mt-2 text-sm text-neutral-200">
              Title TBD — add teaser or countdown here.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
            <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">
              Broadcast Link
            </div>
            <div className="mt-2 text-sm text-neutral-200">
              Placeholder for livestream / trailer.
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
            <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">
              Crew Roster
            </div>
            <div className="mt-2 text-sm text-neutral-200">
              Hook into CREW QUARTERS data later.
            </div>
          </div>
        </section>

        <div className="h-24" />
      </div>
    </div>
  );
}
