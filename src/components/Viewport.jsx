export default function Viewport({ children }) {
  return (
    <div className="relative mx-auto w-full max-w-6xl aspect-[16/7]">
      {/* outer frame */}
      <div className="absolute -inset-4 rounded-[2.2rem] bg-black/40 backdrop-blur-md border border-white/10" />
      <div className="absolute inset-0 rounded-[1.6rem] overflow-hidden border border-white/15 shadow-[0_0_40px_rgba(0,0,0,0.6),inset_0_0_60px_rgba(255,255,255,0.06)]">
        {children}
      </div>
      {/* subtle bolts */}
      <div className="absolute left-6 top-6 h-2 w-2 rounded-full bg-white/40" />
      <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-white/40" />
      <div className="absolute left-6 bottom-6 h-2 w-2 rounded-full bg-white/40" />
      <div className="absolute right-6 bottom-6 h-2 w-2 rounded-full bg-white/40" />
    </div>
  );
}
