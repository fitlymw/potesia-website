import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  const n = t.notFound;
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-8xl font-semibold text-zinc-100">{n.title}</p>
      <h1 className="mt-4 text-2xl font-semibold text-zinc-900">{n.sub}</h1>
      <p className="mt-3 max-w-sm text-zinc-500">{n.body}</p>
      <Link to="/" className="mt-8 rounded-full bg-zinc-900 px-7 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-zinc-700">
        {n.btn}
      </Link>
    </div>
  );
}
