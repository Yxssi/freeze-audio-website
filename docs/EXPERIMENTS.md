# Experiments

Every test we run, with pre-committed criteria. Created during the improve-website journey, Phase 1 (2026-10-09).

**Traffic reality:** the page is not launched — A/B tests cannot reach significance. The backlog below is ICE-ranked and pre-committed now; bold tests promote to Experiment Cards only when traffic exists. The primary metric (download starts per landing visitor) and guardrails are pre-committed in METRICS.md.

## Experiment Cards

Empty — no test is running. Promotion rule: a backlog item becomes a card only with (a) real traffic, (b) a bold change that could plausibly 2x+ the metric, (c) sample size computed up front (80% power, 95% confidence), (d) one full business cycle, no peeking.

## Experiment Backlog

ICE = average of Impact / Confidence / Ease, each 1–10. 10x screen applied: no button-color, font-nudge, or image-swap entries.

| # | Idea (If we … then … because …) | ICE (I/C/E) | Status |
|---|---|---|---|
| 3 | …fix `site.url` off `https://example.com` at deploy → canonical/OG/JSON-LD/sitemap become correct, because every structured reference currently points at a placeholder (F8) | 8.7 (6/10/10) | **blocked: domain decision** |
| 1 | …restore Compat + FAQ, add a Gatekeeper block to Install, and state "Free · v1.0.0" at the CTAs → download rate rises, because the Trust/Price/Fit/Effort objections currently have no on-page counter (F1, F3, F4, F5). Attack order A, chosen at Phase 1 exit. | 8.0 (7/8/9) | **shipped 2026-10-09, pre-launch (Phases 5 + 8)** — all four counters live on-page: "Free" at CTAs (Phase 5), Compat/FAQ restored + Gatekeeper recovery block (Phase 8). Post-launch metrics: hero CTA CTR, download-section CTR |
| 2 | …rewrite the hero H1/lead in customer language → hero CTA CTR rises, because the 5-second test likely fails on "Replay the past of your sound." (F6) | 7.0 (8/6/7) | **shipped 2026-10-09 (Phase 5, pre-launch)** — post-launch metric: hero CTA CTR |
| 4 | …add before/after demo audio per engine → download rate rises, because hearing *is* the product for an audio plugin (F2) | 6.3 (9/6/4) | **blocked: needs demo recordings** |
| 5 | …add a contact/support channel (email or GitHub) → trust objections ease, because an unknown maker with no contact path amplifies Trust friction (F9) | 6.3 (4/7/8) | open |
| 6 | …add email capture for launch/updates → a retargetable audience exists, because the funnel currently has no post-visit link | 5.3 (5/6/5) | deferred — must stay zero-JS |
| 7 | …add a comparison vs. manual reverse/automation workarounds → consideration-stage exits drop, because producers already solve this badly by hand | 5.3 (5/5/6) | open |
| 8 | …acquire and display beta-tester quotes → download rate rises at the decision point, because proof at friction points out-persuades claims (F7) | 4.7 (7/4/3) | **blocked: needs real quotes — do not fabricate** |
| 9 | …ship the Phase 2 consistency fix package (engine names "Tape"/"Grain" U1, EN ping-pong copy U2, mobile section links U3, EN spacing U4, filename interpolation U6, footer CTA label U7) → recognition friction drops, because visitors could not match engine cards to the plugin UI and EN/FR described different products (U1-U7) | 6.3 (5/8/8) | **shipped 2026-10-09, pre-launch** — post-launch metric: scroll-past rate on Engines section |
| 10 | …ship the Phase 3 hierarchy fix package (fluid two-tier card headings V1, 44px language-switch targets V2, off-scale strays V3) → scan comfort rises on mobile, because the smallest touch target on the page was ~26px and card headings broke the fluid ramp (V1-V3) | 4.7 (4/6/8) | **shipped 2026-10-09, pre-launch** — cosmetic package; rides along, no solo test |
| 11 | …ship the Phase 7 stickiness package (loss-frame hero open, "last 8 seconds" concretization, 1s/2min testable credential, vocal→pad usage micro-story) → brand recall rises, because the Phase 5 message was clear but scored 33/60 on SUCCESs (forgettable band) | 5.7 (5/7/8) | **shipped 2026-10-09, pre-launch** — post-launch metric: unaided recall in exit survey ("in one sentence, what does Freeze do?") |
| 12 | …ship the Phase 8 error-tolerance package (Gatekeeper recovery block in Install, Compat + FAQ restored, FAQ q1 "free" rewrite, hero risk-reversal line) → completed installs per download rise, because every failure state after the download click was previously silent (N1-N4 = F1/F3/F4) | 6.7 (6/8/7) | **shipped 2026-10-09, pre-launch** — post-launch metric: successful first-load rate (off-page, from post-download survey "What almost stopped you from installing it?") |
| 13 | …ship the Phase 4 measure package (`--measure: 50ch` on `.section-head p`, `details p`, `.gatekeeper p`, `.lead`; 52rem gatekeeper box; no-wrap `code` block) → line length lands in the 45–75 character band on every prose block, because the FAQ and section leads measured 101 and 88 characters while the `rem`-based caps reported `ch` compliance (T1-T4) | 7.3 (6/7/9) | **shipped 2026-10-10, pre-launch** — verified 158→67 (gatekeeper), 101→69 (FAQ), 88→68 (leads). Post-launch metric: exit-survey readability question ("was the text easy to read?"), alongside the recall question from #11 |
| 14 | …preload both webfonts and add metric-matched fallbacks → the hero stops shifting when the webfont swaps, because CLS had risen to 0.071 desktop / 0.041 mobile from the hero wrapping an extra line in the fallback stack, and no preload existed (F10) | 7.7 (7/9/7) | **shipped 2026-10-10, pre-launch** — verified CLS 0.071 / 0.041 / 0.017 → **0.000 with 0 layout shifts** on all three targets; desktop Performance 99 → 100; mobile FCP 1.20 s → 0.67 s. Post-launch metric: field CLS (CrUX/RUM) once the host is live |

## Promotion-Ready Sizing (pre-staged 2026-10-10, journey exit)

Cards stay empty until traffic exists, but the sizing is fixed **now** so no one can peek, stop early, or post-hoc a result on launch day. Two-proportion test, 95% confidence (two-tailed, z=1.96), 80% power (z=0.84), one full business cycle, no peeking.

**Visitors needed per arm** (double it for the total), by baseline download rate and the relative lift to detect:

| Baseline download rate | +20% rel. | +50% rel. | +100% rel. |
|---|---|---|---|
| 3% | 13,900 | 2,510 | 745 |
| 5% | 8,150 | 1,470 | 431 |
| 10% | 3,830 | 682 | 196 |

**How to read it.** At a 5% baseline, detecting a **doubling** — the bar the ICE screen sets ("could this 10x results?") — needs ~430 visitors per arm, ~860 in total. Detecting a 20% relative nudge needs ~8,150 per arm. That gap is the whole argument for the backlog carrying no button-colour or font-nudge tests: at plausible traffic they would never reach significance.

**The concrete promotion trigger:** a backlog item becomes a Card once daily visitors exceed `n / 14` — i.e. the test can complete inside one two-week business cycle. Below that, only the qualitative and heuristic evidence in the phase artifacts should decide.

**Which items are actually testable.** The 12 shipped items are live; they cannot be A/B tested as originally framed, and re-testing them would mean unshipping a fix that rests on evidence. The two remaining **bold, unshipped** changes are the ones worth a Card, and both are asset-blocked rather than traffic-blocked:

- **#4 — before/after demo audio per engine** (Impact 9, the boldest lever on the board: hearing *is* the product). Blocked on recordings.
- **#8 — real beta-tester quotes** (proof at the decision point). Blocked on acquisition; must not be fabricated.

Neither can be tested before it is built, so the loop stays open on those two by physical necessity, not by choice.
