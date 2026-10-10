# Design System

Journey artifact for the improve-website journey (started 2026-10-09). The **root `DESIGN.md` stays the source of truth for the token system** (palette, WCAG contrast table, type ramp) — this file records the journey's UX findings and design decisions and references it rather than duplicating it.

## Design Direction

Owned by Phase 3 (refactoring-ui) and the optional `top-design` phase. Current direction: light lavender-tint editorial single-pager, Instrument Serif italic accents on Inter Tight, dark Showcase/Footer bands, mode marquee as the signature moment. Grayscale hierarchy pass complete (Phase 3, 2026-10-09, score 9/10).

## Typography

Owned by Phase 4 (web-typography), audited 2026-10-10. **Score 9/10 → 10/10** after the fix. Method: the built site measured through the DevTools Protocol on Chromium 152 (Opera), EN and FR, at 390 / 640 / 1280 px — real per-line **character** counts derived from glyph geometry, not `ch` estimates or CSS reading.

### Typefaces

**Kept (decision 2026-10-10).** `Inter Tight Variable` for body, UI and headings; `Instrument Serif` italic for `.accent` spans only.

- Contrast is structural — a narrow grotesque against a high-contrast serif italic — not a near-miss pairing.
- Both faces verified *actually loading*: `document.fonts.check` returns true for each, and Instrument Serif ships a real italic file rather than a synthesised slant.
- Fallbacks complete on both stacks (`Avenir Next` → `Segoe UI` → `system-ui`; `Iowan Old Style` → `Georgia` → `serif`).
- Rejected: dropping the serif accent (saves 21.6 KB, costs every italic-accent moment) and reopening the pairing (would invalidate the Phase 3/5/7 tuning with no defect to justify it).

### Scale

One fluid `clamp()` ramp, no breakpoint jumps — verified rendering at every viewport tested. Weight is held at 500 across h1–h3, so hierarchy is carried by size alone (per the Phase 3 grayscale pass).

| Token | Value | Use |
|---|---|---|
| `--fs-h1` | clamp(2.75rem, 1.35rem + 4.6vw, 5.25rem) | Hero H1 |
| `--fs-h2` | clamp(2.125rem, 1.45rem + 2.4vw, 3.25rem) | Section headings |
| `--fs-h3` | clamp(1.625rem, 1.2rem + 1.4vw, 2.5rem) | — |
| `--fs-h3-card-lg` | clamp(1.5rem, 1.35rem + 0.5vw, 1.75rem) | Feature cards (Engines, Controls) |
| `--fs-h3-card` | clamp(1.25rem, 1.15rem + 0.35vw, 1.375rem) | Supporting cards (Install steps, Showcase) |
| `--fs-lead` | clamp(1.125rem, 1rem + 0.4vw, 1.3125rem) | Hero lead, section leads |
| `--fs-body` | 1rem (16px) | Body |
| `--fs-small` | 0.875rem (14px) | Eyebrow, facts labels, captions |

### Measure

**The Phase 4 defect.** Body size and line height met their targets on arrival; **measure did not** — and the cause was a unit-calibration error, not a sloppy value.

In Inter Tight the `ch` unit is **1.33× wider than the average character**: at 16px, `ch` = 9.25 px while real prose averages 6.97 px per character. The caps were authored in `rem` as though one `ch` and one character were the same thing, so `44rem` reported as 76ch while actually setting **101 characters per line**.

Max characters on any single line, before → after:

| Block | Before | After |
|---|---|---|
| Gatekeeper paragraphs | **158** (FR 166) | 67 (FR 69) |
| FAQ answers | **101** | 69 |
| Section leads (Engines etc.) | **88** | 68 |
| Hero lead | 67 | 67 *(already in band — became the reference)* |
| Mobile, every block | 58 | 58 |

**Fix:** one `--measure: 50ch` token. Because `ch` is font-relative, `50ch` delivers ~66 characters at *any* font size — it holds for 16px body and the 21px lead alike, and self-corrects if the typeface is ever swapped. Applied to the text-bearing element in each case (`.section-head p:not(.eyebrow)`, `details p`, `.gatekeeper p`, `.lead`): `ch` on a *container* resolves against the container's own font size, not its children's, which is what makes placement matter.

### Line height

Body 1.5 (24px) — in band. h1 1.05 / h2 1.1 sit just under the 1.1–1.25 heading band and are kept deliberately: both carry -0.045/-0.05em tracking at display sizes, where tighter leading reads as intended rather than cramped. h3 1.3. `text-wrap: balance` on headings, `pretty` on paragraphs — no orphaned words observed.

### Loading strategy

`@fontsource` self-hosted woff2, `font-display: swap`, latin subset only.

- **Loaded payload: 65.4 KB** (Inter Tight latin 43.8 KB + Instrument Serif latin italic 21.6 KB) — 33% of the 200 KB budget, identical on EN and FR. French needs no extra subset: its only non-Latin-1 character is the em-dash (U+2014), inside the latin range. The 7 unicode-range-gated subsets report `unloaded` in `document.fonts` on both locales — confirmed, not assumed.
- `inlineStylesheets: 'always'` is already set, so there is no font-CSS round trip.
- **Note for Phase 6:** `dist/` ships 264 KB of font files (latin-ext 89.8 KB, cyrillic 43.7, greek 33.9, vietnamese 10.5, plus a 19.3 KB `.woff` fallback). Unreachable by either locale — deploy weight only, no visitor cost. Subsetting is an optional Phase 6 cleanup.

### Quick Diagnostic — 9/10 → 10/10

| # | Row | Result |
|---|---|---|
| 1 | Body ≥ 16px | ✅ 16px, both locales, all viewports |
| 2 | Line length < 75 characters | ❌ → ✅ after the fix (see Measure) |
| 3 | Line height 1.4+ | ✅ 1.5 |
| 4 | Clear contrast between levels | ✅ 8-step fluid ramp, weight held at 500 |
| 5 | Tested at real sizes on real screens | ✅ Chromium 152 @ 390/640/1280, EN+FR |
| 6 | Font payload < 200 KB | ✅ 65.4 KB loaded |
| 7 | Fallbacks specified | ✅ complete on both stacks |
| 8 | Works at 200% zoom | ✅ 640px proxy — scrollWidth 625 ≤ 640, no overflow |
| 9 | Headings free of orphans | ✅ `balance` / `pretty` |
| 10 | Links visually distinct | ✅ underline + `--accent-ink`, hover to ink |

### Typography Findings

| Issue | Severity (0-4) | Fix | Status |
|---|---|---|---|
| T1 — Gatekeeper block had no measure cap: 158 characters on one line (FR 166) — the worst line length on the page, in the block a *blocked* user reads. Added in Phase 8, never measured. | 3 | `.gatekeeper p { max-width: var(--measure) }` + 52rem box | **fixed 2026-10-10** |
| T2 — Prose caps authored in `rem` as if `1ch ≈ 1 character`; Inter Tight's `ch` is 1.33× its average character width, so `44rem`/`48rem` reported `ch` compliance while delivering 101/88 characters. | 3 | `--measure: 50ch` token on the text-bearing element | **fixed 2026-10-10** |
| T3 — Hero lead was the only in-band prose block (67 chars at `38rem`). | — | no change — became the calibration reference | healthy |
| T4 — `.gatekeeper code` inherited `overflow-wrap: anywhere`, so the `xattr` command wrapped mid-token on mobile and a copy-paste could carry a line break. | 2 | `.gatekeeper code { white-space: pre; overflow-wrap: normal; overflow-x: auto }` | **fixed 2026-10-10** — verified: desktop 782 px content, one line, no overflow; mobile 752 px in 300 px → scrolls, never wraps |

Confirmed healthy — no action: body size, line height, fallbacks, zoom resilience, heading wrap, link distinction, and measure on mobile (every block ≤ 58 characters at 390px).

## Tokens

Source of truth: root `DESIGN.md` (palette shades, tinted grays, contrast pairs with WCAG ratios). Phase 3 (refactoring-ui) audit, 2026-10-09 — **score 9/10**, 7/8 diagnostic rows pass (grayscale hierarchy ✓, white space ✓, labels de-emphasized ✓, contrast ✓, shadows ✓). Fixes shipped in-system:

| Token / rule | Decision | Status |
|---|---|---|
| Spacing scale | Fully tokenized (4px base: 8/12/16/24/32/40/48/56/64/96/120/160) — verified, no arbitrary spacing anywhere | healthy |
| Palette | 5 source tones + derived neutrals, grays tinted (not pure), darkest `#1A1620` not `#000` — every text/bg pair measured AA in root DESIGN.md | healthy |
| Type ramp | Fluid clamps h1/h2/h3/lead confirmed; **two-tier card headings added as fluid tokens** (Phase 3 V1 decision — kept two tiers, made fluid): `--fs-h3-card-lg` (1.5→1.75rem, Engines + Controls feature cards) and `--fs-h3-card` (1.25→1.375rem, Install steps + Showcase features) | fixed 2026-10-09 |
| Measure (`--measure`) | `50ch` ≈ 66 characters in Inter Tight, whose `ch` is ~1.33× a real character — replaces the `rem` caps on prose elements (Phase 4 T1/T2). Applied to the text-bearing element, never to a container | fixed 2026-10-10 |
| Off-scale strays | `.lang` gap 0.35→0.5rem (V3); `.facts dt` 13px → `var(--fs-small)` 14px (V3) | fixed 2026-10-09 |
| Shadows | Exactly two on the page, both purposeful: Download card raised, plugin shot floating on dark — no change | healthy |
| Marquee display size (up to 8rem, ~1.5× H1) | **Deliberate** (V4): North-reference signature moment, `aria-hidden`, below the conversion fold, 10.91:1 contrast — kept | recorded |

## Components

| Component | Decision | Status |
|---|---|---|
| Nav | Section links restored on mobile (2-row layout below 48rem) — Phase 2 U3 decision | fixed 2026-10-09 |
| Nav — language switch | Tap targets raised to 44px equivalent: `min-height: 2.75rem`, inline-flex centered (Phase 3 V2 — was ~26-30px, the smallest target on the page on phones) | fixed 2026-10-09 |
| Hero marquee | Keyboard-operable pause toggle; `prefers-reduced-motion` stops animation and hides the control | healthy — no change |
| Engine cards | Renamed "Tape Reverse"→"Tape", "Grain Reverse"→"Grain" to match the plugin's mode strip — Phase 2 U1 decision | fixed 2026-10-09 |
| Card headings (Engines, Install steps, Showcase features, Controls presets) | Two-tier hierarchy kept as deliberate (feature vs supporting cards); both tiers now fluid `--fs-h3-card-lg` / `--fs-h3-card` (Phase 3 V1) | fixed 2026-10-09 |
| Download facts list | Labels on the scale (`--fs-small`), uppercase, ink-3 — values emphasized | healthy |
| Buttons | Two-tier hierarchy verified: primary filled (Amethyst, 4.98:1) / ghost outlined (Dusty Lavender border, 4.59:1); one filled CTA visible per viewport | healthy |
| Preset table | Engine column aligned to "Tape"/"Grain" (same U1 decision) | fixed 2026-10-09 |
| Footer CTA | Label gains product name ("Download Freeze {version}") — Phase 2 U7 | fixed 2026-10-09 |

## UX Audit Findings

Phase 2 (ux-heuristics) evaluation, 2026-10-09. Nielsen + Krug; severity 0-4 (frequency × impact × persistence). Score at evaluation: **5/10**. F-prefixed findings carried over from Phase 1 (docs/WEBSITE.md Audit Findings); U-prefixed findings are new in Phase 2.

| Issue | Heuristic | Severity (0-4) | Fix | Status |
|---|---|---|---|---|
| F1 — Gatekeeper warning absent page-wide; first load can be silently blocked | H5 Error prevention | 4 | Gatekeeper/troubleshooting block in Install + trust note at first CTA | **fixed on page 2026-10-09 (Phase 8)** — recovery block in Install; see Phase 8 audit below |
| F3 — Compat section commented out | H10 Help & docs | 3 | Restore `Compat.astro` + nav/footer links | **fixed 2026-10-09 (Phase 8)** |
| F4 — FAQ commented out; troubleshooting invisible | H10 Help & docs | 3 | Restore `Faq.astro` + nav/footer links | **fixed 2026-10-09 (Phase 8)** — q1 also rewritten to state "free" plainly |
| F6 — Hero poetic, fails 5-second test | H2 Match real world | 3 | Rewrite H1/lead in customer language | **fixed 2026-10-09 (Phase 5)** |
| U2 — EN/FR described different Freeze-engine behavior ("looped forever" vs "ping-pong infini") | H4 Consistency | 3 | Product truth confirmed = **ping-pong**; EN copy corrected | fixed 2026-10-09 |
| U1 — Engine names inconsistent: cards/table said "Tape Reverse"/"Grain Reverse" vs "Tape"/"Grain" in marquee, showcase, plugin mode strip | H4 Consistency | 2 | Standardized on **"Tape"/"Grain"** (matches the plugin UI users see post-install) — `Engines.astro`, `Controls.astro` | fixed 2026-10-09 |
| U3 — Mobile nav hid all section links below 48rem (Trunk-Test orientation fail on phones) | H6 Recognition | 2 | Section links restored in compact 2-row mobile nav | fixed 2026-10-09 |
| U5 — "Time Effector" invented jargon in hero eyebrow | H2 Match real world | 2 | Rename or drop alongside hero rewrite | **fixed 2026-10-09 (Phase 5)** — eyebrow is now "Free Audio Unit plugin for macOS · v1.0.0" |
| U4 — EN copy used French spacing before "?" ("How does it work ?") | H2 Match real world | 1 | Spaces removed in EN strings (FR keeps French spacing — correct there) | fixed 2026-10-09 |
| U6 — Install step 1 hardcoded `FreezeAudio-1.0.0-macOS.zip` in i18n copy | H4 Consistency | 1 | Filename interpolated from `release.downloadPath` — no drift at v1.0.1 | fixed 2026-10-09 |
| U7 — Footer CTA read "Download 1.0.0" (no product name) | H4 Consistency | 1 | "Download Freeze {version}" | fixed 2026-10-09 |

Trunk Test (one-page site, simplified): site ✓ (wordmark + footer) · page ✓ · major sections partial → U3 fix restores orientation · "you are here" n/a (anchor nav, no scrollspy — acceptable for a one-pager) · search n/a.

Confirmed healthy — no action: skip-link, focus-visible rings, `prefers-reduced-motion` handling, keyboard-operable marquee pause, one consistent primary CTA (Download) across nav/hero/section/footer, descriptive image `alt` text, `aria-current` on the EN/FR switch, no mystery-meat navigation.

## Phase 8 Audit (design-everyday-things) — 2026-10-09

Conversion-critical flow audited: **download .zip → unzip → copy Freeze.component → relaunch host → first load**. Norman's two gulfs + the seven-stage action model. Score at evaluation: **6/10** (failing diagnostic row: error recovery — every failure state after the download click was silent). Score after fixes: **10/10** — both gulfs bridged, all error paths answered on-page. N-prefixed findings are new in Phase 8.

| Issue | Norman gulf / principle | Severity (0-4) | Fix | Status |
|---|---|---|---|---|
| N1 (= F1) — Gatekeeper block at first load was the design failure: macOS shows a blame-the-user dialog ("developer cannot be verified") and the page taught no recovery | Gulf of Evaluation — error message with no "how to fix" | 4 | Recovery block in Install: quotes the exact dialog, states "nothing is broken", gives **both** paths (System Settings › "Open Anyway" + `xattr -dr com.apple.quarantine …`), EN + FR | fixed 2026-10-09 |
| N2 (= F3/F4) — Compat + FAQ commented out | Gulf of Execution — "will it work? what if it doesn't show up?" had no on-page answer | 3 | `Compat.astro` + `Faq.astro` restored; nav/footer links live; FAQ q3 (host-not-found) is the evaluation-side recovery answer | fixed 2026-10-09 |
| N3 — FAQ q1 answered a question the visitor wasn't asking (price talk) before the free model was stated | Gulf of Evaluation — feedback must match the mental model | 2 | q1 rewritten to lead with the fact: "Freeze is free. … no account, no installer, no catch." (EN + FR) | fixed 2026-10-09 |
| N4 — No risk-reversal signal at the moment of commitment (hero CTA) — users afraid to act on an unknown binary | Gulf of Execution — undo/exit not surfaced where the action is asked | 2 | Reversibility surfaced at the CTA: "No account. Uninstall = delete one file." under the hero download button (EN + FR) | fixed 2026-10-09 |

Both gulfs, audited end-to-end after the fixes:

- **Execution** ("how do I do this?"): 3 numbered Install steps ✓, requirement chips at hero ✓, Compat section ✓, transitional "Install guide" CTA ✓ — signifiers present at every decision point.
- **Evaluation** ("what happened / did it work?"): Gatekeeper block answers the one predictable failure with what-happened + why + how-to-fix, no blame ✓; FAQ q3 answers "plugin not showing up" ✓; FAQ q5 + the hero line answer "how do I undo this" ✓.

Remaining (product-level, not page-level): Apple notarization would remove N1's failure case entirely — tracked as a BRIEF.md open point; on-page recovery is the mitigation until then. Zero client JS preserved: every fix is static copy/HTML.

## Microinteraction Inventory

| Interaction | Trigger/Rules/Feedback/Loops | Fix | Status |
|---|---|---|---|
| Marquee scroll + pause | CSS animation; pause on hover, on toggle checkbox (keyboard/touch), on `prefers-reduced-motion`; label swaps Pause↔Resume; focus ring on toggle | none — accessible as built | healthy |
| Link/button hover | Color shift + underline on nav links; button styles via `.btn` tokens | none | healthy |