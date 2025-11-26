// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

const LINKS = [
  { path: "/the-future", label: "THE FUTURE" },
  { path: "/the-market", label: "THE MARKET" },
  { path: "/the-pub", label: "THE PUB" },
  { path: "/crew-quarters", label: "CREW QUARTERS" },
  { path: "/the-past", label: "THE PAST" },
  { path: "/carderia", label: "Cárderia" },
  { path: "/comix", label: "COMIX" },
  { path: "/pod", label: "POD" },
  { path: "/films", label: "FILMS" },
  { path: "/education", label: "EDUCATION" },
  { path: "/publish", label: "PUBLISH" },
  { path: "/the-plan", label: "THE PLAN" },
  { path: "/enlist", label: "ENLIST" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav
      className="
        fixed top-10 right-5 z-50
        flex items-center flex-wrap
        gap-2 md:gap-2
        text-[11px] md:text-[12px]
        leading-none uppercase
        tracking-[0.14em] md:tracking-[0.18em]
      "
      aria-label="Primary"
    >
      {LINKS.map(({ path, label }) => {
        const isActive = pathname === path;
        const isPast = path === "/the-past";

        return (
          <Link
            key={path}
            to={path}
            className={`
              hover:text-white transition
              ${isActive ? "text-white" : "text-white/80"}
              ${isPast ? "inline-flex items-center gap-1" : ""}
            `}
          >
            {label}
            {isPast && (
              <span
                className="
                  inline-block h-3 w-[1px]
                  bg-emerald-400/80 rounded-full
                  shadow-[0_0_8px_rgba(45,255,196,0.9)]
                  ml-[2px]
                "
              />
            )}
          </Link>
        );
      })}

      {/* Small 'Star Base' tab → always visible, returns home */}
      <Link
        to="/"
        aria-label="Return to Starbase"
        className="
          ml-2 px-2.5 py-1 rounded-md
          border border-white/20 bg-black/40
          hover:bg-white/10 hover:border-white/30
          text-[11px] tracking-[0.2em]
          shadow-[0_0_10px_rgba(255,255,255,.08)]
          backdrop-blur-sm
        "
      >
        Star Base
      </Link>
    </nav>
  );
}
