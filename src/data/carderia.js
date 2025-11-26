// src/data/carderia.js
// Coordinates may be given as 0–100 (percent) OR 0–1 (fraction).
// kind: "history" (blue) | "lore" (violet) | "region" (amber) | "chapter" (rose)

export const mapPoints = [
  {
    id: "lets-begin",
    name: "Welcome to Cárderia",
    x: 9.9,
    y: 5,
    kind: "history",          // blue dot
    region: "Real World",
    blurb: `Personal history with this world…

I’ve been working on Cárderia for a very long time. I actually wrote a story in 1988 (7th grade!) and, while I wasn’t much of a writer then, I *was* already building this world on reams of notebook paper.

I didn’t play D&D, but I had the Dungeons & Dragons Computer Labyrinth and a BECMI box my mom found at a yard sale. She was the queen of yard sales—most of my Legos and toys came from those... and she also fed a reading habit with Childcraft, animal encyclopedias, and a hand-me-down set of 1969 World Book plus the Harvard Classics. I may not have fully understood Plato’s *Republic*, but I read it. I devoured religious texts, space fact cards, rocks, stamps, coins, flowers... *collections* were my thing.

Instead of comics (those came later) I was obsessed with choose-your-own-adventure books. That feeling of picking a path made me start mapping in ’86. In 6th grade I drew map after map—so much that it became a classroom problem until my science teacher, Mrs. Griffith, said “use the maps as notes.” That flipped a switch. Different continents for different subjects. Friends became leaders; daily life echoed across the map. Some kids kept journals... I made maps.

The first story featured an orphan boy who found a dying spy on the western coast of Magnumund. The spy carried plans for Danngarr “Deathships,” to be delivered to the Elf King in Greyhawk (pure coincidence with D&D). The pouch was magically bonded to the carrier; as the spy died, he transferred it to the boy. Pursuit followed across islands and tribes... the Norcom Amazons, pirate betrayals, the rising city of Duma. I never finished it then, but I always knew he’d reach the king and earn a ship, leading to a sea-bound sequel.

Years later I found those pages again and started what we’re working on now.

Welcome to Cárderia.`,
  },

  // ───────── Existing examples (tweak coords freely) ─────────
  {
    id: "wade",
    name: "Wade",
    x: 53,
    y: 85,
    kind: "region",           // amber dot (you asked to make Wade a region pin)
    region: "Lower Duras of Duras",
    blurb: `A shipping power of the southern seas, long protected by chain walls. Taverns are world-renowned for every indulgence. The Dead Horse Inn is infamous as the 'worst pub on the planet.'`,
  },

  {
    id: "niin",
    name: "Ninondiad",
    x: 78,
    y: 51.5,
    kind: "region",
    region: "Rohhor of Duras",
    blurb: `Niin rules Dian, the island’s largest city. Hedonism, smuggling, and Infernos tech drive a market where anything goes… nothing’s free.`,
  },

  // example continent “tag” for Duras
  {
    id: "continent-duras",
    name: "Duras",
    kind: "continent",
    x: 55.5,   // use your existing 0–100 coordinate style
    y: 43,
    blurb: "Primary continental mass of Carderia."
  },

  // ───────── Duras divisions (division “region” pins) ─────────
  // TIP: keep `region: "<Division> of Duras"` so the UI can derive:
  //   • continent = "Duras"
  //   • division  = "<Division>"

  {
    id: "div-durin",
    name: "Durin",
    x: 49, y: 44,
    kind: "region",
    region: "Durin of Duras",
    blurb: "The world's breadbasket... crossroads, caravans, and waystations dot the largest part of this land mass filled with fertile plains. Ruled by the family who most say won the Danngarr War, they were tasked with helping the Fleet in protecting these lands during the Crossing."
  },
  {
    id: "div-mid-duras",
    name: "Mid Duras",
    x: 42, y: 50,
    kind: "region",
    region: "Mid Duras of Duras",
    blurb: "Completely under the rule of the Danngarr, skirmishes still riddled the seas here. With the dark magic whirlpool shutting off shipping to the north, all east/west shipping must now flow far north/south of the islands of Kingsland and Anndale. Both of whom are the seat of the first civilizations of Elves. "
  },
  {
    id: "div-ambrosum",
    name: "Ambrosum",
    x: 65, y: 43,
    kind: "region",
    region: "Ambrosum of Duras",
    blurb: `The main island is home to the infamous 'Nightmare Gate'. Creatures of unknown origin make the island uninhabitable. Any nearby island and any mainland city are tasked with keeping any creatures from this land at bay.`
  },
  {
    id: "dor",
    name: "The Kingdoms of Dor",
    x: 71,
    y: 53.5,
    kind: "region",
    region: "Dor of Duras",
    blurb: `Five kingdoms in constant war control the southern and east-west lanes of the Vorlic Ocean. Merchant nexus and deadly political hotbed; whispers of Kaiin arbitration persist.`
    // readHref: "/book/cardia/por-ch1.pdf",
    // listenHref: "/podcast/cardia/por-ep1.mp3",
    // watchHref: "https://youtube.com/…",
  },
  {
    id: "div-rohhor",
    name: "Rohhor",
    x: 75, y: 44.8,
    kind: "region",
    region: "Rohhor of Duras",
    blurb: "Rohhor contains the island confederacies of Chame (also a capital of the biggest island), and the territory of Niin and his Infernos Army."
  },
  {
    id: "div-upper-duras",
    name: "Upper Duras",
    x: 81.8, y: 54,
    kind: "region",
    region: "Upper Duras of Duras",
    blurb: `High plateaus, old fort lines, and vast grain fields surround poor kingdoms slowly being overrun by Queen Delmorda. 'The Great Glass Desert' and the 'Ladder of Greyhawk' are found here.`
  },
  {
    id: "div-sica",
    name: "Sica",
    x: 93.2, y: 60,
    kind: "region",
    region: "Sica of Duras",
    blurb: `A collection of island nations. There are numerous Knife-coast fishing towns and storm harbors. Sailors’ lore runs deep here as the eastern seas beyond slowly turn into a great frozen expanse. This is also the home of a forbidden island inhabited by a race of robots.`
  },
  {
    id: "div-hampton",
    name: "Hampton",
    x: 49.6, y: 90,
    kind: "region",
    region: "Hampton of Duras",
    blurb: "Canal cities, shipwright guilds, warm-water ports, chain-walled harbors, indulgent taverns, rough justice, and quiet old money."
  },
  {
    id: "div-lower-duras",
    name: "Lower Duras",
    x: 45, y: 83.5,
    kind: "region",
    region: "Lower Duras of Duras",
    blurb: `An ancient homeland of the Dwarves, it is now a dark region with some of the tallest mountains on the planet. Currently, this entire mass is under the protection of Warlock Keuroglian. The land is bordered on the north by a vast wasteland, and on the west by an impassable mass known as 'The Red Dead Sea.' Also found here is the tree god, Elfware- home to a reclusive race of Elves. `
  },
  {
    id: "div-lower-durin",
    name: "Lower Durin",
    x: 55, y: 84,
    kind: "region",
    region: "Lower Durin of Duras",
    blurb: "The largest river basin on the planet holds Ten Kingdoms that protect the river. It is also home to the 'Last Lands', an ancient land still inhabited with the... prehistoric."
  },
  {
    id: "div-krull",
    name: "Krull",
    x: 74, y: 64,
    kind: "region",
    region: "Krull of Duras",
    blurb: "The islands and cities of the Krull sea all live by their own rules. Delmorda has been slowly unifying these lands."
  },

  // ───────── KAIIN SCHOOLS — Doctrine (lore) + Sites (region) ─────────

// 1) Celestial Harmony Sanctuary — MAGNUMUND
{
  id: "kaiin-celestial-harmony",
  name: "Celestial Harmony Sanctuary",
  kind: "lore",
  x: 53, y: 19., // TODO: refine (West Magnumund, Elvin Isles)
  region: "West Magnumund of Magnumund",
  subtitle: "Lord AlasseZinthyra — Kaiin of Dunnwell",
  blurb: `Inner balance, cosmic attunement, meditation lineages. The ethereal temple has open-air cloisters suspended by ambient aether.`
},

// 2) Elemental Citadel — TARUNA
{
  id: "kaiin-elemental-citadel",
  name: "Elemental Citadel",
  kind: "lore",
  x: 86, y: 92.5, // TODO (South Taruna coast)
  region: "South Taruna of Taruna",
  subtitle: "Lord Taleel — Kaiin of Arris",
  blurb: `Mastery of fire, water, air, earth. Spired conduits channel raw elements into safe training arenas overlooking the surf of Fae Ellen.`
},


// 3) Shadow Weavers' Nexus — FRYIQUIN
{
  id: "kaiin-shadow-weavers",
  name: "Shadow Weavers' Nexus",
  kind: "lore",
  x: 27, y: 84, // TODO (Arctic corner of South Fryiquin)
  region: "South Fryiquin of Fryiquin",
  subtitle: "Lord Jarex — Kaiin of Friland",
  blurb: `Umbral arts: misdirection, silhouettes, null-light wards. The labyrinthine hull folds into darkness and ice caverns.`
},


// 4) Ethereal Observatory — TARUNA (Kaiinll)
{
  id: "kaiin-ethereal-observatory",
  name: "Ethereal Observatory",
  kind: "lore",
  x: 71.1, y: 83, // TODO (Kaiinll limestone cliffs)
  region: "Kaill of Taruna",
  subtitle: "Lord Roysa — Kaiin of Jarmarl",
  blurb: `Second-sight, precognition, planar etiquette. Crystal domes and stacked telescopes gaze into the ethereal plane.`
},


// 5) Technomancer Forge — ÁUCHA
{
  id: "kaiin-technomancer-forge",
  name: "Technomancer Forge",
  kind: "lore",
  x: 87, y: 52, // TODO (West Áucha volcanic arc)
  region: "West Aucha of Aucha",
  subtitle: "Lord Lukkian — Kaiin of Daggam",
  blurb: `This school combines martial arts with advanced machinery.`
},


// 6) Arcane Bastion — DURAS
{
  id: "kaiin-arcane-bastion",
  name: "Arcane Bastion",
  kind: "lore",
  x: 47, y: 62, // Durin Piedmont
  region: "Durin of Duras",
  subtitle: "Lord Maynard — Kaiin of Insaylong",
  blurb: `The Traveling School. This sanctum moves every two years within the realm of Durin. A battle-focused school-the warriors trained here are unparalleled.`
},


// 7) Timeless Library — DEMOS
{
  id: "kaiin-timeless-library",
  name: "Timeless Library",
  kind: "lore",
  x: 11, y: 44, // TODO (Upper Demos)
  region: "Upper Demos of Demos",
  subtitle: "Great Kaiin Master Head Lord Cecil — Kaiin of Gereak",
  blurb: `Temporal theory, chronology custody, causality ethics. Stacks record past, present, and future as living indices.`
},


// 8) Vanguard Academy — DURAS
{
  id: "kaiin-vanguard-academy",
  name: "Vanguard Academy",
  kind: "lore",
  x: 63.5, y: 55.6, // New Kingland (Durin; jungle)
  region: "Durin of Duras",
  subtitle: "Lord Jaclyn — Kaiin of Morin",
  blurb: `Body-mind fusion, adaptive drills, experimental tactics. Labs, arenas, and sky-gantries produce Vanguards—warriors who pivot faster than fate.`
},


];
