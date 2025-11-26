export default function StatBar({ label, value = 0 }) {
  const v = Math.max(0, Math.min(10, Number(value) || 0));
  return (
    <div>
      <div className="text-[11px] tracking-widest text-neutral-400">{label}</div>
      <div className="mt-1 grid grid-cols-10 gap-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className={`h-2 rounded ${i < v ? "bg-emerald-400" : "bg-white/10"}`} />
        ))}
      </div>
    </div>
  );
}
