// Generates public/og.png (1200×630) from an SVG composition. Run: npm run og
import sharp from 'sharp';

const e = 'M71 49c10 1 20 0 30-2 1-10-7-17-16-17-10 0-17 9-17 19s7 18 17 18c6 0 11-3 14-7';
const wordmark = `
  <g fill="none" stroke="#1a1620" stroke-width="13" stroke-linecap="round" stroke-linejoin="round">
    <path d="M33 15c-3-6-15-8-17 3-1 5-1 22-1 48"/><path d="M5 35c8-1 17-2 26-2"/>
    <path d="M44 34c0 11 1 22 0 32"/><path d="M45 46c3-9 10-14 19-12"/>
    <path d="${e}"/><path transform="translate(38 1) rotate(-3 85 49)" d="${e}"/>
    <path d="M146 34c9 0 18-1 26-1-8 11-17 22-26 32 10 0 19 0 28-1"/>
    <path transform="translate(113 0) rotate(2 85 49)" d="${e}"/>
  </g>
  <circle cx="227" cy="63" r="6.5" fill="#947eb0"/>`;

const knob = (cx, cy, v) => {
  const r = 30;
  const c = 2 * Math.PI * r;
  const s = c * 0.75;
  return `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#3a3442" stroke-width="6" stroke-linecap="round" stroke-dasharray="${s} ${c}" transform="rotate(135 ${cx} ${cy})"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#947eb0" stroke-width="6" stroke-linecap="round" stroke-dasharray="${s * v} ${c}" transform="rotate(135 ${cx} ${cy})"/>`;
};

let wave = '';
for (let i = 0; i <= 200; i++) {
  const t = i / 200;
  const env = Math.sin(Math.PI * t) ** 0.6;
  const y = Math.sin(t * 38) * 0.55 + Math.sin(t * 91 + 1.3) * 0.28 + Math.sin(t * 7.5 + 0.4) * 0.17;
  wave += `${i ? 'L' : 'M'}${(724 + t * 372).toFixed(1)},${(372 - y * env * 34).toFixed(1)}`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#f6f5fa"/>
  <g transform="translate(72 64) scale(1.3)">${wordmark}</g>
  <text x="72" y="270" font-family="Avenir Next, Helvetica Neue, sans-serif" font-size="64" font-weight="600" letter-spacing="-2.5" fill="#1a1620">Rejouez le passé</text>
  <text x="72" y="342" font-family="Avenir Next, Helvetica Neue, sans-serif" font-size="64" font-weight="600" letter-spacing="-2.5" fill="#1a1620">de votre son.</text>
  <text x="72" y="410" font-family="Avenir Next, Helvetica Neue, sans-serif" font-size="24" font-weight="500" fill="#4a4254">Audio Unit · macOS 12+ · Apple Silicon &amp; Intel</text>

  <rect x="680" y="96" width="456" height="340" rx="20" fill="#1e1a24"/>
  <text x="708" y="146" font-family="Avenir Next Condensed, Avenir Next, sans-serif" font-size="30" font-weight="800" fill="#f6f5fa">FREEZE</text>
  ${['REV', 'FRZ', 'STR', 'TAPE', 'GRN'].map((m, i) => `
    <rect x="${708 + i * 82}" y="168" width="74" height="30" rx="7" fill="${i === 1 ? '#3a3050' : '#2a2530'}" stroke="${i === 1 ? '#947eb0' : '#3a3442'}"/>
    <text x="${745 + i * 82}" y="188" text-anchor="middle" font-family="Avenir Next, sans-serif" font-size="12" font-weight="700" fill="${i === 1 ? '#b7a6cc' : '#c9c3d3'}">${m}</text>`).join('')}
  ${knob(760, 262, 0.2)}${knob(868, 262, 0.5)}${knob(976, 262, 0.37)}${knob(1084, 262, 0.6)}
  <rect x="708" y="320" width="400" height="96" rx="10" fill="#2a2530"/>
  <path d="${wave}" fill="none" stroke="#a9d2d5" stroke-width="2"/>

  <rect y="506" width="1200" height="124" fill="#a9d2d5"/>
  <text x="-20" y="598" font-family="Avenir Next, Helvetica Neue, sans-serif" font-size="84" font-weight="600" letter-spacing="-4" fill="#1a1620">REVERSE • FREEZE • STRETCH • TAPE • GRAIN</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log('OK: public/og.png');
