# Metrics

Journey artifact for the improve-website journey (started 2026-10-09). Evidence basis: **no analytics deployed — the page is not launched** (`site.url` is still `https://example.com`). Baselines below are structural + Lighthouse measurements, not visitor data.

## Funnel

Map of the **rendered** landing flow (`/` EN default, `/fr/` FR mirror — identical flow). Verified against the built HTML on 2026-10-09.

```
Visit ( / or /fr/ )
 └─ Nav:        [Download CTA]  Engines · Install · FAQ   EN/FR
 └─ Hero:       "Replay the last seconds of your track — backwards, frozen, slowed." + lead
 │              → [Download Freeze 1.0.0 — Free]   [Install guide]   ← direct + transitional CTA
 │              → "No account. Uninstall = delete one file."  ← risk-reversal line
 │              → chips: macOS 12+ · Apple Silicon & Intel · AU
 │              → marquee: REVERSE · FREEZE · STRETCH · TAPE · GRAIN
 ├─ Engines:    5 engine cards (what each mode does + Warp ranges)
 ├─ Showcase:   (dark) UI screenshot + mode strip / six knobs / live scope
 ├─ Controls:   8 params + 6-preset table
 ├─ Download:   [Download the .zip (219 KB) — Free] + file / version / system / SHA-256
 ├─ Install:    3 steps (unzip → copy Freeze.component → relaunch host)
 │              + Gatekeeper recovery block (GUI + xattr, both locales)
 ├─ Compat:     supported/unavailable lists (AU v2, universal binary, auval, FL Studio)
 ├─ FAQ:        5 answers (free, formats, host-not-found, automation, uninstall)
 └─ Footer:     (dark) [Download Freeze 1.0.0] · Install · Compat · FAQ
      (Compat + FAQ restored 2026-10-09, Phase 8)

Off-page continuation (the funnel does not end at the click):
unzip → copy Freeze.component to ~/Library/Audio/Plug-Ins/Components
      → relaunch host → ⚠ first load may be blocked by Gatekeeper
        (recovery is now taught on-page in the Install block — F1 fixed
         on page; product-level fix = Apple notarization, still open)
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

Refreshed in Phase 6 (high-perf-browser), 2026-10-10, on the post-restore build (Compat + FAQ + Gatekeeper + the Phase 4 measure package). Lighthouse 12.8.2, Chromium 152 via Opera, against `astro preview`. **Supersedes the 2026-10-09 baseline**, which was captured before the Phase 8 restore and before the hero copy grew — its CLS figure no longer described the page.

| Metric | `/` desktop | `/` mobile | `/fr/` mobile | Target | Status |
|---|---|---|---|---|---|
| Performance | 100 | 100 | 100 | ≥ 95 | ✅ (desktop was 99 before the CLS fix) |
| Accessibility | 100 | 100 | 100 | ≥ 95 | ✅ |
| SEO | 100 | 100 | 100 | ≥ 95 | ✅ |
| LCP | 0.29 s | 1.20 s | 1.28 s | < 2.5 s | ✅ |
| FCP | 0.18 s | 0.67 s | 0.66 s | < 1.8 s | ✅ |
| CLS | **0.000** | **0.000** | **0.000** | < 0.1 | ✅ after the font-swap fix (was 0.071 / 0.041 / 0.017) |
| TBT / INP | 0 ms | 0 ms | 0 ms | < 200 ms | ✅ zero client JS |
| TTFB | 4 ms | 2 ms | 2 ms | < 800 ms | ✅ local preview |
| Requests | 5 | 5 | 5 | — | ✅ |
| Transfer (mobile) | — | 88.1 KB | 88.4 KB | fonts < 200 KB | ✅ fonts 65.4 KB |

Payload (mobile): HTML 11.3 KB · Inter Tight latin woff2 43.8 KB · Instrument Serif latin italic woff2 21.6 KB · plugin shot webp 10.3 KB · favicon 0.7 KB. **Zero client JavaScript shipped. No forms on the page.**

### The CLS regression and its fix

The 2026-10-09 figure (0.009) was stale. Measured CLS had risen to **0.071 desktop / 0.041 mobile**, one layout shift per page attributed to the hero `<h1>`.

Cause, proven by measuring hero geometry with the webfonts blocked:

| | Fallback rendered | Inter Tight loaded |
|---|---|---|
| `<h1>` height | 257 px (3 lines) | 171 px (2 lines) |
| `.lead` top | 497 px | 411 px |

Inter Tight is a narrow grotesque; the fallback stack (Avenir Next / Segoe UI / system-ui) is wider, so the hero wrapped an extra line. When `font-display: swap` swapped in the webfont, the hero collapsed ~86 px and everything below jumped up. Driven by the Phases 5/7 hero rewrite (longer copy = more to reflow), not by Phase 4. There were also **no font preloads**: the LCP element is hero text on both locales and the hero H1 carries the Instrument Serif accent span, so both faces sit on the critical path.

**Fix shipped 2026-10-10:** `<link rel="preload" as="font" type="font/woff2" crossorigin>` for both faces, resolved through Vite `?url` imports so the content-hashed URLs survive rebuilds (verified: no duplicate font assets emitted), plus metric-matched `@font-face` fallbacks with `size-adjust` + ascent/descent/line-gap overrides derived by measuring Inter Tight and Instrument Serif against the macOS system faces.

**Verified:** CLS **0.000 with 0 layout shifts** on all three targets; desktop Performance 99 → 100; mobile FCP 1.20 s → 0.67 s; LCP unchanged at 1.20 s.

**Caveat, stated plainly:** the metric-matched fallback is only *partially* effective, and it is not what delivers the zero. With both fonts fully blocked the hero still wraps one line more than with Inter Tight (h1 85 px, lead 85 px), because the measure caps are `ch`-relative — `size-adjust` scales the text and its container together, so the line count barely moves. The **preload** is the effective fix; the fallback is a partial second line of defence for a slow font. Open as F11.

### Deploy-host requirements — cannot be verified pre-deploy

Lighthouse ran against `astro preview`, which sends `Cache-Control: no-cache`, no `Content-Encoding`, and HTTP/1.1 — dev-server artifacts, not properties of the site. These rows stay ungraded until the host is chosen (the same blocker as F8):

| Requirement | Target | Why it is blocked |
|---|---|---|
| HTTP/2 or HTTP/3 | Enabled | Preview server is HTTP/1.1; host configuration |
| Compression | Brotli, Gzip fallback | Preview sends no `Content-Encoding` |
| `Cache-Control` on `/_astro/*` | `max-age=31536000, immutable` | Host configuration — filenames are already content-hashed ✅ |
| `Cache-Control` on HTML | `no-cache` + `ETag` | Host configuration |

Known non-blockers: `network-dependency-tree-insight` (weight 0, informational — the font chain; `inlineStylesheets: 'always'` is already on), and the 264 KB of unicode-range-gated font subsets in `dist/` that neither locale downloads.
