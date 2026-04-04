export interface Author {
  id: string;
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  yearsOfExperience: number;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

export const authors: Record<string, Author> = {
  "raman-makkar": {
    id: "raman-makkar",
    name: "Raman Makkar",
    title: "Founder & SEO Strategist",
    bio: "Raman is the founder of TML Agency, a full-service digital marketing agency serving 500+ brands across India. With 10+ years of experience in SEO, brand strategy, and digital marketing, Raman specializes in helping businesses achieve sustainable growth through data-driven strategies and human-centered brand building.",
    expertise: ["SEO", "Branding", "Digital Marketing Strategy", "Growth Strategy"],
    yearsOfExperience: 10,
    linkedin: "https://linkedin.com/in/ramanmakkar",
    twitter: "https://twitter.com/ramanmakkar",
  },
  "tml-agency": {
    id: "tml-agency",
    name: "TML Agency",
    title: "Editorial Team",
    bio: "TML Agency is a full-service branding and digital marketing agency founded in 2010. Our team of 70+ designers, developers, strategists, and marketers create comprehensive brand ecosystems for businesses across India. We combine creativity with data-driven insights to deliver measurable results.",
    expertise: ["Branding", "Web Development", "Digital Marketing", "Video Production", "Google Ads", "SEO"],
    yearsOfExperience: 10,
    linkedin: "https://linkedin.com/company/town-media-labs",
  },
  "seo-specialist": {
    id: "seo-specialist",
    name: "Sarah Johnson",
    title: "SEO & Content Specialist",
    bio: "Sarah is an SEO strategist and content specialist at TML Agency with 7+ years of experience helping businesses dominate search results. She focuses on technical SEO, content strategy, and building E-E-A-T signals for AI-ready content. Sarah has helped 150+ businesses improve their search visibility.",
    expertise: ["SEO", "Technical SEO", "Content Strategy", "E-E-A-T", "AI-Ready Content"],
    yearsOfExperience: 7,
    twitter: "https://twitter.com/sarahjseo",
  },
  "brand-strategist": {
    id: "brand-strategist",
    name: "Arjun Verma",
    title: "Brand Strategist",
    bio: "Arjun is a brand strategist at TML Agency specializing in brand positioning, visual identity, and brand messaging. With 8+ years of experience, he has developed brand identities for startups, established brands, and Fortune 500 companies across multiple industries.",
    expertise: ["Brand Strategy", "Brand Positioning", "Visual Identity", "Brand Messaging", "Design Thinking"],
    yearsOfExperience: 8,
    linkedin: "https://linkedin.com/in/arjunverma",
  },
  "digital-marketer": {
    id: "digital-marketer",
    name: "Priya Sharma",
    title: "Performance Marketing Manager",
    bio: "Priya leads performance marketing initiatives at TML Agency, managing campaigns across Google Ads, Facebook, Instagram, and LinkedIn. She has 6+ years of experience and has helped brands achieve 300%+ ROI improvements through data-driven marketing strategies.",
    expertise: ["Google Ads", "Performance Marketing", "Facebook Ads", "Marketing Analytics", "Conversion Optimization"],
    yearsOfExperience: 6,
    twitter: "https://twitter.com/priyasharmaadv",
  },
  "content-writer": {
    id: "content-writer",
    name: "Nikhil Patel",
    title: "Content Writer & Strategist",
    bio: "Nikhil creates compelling content that ranks, converts, and resonates with audiences. As a content strategist at TML Agency with 5+ years of experience, he specializes in blog content, website copy, and content strategy for B2B and B2C brands.",
    expertise: ["Content Writing", "Content Strategy", "SEO Writing", "Copywriting", "Blog Content"],
    yearsOfExperience: 5,
  },
};

// Map of article slug to author ID
export const articleAuthorMap: Record<string, string> = {
  "top-10-branding-agencies-chandigarh": "raman-makkar",
  "what-are-ai-influencers-how-to-create-earn-money": "digital-marketer",
  "best-way-to-promote-song-online-free": "digital-marketer",
  "how-to-make-song-trending-on-spotify": "content-writer",
  "how-to-make-song-viral-on-instagram": "digital-marketer",
  "how-to-upload-song-on-instagram": "content-writer",
  "website-not-showing-on-google-fix": "seo-specialist",
  "website-not-showing-on-google": "seo-specialist",
  "not-getting-leads-from-website": "brand-strategist",
  "website-not-getting-traffic": "seo-specialist",
  "why-website-not-ranking-on-google": "seo-specialist",
  "ai-in-digital-marketing-2026": "digital-marketer",
  "social-media-marketing-strategy-2026": "digital-marketer",
  "local-seo-guide-small-business": "seo-specialist",
  "content-marketing-roi-guide": "content-writer",
  "signs-you-need-website-redesign": "brand-strategist",
  "google-ads-not-working": "digital-marketer",
  "website-loading-slow-how-to-fix": "seo-specialist",
  "website-not-mobile-friendly-fix": "seo-specialist",
  "google-ads-vs-seo-which-is-better": "digital-marketer",
  "best-digital-marketing-agency-chandigarh": "brand-strategist",
  "best-seo-company-chandigarh": "seo-specialist",
  "best-web-designer-chandigarh": "brand-strategist",
  "best-digital-marketing-company-chandigarh": "digital-marketer",
  "best-google-ads-agency-chandigarh": "digital-marketer",
  "best-social-media-marketing-agency-chandigarh": "digital-marketer",
  "best-content-marketing-agency-chandigarh": "content-writer",
  "best-web-development-company-chandigarh": "brand-strategist",
  "best-e-commerce-web-development-agency-chandigarh": "brand-strategist",
  "best-website-design-agency-chandigarh": "brand-strategist",
  "best-ppc-agency-chandigarh": "digital-marketer",
  "best-brand-design-agency-chandigarh": "brand-strategist",
  "best-graphic-design-agency-chandigarh": "brand-strategist",
  "best-video-production-company-chandigarh": "brand-strategist",
  "best-ui-ux-design-agency-chandigarh": "brand-strategist",
  "best-instagram-marketing-agency-chandigarh": "digital-marketer",
  "best-facebook-marketing-agency-chandigarh": "digital-marketer",
  "best-linkedin-marketing-agency-chandigarh": "digital-marketer",
  "best-email-marketing-agency-chandigarh": "digital-marketer",
  "best-marketing-agency-chandigarh": "raman-makkar",
  "branding-agencies-in-ambala": "raman-makkar",
  "branding-agencies-in-yamunanagar": "raman-makkar",
  "branding-agencies-in-kurukshetra": "raman-makkar",
  "branding-agencies-in-hisar": "raman-makkar",
  "branding-agencies-in-rohtak": "raman-makkar",
  "branding-agencies-in-panipat": "raman-makkar",
  "branding-agencies-in-faridabad": "raman-makkar",
  "branding-agencies-in-gurgaon": "raman-makkar",
  "branding-agencies-in-delhi": "raman-makkar",
  "branding-agencies-in-noida": "raman-makkar",
  "branding-agencies-in-greater-noida": "raman-makkar",
  "branding-agencies-in-mohali": "raman-makkar",
  "branding-agencies-in-panchkula": "raman-makkar",
  "branding-agencies-in-pune": "raman-makkar",
  "branding-agencies-in-mumbai": "raman-makkar",
  "branding-agencies-in-bangalore": "raman-makkar",
  "branding-agencies-in-hyderabad": "raman-makkar",
  "branding-agencies-in-kolkata": "raman-makkar",
  "branding-agencies-in-ahmedabad": "raman-makkar",
};

/**
 * Return the author for a given blog article slug.
 * Falls back to the "tml-agency" default so every post has clear authorship (E-E-A-T).
 */
export function getAuthorBySlug(slug: string): Author {
  const authorId = articleAuthorMap[slug] ?? "tml-agency";
  return authors[authorId] ?? authors["tml-agency"];
}

export function getAuthorById(id: string): Author | null {
  return authors[id] || null;
}
