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
| 3 | refactoring-ui | done | DESIGN.md, EXPERIMENTS.md | 2026-10-09 |
| 4 | web-typography | done | DESIGN.md, EXPERIMENTS.md | 2026-10-10 |
| 5 | storybrand-messaging | done | POSITIONING.md, EXPERIMENTS.md | 2026-10-09 |
| 6 | high-perf-browser | done | METRICS.md, WEBSITE.md, EXPERIMENTS.md | 2026-10-10 |
| 7 | made-to-stick | done | POSITIONING.md, EXPERIMENTS.md | 2026-10-09 |
| 8 | design-everyday-things | done | DESIGN.md, EXPERIMENTS.md | 2026-10-09 |

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
| 2026-10-09 | 3 | Card headings: **two tiers kept as deliberate hierarchy** (feature cards vs supporting cards) but both made fluid (`--fs-h3-card-lg` / `--fs-h3-card`) | Unify-to-one-token rejected: Engines/Controls cards are feature-level, Install/Showcase supporting; fixed sizes broke the ramp |
| 2026-10-09 | 3 | All three findings (V1-V3) shipped in-system; no new palette work — grayscale reads and contrast is verified | Audit scored 9/10; color adds nothing until layout works, and it already does |
| 2026-10-09 | 3 | Marquee (8rem, ~1.5× H1) recorded as **deliberate** signature moment (V4) | North-reference structure; aria-hidden, below the fold, 10.91:1 contrast |
| 2026-10-09 | 7 | Commander's Intent (option a): "Freeze replays what your track just played — backwards, frozen, or slowed." | 11 words, mechanism + 3 headline engines; the compass for every future surface |
| 2026-10-09 | 7 | All four stickiness fixes shipped: loss-frame hero open, "last 8 seconds", 1s/2min testable credential, vocal→pad micro-story | Message was clear (Phase 5) but 33/60 on SUCCESs; now 46/60; remaining points need real assets (F2/F7), not copy |
| 2026-10-09 | 7 | "Smaller than a screenshot of the plugin" rejected — verified false (74 KB source < 224 KB zip) | Sticky claims must stay verifiable; size comparison failed fact-check |
| 2026-10-09 | 8 | Gatekeeper recovery block teaches **both** paths: System Settings › "Open Anyway" (GUI) + `xattr -dr com.apple.quarantine` (Terminal), in Install after the 3 steps | Both audiences (non-technical + technical producers) hit the same dialog; GUI-only or Terminal-only would strand half of them |
| 2026-10-09 | 8 | FAQ q1 rewritten to commit to the free model: "Freeze is free. … no account, no installer, no catch." (EN + FR) | The answer must match the question the visitor actually asks ("is it free?") — and it locks site copy to the free model per the Phase 1 exit decision |
| 2026-10-09 | 8 | Risk-reversal line added at the hero CTA: "No account. Uninstall = delete one file." (EN + FR) | Norman: undo/exit must be surfaced where the action is asked — commitment fear lives at the button, not in the FAQ |
| 2026-10-10 | 4 | Typefaces kept: Inter Tight Variable + Instrument Serif italic — no pairing repair | Both faces verified actually loading, contrast is structural (grotesque vs. high-contrast serif italic), payload 65.4 KB. The defect was measure, not typeface choice |
| 2026-10-10 | 4 | Measure scope: gatekeeper **and** all prose to 50ch (~66 characters — the optimum, not the 75 ceiling) | Phase 4 found a real miss rather than the predicted skip; the `rem` caps were delivering 101/88 characters per line |
| 2026-10-10 | 4 | Measure caps moved from `rem` to a single `--measure: 50ch` token | `ch` is font-relative, so 50ch holds ~66 characters at any font size and self-corrects on a font swap; `rem` caps drifted silently, which is how T2 arose |
| 2026-10-10 | 6 | CLS fix = preload + metric-matched fallback — not `font-display: optional`, not accept | `optional` zeroes CLS but shows first-time visitors the page without Inter Tight or the serif accents, and the design is the pitch; accepting 0.071 left a real, proven, cheap-to-fix shift in place |
| 2026-10-10 | 6 | Deploy-host transport rows (HTTP/2, compression, `Cache-Control`) recorded as a requirements table in METRICS.md, not a committed `_headers` file | The host is unchosen (F8); a host-specific config file would presume a platform, while the requirements belong with the measurements |
| 2026-10-10 | 6 | Metric-matched fallback retained despite being only partially effective (F11) | Correct and harmless as a second line of defence, and the preload is the effective fix; the `ch`-cap interaction is recorded as a finding rather than silently reverted |

## Phase 1 findings that change the later plan

- **Phase 4 (web-typography) → NOT a skip: measured 2026-10-10, one real miss found (measure).** Body 16px / lh 1.5 / clamp scale / self-hosted `swap` fonts met their targets exactly as predicted, but line length did not: prose caps authored in `rem` delivered 101/88 characters per line where `ch` reported compliance (Inter Tight's `ch` is 1.33× its average character width). Fixed with a `--measure: 50ch` token + a no-wrap command block (T1–T4). Score 9/10 → 10/10.
- **Phase 6 (high-perf-browser) → NOT a skip: verified 2026-10-10, one real regression found (CLS).** Lighthouse 12.8.2 / Chromium 152 on the current build: Performance 100/100/100, Accessibility 100, SEO 100, LCP 0.29 / 1.20 / 1.28 s, TBT 0 ms, 5 requests / 88 KB. CLS had regressed 0.009 → **0.071 desktop / 0.041 mobile** (proven font-swap cause, F10); fixed with preloads + metric-matched fallbacks → **CLS 0.000, 0 layout shifts**. The three transport rows (HTTP/2+, Brotli, caching) stay ungraded until the host is chosen (F12).
- **Phase 5 (storybrand-messaging) is now the critical path** for conversion: hero rewrite (F6) + "Free" placement (F5) + one-liner.
- **F1 (Gatekeeper) routes to Phase 8** (design-everyday-things) as an error-prevention + copy task on the install flow.

## Next Actions
- [x] Confirm this phase plan (user) — 2026-10-09
- [x] Phase 1 exit decisions: CTA=Download+"Free" · attack order A · heuristic evidence accepted — 2026-10-09
- [x] Phase 2 done: heuristic evaluation scored 5/10; U1-U7 found; fix package (U1, U2, U3, U4, U6, U7) shipped — 2026-10-09
- [x] Phase 5 done: hero rewritten (concrete descriptive), one-liner A chosen, internal problem = "the moment dies in the workaround", "Time Effector" dropped everywhere, "Free" at CTAs + meta — 2026-10-09
- [x] Phase 3 done: refactoring-ui audit scored 9/10; V1-V3 shipped (fluid card-heading tokens, 44px lang targets, off-scale strays), V4 marquee recorded as deliberate — 2026-10-09
- [x] Phase 7 done: SUCCESs 33→46/60; Commander's Intent (a) named; loss open, 8 seconds, 1s/2min, micro-story shipped — 2026-10-09
- [x] Phase 8 done: two-gulfs audit scored 6/10 → 10/10; Gatekeeper recovery block (both paths), Compat + FAQ restored, FAQ q1 "free" rewrite, hero risk-reversal line shipped, EN + FR — 2026-10-09
- [x] Before Phase 6: built + ran Lighthouse 12.8.2 on the current build (EN desktop, EN mobile, FR mobile) — 2026-10-10
- [x] Phase 4 done: measured on Chromium 152 (390/640/1280, EN+FR) via CDP — found a real miss (measure), not the predicted skip; `--measure: 50ch` token + no-wrap `code` block shipped — 2026-10-10
- [x] Phase 6 done: found + fixed the CLS regression (0.071 / 0.041 → **0.000**, 0 layout shifts) with font preloads + metric-matched fallbacks; baselines refreshed in METRICS.md — 2026-10-10
- [ ] At deploy (blocked on F8/domain): configure HTTP/2+, Brotli, and `Cache-Control: max-age=31536000, immutable` on `/_astro/*`, then re-run Lighthouse to grade F12 — see the METRICS.md requirements table
- [x] Optional items reviewed 2026-10-11 — **font subsetting: decided against.** The unused subsets are unicode-range-gated and verified to cost visitors nothing at runtime (0 bytes downloaded on both locales); hand-rolling a latin-only `@font-face` to shrink `dist/` would add a hand-maintained unicode-range for zero user benefit. **F11 (hero H1 cap unit): left open** — converting `22ch` to a fixed unit would break the cap's fluid scaling with the H1's clamp size, a design regression for no measured gain, since CLS is already 0.000.
- [ ] Before launch: domain decision unblocks F8 (`site.url` off `https://example.com`)
- [ ] Asset pipeline (parallel, blocks the two open severity-4/3 findings): commission demo audio (F2) and gather beta quotes (F7) — acquisition tasks, never fabricated
- [ ] Product-level (page mitigation shipped, root cause open): Apple notarization for Freeze.component (F1/N1); contact/support channel (F9)
- [x] `public/__ux_*.html` dev probes moved out of the build to `scripts/probes/` — they were being copied into `dist/` and would have been publicly live at `/__ux_probe.html` etc. (F13), 2026-10-11. Deleting the directory outright remains the user's call.

## Journey Closed — 2026-10-10

All eight phases are `done`. Nothing is `pending`, `skipped` or `deferred`. Exit checklist:

- [x] Every phase in this tracker shows `done`
- [x] Every fix is a table row with a priority — `WEBSITE.md` F1–F13 (severity 0-4), `DESIGN.md` U/V/N/T findings, `METRICS.md` baselines and requirements. *The artifact tables carry severity rather than an owner column; owners live in Next Actions above.*
- [x] THE ONE ACTION is unambiguous — verified in the built HTML: 3× Download (nav, hero, download section) + 1 transitional "Install guide". No competing CTAs.
- [ ] **Experiment Cards — deliberately empty.** Promotion requires real traffic and the page is unlaunched. Sizing is pre-staged in `EXPERIMENTS.md` so the trigger is arithmetic, not judgement, on launch day.

**Both phases of the final session found real defects rather than confirming the skips predicted at Phase 1.** Phase 4's measure miss (101 chars/line reported as 76ch) and Phase 6's CLS regression (0.009 → 0.071) were both invisible to CSS reading and only surfaced under measurement — which is the argument for keeping rendered measurement in the loop rather than trusting declared values.

**What remains is not page work.** F2 demo audio (sev 4, the biggest lever), F7 beta quotes (sev 3), F8 domain (sev 3 — also blocks F12's transport rows), F9 contact channel (sev 2), and Apple notarization (F1's root cause). Every one is an acquisition or product decision, not a site fix. F13 (probe pages shipping to production) was found on review after the close and fixed the same day.

**Forward routing:** once the site converts and needs qualified traffic → `grow-website`. If the friction moves into the plugin itself → `improve-app`.
