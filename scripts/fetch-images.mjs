#!/usr/bin/env node

import {
  mkdir,
  readFileSync,
  readdirSync,
  renameSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const imagesDir = join(root, "public", "images");

function loadEnv() {
  try {
    const envPath = join(root, ".env");
    const content = readFileSync(envPath, "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // .env is optional if PEXELS_API_KEY is already in the environment
  }
}

loadEnv();

const apiKey = process.env.PEXELS_API_KEY;
if (!apiKey) {
  console.error(
    "Missing PEXELS_API_KEY. Add it to .env in the project root and re-run.",
  );
  process.exit(1);
}

/** @type {Array<{ slot: string; query: string; file: string; width: number; height: number; orientation: "portrait" | "landscape" }>} */
const slots = [
  {
    slot: "hero",
    query: "gold necklace on neutral background",
    file: "hero",
    width: 1000,
    height: 1250,
    orientation: "portrait",
  },
  {
    slot: "bight",
    query: "thin gold chain necklace flat lay",
    file: "bight",
    width: 800,
    height: 1000,
    orientation: "portrait",
  },
  {
    slot: "lakeshore",
    query: "delicate gold chain necklace",
    file: "lakeshore",
    width: 800,
    height: 1000,
    orientation: "portrait",
  },
  {
    slot: "keel",
    query: "silver bar pendant necklace",
    file: "keel",
    width: 800,
    height: 1000,
    orientation: "portrait",
  },
  {
    slot: "tender",
    query: "pearl pendant necklace",
    file: "tender",
    width: 800,
    height: 1000,
    orientation: "portrait",
  },
  {
    slot: "leeward",
    query: "layered necklaces gold silver",
    file: "leeward",
    width: 800,
    height: 1000,
    orientation: "portrait",
  },
  {
    slot: "ballast",
    query: "chunky gold chain necklace",
    file: "ballast",
    width: 800,
    height: 1000,
    orientation: "portrait",
  },
  {
    slot: "studio",
    query: "jewellery workbench tools hands",
    file: "studio",
    width: 1500,
    height: 1000,
    orientation: "landscape",
  },
];

async function searchPexels(query, orientation) {
  const params = new URLSearchParams({
    query,
    orientation,
    per_page: "15",
    size: "large",
  });
  const response = await fetch(
    `https://api.pexels.com/v1/search?${params.toString()}`,
    {
      headers: { Authorization: apiKey },
    },
  );
  if (!response.ok) {
    throw new Error(
      `Pexels search failed for "${query}": ${response.status} ${response.statusText}`,
    );
  }
  const data = await response.json();
  const photo = data.photos?.[0];
  if (!photo?.src?.large2x) {
    throw new Error(`No Pexels results for "${query}"`);
  }
  return photo;
}

async function downloadBuffer(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Download failed: ${response.status} ${response.statusText}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function processSlot(slot, jpgQuality) {
  console.log(`Fetching ${slot.slot}: "${slot.query}"…`);
  const photo = await searchPexels(slot.query, slot.orientation);
  const source = await downloadBuffer(photo.src.large2x);

  const processed = sharp(source).resize({
    width: slot.width,
    height: slot.height,
    fit: "cover",
    position: "attention",
  });

  const jpgPath = join(imagesDir, `${slot.file}.jpg`);
  const webpPath = join(imagesDir, `${slot.file}.webp`);

  await processed.clone().jpeg({ quality: jpgQuality, mozjpeg: true }).toFile(jpgPath);
  await processed.clone().webp({ quality: 80 }).toFile(webpPath);

  console.log(`  → ${slot.file}.jpg, ${slot.file}.webp`);

  return {
    slot: slot.slot,
    photographer: photo.photographer,
    url: photo.url,
    file: slot.file,
  };
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function totalImageBytes() {
  const files = readdirSync(imagesDir).filter((name) =>
    /\.(jpg|webp)$/i.test(name),
  );
  return files.reduce(
    (sum, name) => sum + statSync(join(imagesDir, name)).size,
    0,
  );
}

async function main() {
  mkdir(imagesDir, { recursive: true });

  let jpgQuality = 82;
  let credits = [];

  for (const slot of slots) {
    credits.push(await processSlot(slot, jpgQuality));
  }

  let totalBytes = totalImageBytes();
  console.log(`\nTotal image payload: ${formatBytes(totalBytes)}`);

  if (totalBytes > 1.8 * 1024 * 1024) {
    console.log("Over 1.8MB — re-exporting JPGs at quality 75…");
    jpgQuality = 75;
    for (const slot of slots) {
      const jpgPath = join(imagesDir, `${slot.file}.jpg`);
      const tempPath = `${jpgPath}.tmp`;
      await sharp(jpgPath)
        .jpeg({ quality: jpgQuality, mozjpeg: true })
        .toFile(tempPath);
      renameSync(tempPath, jpgPath);
    }
    totalBytes = totalImageBytes();
    console.log(`Total image payload after re-export: ${formatBytes(totalBytes)}`);
  }

  const creditsMd = `# Image credits

Placeholder photography for development only. Source: [Pexels](https://www.pexels.com).

| Slot | Photographer | Pexels URL |
| --- | --- | --- |
${credits
  .map(
    (entry) =>
      `| ${entry.slot} | ${entry.photographer} | ${entry.url} |`,
  )
  .join("\n")}
`;

  writeFileSync(join(root, "CREDITS.md"), creditsMd, "utf8");
  console.log("\nWrote CREDITS.md");
  console.log(`Final payload (${jpgQuality} JPG quality): ${formatBytes(totalBytes)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
