import type { MetadataRoute } from "next";
import { allServiceSlugs } from "@/data/servicePages";
import { allChandigarhSlugs } from "@/data/chandigarhServices";
import { getAllLocationServiceDefs } from "@/data/locations";
import { blogArticles } from "@/data/blogArticles";
import { allIndustrySlugs, allIndustryPageSlugs } from "@/data/industries";
import { allToolSlugs } from "@/data/freeTools";
import { allCaseStudySlugs } from "@/data/caseStudies";
import { shouldNoindex } from "@/utils/noindex";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://townmedialabs.com";

  // Collect Chandigarh slugs for deduplication
  const chandigarhSlugSet = new Set(allChandigarhSlugs);

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date("2026-03-25"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-01-15"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/careers`, lastModified: new Date("2026-03-10"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date("2026-03-25"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/digital-marketing-agency-chandigarh`, lastModified: new Date("2026-03-15"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date("2025-06-01"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date("2025-06-01"), changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePageEntries: MetadataRoute.Sitemap = allServiceSlugs.map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const chandigarhPageEntries: MetadataRoute.Sitemap = allChandigarhSlugs.map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })
  );

  // Filter out Chandigarh slugs (to avoid duplicates) and noindexed pages (to save crawl budget)
  const locationPageEntries: MetadataRoute.Sitemap = getAllLocationServiceDefs()
    .filter((def) => !chandigarhSlugSet.has(def.urlSlug))
    .filter((def) => !shouldNoindex(def.serviceSlug, def.locationSlug))
    .map((def) => ({
      url: `${baseUrl}/services/${def.urlSlug}`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    }));

  const blogPageEntries: MetadataRoute.Sitemap = Object.entries(blogArticles).map(
    ([slug, article]) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(article.date || "2026-03-20"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  const industryIndexEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const industryPageEntries: MetadataRoute.Sitemap = allIndustrySlugs.map(
    (slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  const tier1IndustryPageEntries: MetadataRoute.Sitemap = allIndustryPageSlugs.map(
    (slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

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

  const freeToolsIndexEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/free-tools`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  const freeToolPageEntries: MetadataRoute.Sitemap = allToolSlugs.map(
    (slug) => ({
      url: `${baseUrl}/free-tools/${slug}`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })
  );

  const caseStudiesIndexEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  const caseStudyPageEntries: MetadataRoute.Sitemap = allCaseStudySlugs.map(
    (slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  return [...staticPages, ...servicePageEntries, ...chandigarhPageEntries, ...locationPageEntries, ...blogPageEntries, ...industryIndexEntry, ...industryPageEntries, ...tier1IndustryPageEntries, ...freeToolsIndexEntry, ...freeToolPageEntries, ...caseStudiesIndexEntry, ...caseStudyPageEntries, ...locationHubEntries];
}
