# Improve Website Plan

## Context

- **Project:** Freeze Audio by sheezy — landing page for a macOS Audio Unit plugin ("Time Effector": reverse, freeze, stretch, tape-stop, granular engines).
- **Stack:** Astro 7, fully static, zero client JS by default, i18n EN (default, unprefixed) + FR. Deployable to any static host.
- **Pages in scope:** `/` (home, EN) and `/fr/` (home, FR) — single landing page, one flow: Hero → Engines → Showcase → Controls → Download → Install → Compat → FAQ → Footer.
- **Date started:** 2026-10-09.
- **Intake answers (2026-10-09):**
  - **ONE action per page:** Download the `.zip` (`/downloads/FreezeAudio-1.0.0-macOS.zip`). "Install guide" stays as the single transitional CTA — not a competing action.
  - **Conversion problem / evidence:** No analytics, page not launched yet (`site.url` is still `https://example.com`). Phase 1 runs on heuristic + qualitative evidence; no funnel numbers available.
  - **Traffic:** Zero / not launched. A/B tests cannot reach significance — diagnosis is qualitative + heuristic, fixes ship with pre-committed metrics in EXPERIMENTS.md for post-launch use.
  - **Top complaint:** None yet — Phase 1 diagnosis decides the fix order rather than a guessed complaint.
- **Existing docs:** `BRIEF.md` (product brief, audience, constraints) and `DESIGN.md` (full token system, palette, WCAG contrast table) exist at repo root — Phase 5/7 build on these; the journey's artifacts live in `docs/` as UPPERCASE files per the skill convention. `docs/DESIGN.md` will reference the root `DESIGN.md` token system rather than duplicate it.
- **Known open items from BRIEF.md that affect the site:** domain not set, free-vs-paid undecided, Gatekeeper/notarization warning unresolved (FAQ currently says "no price listed"), official AU host test list is thin (only FL Studio). These are product decisions, surfaced in audits — not silently "fixed" by copy edits.
- **Baseline observations from intake reading (to be verified in phases):**
  - Body type already at 16px / line-height 1.5 / fluid clamp scale / self-hosted fonts with `font-display: swap` → Phase 4 may be skippable or light (measure ~66ch on key templates during the phase).
  - Contrast pairs documented with WCAG ratios in root `DESIGN.md` → Phase 3 color work has a verified base.
  - Zero client JS, static output → Core Web Vitals likely green; Phase 6 likely light/skippable pending a Lighthouse run.

## Phase Status
| Phase | Skill | Status | Artifact | Date |
|---|---|---|---|---|
| 1 | cro-methodology | done | METRICS.md, WEBSITE.md, EXPERIMENTS.md | 2026-10-09 |
| 2 | ux-heuristics | done | DESIGN.md, EXPERIMENTS.md | 2026-10-09 |
| 3 | refactoring-ui | pending | DESIGN.md, EXPERIMENTS.md | |
| 4 | web-typography | pending | DESIGN.md, EXPERIMENTS.md | |
| 5 | storybrand-messaging | done | POSITIONING.md, EXPERIMENTS.md | 2026-10-09 | |
| 6 | high-perf-browser | pending | METRICS.md, WEBSITE.md, EXPERIMENTS.md | |
| 7 | made-to-stick | pending | POSITIONING.md, EXPERIMENTS.md | |
| 8 | design-everyday-things | pending | DESIGN.md, EXPERIMENTS.md | |

Statuses: pending · in-progress · awaiting-evidence · done · deferred: <reason> · skipped: <reason>

## Key Decisions
| Date | Phase | Decision | Rationale |
|---|---|---|---|
| 2026-10-09 | Intake | ONE action = Download the .zip; install guide is the single transitional CTA | Single conversion goal scopes every phase; competing CTAs removed from measurement |
| 2026-10-09 | Intake | No analytics / not launched → qualitative + heuristic diagnosis; A/B pipeline deferred to post-launch | Low/zero traffic cannot reach significance; pre-commit metrics anyway |
| 2026-10-09 | Intake | Journey artifacts in `docs/` (UPPERCASE); root `BRIEF.md`/`DESIGN.md` stay the source of truth for product + tokens | Skill convention + avoid duplicating an already-verified design system |
| 2026-10-09 | 1 | CTA treatment: Download stays the only direct CTA; "Install guide" the single transitional CTA; add "Free · v1.0.0" at CTAs (F5) | ONE-action rule + Price objection had no on-page counter |
| 2026-10-09 | 1 | Attack order A: restore trust/fit answers first (F1 Gatekeeper block + restore Compat F3 + restore FAQ F4 + state Free F5); demo audio (F2) commissioned in parallel as the big bet | Restoration is high-confidence copy work; demo audio is the bigger lever but blocked on recordings |
| 2026-10-09 | 1 | Accept heuristic + qualitative evidence as Phase 1 basis; pre-commit primary metric = download starts per landing visitor (zero-JS server-log measurement) | No traffic; measurement plan recorded in METRICS.md |
| 2026-10-09 | 2 | Engine names standardized on "Tape"/"Grain" (U1) — they match the plugin's own mode strip | Recognition: visitors match site copy to the plugin UI they see post-install |
| 2026-10-09 | 2 | Freeze-engine behavior confirmed = ping-pong (alternating forward/backward); EN copy was wrong (U2) | Product truth from the maker; EN copy corrected to match FR |
| 2026-10-09 | 2 | Mobile nav: section links restored in a compact 2-row layout below 48rem (U3) | Trunk Test orientation on phones; scroll-only discovery removed |
| 2026-10-09 | 2 | Phase 2 fix package (U1, U2, U3, U4, U6, U7) shipped in-session; fixes run by severity, not ease | User sign-off at Phase 2 exit; severity-1 items were trivial enough to ride along |
| 2026-10-09 | 5 | Hero rewrite = concrete descriptive: "Replay the *last seconds* of your track — backwards, frozen, slowed." | Describes exactly what the plugin does — safest 5-second pass; poetry dropped |
| 2026-10-09 | 5 | One-liner A chosen: "Freeze is a free Mac plugin that captures the last seconds of your track and plays them back backwards, frozen, or stretched — so you make transition effects live instead of editing them by hand." | Simplest to repeat after one hearing (cocktail party test) |
| 2026-10-09 | 5 | Internal problem = "the moment dies in the workaround" — the workaround kills the idea before you hear it | The emotional driver; copy leans on "while it's still alive" / "no bounces, no clip editing" |
| 2026-10-09 | 5 | "Time Effector" dropped everywhere (U5): hero eyebrow now "Free Audio Unit plugin for macOS · v1.0.0"; JSON-LD alternateName → "Freeze" | Invented jargon cost comprehension; producers don't scan for it |
| 2026-10-09 | 5 | "Free" stated at hero CTA, download CTA, meta description, and eyebrow (F5) | Phase 1 decision executed — Price objection now countered on-page |

## Phase 1 findings that change the later plan

- **Phase 4 (web-typography) → skip candidate:** body 16px / lh 1.5 / clamp scale / self-hosted `swap` fonts already meet targets; Phase 4 will measure ~66ch on key templates and skip unless a miss is found.
- **Phase 6 (high-perf-browser) → skip candidate:** Lighthouse 100/100/100 on `/` desktop, `/` mobile, `/fr/` mobile; LCP 1.2 s mobile, CLS 0.008, TBT 0 ms, 4 requests / 77 KB, zero client JS. Baselines recorded in METRICS.md — Phase 6 verifies rather than derives.
- **Phase 5 (storybrand-messaging) is now the critical path** for conversion: hero rewrite (F6) + "Free" placement (F5) + one-liner.
- **F1 (Gatekeeper) routes to Phase 8** (design-everyday-things) as an error-prevention + copy task on the install flow.

## Next Actions
- [x] Confirm this phase plan (user) — 2026-10-09
- [x] Phase 1 exit decisions: CTA=Download+"Free" · attack order A · heuristic evidence accepted — 2026-10-09
- [x] Phase 2 done: heuristic evaluation scored 5/10; U1-U7 found; fix package (U1, U2, U3, U4, U6, U7) shipped — 2026-10-09
- [x] Phase 5 done: hero rewritten (concrete descriptive), one-liner A chosen, internal problem = "the moment dies in the workaround", "Time Effector" dropped everywhere, "Free" at CTAs + meta — 2026-10-09
- [ ] In parallel: restore Compat + FAQ components (F3/F4, uncomment source) and add Gatekeeper block (F1) — copy work, no methodology dependency
- [ ] Before Phase 6: domain decision unblocks F8 (`site.url`); commission demo audio (F2) and beta quotes (F7)
- [ ] Phase 4/6 exit: confirm skip from measured baselines
- [ ] Before Phase 6: build + run Lighthouse to decide skip vs. light pass (owner: user/session)
- [ ] During Phase 4: measure line length (~66ch) on key templates to confirm skip vs. fix
