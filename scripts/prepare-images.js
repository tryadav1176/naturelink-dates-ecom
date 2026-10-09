import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicImagesDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
}

// Ensure hero exists
const heroPath = path.join(publicImagesDir, 'hero.jpg');
const medjoolPath = path.join(publicImagesDir, 'medjool-jumbo.jpg');
const royalPath = path.join(publicImagesDir, 'royal-gift-box.jpg');

const productIds = [
  'medjool-jumbo',
  'ajwa-madinah',
  'khalas',
  'sukkari',
  'safawi',
  'mabroom',
  'deglet-noor',
  'almond-stuffed-medjool',
  'royal-gift-box',
  'pure-date-syrup',
  'date-paste'
];

productIds.forEach((id) => {
  const file = path.join(publicImagesDir, `${id}.jpg`);
  if (!fs.existsSync(file)) {
    if (id.includes('gift') && fs.existsSync(royalPath)) {
      fs.copyFileSync(royalPath, file);
    } else if (fs.existsSync(medjoolPath)) {
      fs.copyFileSync(medjoolPath, file);
    } else if (fs.existsSync(heroPath)) {
      fs.copyFileSync(heroPath, file);
    }
  }
});

console.log('Image setup complete!');

