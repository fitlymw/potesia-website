import { useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { supabase } from "../lib/supabase";
import Reveal from "../components/Reveal";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => { document.title = "Contact — Potesia"; }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    if (!supabase) { setStatus("error"); return; }
    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name,
      email: form.email,
      topic: form.topic,
      message: form.message,
    });
    if (error) {
      setStatus("error");
    } else {
      setStatus("success");
      setForm({ name: "", email: "", topic: "", message: "" });
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-600">{c.eyebrow}</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-5xl">{c.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-500">{c.sub}</p>
          <div className="mt-10">
            <p className="text-sm text-zinc-400">{c.orEmail}</p>
            <a href={`mailto:${c.emailAddress}`} className="mt-1 inline-flex items-center gap-1.5 text-base font-semibold text-zinc-900 hover:text-lime-600 transition-colors">
              {c.emailAddress} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-lime-200 bg-lime-50 px-8 py-16 text-center">
              <CheckCircle className="h-10 w-10 text-lime-500" />
              <h2 className="text-xl font-semibold text-zinc-900">{c.successTitle}</h2>
              <p className="text-sm text-zinc-500">{c.successBody}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm font-semibold text-lime-600 hover:underline"
              >
                {c.successReset}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder={c.namePlaceholder}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                />
                <input
                  type="email"
                  required
                  placeholder={c.emailPlaceholder}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
                />
              </div>
              <select
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
                className="w-full rounded-2xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 outline-none transition-colors focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
              >
                <option value="">{c.topicLabel}</option>
                {c.topics.map((tp) => <option key={tp} value={tp}>{tp}</option>)}
              </select>
              <textarea
                rows={6}
                required
                placeholder={c.messagePlaceholder}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-2xl border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-lime-400 focus:ring-2 focus:ring-lime-100"
              />
              {status === "error" && (
                <p className="text-sm text-red-500">{c.errorMsg}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "loading" ? c.sendingBtn : c.sendBtn}
                {status !== "loading" && <ArrowUpRight className="h-4 w-4" />}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
}
