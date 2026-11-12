import { useEffect } from "react";
import { ArrowUpRight, Gamepad2 } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../components/Reveal";

const SECTION_ORDER = ["party", "tests", "arcade", "upcoming"];

// Games live in a separate deployment that Vercel proxies under /games/*,
// so cards are plain links (a full page load), not router <Link>s.
function GameCard({ g, play, soon }) {
  const body = (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(360px circle at 30% 20%, rgba(163,230,53,0.16), transparent 65%)" }}
      />
      <div className="relative flex h-full flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-zinc-100">
            {g.icon ? (
              <img src={g.icon} alt="" loading="lazy" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            ) : (
              <Gamepad2 className="h-6 w-6 text-zinc-400" />
            )}
          </div>
          <span className={"rounded-full px-3 py-1 text-xs font-semibold " + (g.soon ? "bg-zinc-100 text-zinc-600" : "bg-lime-400 text-zinc-900")}>
            {g.soon ? soon : play}
          </span>
        </div>
        <h3 className="mt-6 text-xl font-semibold tracking-tight text-zinc-900">{g.name}</h3>
        <p className="mt-1 text-xs font-medium text-zinc-400">{g.category}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">{g.desc}</p>
        {!g.soon && (
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900">
            {play}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        )}
      </div>
    </>
  );
  const cls = "group relative block h-full overflow-hidden rounded-3xl border bg-white lift " + (g.soon ? "border-dashed border-zinc-300" : "border-zinc-200 hover:border-lime-300 hover:shadow-lg");
  return g.soon ? <div className={cls}>{body}</div> : <a href={g.href} className={cls}>{body}</a>;
}

export default function Games() {
  const { t } = useLanguage();
  const p = t.gamesPage;

  useEffect(() => { document.title = "Games — Potesia"; }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-600">{p.eyebrow}</p>
        <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-6xl">{p.title}</h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-500">{p.sub}</p>
      </Reveal>

      {SECTION_ORDER.map((section) => {
        const games = p.games.filter((g) => g.section === section);
        if (!games.length) return null;
        return (
          <section key={section} className="mt-16">
            <Reveal>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">{p.sections[section]}</h2>
            </Reveal>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {games.map((g, i) => (
                <Reveal key={g.name} delay={i * 80} className="h-full">
                  <GameCard g={g} play={p.play} soon={p.soon} />
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      <Reveal>
        <p className="mt-16 max-w-2xl text-sm text-zinc-400">{p.note}</p>
      </Reveal>
    </div>
  );
}
