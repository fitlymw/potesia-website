# Claude Code Prompt — Build Out the Full Potesia Website (with Privacy Policy)

> Paste into Claude Code from the Potesia website repo root. You already have the landing page
> component (`PotesiaSite.jsx`) — clean white minimalist, lime-green accent, bilingual EN/ID with a
> working toggle, plus a motion system. Expand it into a complete multi-page site.

---

## Context & goal

Potesia is a one-person software & media studio (founder: Fitly Tjong Mamuaya, Manado, Indonesia)
building four products: **DIVE** (POS + business intelligence, launching on Google Play), **Somna**
(writing / digital-book platform), **Lindungi ID** (membership legal services), and **Titahbogani.com**
(independent news). The existing landing page sets the design language; reuse it everywhere.

**The most important reason this site exists: a public Privacy Policy URL is required to publish DIVE on
the Google Play Store.** Treat the legal pages as the top priority and make them correct and complete.

Stack: **Vite + React + React Router + Tailwind** (match the existing landing's tokens, components, and
animation system). Keep everything bilingual EN/ID.

---

## JOB 0 — Foundation: routing, shared layout, bilingual context

1. Add **`react-router-dom`**. Create routes (below). On every route change, **scroll to top**.
2. Extract the **Nav** and **Footer** from `PotesiaSite.jsx` into a shared `<Layout>` that wraps all
   pages. The landing page becomes the `Home` page rendered inside it.
3. **Lift the language state** (currently local to the landing) into a top-level **LanguageContext** (or
   a small store) so the EN/ID toggle works across every page and persists during navigation. Keep all
   copy in per-language dictionaries as it is today.
4. Reuse the existing design tokens, `Reveal` scroll animation, hover/tilt effects, and `prefers-
   reduced-motion` handling on the new pages — consistent feel throughout.
5. **Remove the marquee band** from the home page (the "Business · Words · Law · News" strip) — it's
   already removed in the latest landing file; just don't reintroduce it.

## JOB 1 — Pages (routes)

| Route | Page | Notes |
|---|---|---|
| `/` | Home | existing landing (inside Layout) |
| `/about` | About / Studio | fuller story: what Potesia is, mission, the four-field thread, founder bio |
| `/products` | Products overview | the four products as rich cards linking to detail pages |
| `/products/dive` | DIVE detail | what it is, who it's for, key features, screenshots placeholder, "Get on Google Play" CTA |
| `/products/somna` | Somna detail | "The Canvas of Dreams" — features, status, waitlist CTA |
| `/products/lindungi-id` | Lindungi ID detail | membership legal services overview, status |
| `/products/titahbogani` | Titahbogani | short intro + outbound link to titahbogani.com |
| `/contact` | Contact | partnership/press/general; email + simple form (mailto or a form service) |
| `/privacy` | **Privacy Policy (Potesia)** | company-wide policy — see JOB 2 |
| `/privacy/dive` | **DIVE Privacy Policy** | app-specific, for Google Play — see JOB 2 |
| `/terms` | Terms of Service | see JOB 3 |
| `*` | 404 | friendly not-found with link home |

Link the legal pages from the footer (Privacy, DIVE Privacy, Terms). Each product detail page is short,
honest about status (Launching / In development), and matches the landing aesthetic.

## JOB 2 — Privacy Policy (the priority) — accurate, not generic

Write **two** policies: a company-wide one at `/privacy`, and a **DIVE-specific** one at `/privacy/dive`
that Google Play will point to. Ground them in DIVE's **actual** data practices below — do NOT produce a
vague boilerplate policy.

**What DIVE actually collects/processes (use this to write accurately):**
- **Account data:** owner email, display name, profile photo; staff profiles (name, 6-digit PIN, avatar).
- **Business/store data:** store name, business category, full address, **GPS coordinates**, WhatsApp
  number, currency.
- **Transaction data:** sales, line items, prices, COGS, payment method/status, timestamps; **per-
  transaction location, weather, and temperature captured via GPS when enabled**; cashier identity.
- **Customer/member data entered by the merchant:** member names, contacts, loyalty points, credit
  balances, purchase history.
- **Product data & images** (uploaded to storage), subscription/billing info (tier, vouchers, validity),
  app usage for analytics/BI, device/log information.
- **Infrastructure & processors:** data is stored in **Supabase** (PostgreSQL + Storage, hosted on cloud
  infrastructure); authentication via Supabase Auth; app distributed via **Google Play**; subscription
  payments via a third-party payment gateway (name it once known); optional email/notification services.

**The policies must cover, in plain language:**
1. Who we are + contact (legal entity name, address, privacy contact email — leave clear placeholders).
2. What data is collected (the categories above) and **how** (entered by user, captured automatically,
   from GPS/device).
3. **Why / legal basis** for each use (provide the service, process payments, support, security,
   improvement).
4. **Location data** — explicit section: GPS for store location and per-transaction capture, that it's
   optional/consent-based, and how to disable it.
5. **Controller vs processor distinction (critical for a POS app):** Potesia is the **controller** for
   merchant account/business data, but for the **end-customer/member data that merchants enter, the
   merchant is the controller and Potesia acts as a data processor** on their behalf. State this clearly.
6. **Third parties / sub-processors** (Supabase/hosting, payment gateway, Google Play, email) and that we
   don't sell personal data.
7. **Storage location & international transfer** (data hosted in a cloud region; cross-border transfer
   safeguards).
8. **Retention & deletion** — tied to subscription tier and the archive policy; account deletion is
   available in-app and is irreversible (the delete-account flow), and what happens to data on deletion.
9. **Security measures** (encryption in transit, access controls, RLS) — described honestly, no over-
   claiming.
10. **User rights** — access, correction, deletion, export (the app has a full data-export feature),
    objection/withdrawal of consent — and how to exercise them.
11. **Children** — service is for businesses; not directed at children under the applicable age.
12. **Changes to the policy** + **effective / last-updated date**.
13. **Compliance references:** Indonesia's **Personal Data Protection Law (UU No. 27 of 2022 / UU PDP)**,
    and, because Potesia aims to serve users internationally, general international data-protection
    principles (GDPR-style rights) — phrased as principles we follow, without over-claiming certification.

**Format:** clean readable legal layout — constrained reading width, clear headings, a table of contents
with anchor links, "Last updated" date, bilingual EN/ID. The DIVE policy should also explicitly map to
Google Play's **Data Safety** categories so the Play Console form and the policy match.

> **Legal disclaimer to include in your output to me:** you are generating a thorough starting template
> based on the described data practices, **not legal advice**. I (the owner) must have it reviewed by a
> qualified lawyer and must fill the placeholders (legal entity name, registered address, privacy contact,
> governing jurisdiction, payment-gateway name) with accurate details before publishing. Mark every such
> placeholder clearly (e.g. `[LEGAL ENTITY NAME]`).

## JOB 3 — Terms of Service (`/terms`)

A standard, readable ToS template covering: acceptance; description of services; **subscription tiers
(Free/Pro/Max), billing, vouchers, renewals, and refunds**; acceptable use; **the merchant's
responsibility for the customer data they enter and for obtaining their customers' consent**; intellectual
property; service availability and disclaimers; limitation of liability; suspension/termination; governing
law (Indonesia) and dispute resolution; changes. Same readable layout + last-updated date + the same
"template, get it lawyer-reviewed, fill placeholders" disclaimer. Bilingual.

## JOB 4 — SEO, metadata & deploy-readiness

- Per-page **`<title>` and meta description**, Open Graph/Twitter tags, and a **favicon + app icons** from
  the Potesia logo.
- `robots.txt` and a `sitemap.xml` including all routes (so the privacy URLs are indexable/stable).
- Ensure the **privacy URLs are stable and public** (e.g. `https://potesia.com/privacy/dive`) — this is
  the URL you'll paste into the Google Play Console.
- Confirm the build (`npm run build`) produces a static site deployable to Vercel/Netlify, and that
  client-side routes work on refresh (SPA fallback / proper redirects config).

## Constraints

- Reuse the existing components, tokens, and animation system — every page must feel like one site.
- Bilingual EN/ID across **all** pages via the shared language context; no hardcoded one-language strings.
- Responsive + accessible (keyboard focus, reduced-motion respected, sufficient contrast on legal text).
- Don't break the existing landing page. Small, reviewable commits.

## Acceptance criteria

1. All routes render inside the shared Layout; nav + footer consistent; scroll resets on navigation.
2. **`/privacy` and `/privacy/dive` exist, are comprehensive, accurate to DIVE's real data practices,
   bilingual, dated, and reachable at a stable public URL** ready to paste into Google Play.
3. ToS at `/terms`; both legal pages carry the lawyer-review disclaimer and clearly marked placeholders.
4. Language toggle works on every page and persists across navigation.
5. Product detail pages exist for all four products with honest status.
6. SEO metadata + favicon + sitemap/robots present; `npm run build` deploys and refresh-on-route works.

## Process

1. Inspect `PotesiaSite.jsx` and the current design tokens/animation utilities. **Post a short plan**
   (routing structure, shared Layout + LanguageContext extraction, page list, legal-page approach) and
   wait for my OK before large edits.
2. Build in order: Job 0 (routing + layout + language context) → Job 2 (privacy policies, the priority) →
   Job 3 (terms) → Job 1 (about, products, detail pages, contact, 404) → Job 4 (SEO/deploy). Show each
   page as you go.
