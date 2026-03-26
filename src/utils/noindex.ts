import { locations, type LocationInfo } from "@/data/locations";

/**
 * Determines whether a service x location page should be noindexed.
 *
 * Logic (conservative — when in doubt, keep indexed):
 *
 * 1. ALL Indian city pages are always indexed, regardless of service.
 * 2. Core services are always indexed for ALL cities worldwide:
 *    seo, google-ads, website-development, social-media,
 *    branding, lead-generation
 * 3. Niche services paired with non-Indian cities are noindexed:
 *    music-release, ai-influencer-management, branding-packaging, video-editing
 * 4. Everything else stays indexed (e.g. graphic-design worldwide).
 */

// Services that have strong search demand globally — always index
const CORE_SERVICES = new Set([
  "seo",
  "google-ads",
  "website-development",
  "social-media",
  "branding",
  "lead-generation",
  "graphic-design",
]);

// Services with very niche demand — noindex outside India
const NICHE_SERVICES = new Set([
  "music-release",
  "ai-influencer-management",
  "branding-packaging",
  "video-editing",
]);

/**
 * Returns true if the page should have robots noindex.
 * @param serviceSlug - e.g. "music-release", "seo"
 * @param locationSlug - e.g. "london", "delhi" (key in the locations record)
 */
export function shouldNoindex(serviceSlug: string, locationSlug: string): boolean {
  const location: LocationInfo | undefined = locations[locationSlug];

  // If we can't find the location, be safe and keep indexed
  if (!location) return false;

  // Rule 1: ALL Indian city pages stay indexed regardless of service
  if (location.country === "India") return false;

  // Rule 2: Core services stay indexed worldwide
  if (CORE_SERVICES.has(serviceSlug)) return false;

  // Rule 3: Niche services + non-India cities → noindex
  if (NICHE_SERVICES.has(serviceSlug)) return true;

  // Default: keep indexed (conservative)
  return false;
}
