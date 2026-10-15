# Brief — Landing page de téléchargement

## Nom du plugin

**Freeze Audio by sheezy** — « Time Effector ». Version **1.1.0**, macOS et Windows.

## À quoi il sert

Freeze est un effet temporel : il enregistre en continu le passé récent de la piste et le rejoue autrement.

## Fonctionnalités principales (v1.1.0)

- **6 modes** : Reverse, Freeze, Stretch, Tape, Grain, Stutter.
- **EVERY** (mode Freeze) : re-gèle sur la grille de tempo de l'hôte (HOLD, 1/1, 1/2, 1/4, 1/8, 1/8T, 1/16) ; quand le transport est arrêté, continue au dernier tempo connu.
- **Contrôles** : Size (0,05–8 s), Warp (rôle selon le mode, ex. Motion en Freeze), Feedback, Tone (passe-bas ↔ passe-haut, centre = neutre), Mix, Gain (±24 dB), rangée Rate / Every, bouton FREEZE, STOP, Bypass.
- **Presets** : 19 presets d'usine, presets utilisateur (enregistrer / supprimer, partagés entre formats), flèches précédent / suivant.
- **Affichage** : forme d'onde en direct avec têtes de lecture, vumètres IN / OUT, barre d'aide contextuelle.

## Formats et configuration

| Plateforme | Système | Formats | Processeur |
| --- | --- | --- | --- |
| macOS | 12 Monterey ou plus récent | Audio Unit + VST3 | Universel (Apple Silicon + Intel) |
| Windows | 10 / 11, 64 bits | VST3 | x64 |

## Prix

Gratuit (inchangé depuis la 1.0.0). Aucun compte.

## Public cible

Producteurs, beatmakers et sound designers sur macOS **et** Windows, quel que soit le DAW (hôtes VST3 ou Audio Unit), qui veulent des reverses, des nappes gelées, des tape stops et des stutters sans chaîne d'effets complexe.

## Stack

- **Astro**, site 100 % statique (`astro build` → `dist/`).
- Aucun framework JS côté client, aucun script inline.
- Identité visuelle : voir `DESIGN.md` (palette lavande / Amethyst / Light Blue). L'ancien accent orange `#e39b4e` n'est plus utilisé.

## Contraintes

### SEO

- `<title>` et meta description uniques par page (EN, FR).
- Open Graph et Twitter Card (`public/og.png`, régénérée par `npm run og`).
- Sitemap (`@astrojs/sitemap`) et `robots.txt`.
- JSON-LD `SoftwareApplication` : `operatingSystem: "macOS 12+, Windows 10/11"`, `softwareVersion: 1.1.0`, `downloadUrl` = les deux installeurs, offre gratuite.
- URL canonique sur chaque page.

### Performance, accessibilité

- Lighthouse ≥ 95, zéro JS livré, images via `astro:assets`, polices auto-hébergées.
- WCAG 2.2 AA, navigation clavier, lien d'évitement, `prefers-reduced-motion`.

### Produit — téléchargements

Quatre fichiers par version, servis depuis `public/downloads/` (même mécanisme qu'en 1.0.0) :

| Fichier | Contenu |
| --- | --- |
| `FreezeAudio-1.1.0-macOS.pkg` | Installeur Audio Unit + VST3 |
| `FreezeAudio-1.1.0-macOS.zip` | Installation manuelle (`Freeze.component`, `Freeze Audio.vst3`) |
| `FreezeAudio-1.1.0-Windows-Setup.exe` | Installeur VST3 |
| `FreezeAudio-1.1.0-Windows.zip` | Installation manuelle (`Freeze Audio.vst3`) |

Version, noms de fichiers et URL de base sont centralisés dans `src/site.ts`. Le dépôt GitHub du plugin est privé : aucun lien vers des releases GitHub.

### Produit — installation

- **macOS** : lancer le `.pkg`, ou copier `Freeze.component` dans `~/Library/Audio/Plug-Ins/Components` et `Freeze Audio.vst3` dans `~/Library/Audio/Plug-Ins/VST3`, puis rescanner dans le DAW. Builds non notarisés : clic droit › Ouvrir sur le `.pkg`, ou autorisation dans Réglages Système › Confidentialité et sécurité.
- **Windows** : lancer le `Setup.exe` (installe dans `C:\Program Files\Common Files\VST3\`), ou copier `Freeze Audio.vst3` depuis le `.zip`, puis rescanner. Non signé : SmartScreen › Informations complémentaires › Exécuter quand même.

## Points ouverts

- Nom de domaine (`site.url` reste `https://example.com`).
- Notarisation Apple et signature Authenticode Windows (suppriment les avertissements Gatekeeper / SmartScreen).
- Démos audio (emplacement prévu, section masquée tant que `demos` est vide).
- Liste des DAW officiellement testés sur les deux plateformes.
- Hébergement des binaires : `public/downloads/` convient tant que le total reste raisonnable pour l'hébergeur statique ; sinon pointer `downloadsBaseUrl` vers un stockage externe.
