import NavSpacer from "../components/NavSpacer";
import { Link } from "react-router-dom";
import { chapters } from "../data/chapters";

export default function Read() {
  return (
    <div className="min-h-[100vh] px-6 md:px-10 pb-16">
      <NavSpacer />

      <header className="sticky top-0 z-40 py-2 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.15em] uppercase">
          Read
        </h1>
        <p className="mt-1 text-neutral-300 tracking-widest">
          Book excerpts, chapters, and teasers.
        </p>
      </header>

      <main className="mx-auto max-w-5xl mt-6 grid gap-4">
        {chapters.map((c) => (
          <Link
            key={c.slug}
            to={`/read/${c.slug}`}
            className="rounded-xl border border-white/10 bg-black/60 backdrop-blur p-5 hover:bg-white/[0.06] transition"
          >
            <div className="text-xs text-emerald-300 uppercase tracking-widest">
              {c.book}
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mt-1">{c.title}</h2>
            {c.dateline && (
              <div className="mt-1 text-sm text-neutral-300">{c.dateline}</div>
            )}
          </Link>
        ))}
      </main>
    </div>
  );
}
