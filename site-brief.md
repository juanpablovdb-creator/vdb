# Personal Site — Design & Content Brief

## 1. Positioning

Three lenses, one identity: **Technical Creative Builder — Sales / Data / Marketing — Vibe Coder.**
Primary audience: recruiters, event organizers, speaking/teaching opportunities.
Secondary audience: potential clients/partners across Vloom and consulting work.

Hero line should NOT be a job title. It should be a single sentence that holds all three
lenses at once — the technical/builder side, the sales-data-marketing operator side, and
the "vibe coder" energy (building fast with AI tools, instinct-driven, ships over polishes).
Draft options to react to (refine in your own voice):

- "Technical creative builder. I ship with data, sell with story, and code by vibe."
- "Half engineer, half operator, all builder — I vibe code my way into every product."
- "I build companies, tools, and campaigns — technical enough to ship, creative enough to sell it."
- "Sales instincts, data discipline, vibe-coded execution."

## 2. Structure: single scrolling page

Kamo-style: one page, card-grid sections, no sub-navigation required. Fast to build,
everything scannable in one pass. Sticky top nav with anchor links to each section
(Proyectos / Companies / Previous Work / Education / Consultancy / Audiovisual / Contact).

## 3. Section-by-section content map

### Hero
- One-sentence positioning statement (see above)
- Optional stat row (Kamo-style), e.g. "X companies built · X years · X countries" —
  fill in real numbers, only include ones that are genuinely impressive/true. Once
  Nauta numbers are shared, this is a strong place to surface one (e.g. listings
  tracked, revenue managed, whatever's most concrete)
- Light/dark toggle, top right, persists via localStorage-equivalent (see build notes)

### Proyectos de Ingeniería
- **Stripboarder**
- **Leadflow** (AI creative)
- **Nauta — Analytics for Airbnb** — the technical/product build (dashboards, data
  pipeline, whatever the actual engineering scope is)
- Card: title, one-line description, tech/role tag, link if live

### Companies
- **Vloom** — video editing & content production agency. Pull real data/metrics from
  what's been created (client roster, volume, notable campaigns)
- **Nauta** — Airbnb tech operations, the business side (ops, clients, revenue —
  numbers to come from you)
- **Legacy Ledger** — crypto inheritance / digital legacy platform

*Note: Nauta intentionally appears in both sections — the Proyectos card is the
technical build, the Companies card is the operating business. Keep the copy on each
distinct so it doesn't read as a duplicate.*
- Cards can be slightly larger than Proyectos cards since these carry more weight —
  logo/wordmark, one-liner, your role, link

### Previous Work
- **Growth Manager, Bunny** → Bunny Studio One, since split into Bunny Creative.
  Worth a sentence on what you built there before the split, it's a good "this thing
  now exists independently" credibility beat
- **Production Coordinator**, film work — one line on scope/scale

### Education & Speaking
- **AI Masterclass** — professionals, Australia
- **Universidad de los Andes** — Entrepreneur for Engineers, panelist
- **Biz and Beer** — "The Power of Video Marketing for Your Personal Brand"
- This section doubles as proof-of-speaking for recruiters/event organizers — treat
  each entry as a mini case: what you spoke about, who the audience was

### Consultancy / Side Gigs
- **Travel Diaries** — sales & growth expansion to US
- **Datumcon** — growth & sales consultancy
- **Original Productions** — video content consultancy
- **Koinly** — video producer
- **Voice123** — sales consultancy
- **ETHGlobal NY 2026** — hacker participation
- This is your widest section — use a tighter card (logo + one line) so it doesn't
  visually dominate over Companies/Proyectos

### Audiovisual
- Two-tab or two-column split: **Photos** / **Video**
- Grid of stills; since video clips aren't ready yet, use hover-triggered
  crossfade/zoom on stills rather than autoplay video (see interaction notes below)
- This section can carry the most visual weight on the page — it's your medium

### Contact / CTA
- Not buried at the bottom as an afterthought — make it visually distinct
- "Available for: speaking, consulting, hiring" — pick the honest subset
- Email + calendar link + social row (LinkedIn, etc.)

## 4. Visual direction: Warm Editorial, light + dark

### Light mode
- Background: `#F7F3EC` (warm cream, not stark white)
- Text: `#2B2521` (warm near-black)
- Accent: `#C1613F` (muted terracotta) — used only for links, hover states, active nav

### Dark mode
- Background: `#1C1815` (warm charcoal, not pure black)
- Text: `#F0EAE1`
- Accent: same `#C1613F`, check contrast holds on dark bg (likely needs +5-10%
  lightness for AA compliance — verify in build)

### Typography
- Headers: a serif with some character (carries editorial/creative-technologist feel)
- Body/labels/dates: clean grotesk/sans, small caps for category labels
- Numbers/tags (dates, stack, role): consider a mono for a technical accent

## 5. Signature interactions (limit to 2–3, keep them earning their place)

1. **Hero** — subtle text or cursor-reactive detail on load, nothing that delays
   scroll or feels gimmicky
2. **Project/company cards** — hover reveals a still (crossfade + slight scale,
   150–250ms ease), since video isn't ready yet this is the Stokt-style moment
   adapted to what you actually have
3. **Light/dark toggle** — make the transition itself smooth (crossfade background/text
   color, not an instant snap) so it feels like a deliberate interaction, not a utility

## 6. Build notes for Cursor

- CSS custom properties for both palettes, toggle via a `data-theme` attribute on
  `<html>`, respect `prefers-color-scheme` as the default before user toggles manually
- Card component should be one reusable component with props for: title, tag/label,
  one-liner, image, link — since nearly every section is the same card shape
- Keep image assets optimized (webp) since Audiovisual section will be image-heavy
- Anchor-link nav with scroll-spy (highlight current section) is a nice-to-have,
  not essential for v1

## 7. Open questions to resolve before/while building

- Real stats for the hero stat row (only include if genuinely strong)
- Logos/wordmarks for Vloom, Nauta, Legacy Ledger, Bunny — do these exist or need
  to be sourced/created?
- Final still selection for the Audiovisual grid
- Confirm accent color — terracotta is a placeholder, pull from Vloom/reel branding
  if there's an existing color to stay consistent with
