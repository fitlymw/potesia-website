import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../components/Reveal";
import { EMBLEM } from "../assets/emblem";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  useEffect(() => { document.title = "About — Potesia"; }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      {/* Header */}
      <Reveal>
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-600">{a.eyebrow}</p>
        <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-6xl">{a.title}</h1>
      </Reveal>

      {/* Mission + Story */}
      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-lime-600">{a.missionLabel}</p>
          <p className="text-2xl leading-relaxed text-zinc-700 md:text-3xl">{a.mission}</p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-lime-600">{a.storyLabel}</p>
          <p className="text-lg leading-relaxed text-zinc-600">{a.story}</p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">{a.story2}</p>
        </Reveal>
      </div>

      {/* Four fields */}
      <div className="mt-24">
        <Reveal>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lime-600">{a.fieldsEyebrow}</p>
          <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">{a.fieldsTitle}</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {a.fields.map((f, i) => (
            <Reveal key={f.name} delay={i * 80} className="h-full">
              <div className="lift h-full rounded-3xl border border-zinc-200 bg-white p-8 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{f.icon}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-lime-600">{f.name}</p>
                    <p className="text-lg font-semibold text-zinc-900">{f.product}</p>
                  </div>
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-zinc-500">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Founder */}
      <div className="mt-24">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-zinc-950 p-10 text-white md:p-16">
            <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
              <div className="flex flex-col justify-center">
                <div className="spin-hover mb-6 flex items-center gap-4">
                  <img src={EMBLEM} alt="Potesia" className="floaty h-16 w-auto" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-lime-400">{a.founderEyebrow}</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-tight">{a.founderName}</h2>
                <p className="mt-1 text-sm text-zinc-400">{a.founderLocation}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {a.roles.map((r) => (
                    <span key={r} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-zinc-200">{r}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-lg leading-relaxed text-zinc-300">{a.founderBio}</p>
                <p className="mt-4 text-lg leading-relaxed text-zinc-400">{a.founderBio2}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
