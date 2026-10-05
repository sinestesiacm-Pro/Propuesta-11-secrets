import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUTPUT_DIR = path.resolve("./exports/slides-tiktok");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const slides = [
  { index: 0, file: "01-couverture-renaissance-automne.png" },
  { index: 1, file: "02-diagnostic-climat-suisse.png" },
  { index: 2, file: "03-head-spa-japonais-detox.png" },
  { index: 3, file: "04-soin-botox-lissage-tanin.png" },
  { index: 4, file: "05-manucure-russe-precision.png" },
  { index: 5, file: "06-reservation-vip-renens.png" },
];

console.log("🎨 Génération des 6 slides TikTok en 1080x1920 avec Google Chrome...");

for (const s of slides) {
  const url = `http://localhost:8088/slides-tiktok.html?slide=${s.index}&export=1`;
  const outPath = path.join(OUTPUT_DIR, s.file);
  console.log(`📸 Capture de la slide ${s.index + 1}/6 -> ${s.file}...`);
  
  const cmd = `"${CHROME_PATH}" --headless --disable-gpu --window-size=1080,1920 --hide-scrollbars --screenshot="${outPath}" "${url}"`;
  try {
    execSync(cmd, { stdio: 'ignore' });
  } catch (err) {
    console.error(`Erreur sur slide ${s.index + 1}:`, err.message);
  }
}

console.log("✅ Toutes les slides ont été générées avec succès dans exports/slides-tiktok/ !");

// Create ZIP file
try {
  console.log("📦 Création de l'archive ZIP...");
  execSync(`cd "${OUTPUT_DIR}" && zip -r -X "../../slides-tiktok-2026.zip" *.png`, { stdio: 'inherit' });
  console.log("🎉 Archive créée : slides-tiktok-2026.zip à la racine du projet !");
} catch (err) {
  console.error("Erreur lors du zip:", err.message);
}
