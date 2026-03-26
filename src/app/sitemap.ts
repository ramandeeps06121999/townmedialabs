import type { MetadataRoute } from "next";
import { allServiceSlugs } from "@/data/servicePages";
import { allChandigarhSlugs } from "@/data/chandigarhServices";
import { allLocationServiceSlugs } from "@/data/locations";
import { blogArticles } from "@/data/blogArticles";
import { allIndustrySlugs, allIndustryPageSlugs } from "@/data/industries";
import { allToolSlugs } from "@/data/freeTools";
import { allCaseStudySlugs } from "@/data/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://townmedialabs.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/digital-marketing-agency-chandigarh`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePageEntries: MetadataRoute.Sitemap = allServiceSlugs.map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const chandigarhPageEntries: MetadataRoute.Sitemap = allChandigarhSlugs.map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const locationPageEntries: MetadataRoute.Sitemap = allLocationServiceSlugs.map(
    (slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const blogPageEntries: MetadataRoute.Sitemap = Object.keys(blogArticles).map(
    (slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const industryIndexEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  const industryPageEntries: MetadataRoute.Sitemap = allIndustrySlugs.map(
    (slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  const tier1IndustryPageEntries: MetadataRoute.Sitemap = allIndustryPageSlugs.map(
    (slug) => ({
      url: `${baseUrl}/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })
  );

  const locationHubEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...["canada", "united-states", "united-kingdom", "australia", "new-zealand", "india", "uae"].map(
      (country) => ({
        url: `${baseUrl}/locations/${country}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })
    ),
  ];

  const freeToolsIndexEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/free-tools`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const freeToolPageEntries: MetadataRoute.Sitemap = allToolSlugs.map(
    (slug) => ({
      url: `${baseUrl}/free-tools/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  const caseStudiesIndexEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const caseStudyPageEntries: MetadataRoute.Sitemap = allCaseStudySlugs.map(
    (slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticPages, ...servicePageEntries, ...chandigarhPageEntries, ...locationPageEntries, ...blogPageEntries, ...industryIndexEntry, ...industryPageEntries, ...tier1IndustryPageEntries, ...freeToolsIndexEntry, ...freeToolPageEntries, ...caseStudiesIndexEntry, ...caseStudyPageEntries, ...locationHubEntries];
}
