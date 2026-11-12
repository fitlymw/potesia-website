import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight, Sparkles, Layers, MapPin, Rocket } from "lucide-react";

const EMBLEM = "data:image/png;base64,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";

const COPY = {
  en: {
    nav: [
      { label: "Studio", href: "#studio" },
      { label: "Products", href: "#products" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Start a partnership",
    heroEyebrow: "Independent software & media studio",
    heroTitleA: "We build what Indonesia",
    heroTitleB: "reaches for.",
    heroSub: "Potesia is an independent studio designing, engineering, and shipping digital products — from retail technology to publishing, legal access, and independent news.",
    heroBtn1: "Explore our products",
    heroBtn2: "Work with us",
    showcaseLabel: "The studio behind",
    marquee: ["Business", "Words", "Law", "News"],
    whatEyebrow: "About",
    whatTitle: "What is Potesia?",
    whatExplore: "Explore",
    whatBody: "Potesia is a one-person studio building software and media end to end. We design the interfaces, write the code, train the AI, and ship the products — turning ideas into tools people actually use.",
    principles: [
      { icon: Layers, title: "Built end to end", desc: "Design, engineering, and AI under one roof." },
      { icon: MapPin, title: "Made for Indonesia", desc: "Local realities first, global standards always." },
      { icon: Rocket, title: "Shipped, not promised", desc: "Real products in real hands." },
    ],
    buildEyebrow: "Portfolio",
    buildTitle: "What we build",
    buildSub: "Four products across business, creativity, law, and news.",
    learn: "Learn more",
    products: [
      { name: "DIVE", status: "Launching", type: "launch", category: "Retail technology · Mobile app", desc: "A point-of-sale and business-intelligence app for small retailers and wholesalers — sales, stock, accounting, and insight in one place.", href: "#" },
      { name: "Somna", status: "In development", type: "dev", category: "Digital publishing · Platform", tagline: "The canvas of dreams.", desc: "A writing and digital-book platform for emerging authors to write, publish, and sell their work to readers everywhere.", href: "#" },
      { name: "Lindungi ID", status: "In development", type: "dev", category: "Legal services · Platform", desc: "Membership-based legal services that make everyday legal help affordable and accessible across Indonesia.", href: "#" },
      { name: "Titahbogani.com", status: "In development", type: "dev", category: "News media · Web", desc: "An independent news outlet rooted in North Sulawesi, covering the stories that matter.", href: "https://titahbogani.com" },
    ],
    teamEyebrow: "The team",
    teamTitle: "A studio of one — for now.",
    teamBody: "Potesia is, today, a team of one. Fitly Tjong Mamuaya designs, builds, and ships every product — writing the code, training the models, drawing the interfaces, and setting the direction.",
    teamName: "Fitly Tjong Mamuaya",
    teamRole: "Founder",
    roles: ["CEO", "Software Engineer", "AI Engineer", "Product Designer", "Technician"],
    contactEyebrow: "Work with us",
    contactTitle: "Let's build something together.",
    contactBody: "Building something, investing, or writing about what we do? Potesia is open to partnerships across all four products.",
    contactBtn: "Get in touch",
    footTagline: "Software & media studio · Manado, Indonesia",
    footProducts: "Products",
    footCompany: "Company",
    footCompanyLinks: ["Studio", "Team", "Contact"],
    footRights: "All rights reserved.",
    footSomna: "Somna by Potesia — The Canvas of Dreams.",
  },
  id: {
    nav: [
      { label: "Studio", href: "#studio" },
      { label: "Produk", href: "#products" },
      { label: "Tim", href: "#team" },
      { label: "Kontak", href: "#contact" },
    ],
    cta: "Mulai kerja sama",
    heroEyebrow: "Studio perangkat lunak & media independen",
    heroTitleA: "Kami membangun yang",
    heroTitleB: "dibutuhkan Indonesia.",
    heroSub: "Potesia adalah studio independen yang merancang, mengembangkan, dan merilis produk digital — dari teknologi ritel hingga penerbitan, akses hukum, dan berita independen.",
    heroBtn1: "Lihat produk kami",
    heroBtn2: "Mari bekerja sama",
    showcaseLabel: "Studio di balik",
    marquee: ["Bisnis", "Kata", "Hukum", "Berita"],
    whatEyebrow: "Tentang",
    whatTitle: "Apa itu Potesia?",
    whatExplore: "Selengkapnya",
    whatBody: "Potesia adalah studio satu orang yang membangun perangkat lunak dan media secara menyeluruh. Kami merancang antarmuka, menulis kode, melatih AI, dan merilis produk — mengubah ide menjadi alat yang benar-benar digunakan.",
    principles: [
      { icon: Layers, title: "Dibangun menyeluruh", desc: "Desain, rekayasa, dan AI dalam satu atap." },
      { icon: MapPin, title: "Dibuat untuk Indonesia", desc: "Mengutamakan kebutuhan lokal, dengan standar global." },
      { icon: Rocket, title: "Dirilis, bukan janji", desc: "Produk nyata di tangan pengguna." },
    ],
    buildEyebrow: "Portofolio",
    buildTitle: "Yang kami bangun",
    buildSub: "Empat produk di bidang bisnis, kreativitas, hukum, dan berita.",
    learn: "Selengkapnya",
    products: [
      { name: "DIVE", status: "Segera tayang", type: "launch", category: "Teknologi ritel · Aplikasi", desc: "Aplikasi kasir dan kecerdasan bisnis untuk peritel dan grosir kecil — penjualan, stok, akuntansi, dan analitik dalam satu tempat.", href: "#" },
      { name: "Somna", status: "Dalam pengembangan", type: "dev", category: "Penerbitan digital · Platform", tagline: "Kanvas mimpi.", desc: "Platform menulis dan buku digital untuk penulis pemula — menulis, menerbitkan, dan menjual karya ke pembaca di mana saja.", href: "#" },
      { name: "Lindungi ID", status: "Dalam pengembangan", type: "dev", category: "Layanan hukum · Platform", desc: "Layanan hukum berbasis keanggotaan yang membuat bantuan hukum sehari-hari terjangkau dan mudah diakses di seluruh Indonesia.", href: "#" },
      { name: "Titahbogani.com", status: "Dalam pengembangan", type: "dev", category: "Media berita · Web", desc: "Media berita independen yang berakar di Sulawesi Utara, meliput cerita yang penting.", href: "https://titahbogani.com" },
    ],
    teamEyebrow: "Tim",
    teamTitle: "Studio satu orang — untuk saat ini.",
    teamBody: "Saat ini, Potesia adalah tim satu orang. Fitly Tjong Mamuaya merancang, membangun, dan merilis setiap produk — menulis kode, melatih model AI, menggambar antarmuka, dan menentukan arah.",
    teamName: "Fitly Tjong Mamuaya",
    teamRole: "Pendiri",
    roles: ["CEO", "Software Engineer", "AI Engineer", "Desainer Produk", "Teknisi"],
    contactEyebrow: "Mari bekerja sama",
    contactTitle: "Mari bangun sesuatu bersama.",
    contactBody: "Sedang membangun sesuatu, ingin berinvestasi, atau menulis tentang kami? Potesia terbuka untuk kerja sama di keempat produk.",
    contactBtn: "Hubungi kami",
    footTagline: "Studio perangkat lunak & media · Manado, Indonesia",
    footProducts: "Produk",
    footCompany: "Perusahaan",
    footCompanyLinks: ["Studio", "Tim", "Kontak"],
    footRights: "Hak cipta dilindungi.",
    footSomna: "Somna by Potesia — The Canvas of Dreams.",
  },
};

const EASE = "cubic-bezier(.16,1,.3,1)";

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(30px)",
        transition: "opacity .8s " + EASE + " " + delay + "ms, transform .8s " + EASE + " " + delay + "ms",
      }}
    >
      {children}
    </div>
  );
}

function spotlight(e) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
  el.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
}

function ProductCard({ p, learn }) {
  const ref = useRef(null);
  const onMove = (e) => {
    spotlight(e);
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.transform =
      "perspective(1000px) rotateX(" + (py - 0.5) * -5 + "deg) rotateY(" + (px - 0.5) * 5 + "deg) translateY(-3px)";
  };
  const onLeave = () => { const el = ref.current; if (el) el.style.transform = ""; };
  return (
    <a
      ref={ref}
      href={p.href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="tilt group relative block h-full overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-xl"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(360px circle at var(--mx,50%) var(--my,50%), rgba(163,230,53,0.16), transparent 65%)" }}
      />
      <div className="relative flex h-full flex-col p-8">
        <div className="flex items-center justify-between">
          <span className={"rounded-full px-3 py-1 text-xs font-semibold " + (p.type === "launch" ? "bg-lime-400 text-zinc-900" : "bg-zinc-100 text-zinc-600")}>
            {p.status}
          </span>
          <span className="text-xs font-medium text-zinc-400">{p.category}</span>
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-900">{p.name}</h3>
        {p.tagline && <p className="mt-1 text-sm italic text-lime-600">{p.tagline}</p>}
        <p className="mt-3 flex-grow text-[15px] leading-relaxed text-zinc-500">{p.desc}</p>
        <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900">
          {learn}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </div>
    </a>
  );
}

const STYLE = `
@keyframes heroIn { 0%{opacity:0;transform:translateY(24px);filter:blur(8px);} 100%{opacity:1;transform:translateY(0);filter:blur(0);} }
@keyframes drawX { from{transform:scaleX(0);} to{transform:scaleX(1);} }
@keyframes drift { 0%{transform:translate(0,0) scale(1);} 33%{transform:translate(34px,-26px) scale(1.12);} 66%{transform:translate(-24px,20px) scale(.94);} 100%{transform:translate(0,0) scale(1);} }
@keyframes gradShift { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
@keyframes marquee { from{transform:translateX(0);} to{transform:translateX(-50%);} }
@keyframes floaty { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
@keyframes pulseDot { 0%,100%{transform:scale(1);opacity:1;} 50%{transform:scale(1.7);opacity:.45;} }
.hero-item{ opacity:0; animation:heroIn .9s ${EASE} forwards; }
.draw-x{ transform:scaleX(0); transform-origin:left; animation:drawX .85s ${EASE} .85s forwards; }
.orb{ position:absolute; border-radius:9999px; filter:blur(64px); pointer-events:none; }
.hero-canvas{ background:linear-gradient(120deg,#fafafa,#f1fadf,#e6f7c9,#f1fadf,#fafafa); background-size:280% 280%; animation:gradShift 16s ease infinite; }
.marquee-track{ display:flex; width:max-content; animation:marquee 26s linear infinite; }
.marquee-wrap:hover .marquee-track{ animation-play-state:paused; }
.floaty{ animation:floaty 5s ease-in-out infinite; }
.pulse-dot{ animation:pulseDot 2.6s ease-in-out infinite; }
.tilt{ transition:transform .3s ${EASE}, box-shadow .3s ease, border-color .3s ease; transform-style:preserve-3d; will-change:transform; }
.lift{ transition:transform .3s ${EASE}, box-shadow .3s ease; }
.lift:hover{ transform:translateY(-4px); }
.spin-hover img{ transition:transform .8s ${EASE}; }
.spin-hover:hover img{ transform:rotate(8deg) scale(1.06); }
@media (prefers-reduced-motion: reduce){
  *{ animation:none !important; }
  .hero-item{ opacity:1 !important; }
  .draw-x{ transform:scaleX(1) !important; }
}
`;

function Logo({ dark = false, size = "h-9" }) {
  return (
    <a href="#top" className="spin-hover flex items-center gap-2.5 shrink-0">
      <img src={EMBLEM} alt="Potesia" className={size + " w-auto"} style={dark ? {} : { filter: "invert(1)" }} />
      <span className={"text-lg font-semibold tracking-tight " + (dark ? "text-white" : "text-zinc-900")}>Potesia</span>
    </a>
  );
}

export default function PotesiaSite() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = COPY[lang];

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  const LangToggle = ({ dark = false }) => (
    <div className={"inline-flex items-center rounded-full p-0.5 " + (dark ? "bg-white/10" : "bg-zinc-100")}>
      {["en", "id"].map((l) => (
        <button key={l} onClick={() => setLang(l)}
          className={"px-2.5 py-1 text-xs font-semibold rounded-full transition-colors " +
            (lang === l ? "bg-lime-400 text-zinc-900" : (dark ? "text-zinc-300 hover:text-white" : "text-zinc-500 hover:text-zinc-900"))}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900 antialiased" style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}>
      <style>{STYLE}</style>

      {/* NAV */}
      <header className={"sticky top-0 z-50 border-b transition-all duration-300 " + (scrolled ? "border-zinc-200 bg-white/90 shadow-sm backdrop-blur-md" : "border-transparent bg-white/70 backdrop-blur-sm")}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="hidden items-center gap-8 md:flex">
            {t.nav.map((n) => (
              <a key={n.label} href={n.href} className="group relative text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900">
                {n.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <LangToggle />
            <a href="#contact" className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-700">{t.cta}</a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-zinc-100 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {t.nav.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-zinc-700">{n.label}</a>
              ))}
              <div className="flex items-center justify-between pt-2">
                <LangToggle />
                <a href="#contact" onClick={() => setMenuOpen(false)} className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white">{t.cta}</a>
              </div>
            </div>
          </div>
        )}
      </header>

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
            <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-200">
              {t.heroBtn1} <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3.5 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-zinc-50">{t.heroBtn2}</a>
          </div>
        </div>

        {/* SHOWCASE */}
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
            <a href="#products" className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:scale-105 hover:bg-lime-300">
              {t.whatExplore} <ArrowUpRight className="h-4 w-4" />
            </a>
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

      {/* WHAT WE BUILD */}
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

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="rounded-[2.5rem] border border-zinc-200 bg-white px-8 py-16 text-center md:py-20">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-600">{t.contactEyebrow}</p>
            <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">{t.contactTitle}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-zinc-500">{t.contactBody}</p>
            <a href="mailto:hello@potesia.com" className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-700">
              {t.contactBtn} <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 text-zinc-400">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <Logo dark size="h-10" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-500">{t.footTagline}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{t.footProducts}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {t.products.map((p) => (
                  <li key={p.name}><a href={p.href} className="transition-colors hover:text-lime-400">{p.name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{t.footCompany}</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {t.footCompanyLinks.map((c, i) => (
                  <li key={c}><a href={["#studio", "#team", "#contact"][i]} className="transition-colors hover:text-lime-400">{c}</a></li>
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
