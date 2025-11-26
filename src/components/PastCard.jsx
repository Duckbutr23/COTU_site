export default function PastCard({ show, onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="group text-left relative overflow-hidden rounded-2xl border border-white/10 bg-black w-full hover:border-emerald-300/40 transition-colors"
    >
      {/* CRT scanlines */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-[0.08]"
           style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,.25) 0, rgba(255,255,255,.25) 1px, transparent 2px)" }} />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 shadow-[inset_0_0_80px_rgba(255,255,255,.08)]" />

      <div className="aspect-[16/9] w-full bg-gradient-to-br from-neutral-900 to-neutral-800">
        {show.image ? (
          <img src={show.image} alt={show.title}
               className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
        ) : (
          <div className="grid h-full w-full place-items-center text-xs text-neutral-500">16:9 Placeholder</div>
        )}
      </div>

      <div className="p-4">
        <div className="text-[10px] tracking-[0.35em] text-emerald-300/90 uppercase">
          {show.year} • {show.venue}
        </div>
        <h3 className="mt-1 text-lg font-semibold tracking-wide">{show.title}</h3>
        <p className="mt-2 text-sm text-neutral-300">{show.blurb}</p>
      </div>
    </button>
  );
}
