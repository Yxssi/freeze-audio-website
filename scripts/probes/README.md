# Dev probes

Scratch measurement harnesses from the improve-website journey (Phase 2's UX
audit). Each is a throwaway page that iframes a real page at a forced viewport
and reports geometry — viewport height, DPR, scroll behaviour, tap-target size,
200%-zoom behaviour, and so on.

**Why they live here and not in `public/`:** anything in `public/` is copied
verbatim into `dist/`, so as `public/__ux_*.html` these 14 files would have been
publicly live at `https://<domain>/__ux_probe.html` and friends — reachable,
indexable, and obviously not part of the product. Moved here on 2026-10-11
(recorded as F13 in `docs/WEBSITE.md`). Nothing in the build reads this
directory.

**These files are untracked by design** — they are scratch, not source, and were
never committed. They are also now redundant: the Phase 4 and Phase 6 audits
measured the rendered page directly through the Chrome DevTools Protocol
(Chromium via Opera — see the project memory), which is strictly more capable
than an iframe harness. Deleting this directory is a reasonable call and is
still the owner's decision.

To use one, copy it back into `public/`, run `npm run build && npm run preview`,
and open it with query params, e.g. `/__ux_probe.html?w=390&page=`.
