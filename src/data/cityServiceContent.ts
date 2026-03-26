export interface CityServiceContent {
  // Hero enrichment
  h1?: string;
  tagline?: string;
  heroBadge?: string;
  heroDescription?: string;

  // Meta
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];

  // Why Choose section (replaces generic 4 items)
  whyChoose?: { title: string; description: string }[];

  // Process steps override
  processSteps?: { number: string; title: string; description: string }[];

  // Local content paragraphs
  localContent?: string[];

  // Market insight card
  marketInsight?: {
    stat: string;
    headline: string;
    body: string;
  };

  // Custom FAQs (replaces generated FAQs)
  faqs?: { q: string; a: string }[];

  // Cross-links override
  crossLinks?: { label: string; slug: string }[];

  // Industries override
  industries?: string[];
}

// Shared enrichment data for all Chandigarh entries
const chandigarhProcessSteps = [
  { number: "01", title: "Discovery", description: "We dive deep into your business, competitors, and the Chandigarh market to understand your unique position and goals." },
  { number: "02", title: "Strategy", description: "Our team crafts a tailored strategy backed by data, local insights, and industry best practices for maximum impact." },
  { number: "03", title: "Execution", description: "We bring the strategy to life with precision \u2014 every deliverable crafted to the highest standards by our Chandigarh experts." },
  { number: "04", title: "Results", description: "We track, measure, and optimize relentlessly \u2014 delivering transparent reports and continuous improvements." },
];

const chandigarhCrossLinks = [
  { label: "Delhi", slug: "delhi" },
  { label: "Mumbai", slug: "mumbai" },
  { label: "Punjab", slug: "punjab" },
  { label: "Ludhiana", slug: "ludhiana" },
  { label: "Auckland", slug: "auckland" },
];

const chandigarhIndustries = [
  "Real Estate", "Healthcare", "Education", "IT / Tech", "Restaurants",
  "Fashion", "Automotive", "E-commerce", "Hospitality", "Finance",
  "Fitness", "Legal",
];

const chandigarhMarketInsight = {
  stat: "67%",
  headline: "of Chandigarh businesses have increased their digital marketing budgets in the past year",
  body: "With over 1.2 million internet users in the tricity and a rapidly growing startup ecosystem anchored by IT Park and Mohali\u2019s Phase 8B, Chandigarh presents massive opportunities for businesses investing in digital marketing. The city\u2019s young, tech-savvy population and high smartphone penetration make it an ideal market for forward-thinking brands.",
};

const chandigarhHeroBadge = "Chandigarh\u2019s Trusted Agency";

// Key format: "serviceSlug:citySlug" e.g. "branding:chandigarh"
const cityServiceContentMap: Record<string, CityServiceContent> = {
  "branding:chandigarh": {
    h1: "Best Branding Agency in Chandigarh",
    tagline: "Build a brand Chandigarh remembers.",
    heroBadge: chandigarhHeroBadge,
    heroDescription: "Looking for a branding agency in Chandigarh? TML has helped 500+ businesses in Chandigarh, Mohali, and Panchkula build powerful brand identities that stand out. From logo design to complete brand systems \u2014 we create brands that your customers remember.",
    metaTitle: "Best Branding Agency in Chandigarh | TML Agency",
    metaDescription: "TML is Chandigarh\u2019s top branding agency offering logo design, brand identity, brand strategy, and guidelines. 500+ brands built. Get a free consultation.",
    keywords: ["branding agency chandigarh", "logo design chandigarh", "brand identity chandigarh", "branding company chandigarh"],
    whyChoose: [
      { title: "Deep Local Understanding", description: "We understand Chandigarh\u2019s market dynamics, consumer behavior, and what resonates with the tricity audience." },
      { title: "500+ Brands Built", description: "From startups in IT Park to established businesses in Sector 17 \u2014 we\u2019ve branded them all." },
      { title: "Complete Brand Systems", description: "Logo, visual identity, brand guidelines, stationery, messaging \u2014 everything under one roof." },
      { title: "Strategy-First Approach", description: "We don\u2019t just design logos \u2014 we build strategic brand foundations that drive business growth." },
    ],
    processSteps: chandigarhProcessSteps,
    localContent: [
      "As the leading branding agency in Chandigarh, TML has been transforming businesses across the tricity since 2015. Whether you\u2019re a startup in IT Park Chandigarh, a restaurant in Sector 17, or an established brand in Mohali \u2014 we create brand identities that capture your essence and connect with your target audience.",
      "Our Chandigarh-based branding team combines deep market research with creative excellence. We understand what makes tricity consumers tick, and we use that insight to build brands that don\u2019t just look good \u2014 they drive real business results.",
      "From complete rebranding projects to new brand launches, our portfolio includes work for real estate companies, restaurants, tech startups, fashion brands, healthcare providers, and more across Chandigarh, Mohali, and Panchkula.",
    ],
    marketInsight: chandigarhMarketInsight,
    faqs: [
      { q: "How much does branding cost in Chandigarh?", a: "Our branding packages start from \u20B925,000 for basic logo design to \u20B92,00,000+ for complete brand identity systems. We offer customized packages based on your needs." },
      { q: "How long does a branding project take?", a: "A typical branding project takes 3-6 weeks from initial consultation to final delivery, depending on the scope." },
      { q: "Can I visit your office in Chandigarh?", a: "Absolutely! We welcome in-person meetings at our Chandigarh office. Book a visit through our contact page." },
      { q: "Do you work with startups?", a: "Yes, we love working with Chandigarh startups! We offer startup-friendly packages that grow with your business." },
    ],
    crossLinks: chandigarhCrossLinks,
    industries: chandigarhIndustries,
  },

  "google-ads:chandigarh": {
    h1: "Best Google Ads Agency in Chandigarh",
    tagline: "Maximize ROI with Chandigarh\u2019s top Google Ads experts.",
    heroBadge: chandigarhHeroBadge,
    heroDescription: "TML is a certified Google Partner agency based in Chandigarh. We manage \u20B95Cr+ in ad spend for businesses across the tricity, delivering an average 4.2x ROAS. From search and display to shopping and Performance Max \u2014 we maximize every rupee.",
    metaTitle: "Best Google Ads Agency in Chandigarh | TML Agency \u2014 Certified Partner",
    metaDescription: "TML is a Google Partner agency in Chandigarh offering expert Google Ads management. \u20B95Cr+ ad spend managed, 4.2x avg ROAS. Get a free audit today.",
    keywords: ["google ads agency chandigarh", "ppc company chandigarh", "google ads management chandigarh", "sem agency chandigarh"],
    whyChoose: [
      { title: "Google Partner Certified", description: "We meet Google\u2019s highest standards \u2014 your campaigns are managed by certified professionals." },
      { title: "\u20B95Cr+ Ad Spend Managed", description: "Proven experience managing large budgets for Chandigarh businesses with consistent ROI." },
      { title: "Local Keyword Expertise", description: "We know which keywords convert for Chandigarh businesses and how to target the tricity audience." },
      { title: "Transparent Reporting", description: "Real-time dashboards showing exactly where your money goes and what results it generates." },
    ],
    processSteps: chandigarhProcessSteps,
    localContent: [
      "As the top Google Ads agency in Chandigarh, TML has managed campaigns for businesses of all sizes \u2014 from local restaurants and clinics to large real estate developers and e-commerce companies across the tricity.",
      "Our Chandigarh PPC team specializes in hyper-local targeting for businesses that want to dominate search results in Chandigarh, Mohali, Panchkula, and surrounding areas. We combine local market knowledge with advanced bidding strategies.",
      "Whether you need Google Search ads to capture high-intent customers in Chandigarh or Display campaigns for brand awareness across Punjab \u2014 our certified team delivers results that exceed expectations.",
    ],
    marketInsight: chandigarhMarketInsight,
    faqs: [
      { q: "What\u2019s the minimum Google Ads budget?", a: "We recommend a minimum of \u20B930,000/month for meaningful results in Chandigarh. We can discuss optimal budgets for your specific industry." },
      { q: "Are you a certified Google Partner?", a: "Yes, TML is an officially certified Google Partner \u2014 validated by Google for our expertise and results." },
      { q: "How quickly will I see results?", a: "You can start getting clicks within 24 hours. Meaningful conversion data typically develops within 2-4 weeks." },
      { q: "Do you offer free audits?", a: "Yes! We offer a free Google Ads audit for Chandigarh businesses to identify quick wins and optimization opportunities." },
    ],
    crossLinks: chandigarhCrossLinks,
    industries: chandigarhIndustries,
  },

  "seo:chandigarh": {
    h1: "Best SEO Company in Chandigarh",
    tagline: "Dominate Google rankings in Chandigarh.",
    heroBadge: chandigarhHeroBadge,
    heroDescription: "Want to rank #1 on Google for your Chandigarh business? TML delivers proven SEO results \u2014 280% average traffic increase and 500+ first page rankings. From local SEO to technical audits, we help tricity businesses dominate search.",
    metaTitle: "Best SEO Company in Chandigarh | TML Agency \u2014 Proven Results",
    metaDescription: "TML is Chandigarh\u2019s leading SEO company. 280% avg traffic increase, 500+ first page rankings. Get a free SEO audit for your Chandigarh business.",
    keywords: ["seo company chandigarh", "seo services chandigarh", "seo agency chandigarh", "best seo chandigarh"],
    whyChoose: [
      { title: "500+ First Page Rankings", description: "Proven track record of getting Chandigarh businesses to the first page of Google for competitive keywords." },
      { title: "Local SEO Experts", description: "Google Business Profile optimization, local citations, and map pack strategies for tricity visibility." },
      { title: "White-Hat Only", description: "We use only ethical, Google-approved SEO techniques that deliver sustainable, long-term results." },
      { title: "Complete SEO Solutions", description: "Technical SEO, on-page optimization, content strategy, link building \u2014 all under one roof." },
    ],
    processSteps: chandigarhProcessSteps,
    localContent: [
      "As the leading SEO company in Chandigarh, TML helps businesses rank higher on Google for the keywords that matter most. Whether you\u2019re targeting \u2018best restaurant in Chandigarh\u2019 or \u2018IT company in Mohali\u2019 \u2014 our SEO strategies deliver consistent results.",
      "Our local SEO expertise is particularly valuable for Chandigarh businesses. We optimize your Google Business Profile, build local citations across relevant directories, manage customer reviews, and ensure you dominate the local map pack for your target areas.",
      "We\u2019ve helped businesses across every major sector in Chandigarh improve their organic visibility \u2014 from healthcare practices in Sector 22 to tech companies in IT Park, educational institutions in Mohali, and real estate developers across the tricity.",
    ],
    marketInsight: chandigarhMarketInsight,
    faqs: [
      { q: "How long does SEO take in Chandigarh?", a: "You\u2019ll see initial improvements in 3-4 months. Significant results typically appear within 6-8 months, depending on competition level." },
      { q: "Do you offer local SEO for Chandigarh?", a: "Yes, local SEO is our specialty! We optimize for Chandigarh, Mohali, Panchkula, and can target specific sectors." },
      { q: "What\u2019s included in your SEO services?", a: "Technical audits, on-page optimization, content creation, link building, local SEO, monthly reporting, and strategy calls." },
      { q: "How much does SEO cost in Chandigarh?", a: "Our SEO packages for Chandigarh businesses start from \u20B915,000/month. We recommend a custom quote based on your goals." },
    ],
    crossLinks: chandigarhCrossLinks,
    industries: chandigarhIndustries,
  },

  "website-development:chandigarh": {
    h1: "Best Website Development Company in Chandigarh",
    tagline: "Websites that put Chandigarh businesses online.",
    heroBadge: chandigarhHeroBadge,
    heroDescription: "TML is Chandigarh\u2019s premier web development company with 300+ websites delivered. From custom business websites to e-commerce platforms, we build fast, beautiful, and conversion-optimized digital experiences for tricity businesses.",
    metaTitle: "Best Website Development Company in Chandigarh | TML Agency",
    metaDescription: "TML is Chandigarh\u2019s top web development company. 300+ websites delivered. Custom design, e-commerce, CMS. Fast, responsive, SEO-optimized. Get a quote.",
    keywords: ["website development chandigarh", "web design chandigarh", "web development company chandigarh", "ecommerce development chandigarh"],
    whyChoose: [
      { title: "300+ Websites Delivered", description: "From local startups to enterprise clients \u2014 we\u2019ve built websites for every industry in Chandigarh." },
      { title: "Mobile-First Design", description: "Every website we build is fully responsive and optimized for the way Chandigarh customers browse." },
      { title: "SEO Built-In", description: "Our websites come SEO-optimized from day one so you start ranking faster on Google." },
      { title: "Ongoing Support", description: "Local support from our Chandigarh office \u2014 we\u2019re always just a call away for updates and fixes." },
    ],
    processSteps: chandigarhProcessSteps,
    localContent: [
      "Looking for a web development company in Chandigarh? TML has built 300+ websites for businesses across the tricity. From corporate websites for companies in Industrial Area to e-commerce stores for Sector 17 retailers \u2014 we deliver digital experiences that convert.",
      "Our Chandigarh web development team specializes in modern technologies like React, Next.js, and WordPress. We build websites that are not only visually stunning but also lightning-fast, mobile-responsive, and optimized for search engines.",
      "We understand the unique needs of Chandigarh businesses \u2014 whether it\u2019s a multi-language site for a tricity audience, integration with local payment gateways, or a website that showcases your business to clients across North India.",
    ],
    marketInsight: chandigarhMarketInsight,
    faqs: [
      { q: "How much does a website cost in Chandigarh?", a: "Basic websites start from \u20B925,000, business websites from \u20B950,000, and e-commerce from \u20B91,00,000+. We offer custom quotes." },
      { q: "How long does website development take?", a: "A standard website takes 3-4 weeks. E-commerce and custom web applications may take 6-10 weeks." },
      { q: "Do you offer website maintenance?", a: "Yes, we offer monthly maintenance plans including updates, security patches, backups, and content changes." },
      { q: "Can I visit your office to discuss my project?", a: "Absolutely! Book an appointment and visit our Chandigarh office for a face-to-face consultation." },
    ],
    crossLinks: chandigarhCrossLinks,
    industries: chandigarhIndustries,
  },

  "social-media:chandigarh": {
    h1: "Best Social Media Marketing Agency in Chandigarh",
    tagline: "Grow your Chandigarh brand on social media.",
    heroBadge: chandigarhHeroBadge,
    heroDescription: "TML is Chandigarh\u2019s most trusted social media marketing agency. We\u2019ve grown 2M+ followers for 100+ brands across the tricity. From content creation to paid ads \u2014 we help Chandigarh businesses build engaged communities on social media.",
    metaTitle: "Best Social Media Marketing Agency in Chandigarh | TML Agency",
    metaDescription: "TML is Chandigarh\u2019s leading social media agency. Instagram, Facebook, LinkedIn management. 2M+ followers grown. Content creation, ads & strategy.",
    keywords: ["social media marketing chandigarh", "social media agency chandigarh", "instagram marketing chandigarh", "social media management chandigarh"],
    whyChoose: [
      { title: "2M+ Followers Grown", description: "Proven results growing audiences for Chandigarh brands across Instagram, Facebook, and LinkedIn." },
      { title: "Local Content Expertise", description: "We create content that resonates with the Chandigarh audience \u2014 cultural nuances, local trends, and regional relevance." },
      { title: "Full-Service Management", description: "Content creation, posting, community management, paid ads, and reporting \u2014 all handled by our team." },
      { title: "Real Engagement", description: "We focus on authentic engagement and community building, not vanity metrics." },
    ],
    processSteps: chandigarhProcessSteps,
    localContent: [
      "As Chandigarh\u2019s top social media marketing agency, TML manages social media for brands across restaurants, fashion boutiques, tech startups, real estate companies, and more throughout the tricity.",
      "Our Chandigarh social media team creates content that captures the local vibe \u2014 from Sector 17 food reels to IT Park thought leadership content. We understand what makes Chandigarh\u2019s audience engage, share, and convert.",
      "Whether you need Instagram management for your Chandigarh cafe, LinkedIn marketing for your Mohali B2B company, or Facebook ads targeting the tricity \u2014 we deliver results that grow your bottom line.",
    ],
    marketInsight: chandigarhMarketInsight,
    faqs: [
      { q: "Which platforms do you manage?", a: "We manage Instagram, Facebook, LinkedIn, Twitter/X, and YouTube for Chandigarh businesses." },
      { q: "How much does social media management cost?", a: "Our packages for Chandigarh businesses start from \u20B915,000/month. Custom packages available based on platforms and posting frequency." },
      { q: "Do you create all the content?", a: "Yes! Our in-house team creates all graphics, videos, captions, and stories for your brand." },
      { q: "Can you handle influencer marketing locally?", a: "Absolutely \u2014 we have strong relationships with Chandigarh influencers and can run targeted local campaigns." },
    ],
    crossLinks: chandigarhCrossLinks,
    industries: chandigarhIndustries,
  },

  "ai-influencer-management:chandigarh": {
    h1: "AI Influencer Management Agency in Chandigarh",
    tagline: "The future of influence, powered from Chandigarh.",
    heroBadge: chandigarhHeroBadge,
    heroDescription: "TML is pioneering AI influencer management from Chandigarh. We create hyper-realistic virtual brand ambassadors that represent your business 24/7 \u2014 no scheduling conflicts, always on-brand, unlimited creative potential.",
    metaTitle: "AI Influencer Management Agency in Chandigarh | TML Agency",
    metaDescription: "TML is Chandigarh\u2019s first AI influencer management agency. We create and manage virtual influencers for brands. 25+ AI personas, 500K+ followers.",
    keywords: ["ai influencer chandigarh", "virtual influencer agency chandigarh", "ai marketing chandigarh"],
    whyChoose: [
      { title: "First in Chandigarh", description: "We\u2019re the tricity\u2019s first agency offering AI influencer creation and management services." },
      { title: "Cutting-Edge Technology", description: "We use the latest generative AI tools to create virtual personas that are nearly indistinguishable from real influencers." },
      { title: "Cost-Effective", description: "AI influencers cost a fraction of real influencer partnerships with 24/7 availability and full brand control." },
      { title: "Full Campaign Management", description: "From persona creation to content strategy, posting, and analytics \u2014 we handle everything." },
    ],
    processSteps: chandigarhProcessSteps,
    localContent: [
      "As Chandigarh\u2019s first AI influencer management agency, TML is bringing the future of digital marketing to the tricity. Whether you\u2019re a fashion brand in Elante Mall or a tech company in IT Park \u2014 an AI influencer can revolutionize your marketing.",
      "Our Chandigarh team creates custom AI personas tailored to your brand and target audience. These virtual influencers can represent your business across Instagram, TikTok, and YouTube with consistent messaging and unlimited content possibilities.",
      "Early adopters in Chandigarh are already seeing incredible results \u2014 higher engagement rates, lower cost per acquisition, and complete brand control. Let us help you stay ahead of the curve.",
    ],
    marketInsight: chandigarhMarketInsight,
    faqs: [
      { q: "What is an AI influencer?", a: "An AI influencer is a virtual persona powered by AI that acts as your brand ambassador on social media \u2014 always available, always on-brand." },
      { q: "Is this new for Chandigarh?", a: "Yes! TML is pioneering AI influencer services in Chandigarh. We\u2019re the first agency in the tricity offering this service." },
      { q: "How realistic are AI influencers?", a: "Modern AI creates hyper-realistic personas that are nearly indistinguishable from real people in photos and videos." },
      { q: "What does it cost?", a: "AI influencer packages start from \u20B930,000/month \u2014 significantly cheaper than traditional influencer partnerships." },
    ],
    crossLinks: chandigarhCrossLinks,
    industries: chandigarhIndustries,
  },

  "lead-generation:chandigarh": {
    h1: "Best Lead Generation Company in Chandigarh",
    tagline: "Fill your pipeline with Chandigarh leads.",
    heroBadge: chandigarhHeroBadge,
    heroDescription: "Need more customers for your Chandigarh business? TML builds lead generation systems that consistently deliver qualified prospects. 50K+ leads generated for tricity businesses through landing pages, paid ads, email marketing, and CRM automation.",
    metaTitle: "Best Lead Generation Company in Chandigarh | TML Agency",
    metaDescription: "TML generates high-quality leads for Chandigarh businesses. 50K+ leads generated, 12% conversion rate. Landing pages, ads & automation. Free consultation.",
    keywords: ["lead generation chandigarh", "lead generation company chandigarh", "leads for business chandigarh"],
    whyChoose: [
      { title: "50K+ Leads Generated", description: "Proven track record delivering high-quality leads for Chandigarh businesses across industries." },
      { title: "Local Targeting", description: "Hyper-targeted campaigns reaching customers specifically in Chandigarh, Mohali, and Panchkula." },
      { title: "Full-Funnel Approach", description: "Landing pages, ad campaigns, email nurturing, and CRM integration \u2014 the complete system." },
      { title: "Cost-Effective Results", description: "Our average CPL is 40% lower than industry benchmarks for Chandigarh campaigns." },
    ],
    processSteps: chandigarhProcessSteps,
    localContent: [
      "TML is Chandigarh\u2019s go-to lead generation company for businesses that need a consistent flow of qualified prospects. From real estate developers in Mohali to coaching institutes in Sector 34 \u2014 we build systems that deliver.",
      "Our local expertise means we know which channels, messaging, and targeting strategies work best for the Chandigarh market. We combine Google Ads, Facebook Ads, landing pages, and email automation to build lead generation machines.",
      "Whether you need leads for your Chandigarh real estate project, education institute, healthcare practice, or B2B service \u2014 our proven frameworks deliver results within weeks, not months.",
    ],
    marketInsight: chandigarhMarketInsight,
    faqs: [
      { q: "What industries do you generate leads for?", a: "We generate leads for real estate, education, healthcare, B2B services, hospitality, and more across Chandigarh." },
      { q: "How much does lead generation cost?", a: "Packages start from \u20B920,000/month plus ad spend. CPL varies by industry \u2014 typically \u20B950-500 per lead." },
      { q: "How fast will I get leads?", a: "Most Chandigarh campaigns start generating leads within the first week of launch." },
      { q: "Do you guarantee lead quality?", a: "We use qualification workflows and lead scoring to ensure you receive only high-quality, relevant prospects." },
    ],
    crossLinks: chandigarhCrossLinks,
    industries: chandigarhIndustries,
  },

  "music-release:chandigarh": {
    h1: "Best Music Promotion Agency in Chandigarh",
    tagline: "Launch your music from the heart of Punjab.",
    heroBadge: chandigarhHeroBadge,
    heroDescription: "Chandigarh is the heart of Punjabi music \u2014 and TML is your partner to take it global. We\u2019ve helped release 500+ songs, generating 50M+ streams. From distribution to playlist pitching to social media campaigns \u2014 we handle the business so you can create.",
    metaTitle: "Best Music Promotion Agency in Chandigarh | TML Agency",
    metaDescription: "TML helps Chandigarh artists release and promote music across Spotify, YouTube, JioSaavn. 500+ songs released, 50M+ streams. Distribution, playlists & PR.",
    keywords: ["music promotion chandigarh", "music release agency chandigarh", "music marketing chandigarh", "punjabi music promotion"],
    whyChoose: [
      { title: "Punjabi Music Expertise", description: "Based in the epicenter of Punjabi music, we understand the industry, audience, and distribution landscape." },
      { title: "500+ Songs Released", description: "Proven experience releasing music across Spotify, Apple Music, YouTube Music, JioSaavn, and 150+ platforms." },
      { title: "Playlist Connections", description: "Strong relationships with playlist curators for Punjabi, Bollywood, and indie music genres." },
      { title: "Complete Services", description: "Distribution, promotion, music video production, social media campaigns \u2014 everything under one roof." },
    ],
    processSteps: chandigarhProcessSteps,
    localContent: [
      "Chandigarh is the capital of Punjabi music \u2014 and TML is proud to be the tricity\u2019s leading music promotion agency. We\u2019ve helped local artists, labels, and independent musicians reach millions of listeners worldwide.",
      "From Mohali studios to global streaming platforms, we handle the complete music release lifecycle. Our team understands the Punjabi music industry inside and out \u2014 from trending genres to audience preferences to the right timing for releases.",
      "Whether you\u2019re an upcoming Chandigarh rapper, an established Punjabi singer, or an indie artist \u2014 our proven promotion strategies and industry connections can take your music to the next level.",
    ],
    marketInsight: chandigarhMarketInsight,
    faqs: [
      { q: "Do you work with independent artists?", a: "Absolutely! We love helping Chandigarh\u2019s independent artists reach wider audiences. We have packages for every budget." },
      { q: "Can you help with Punjabi music specifically?", a: "Yes, Punjabi music is our specialty! We have deep expertise in the genre and strong connections with Punjabi music curators." },
      { q: "Do you offer music video production?", a: "Yes, we handle everything from concept to filming to editing, right here in Chandigarh." },
      { q: "How far in advance should I plan?", a: "We recommend starting 6-8 weeks before release for maximum impact." },
    ],
    crossLinks: chandigarhCrossLinks,
    industries: chandigarhIndustries,
  },

  "video-editing:chandigarh": {
    h1: "Best Video Editing Company in Chandigarh",
    tagline: "Professional video production, Chandigarh-based.",
    heroBadge: chandigarhHeroBadge,
    heroDescription: "TML is Chandigarh\u2019s premier video editing and production company. 2000+ videos produced for tricity businesses \u2014 from Instagram reels and corporate films to music videos and ad campaigns. Professional quality, fast turnaround.",
    metaTitle: "Best Video Editing Company in Chandigarh | TML Agency",
    metaDescription: "TML offers professional video editing in Chandigarh. 2000+ videos produced. Reels, corporate films, ads, music videos. 48hr turnaround. Get a quote.",
    keywords: ["video editing chandigarh", "video production chandigarh", "video editing company chandigarh", "corporate video chandigarh"],
    whyChoose: [
      { title: "2000+ Videos Produced", description: "Massive experience producing content for every format \u2014 social media, corporate, advertising, and entertainment." },
      { title: "48-Hour Turnaround", description: "Fast delivery for time-sensitive content without compromising quality." },
      { title: "Local Production Team", description: "Our Chandigarh-based editors and videographers are available for on-ground shoots across the tricity." },
      { title: "All Formats & Platforms", description: "Optimized output for Instagram, YouTube, LinkedIn, TV, and any other platform you need." },
    ],
    processSteps: chandigarhProcessSteps,
    localContent: [
      "TML is Chandigarh\u2019s most trusted video editing company, producing content for brands, artists, and businesses across the tricity. From quick social media reels to cinematic corporate films \u2014 we deliver professional-quality video content.",
      "Our local production team is available for on-ground video shoots across Chandigarh, Mohali, and Panchkula. Whether you need a product showcase at Elante Mall or a corporate video at your IT Park office \u2014 we handle production and post-production.",
      "We specialize in content that performs \u2014 every edit is optimized for the platform it\u2019s intended for, whether that\u2019s vertical reels for Instagram, widescreen for YouTube, or square for LinkedIn.",
    ],
    marketInsight: chandigarhMarketInsight,
    faqs: [
      { q: "Do you offer filming services in Chandigarh?", a: "Yes! Our production team handles filming across Chandigarh, Mohali, and Panchkula with professional equipment." },
      { q: "What\u2019s the cost of video editing?", a: "Short-form videos from \u20B92,000/video, corporate videos from \u20B915,000. Custom quotes for larger projects." },
      { q: "How fast can you deliver?", a: "Standard turnaround is 48 hours for short-form content. Same-day delivery available for urgent requests." },
      { q: "Can you edit music videos?", a: "Absolutely \u2014 music video editing is one of our specialties, given Chandigarh\u2019s vibrant music scene." },
    ],
    crossLinks: chandigarhCrossLinks,
    industries: chandigarhIndustries,
  },

  "branding-packaging:chandigarh": {
    h1: "Best Packaging Design Agency in Chandigarh",
    tagline: "Packaging that sells off Chandigarh shelves.",
    heroBadge: chandigarhHeroBadge,
    heroDescription: "TML is Chandigarh\u2019s top packaging design agency with 500+ packages designed for brands across food, beauty, FMCG, and more. We create packaging that tells your brand story and drives purchase decisions at the point of sale.",
    metaTitle: "Best Packaging Design Agency in Chandigarh | TML Agency",
    metaDescription: "TML offers professional packaging design in Chandigarh. 500+ packages designed for food, beauty, FMCG. From concept to print. Get a free consultation.",
    keywords: ["packaging design chandigarh", "product packaging chandigarh", "label design chandigarh", "packaging company chandigarh"],
    whyChoose: [
      { title: "500+ Packages Designed", description: "Extensive experience designing packaging for products sold in Chandigarh\u2019s retail market and beyond." },
      { title: "Print Partner Network", description: "Strong relationships with Chandigarh\u2019s best printing houses for quality production at competitive prices." },
      { title: "Retail Understanding", description: "We know what works on Chandigarh shelves \u2014 design that stands out in Sector 17 stores and Elante Mall alike." },
      { title: "End-to-End Service", description: "From concept and design to mockups, prototyping, and print coordination." },
    ],
    processSteps: chandigarhProcessSteps,
    localContent: [
      "As Chandigarh\u2019s leading packaging design agency, TML has created packaging for food brands, cosmetics companies, FMCG products, and specialty items sold across the tricity and beyond.",
      "Our design team works closely with Chandigarh\u2019s top printing houses to ensure your packaging is produced to the highest standards at competitive prices. We handle everything from initial concept to final print coordination.",
      "Whether you\u2019re launching a new food product at Chandigarh\u2019s local markets, a cosmetics line for Elante Mall, or an FMCG brand for national distribution \u2014 our packaging designs are crafted to sell.",
    ],
    marketInsight: chandigarhMarketInsight,
    faqs: [
      { q: "Do you work with local printers?", a: "Yes, we have established relationships with top printing houses in Chandigarh for quality production at competitive rates." },
      { q: "Can you design food packaging?", a: "Absolutely \u2014 food packaging is one of our core specialties, including all regulatory compliance requirements." },
      { q: "How many design options do I get?", a: "We typically present 3 initial concepts, then refine the chosen direction through 2-3 rounds of revision." },
      { q: "Do you handle the printing too?", a: "We coordinate with printers and oversee production quality. Printing costs are billed separately." },
    ],
    crossLinks: chandigarhCrossLinks,
    industries: chandigarhIndustries,
  },

  "graphic-design:chandigarh": {
    h1: "Best Graphic Design Agency in Chandigarh",
    tagline: "Creative design for Chandigarh brands.",
    heroBadge: chandigarhHeroBadge,
    heroDescription: "TML is Chandigarh\u2019s most prolific graphic design agency with 10K+ designs created for 500+ brands. From social media creatives to print materials, presentations to ad campaigns \u2014 we deliver designs that communicate, engage, and convert.",
    metaTitle: "Best Graphic Design Agency in Chandigarh | TML Agency",
    metaDescription: "TML is Chandigarh\u2019s top graphic design agency. 10K+ designs created. Social media, print, presentations, ads. Fast turnaround. Get a quote.",
    keywords: ["graphic design chandigarh", "graphic design agency chandigarh", "design company chandigarh", "creative agency chandigarh"],
    whyChoose: [
      { title: "10K+ Designs Created", description: "Massive portfolio covering every type of design \u2014 social media, print, digital, packaging, and more." },
      { title: "Fast Turnaround", description: "24-48 hour delivery for standard designs. Same-day available for urgent requests." },
      { title: "Subscription Plans", description: "Monthly design retainers perfect for Chandigarh businesses that need regular creative output." },
      { title: "Multi-Format Delivery", description: "Every design delivered in all formats needed \u2014 digital, print, social, presentation." },
    ],
    processSteps: chandigarhProcessSteps,
    localContent: [
      "As Chandigarh\u2019s top graphic design agency, TML creates visual content for brands across every industry in the tricity. From daily social media posts for restaurants to corporate presentations for IT companies \u2014 we design it all.",
      "Our Chandigarh design team combines creativity with strategy. Every design is crafted to serve a purpose \u2014 whether that\u2019s driving engagement on Instagram, converting visitors on a landing page, or impressing investors in a pitch deck.",
      "We offer flexible plans for Chandigarh businesses \u2014 from one-off projects to monthly design retainers that give you unlimited design requests with guaranteed fast turnaround.",
    ],
    marketInsight: chandigarhMarketInsight,
    faqs: [
      { q: "Do you offer monthly design packages?", a: "Yes! Our monthly retainers start from \u20B915,000/month with a set number of design requests and 24-48hr turnaround." },
      { q: "What types of design do you handle?", a: "Social media graphics, brochures, flyers, posters, presentations, business cards, ads, infographics, and more." },
      { q: "What\u2019s your turnaround time?", a: "Standard designs in 24-48 hours. Complex projects are scoped with custom timelines." },
      { q: "Can I visit your office for design briefs?", a: "Yes! In-person briefs are welcome at our Chandigarh office for better creative collaboration." },
    ],
    crossLinks: chandigarhCrossLinks,
    industries: chandigarhIndustries,
  },
};

export function getCityServiceContent(serviceSlug: string, citySlug: string): CityServiceContent | undefined {
  return cityServiceContentMap[`${serviceSlug}:${citySlug}`];
}

export function getAllEnrichedSlugs(): string[] {
  return Object.keys(cityServiceContentMap);
}

export default cityServiceContentMap;
