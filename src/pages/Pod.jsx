export default function Pod() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-24">
      <h1 className="text-3xl font-bold">POD — The COTU Podcast</h1>
      <p className="text-neutral-300 mt-2">
        Conversations with makers, touring stories, and behind-the-scenes.
      </p>

      <div className="mt-6 flex gap-3 text-sm">
        <a href="#" className="px-3 py-1 rounded border border-white/15 hover:bg-white/10">Apple</a>
        <a href="#" className="px-3 py-1 rounded border border-white/15 hover:bg-white/10">Spotify</a>
        <a href="#" className="px-3 py-1 rounded border border-white/15 hover:bg-white/10">RSS</a>
      </div>

      <section className="mt-8 space-y-4">
        <div className="rounded-xl border border-white/10 p-4 bg-white/5">
          <h2 className="font-semibold">Episode 1 — Why a Touring Circuit?</h2>
          <audio controls className="mt-2 w-full" src=""></audio>
        </div>
      </section>
    </main>
  );
}
