export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title':
      'Freeze Audio by sheezy — Audio Unit reverse, freeze & granular effect for Mac',
    'meta.description':
      'Freeze replays the last seconds of your track in reverse, frozen, stretched, tape-stopped or as a granular cloud. Audio Unit for macOS 12+, Apple Silicon and Intel.',
    'meta.ogAlt': 'Freeze Audio by sheezy — plugin interface and tagline',
    'meta.skip': 'Skip to content',
    'meta.jsonLdSubCategory': 'Audio effect plugin',
    'meta.processor': 'Apple Silicon (arm64) or Intel (x86_64)',

    'nav.home': 'Freeze Audio by sheezy — home',
    'nav.download': 'Download',
    'nav.sections': 'Sections',
    'nav.engines': 'Engines',
    'nav.install': 'Install',
    'nav.faq': 'FAQ',
    'nav.lang': 'Language',

    'hero.eyebrow': 'Time Effector · Audio Unit for Mac',
    'hero.title.before': 'Replay the ',
    'hero.title.accent': 'past',
    'hero.title.after': ' of your sound.',
    'hero.lead':
      'Freeze keeps the last seconds of your track in memory and plays them back in reverse, frozen, slowed down, as a tape stop, or as a granular cloud.',
    'hero.ctaDownload': 'Download Freeze {version}',
    'hero.ctaGuide': 'Install guide',
    'hero.requirements': 'Requirements',
    'hero.req.macos': 'macOS {min} or later',
    'hero.req.cpu': 'Apple Silicon & Intel',
    'hero.req.format': 'Audio Unit (AU)',
    'hero.marquee.pause': 'Pause scrolling',
    'hero.marquee.resume': 'Resume scrolling',

    'engines.eyebrow': 'Five engines',
    'engines.title.before': 'One buffer, ',
    'engines.title.accent': 'five ways',
    'engines.title.after': ' to read it back.',
    'engines.lead':
      'Freeze continuously records your signal. Each engine reads that past differently, and the FREEZE button re-captures the current fragment instantly.',
    'engines.reverse.body':
      'The recent past played backwards, looping continuously over the Size window — with no dead zone.',
    'engines.reverse.warp': 'Warp sets reverse speed (0.25× to 2.75×).',
    'engines.freeze.body':
      'A captured fragment looped forever in ping-pong: the sound breathes, with no jumps.',
    'engines.freeze.warp': 'Warp sets sweep speed (0.25× to 1.5×).',
    'engines.stretch.body':
      'The past crawls by in slow motion, stretched across your track.',
    'engines.stretch.warp': 'Warp sets the slowdown (0.05× to 0.95×).',
    'engines.tape.body':
      'Tape stop: playback decelerates, reverses, then accelerates again, cycle after cycle.',
    'engines.tape.warp': 'Warp and Size set the cycle length.',
    'engines.grain.body':
      'Up to 8 windowed grains read backwards and scattered across the window: an inverted cloud.',
    'engines.grain.warp':
      'Warp sets density (2 to 28 grains/s) and grain length.',

    'showcase.eyebrow': 'Interface',
    'showcase.title.before': 'Everything fits in ',
    'showcase.title.accent': 'one window.',
    'showcase.alt':
      'Freeze plugin interface: mode strip with Reverse, Freeze (selected), Stretch, Tape and Grain; six knobs for Size, Warp, Feedback, Tone, Mix and Output; waveform scope and FREEZE button.',
    'showcase.caption':
      'Interface capture, Freeze mode selected (no input signal).',
    'showcase.modes.title': 'Mode strip',
    'showcase.modes.body':
      'All five engines one click away, with the active mode highlighted.',
    'showcase.knobs.title': 'Six knobs',
    'showcase.knobs.body':
      'Size, Warp, Feedback, Tone, Mix and Output. Double-click resets to the default.',
    'showcase.scope.title': 'Live scope',
    'showcase.scope.body':
      'The processed waveform in real time, plus the FREEZE button to re-capture the past.',

    'controls.eyebrow': 'Parameters',
    'controls.title.before': 'Few controls, ',
    'controls.title.accent': 'all useful.',
    'controls.size.body': 'Length of the past window the engine reads.',
    'controls.warp.body': 'Speed modulation, unique to each engine.',
    'controls.feedback.body': 'Feeds the processed signal back into the buffer.',
    'controls.tone.body':
      'Tilt filter on the wet signal: darker or airier.',
    'controls.mix.body': 'Blend between dry and wet.',
    'controls.io.body':
      'Input and output gains (Output on the UI, Input via the host).',
    'controls.bypass.body': 'Bypasses the effect, automatable from the host.',
    'controls.freeze.body': 'Re-captures the current fragment instantly.',
    'controls.range.size': '0.05 – 8 s',
    'controls.range.percent': '0 – 100 %',
    'controls.range.feedback': '0 – 95 %',
    'controls.range.tone': 'LP ← center → HP',
    'controls.range.gain': '± 24 dB',
    'controls.range.bool': 'on / off',
    'controls.range.button': 'button',
    'controls.presets.title': '6 factory presets',
    'controls.presets.intro':
      'A starting point for each engine, exposed to the host as Audio Unit factory presets.',
    'controls.presets.col.preset': 'Preset',
    'controls.presets.col.engine': 'Engine',
    'controls.presets.col.size': 'Size',
    'controls.presets.col.mix': 'Mix',
    'controls.presets.size.1': '1.0 s',
    'controls.presets.size.2': '2.0 s',
    'controls.presets.size.2_5': '2.5 s',
    'controls.presets.size.3': '3.0 s',
    'controls.presets.mix.28': '28 %',
    'controls.presets.mix.50': '50 %',
    'controls.presets.mix.55': '55 %',
    'controls.presets.mix.60': '60 %',
    'controls.presets.mix.68': '68 %',
    'controls.presets.mix.80': '80 %',

    'download.eyebrow': 'Download',
    'download.title.before': 'Freeze {version} ',
    'download.title.accent': 'for macOS.',
    'download.lead':
      'A .zip archive containing Freeze.component, a universal binary for Apple Silicon and Intel. No installer, no account.',
    'download.cta': 'Download the .zip ({size} KB)',
    'download.file': 'File',
    'download.version': 'Version',
    'download.system': 'System',
    'download.sha': 'SHA-256',
    'download.systemValue': 'macOS {min}+',

    'install.eyebrow': 'Install',
    'install.title.before': 'Installed in ',
    'install.title.accent': 'three steps.',
    'install.step1.title': 'Unzip the archive',
    'install.step1.body':
      'Double-click FreezeAudio-1.0.0-macOS.zip — you get Freeze.component.',
    'install.step2.title': 'Copy the plugin',
    'install.step2.body.before':
      'In Finder, choose Go › Go to Folder…, paste ',
    'install.step2.body.after': ' then drop Freeze.component into it.',
    'install.step3.title': 'Relaunch your host',
    'install.step3.body':
      'Restart your audio software or rescan its Audio Unit plugins. Freeze shows up as “Freeze Audio by sheezy”.',

    'compat.eyebrow': 'Compatibility',
    'compat.title.before': 'Built for ',
    'compat.title.accent': 'the Mac.',
    'compat.lead':
      'Freeze works in hosts that load Audio Units. Logic Pro, GarageBand and other AU hosts are compatible in principle, but have not been officially tested yet.',
    'compat.yes': 'Supported',
    'compat.no': 'Not supported',
    'compat.os': 'System',
    'compat.osValue': 'macOS {min} Monterey or later',
    'compat.cpu': 'Processors',
    'compat.cpuValue':
      'Universal binary: Apple Silicon (arm64) and Intel (x86_64)',
    'compat.format': 'Format',
    'compat.formatValue': 'Audio Unit v2 (effect)',
    'compat.tested': 'Tested',
    'compat.testedValue': 'FL Studio on Mac · Apple auval validation passed',
    'compat.unavailable': 'Not available',
    'compat.unavailableValue': 'VST3, AAX and Windows',

    'faq.eyebrow': 'FAQ',
    'faq.title.before': 'Common ',
    'faq.title.accent': 'questions.',
    'faq.q1': 'How much does Freeze cost?',
    'faq.a1':
      'No price is listed: version 1.0.0 downloads directly from this page, with no account required.',
    'faq.q2': 'Is there a VST3, AAX or Windows version?',
    'faq.a2': 'No. Freeze is Audio Unit for macOS only.',
    'faq.q3': 'My host cannot find the plugin. What should I do?',
    'faq.a3':
      'Make sure Freeze.component is in ~/Library/Audio/Plug-Ins/Components, then relaunch the host or rescan plugins. In FL Studio, run a new scan from the plugin manager.',
    'faq.q4': 'Can parameters be automated?',
    'faq.a4':
      'Yes. Mode, Size, Warp, Feedback, Tone, Mix, Input, Output, Bypass and Freeze are exposed to the host as Audio Unit parameters.',
    'faq.q5': 'How do I uninstall Freeze?',
    'faq.a5':
      'Delete Freeze.component from ~/Library/Audio/Plug-Ins/Components, then relaunch your host.',

    'footer.nav': 'Footer links',
    'footer.download': 'Download {version}',
    'footer.install': 'Install',
    'footer.compat': 'Compatibility',
    'footer.faq': 'FAQ',
    'footer.legal': 'Audio Unit for macOS · Version {version}',
  },
  fr: {
    'meta.title':
      'Freeze Audio by sheezy — effet Audio Unit reverse, freeze et granulaire pour Mac',
    'meta.description':
      'Freeze rejoue les dernières secondes de votre piste à l’envers, gelées, ralenties, en arrêt de bande ou en nuage granulaire. Audio Unit pour macOS 12+, Apple Silicon et Intel.',
    'meta.ogAlt': 'Freeze Audio by sheezy — interface du plugin et slogan',
    'meta.skip': 'Aller au contenu',
    'meta.jsonLdSubCategory': 'Plugin d’effet audio',
    'meta.processor': 'Apple Silicon (arm64) ou Intel (x86_64)',

    'nav.home': 'Freeze Audio by sheezy — accueil',
    'nav.download': 'Télécharger',
    'nav.sections': 'Sections',
    'nav.engines': 'Moteurs',
    'nav.install': 'Installation',
    'nav.faq': 'FAQ',
    'nav.lang': 'Langue',

    'hero.eyebrow': 'Time Effector · Audio Unit pour Mac',
    'hero.title.before': 'Rejouez le ',
    'hero.title.accent': 'passé',
    'hero.title.after': ' de votre son.',
    'hero.lead':
      'Freeze garde en mémoire les dernières secondes de votre piste et les rejoue à l’envers, gelées, ralenties, en arrêt de bande ou en nuage granulaire.',
    'hero.ctaDownload': 'Télécharger Freeze {version}',
    'hero.ctaGuide': 'Guide d’installation',
    'hero.requirements': 'Configuration requise',
    'hero.req.macos': 'macOS {min} ou plus récent',
    'hero.req.cpu': 'Apple Silicon & Intel',
    'hero.req.format': 'Audio Unit (AU)',
    'hero.marquee.pause': 'Mettre en pause le défilement',
    'hero.marquee.resume': 'Relancer le défilement',

    'engines.eyebrow': 'Cinq moteurs',
    'engines.title.before': 'Une mémoire tampon, ',
    'engines.title.accent': 'cinq façons',
    'engines.title.after': ' de la relire.',
    'engines.lead':
      'Freeze enregistre en continu votre signal. Chaque moteur relit ce passé autrement, et le bouton FREEZE re-gèle instantanément le fragment en cours.',
    'engines.reverse.body':
      'Le passé proche lu à l’envers, en boucle continue sur la fenêtre Size — sans zone morte.',
    'engines.reverse.warp': 'Warp règle la vitesse de recul (0,25× à 2,75×).',
    'engines.freeze.body':
      'Un fragment capturé puis rejoué en ping-pong infini : le son respire, sans saut.',
    'engines.freeze.warp': 'Warp règle la vitesse de balayage (0,25× à 1,5×).',
    'engines.stretch.body':
      'Le passé défile au ralenti, comme un slow-motion de votre piste.',
    'engines.stretch.warp': 'Warp règle le ralenti (0,05× à 0,95×).',
    'engines.tape.body':
      'Arrêt de bande : la lecture décélère, s’inverse, puis ré-accélère, cycle après cycle.',
    'engines.tape.warp': 'Warp et Size fixent la durée du cycle.',
    'engines.grain.body':
      'Jusqu’à 8 grains fenêtrés lus à l’envers, semés dans la fenêtre : un nuage inversé.',
    'engines.grain.warp':
      'Warp règle la densité (2 à 28 grains/s) et la longueur des grains.',

    'showcase.eyebrow': 'Interface',
    'showcase.title.before': 'Tout tient dans ',
    'showcase.title.accent': 'une seule fenêtre.',
    'showcase.alt':
      'Interface du plugin Freeze : bandeau des modes Reverse, Freeze (sélectionné), Stretch, Tape et Grain ; six potentiomètres Size, Warp, Feedback, Tone, Mix et Output ; scope de forme d’onde et bouton FREEZE.',
    'showcase.caption':
      'Capture de l’interface, mode Freeze sélectionné (sans signal en entrée).',
    'showcase.modes.title': 'Bandeau des modes',
    'showcase.modes.body':
      'Les 5 moteurs à portée de clic, le mode actif surligné.',
    'showcase.knobs.title': 'Six potentiomètres',
    'showcase.knobs.body':
      'Size, Warp, Feedback, Tone, Mix et Output. Double-clic : retour à la valeur par défaut.',
    'showcase.scope.title': 'Scope en direct',
    'showcase.scope.body':
      'La forme d’onde du signal traité, et le bouton FREEZE pour re-geler le passé.',

    'controls.eyebrow': 'Paramètres',
    'controls.title.before': 'Peu de réglages, ',
    'controls.title.accent': 'tous utiles.',
    'controls.size.body':
      'Longueur de la fenêtre de passé relue par le moteur.',
    'controls.warp.body': 'Modulation de vitesse, propre à chaque moteur.',
    'controls.feedback.body':
      'Réinjecte le signal traité dans la mémoire tampon.',
    'controls.tone.body':
      'Filtre tilt sur le signal traité : plus sombre ou plus aérien.',
    'controls.mix.body': 'Dosage entre signal d’origine et signal traité.',
    'controls.io.body':
      'Gains d’entrée et de sortie (Output sur l’interface, Input via l’hôte).',
    'controls.bypass.body':
      'Contourne l’effet, automatisable depuis l’hôte.',
    'controls.freeze.body':
      'Re-gèle instantanément le fragment en cours.',
    'controls.range.size': '0,05 – 8 s',
    'controls.range.percent': '0 – 100 %',
    'controls.range.feedback': '0 – 95 %',
    'controls.range.tone': 'LP ← centre → HP',
    'controls.range.gain': '± 24 dB',
    'controls.range.bool': 'on / off',
    'controls.range.button': 'bouton',
    'controls.presets.title': '6 presets factory',
    'controls.presets.intro':
      'Un point de départ pour chaque moteur, exposés à l’hôte comme presets factory Audio Unit.',
    'controls.presets.col.preset': 'Preset',
    'controls.presets.col.engine': 'Moteur',
    'controls.presets.col.size': 'Size',
    'controls.presets.col.mix': 'Mix',
    'controls.presets.size.1': '1,0 s',
    'controls.presets.size.2': '2,0 s',
    'controls.presets.size.2_5': '2,5 s',
    'controls.presets.size.3': '3,0 s',
    'controls.presets.mix.28': '28 %',
    'controls.presets.mix.50': '50 %',
    'controls.presets.mix.55': '55 %',
    'controls.presets.mix.60': '60 %',
    'controls.presets.mix.68': '68 %',
    'controls.presets.mix.80': '80 %',

    'download.eyebrow': 'Téléchargement',
    'download.title.before': 'Freeze {version} ',
    'download.title.accent': 'pour macOS.',
    'download.lead':
      'Une archive .zip contenant Freeze.component, binaire universel Apple Silicon et Intel. Aucun installeur, aucun compte.',
    'download.cta': 'Télécharger le .zip ({size} Ko)',
    'download.file': 'Fichier',
    'download.version': 'Version',
    'download.system': 'Système',
    'download.sha': 'SHA-256',
    'download.systemValue': 'macOS {min}+',

    'install.eyebrow': 'Installation',
    'install.title.before': 'Installé en ',
    'install.title.accent': 'trois étapes.',
    'install.step1.title': 'Décompressez l’archive',
    'install.step1.body':
      'Double-cliquez sur FreezeAudio-1.0.0-macOS.zip : vous obtenez Freeze.component.',
    'install.step2.title': 'Copiez le plugin',
    'install.step2.body.before':
      'Dans le Finder, menu Aller › Aller au dossier…, collez ',
    'install.step2.body.after':
      ' puis glissez-y Freeze.component.',
    'install.step3.title': 'Relancez votre hôte',
    'install.step3.body':
      'Redémarrez votre logiciel audio ou relancez son scan des plugins Audio Unit. Freeze apparaît sous « Freeze Audio by sheezy ».',

    'compat.eyebrow': 'Compatibilité',
    'compat.title.before': 'Pensé pour ',
    'compat.title.accent': 'le Mac.',
    'compat.lead':
      'Freeze fonctionne dans les hôtes qui chargent les Audio Unit. Logic Pro, GarageBand et les autres hôtes AU sont compatibles en principe, mais n’ont pas encore été testés officiellement.',
    'compat.yes': 'Pris en charge',
    'compat.no': 'Non pris en charge',
    'compat.os': 'Système',
    'compat.osValue': 'macOS {min} Monterey ou plus récent',
    'compat.cpu': 'Processeurs',
    'compat.cpuValue':
      'Binaire universel : Apple Silicon (arm64) et Intel (x86_64)',
    'compat.format': 'Format',
    'compat.formatValue': 'Audio Unit v2 (effet)',
    'compat.tested': 'Testé',
    'compat.testedValue': 'FL Studio sur Mac · validation Apple auval réussie',
    'compat.unavailable': 'Non disponible',
    'compat.unavailableValue': 'VST3, AAX et Windows',

    'faq.eyebrow': 'FAQ',
    'faq.title.before': 'Questions ',
    'faq.title.accent': 'fréquentes.',
    'faq.q1': 'Combien coûte Freeze ?',
    'faq.a1':
      'Aucun prix n’est affiché : la version 1.0.0 se télécharge directement depuis cette page, sans compte.',
    'faq.q2': 'Existe-t-il une version VST3, AAX ou Windows ?',
    'faq.a2': 'Non. Freeze est uniquement disponible en Audio Unit pour macOS.',
    'faq.q3': 'Mon hôte ne trouve pas le plugin. Que faire ?',
    'faq.a3':
      'Vérifiez que Freeze.component se trouve bien dans ~/Library/Audio/Plug-Ins/Components, puis relancez l’hôte ou son scan des plugins. Dans FL Studio, lancez un nouveau scan depuis le gestionnaire de plugins.',
    'faq.q4': 'Les paramètres sont-ils automatisables ?',
    'faq.a4':
      'Oui. Mode, Size, Warp, Feedback, Tone, Mix, Input, Output, Bypass et Freeze sont exposés à l’hôte comme paramètres Audio Unit.',
    'faq.q5': 'Comment désinstaller Freeze ?',
    'faq.a5':
      'Supprimez Freeze.component du dossier ~/Library/Audio/Plug-Ins/Components puis relancez votre hôte.',

    'footer.nav': 'Liens du pied de page',
    'footer.download': 'Télécharger {version}',
    'footer.install': 'Installation',
    'footer.compat': 'Compatibilité',
    'footer.faq': 'FAQ',
    'footer.legal': 'Audio Unit pour macOS · Version {version}',
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

/** Home path for a locale (default English has no prefix). */
export function homePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
