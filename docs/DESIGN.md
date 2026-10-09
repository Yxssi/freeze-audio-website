# Design System

Journey artifact for the improve-website journey (started 2026-10-09). The **root `DESIGN.md` stays the source of truth for the token system** (palette, WCAG contrast table, type ramp) — this file records the journey's UX findings and design decisions and references it rather than duplicating it.

## Design Direction

Owned by Phase 3 (refactoring-ui) and the optional `top-design` phase. Current direction: light lavender-tint editorial single-pager, Instrument Serif italic accents on Inter Tight, dark Showcase/Footer bands, mode marquee as the signature moment. Grayscale hierarchy pass pending Phase 3.

## Typography

Owned by Phase 4 (web-typography). Baseline from Phase 1: body 16px / lh 1.5 / fluid clamp scale / self-hosted woff2 with `font-display: swap` (Inter Tight 45.2 KB + Instrument Serif italic 22.4 KB, well under the 200 KB budget). Pending: measure (~66ch) check on key templates to confirm the Phase 4 skip.

## Tokens

Source of truth: root `DESIGN.md` (palette shades, tinted grays, contrast pairs with WCAG ratios). Phase 3 (refactoring-ui) will extend this section with any spacing-scale or shadow corrections found.

## Components

| Component | Decision | Status |
|---|---|---|
| Nav | Section links restored on mobile (2-row layout below 48rem) — Phase 2 U3 decision | pending (Phase 3 reviews layout) |
| Hero marquee | Keyboard-operable pause toggle; `prefers-reduced-motion` stops animation and hides the control | healthy — no change |
| Engine cards | Renamed "Tape Reverse"→"Tape", "Grain Reverse"→"Grain" to match the plugin's mode strip — Phase 2 U1 decision | fixed 2026-10-09 |
| Preset table | Engine column aligned to "Tape"/"Grain" (same U1 decision) | fixed 2026-10-09 |
| Footer CTA | Label gains product name ("Download Freeze {version}") — Phase 2 U7 | fixed 2026-10-09 |

## UX Audit Findings

Phase 2 (ux-heuristics) evaluation, 2026-10-09. Nielsen + Krug; severity 0-4 (frequency × impact × persistence). Score at evaluation: **5/10**. F-prefixed findings carried over from Phase 1 (docs/WEBSITE.md Audit Findings); U-prefixed findings are new in Phase 2.

| Issue | Heuristic | Severity (0-4) | Fix | Status |
|---|---|---|---|---|
| F1 — Gatekeeper warning absent page-wide; first load can be silently blocked | H5 Error prevention | 4 | Gatekeeper/troubleshooting block in Install + trust note at first CTA | open → Phase 8 |
| F3 — Compat section commented out | H10 Help & docs | 3 | Restore `Compat.astro` + nav/footer links | approved (attack order A) |
| F4 — FAQ commented out; troubleshooting invisible | H10 Help & docs | 3 | Restore `Faq.astro` + nav/footer links | approved (attack order A) |
| F6 — Hero poetic, fails 5-second test | H2 Match real world | 3 | Rewrite H1/lead in customer language | open → Phase 5 |
| U2 — EN/FR described different Freeze-engine behavior ("looped forever" vs "ping-pong infini") | H4 Consistency | 3 | Product truth confirmed = **ping-pong**; EN copy corrected | fixed 2026-10-09 |
| U1 — Engine names inconsistent: cards/table said "Tape Reverse"/"Grain Reverse" vs "Tape"/"Grain" in marquee, showcase, plugin mode strip | H4 Consistency | 2 | Standardized on **"Tape"/"Grain"** (matches the plugin UI users see post-install) — `Engines.astro`, `Controls.astro` | fixed 2026-10-09 |
| U3 — Mobile nav hid all section links below 48rem (Trunk-Test orientation fail on phones) | H6 Recognition | 2 | Section links restored in compact 2-row mobile nav | fixed 2026-10-09 |
| U5 — "Time Effector" invented jargon in hero eyebrow | H2 Match real world | 2 | Rename or drop alongside hero rewrite | open → Phase 5 |
| U4 — EN copy used French spacing before "?" ("How does it work ?") | H2 Match real world | 1 | Spaces removed in EN strings (FR keeps French spacing — correct there) | fixed 2026-10-09 |
| U6 — Install step 1 hardcoded `FreezeAudio-1.0.0-macOS.zip` in i18n copy | H4 Consistency | 1 | Filename interpolated from `release.downloadPath` — no drift at v1.0.1 | fixed 2026-10-09 |
| U7 — Footer CTA read "Download 1.0.0" (no product name) | H4 Consistency | 1 | "Download Freeze {version}" | fixed 2026-10-09 |

Trunk Test (one-page site, simplified): site ✓ (wordmark + footer) · page ✓ · major sections partial → U3 fix restores orientation · "you are here" n/a (anchor nav, no scrollspy — acceptable for a one-pager) · search n/a.

Confirmed healthy — no action: skip-link, focus-visible rings, `prefers-reduced-motion` handling, keyboard-operable marquee pause, one consistent primary CTA (Download) across nav/hero/section/footer, descriptive image `alt` text, `aria-current` on the EN/FR switch, no mystery-meat navigation.

## Microinteraction Inventory

| Interaction | Trigger/Rules/Feedback/Loops | Fix | Status |
|---|---|---|---|
| Marquee scroll + pause | CSS animation; pause on hover, on toggle checkbox (keyboard/touch), on `prefers-reduced-motion`; label swaps Pause↔Resume; focus ring on toggle | none — accessible as built | healthy |
| Link/button hover | Color shift + underline on nav links; button styles via `.btn` tokens | none | healthy |