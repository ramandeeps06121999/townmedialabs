import type { Metadata } from "next";
import { industries, industryPages, allIndustrySlugs, allIndustryPageSlugs } from "@/data/industries";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
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
    return { title: "Industry Not Found | TML Agency" };
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

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;

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
        <IndustryPageV2Client industry={industryV2} />
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
      <IndustryPageClient industry={industry} />
    </>
  );
}
