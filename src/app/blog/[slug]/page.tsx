import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blogArticles";
import BlogArticleClient from "./BlogArticleClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) return {};

  const siteUrl = "https://townmedialabs.com";

  const seoTitle = article.metaTitle || article.title;

  return {
    title: seoTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: seoTitle,
      description: article.metaDescription,
      url: `${siteUrl}/blog/${slug}`,
      siteName: "TML Agency",
      type: "article",
      locale: "en_IN",
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: ["TML Agency"],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tmlagency",
      title: seoTitle,
      description: article.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({ slug }));
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) notFound();

  const siteUrl = "https://townmedialabs.com";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    url: `${siteUrl}/blog/${slug}`,
    datePublished: article.date,
    dateModified: article.date,
    image: `${siteUrl}/og-image.png`,
    author: {
      "@type": "Person",
      name: "TML Agency Team",
      url: `${siteUrl}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "TML Agency",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
    },
    keywords: article.keywords?.join(", "),
    articleSection: article.category,
    inLanguage: "en-IN",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${siteUrl}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogArticleClient article={article} slug={slug} />
    </>
  );
}
