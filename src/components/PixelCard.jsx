import PixelAvatar from "./PixelAvatar";
import StatBar from "./StatBar";

export default function PixelCard({ person }) {
  const {
    role,
    faction,
    name,
    title,
    class: klass,          // "class" is a reserved word; alias to "klass"
    avatar,
    stats = {},
    links = {},
  } = person || {};

  return (
    <article
      className="
        rounded-xl border border-white/12
        bg-white/[0.08] backdrop-blur-md
        p-4 transition
        hover:bg-white/[0.12] hover:shadow-[0_8px_40px_rgba(0,0,0,0.35)]
      "
    >
      <div className="flex items-center gap-4">
        <PixelAvatar src={avatar} name={name} />
        <div className="min-w-0">
          <div className="pixel-font text-[10px] text-neutral-400 tracking-widest uppercase">
            {role}{role && faction ? " • " : ""}{faction}
          </div>
          <h3 className="mt-1 text-lg font-bold truncate">{name}</h3>

          {/* Title on one line, Class on the next */}
          <div className="px-mono text-sm leading-snug">
            {title && <div className="text-emerald-300 truncate">{title}</div>}
            {klass && <div className="text-fuchsia-300 truncate">{klass}</div>}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <StatBar label="POWER" value={stats?.power} />
        <StatBar label="TECH"  value={stats?.tech} />
        <StatBar label="CHARM" value={stats?.charm} />
        <StatBar label="GRIT"  value={stats?.grit} />
      </div>

      <div className="mt-4 flex gap-2 text-xs">
        {links?.site && (
          <a
            href={links.site}
            target="_blank"
            rel="noreferrer"
            data-allow-nav="true"       /* let parent wrappers ignore this click */
            className="pixel-btn rounded-sm"
          >
            SITE
          </a>
        )}
        {links?.ig && (
          <a
            href={links.ig}
            target="_blank"
            rel="noreferrer"
            data-allow-nav="true"
            className="pixel-btn rounded-sm"
          >
            IG
          </a>
        )}
      </div>
    </article>
  );
}
