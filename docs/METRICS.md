# Metrics

Journey artifact for the improve-website journey (started 2026-10-09). Evidence basis: **no analytics deployed — the page is not launched** (`site.url` is still `https://example.com`). Baselines below are structural + Lighthouse measurements, not visitor data.

## Funnel

Map of the **rendered** landing flow (`/` EN default, `/fr/` FR mirror — identical flow). Verified against the built HTML on 2026-10-09.

```
Visit ( / or /fr/ )
 └─ Nav:        [Download CTA]  Engines · Install   EN/FR
 └─ Hero:       "Replay the past of your sound." + lead
 │              → [Download Freeze 1.0.0]   [Install guide]      ← direct + transitional CTA
 │              → chips: macOS 12+ · Apple Silicon & Intel · AU
 │              → marquee: REVERSE · FREEZE · STRETCH · TAPE · GRAIN
 ├─ Engines:    5 engine cards (what each mode does + Warp ranges)
 ├─ Showcase:   (dark) UI screenshot + mode strip / six knobs / live scope
 ├─ Controls:   8 params + 6-preset table
 ├─ Download:   [Download the .zip (219 KB)] + file / version / system / SHA-256
 ├─ Install:    3 steps (unzip → copy Freeze.component → relaunch host)
 └─ Footer:     (dark) [Download 1.0.0] · Install
      ✂ Compat section — COMMENTED OUT in source (commit 24dc98d)
      ✂ FAQ — COMMENTED OUT in source

Off-page continuation (the funnel does not end at the click):
unzip → copy Freeze.component to ~/Library/Audio/Plug-Ins/Components
      → relaunch host → ⚠ first load may be blocked by Gatekeeper
        (plugin signed ad hoc, NOT notarized — see WEBSITE.md F1)
```

**Blocked arteries** (heuristic — no traffic data yet):

| ID | Artery | Why it leaks |
|---|---|---|
| BA-1 | Hero → download intent | Poetic H1 ("Replay the past of your sound"), "Free" never stated, no way to hear the product |
| BA-2 | Download click → successful install | Page is silent about Gatekeeper/quarantine; first-load block = silent failure for every non-technical user |
| BA-3 | Fit evaluation | Compat section commented out; "will it run in Logic/Ableton?" unanswerable on-page |

**Missing links:** demo audio (biggest — the product is sound), social proof at decision points, email capture, contact/support channel, post-install "first sound in 2 minutes" nudge.

## Stage & One Metric That Matters

| Stage | One metric that matters | Why this one |
|---|---|---|
| Whole page | **Download starts per landing visitor** | The ONE action. = HTTP 200 responses on `/downloads/FreezeAudio-1.0.0-macOS.zip` ÷ landing visitors. Measurable with **zero client JS** via static-host server logs, or a privacy-friendly analytics tool (Plausible/Umami). |
| Hero | Hero CTA click-through | Proxy for the 5-second test |
| Download section | Download-section CTA CTR | Decision-point clarity |
| Install (off-page) | Successful first-load rate | Gatekeeper/troubleshooting friction — currently unmeasurable on-page |

Pre-committed measurement plan (accepted at Phase 1 exit, 2026-10-09): instrument download-count before launch; post-launch run (a) exit survey "What stopped you from downloading Freeze?" and (b) post-download survey "What almost stopped you from installing it?". No peeking, full business cycle, 95% confidence when A/B tests eventually run.

## Baselines & Targets

Lighthouse 12.8.2 / Chromium 129 against `astro preview`, 2026-10-09. Captured now so Phase 6 verifies rather than re-derives.

| Metric | `/` desktop | `/` mobile | `/fr/` mobile | Target (BRIEF.md) |
|---|---|---|---|---|
| Performance | 100 | 100 | 100 | ≥ 95 |
| Accessibility | 100 | 100 | 100 | ≥ 95 |
| SEO | 100 | 100 | 100 | ≥ 95 |
| LCP | 0.3 s | 1.2 s | ~1.2 s | < 2.5 s |
| CLS | 0.009 | 0.008 | ~0.008 | < 0.1 |
| TBT | 0 ms | 0 ms | 0 ms | < 200 ms |
| Page weight (mobile) | — | 77.1 KB / 4 requests | — | fonts < 200 KB |

Payload breakdown (mobile): HTML 10.7 KB · Inter Tight woff2 45.2 KB · Instrument Serif italic woff2 22.4 KB · favicon 0.7 KB. **Zero client JavaScript shipped. No forms on the page.**

Known non-blockers: `network-dependency-tree-insight` (font CSS → woff2 chain; `inlineStylesheets: 'always'` is already on), mobile FCP audit at 0.99.
