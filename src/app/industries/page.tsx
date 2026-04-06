import type { Metadata } from "next";
import { industries, industryPages, allIndustrySlugs, allIndustryPageSlugs } from "@/data/industries";
import IndustriesIndexClient from "./IndustriesIndexClient";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Explore TML Agency's industry-specific digital marketing solutions. We help dentists, plumbers, electricians, salons, cafes, accountants, veterinarians, non-profits, and more grow with tailored strategies.",
  keywords: [
    "industry specific marketing",
    "digital marketing by industry",
    "marketing for small businesses",
    "niche marketing agency",
    "TML Agency industries",
  ],
  openGraph: {
    title: "Industries We Serve",
    description:
      "Industry-specific digital marketing solutions tailored to your business. From dentists to non-profits, we build strategies that drive growth.",
    url: "https://townmedialabs.com/industries",
    siteName: "TML Agency",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Industries We Serve - TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Industries We Serve",
    description:
      "Industry-specific digital marketing solutions tailored to your business. From dentists to non-profits, we build strategies that drive growth.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://townmedialabs.com/industries",
  },
};

export default function IndustriesPage() {
  // Pre-compute industry data on the server to keep large data files out of the client bundle
  const tier1Industries = allIndustryPageSlugs
    .map((slug) => {
      const ip = industryPages[slug];
      if (!ip) return null;
      return {
        slug: ip.slug,
        name: ip.name,
        heroSubtitle: ip.heroSubtitle,
        serviceNames: ip.services.slice(0, 3).map((s) => s.name),
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const legacyIndustries = allIndustrySlugs
    .map((slug) => {
      const ind = industries[slug];
      if (!ind) return null;
      return {
        slug: ind.slug,
        name: ind.name,
        icon: ind.icon,
        description: ind.description,
        serviceLabels: ind.services.slice(0, 3).map((s) => s.replace(/-/g, " ")),
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  return (
    <IndustriesIndexClient
      tier1Industries={tier1Industries}
      legacyIndustries={legacyIndustries}
      tier1Count={allIndustryPageSlugs.length}
      legacyCount={allIndustrySlugs.length}
    />
  );
}
