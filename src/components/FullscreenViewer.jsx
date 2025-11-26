import { useEffect } from "react";

export default function FullscreenViewer({ open, project, onClose, onPrev, onNext }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm opacity-0 animate-[fadeIn_.2s_ease-out_forwards]">
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>

      <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
        <h1 className="text-sm tracking-[0.25em] text-neutral-300 uppercase">
          {project?.title}
        </h1>
        <button onClick={() => onClose?.()} className="text-xs px-3 py-1 border border-white/20 rounded hover:bg-white/10">
          Close
        </button>
      </div>

      <button onClick={() => onPrev?.()} className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl tracking-widest text-white/40 hover:text-white/80">
        G
      </button>
      <button onClick={() => onNext?.()} className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl tracking-widest text-white/40 hover:text-white/80">
        P
      </button>

      <div className="absolute inset-0 mt-20 pb-16 overflow-y-auto">
        <div className="mx-auto max-w-6xl space-y-6 px-4">
          {(project?.slides ?? [null, null, null]).map((src, i) => (
            <div key={i} className="w-full aspect-[16/9] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-white/10 overflow-hidden">
              {src ? (
                <img src={src} className="w-full h-full object-cover" alt="" />
              ) : (
                <div className="w-full h-full grid place-items-center text-neutral-500 text-xs">
                  Placeholder /16:9
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
