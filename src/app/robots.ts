import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://townmedialabs.ca";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/private/"],
      },
      // AI Search Crawlers - Allowed for citation
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Bytespider (TikTok) - blocked due to aggressive crawling
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
  };
}
