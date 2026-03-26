import type { Metadata } from "next";
import { freeTools, allToolSlugs } from "@/data/freeTools";
import ToolPageClient from "./ToolPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allToolSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = freeTools[slug];

  if (!tool) {
    return { title: "Tool Not Found | TML Agency" };
  }

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    keywords: tool.keywords,
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: `https://townmedialabs.com/free-tools/${tool.slug}`,
      siteName: "TML Agency",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${tool.metaTitle} - TML Agency` }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tmlagency",
      title: tool.metaTitle,
      description: tool.metaDescription,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://townmedialabs.com/free-tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = freeTools[slug];

  if (!tool) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <p>Tool not found.</p>
      </div>
    );
  }

  return <ToolPageClient tool={tool} />;
}
