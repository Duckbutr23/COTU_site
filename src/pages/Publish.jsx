export default function Publish() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-24">
      <h1 className="text-3xl font-bold">PUBLISH — COTU Press</h1>
      <p className="text-neutral-300 mt-2">
        Scripts, anthologies, and nonfiction from the circuit.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-white/10 p-5 bg-white/5">
          <h2 className="font-semibold">Eye. Heart. Zombie — Script</h2>
          <p className="text-sm text-neutral-300 mt-1">Paperback & PDF.</p>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="#" className="px-3 py-1 rounded border border-white/15 hover:bg-white/10">Buy</a>
            <a href="#" className="px-3 py-1 rounded border border-white/15 hover:bg-white/10">Sample</a>
          </div>
        </article>
      </section>
    </main>
  );
}
