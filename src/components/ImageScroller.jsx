export default function ImageScroller({ items = [], onOpen }) {
  return (
    <div className="h-[70vh] overflow-y-auto pr-2 space-y-4 border-l border-white/10 pl-4">
      {items.map((p, i) => (
        <button
          key={i}
          onClick={() => onOpen?.(i)}
          className="block w-full text-left transform transition-transform hover:scale-[1.01] focus:scale-[1.01] focus:outline-none"
        >
          <div className="w-full aspect-[20/11] rounded-xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10">
            {p.thumb ? (
              <img src={p.thumb} className="w-full h-full object-cover" alt={p.title} />
            ) : (
              <div className="w-full h-full grid place-items-center text-neutral-500 text-xs">
                Placeholder /20:11
              </div>
            )}
          </div>
          <div className="mt-2 text-[10px] tracking-[0.25em] text-neutral-400 uppercase">
            {p.title}
          </div>
        </button>
      ))}
    </div>
  );
}
