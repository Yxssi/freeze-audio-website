import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { DownloadFile } from './site';

export interface FileFacts {
  bytes: number;
  sha256: string;
}

const reportedMissing = new Set<string>();

export function formatSize(bytes: number, locale: string, units: { kb: string; mb: string }): string {
  const megabytes = bytes / (1024 * 1024);
  if (megabytes >= 1) {
    return `${megabytes.toLocaleString(locale, { maximumFractionDigits: 1 })} ${units.mb}`;
  }
  return `${Math.max(1, Math.round(bytes / 1024))} ${units.kb}`;
}

export function readFileFacts(file: DownloadFile): FileFacts | null {
  if (!file.href.startsWith('/')) return null;
  const localPath = join(process.cwd(), 'public', file.href);
  if (!existsSync(localPath)) {
    if (!reportedMissing.has(file.name)) {
      reportedMissing.add(file.name);
      console.warn(`[downloads] missing public${file.href}: size and SHA-256 omitted`);
    }
    return null;
  }
  const bytes = readFileSync(localPath);
  return {
    bytes: bytes.byteLength,
    sha256: createHash('sha256').update(bytes).digest('hex'),
  };
}
