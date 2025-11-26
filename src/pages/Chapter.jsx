import NavSpacer from "../components/NavSpacer";
import { useParams, Link, Navigate } from "react-router-dom";
import { chapters } from "../data/chapters";

export default function Chapter() {
  const { slug } = useParams();
  const chap = chapters.find((c) => c.slug === slug);

  if (!chap) return <Navigate to="/read" replace />;

  // Split the main prose into paragraphs on blank lines
  const paragraphs = chap.content
    .trim()
    .split(/\n\s*\n/)
    .map((p, i) => <p key={i} className="leading-7 text-neutral-200">{p.trim()}</p>);

  return (
    <div className="min-h-[100vh] px-6 md:px-10 pb-16">
      <NavSpacer />

      <header className="sticky top-0 z-40 py-2 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="text-xs text-emerald-300 uppercase tracking-widest">
          {chap.book}
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide mt-1">
          {chap.title}
        </h1>
        {chap.dateline && (
          <div className="mt-1 text-neutral-300 tracking-widest">{chap.dateline}</div>
        )}
      </header>

      <main className="mx-auto max-w-3xl mt-6 space-y-5">
        <article className="rounded-xl border border-white/10 bg-black/60 backdrop-blur p-5 space-y-4">
          {paragraphs}
        </article>

        {chap.logContent && (
          <section className="rounded-xl border border-white/10 bg-black/60 backdrop-blur p-5">
            <h3 className="text-sm uppercase tracking-widest text-emerald-300">
              {chap.logTitle}
            </h3>
            <pre className="mt-3 whitespace-pre-wrap font-mono text-[13px] leading-6 text-neutral-200">
{chap.logContent.trim()}
            </pre>
          </section>
        )}

        <div className="mt-6">
          <Link to="/read" className="text-emerald-300 underline underline-offset-4">
            ← Back to Read
          </Link>
        </div>
      </main>
    </div>
  );
}
