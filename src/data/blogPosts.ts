import { blogArticles } from "./blogArticles";
import { getAuthorBySlug } from "./authors";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  authorName: string;
}

// Hand-curated featured post
const featuredSlugs = new Set(["top-10-branding-agencies-chandigarh"]);

// Auto-generate blog listing from all articles
export const blogPosts: BlogPost[] = Object.entries(blogArticles).map(
  ([slug, article]) => ({
    slug,
    title: article.title,
    excerpt: article.metaDescription,
    category: article.category,
    date: article.date,
    readTime: article.readTime,
    image: "/blog/branding-agencies.jpg",
    featured: featuredSlugs.has(slug),
    authorName: getAuthorBySlug(slug).name,
  })
);

// Auto-derive categories from articles
const categorySet = new Set(blogPosts.map((p) => p.category));
export const blogCategories = ["All", ...Array.from(categorySet).sort()];
