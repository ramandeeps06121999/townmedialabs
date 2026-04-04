import type { MetadataRoute } from "next";
import { allServiceSlugs } from "@/data/servicePages";
import { allChandigarhSlugs } from "@/data/chandigarhServices";
import { getAllLocationServiceDefs } from "@/data/locations";
import { blogArticles } from "@/data/blogArticles";
import { allIndustrySlugs, allIndustryPageSlugs } from "@/data/industries";
import { allToolSlugs } from "@/data/freeTools";
import { allCaseStudySlugs } from "@/data/caseStudies";
import { shouldNoindex } from "@/utils/noindex";

/* ------------------------------------------------------------------ */
/*  Next.js App Router multiple-sitemap support via generateSitemaps  */
/* ------------------------------------------------------------------ */

const SITEMAP_IDS = [
  { id: 0 }, // pages   – core static pages
  { id: 1 }, // services – generic service pages + Chandigarh
  { id: 2 }, // locations – all location-service pages
  { id: 3 }, // blog
  { id: 4 }, // industries
  { id: 5 }, // tools-and-cases – free tools + case studies + location hubs
] as const;

/**
 * Tells Next.js how many sub-sitemaps to generate.
 * The framework creates /sitemap.xml (index) pointing to
 * /sitemap/0.xml … /sitemap/5.xml
 */
export async function generateSitemaps() {
  return [...SITEMAP_IDS];
}

const baseUrl = "https://townmedialabs.ca";

/* ------------------------------------------------------------------ */
/*  Builders for each content type                                    */
/* ------------------------------------------------------------------ */

function buildPages(): MetadataRoute.Sitemap {
  return [
    { url: baseUrl, lastModified: new Date("2026-03-25"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-01-15"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/careers`, lastModified: new Date("2026-03-10"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date("2026-03-25"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/digital-marketing-agency-chandigarh`, lastModified: new Date("2026-03-15"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date("2025-06-01"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date("2025-06-01"), changeFrequency: "yearly", priority: 0.2 },
  ];
}

function buildServices(): MetadataRoute.Sitemap {
  const serviceEntries: MetadataRoute.Sitemap = allServiceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date("2026-03-20"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const chandigarhEntries: MetadataRoute.Sitemap = allChandigarhSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date("2026-03-15"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...serviceEntries, ...chandigarhEntries];
}

function buildLocations(): MetadataRoute.Sitemap {
  const chandigarhSlugSet = new Set(allChandigarhSlugs);

  return getAllLocationServiceDefs()
    .filter((def) => !chandigarhSlugSet.has(def.urlSlug))
    .filter((def) => !shouldNoindex(def.serviceSlug, def.locationSlug))
    .map((def) => ({
      url: `${baseUrl}/services/${def.urlSlug}`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
}

function buildBlog(): MetadataRoute.Sitemap {
  return Object.entries(blogArticles).map(([slug, article]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(article.date || "2026-03-20"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
}

function buildIndustries(): MetadataRoute.Sitemap {
  const indexEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const industryEntries: MetadataRoute.Sitemap = allIndustrySlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date("2026-03-20"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const tier1Entries: MetadataRoute.Sitemap = allIndustryPageSlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date("2026-03-20"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...indexEntry, ...industryEntries, ...tier1Entries];
}

function buildToolsAndCases(): MetadataRoute.Sitemap {
  const locationHubEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...["canada", "united-states", "united-kingdom", "australia", "new-zealand", "india", "uae"].map(
      (country) => ({
        url: `${baseUrl}/locations/${country}`,
        lastModified: new Date("2026-03-20"),
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })
    ),
  ];

  const freeToolEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/free-tools`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    ...allToolSlugs.map((slug) => ({
      url: `${baseUrl}/free-tools/${slug}`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];

  const caseStudyEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...allCaseStudySlugs.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...locationHubEntries, ...freeToolEntries, ...caseStudyEntries];
}

/* ------------------------------------------------------------------ */
/*  Main sitemap function — receives { id } from generateSitemaps     */
/* ------------------------------------------------------------------ */

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  switch (id) {
    case 0:
      return buildPages();
    case 1:
      return buildServices();
    case 2:
      return buildLocations();
    case 3:
      return buildBlog();
    case 4:
      return buildIndustries();
    case 5:
      return buildToolsAndCases();
    default:
      return [];
  }
}
