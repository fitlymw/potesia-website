import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Logo from "../components/Logo";
import LangToggle from "../components/LangToggle";

export default function Layout() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased" style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
      <header className={"sticky top-0 z-50 border-b transition-all duration-300 " + (scrolled ? "border-zinc-200 bg-white/90 shadow-sm backdrop-blur-md" : "border-transparent bg-white/70 backdrop-blur-sm")}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="hidden items-center gap-8 md:flex">
            {t.navLinks.map((n) => (
              <NavLink key={n.href} to={n.href}
                className={({ isActive }) =>
                  "group relative text-sm font-medium transition-colors " +
                  (isActive ? "text-zinc-900" : "text-zinc-600 hover:text-zinc-900")
                }
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    <span className={"absolute -bottom-1 left-0 h-0.5 bg-lime-400 transition-all duration-300 " + (isActive ? "w-full" : "w-0 group-hover:w-full")} />
                  </>
                )}
              </NavLink>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <LangToggle />
            <Link to="/contact" className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-700">
              {t.cta}
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-zinc-100 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {t.navLinks.map((n) => (
                <Link key={n.href} to={n.href} className="text-sm font-medium text-zinc-700">{n.label}</Link>
              ))}
              <div className="flex items-center justify-between pt-2">
                <LangToggle />
                <Link to="/contact" className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white">
                  {t.cta}
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-zinc-950 text-zinc-400">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Logo dark size="h-10" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">{t.footTagline}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{t.footProducts}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {t.footProductLinks.map((p) => (
                  <li key={p.href}><Link to={p.href} className="transition-colors hover:text-lime-400">{p.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{t.footCompany}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {t.footCompanyLinks.map((c) => (
                  <li key={c.href}><Link to={c.href} className="transition-colors hover:text-lime-400">{c.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{t.footLegal}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {t.footLegalLinks.map((l) => (
                  <li key={l.href}><Link to={l.href} className="transition-colors hover:text-lime-400">{l.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Potesia. {t.footRights}</p>
            <p className="italic text-zinc-600">{t.footSomna}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
