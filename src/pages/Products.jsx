import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const { t } = useLanguage();
  const p = t.productsPage;

  useEffect(() => { document.title = "Products — Potesia"; }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-600">{p.eyebrow}</p>
        <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-6xl">{p.title}</h1>
        <p className="mt-6 max-w-xl text-lg text-zinc-500">{p.sub}</p>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {t.products.map((prod, i) => (
          <Reveal key={prod.name} delay={i * 90} className="h-full">
            <ProductCard p={prod} learn={p.learn} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
