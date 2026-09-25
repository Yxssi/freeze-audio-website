export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    'meta.title':
      "freezy by ye' miyake — Audio Unit reverse, stutter and time effect for Mac",
    'meta.description':
      'Freeze replays the last seconds of your track in reverse, frozen, stretched, tape-stopped, as a granular cloud or as a stutter, at 2× down to 1/16. Audio Unit for macOS 12+, Apple Silicon and Intel.',
    'meta.ogAlt': "freezy by ye' miyake — plugin interface and tagline",
    'meta.skip': 'Skip to content',
    'meta.jsonLdSubCategory': 'Audio effect plugin',
    'meta.processor': 'Apple Silicon (arm64) or Intel (x86_64)',

    'nav.home': "freezy by ye' miyake — home",
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
      'Freeze keeps the last seconds of your track in memory and plays them back in reverse, frozen, slowed down, as a tape stop, as a granular cloud, or as a stutter. Each engine can run at 2×, 1×, 1/2, 1/4, 1/8, 1/12 or 1/16.',
    'hero.ctaDownload': 'Download Freeze {version}',
    'hero.ctaGuide': 'Install guide',
    'hero.requirements': 'Requirements',
    'hero.req.macos': 'macOS {min} or later',
    'hero.req.cpu': 'Apple Silicon & Intel',
    'hero.req.format': 'Audio Unit (AU)',
    'hero.marquee.pause': 'Pause scrolling',
    'hero.marquee.resume': 'Resume scrolling',

    'engines.eyebrow': 'How does it work ?',
    'engines.title.before': 'One buffer, ',
    'engines.title.accent': 'six ways',
    'engines.title.after': ' to read it back.',
    'engines.lead':
      'Freeze continuously records your signal. Each engine reads that past sound differently. The time row sets the rate, and the FREEZE button re-captures the current fragment instantly.',
    'engines.reverse.body':
      'The recent past played backwards, looping continuously over the Size window.',
    'engines.reverse.warp': 'Warp sets reverse speed. Rate scales it from 2× down to 1/16.',
    'engines.freeze.body':
      'A captured fragment looped forever.',
    'engines.freeze.warp': 'Warp sets sweep speed. Rate scales the loop.',
    'engines.stretch.body':
      'The past crawls by in slow motion, stretched across your track.',
    'engines.stretch.warp': 'Warp sets the slowdown. Rate stretches it further.',
    'engines.tape.body':
      'Tape stop: playback decelerates, reverses, then accelerates again, cycle after cycle.',
    'engines.tape.warp': 'Warp and Size set the cycle. Rate shortens or lengthens it.',
    'engines.grain.body':
      'Up to 6 windowed grains read backwards and scattered across the window.',
    'engines.grain.warp':
      'Warp sets density and grain length. Rate scales how often grains appear.',
    'engines.stutter.body':
      'A short slice is captured and fired back in a burst, then a new slice is caught.',
    'engines.stutter.warp':
      'Warp sets the repeats (2 to 8) and how tightly each hit is gated. Rate divides the slice: 1/2 and 1/4 make a longer chop, 2× a tighter one.',

    'showcase.eyebrow': 'What does it look like ?',
    'showcase.title.before': 'Everything in ',
    'showcase.title.accent': 'a single frame.',
    'showcase.alt':
      "freezy by ye' miyake interface: mode strip with Reverse, Freeze, Stretch, Tape, Grain and Stutter (selected); time row at 1/4; six knobs; waveform scope with STOP and FREEZE.",
    'showcase.caption':
      'Interface capture, Stutter selected at 1/4 (no input signal).',
    'showcase.modes.title': 'Mode strip',
    'showcase.modes.body':
      'All six engines one click away, with the active mode highlighted.',
    'showcase.time.title': 'Time row',
    'showcase.time.body':
      '2×, 1×, 1/2, 1/4, 1/8, 1/12 and 1/16. The same rate drives every engine, including the stutter slice.',
    'showcase.knobs.title': 'Six knobs',
    'showcase.knobs.body':
      'Size, Warp, Feedback, Tone, Mix and Output. Double-click resets to the default value.',
    'showcase.scope.title': 'Live scope',
    'showcase.scope.body':
      'The processed waveform in real time. STOP clears the sound without moving the knobs. FREEZE re-captures the past.',

    'controls.eyebrow': 'Parameters',
    'controls.title.before': 'Few controls, ',
    'controls.title.accent': 'but all useful.',
    'controls.size.body': 'Length of the past window the engine reads.',
    'controls.rate.body':
      'Playback rate shared by every engine: 2×, 1×, 1/2, 1/4, 1/8, 1/12 or 1/16.',
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
    'controls.range.rate': '2× – 1/16',
    'controls.range.percent': '0 – 100 %',
    'controls.range.feedback': '0 – 95 %',
    'controls.range.tone': 'LP ← center → HP',
    'controls.range.gain': '± 24 dB',
    'controls.range.bool': 'on / off',
    'controls.range.button': 'button',
    'controls.presets.title': '15 presets',
    'controls.presets.intro':
      'A starting point for each engine, including three stutter settings, exposed to the host as Audio Unit factory presets.',
    'controls.presets.col.preset': 'Preset',
    'controls.presets.col.engine': 'Engine',
    'controls.presets.col.size': 'Size',
    'controls.presets.col.rate': 'Rate',
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
      'A .zip archive containing Freeze.component, a universal binary for Apple Silicon and Intel.',
    'download.cta': 'Download the .zip ({size} KB)',
    'download.file': 'File',
    'download.version': 'Version',
    'download.system': 'System',
    'download.sha': 'SHA-256',
    'download.systemValue': 'macOS {min}+',

    'install.eyebrow': 'How to install ?',
    'install.title.before': 'Installed in ',
    'install.title.accent': 'three steps.',
    'install.step1.title': 'Unzip the archive',
    'install.step1.body':
      'Double-click FreezeAudio-1.0.0-macOS.zip: you get Freeze.component.',
    'install.step2.title': 'Copy the plugin',
    'install.step2.body.before':
      'In Finder, choose Go › Go to Folder…, paste ',
    'install.step2.body.after': ' then drop Freeze.component into it.',
    'install.step3.title': 'Relaunch your host',
    'install.step3.body':
      "Restart your audio software or rescan its Audio Unit plugins. Freeze shows up as “freezy by ye' miyake”.",

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
      'Yes. Mode, Rate, Size, Warp, Feedback, Tone, Mix, Input, Output, Bypass and Freeze are exposed to the host as Audio Unit parameters.',
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
      "freezy by ye' miyake — effet Audio Unit reverse, stutter et temps pour Mac",
    'meta.description':
      'Freeze rejoue les dernières secondes de votre piste à l’envers, gelées, ralenties, en arrêt de bande, en nuage granulaire ou en stutter, de 2× à 1/16. Audio Unit pour macOS 12+, Apple Silicon et Intel.',
    'meta.ogAlt': "freezy by ye' miyake — interface du plugin et slogan",
    'meta.skip': 'Aller au contenu',
    'meta.jsonLdSubCategory': 'Plugin d’effet audio',
    'meta.processor': 'Apple Silicon (arm64) ou Intel (x86_64)',

    'nav.home': "freezy by ye' miyake — accueil",
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
      'Freeze garde en mémoire les dernières secondes de votre piste et les rejoue à l’envers, gelées, ralenties, en arrêt de bande, en nuage granulaire ou en stutter. Chaque moteur peut tourner en 2×, 1×, 1/2, 1/4, 1/8, 1/12 ou 1/16.',
    'hero.ctaDownload': 'Télécharger Freeze {version}',
    'hero.ctaGuide': 'Guide d’installation',
    'hero.requirements': 'Configuration requise',
    'hero.req.macos': 'macOS {min} ou plus récent',
    'hero.req.cpu': 'Apple Silicon & Intel',
    'hero.req.format': 'Audio Unit (AU)',
    'hero.marquee.pause': 'Mettre en pause le défilement',
    'hero.marquee.resume': 'Relancer le défilement',

    'engines.eyebrow': 'Comment ça marche ?',
    'engines.title.before': 'Une mémoire tampon, ',
    'engines.title.accent': 'six façons',
    'engines.title.after': ' de la relire.',
    'engines.lead':
      'Freeze enregistre en continu votre signal. Chaque moteur relit ce passé autrement. La rangée de temps fixe la vitesse, et le bouton FREEZE re-gèle instantanément le fragment en cours.',
    'engines.reverse.body':
      'Le passé proche lu à l’envers, en boucle continue sur la fenêtre Size.',
    'engines.reverse.warp': 'Warp règle la vitesse de recul. Rate la décline de 2× jusqu’à 1/16.',
    'engines.freeze.body':
      'Un fragment capturé puis rejoué en ping-pong infini.',
    'engines.freeze.warp': 'Warp règle la vitesse de balayage. Rate étire la boucle.',
    'engines.stretch.body':
      'Le passé défile au ralenti, comme une version ralentie de votre piste.',
    'engines.stretch.warp': 'Warp règle le ralenti. Rate l’étire encore.',
    'engines.tape.body':
      'Arrêt de bande : la lecture décélère, s’inverse, puis ré-accélère, cycle après cycle.',
    'engines.tape.warp': 'Warp et Size fixent le cycle. Rate le raccourcit ou l’allonge.',
    'engines.grain.body':
      'Jusqu’à 6 grains fenêtrés lus à l’envers, semés dans la fenêtre.',
    'engines.grain.warp':
      'Warp règle la densité et la longueur des grains. Rate règle leur cadence.',
    'engines.stutter.body':
      'Un court fragment est capturé puis renvoyé en rafale, avant d’en attraper un nouveau.',
    'engines.stutter.warp':
      'Warp fixe le nombre de répétitions (2 à 8) et la fermeture du gate. Rate divise la tranche : 1/2 et 1/4 l’allongent, 2× la resserre.',

    'showcase.eyebrow': 'A quoi ça ressemble ?',
    'showcase.title.before': 'Toutes les fonctionnalités dans ',
    'showcase.title.accent': 'une seule fenêtre.',
    'showcase.alt':
      "Interface freezy by ye' miyake : bandeau Reverse, Freeze, Stretch, Tape, Grain et Stutter (sélectionné) ; rangée de temps en 1/4 ; six potentiomètres ; scope avec STOP et FREEZE.",
    'showcase.caption':
      'Capture de l’interface, mode Stutter en 1/4 (sans signal en entrée).',
    'showcase.modes.title': 'Bandeau des modes',
    'showcase.modes.body':
      'Les 6 moteurs à portée de clic, le mode actif est surligné.',
    'showcase.time.title': 'Rangée de temps',
    'showcase.time.body':
      '2×, 1×, 1/2, 1/4, 1/8, 1/12 et 1/16. La même vitesse pilote tous les moteurs, y compris la tranche du stutter.',
    'showcase.knobs.title': 'Six potentiomètres',
    'showcase.knobs.body':
      'Size, Warp, Feedback, Tone, Mix et Output. Double-clic : retour à la valeur par défaut.',
    'showcase.scope.title': 'Scope en direct',
    'showcase.scope.body':
      'Onde du signal traité en direct. STOP coupe le son sans bouger les knobs. FREEZE re-gèle le passé.',

    'controls.eyebrow': 'Paramètres',
    'controls.title.before': 'Peu de réglages, ',
    'controls.title.accent': 'mais tous utiles.',
    'controls.size.body':
      'Longueur de la fenêtre de passé relue par le moteur.',
    'controls.rate.body':
      'Vitesse de lecture commune à tous les moteurs : 2×, 1×, 1/2, 1/4, 1/8, 1/12 ou 1/16.',
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
    'controls.range.rate': '2× – 1/16',
    'controls.range.percent': '0 – 100 %',
    'controls.range.feedback': '0 – 95 %',
    'controls.range.tone': 'LP ← centre → HP',
    'controls.range.gain': '± 24 dB',
    'controls.range.bool': 'on / off',
    'controls.range.button': 'bouton',
    'controls.presets.title': '15 presets',
    'controls.presets.intro':
      'Un point de départ pour chaque moteur, dont trois réglages de stutter, exposés à l’hôte comme presets factory Audio Unit.',
    'controls.presets.col.preset': 'Preset',
    'controls.presets.col.engine': 'Moteur',
    'controls.presets.col.size': 'Size',
    'controls.presets.col.rate': 'Rate',
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
      'Une archive .zip contenant Freeze.component, binaire universel Apple Silicon et Intel.',
    'download.cta': 'Télécharger le .zip ({size} Ko)',
    'download.file': 'Fichier',
    'download.version': 'Version',
    'download.system': 'Système',
    'download.sha': 'SHA-256',
    'download.systemValue': 'macOS {min}+',

    'install.eyebrow': 'Comment l\'installer ?',
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
      "Redémarrez votre logiciel audio ou relancez son scan des plugins Audio Unit. Freeze apparaît sous « freezy by ye' miyake ».",

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
      'Oui. Mode, Rate, Size, Warp, Feedback, Tone, Mix, Input, Output, Bypass et Freeze sont exposés à l’hôte comme paramètres Audio Unit.',
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
