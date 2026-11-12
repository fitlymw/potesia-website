import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../components/Reveal";

export default function ProductTitahbogani() {
  const { t } = useLanguage();
  const tb = t.productTitahbogani;

  useEffect(() => { document.title = "Titahbogani — Potesia"; }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lime-600">{tb.eyebrow}</p>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 md:text-6xl">{tb.title}</h1>
          <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-semibold text-zinc-600">{tb.status}</span>
        </div>
        <p className="mt-3 text-xl italic text-lime-600">{tb.tagline}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">{tb.desc}</p>
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <a
          href={tb.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:scale-105 hover:border-zinc-400 hover:bg-zinc-50"
        >
          {tb.ctaBtn} <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>

      <Reveal className="mt-20">
        <div className="rounded-[2rem] bg-zinc-950 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-semibold tracking-tight">{tb.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">{tb.ctaDesc}</p>
          <a
            href={tb.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-lime-300"
          >
            {tb.ctaBtn} <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </div>
  );
}
