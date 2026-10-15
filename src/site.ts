export const site = {
  url: 'https://example.com',
  name: 'Freeze Audio by sheezy',
  author: 'sheezy',
} as const;

const version = '1.1.0';
const downloadsBaseUrl = '/downloads/';
const fileStem = `FreezeAudio-${version}`;

export type PlatformId = 'macos' | 'windows';

export interface DownloadFile {
  name: string;
  href: string;
}

export interface Platform {
  id: PlatformId;
  label: string;
  installer: DownloadFile;
  archive: DownloadFile;
}

function downloadFile(name: string): DownloadFile {
  return { name, href: `${downloadsBaseUrl}${name}` };
}

const platforms: ReadonlyArray<Platform> = [
  {
    id: 'macos',
    label: 'macOS',
    installer: downloadFile(`${fileStem}-macOS.pkg`),
    archive: downloadFile(`${fileStem}-macOS.zip`),
  },
  {
    id: 'windows',
    label: 'Windows',
    installer: downloadFile(`${fileStem}-Windows-Setup.exe`),
    archive: downloadFile(`${fileStem}-Windows.zip`),
  },
];

export const release = {
  version,
  downloadsBaseUrl,
  operatingSystems: 'macOS 12+, Windows 10/11',
  platforms,
} as const;

export const demos: ReadonlyArray<{
  engine: string;
  dry: string;
  wet: string;
}> = [
];
