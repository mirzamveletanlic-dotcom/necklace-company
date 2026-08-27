#!/usr/bin/env node

import {
  mkdirSync,
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

/** @type {Array<{ slot: string; query: string; file: string; width: number; height: number; orientation: "portrait" | "landscape"; cropPosition?: string }>} */
const slots = [
  {
    slot: "hero",
    query: "gold necklace minimal negative space top",
    file: "hero",
    width: 2400,
    height: 1400,
    orientation: "landscape",
    cropPosition: "bottom",
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
    query: "chunky gold chain necklace flat lay",
    file: "ballast",
    width: 800,
    height: 1000,
    orientation: "portrait",
  },
  {
    slot: "display",
    query: "jewellery workbench tools hands",
    file: "display",
    width: 2400,
    height: 1350,
    orientation: "landscape",
  },
  {
    slot: "studio",
    query: "jewellery workbench tools hands",
    file: "studio",
    width: 1500,
    height: 1000,
    orientation: "landscape",
  },
  {
    slot: "materials",
    query: "gold chain sterling wire jewellery materials",
    file: "materials",
    width: 1500,
    height: 1000,
    orientation: "landscape",
  },
  {
    slot: "newsletter",
    query: "gold jewellery flat lay work surface",
    file: "newsletter",
    width: 2400,
    height: 1400,
    orientation: "landscape",
  },
];

/** Curated Pexels fallbacks when no API key is set. */
const fallbackBySlot = {
  hero: {
    source: "Pexels",
    downloadUrl:
      "https://images.pexels.com/photos/9634289/pexels-photo-9634289.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2400",
    photographer: "Nati",
    url: "https://www.pexels.com/photo/gold-chain-necklace-on-brown-wooden-table-9634289/",
  },
  bight: {
    source: "Pexels",
    downloadUrl:
      "https://images.pexels.com/photos/9634289/pexels-photo-9634289.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000",
    photographer: "Nati",
    url: "https://www.pexels.com/photo/gold-chain-necklace-on-brown-wooden-table-9634289/",
  },
  lakeshore: {
    source: "Pexels",
    downloadUrl:
      "https://images.pexels.com/photos/32793758/pexels-photo-32793758.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000",
    photographer: "NUDE Nahum",
    url: "https://www.pexels.com/photo/elegant-jewelry-and-perfume-flat-lay-on-satin-32793758/",
  },
  keel: {
    source: "Pexels",
    downloadUrl:
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000",
    photographer: "Burst",
    url: "https://www.pexels.com/photo/silver-necklace-on-white-surface-1191531/",
  },
  tender: {
    source: "Pexels",
    downloadUrl:
      "https://images.pexels.com/photos/4532678/pexels-photo-4532678.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000",
    photographer: "Svetlana B",
    url: "https://www.pexels.com/photo/a-close-up-shot-of-a-pearl-necklace-4532678/",
  },
  leeward: {
    source: "Pexels",
    downloadUrl:
      "https://images.pexels.com/photos/29502496/pexels-photo-29502496.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000",
    photographer: "Yusuf Çelik",
    url: "https://www.pexels.com/photo/elegant-gold-jewelry-collection-in-flat-lay-29502496/",
  },
  ballast: {
    source: "Pexels",
    downloadUrl:
      "https://images.pexels.com/photos/9634289/pexels-photo-9634289.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000",
    photographer: "Nati",
    url: "https://www.pexels.com/photo/gold-chain-necklace-on-brown-wooden-table-9634289/",
  },
  display: {
    source: "Pexels",
    downloadUrl:
      "https://images.pexels.com/photos/4354587/pexels-photo-4354587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2400",
    photographer: "Maksim Goncharenok",
    url: "https://www.pexels.com/photo/hands-of-a-person-holding-a-round-object-and-a-silver-tool-4354587/",
  },
  studio: {
    source: "Pexels",
    downloadUrl:
      "https://images.pexels.com/photos/4354587/pexels-photo-4354587.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000",
    photographer: "Maksim Goncharenok",
    url: "https://www.pexels.com/photo/hands-of-a-person-holding-a-round-object-and-a-silver-tool-4354587/",
  },
  materials: {
    source: "Pexels",
    downloadUrl:
      "https://images.pexels.com/photos/29502496/pexels-photo-29502496.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2000",
    photographer: "Yusuf Çelik",
    url: "https://www.pexels.com/photo/elegant-gold-jewelry-collection-in-flat-lay-29502496/",
  },
  newsletter: {
    source: "Pexels",
    downloadUrl:
      "https://images.pexels.com/photos/29502496/pexels-photo-29502496.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=2400",
    photographer: "Yusuf Çelik",
    url: "https://www.pexels.com/photo/elegant-gold-jewelry-collection-in-flat-lay-29502496/",
  },
};

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
  return {
    source: "Pexels",
    downloadUrl: photo.src.large2x,
    photographer: photo.photographer,
    url: photo.url,
  };
}

async function resolveSource(slot) {
  if (apiKey) {
    try {
      return await searchPexels(slot.query, slot.orientation);
    } catch (error) {
      console.warn(`  API search failed for ${slot.slot}, using fallback:`, error.message);
    }
  }

  const fallback = fallbackBySlot[slot.slot];
  if (!fallback) {
    throw new Error(`No fallback configured for slot "${slot.slot}"`);
  }
  return fallback;
}

async function downloadBuffer(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
    },
  });
  if (!response.ok) {
    throw new Error(`Download failed: ${response.status} ${response.statusText}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

async function processSlot(slot, jpgQuality) {
  console.log(`Fetching ${slot.slot}: "${slot.query}"…`);
  const source = await resolveSource(slot);
  const buffer = await downloadBuffer(source.downloadUrl);

  const processed = sharp(buffer).resize({
    width: slot.width,
    height: slot.height,
    fit: "cover",
    position: slot.cropPosition ?? "attention",
  });

  const jpgPath = join(imagesDir, `${slot.file}.jpg`);
  const webpPath = join(imagesDir, `${slot.file}.webp`);

  await processed.clone().jpeg({ quality: jpgQuality, mozjpeg: true }).toFile(jpgPath);
  await processed.clone().webp({ quality: 80 }).toFile(webpPath);

  console.log(`  → ${slot.file}.jpg, ${slot.file}.webp (${source.source})`);

  return {
    slot: slot.slot,
    source: source.source,
    photographer: source.photographer,
    url: source.url,
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
  mkdirSync(imagesDir, { recursive: true });

  if (!apiKey) {
    console.log("No PEXELS_API_KEY — using curated Pexels fallbacks.\n");
  }

  let jpgQuality = 82;
  const credits = [];

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

| Slot | Source | Photographer | URL |
| --- | --- | --- | --- |
${credits
  .map(
    (entry) =>
      `| ${entry.slot} | ${entry.source} | ${entry.photographer} | ${entry.url} |`,
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
