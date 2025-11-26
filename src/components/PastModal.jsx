import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PastModal({ open, show, onClose, onPrev, onNext }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] bg-[#050606]/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* chrome bar */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <div className="text-xs tracking-[0.35em] uppercase text-emerald-300/90">
              Archive Log
            </div>
            <div className="space-x-2">
              <button onClick={onPrev} className="text-xs px-3 py-1 border border-white/15 rounded hover:bg-white/10">◀ Prev</button>
              <button onClick={onNext} className="text-xs px-3 py-1 border border-white/15 rounded hover:bg-white/10">Next ▶</button>
              <button onClick={onClose} className="text-xs px-3 py-1 border border-white/15 rounded hover:bg-white/10">Close ✕</button>
            </div>
          </div>

          {/* body */}
          <div className="absolute inset-0 mt-16 pb-20 overflow-y-auto">
            <div className="mx-auto max-w-5xl px-6">
              {/* Poster */}
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-900">
                <div className="aspect-[16/9] w-full">
                  {show?.image ? (
                    <img src={show.image} alt={show?.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="grid h-full w-full place-items-center text-xs text-neutral-500">16:9 Placeholder</div>
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-extrabold tracking-wide">{show?.title}</h2>
                  <div className="mt-1 text-[11px] tracking-[0.35em] uppercase text-emerald-300/90">
                    {show?.year} • {show?.venue}
                  </div>
                  <p className="mt-4 text-neutral-300">{show?.blurb}</p>
                </div>
                <aside className="md:col-span-1">
                  <div className="rounded-xl border border-white/10 p-4 bg-black/30">
                    <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">Review</div>
                    <p className="mt-2 text-sm italic text-neutral-200">
                      {show?.review ?? "—"}
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>

          {/* CRT overlay + scanlines */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
               style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,.25) 0, rgba(255,255,255,.25) 1px, transparent 2px)" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
