import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blogArticles";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { getAuthorBySlug } from "@/data/authors";
import BlogArticleClient from "./BlogArticleClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) return {};

  const siteUrl = "https://townmedialabs.com";
  const author = getAuthorBySlug(slug);

  const seoTitle = article.metaTitle || article.title;
  const ogImage = article.image || "/og-image.png";

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
      authors: author ? [author.name] : ["TML Agency"],
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tmlagency",
      title: seoTitle,
      description: article.metaDescription,
      images: [ogImage],
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
  const author = getAuthorBySlug(slug);

  const articleJsonLd = generateArticleSchema({
    title: article.title,
    description: article.metaDescription,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    slug,
    keywords: article.keywords,
    category: article.category,
    authorName: author?.name,
    authorId: author?.id,
  });

  const breadcrumbJsonLd = generateBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Blog", url: `${siteUrl}/blog` },
    { name: article.title, url: `${siteUrl}/blog/${slug}` },
  ]);

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
