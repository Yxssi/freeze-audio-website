# DESIGN — Freeze Audio by sheezy

## Direction donnée (référence, telle que fournie)

Référence « North design system » extraite de northmail.app par Inspo — *adapter, ne pas copier*. Mode clair, macrostructure **Marquee Hero**, palette monochrome haut contraste, logotype lourd organique dessiné à la main + sans-serif géométrique propre, beaucoup de blanc, CTA en pilule centré dans la nav, sticky nav, hero avec CTA, bloc d'inscription/capture (ici : remplacer par le bloc de téléchargement). Typo : h1 84px/500/lh 1.05/ls -4.2px ; h2 52px/500/1.1/-2.34px ; h3 40px/500/1.3/-1.6px ; body 16px/400/1.5 (garder les ratios, fluid avec clamp). Espacement base 4px (8, 12, 16, 24, 32, 40, 48, 56, 64, 96, 120, 160). Rayons 0/4/8/12/16 + pill 999px. Container max 1440px. Tokens réels de la source :

```css
--bg-plaster:#f6f5ee; --bg-cloud:#fff; --bg-cream:#fffce5; --bg-putty:#e4e1cd; --bg-butter:#ffffb2; --bg-soot:#1c1b17;
--text-primary:#1c1b17; --text-secondary:#545245; --text-tertiary:#706d5c; --text-accent:#857c47; --text-primary-inverse:#fff; --text-accent-inverse:#e4e1cd;
--border-subtle:#e8e7e3; --border-strong:#d1d0c7; --border-overlay:#1c1b170d;
--font-sans:"yetsonSans","Avenir Next","Segoe UI",sans-serif; --font-accent:"goldenGoose","Iowan Old Style",serif; --font-mono:ui-monospace,SFMono-Regular,Menlo,monospace;
--radius-sm:4px; --radius-md:8px; --radius-lg:12px; --radius-xl:16px; --radius-pill:999px;
```

Couleurs d'appoint détectées : #2966b4, #92b7e6, #14a460 (accent), #898770, #afccd4.

Adaptation voulue (première version) : garder l'esprit plaster/soot monochrome ; le plugin a un accent orange `#e39b4e` et une UI sombre `#14171a` — utilise l'orange comme accent unique et parcimonieux (vérifier le contraste AA : l'orange sur fond clair ne passe pas en texte, donc l'utiliser pour des surfaces/traits, ou foncer la teinte pour du texte), et une section sombre (soot) pour mettre en valeur l'UI du plugin. yetsonSans/goldenGoose sont propriétaires : prends des alternatives libres auto-hébergées via @fontsource (ex. une sans géométrique type « Inter Tight »/« Geist » et une serif d'accent type « Instrument Serif ») ; wordmark « freeze » organique en SVG inline dessiné à la main (pas d'image raster). Le « marquee » peut défiler les 5 modes (REVERSE · FREEZE · STRETCH · TAPE · GRAIN) en CSS pur, figé sous prefers-reduced-motion.

## Changement de palette (décision utilisateur, remplace l'orange et les couleurs North)

Palette source (tons moyens, **jamais de texte blanc dessus**) :

| Token | Valeur | Nom |
| --- | --- | --- |
| `--color-grey-olive` | `#808D8E` | Grey Olive |
| `--color-dusty-lavender` | `#766C7F` | Dusty Lavender |
| `--color-amethyst` | `#947EB0` | Amethyst Smoke |
| `--color-lavender-grey` | `#A3A5C3` | Lavender Grey |
| `--color-light-blue` | `#A9D2D5` | Light Blue |

La structure North (Marquee Hero, typo, espacements, rayons, air) est conservée ; seuls les tokens couleur changent.

## Adaptation retenue

- **Polices** : Inter Tight Variable (sans, 400–700, remplace yetsonSans) et Instrument Serif italique (accent, remplace goldenGoose), auto-hébergées via `@fontsource`, `font-display: swap`, découpage `unicode-range` (seul le sous-ensemble latin est téléchargé).
- **Wordmark** : « freeze. » tracé à la main en SVG inline (traits ronds épais, `currentColor`), point final en Amethyst (Light Blue sur fond sombre).
- **Rôles des couleurs** :
  - Amethyst Smoke : accent principal — fond des CTA pilule (encre foncée dessus), puces, pastilles d'étape, arcs des knobs du plugin.
  - Light Blue : accent secondaire — bande du marquee, surlignage, icônes « oui », eyebrow et focus sur fond sombre, forme d'onde du scope.
  - Lavender Grey : traits et bordures décoratives (chips, tableau, encadré Gatekeeper).
  - Grey Olive : réservé aux surfaces/traits neutres (non utilisé en texte).
  - Dusty Lavender : bordure des composants interactifs (bouton secondaire) ; base des neutres foncés dérivés.
- **Section sombre** (interface + footer) : Dusty Lavender assombri (`--bg-dark`).
- **Visuel du plugin** : capture réelle de l'UI (`src/assets/freeze-ui.png`, Stutter sélectionné en 1/4, rendue par le harness `freeze/tools/dsp-test/test_ui.mm`), servie en WebP responsive via `astro:assets`. Le marquee défile les 6 modes, dont Stutter.

## Tokens dérivés et contrastes (WCAG 2.2)

| Token | Valeur | Rôle |
| --- | --- | --- |
| `--bg` | `#F6F5FA` | fond clair, blanc teinté lavande |
| `--bg-raised` | `#FFFFFF` | cartes |
| `--bg-tint` | `#EEF6F7` | fond alterné teinté Light Blue |
| `--bg-lavender` | `#ECEBF3` | encarts (presets, `code`) |
| `--ink` | `#1A1620` | texte principal (Dusty Lavender très sombre) |
| `--ink-2` | `#4A4254` | texte secondaire |
| `--ink-3` | `#5C5468` | texte tertiaire (libellés, en-têtes de tableau) |
| `--accent-ink` | `#5E4A7A` | liens, eyebrows, numéros (Amethyst foncé) |
| `--bg-dark` | `#2A2530` | section sombre, footer |
| `--bg-dark-2` | `#1E1A24` | bloc de commande Terminal |
| `--line-dark` | `#3A3442` | traits sur fond sombre |
| `--ink-inverse` | `#F6F5FA` | texte sur fond sombre |
| `--ink-inverse-2` | `#C9C3D3` | texte secondaire sur fond sombre |
| `--amethyst-light` | `#B7A6CC` | Amethyst éclairci pour texte sur fond sombre |
| `--border-subtle` | `#E3E1EA` | séparateurs décoratifs (non porteurs d'information) |

Ratios mesurés (formule de luminance relative WCAG) :

| Paire texte / fond | Ratio | Seuil |
| --- | --- | --- |
| `--ink` / `--bg` | 16.41:1 | AA ✓ (AAA) |
| `--ink` / `--bg-raised` | 17.80:1 | AA ✓ |
| `--ink` / `--bg-tint` | 16.24:1 | AA ✓ |
| `--ink-2` / `--bg` | 8.81:1 | AA ✓ |
| `--ink-2` / `--bg-tint` | 8.72:1 | AA ✓ |
| `--ink-2` / `--bg-lavender` | 8.07:1 | AA ✓ |
| `--ink-3` / `--bg` | 6.62:1 | AA ✓ |
| `--ink-3` / `--bg-raised` | 7.18:1 | AA ✓ |
| `--ink-3` / `--bg-lavender` | 6.07:1 | AA ✓ |
| `--accent-ink` / `--bg` | 7.07:1 | AA ✓ |
| `--accent-ink` / `--bg-raised` | 7.67:1 | AA ✓ |
| `--ink` / Amethyst (CTA, pastilles) | 4.98:1 | AA ✓ texte courant |
| `--ink` / Light Blue (marquee, hover CTA) | 10.91:1 | AA ✓ |
| `--ink` / Lavender Grey | 7.40:1 | AA ✓ |
| `--ink-inverse` / `--bg-dark` | 13.77:1 | AA ✓ |
| `--ink-inverse-2` / `--bg-dark` | 8.70:1 | AA ✓ |
| Light Blue / `--bg-dark` (eyebrow, hover liens) | 9.15:1 | AA ✓ |
| `--ink-inverse-2` / `--bg-dark-2` (UI plugin) | 9.96:1 | AA ✓ |
| `--amethyst-light` / `--bg-dark-2` | 7.60:1 | AA ✓ |

Composants et éléments non textuels (seuil 3:1) :

| Élément | Ratio |
| --- | --- |
| Fond Amethyst du CTA vs `--bg` | 3.30:1 ✓ |
| Bordure Dusty Lavender (bouton secondaire) vs `--bg` | 4.59:1 ✓ |
| Anneau de focus `--ink` vs `--bg` | 16.41:1 ✓ |
| Anneau de focus Light Blue vs `--bg-dark` | 9.15:1 ✓ |
| Amethyst (arcs, indicateurs) vs `--bg-dark-2` | 4.78:1 ✓ |

Paires **interdites** : texte blanc sur l'une des 5 couleurs source ; Amethyst en texte sur `--bg` (3.30:1, seulement gros texte ou traits) ; Amethyst en texte sur `--bg-dark` (4.18:1 → utiliser `--amethyst-light`) ; Grey Olive en texte sur `--bg` (3.16:1).
