export default function Starfield() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* nebula backdrop */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(1000px 700px at 70% 20%, rgba(120,180,255,0.08), transparent 60%), radial-gradient(800px 600px at 25% 80%, rgba(0,255,200,0.06), transparent 60%), linear-gradient(#05060a, #07080b)",
        }}
      />
      {/* two parallax star layers */}
      <div
        className="star-layer slow z-10"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.8) 50%, transparent 51%), radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,.7) 50%, transparent 51%), radial-gradient(1.5px 1.5px at 80% 20%, rgba(255,255,255,.9) 50%, transparent 51%)",
        }}
      />
      <div
        className="star-layer fast z-10"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 15% 60%, rgba(255,255,255,.7) 50%, transparent 51%), radial-gradient(1px 1px at 75% 40%, rgba(255,255,255,.6) 50%, transparent 51%), radial-gradient(2px 2px at 45% 10%, rgba(255,255,255,.9) 50%, transparent 51%)",
        }}
      />
    </div>
  );
}
