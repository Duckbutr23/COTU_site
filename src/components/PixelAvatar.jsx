export default function PixelAvatar({ src, name }) {
  const initials = (name ?? "?")
    .split(" ")
    .map((s) => s[0]?.toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <div className="relative w-24 h-24 md:w-28 md:h-28 border border-white/15 rounded bg-black/50 overflow-hidden grid place-items-center">
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-contain" />
      ) : (
        <div className="text-sm text-neutral-300">{initials}</div>
      )}
    </div>
  );
}
