import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../components/Reveal";

export default function ProductDive() {
  const { t } = useLanguage();
  const d = t.productDive;

  useEffect(() => { document.title = "DIVE — Potesia"; }, []);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      {/* Header */}
      <Reveal>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lime-600">{d.eyebrow}</p>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 md:text-6xl">{d.title}</h1>
          <span className="rounded-full bg-lime-400 px-4 py-1.5 text-sm font-semibold text-zinc-900">{d.status}</span>
        </div>
        <p className="mt-3 text-xl italic text-lime-600">{d.tagline}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">{d.desc}</p>
      </Reveal>

      {/* Google Play CTA */}
      <Reveal delay={100}>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={d.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-700"
          >
            {d.ctaBtn} <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>

      {/* Features */}
      <div className="mt-20">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">{d.featuresTitle}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {d.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70} className="h-full">
              <div className="lift h-full rounded-3xl border border-zinc-200 bg-white p-7 hover:shadow-md">
                <CheckCircle className="h-5 w-5 text-lime-500" />
                <h3 className="mt-4 text-base font-semibold text-zinc-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Screenshots placeholder */}
      <Reveal className="mt-20">
        <div className="flex min-h-48 items-center justify-center rounded-3xl border-2 border-dashed border-zinc-200 bg-zinc-50">
          <p className="text-sm text-zinc-400">{d.screenshotsNote}</p>
        </div>
      </Reveal>

      {/* Bottom CTA */}
      <Reveal className="mt-20">
        <div className="rounded-[2rem] bg-zinc-950 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-semibold tracking-tight">{d.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">{d.ctaDesc}</p>
          <a
            href={d.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-lime-300"
          >
            {d.ctaBtn} <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-6 text-xs text-zinc-500">
            {d.privacyNote}{" "}
            <Link to={d.privacyHref} className="underline hover:text-lime-400">{d.privacyLink}</Link>
            {" "}{d.andText}{" "}
            <Link to={d.termsHref} className="underline hover:text-lime-400">{d.termsLink}</Link>.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
