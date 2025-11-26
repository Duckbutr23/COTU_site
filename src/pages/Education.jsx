export default function Education() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-24">
      <h1 className="text-3xl font-bold">EDUCATION — Workshops & Books</h1>
      <p className="text-neutral-300 mt-2">
        Training for community theaters: producing, tech, acting, and writing.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-3">
        <article className="rounded-xl border border-white/10 p-5 bg-white/5">
          <h2 className="font-semibold">Touring on a Budget</h2>
          <p className="text-sm text-neutral-300 mt-1">One-day intensive workshop.</p>
          <a href="#" className="inline-block mt-3 px-3 py-1 rounded border border-white/15 hover:bg-white/10 text-sm">
            Request this workshop
          </a>
        </article>

        <article className="rounded-xl border border-white/10 p-5 bg-white/5">
          <h2 className="font-semibold">Stage Management Templates</h2>
          <p className="text-sm text-neutral-300 mt-1">Downloadable toolkit.</p>
          <a href="#" className="inline-block mt-3 px-3 py-1 rounded border border-white/15 hover:bg-white/10 text-sm">
            Download
          </a>
        </article>
      </section>
    </main>
  );
}
