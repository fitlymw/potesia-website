import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import { EMBLEM } from "../assets/emblem";

function spotlight(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
  el.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
}

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="orb floaty" style={{ width: "20rem", height: "20rem", top: "-4rem", left: "-3rem", background: "#d9f99d", opacity: .5, animation: "drift 20s ease-in-out infinite" }} />
        <div className="orb" style={{ width: "26rem", height: "26rem", top: "2rem", right: "-6rem", background: "#ecfccb", opacity: .6, animation: "drift 26s ease-in-out infinite reverse" }} />
        <div className="orb" style={{ width: "22rem", height: "22rem", bottom: "-6rem", left: "30%", background: "#e2f7c2", opacity: .45, animation: "drift 23s ease-in-out infinite" }} />

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-8 pt-20 text-center md:pt-28">
          <div className="hero-item mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-600 backdrop-blur" style={{ animationDelay: ".05s" }}>
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-lime-400" />
            {t.heroEyebrow}
          </div>
          <h1 className="hero-item mx-auto max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-900 md:text-7xl" style={{ animationDelay: ".15s" }}>
            {t.heroTitleA}{" "}
            <span className="relative whitespace-nowrap">
              {t.heroTitleB}
              <span className="draw-x absolute -bottom-1 left-0 h-3 w-full -rotate-1 rounded bg-lime-300/70" style={{ zIndex: -1 }} />
            </span>
          </h1>
          <p className="hero-item mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-zinc-500" style={{ animationDelay: ".3s" }}>{t.heroSub}</p>
          <div className="hero-item mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: ".45s" }}>
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-200">
              {t.heroBtn1} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3.5 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-zinc-50">
              {t.heroBtn2}
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
          <Reveal delay={150}>
            <div className="hero-canvas relative overflow-hidden rounded-[2rem] border border-zinc-200 p-8 md:p-12">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                <Sparkles className="h-4 w-4 text-lime-500" /> {t.showcaseLabel}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {t.products.map((p, i) => (
                  <div key={p.name} className="floaty flex items-center gap-2.5 rounded-2xl border border-zinc-200 bg-white/80 px-5 py-3.5 backdrop-blur" style={{ animationDelay: i * 0.4 + "s" }}>
                    <span className={"h-2 w-2 rounded-full " + (p.type === "launch" ? "bg-lime-500 pulse-dot" : "bg-zinc-300")} />
                    <span className="text-base font-semibold text-zinc-900">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT IS POTESIA */}
      <section id="studio" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-600">{t.whatEyebrow}</p>
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">{t.whatTitle}</h2>
            <Link to="/products" className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-lime-300">
              {t.whatExplore} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={140} className="flex items-center">
            <p className="text-xl leading-relaxed text-zinc-600 md:text-2xl">{t.whatBody}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {t.principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 120} className="h-full">
                <div className="lift h-full rounded-3xl border border-zinc-200 bg-white p-7 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-100">
                    <Icon className="h-5 w-5 text-lime-700" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-zinc-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-zinc-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-600">{t.buildEyebrow}</p>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">{t.buildTitle}</h2>
              <p className="max-w-sm text-zinc-500">{t.buildSub}</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {t.products.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} className="h-full">
                <ProductCard p={p} learn={t.learn} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal>
          <div onMouseMove={spotlight} className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-950 p-10 text-white md:p-16">
            <div className="pointer-events-none absolute inset-0 transition-opacity duration-300" style={{ background: "radial-gradient(500px circle at var(--mx,30%) var(--my,40%), rgba(163,230,53,0.12), transparent 60%)" }} />
            <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-400">{t.teamEyebrow}</p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{t.teamTitle}</h2>
                <p className="mt-6 max-w-md leading-relaxed text-zinc-400">{t.teamBody}</p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <img src={EMBLEM} alt="Potesia" className="floaty h-14 w-auto" />
                  <div>
                    <p className="text-xl font-semibold">{t.teamName}</p>
                    <p className="text-sm text-zinc-400">{t.teamRole}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {t.roles.map((r) => (
                    <span key={r} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-zinc-200 transition-colors hover:border-lime-400/50 hover:text-white">{r}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="rounded-[2.5rem] border border-zinc-200 bg-white px-8 py-16 text-center md:py-20">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-600">{t.contactEyebrow}</p>
            <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">{t.contactTitle}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-500">{t.contactBody}</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-700">
              {t.contactBtn} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
