import { useLanguage } from "../context/LanguageContext";

export default function LangToggle({ dark = false }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={"inline-flex items-center rounded-full p-0.5 " + (dark ? "bg-white/10" : "bg-zinc-100")}>
      {["en", "id"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={
            "px-2.5 py-1 text-xs font-semibold rounded-full transition-colors " +
            (lang === l
              ? "bg-lime-400 text-zinc-900"
              : dark
              ? "text-zinc-300 hover:text-white"
              : "text-zinc-500 hover:text-zinc-900")
          }
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
