#!/usr/bin/env node
/*
  Witkowski Design · image optimiser (runs automatically on GitHub before publishing)

  Makes every photo in projects/ and assets/img/ web-ready, so you can upload
  full-size photos straight from a camera or a render:
  - turns photos the right way up (phone/camera rotation),
  - shrinks anything wider or taller than 2400 px,
  - compresses JPG / PNG / WebP while keeping the same file name.

  Your original files in the repository are never changed; only the published
  copy is optimised. To run it yourself: npm install sharp, then node tools/optimize-images.js
*/
"use strict";
const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch (e) {
  console.warn("optimize-images: sharp is not installed, images are published as they are.");
  process.exit(0);
}

const ROOT = path.join(__dirname, "..");
const DIRS = ["projects", "assets/img"];
const MAX = 2400;
const SKIP = new Set(["og-image.jpg", "apple-touch-icon.png"]);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : [p];
  });
}

(async () => {
  let done = 0, saved = 0;
  for (const file of DIRS.flatMap((d) => walk(path.join(ROOT, d)))) {
    const ext = path.extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext) || SKIP.has(path.basename(file))) continue;
    try {
      const before = fs.statSync(file).size;
      const input = fs.readFileSync(file);
      const meta = await sharp(input).metadata();
      let pipeline = sharp(input).rotate();
      if (Math.max(meta.width || 0, meta.height || 0) > MAX) {
        pipeline = pipeline.resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true });
      }
      if (ext === ".png") pipeline = pipeline.png({ compressionLevel: 9, effort: 8 });
      else if (ext === ".webp") pipeline = pipeline.webp({ quality: 80 });
      else pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true, progressive: true });
      const out = await pipeline.toBuffer();
      // keep the original if it was already smaller and did not need resizing or rotating
      if (out.length < before || Math.max(meta.width || 0, meta.height || 0) > MAX || (meta.orientation || 1) > 1) {
        fs.writeFileSync(file, out);
        saved += before - out.length;
        done++;
      }
    } catch (err) {
      console.warn(`optimize-images: skipped ${path.relative(ROOT, file)} (${err.message})`);
    }
  }
  console.log(`optimize-images: ${done} images optimised, ${(saved / 1e6).toFixed(1)} MB saved.`);
})();
