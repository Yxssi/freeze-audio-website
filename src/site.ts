// Single source of truth for site-wide settings.
// Before deploying: replace `url` with the real domain (used by canonical,
// Open Graph, JSON-LD, sitemap and robots.txt). astro.config.mjs imports it.

export const site = {
  url: 'https://example.com',
  name: "freezy by ye' miyake",
  author: "ye' miyake",
} as const;

export const release = {
  version: '1.0.0',
  // Path under public/. Rebuild the archive with `npm run zip`.
  downloadPath: '/downloads/FreezeAudio-1.0.0-macOS.zip',
  minMacOS: '12',
} as const;
