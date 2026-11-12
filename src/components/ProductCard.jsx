import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function spotlight(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
  el.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
}

export default function ProductCard({ p, learn }) {
  const ref = useRef(null);

  const onMove = (e) => {
    spotlight(e);
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(1000px) rotateX(${(py - 0.5) * -5}deg) rotateY(${(px - 0.5) * 5}deg) translateY(-3px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  const inner = (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(360px circle at var(--mx,50%) var(--my,50%), rgba(163,230,53,0.16), transparent 65%)" }}
      />
      <div className="relative flex h-full flex-col p-8">
        <div className="flex items-center justify-between">
          <span className={"rounded-full px-3 py-1 text-xs font-semibold " + (p.type === "launch" ? "bg-lime-400 text-zinc-900" : "bg-zinc-100 text-zinc-600")}>
            {p.status}
          </span>
          <span className="text-xs font-medium text-zinc-400">{p.category}</span>
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-900">{p.name}</h3>
        {p.tagline && <p className="mt-1 text-sm italic text-lime-600">{p.tagline}</p>}
        <p className="mt-3 flex-grow text-[15px] leading-relaxed text-zinc-500">{p.desc}</p>
        <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900">
          {learn}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </>
  );

  const cls = "tilt group relative block h-full overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-xl";

  if (p.href.startsWith("http")) {
    return (
      <a ref={ref} href={p.href} target="_blank" rel="noopener noreferrer"
        onMouseMove={onMove} onMouseLeave={onLeave} className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <Link ref={ref} to={p.href} onMouseMove={onMove} onMouseLeave={onLeave} className={cls}>
      {inner}
    </Link>
  );
}
