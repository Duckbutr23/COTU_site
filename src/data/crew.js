// src/data/crew.js
export const crew = [
  {
    id: "ayla-starforge",
    name: "Ayla Starforge",
    role: "Cast",
    title: "Star Mage",
    class: "Arcane Navigator",
    faction: "COTU Expedition",
    avatar: "/crew/ayla.png",
    stats: { power: 8, tech: 6, charm: 9, grit: 7 },
    bio: "Ayla charts the unseeable routes of the Omniversal Leylines, guiding the company through storms of story and shadow. Known for her radiant stage presence and her ability to improvise entire acts from a single spark.",
    links: { ig: "#", site: "#" }
  },
  {
    id: "rex-ironbard",
    name: "Rex Ironbard",
    role: "Cast",
    title: "Bard-Engineer",
    class: "Harmonic Mechanist",
    faction: "Dock 23",
    avatar: "/crew/rex.png",
    stats: { power: 6, tech: 8, charm: 7, grit: 8 },
    bio: "Rex blends music and machinery, repairing engines in rhythm and leading songs in battle. A cornerstone of the crew's morale and a builder of improbable contraptions both on stage and off.",
    links: { ig: "#", site: "#" }
  },
  {
    id: "dr-quill",
    name: "Dr. Quill",
    role: "Crew",
    title: "Systems Alchemist",
    class: "Signalwright",
    faction: "Bridge Ops",
    avatar: "/crew/quill.png",
    stats: { power: 5, tech: 9, charm: 6, grit: 7 },
    bio: "An eccentric thinker who translates chaos into order. Dr. Quill maintains the company’s intricate signal systems, weaving alchemy, math, and theatre into living blueprints.",
    links: { ig: "#", site: "#" }
  },
  {
    id: "vera-hex",
    name: "Vera Hex",
    role: "Crew",
    title: "Runesmith of Light",
    class: "Optic Designer",
    faction: "Lab 7",
    avatar: "/crew/vera.png",
    stats: { power: 4, tech: 7, charm: 8, grit: 6 },
    bio: "Master of lighting illusions, Vera engraves runes into beams of light, shaping entire worlds of atmosphere. She is the quiet architect behind every spectacular reveal.",
    links: { ig: "#", site: "#" }
  },
  // ──────────────────────────────────────
  // NEW: Xavier Neuro
  // ──────────────────────────────────────
  {
  id: "xavier-neuro",                 // ← keep this slug for routing
  citizenCode: "010108-XGN۞",         // ← your Citizen Code (display-only)
  name: "Xavier Neuro",
  role: "Cast",
  title: "INTERGLACTIC PEACEKEEPER",
  class: "ASSHOLE",
  faction: "SHOW PLAYING NOW",
  avatar: "/crew/xavier.jpg",         // ensure file at /public/crew/xavier.jpg
  stats: { power: 7, tech: 9, charm: 7, grit: 9 },
  bio: "Maps thoughtscapes between stars and tunes minds for safe warp. On stage, Xavier blends precision with eerie calm, aligning the ensemble like constellations.",
  previousWorks: [
    "Ives in the Back of My Head",
    "Rosencrantz & Guildenstern are Dead",
    "The Tragedy",
    "Equus",
    "3/24: A 24 Hour Theatre Project",
    "Trainspotting",
    "Fight Club",
    "Night of the Living Dead",
    "GONZO: A Brutal Chrysalis",
    "Reservoir Dogs",
    "Uncle Vanya",
    "Trainspotting 2.0",
    "Princess Bride",
    "A Disturbance in Whitechapel",
    "Rosencrantz & Guildenstern are Dead 2.0",
    "Dr. Horrible's- Sing- Along- Blog",
    "Eternal Sunshine of the Spotless Mind",
    "Titus Andronicus",
    "Eternal Sunshine 2.0",
    "The BIG Lebowski",
    "The Merry Wives of Windsor",
    "Carolina Arts & Theatre Awards",
    "The End of the World Sampler Platter",
    "Love Conquers All: A Quiet Evening with Sid & Nancy"
  ],
  links: { ig: "#", site: "#" }
}

];

