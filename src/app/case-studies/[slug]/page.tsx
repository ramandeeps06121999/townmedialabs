import type { Metadata } from "next";
import { caseStudies, allCaseStudySlugs } from "@/data/caseStudies";
import { generateBreadcrumbSchema } from "@/lib/schema";
import CaseStudyClient from "./CaseStudyClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allCaseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    return { title: "Case Study Not Found | TML Agency" };
  }

  return {
    title: study.metaTitle,
    description: study.metaDescription,
    keywords: study.keywords,
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url: `https://townmedialabs.com/case-studies/${study.slug}`,
      siteName: "TML Agency",
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${study.metaTitle} - TML Agency` }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tmlagency",
      title: study.metaTitle,
      description: study.metaDescription,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://townmedialabs.com/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <p>Case study not found.</p>
      </div>
    );
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://townmedialabs.com" },
    { name: "Case Studies", url: "https://townmedialabs.com/case-studies" },
    { name: study.client, url: `https://townmedialabs.com/case-studies/${study.slug}` },
  ]);

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.metaDescription,
    url: `https://townmedialabs.com/case-studies/${study.slug}`,
    author: {
      "@type": "Organization",
      name: "TML Agency",
      url: "https://townmedialabs.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TML Agency",
      url: "https://townmedialabs.com",
      logo: {
        "@type": "ImageObject",
        url: "https://townmedialabs.com/logo.png",
      },
    },
    about: {
      "@type": "Thing",
      name: `${study.industry} Digital Marketing`,
    },
    keywords: study.keywords.join(", "),
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: study.testimonial.quote,
    author: {
      "@type": "Person",
      name: study.testimonial.name,
      jobTitle: study.testimonial.role,
    },
    itemReviewed: {
      "@type": "Organization",
      name: "TML Agency",
      url: "https://townmedialabs.com",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <CaseStudyClient study={study} />
    </>
  );
}
