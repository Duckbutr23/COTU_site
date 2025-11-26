// src/data/projects.js
export const projects = [
  // …existing items…



{
    id: "ehz",
    title: "EYE. HEART. ZOMBIE.",
    subtitle: "Original musical (in development)",
    thumb: "/projects/ehz/poster.jpg",
    images: [
      { src: "/projects/ehz/01.jpg", alt: "EHZ concept art 1" },
      { src: "/projects/ehz/02.jpg", alt: "EHZ concept art 2" },
    ],
    description:
      "A post-apocalyptic pop-horror musical about love after the world ends.",
    tags: ["musical", "development"],
    year: 2025,
    href: null,
  },

    {
    id: "praxis",
    title: "ILLUMINATUS!",
    subtitle: "Research-performance / mixed media",
    // Thumbnail used in the scroller
    thumb: "/projects/praxis/poster.jpg",
    // Fullscreen/gallery images
    images: [
      { src: "/projects/praxis/01.jpg", alt: "PRAXIS — frame 1" },
      { src: "/projects/praxis/02.jpg", alt: "PRAXIS — frame 2" },
    ],
    // Optional extras used by FullscreenViewer (if wired)
    description:
      "A signal-hunting performance about pattern, paranoia, and the stories we project into noise.",
    tags: ["tour", "new work", "mixed media"],
    year: 2025,
    href: null, // or a route/external link if clicking should navigate
  },
];