// src/pages/Comix.jsx
import { Link } from "react-router-dom";

// 🔧 Add or edit your series & issues here.
const series = [
  {
  id: "buttblasters",
  name: "THE BUTT BLASTERS & PIGEON MAN POWER HOUR!",
  imprint: "Wonder Comics // Late Night",
  description:
    "A delirious, rocket-rear, bird-brained buddy comic. Ka-BOOM, coo, and repeat.",
  cover: "/images/comix/buttblasters-cover.jpg", // optional; drop a file here later
  issues: [
    {
      id: "buttblasters-1",
      title: "Issue #1: Pilot Episode",
      pages: 28,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/buttblasters-1.jpg"
    },
    {
      id: "buttblasters-2",
      title: "Issue #2: Bird Is The Word",
      pages: 32,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/buttblasters-2.jpg"
    },
    {
      id: "buttblasters-3",
      title: "Issue #3: Turbo to the Moon",
      pages: 30,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/buttblasters-3.jpg"
    }
  ]
},
  {

    
    id: "ehz",
    name: "Eye. Heart. Zombie.",
    imprint: "Wonder Comics",
    description:
      "A pulpy horror-comedy about love, brains, and questionable decisions.",
    cover: "/images/comix/ehz-cover.jpg", // optional
    issues: [
      {
        id: "ehz-1",
        title: "Issue #1",
        pages: 32,
        previewUrl: "#",
        buyUrl: "#",
        thumb: "/images/comix/ehz-1.jpg", // optional
      },
      {
        id: "ehz-2",
        title: "Issue #2",
        pages: 36,
        previewUrl: "#",
        buyUrl: "#",
        thumb: "/images/comix/ehz-2.jpg",
      },
      {
        id: "ehz-3",
        title: "Issue #3",
        pages: 32,
        previewUrl: "#",
        buyUrl: "#",
        thumb: "/images/comix/ehz-3.jpg",
      },
    ],
  },
  
  {
    id: "munchausen",
    name: "BARON MÜNCHHAUSEN",
    imprint: "Wonder Classics",
    description:
      "Tall tales, stranger truths. The Baron’s impossible adventures retold.",
    cover: "/images/comix/munchausen-cover.jpg",
    issues: [
      {
        id: "munchausen-1",
        title: "Issue #1: Cannon to the Moon",
        pages: 28,
        previewUrl: "#",
        buyUrl: "#",
        thumb: "/images/comix/munchausen-1.jpg",
      },
      // add more issues here…
      
    ],
  },

  {
  id: "frankenstein",
  name: "Frankenstein",
  imprint: "COTU Classics // Gothic Horror",
  description:
    "A faithful-but-cinematic adaptation of Mary Shelley’s masterpiece—stitched with new epistolary pages, lab schematics, and Arctic night terrors.",
  cover: "/images/comix/frankenstein-cover.jpg", // optional series cover
  issues: [
    {
      id: "frankenstein-1",
      title: "Issue #1: The Modern Prometheus",
      pages: 32,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/frankenstein-1.jpg"
    },
    {
      id: "frankenstein-2",
      title: "Issue #2: Stitch & Spark",
      pages: 30,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/frankenstein-2.jpg"
    },
    {
      id: "frankenstein-3",
      title: "Issue #3: The Pursuit",
      pages: 28,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/frankenstein-3.jpg"
    },
    {
      id: "frankenstein-4",
      title: "Issue #4: Arctic Reckoning",
      pages: 34,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/frankenstein-4.jpg"
    }
  ]
},
{
  id: "bathory",
  name: "Báthory",
  imprint: "Midnight Library // Historical Horror",
  description:
    "A lavish, blood-gothic series following Countess Erzsébet Báthory through rumor, record, and nightmare. Each issue braids trial transcripts, folk accounts, and hallucinatory visions to question what history chooses to remember.",
  cover: "/images/comix/bathory-cover.jpg",
  issues: [
    {
      id: "bathory-1",
      title: "Issue #1: The Countess’s Glass",
      pages: 32,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/bathory-1.jpg"
    },
    {
      id: "bathory-2",
      title: "Issue #2: Witnesses in Winter",
      pages: 32,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/bathory-2.jpg"
    },
    {
      id: "bathory-3",
      title: "Issue #3: The Brick and the Bell",
      pages: 36,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/bathory-3.jpg"
    }
  ],
  // optional tags for filtering
  tags: ["Horror", "Historical", "Gothic"]
},
{
  id: "art-of-war",
  name: "Art of War",
  imprint: "COTU Classics // Strategy Manga",
  description:
    "Sun Tzu’s maxims reimagined as a cinematic graphic manual—each chapter a tactical vignette with modern, historical, and mythic battleboards.",
  cover: "/images/comix/art-of-war-cover.jpg",
  issues: [
    {
      id: "art-of-war-1",
      title: "Issue #1: Laying Plans",
      pages: 28,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/art-of-war-1.jpg"
    },
    {
      id: "art-of-war-2",
      title: "Issue #2: Waging War",
      pages: 28,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/art-of-war-2.jpg"
    },
    {
      id: "art-of-war-3",
      title: "Issue #3: Attack by Stratagem",
      pages: 30,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/art-of-war-3.jpg"
    },
    {
      id: "art-of-war-4",
      title: "Issue #4: Tactical Dispositions",
      pages: 30,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/art-of-war-4.jpg"
    }
  ]
},
{
  id: "faust",
  name: "Faust",
  imprint: "COTU Classics // Gothic Tragedy",
  description:
    "A visually bold adaptation of Goethe’s legend—ink, neon, and cathedral shadows. Mephistopheles narrates in marginalia while deals are struck in split panels.",
  cover: "/images/comix/faust-cover.jpg",
  issues: [
    {
      id: "faust-1",
      title: "Issue #1: The Wager",
      pages: 32,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/faust-1.jpg"
    },
    {
      id: "faust-2",
      title: "Issue #2: Gretchen’s Room",
      pages: 30,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/faust-2.jpg"
    },
    {
      id: "faust-3",
      title: "Issue #3: Night & Blood",
      pages: 30,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/faust-3.jpg"
    },
    {
      id: "faust-4",
      title: "Issue #4: Redemption / Ruin",
      pages: 34,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/faust-4.jpg"
    }
  ]
},
{
  id: "hot-soup",
  name: "HOT SOUP",
  imprint: "COTU Zine // Mash-Up Anthology",
  description:
    "A print-format chaos mixer: micro-comics, collage stories, fake ads, and 2–6 page experiments. Think Liquid Television, but on paper.",
  cover: "/images/comix/hot-soup-cover.jpg",
  issues: [
    {
      id: "hot-soup-1",
      title: "Issue #1: Spoonful of Chaos",
      pages: 52,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/hot-soup-1.jpg"
    },
    {
      id: "hot-soup-2",
      title: "Issue #2: Broth & Static",
      pages: 56,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/hot-soup-2.jpg"
    },
    {
      id: "hot-soup-3",
      title: "Issue #3: Noodles of Fate",
      pages: 60,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/hot-soup-3.jpg"
    }
  ]
},
{
  id: "kitties-in-sunshine",
  name: "Kitties in Sunshine",
  imprint: "COTU Kids // Early Readers",
  description:
    "Gentle, word-light adventures of curious cats exploring big feelings and tiny mysteries. Cozy colors, read-aloud friendly.",
  cover: "/images/comix/kitties-cover.jpg",
  issues: [
    {
      id: "kitties-1",
      title: "Issue #1: The Warmest Window",
      pages: 24,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/kitties-1.jpg"
    },
    {
      id: "kitties-2",
      title: "Issue #2: Lost Ribbon Day",
      pages: 24,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/kitties-2.jpg"
    },
    {
      id: "kitties-3",
      title: "Issue #3: Picnic on the Roof",
      pages: 28,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/kitties-3.jpg"
    }
  ]
},
{
  id: "poofers-n-scales",
  name: "Poofers ’n Scales",
  imprint: "COTU Kids // Humor & Fantasy",
  description:
    "A tiny knight accidentally becomes the pet of a giant, kind-of-clumsy dragon. Reversals, giggles, and teamwork every issue.",
  cover: "/images/comix/poofers-cover.jpg",
  issues: [
    {
      id: "poofers-1",
      title: "Issue #1: Leash, Lute & Dragon Fruit",
      pages: 26,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/poofers-1.jpg"
    },
    {
      id: "poofers-2",
      title: "Issue #2: The Knight Who Fetched",
      pages: 26,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/poofers-2.jpg"
    },
    {
      id: "poofers-3",
      title: "Issue #3: Bath Time at Volcano Lake",
      pages: 28,
      previewUrl: "#",
      buyUrl: "#",
      thumb: "/images/comix/poofers-3.jpg"
    }
  ]
},

  // add more series objects here…



];

export default function Comix() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-24">
      <h1 className="text-3xl font-bold">COMIX — Wonder Comics</h1>
      <p className="text-neutral-300 mt-2">
        Our original comic line. Anthologies, one-shots, and ongoing series.
      </p>

      <div className="mt-10 space-y-10">
        {series.map((s) => (
          <section
            key={s.id}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6"
          >
            <header className="flex items-start gap-4">
              {s.cover ? (
                <img
                  src={s.cover}
                  alt=""
                  className="hidden md:block w-24 h-32 object-cover rounded-md border border-white/10"
                />
              ) : null}
              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-emerald-300">
                  {s.imprint || "Wonder Comics"}
                </div>
                <h2 className="text-2xl font-semibold mt-1">{s.name}</h2>
                {s.description && (
                  <p className="text-sm text-neutral-300 mt-1">{s.description}</p>
                )}
              </div>
            </header>

            {/* Issues grid */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.issues.map((issue) => (
                <article
                  key={issue.id}
                  className="rounded-xl border border-white/10 bg-black/40 p-4"
                >
                  <div className="flex items-start gap-3">
                    {issue.thumb ? (
                      <img
                        src={issue.thumb}
                        alt=""
                        className="w-16 h-24 object-cover rounded border border-white/10"
                      />
                    ) : null}
                    <div className="min-w-0">
                      <h3 className="font-semibold">{issue.title}</h3>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {issue.pages} pages • Digital & Print
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3 text-sm">
                    <a
                      href={issue.previewUrl}
                      className="px-3 py-1 rounded border border-white/15 hover:bg-white/10"
                    >
                      Preview
                    </a>
                    <a
                      href={issue.buyUrl}
                      className="px-3 py-1 rounded border border-white/15 hover:bg-white/10"
                    >
                      Buy
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Optional “All issues” link to a detail route you may add later */}
            <div className="mt-5">
              <Link
                to="#"
                className="text-xs tracking-widest uppercase text-emerald-300 hover:text-white"
              >
                View series guide →
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
