// src/components/IntroVideoGate.jsx
import { useEffect, useRef, useState } from "react";

export default function IntroVideoGate({ src, poster, onDone }) {
  const ref = useRef(null);
  const [needTap, setNeedTap] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    // Some browsers block autoplay until play() is called; try immediately.
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // Show “tap to start” if autoplay is blocked
        setNeedTap(true);
      }
    };
    tryPlay();
  }, []);

  const handleUserStart = async () => {
    const v = ref.current;
    if (!v) return onDone?.();
    try {
      await v.play();
      setNeedTap(false);
    } catch {
      // If even user-start fails, just bail to the site.
      onDone?.();
    }
  };

  const handleSkip = () => onDone?.();

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black"
      onClick={handleUserStart}            // click anywhere passes through
      role="dialog"
      aria-label="Intro video"
    >
      <video
        ref={ref}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        muted
        playsInline
        preload="auto"
        autoPlay
        onEnded={handleSkip}
        onError={() => setFailed(true)}
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Controls layer (doesn't block click-anywhere-to-skip) */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleSkip(); }}
          className="rounded-md border border-white/30 bg-black/40 px-4 py-2 text-xs tracking-[0.2em] uppercase hover:bg-white/10"
        >
          Skip
        </button>
        {needTap && (
          <div className="text-xs text-white/80 tracking-widest">
            Tap to start
          </div>
        )}
        {failed && (
          <div className="text-xs text-red-300 tracking-widest">
            Video failed to load — skipping…
          </div>
        )}
      </div>
    </div>
  );
}
