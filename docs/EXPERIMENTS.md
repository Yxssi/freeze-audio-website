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
| 1 | …restore Compat + FAQ, add a Gatekeeper block to Install, and state "Free · v1.0.0" at the CTAs → download rate rises, because the Trust/Price/Fit/Effort objections currently have no on-page counter (F1, F3, F4, F5). Attack order A, chosen at Phase 1 exit. | 8.0 (7/8/9) | **partially shipped 2026-10-09** — "Free" at CTAs done (Phase 5); Compat/FAQ restore + Gatekeeper block still open |
| 2 | …rewrite the hero H1/lead in customer language → hero CTA CTR rises, because the 5-second test likely fails on "Replay the past of your sound." (F6) | 7.0 (8/6/7) | **shipped 2026-10-09 (Phase 5, pre-launch)** — post-launch metric: hero CTA CTR |
| 4 | …add before/after demo audio per engine → download rate rises, because hearing *is* the product for an audio plugin (F2) | 6.3 (9/6/4) | **blocked: needs demo recordings** |
| 5 | …add a contact/support channel (email or GitHub) → trust objections ease, because an unknown maker with no contact path amplifies Trust friction (F9) | 6.3 (4/7/8) | open |
| 6 | …add email capture for launch/updates → a retargetable audience exists, because the funnel currently has no post-visit link | 5.3 (5/6/5) | deferred — must stay zero-JS |
| 7 | …add a comparison vs. manual reverse/automation workarounds → consideration-stage exits drop, because producers already solve this badly by hand | 5.3 (5/5/6) | open |
| 8 | …acquire and display beta-tester quotes → download rate rises at the decision point, because proof at friction points out-persuades claims (F7) | 4.7 (7/4/3) | **blocked: needs real quotes — do not fabricate** |
| 9 | …ship the Phase 2 consistency fix package (engine names "Tape"/"Grain" U1, EN ping-pong copy U2, mobile section links U3, EN spacing U4, filename interpolation U6, footer CTA label U7) → recognition friction drops, because visitors could not match engine cards to the plugin UI and EN/FR described different products (U1-U7) | 6.3 (5/8/8) | **shipped 2026-10-09, pre-launch** — post-launch metric: scroll-past rate on Engines section |
