#!/usr/bin/env node

/**
 * Script to add robots: { index: false, follow: true } to the metadata export
 * of low-value service x location page.tsx files.
 *
 * Run: node scripts/add-noindex-to-pages.mjs
 *
 * This is the belt-and-suspenders complement to the runtime <meta> tag added
 * in LocationServiceTemplate.tsx. Both approaches are needed:
 *   - The metadata export ensures Next.js SSR includes the noindex in <head>
 *   - The runtime <meta> tag is the fallback for any edge cases
 *
 * Logic:
 *   - Niche services (music-release, ai-influencer-management, branding-packaging,
 *     video-editing) paired with non-India cities get noindexed
 *   - ALL India city pages stay indexed
 *   - Core services stay indexed worldwide
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, "..");
const SERVICES_DIR = join(PROJECT_ROOT, "src/app/services");

// ---- Parse locations for country info ----
const locContent = readFileSync(
  join(PROJECT_ROOT, "src/data/locations.ts"),
  "utf-8"
);

const locationCountries = {};
let currentKey = null;
for (const line of locContent.split("\n")) {
  const keyMatch = line.match(/^\s+(\w+):\s*\{/);
  if (keyMatch) currentKey = keyMatch[1];
  if (currentKey) {
    const countryMatch = line.match(/country:\s*"([^"]+)"/);
    if (countryMatch) locationCountries[currentKey] = countryMatch[1];
  }
  if (currentKey && /^\s+\},?\s*$/.test(line)) currentKey = null;
}

console.log(`Parsed ${Object.keys(locationCountries).length} locations`);

// ---- Noindex logic ----
const NICHE_SERVICES = new Set([
  "music-release",
  "ai-influencer-management",
  "branding-packaging",
  "video-editing",
]);

function shouldNoindex(serviceSlug, locationKey) {
  const country = locationCountries[locationKey];
  if (!country) return false;
  if (country === "India") return false;
  if (!NICHE_SERVICES.has(serviceSlug)) return false;
  return true;
}

// ---- Known service prefixes (longest first for matching) ----
const KNOWN_SERVICES = [
  "ai-influencer-management",
  "social-media-marketing",
  "website-development",
  "branding-packaging",
  "lead-generation",
  "music-release",
  "video-editing",
  "graphic-design",
  "google-ads",
  "branding",
  "seo",
];

// ---- Process files ----
const dirs = readdirSync(SERVICES_DIR);
let modified = 0;
let skipped = 0;
let alreadyDone = 0;
let errors = 0;

for (const dir of dirs) {
  if (!dir.includes("-in-")) continue;

  const dirPath = join(SERVICES_DIR, dir);
  try {
    if (!statSync(dirPath).isDirectory()) continue;
  } catch {
    continue;
  }

  // Parse service slug from directory name
  let serviceSlug = null;
  for (const svc of KNOWN_SERVICES) {
    if (dir.startsWith(svc + "-in-")) {
      serviceSlug = svc;
      break;
    }
  }
  if (!serviceSlug) continue;

  const pagePath = join(dirPath, "page.tsx");
  let content;
  try {
    content = readFileSync(pagePath, "utf-8");
  } catch {
    continue;
  }

  // Extract location key from page content
  const locMatch = content.match(/locations\["([^"]+)"\]/);
  if (!locMatch) {
    skipped++;
    continue;
  }

  const locationKey = locMatch[1];

  if (!shouldNoindex(serviceSlug, locationKey)) {
    skipped++;
    continue;
  }

  // Check if already has robots in metadata
  if (content.includes("robots:")) {
    alreadyDone++;
    continue;
  }

  // Add robots: { index: false, follow: true } after the metadata opening
  const pattern = /export const metadata: Metadata = \{/;
  if (!pattern.test(content)) {
    console.warn(`WARNING: No metadata pattern found in ${pagePath}`);
    errors++;
    continue;
  }

  const newContent = content.replace(
    pattern,
    `export const metadata: Metadata = {\n  robots: { index: false, follow: true },`
  );

  writeFileSync(pagePath, newContent, "utf-8");
  modified++;
}

console.log(`\nResults:`);
console.log(`  Modified (noindex added): ${modified}`);
console.log(`  Skipped (should stay indexed): ${skipped}`);
console.log(`  Already had robots: ${alreadyDone}`);
console.log(`  Errors: ${errors}`);
console.log(`\nDone!`);
