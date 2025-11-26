// src/pages/ThePlan.jsx
export default function ThePlan() {
  return (
    <div
      className="min-h-[100vh] p-6 md:p-10 text-white"
      style={{
        backgroundImage: "url('/images/cotu-mark1.gif')",
        backgroundSize: "contain",      // shrink to fit, keeps logo crisp
        backgroundPosition: "right",   // sits behind the content
        backgroundRepeat: "no-repeat",
        backgroundSize: "15%",
        backgroundColor: "black",       // fill around the logo
      }}
    >
      <h1 className="text-3xl font-bold">The Plan</h1>
      <p className="text-neutral-300 mt-2 max-w-3xl">
        We’re rebuilding a coast-to-coast community theatre touring network. This page summarizes
        the model; detailed financials and governance live on the Transparency page.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-white/15 bg-neutral-900/60 p-4">
          <h2 className="font-semibold text-lg">Year 1: Atlantic Circuit</h2>
          <p className="text-neutral-300 mt-1">
            8 cities, modular touring, <em>Eye. Heart. Zombie.</em> as the inaugural production.
          </p>
        </div>
        <div className="rounded-xl border border-white/15 bg-neutral-900/60 p-4">
          <h2 className="font-semibold text-lg">Audience & Pricing</h2>
          <p className="text-neutral-300 mt-1">
            Accessible tickets ($15–$40). Target 60% capacity.
          </p>
        </div>
        <div className="rounded-xl border border-white/15 bg-neutral-900/60 p-4">
          <h2 className="font-semibold text-lg">Writers Exchange</h2>
          <p className="text-neutral-300 mt-1">
            A pipeline for local one-acts to tour the circuit.
          </p>
        </div>
        <div className="rounded-xl border border-white/15 bg-neutral-900/60 p-4">
          <h2 className="font-semibold text-lg">Expansion</h2>
          <p className="text-neutral-300 mt-1">
            Years 5–10: Pacific circuit and northern connector.
          </p>
        </div>
      </div>

      <a
        href="/transparency"
        className="inline-block mt-8 px-4 py-2 rounded border border-emerald-400/40 hover:bg-emerald-400/10"
      >
        View Transparency (Budgets, 501c3, Policies)
      </a>
    </div>
  );
}
