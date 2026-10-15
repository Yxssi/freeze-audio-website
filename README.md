# Freeze Audio by sheezy — download site

Static landing page (Astro, zero client JS) for the Freeze plugin: VST3 and Audio Unit for macOS, VST3 for Windows.

## Languages

English is the default locale (`/`). French is at `/fr/`. Strings live in `src/i18n/ui.ts`. The nav has an EN / FR switcher.

## Commands

```sh
npm install
npm run dev        # dev server: http://localhost:4321
npm run build      # astro check + static build in dist/
npm run preview    # serve dist/ locally
npm run og         # regenerate public/og.png (1200×630 share image)
npm run downloads  # copy the release files from ../freeze/dist into public/downloads
```

Node 22.12 or newer.

## Releases and downloads

Everything about a release lives in `src/site.ts`: `version`, `downloadsBaseUrl` and the four file names per platform (`release.platforms`). The hero, download section, install guide, footer and JSON-LD all read from it.

For a new version:

1. Change `version` in `src/site.ts`.
2. Put the four files in `public/downloads/` (or run `npm run downloads`, which copies them from `DIST`, default `../freeze/dist`):
   - `FreezeAudio-<version>-macOS.pkg`
   - `FreezeAudio-<version>-macOS.zip`
   - `FreezeAudio-<version>-Windows-Setup.exe`
   - `FreezeAudio-<version>-Windows.zip`
3. `npm run build`. File sizes and SHA-256 checksums are computed at build time; a missing file prints a `[downloads] missing …` warning and its size and checksum are left out.

To host the binaries elsewhere, set `downloadsBaseUrl` to an absolute URL; sizes and checksums are then omitted.

## Before going live

- **Site URL**: `src/site.ts` → `site.url` (placeholder `https://example.com`). Feeds canonical, Open Graph, JSON-LD, sitemap and `robots.txt`.
- **Audio demos**: put dry and processed files in `public/audio/`, then list them in `demos` in `src/site.ts` (`engine`, `dry`, `wet`). The "Listen" section stays hidden while the list is empty.
- **Plugin visual**: `src/assets/freeze-ui.png` (1400×880, VST3 build, Freeze mode, EVERY 1/4).

Design and tokens: see `DESIGN.md`. Product facts: see `BRIEF.md`.
