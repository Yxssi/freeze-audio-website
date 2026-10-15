export const site = {
  url: 'https://example.com',
  name: 'Freeze Audio by sheezy',
  author: 'sheezy',
} as const;

export const release = {
  version: '1.0.0',
  downloadPath: '/downloads/FreezeAudio-1.0.0-macOS.zip',
  minMacOS: '12',
} as const;

export const demos: ReadonlyArray<{
  engine: string;
  dry: string;
  wet: string;
}> = [
];
