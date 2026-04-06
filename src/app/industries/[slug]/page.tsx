import type { Metadata } from "next";
import { industries, industryPages, allIndustrySlugs, allIndustryPageSlugs } from "@/data/industries";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { blogArticles } from "@/data/blogArticles";
import { servicePages } from "@/data/servicePages";
import { industryRelatedBlogs } from "@/lib/internalLinks";
import { getImagesForService } from "@/data/portfolioImages";
import IndustryPageClient from "./IndustryPageClient";
import IndustryPageV2Client from "./IndustryPageV2Client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const legacySlugs = allIndustrySlugs.map((slug) => ({ slug }));
  const v2Slugs = allIndustryPageSlugs
    .filter((slug) => !allIndustrySlugs.includes(slug))
    .map((slug) => ({ slug }));
  return [...legacySlugs, ...v2Slugs];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Check v2 (IndustryPage) first
  const industryV2 = industryPages[slug];
  if (industryV2) {
    return {
      title: industryV2.metaTitle,
      description: industryV2.metaDescription,
      keywords: industryV2.keywords,
      openGraph: {
        title: industryV2.metaTitle,
        description: industryV2.metaDescription,
        url: `https://townmedialabs.com/industries/${industryV2.slug}`,
        siteName: "TML Agency",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${industryV2.metaTitle} - TML Agency` }],
      },
      twitter: {
        card: "summary_large_image",
        site: "@tmlagency",
        title: industryV2.metaTitle,
        description: industryV2.metaDescription,
        images: ["/og-image.png"],
      },
      alternates: {
        canonical: `https://townmedialabs.com/industries/${industryV2.slug}`,
      },
    };
  }

  // Fall back to legacy (IndustryInfo)
  const industry = industries[slug];
  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://townmedialabs.com/industries/${industry.slug}`,
      siteName: "TML Agency",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${industry.metaTitle} - TML Agency` }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tmlagency",
      title: industry.metaTitle,
      description: industry.metaDescription,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://townmedialabs.com/industries/${industry.slug}`,
    },
  };
}

// Helper: resolve related blogs for a given industry slug (server-only)
function getRelatedBlogsForIndustry(industrySlug: string) {
  const blogSlugs = industryRelatedBlogs[industrySlug] || [];
  return blogSlugs
    .map((s) => {
      const article = blogArticles[s];
      if (!article) return null;
      return { slug: s, title: article.title, category: article.category, metaDescription: article.metaDescription };
    })
    .filter((b): b is NonNullable<typeof b> => b !== null);
}

// Helper: resolve portfolio images (server-only)
function getPortfolioImagesForIndustry() {
  return getImagesForService("branding", 4).map((img) => ({ src: img.src, alt: img.alt }));
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;

  // Pre-compute shared data on the server
  const relatedBlogs = getRelatedBlogsForIndustry(slug);
  const portfolioImages = getPortfolioImagesForIndustry();

  // ── Tier 1 IndustryPage (v2) ────────────────────────────────────────────────
  const industryV2 = industryPages[slug];
  if (industryV2) {
    const serviceSchema = generateServiceSchema({
      name: `${industryV2.name} Digital Marketing Services`,
      description: industryV2.metaDescription,
      url: `https://townmedialabs.com/industries/${industryV2.slug}`,
      category: industryV2.name,
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: "Home", url: "https://townmedialabs.com" },
      { name: "Industries", url: "https://townmedialabs.com/industries" },
      { name: industryV2.name, url: `https://townmedialabs.com/industries/${industryV2.slug}` },
    ]);

    const faqSchema = generateFAQSchema(
      industryV2.faqItems.map((faq) => ({ question: faq.question, answer: faq.answer }))
    );

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <IndustryPageV2Client industry={industryV2} relatedBlogs={relatedBlogs} portfolioImages={portfolioImages} />
      </>
    );
  }

  // ── Legacy IndustryInfo ─────────────────────────────────────────────────────
  const industry = industries[slug];

  if (!industry) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <p>Industry not found.</p>
      </div>
    );
  }

  // Resolve service details on the server
  const serviceData = industry.services
    .map((serviceSlug) => {
      const sp = servicePages[serviceSlug];
      if (!sp) return null;
      return { slug: sp.slug, title: sp.title, description: sp.description };
    })
    .filter((s): s is NonNullable<typeof s> => s !== null);

  const serviceSchema = generateServiceSchema({
    name: `${industry.name} Digital Marketing Services`,
    description: industry.description,
    url: `https://townmedialabs.com/industries/${industry.slug}`,
    category: industry.name,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://townmedialabs.com" },
    { name: "Industries", url: "https://townmedialabs.com/industries" },
    { name: industry.name, url: `https://townmedialabs.com/industries/${industry.slug}` },
  ]);

  const faqSchema = generateFAQSchema(
    industry.faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <IndustryPageClient industry={industry} relatedBlogs={relatedBlogs} serviceData={serviceData} portfolioImages={portfolioImages} />
    </>
  );
}
