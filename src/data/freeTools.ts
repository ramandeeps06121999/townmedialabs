export interface FreeTool {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  keywords: string[];
  category: string;
}

export const freeTools: Record<string, FreeTool> = {
  "seo-audit-checklist": {
    slug: "seo-audit-checklist",
    name: "SEO Audit Checklist",
    metaTitle: "Free SEO Audit Checklist Tool — Score Your Website | TML Agency",
    metaDescription:
      "Use our free interactive SEO audit checklist to score your website across 30 critical factors. Check technical SEO, on-page, content, links, and local SEO items.",
    description:
      "Score your website across 30 critical SEO factors. Check off items in technical SEO, on-page optimization, content quality, link building, and local SEO to get your overall readiness score.",
    keywords: [
      "SEO audit checklist",
      "free SEO audit",
      "website SEO score",
      "SEO checklist tool",
      "technical SEO audit",
      "on-page SEO checklist",
    ],
    category: "SEO",
  },
  "website-speed-calculator": {
    slug: "website-speed-calculator",
    name: "Website Speed Impact Calculator",
    metaTitle: "Free Website Speed Impact Calculator — See Revenue Lost | TML Agency",
    metaDescription:
      "Calculate how much revenue and visitors you lose due to slow website speed. Enter your load time, bounce rate, and traffic to see the real cost of a slow site.",
    description:
      "Find out how much a slow website is really costing you. Enter your current load time, bounce rate, and monthly visitors to see estimated lost visitors, revenue impact, and get speed recommendations.",
    keywords: [
      "website speed calculator",
      "page speed impact",
      "website load time cost",
      "bounce rate calculator",
      "site speed revenue loss",
      "web performance tool",
    ],
    category: "Performance",
  },
  "social-media-post-generator": {
    slug: "social-media-post-generator",
    name: "Social Media Post Generator",
    metaTitle: "Free Social Media Post Generator — Create Posts Instantly | TML Agency",
    metaDescription:
      "Generate engaging social media posts for Instagram, LinkedIn, Twitter, and Facebook. Select your platform, tone, and topic to get ready-to-use post templates.",
    description:
      "Create engaging social media posts in seconds. Pick your platform, choose a tone, select a topic, and get a ready-to-customize post template for Instagram, LinkedIn, Twitter, or Facebook.",
    keywords: [
      "social media post generator",
      "free post generator",
      "Instagram post ideas",
      "LinkedIn post template",
      "social media content tool",
      "post caption generator",
    ],
    category: "Social Media",
  },
  "google-ads-budget-calculator": {
    slug: "google-ads-budget-calculator",
    name: "Google Ads Budget Calculator",
    metaTitle: "Free Google Ads Budget Calculator — Estimate Your Ad Spend | TML Agency",
    metaDescription:
      "Calculate your ideal Google Ads budget based on your industry, target leads, and average CPC. Get estimated clicks, cost per lead, and monthly budget recommendations.",
    description:
      "Plan your Google Ads spend with confidence. Enter your industry, target leads per month, and average cost-per-click to get a clear picture of your required budget, expected clicks, and estimated cost per lead.",
    keywords: [
      "Google Ads budget calculator",
      "PPC budget tool",
      "ad spend calculator",
      "Google Ads cost estimator",
      "CPC calculator",
      "pay per click budget",
    ],
    category: "Paid Ads",
  },
  "roi-calculator": {
    slug: "roi-calculator",
    name: "Marketing ROI Calculator",
    metaTitle: "Free Marketing ROI Calculator — Measure Your Returns | TML Agency",
    metaDescription:
      "Calculate your marketing return on investment instantly. Enter your spend, leads, conversion rate, and deal value to see ROI percentage, cost per lead, and cost per acquisition.",
    description:
      "Measure the true return on your marketing investment. Input your monthly spend, leads generated, conversion rate, and average deal value to see your ROI percentage, cost per lead, and cost per acquisition.",
    keywords: [
      "marketing ROI calculator",
      "return on investment calculator",
      "cost per lead calculator",
      "marketing metrics tool",
      "CPA calculator",
      "digital marketing ROI",
    ],
    category: "Analytics",
  },
  "meta-tag-generator": {
    slug: "meta-tag-generator",
    name: "Meta Tag Generator",
    metaTitle: "Free Meta Tag Generator — Preview Google Results | TML Agency",
    metaDescription:
      "Generate perfect HTML meta tags for your web pages. Preview how your page will look in Google search results and copy optimized title, description, and keyword tags.",
    description:
      "Create optimized meta tags for any web page. Enter your page title, description, and keywords to preview your Google search result appearance and generate ready-to-paste HTML meta tags.",
    keywords: [
      "meta tag generator",
      "SEO meta tags",
      "title tag generator",
      "meta description tool",
      "Google preview tool",
      "HTML meta tag creator",
    ],
    category: "SEO",
  },
};

export const allToolSlugs = Object.keys(freeTools);
