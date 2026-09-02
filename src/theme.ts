import { Easing } from 'remotion';
import { loadFont as loadAlluraFont } from '@remotion/google-fonts/Allura';
import { loadFont as loadCormorantFont } from '@remotion/google-fonts/CormorantGaramond';
import { loadFont as loadInterFont } from '@remotion/google-fonts/Inter';

const allura = loadAlluraFont('normal', { subsets: ['latin', 'latin-ext'] });
const cormorant = loadCormorantFont('normal', {
  subsets: ['latin', 'latin-ext'],
  weights: ['300', '400', '500', '600', '700'],
});
const inter = loadInterFont('normal', {
  subsets: ['latin', 'latin-ext'],
  weights: ['300', '400', '500', '600', '700'],
});

export const palette = {
  ivory: '#F4EFE6',
  warmBeige: '#E6DCC9',
  softBeige: '#EDE6D7',
  oliveGreen: '#6F765C',
  grayGreen: '#5A6450',
  charcoal: '#232220',
  ink: '#2C2A26',
  champagne: '#C2A368',
  champagneSoft: '#D2B681',
  muted: '#9A9684',
};

export const fonts = {
  signature: allura.fontFamily,
  serif: cormorant.fontFamily,
  sans: inter.fontFamily,
};

export const VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 2250,
};

export const VIDEO_9x16 = {
  width: 1080,
  height: 1920,
  fps: 30,
  durationInFrames: 2250,
};

export const SCENES = {
  intro: { from: 0, durationInFrames: 150 },
  identity: { from: 150, durationInFrames: 300 },
  problem: { from: 450, durationInFrames: 300 },
  ecosystem: { from: 750, durationInFrames: 450 },
  clients: { from: 1200, durationInFrames: 360 },
  journey: { from: 1560, durationInFrames: 390 },
  conclusion: { from: 1950, durationInFrames: 300 },
};

export const ease = {
  out: Easing.bezier(0.22, 1, 0.36, 1),
  inOut: Easing.bezier(0.65, 0, 0.35, 1),
  outQuint: Easing.bezier(0, 0.55, 0.2, 1),
  inOutCubic: Easing.bezier(0.45, 0, 0.55, 1),
};

export const clamp = {
  extrapolateLeft: 'clamp' as const,
  extrapolateRight: 'clamp' as const,
};
