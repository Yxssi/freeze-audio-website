# freezy by ye' miyake — download site

Static landing page (Astro, zero client JS) for the Freeze Audio Unit plugin.

## Languages

English is the default locale (`/`). French is at `/fr/`. Strings live in `src/i18n/ui.ts`. The nav has an EN / FR switcher.

## Commands

```sh
npm install
npm run dev       # dev server: http://localhost:4321
npm run build     # astro check + static build in dist/
npm run preview   # serve dist/ locally
npm run og        # regenerate public/og.png (1200×630 share image)
npm run zip       # rebuild the archive from ../freeze/build/Freeze.component
```

Node 22.12 or newer.

## Before going live

- **Site URL**: `src/site.ts` → `site.url` (placeholder `https://example.com`). Feeds canonical, Open Graph, JSON-LD, sitemap and `robots.txt`.
- **Archive**: `public/downloads/FreezeAudio-1.0.0-macOS.zip`. For a new version, change `release.version` and `release.downloadPath` in `src/site.ts`, then `npm run zip` (or `COMPONENT=/path/Freeze.component npm run zip`) and adjust `OUT` in `scripts/zip.sh`. Size and SHA-256 on the page are recalculated at build time.
- **Plugin visual**: `src/assets/freeze-ui.png` (1400×880). To regenerate from the installed plugin: run `../freeze/build/test_ui`, then copy `/tmp/freeze_ui_stutter.png` here.

Design and tokens: see `DESIGN.md`.
