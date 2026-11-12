import { useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { supabase } from "../lib/supabase";
import Reveal from "../components/Reveal";

export default function ProductSomna() {
  const { t } = useLanguage();
  const s = t.productSomna;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => { document.title = "Somna — Potesia"; }, []);

  const handleWaitlist = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    if (!supabase) { setStatus("error"); return; }
    const { error } = await supabase.from("waitlist").insert({ email, product: "somna" });
    setStatus(error ? "error" : "success");
    if (!error) setEmail("");
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-lime-600">{s.eyebrow}</p>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 md:text-6xl">{s.title}</h1>
          <span className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-semibold text-zinc-600">{s.status}</span>
        </div>
        <p className="mt-3 text-xl italic text-lime-600">{s.tagline}</p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">{s.desc}</p>
      </Reveal>

      <div className="mt-20">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">{s.featuresTitle}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {s.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className="h-full">
              <div className="lift h-full rounded-3xl border border-zinc-200 bg-white p-8 hover:shadow-md">
                <h3 className="text-base font-semibold text-zinc-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-20">
        <div className="rounded-[2rem] bg-zinc-950 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-semibold tracking-tight">{s.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-md text-zinc-400">{s.ctaDesc}</p>
          {status === "success" ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-lime-400">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-semibold">{s.ctaSuccess}</span>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={s.ctaEmailPlaceholder}
                className="w-full max-w-xs rounded-full bg-zinc-800 px-5 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:ring-2 focus:ring-lime-400 sm:w-auto"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-lime-300 disabled:opacity-50 disabled:hover:scale-100"
              >
                {status === "loading" ? s.ctaSending : s.ctaBtn}
                {status !== "loading" && <ArrowUpRight className="h-4 w-4" />}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 text-xs text-red-400">{s.ctaError}</p>
          )}
        </div>
      </Reveal>
    </div>
  );
}
