#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Usage: node scripts/generate-profile-images.js <source-image-path>
// Example: node scripts/generate-profile-images.js ./my-photo.jpg

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Please provide a source image path.');
  process.exit(1);
}

const src = args[0];
const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(src)) {
  console.error('Source image not found:', src);
  process.exit(1);
}

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

async function generate() {
  try {
    // Generate multiple sizes with explicit names to avoid duplicate suffixes
    const variants = [
      { name: 'profile', size: 280 },
      { name: 'profile@2x', size: 560 },
      { name: 'profile-lg', size: 360 },
      { name: 'profile-lg@2x', size: 720 },
    ];

    for (const v of variants) {
      const outWebp = path.join(outDir, `${v.name}.webp`);
      const outJpg = path.join(outDir, `${v.name}.jpg`);

      // Use attention-based crop to focus on the subject's face/important regions
      await sharp(src)
        .resize(v.size, v.size, { fit: 'cover', position: 'attention' })
        .webp({ quality: 85 })
        .toFile(outWebp);

      await sharp(src)
        .resize(v.size, v.size, { fit: 'cover', position: 'attention' })
        .jpeg({ quality: 85 })
        .toFile(outJpg);
    }

    // Create circular variants (webp + png) for the larger size (360 and 720)
    const circleSizes = [360, 720];
    for (const size of circleSizes) {
      const outCircleWebp = path.join(outDir, size === 360 ? 'profile-circle.webp' : 'profile-circle@2x.webp');
      const outCirclePng = path.join(outDir, size === 360 ? 'profile-circle.png' : 'profile-circle@2x.png');

      const svg = `<svg width="${size}" height="${size}"><rect x="0" y="0" width="${size}" height="${size}" rx="${size}" ry="${size}"/></svg>`;

      const buffer = await sharp(src)
        .resize(size, size, { fit: 'cover', position: 'attention' })
        .toBuffer();

      // Apply circular mask via SVG composite
      await sharp(buffer)
        .composite([{ input: Buffer.from(svg), blend: 'dest-in' }])
        .webp({ quality: 90 })
        .toFile(outCircleWebp);

      await sharp(buffer)
        .composite([{ input: Buffer.from(svg), blend: 'dest-in' }])
        .png({ quality: 90 })
        .toFile(outCirclePng);
    }

    console.log('Generated responsive and circular profile images in public/');
  } catch (err) {
    console.error('Error generating images:', err);
    process.exit(1);
  }
}

generate();
