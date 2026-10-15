export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title':
      'Freeze Audio by sheezy — free reverse, freeze & stutter plugin (AU, VST3) for macOS and Windows',
    'meta.description':
      'Freeze records the last seconds of your track and replays them backwards, frozen, stretched, tape-stopped, as grains or stutters. Free VST3 and Audio Unit for macOS 12+ and Windows 10/11.',
    'meta.ogAlt': 'Freeze Audio by sheezy — plugin interface and tagline',
    'meta.skip': 'Skip to content',
    'meta.jsonLdSubCategory': 'Audio effect plugin (VST3, Audio Unit)',
    'meta.sizeKb': 'KB',
    'meta.sizeMb': 'MB',

    'nav.home': 'Freeze Audio by sheezy — home',
    'nav.download': 'Download',
    'nav.sections': 'Sections',
    'nav.features': 'Features',
    'nav.install': 'Install',
    'nav.lang': 'Language',
    'nav.sound': 'Interface sounds',

    'hero.eyebrow': 'Free plugin · VST3 & AU · v{version}',
    'hero.title.before': 'Replay the ',
    'hero.title.accent': 'last seconds',
    'hero.title.after': ' of your track.',
    'hero.lead':
      'Freeze is a time effect: it keeps recording the recent past of your track and plays it back differently — reversed, frozen, slowed, tape-stopped, as grains or stutters.',
    'hero.cta': 'Download for {platform}',
    'hero.otherFiles': 'All files and requirements',
    'hero.reassure': 'Free. No account. macOS 12+ and Windows 10/11.',
    'hero.shot.alt':
      'Freeze plugin interface in Freeze mode: six mode buttons, live waveform display, FREEZE and STOP buttons, Size, Motion, Feedback, Tone, Mix and Gain knobs, and the EVERY row set to 1/4.',

    'demo.eyebrow': 'Listen',
    'demo.title.before': 'Hear the ',
    'demo.title.accent': 'difference.',
    'demo.lead': 'Same loop, twice: first dry, then through Freeze.',
    'demo.dry': 'Dry',
    'demo.wet': 'With Freeze',

    'features.eyebrow': 'Features',
    'features.title.before': 'Six ways to ',
    'features.title.accent': 'replay the past.',
    'features.reverse': 'The last moments played backwards, in tune.',
    'features.freeze':
      'Holds a pad. EVERY re-freezes on the host tempo (HOLD, 1/1 to 1/16, 1/8T).',
    'features.stretch': 'Slow motion at the original pitch.',
    'features.tape': 'Tape stop, spin back and restart.',
    'features.grain': 'A cloud of reversed grains.',
    'features.stutter': 'Captures a slice and repeats it.',
    'features.controls.title': 'Controls',
    'features.controls.body':
      'Size (0.05–8 s), Warp (its role follows the mode), Feedback, Tone (low-pass ↔ high-pass), Mix, Gain (±24 dB), a Rate / Every row, FREEZE, STOP and Bypass.',
    'features.presets.title': 'Presets',
    'features.presets.body':
      '19 factory presets, plus your own: save and delete them, shared between VST3 and AU.',
    'features.display.title': 'Display',
    'features.display.body':
      'Live waveform with the read heads, IN / OUT meters and a help bar that explains whatever you hover.',

    'download.eyebrow': 'Download',
    'download.title.before': 'Freeze {version} ',
    'download.title.accent': 'for your system.',
    'download.lead': 'Free. Pick the installer, or the .zip to copy the plugin by hand.',
    'download.installer': 'Installer',
    'download.archive': 'Manual install (.zip)',
    'download.requirements': 'Requirements',
    'download.formats': 'Formats',
    'download.macos.os': 'macOS 12 Monterey or later',
    'download.macos.formats': 'Audio Unit + VST3',
    'download.macos.cpu': 'Universal: Apple Silicon and Intel',
    'download.windows.os': 'Windows 10 or 11, 64-bit',
    'download.windows.formats': 'VST3',
    'download.windows.cpu': 'x64',
    'download.checksums': 'SHA-256 checksums',

    'install.eyebrow': 'Install',
    'install.title.before': 'Installed in ',
    'install.title.accent': 'a minute.',
    'install.macos.step1':
      'Open {file} and follow the installer. It installs the Audio Unit and the VST3.',
    'install.macos.step2':
      'Or, from the .zip, copy {component} to {componentFolder} and {vst3} to {vst3Folder}.',
    'install.macos.step3':
      'Rescan plugins in your DAW. Freeze shows up as “Freeze Audio by sheezy”.',
    'install.macos.note.title': 'Blocked by macOS?',
    'install.macos.note.body':
      'Builds are not notarized yet. Right-click the .pkg and choose Open, or allow it in System Settings › Privacy & Security.',
    'install.windows.step1':
      'Run {file}. It installs the VST3 to {folder}.',
    'install.windows.step2': 'Or, from the .zip, copy {vst3} to that folder.',
    'install.windows.step3':
      'Rescan plugins in your DAW. Freeze shows up as “Freeze Audio by sheezy”.',
    'install.windows.note.title': 'SmartScreen warning?',
    'install.windows.note.body':
      'The installer is not signed yet. Click More info, then Run anyway.',

    'footer.nav': 'Footer links',
    'footer.download': 'Download Freeze {version}',
    'footer.features': 'Features',
    'footer.install': 'Install',
    'footer.legal': 'VST3 and Audio Unit for macOS and Windows · Version {version}',
  },
  fr: {
    'meta.title':
      'Freeze Audio by sheezy — plugin gratuit reverse, freeze et stutter (AU, VST3) pour macOS et Windows',
    'meta.description':
      'Freeze enregistre les dernières secondes de votre piste et les rejoue à l’envers, gelées, ralenties, en arrêt de bande, en grains ou en stutter. VST3 et Audio Unit gratuits pour macOS 12+ et Windows 10/11.',
    'meta.ogAlt': 'Freeze Audio by sheezy — interface du plugin et slogan',
    'meta.skip': 'Aller au contenu',
    'meta.jsonLdSubCategory': 'Plugin d’effet audio (VST3, Audio Unit)',
    'meta.sizeKb': 'Ko',
    'meta.sizeMb': 'Mo',

    'nav.home': 'Freeze Audio by sheezy — accueil',
    'nav.download': 'Télécharger',
    'nav.sections': 'Sections',
    'nav.features': 'Fonctions',
    'nav.install': 'Installation',
    'nav.lang': 'Langue',
    'nav.sound': 'Sons de l’interface',

    'hero.eyebrow': 'Plugin gratuit · VST3 & AU · v{version}',
    'hero.title.before': 'Rejouez les ',
    'hero.title.accent': 'dernières secondes',
    'hero.title.after': ' de votre piste.',
    'hero.lead':
      'Freeze est un effet temporel : il enregistre en continu le passé récent de votre piste et le rejoue autrement — à l’envers, gelé, ralenti, en arrêt de bande, en grains ou en stutter.',
    'hero.cta': 'Télécharger pour {platform}',
    'hero.otherFiles': 'Tous les fichiers et la configuration requise',
    'hero.reassure': 'Gratuit. Sans compte. macOS 12+ et Windows 10/11.',
    'hero.shot.alt':
      'Interface du plugin Freeze en mode Freeze : six boutons de mode, affichage de la forme d’onde en direct, boutons FREEZE et STOP, potentiomètres Size, Motion, Feedback, Tone, Mix et Gain, et rangée EVERY réglée sur 1/4.',

    'demo.eyebrow': 'Écouter',
    'demo.title.before': 'Entendez la ',
    'demo.title.accent': 'différence.',
    'demo.lead': 'La même boucle, deux fois : d’abord sèche, puis à travers Freeze.',
    'demo.dry': 'Sec',
    'demo.wet': 'Avec Freeze',

    'features.eyebrow': 'Fonctions',
    'features.title.before': 'Six façons de ',
    'features.title.accent': 'rejouer le passé.',
    'features.reverse': 'Les derniers instants lus à l’envers, à la bonne hauteur.',
    'features.freeze':
      'Tient une nappe. EVERY re-gèle sur le tempo de l’hôte (HOLD, 1/1 à 1/16, 1/8T).',
    'features.stretch': 'Ralenti à hauteur d’origine.',
    'features.tape': 'Arrêt de bande, retour en arrière et redémarrage.',
    'features.grain': 'Un nuage de grains inversés.',
    'features.stutter': 'Capture une tranche et la répète.',
    'features.controls.title': 'Réglages',
    'features.controls.body':
      'Size (0,05–8 s), Warp (son rôle suit le mode), Feedback, Tone (passe-bas ↔ passe-haut), Mix, Gain (±24 dB), une rangée Rate / Every, FREEZE, STOP et Bypass.',
    'features.presets.title': 'Presets',
    'features.presets.body':
      '19 presets d’usine, plus les vôtres : enregistrez-les et supprimez-les, partagés entre VST3 et AU.',
    'features.display.title': 'Affichage',
    'features.display.body':
      'Forme d’onde en direct avec les têtes de lecture, vumètres IN / OUT et une barre d’aide qui explique le contrôle survolé.',

    'download.eyebrow': 'Téléchargement',
    'download.title.before': 'Freeze {version} ',
    'download.title.accent': 'pour votre système.',
    'download.lead': 'Gratuit. Choisissez l’installeur, ou le .zip pour copier le plugin à la main.',
    'download.installer': 'Installeur',
    'download.archive': 'Installation manuelle (.zip)',
    'download.requirements': 'Configuration requise',
    'download.formats': 'Formats',
    'download.macos.os': 'macOS 12 Monterey ou plus récent',
    'download.macos.formats': 'Audio Unit + VST3',
    'download.macos.cpu': 'Universel : Apple Silicon et Intel',
    'download.windows.os': 'Windows 10 ou 11, 64 bits',
    'download.windows.formats': 'VST3',
    'download.windows.cpu': 'x64',
    'download.checksums': 'Empreintes SHA-256',

    'install.eyebrow': 'Installation',
    'install.title.before': 'Installé en ',
    'install.title.accent': 'une minute.',
    'install.macos.step1':
      'Ouvrez {file} et suivez l’installeur. Il installe l’Audio Unit et le VST3.',
    'install.macos.step2':
      'Ou, depuis le .zip, copiez {component} dans {componentFolder} et {vst3} dans {vst3Folder}.',
    'install.macos.step3':
      'Relancez le scan des plugins dans votre DAW. Freeze apparaît sous « Freeze Audio by sheezy ».',
    'install.macos.note.title': 'Bloqué par macOS ?',
    'install.macos.note.body':
      'Les builds ne sont pas encore notarisés. Faites un clic droit sur le .pkg puis Ouvrir, ou autorisez-le dans Réglages Système › Confidentialité et sécurité.',
    'install.windows.step1':
      'Lancez {file}. Il installe le VST3 dans {folder}.',
    'install.windows.step2': 'Ou, depuis le .zip, copiez {vst3} dans ce dossier.',
    'install.windows.step3':
      'Relancez le scan des plugins dans votre DAW. Freeze apparaît sous « Freeze Audio by sheezy ».',
    'install.windows.note.title': 'Avertissement SmartScreen ?',
    'install.windows.note.body':
      'L’installeur n’est pas encore signé. Cliquez sur Informations complémentaires, puis Exécuter quand même.',

    'footer.nav': 'Liens du pied de page',
    'footer.download': 'Télécharger Freeze {version}',
    'footer.features': 'Fonctions',
    'footer.install': 'Installation',
    'footer.legal': 'VST3 et Audio Unit pour macOS et Windows · Version {version}',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function isLang(value: string | undefined): value is Lang {
  return value === 'en' || value === 'fr';
}

export function useTranslations(lang: Lang) {
  return function t(
    key: UiKey,
    vars?: Record<string, string | number>,
  ): string {
    let text: string = ui[lang][key] ?? ui[defaultLang][key] ?? key;
    if (vars) {
      for (const [name, value] of Object.entries(vars)) {
        text = text.replaceAll(`{${name}}`, String(value));
      }
    }
    return text;
  };
}

export function localeTag(lang: Lang): string {
  return lang === 'fr' ? 'fr_FR' : 'en_US';
}

export function homePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

export type TemplatePart = { slot: false; text: string } | { slot: true; name: string };

export function templateParts(template: string): TemplatePart[] {
  return template
    .split(/\{(\w+)\}/)
    .map((piece, index): TemplatePart =>
      index % 2 === 1 ? { slot: true, name: piece } : { slot: false, text: piece },
    )
    .filter((part) => part.slot || part.text.length > 0);
}
