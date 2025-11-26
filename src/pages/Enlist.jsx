// src/pages/Enlist.jsx
import { useState } from "react";

export default function Enlist() {
  const [toast, setToast] = useState(null);

  // Auditions form state
  const [aud, setAud] = useState({
    name: "",
    email: "",
    interest: "Performer",
    availability: "",
    notes: "",
  });

  // Volunteer form state
  const [vol, setVol] = useState({
    name: "",
    email: "",
    depts: {
      frontOfHouse: false,
      lighting: false,
      sound: false,
      setBuild: false,
      costumes: false,
      marketing: false,
    },
    availability: "",
  });

  // Newsletter form state
  const [newsEmail, setNewsEmail] = useState("");

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(null), 2400);
  }

  return (
    <div
      className="min-h-[120vh] p-6 md:p-10 relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url('/images/enlist-bg.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Sticky header */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-sm z-40 py-2">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-[0.15em] uppercase">
          ENLIST
        </h1>
        <p className="mt-1 text-sm text-emerald-300 tracking-widest">
          Auditions • Volunteer • Newsletter
        </p>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed left-1/2 top-6 -translate-x-1/2 z-50">
          <div className="rounded-lg border border-emerald-400/40 bg-black/70 backdrop-blur px-4 py-2 text-sm text-emerald-300">
            {toast}
          </div>
        </div>
      )}

      <main className="mx-auto max-w-6xl mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Auditions */}
        <section className="lg:col-span-2 rounded-2xl border border-white/12 bg-white/[0.06] backdrop-blur p-5">
          <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">
            Auditions
          </div>
          <h2 className="text-xl font-semibold mt-1">Join the cast</h2>

          <form
            className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              if (!aud.name || !aud.email)
                return showToast("Please add your name and email.");
              console.log("AUDITION SUBMIT", aud);
              setAud({
                name: "",
                email: "",
                interest: "Performer",
                availability: "",
                notes: "",
              });
              showToast("Audition request sent!");
            }}
          >
            <div>
              <label className="block text-xs text-neutral-400 mb-1">
                Name
              </label>
              <input
                className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-emerald-400/60"
                value={aud.name}
                onChange={(e) => setAud({ ...aud, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-xs text-neutral-400 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-emerald-400/60"
                value={aud.email}
                onChange={(e) => setAud({ ...aud, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-xs text-neutral-400 mb-1">
                Interest
              </label>
              <select
                className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-emerald-400/60"
                value={aud.interest}
                onChange={(e) => setAud({ ...aud, interest: e.target.value })}
              >
                <option>Performer</option>
                <option>Director</option>
                <option>Stage Management</option>
                <option>Design (Lights/Sound/Set/Costume)</option>
                <option>Fight/Intimacy</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-neutral-400 mb-1">
                Availability
              </label>
              <input
                className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-emerald-400/60"
                placeholder="Evenings, weekends, specific dates…"
                value={aud.availability}
                onChange={(e) => setAud({ ...aud, availability: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs text-neutral-400 mb-1">
                Notes
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-emerald-400/60"
                placeholder="Links to reel, resume, past work, pronouns, access needs…"
                value={aud.notes}
                onChange={(e) => setAud({ ...aud, notes: e.target.value })}
              />
            </div>
            <div className="md:col-span-2">
              <button className="pixel-btn rounded-sm">Submit Audition</button>
            </div>
          </form>
        </section>

        {/* Volunteer */}
        <section className="rounded-2xl border border-white/12 bg-white/[0.06] backdrop-blur p-5">
          <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">
            Volunteer
          </div>
          <h2 className="text-xl font-semibold mt-1">Help crew the mission</h2>

          <form
            className="mt-4 space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (!vol.name || !vol.email)
                return showToast("Please add your name and email.");
              console.log("VOLUNTEER SUBMIT", vol);
              setVol({
                name: "",
                email: "",
                depts: {
                  frontOfHouse: false,
                  lighting: false,
                  sound: false,
                  setBuild: false,
                  costumes: false,
                  marketing: false,
                },
                availability: "",
              });
              showToast("Volunteer interest sent!");
            }}
          >
            <div>
              <label className="block text-xs text-neutral-400 mb-1">
                Name
              </label>
              <input
                className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-emerald-400/60"
                value={vol.name}
                onChange={(e) => setVol({ ...vol, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-xs text-neutral-400 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-emerald-400/60"
                value={vol.email}
                onChange={(e) => setVol({ ...vol, email: e.target.value })}
                required
              />
            </div>

            <div className="pt-1">
              <div className="text-xs text-neutral-400 mb-2">Departments</div>
              {[
                ["frontOfHouse", "Front of House"],
                ["lighting", "Lighting"],
                ["sound", "Sound"],
                ["setBuild", "Set Build"],
                ["costumes", "Costumes"],
                ["marketing", "Marketing"],
              ].map(([key, label]) => (
                <label key={key} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="accent-emerald-400"
                    checked={vol.depts[key]}
                    onChange={(e) =>
                      setVol({
                        ...vol,
                        depts: { ...vol.depts, [key]: e.target.checked },
                      })
                    }
                  />
                  {label}
                </label>
              ))}
            </div>

            <div>
              <label className="block text-xs text-neutral-400 mb-1">
                Availability
              </label>
              <input
                className="w-full rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-emerald-400/60"
                placeholder="Evenings, weekends, strike days…"
                value={vol.availability}
                onChange={(e) => setVol({ ...vol, availability: e.target.value })}
              />
            </div>

            <button className="pixel-btn rounded-sm">Submit Volunteer</button>
          </form>
        </section>

        {/* Newsletter */}
        <section className="rounded-2xl border border-white/12 bg-white/[0.06] backdrop-blur p-5">
          <div className="text-[11px] tracking-[0.3em] uppercase text-neutral-300">
            Newsletter
          </div>
          <h2 className="text-xl font-semibold mt-1">Stay in the loop</h2>
          <form
            className="mt-4 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!newsEmail) return showToast("Add your email to subscribe.");
              console.log("NEWSLETTER SUBMIT", { email: newsEmail });
              setNewsEmail("");
              showToast("Subscribed to newsletter!");
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="you@galaxy.net"
              className="flex-1 rounded-lg bg-black/40 border border-white/15 px-3 py-2 outline-none focus:border-emerald-400/60"
              value={newsEmail}
              onChange={(e) => setNewsEmail(e.target.value)}
              required
            />
            <button className="pixel-btn rounded-sm">Subscribe</button>
          </form>
          <p className="mt-3 text-xs text-neutral-400">
            We’ll only send show announcements and major news. Unsubscribe
            anytime.
          </p>
        </section>
      </main>

      <div className="h-24" />
    </div>
  );
}
