/**
 * Internal linking mappings for cross-referencing content across the site.
 * Maps service slugs to related blog posts, industry pages, and vice versa.
 */

// ── Service → Related Blog Posts ────────────────────────────────────────────────
export const serviceRelatedBlogs: Record<string, string[]> = {
  seo: [
    "how-much-does-seo-cost",
    "how-to-do-keyword-research",
    "local-seo-guide-small-business",
  ],
  "google-ads": [
    "how-much-do-google-ads-cost",
    "google-ads-vs-seo-which-is-better",
    "facebook-ads-vs-google-ads",
  ],
  "website-development": [
    "how-much-does-website-cost",
    "website-loading-slow-how-to-fix",
    "wordpress-vs-nextjs-which-is-better",
  ],
  "social-media": [
    "social-media-marketing-cost",
    "social-media-marketing-strategy-2026",
    "seo-vs-social-media-marketing",
  ],
  branding: [
    "branding-cost-small-business",
    "branding-mistakes-small-business",
    "top-10-branding-agencies-chandigarh",
  ],
  "ai-influencer-management": [
    "what-are-ai-influencers-how-to-create-earn-money",
    "ai-in-digital-marketing-2026",
    "social-media-marketing-strategy-2026",
  ],
  "lead-generation": [
    "lead-generation-cost",
    "not-getting-leads-from-website",
    "how-to-choose-digital-marketing-agency",
  ],
  "music-release": [
    "best-way-to-promote-song-online-free",
    "how-to-make-song-trending-on-spotify",
    "how-to-make-song-viral-on-instagram",
  ],
  "video-editing": [
    "video-editing-cost",
    "social-media-marketing-strategy-2026",
    "how-to-choose-digital-marketing-agency",
  ],
  "branding-packaging": [
    "branding-cost-small-business",
    "branding-mistakes-small-business",
    "how-to-choose-digital-marketing-agency",
  ],
  "graphic-design": [
    "branding-cost-small-business",
    "signs-you-need-website-redesign",
    "branding-mistakes-small-business",
  ],
  "link-building": [
    "how-much-does-seo-cost",
    "how-to-do-keyword-research",
    "ecommerce-seo-guide-2026",
  ],
  "meta-ads": [
    "facebook-ads-vs-google-ads",
    "how-to-run-facebook-ads-beginners",
    "social-media-marketing-cost",
  ],
  "content-writing": [
    "how-to-write-blog-posts-that-rank",
    "content-marketing-roi-guide",
    "how-to-do-keyword-research",
  ],
  "gmb-listing": [
    "how-to-create-google-business-profile",
    "how-to-get-more-google-reviews",
    "local-seo-guide-small-business",
  ],
  "technical-seo": [
    "website-loading-slow-how-to-fix",
    "website-not-mobile-friendly-fix",
    "website-not-showing-on-google-fix",
  ],
  "content-marketing": [
    "content-marketing-roi-guide",
    "how-to-write-blog-posts-that-rank",
    "seo-vs-social-media-marketing",
  ],
  "email-marketing": [
    "how-to-build-email-list",
    "content-marketing-roi-guide",
    "digital-marketing-cost-india",
  ],
  "influencer-marketing": [
    "what-are-ai-influencers-how-to-create-earn-money",
    "social-media-marketing-strategy-2025",
    "social-media-marketing-cost",
  ],
  "ppc-management": [
    "how-much-do-google-ads-cost",
    "google-ads-not-working",
    "google-ads-vs-seo-which-is-better",
  ],
  "online-reputation-management": [
    "how-to-get-more-google-reviews",
    "how-to-create-google-business-profile",
    "branding-mistakes-small-business",
  ],
  "conversion-rate-optimization": [
    "not-getting-leads-from-website",
    "website-not-getting-traffic",
    "signs-you-need-website-redesign",
  ],
  "ecommerce-marketing": [
    "ecommerce-seo-guide-2025",
    "shopify-vs-woocommerce",
    "organic-vs-paid-marketing",
  ],
};

// ── Service → Related Industry Pages ────────────────────────────────────────────
export const serviceRelatedIndustries: Record<string, string[]> = {
  seo: [
    "web-design-for-dentists",
    "digital-marketing-for-plumbers",
    "restaurants-food",
  ],
  "google-ads": [
    "digital-marketing-for-hair-salons",
    "digital-marketing-for-hvac-companies",
    "digital-marketing-for-auto-repair-shops",
  ],
  "website-development": [
    "web-design-for-real-estate-agents",
    "web-design-for-photographers",
    "web-design-for-interior-designers",
  ],
  "social-media": [
    "restaurants-food",
    "web-design-for-cafes",
    "digital-marketing-for-tattoo-shops",
  ],
  branding: [
    "web-design-for-cafes",
    "web-design-for-florists",
    "web-design-for-wedding-planners",
  ],
  "ai-influencer-management": [
    "digital-marketing-for-gyms",
    "digital-marketing-for-personal-trainers",
    "digital-marketing-for-yoga-studios",
  ],
  "lead-generation": [
    "digital-marketing-for-roofing-companies",
    "digital-marketing-for-pest-control",
    "digital-marketing-for-insurance-agents",
  ],
  "music-release": [
    "digital-marketing-for-tattoo-shops",
    "web-design-for-photographers",
    "web-design-for-wedding-planners",
  ],
  "video-editing": [
    "web-design-for-photographers",
    "web-design-for-travel-agencies",
    "digital-marketing-for-gyms",
  ],
  "branding-packaging": [
    "web-design-for-cafes",
    "web-design-for-florists",
    "digital-marketing-for-spa-and-massage",
  ],
  "graphic-design": [
    "web-design-for-interior-designers",
    "web-design-for-florists",
    "web-design-for-nonprofits",
  ],
  "link-building": [
    "digital-marketing-for-accountants",
    "digital-marketing-for-chiropractors",
    "web-design-for-real-estate-agents",
  ],
  "meta-ads": [
    "digital-marketing-for-car-dealerships",
    "digital-marketing-for-daycare-centers",
    "digital-marketing-for-moving-companies",
  ],
  "content-writing": [
    "digital-marketing-for-accountants",
    "web-design-for-nonprofits",
    "digital-marketing-for-veterinarians",
  ],
  "gmb-listing": [
    "digital-marketing-for-plumbers",
    "digital-marketing-for-electricians",
    "digital-marketing-for-cleaning-companies",
  ],
  "technical-seo": [
    "web-design-for-dentists",
    "web-design-for-real-estate-agents",
    "digital-marketing-for-accountants",
  ],
  "content-marketing": [
    "digital-marketing-for-veterinarians",
    "web-design-for-nonprofits",
    "digital-marketing-for-insurance-agents",
  ],
  "email-marketing": [
    "digital-marketing-for-daycare-centers",
    "digital-marketing-for-spa-and-massage",
    "digital-marketing-for-personal-trainers",
  ],
  "influencer-marketing": [
    "digital-marketing-for-hair-salons",
    "digital-marketing-for-yoga-studios",
    "digital-marketing-for-gyms",
  ],
  "ppc-management": [
    "digital-marketing-for-hvac-companies",
    "digital-marketing-for-roofing-companies",
    "digital-marketing-for-pest-control",
  ],
  "online-reputation-management": [
    "digital-marketing-for-chiropractors",
    "web-design-for-dentists",
    "digital-marketing-for-veterinarians",
  ],
  "conversion-rate-optimization": [
    "digital-marketing-for-car-dealerships",
    "digital-marketing-for-insurance-agents",
    "web-design-for-travel-agencies",
  ],
  "ecommerce-marketing": [
    "web-design-for-florists",
    "web-design-for-travel-agencies",
    "digital-marketing-for-spa-and-massage",
  ],
};

// ── Blog → Related Services ─────────────────────────────────────────────────────
export const blogRelatedServices: Record<string, string[]> = {
  "top-10-branding-agencies-chandigarh": ["branding", "branding-packaging", "graphic-design"],
  "what-are-ai-influencers-how-to-create-earn-money": ["ai-influencer-management", "social-media", "influencer-marketing"],
  "best-way-to-promote-song-online-free": ["music-release", "social-media", "meta-ads"],
  "how-to-make-song-trending-on-spotify": ["music-release", "content-marketing", "social-media"],
  "how-to-make-song-viral-on-instagram": ["music-release", "social-media", "influencer-marketing"],
  "how-to-upload-song-on-instagram": ["music-release", "social-media", "video-editing"],
  "website-not-showing-on-google-fix": ["seo", "technical-seo", "gmb-listing"],
  "website-not-showing-on-google": ["seo", "technical-seo", "gmb-listing"],
  "not-getting-leads-from-website": ["lead-generation", "conversion-rate-optimization", "website-development"],
  "website-not-getting-traffic": ["seo", "content-marketing", "google-ads"],
  "why-website-not-ranking-on-google": ["seo", "technical-seo", "link-building"],
  "ai-in-digital-marketing-2025": ["ai-influencer-management", "content-marketing", "social-media"],
  "social-media-marketing-strategy-2025": ["social-media", "content-marketing", "influencer-marketing"],
  "local-seo-guide-small-business": ["seo", "gmb-listing", "content-writing"],
  "content-marketing-roi-guide": ["content-marketing", "content-writing", "seo"],
  "signs-you-need-website-redesign": ["website-development", "conversion-rate-optimization", "graphic-design"],
  "google-ads-not-working": ["google-ads", "ppc-management", "conversion-rate-optimization"],
  "website-loading-slow-how-to-fix": ["technical-seo", "website-development", "conversion-rate-optimization"],
  "website-not-mobile-friendly-fix": ["technical-seo", "website-development", "seo"],
  "google-ads-vs-seo-which-is-better": ["google-ads", "seo", "ppc-management"],
  "branding-mistakes-small-business": ["branding", "branding-packaging", "graphic-design"],
  "how-to-choose-digital-marketing-agency": ["lead-generation", "seo", "social-media"],
  "ecommerce-seo-guide-2025": ["ecommerce-marketing", "seo", "technical-seo"],
  "how-much-does-seo-cost": ["seo", "technical-seo", "link-building"],
  "how-much-does-website-cost": ["website-development", "graphic-design", "ecommerce-marketing"],
  "how-much-do-google-ads-cost": ["google-ads", "ppc-management", "meta-ads"],
  "social-media-marketing-cost": ["social-media", "influencer-marketing", "content-marketing"],
  "branding-cost-small-business": ["branding", "branding-packaging", "graphic-design"],
  "digital-marketing-cost-india": ["seo", "google-ads", "social-media"],
  "lead-generation-cost": ["lead-generation", "google-ads", "email-marketing"],
  "video-editing-cost": ["video-editing", "social-media", "content-marketing"],
  "wordpress-vs-nextjs-which-is-better": ["website-development", "technical-seo", "ecommerce-marketing"],
  "seo-vs-social-media-marketing": ["seo", "social-media", "content-marketing"],
  "facebook-ads-vs-google-ads": ["meta-ads", "google-ads", "ppc-management"],
  "freelancer-vs-agency-digital-marketing": ["lead-generation", "seo", "social-media"],
  "shopify-vs-woocommerce": ["ecommerce-marketing", "website-development", "seo"],
  "organic-vs-paid-marketing": ["seo", "google-ads", "content-marketing"],
  "how-to-do-keyword-research": ["seo", "content-writing", "content-marketing"],
  "how-to-create-google-business-profile": ["gmb-listing", "seo", "online-reputation-management"],
  "how-to-write-blog-posts-that-rank": ["content-writing", "content-marketing", "seo"],
  "how-to-run-facebook-ads-beginners": ["meta-ads", "social-media", "ppc-management"],
  "how-to-build-email-list": ["email-marketing", "lead-generation", "content-marketing"],
  "how-to-get-more-google-reviews": ["gmb-listing", "online-reputation-management", "seo"],
};

// ── Blog → Related Blog Posts ───────────────────────────────────────────────────
export const blogRelatedArticles: Record<string, string[]> = {
  // AI & Influencers
  "what-are-ai-influencers-how-to-create-earn-money": ["ai-in-digital-marketing-2025", "social-media-marketing-strategy-2025", "instagram-reels-marketing-strategy-guide"],
  "ai-in-digital-marketing-2025": ["what-are-ai-influencers-how-to-create-earn-money", "digital-marketing-guide-small-business-2025", "social-media-marketing-strategy-2025"],

  // Music promotion
  "best-way-to-promote-song-online-free": ["how-to-make-song-trending-on-spotify", "how-to-make-song-viral-on-instagram", "how-to-upload-song-on-instagram"],
  "how-to-make-song-trending-on-spotify": ["best-way-to-promote-song-online-free", "how-to-make-song-viral-on-instagram", "social-media-marketing-strategy-2025"],
  "how-to-make-song-viral-on-instagram": ["how-to-make-song-trending-on-spotify", "best-way-to-promote-song-online-free", "instagram-reels-marketing-strategy-guide"],
  "how-to-upload-song-on-instagram": ["how-to-make-song-viral-on-instagram", "best-way-to-promote-song-online-free", "how-to-make-song-trending-on-spotify"],

  // Website troubleshooting
  "website-not-showing-on-google-fix": ["why-website-not-ranking-on-google", "local-seo-complete-guide-2025", "website-not-getting-traffic"],
  "website-not-showing-on-google": ["website-not-showing-on-google-fix", "why-website-not-ranking-on-google", "how-to-do-keyword-research"],
  "not-getting-leads-from-website": ["website-not-getting-traffic", "signs-you-need-website-redesign", "b2b-lead-generation-strategies-2025"],
  "website-not-getting-traffic": ["why-website-not-ranking-on-google", "how-much-does-seo-cost", "how-to-write-blog-posts-that-rank"],
  "why-website-not-ranking-on-google": ["website-not-showing-on-google-fix", "how-to-do-keyword-research", "local-seo-complete-guide-2025"],
  "website-loading-slow-how-to-fix": ["website-speed-optimization-guide", "signs-you-need-website-redesign", "website-not-mobile-friendly-fix"],
  "website-not-mobile-friendly-fix": ["website-loading-slow-how-to-fix", "website-speed-optimization-guide", "signs-you-need-website-redesign"],
  "signs-you-need-website-redesign": ["how-much-does-website-cost", "website-loading-slow-how-to-fix", "not-getting-leads-from-website"],
  "website-speed-optimization-guide": ["website-loading-slow-how-to-fix", "website-not-mobile-friendly-fix", "ecommerce-seo-product-pages"],

  // SEO
  "how-much-does-seo-cost": ["seo-vs-google-ads-which-invest-first", "local-seo-complete-guide-2025", "how-to-do-keyword-research"],
  "how-to-do-keyword-research": ["how-to-write-blog-posts-that-rank", "ecommerce-seo-guide-2025", "local-seo-guide-small-business"],
  "local-seo-guide-small-business": ["local-seo-complete-guide-2025", "how-to-create-google-business-profile", "how-to-get-more-google-reviews"],
  "local-seo-complete-guide-2025": ["local-seo-guide-small-business", "how-to-create-google-business-profile", "how-to-get-more-google-reviews"],
  "ecommerce-seo-guide-2025": ["ecommerce-seo-product-pages", "ecommerce-marketing-strategy", "shopify-vs-woocommerce"],
  "ecommerce-seo-product-pages": ["ecommerce-seo-guide-2025", "website-speed-optimization-guide", "ecommerce-marketing-strategy"],

  // Google Ads
  "how-much-do-google-ads-cost": ["google-ads-budget-mistakes", "google-ads-not-working", "seo-vs-google-ads-which-invest-first"],
  "google-ads-not-working": ["google-ads-budget-mistakes", "how-much-do-google-ads-cost", "google-ads-vs-seo-which-is-better"],
  "google-ads-vs-seo-which-is-better": ["seo-vs-google-ads-which-invest-first", "organic-vs-paid-marketing", "how-much-do-google-ads-cost"],
  "seo-vs-google-ads-which-invest-first": ["google-ads-vs-seo-which-is-better", "how-much-does-seo-cost", "how-much-do-google-ads-cost"],
  "google-ads-budget-mistakes": ["google-ads-not-working", "how-much-do-google-ads-cost", "facebook-ads-vs-google-ads"],

  // Social Media
  "social-media-marketing-strategy-2025": ["social-media-content-calendar-2025", "instagram-reels-marketing-strategy-guide", "social-media-marketing-cost"],
  "social-media-marketing-cost": ["social-media-marketing-strategy-2025", "digital-marketing-cost-india", "seo-vs-social-media-marketing"],
  "seo-vs-social-media-marketing": ["organic-vs-paid-marketing", "social-media-marketing-strategy-2025", "how-much-does-seo-cost"],
  "instagram-reels-marketing-strategy-guide": ["social-media-content-calendar-2025", "social-media-marketing-strategy-2025", "how-to-make-song-viral-on-instagram"],
  "social-media-content-calendar-2025": ["social-media-marketing-strategy-2025", "instagram-reels-marketing-strategy-guide", "how-to-write-blog-posts-that-rank"],

  // Branding
  "branding-mistakes-small-business": ["why-professional-branding-matters", "branding-cost-small-business", "how-to-create-brand-identity-guide"],
  "branding-cost-small-business": ["how-to-choose-branding-agency-checklist", "branding-mistakes-small-business", "why-professional-branding-matters"],
  "how-to-choose-branding-agency-checklist": ["branding-cost-small-business", "how-to-choose-digital-marketing-agency", "why-professional-branding-matters"],
  "why-professional-branding-matters": ["how-to-create-brand-identity-guide", "branding-mistakes-small-business", "branding-cost-small-business"],
  "how-to-create-brand-identity-guide": ["why-professional-branding-matters", "branding-mistakes-small-business", "how-to-choose-branding-agency-checklist"],

  // Cost guides
  "how-much-does-website-cost": ["how-much-does-website-cost-india-2025", "wordpress-vs-nextjs-which-is-better", "signs-you-need-website-redesign"],
  "how-much-does-website-cost-india-2025": ["how-much-does-website-cost", "digital-marketing-cost-india", "wordpress-vs-nextjs-which-is-better"],
  "digital-marketing-cost-india": ["how-much-does-seo-cost", "how-much-do-google-ads-cost", "digital-marketing-guide-small-business-2025"],
  "lead-generation-cost": ["b2b-lead-generation-strategies-2025", "not-getting-leads-from-website", "digital-marketing-cost-india"],
  "video-editing-cost": ["social-media-content-calendar-2025", "instagram-reels-marketing-strategy-guide", "social-media-marketing-cost"],

  // Comparisons
  "wordpress-vs-nextjs-which-is-better": ["how-much-does-website-cost", "website-speed-optimization-guide", "shopify-vs-woocommerce"],
  "facebook-ads-vs-google-ads": ["google-ads-budget-mistakes", "how-to-run-facebook-ads-beginners", "organic-vs-paid-marketing"],
  "freelancer-vs-agency-digital-marketing": ["how-to-choose-digital-marketing-agency", "digital-marketing-cost-india", "how-to-choose-branding-agency-checklist"],
  "shopify-vs-woocommerce": ["ecommerce-seo-guide-2025", "ecommerce-marketing-strategy", "how-much-does-website-cost"],
  "organic-vs-paid-marketing": ["seo-vs-social-media-marketing", "google-ads-vs-seo-which-is-better", "content-marketing-roi-guide"],

  // How-to guides
  "how-to-create-google-business-profile": ["how-to-get-more-google-reviews", "local-seo-complete-guide-2025", "local-seo-guide-small-business"],
  "how-to-write-blog-posts-that-rank": ["how-to-do-keyword-research", "content-marketing-roi-guide", "ecommerce-seo-product-pages"],
  "how-to-run-facebook-ads-beginners": ["facebook-ads-vs-google-ads", "social-media-marketing-cost", "google-ads-budget-mistakes"],
  "how-to-build-email-list": ["b2b-lead-generation-strategies-2025", "content-marketing-roi-guide", "lead-generation-cost"],
  "how-to-get-more-google-reviews": ["how-to-create-google-business-profile", "local-seo-complete-guide-2025", "local-seo-guide-small-business"],
  "how-to-choose-digital-marketing-agency": ["freelancer-vs-agency-digital-marketing", "digital-marketing-cost-india", "digital-marketing-guide-small-business-2025"],
  "content-marketing-roi-guide": ["how-to-write-blog-posts-that-rank", "b2b-lead-generation-strategies-2025", "organic-vs-paid-marketing"],

  // Industry guides
  "digital-marketing-for-restaurants-guide": ["local-seo-complete-guide-2025", "social-media-marketing-strategy-2025", "how-to-get-more-google-reviews"],
  "seo-for-dentists-guide": ["local-seo-complete-guide-2025", "how-to-get-more-google-reviews", "healthcare-marketing-guide"],
  "digital-marketing-for-real-estate": ["local-seo-guide-small-business", "lead-generation-cost", "google-ads-vs-seo-which-is-better"],
  "marketing-for-law-firms": ["local-seo-complete-guide-2025", "content-marketing-roi-guide", "how-to-get-more-google-reviews"],
  "gym-marketing-strategies": ["social-media-marketing-strategy-2025", "instagram-reels-marketing-strategy-guide", "local-seo-guide-small-business"],
  "ecommerce-marketing-strategy": ["ecommerce-seo-guide-2025", "shopify-vs-woocommerce", "social-media-content-calendar-2025"],
  "saas-marketing-guide": ["b2b-lead-generation-strategies-2025", "content-marketing-roi-guide", "seo-vs-google-ads-which-invest-first"],
  "healthcare-marketing-guide": ["seo-for-dentists-guide", "local-seo-complete-guide-2025", "how-to-get-more-google-reviews"],

  // Pillar content
  "digital-marketing-guide-small-business-2025": ["how-to-choose-digital-marketing-agency", "digital-marketing-cost-india", "seo-vs-google-ads-which-invest-first"],
  "b2b-lead-generation-strategies-2025": ["lead-generation-cost", "how-to-build-email-list", "content-marketing-roi-guide"],

  // Top 10 branding agencies (hand-written)
  "top-10-branding-agencies-chandigarh": ["branding-cost-small-business", "how-to-choose-branding-agency-checklist", "why-professional-branding-matters"],
};

// ── Industry → Related Blog Posts ───────────────────────────────────────────────
export const industryRelatedBlogs: Record<string, string[]> = {
  "web-design-for-dentists": ["local-seo-guide-small-business", "how-to-get-more-google-reviews", "how-much-does-website-cost"],
  "digital-marketing-for-plumbers": ["local-seo-guide-small-business", "how-to-create-google-business-profile", "how-much-does-seo-cost"],
  "digital-marketing-for-electricians": ["local-seo-guide-small-business", "how-to-create-google-business-profile", "google-ads-vs-seo-which-is-better"],
  "digital-marketing-for-landscapers": ["local-seo-guide-small-business", "social-media-marketing-strategy-2025", "how-much-do-google-ads-cost"],
  "digital-marketing-for-cleaning-companies": ["local-seo-guide-small-business", "how-to-get-more-google-reviews", "lead-generation-cost"],
  "digital-marketing-for-veterinarians": ["local-seo-guide-small-business", "content-marketing-roi-guide", "social-media-marketing-strategy-2025"],
  "web-design-for-cafes": ["branding-mistakes-small-business", "social-media-marketing-strategy-2025", "how-much-does-website-cost"],
  "digital-marketing-for-hair-salons": ["social-media-marketing-strategy-2025", "how-to-get-more-google-reviews", "branding-cost-small-business"],
  "digital-marketing-for-accountants": ["local-seo-guide-small-business", "content-marketing-roi-guide", "how-much-does-seo-cost"],
  "web-design-for-nonprofits": ["how-much-does-website-cost", "content-marketing-roi-guide", "social-media-marketing-cost"],
  "digital-marketing-for-chiropractors": ["local-seo-guide-small-business", "how-to-get-more-google-reviews", "google-ads-vs-seo-which-is-better"],
  "web-design-for-photographers": ["how-much-does-website-cost", "signs-you-need-website-redesign", "social-media-marketing-strategy-2025"],
  "digital-marketing-for-gyms": ["social-media-marketing-strategy-2025", "how-to-run-facebook-ads-beginners", "lead-generation-cost"],
  "digital-marketing-for-yoga-studios": ["social-media-marketing-strategy-2025", "content-marketing-roi-guide", "branding-cost-small-business"],
  "web-design-for-interior-designers": ["how-much-does-website-cost", "branding-mistakes-small-business", "signs-you-need-website-redesign"],
  "digital-marketing-for-pest-control": ["local-seo-guide-small-business", "how-much-do-google-ads-cost", "how-to-create-google-business-profile"],
  "digital-marketing-for-roofing-companies": ["local-seo-guide-small-business", "google-ads-vs-seo-which-is-better", "lead-generation-cost"],
  "web-design-for-real-estate-agents": ["how-much-does-website-cost", "local-seo-guide-small-business", "how-to-get-more-google-reviews"],
  "digital-marketing-for-daycare-centers": ["social-media-marketing-strategy-2025", "how-to-run-facebook-ads-beginners", "local-seo-guide-small-business"],
  "digital-marketing-for-tattoo-shops": ["social-media-marketing-strategy-2025", "branding-cost-small-business", "how-to-get-more-google-reviews"],
  "digital-marketing-for-insurance-agents": ["content-marketing-roi-guide", "how-to-build-email-list", "lead-generation-cost"],
  "web-design-for-wedding-planners": ["how-much-does-website-cost", "social-media-marketing-strategy-2025", "branding-mistakes-small-business"],
  "digital-marketing-for-auto-repair-shops": ["local-seo-guide-small-business", "how-to-create-google-business-profile", "how-much-do-google-ads-cost"],
  "digital-marketing-for-hvac-companies": ["local-seo-guide-small-business", "google-ads-vs-seo-which-is-better", "lead-generation-cost"],
  "web-design-for-florists": ["how-much-does-website-cost", "ecommerce-seo-guide-2025", "social-media-marketing-strategy-2025"],
  "digital-marketing-for-moving-companies": ["local-seo-guide-small-business", "how-much-do-google-ads-cost", "how-to-get-more-google-reviews"],
  "digital-marketing-for-personal-trainers": ["social-media-marketing-strategy-2025", "how-to-build-email-list", "content-marketing-roi-guide"],
  "web-design-for-travel-agencies": ["how-much-does-website-cost", "ecommerce-seo-guide-2025", "social-media-marketing-cost"],
  "digital-marketing-for-spa-and-massage": ["social-media-marketing-strategy-2025", "how-to-get-more-google-reviews", "branding-cost-small-business"],
  "digital-marketing-for-car-dealerships": ["how-much-do-google-ads-cost", "lead-generation-cost", "how-to-get-more-google-reviews"],
  // V2 industry pages
  "real-estate": ["local-seo-guide-small-business", "how-much-does-website-cost", "lead-generation-cost"],
  "healthcare-medical": ["local-seo-guide-small-business", "how-to-get-more-google-reviews", "content-marketing-roi-guide"],
  "restaurants-food": ["social-media-marketing-strategy-2025", "local-seo-guide-small-business", "branding-mistakes-small-business"],
  "e-commerce": ["ecommerce-seo-guide-2025", "shopify-vs-woocommerce", "how-much-does-website-cost"],
  "education-edtech": ["content-marketing-roi-guide", "social-media-marketing-strategy-2025", "how-much-does-seo-cost"],
  "legal-law-firms": ["local-seo-guide-small-business", "content-marketing-roi-guide", "how-much-does-seo-cost"],
  "fitness-wellness": ["social-media-marketing-strategy-2025", "how-to-run-facebook-ads-beginners", "branding-cost-small-business"],
  "construction-home-services": ["local-seo-guide-small-business", "how-much-do-google-ads-cost", "lead-generation-cost"],
  "saas-technology": ["content-marketing-roi-guide", "how-much-does-seo-cost", "ecommerce-seo-guide-2025"],
};
