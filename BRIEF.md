# Brief — Landing page de téléchargement

## Nom du plugin

**Freeze Audio by sheezy** — « Time Effector ». Audio Unit v2 (`aufx`) pour macOS, version 1.0.0.

## À quoi il sert

Freeze enregistre en continu le passé récent de votre piste dans une mémoire tampon, puis le rejoue autrement : à l'envers, gelé, ralenti, en arrêt de bande ou en nuage granulaire. Un seul effet pour transformer n'importe quelle source en textures, transitions et moments suspendus.

## Fonctionnalités principales

- **6 moteurs de lecture** : Reverse, Freeze (boucle ping-pong gelée), Stretch (ralenti), Tape Reverse (tape-stop / inversion), Grain Reverse (nuage granulaire inversé), Stutter (fragment court rejoué en rafale).
- **Rangée de temps** : 2×, 1×, 1/2, 1/4, 1/8, 1/12, 1/16. La même vitesse pilote tous les moteurs.
- **Bouton FREEZE** : re-gèle instantanément le fragment en cours. **STOP** coupe le son sans bouger les knobs.
- **Contrôles de mise en forme** : Size (0,05 à 8 s), Rate, Warp, Feedback, Tone (filtre tilt passe-bas ↔ passe-haut), Mix, gain d'entrée et de sortie (±24 dB), Bypass.
- **15 presets factory**, dont Soft Stutter, Half Repeat et Tight Chop.
- **Interface sombre dédiée** : knobs, bandeau de modes et scope avec forme d'onde en direct.

## Public cible

Producteurs et beatmakers sur Mac (hôtes compatibles Audio Unit) qui cherchent des effets de transition, de reverse et de textures ambient sans chaîne d'effets complexe. Également les sound designers et musiciens électroniques qui veulent geler ou étirer un passage en direct.

## Stack souhaitée

- **Astro**, site 100 % statique, sortie via `astro build` (dossier `dist/` déployable sur n'importe quel hébergeur statique).
- Pas de framework JS côté client. Îlots Astro (`client:*`) uniquement si un besoin interactif réel l'impose (par exemple un lecteur audio de démo).
- Identité visuelle à reprendre de l'UI du plugin : fond sombre `#14171a`, accent orange `#e39b4e`.

## Contraintes

### SEO

- `<title>` et meta description uniques par page.
- Balises Open Graph et Twitter Card (image de partage dédiée).
- Sitemap généré (`@astrojs/sitemap`) et `robots.txt`.
- Données structurées JSON-LD `SoftwareApplication` (nom, `operatingSystem: macOS 12+`, catégorie, version, lien de téléchargement).
- URL canonique sur chaque page.

### Performance

- Lighthouse ≥ 95 sur toutes les catégories (mobile et desktop).
- Zéro JS livré par défaut.
- Images optimisées via `astro:assets` (formats modernes, dimensions explicites, lazy-loading hors écran).
- Polices auto-hébergées (pas de CDN tiers), `font-display: swap`, sous-ensembles si possible.

### Accessibilité

- Conformité WCAG 2.2 niveau AA.
- Contrastes vérifiés sur thème sombre, y compris l'accent `#e39b4e` utilisé en texte ou sur fond.
- Navigation clavier complète, focus visible, lien d'évitement vers le contenu.
- Respect de `prefers-reduced-motion` pour toute animation.

### Produit

- **Téléchargement** : archive `.zip` contenant `Freeze.component`.
- **Instructions d'installation** :
  1. Décompresser l'archive.
  2. Copier `Freeze.component` dans `~/Library/Audio/Plug-Ins/Components`.
  3. Relancer l'hôte audio (ou refaire un scan des plugins).
- **Compatibilité à afficher** : macOS 12 ou plus récent, binaire universel Apple Silicon et Intel, format Audio Unit uniquement (hôtes AU : Logic Pro, GarageBand, FL Studio sur Mac, etc.). Pas de VST3, AAX ni Windows.
- **Gatekeeper** : le plugin est signé ad hoc et **n'est pas notarisé** actuellement. macOS peut le bloquer au premier chargement. Prévoir une note d'aide (retrait de l'attribut de quarantaine ou autorisation dans Réglages Système). À traiter comme un point ouvert.

## Points ouverts

- Nom de domaine.
- Modèle de distribution : gratuit ou payant (aucun prix défini).
- Notarisation Apple (nécessite un compte Apple Developer) pour supprimer l'avertissement Gatekeeper.
- Visuels : captures de l'interface, image Open Graph, démos audio.
- Hébergement du `.zip` et lien de téléchargement définitif.
- Liste des hôtes AU officiellement testés (seul FL Studio est mentionné à ce jour).
