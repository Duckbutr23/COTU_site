export default function Films() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-24">
      <h1 className="text-3xl font-bold">FILMS — Video & Docs</h1>
      <p className="text-neutral-300 mt-2">
        Trailers, shorts, and long-form docs from the road.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-white/10 p-5 bg-white/5">
          <h2 className="font-semibold">Eye. Heart. Zombie — Trailer</h2>
          <div className="aspect-video mt-3 rounded-lg overflow-hidden bg-black/50">
            {/* replace with your embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </article>
      </section>
    </main>
  );
}
