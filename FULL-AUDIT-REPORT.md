# TML Agency Full SEO Audit Report
**URL:** https://townmedialabs.ca/  
**Date:** 2026-04-04  
**Business Type:** Agency (Digital Marketing)  
**Location:** Edmonton, AB, Canada  

---

## SEO Health Score: 38/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 30/100 | 6.6 |
| Content Quality | 23% | 40/100 | 9.2 |
| On-Page SEO | 20% | 25/100 | 5.0 |
| Schema / Structured Data | 10% | 45/100 | 4.5 |
| Performance (CWV) | 10% | 55/100 | 5.5 |
| AI Search Readiness | 10% | 50/100 | 5.0 |
| Images | 5% | 45/100 | 2.3 |
| **Total** | **100%** | | **38.1** |

---

## Executive Summary

### Top 5 Critical Issues
1. **Wrong domain in all canonical URLs & OG tags** — Code uses `townmedialabs.com` but site is `townmedialabs.ca`. Every page has incorrect canonicals.
2. **All 1,107 location pages use Edmonton geo coordinates** — Schema shows lat 53.5461 / lng -113.4937 for Toronto, Vancouver, Calgary, etc.
3. **Edmonton postal code (T5G 2K1) in ALL location schemas** — ProfessionalService schema for Toronto/Vancouver/etc. all have Edmonton's postal code.
4. **Indian locale & references left in codebase** — OG locale set to `en_IN`, Chandigarh references in service data, ad spend shown in Indian Rupees on Canadian pages, locations.ts starts with Delhi/Mumbai/Punjab.
5. **Toronto FAQ falsely claims "headquartered in Toronto"** — Misleading; actual HQ is Edmonton.

### Top 5 Quick Wins
1. Fix `siteUrl` in layout.tsx from `.com` to `.ca` (fixes all canonical URLs)
2. Fix OG locale from `en_IN` to `en_CA`
3. Add correct geo coordinates per city in locations.ts
4. Add meta descriptions to all location pages (currently missing from rendered HTML)
5. Fix "Best X in Y" title pattern to professional titles

---

## 1. Technical SEO (Score: 30/100)

### CRITICAL Issues

#### 1.1 Wrong Canonical Domain
- **File:** `src/app/layout.tsx:27` — `siteUrl` is `"https://townmedialabs.com"` but actual domain is `townmedialabs.ca`
- **Impact:** Every page's canonical URL, OG URL, and sitemap reference points to wrong domain
- **File:** `src/app/services/seo-in-calgary/page.tsx:13` — `canonical: "https://townmedialabs.com/services/seo-in-calgary"`
- **Affects:** All 1,129+ pages. Google may treat .com and .ca as different sites, splitting authority.

#### 1.2 Wrong OG Locale
- **File:** `src/app/services/seo-in-calgary/page.tsx:20` — `locale: "en_IN"` (Indian English)
- **Should be:** `"en_CA"` for a Canadian agency
- **Affects:** All location pages with hardcoded metadata

#### 1.3 Indian Market Data Leaking Into Canadian Site
- **File:** `src/data/locations.ts` — Starts with Delhi, Mumbai, Punjab (Indian cities)
- **File:** `src/data/servicePages.ts:46` — "Our branding experts in Chandigarh"
- **File:** `src/data/servicePages.ts:49` — "TML Agency in Chandigarh helps businesses"
- **Live page:** Google Ads Toronto page shows ad spend in "₹5Cr+" (Indian Rupees) instead of CAD
- **Impact:** Destroys geographic trust signals for Canadian market targeting

### HIGH Issues

#### 1.4 Robots.txt — Adequate
- Allows all crawlers, blocks /404 and *.json
- References sitemap correctly
- **Missing:** No crawl-delay (may want one with 1,100+ pages)

#### 1.5 No llms.txt File
- No `llms.txt` or `.well-known/llms.txt` found
- Missing opportunity for AI search engines

#### 1.6 Missing Security Headers
- No CSP (Content-Security-Policy) detected
- No X-Frame-Options detected
- HSTS status unknown

### MEDIUM Issues

#### 1.7 No lang Attribute
- HTML lang attribute not confirmed on pages
- Should be `lang="en-CA"` or at minimum `lang="en"`

#### 1.8 No IndexNow Support
- No IndexNow API key or implementation detected

---

## 2. Content Quality (Score: 40/100)

### CRITICAL Issues

#### 2.1 Location Page Content Uniqueness — Below Threshold
**1,107 location pages** exceeds the 50-page quality gate (HARD STOP threshold).

**Calgary vs Toronto SEO page comparison:**

| Element | Calgary | Toronto | Same? |
|---------|---------|---------|-------|
| H1 | "Best SEO Agency in Calgary" | "Best SEO in Toronto" | Template |
| Section structure | Why/Process/Offer/Expertise/Local/Pricing/Industries/FAQ | Identical structure | Template |
| Process steps | Audit/Research/Optimize/Create | Discovery/Strategy/Implementation/Growth | Different |
| FAQ count | 4 questions | 5 questions | Different |
| FAQ content | Calgary-specific | Toronto-specific | Different |
| Local landmarks | Stephen Avenue, Kensington, Beltline | Bay Street, Kensington Market, MaRS | Different |
| Industries focus | Oil & Gas, Finance, Tech | Finance, Tech, Media & Entertainment | Different |
| Pricing | $300-$3,000/mo | $2,500-$15,000/mo | Different |
| Testimonial | Generic (no attribution) | Generic (no attribution) | Same template |
| Service list | 6 identical services | 6 identical services | Same template |
| Stats section | Empty/blank values | Empty/blank values | Same template |

**Estimated unique content: ~45-50%** (below 60% threshold)

#### 2.2 Misleading Location Claims
- Toronto FAQ states: *"We're headquartered in Toronto"* — FALSE. HQ is Edmonton.
- Toronto FAQ: *"We also bring clients from across Ontario to our Toronto office for in-person strategy sessions"* — No evidence of Toronto office
- **Risk:** Misleading claims that could trigger manual penalties

#### 2.3 Pricing Inconsistency Across Pages
| Page | Pricing Shown |
|------|---------------|
| /services/seo (body) | Starting at $20,000/month |
| /services/seo (schema) | $999-$7,999 CAD |
| /services/seo-in-calgary | $300-$3,000/mo |
| /services/seo-in-toronto | $2,500-$15,000/mo |
| Homepage | "Startup/Enterprise/Growing Business" tiers |

This inconsistency destroys trust and confuses both users and AI crawlers.

### HIGH Issues

#### 2.4 Blog — No Author Attribution
- 74 blog posts, zero author names shown
- E-E-A-T requires clear authorship for expertise signals
- No author pages or bios

#### 2.5 Blog — All Posts on Single Page
- 74 posts load on one page with no pagination
- Dilutes page authority and creates unnecessarily large page

#### 2.6 Industry Pages — Thin Content
- Healthcare page: ~1,200-1,400 words
- No case studies, data, or original research
- Generic advice without industry-specific depth

#### 2.7 Empty Stats Sections
- Location pages show stats like "Projects Delivered" and "Client Retention Rate" with blank/zero values
- Google Ads Toronto shows "0 Campaigns Running" as a stat — counterproductive

### MEDIUM Issues

#### 2.8 No Case Studies on Location Pages
- Testimonials are generic with no client attribution
- No city-specific case studies or results data

---

## 3. On-Page SEO (Score: 25/100)

### CRITICAL Issues

#### 3.1 Meta Title Pattern — Unprofessional & Repetitive
All 1,107+ location pages use: **"Best [Service] Agency in [City] | TML Agency"**

**Current titles across the site:**

| Page | Current Title |
|------|--------------|
| Homepage | TML Agency \| #1 Digital Marketing Agency Edmonton |
| SEO Service | Best SEO Services in Canada \| TML Agency |
| SEO Calgary | Best SEO Agency in Calgary \| TML Agency |
| SEO Toronto | Best SEO in Toronto \| TML Agency |
| Google Ads Toronto | Best Google Ads in Toronto \| TML Agency |
| Branding Vancouver | Best Branding in Vancouver \| TML Agency |
| Web Design Edmonton | Best Web Design in Edmonton \| TML Agency |
| Portfolio | Best Portfolio \| TML Agency |
| About | About TML Agency \| Best Marketing Agency Edmonton |
| Contact | Contact TML Agency \| Get a Free Consultation \| Edmonton |
| Blog | Blog \| TML Agency — Marketing, Branding & AI Insights |

**Problems:**
1. **"Best" is a subjective superlative** — Google discounts unsubstantiated claims
2. **"Best Portfolio" is nonsensical** — A portfolio is not rankable as "best"
3. **"#1" claim on homepage** — Unsubstantiated; could trigger manual review
4. **Title template inconsistency** — some use `|`, others use `—`, contact page uses double `|`
5. **All 1,107 location titles are the same pattern** — Google sees this as template spam
6. **No value proposition in titles** — "Best SEO in Calgary" says nothing unique
7. **Brand name "TML Agency" doesn't match domain** `townmedialabs.ca`

#### 3.2 Missing Meta Descriptions
- Location pages: Meta descriptions exist in code but many are generic
- "seo" is lowercase in descriptions — should be "SEO"
- Many pages have no meta description visible in rendered HTML

#### 3.3 H1 Inconsistency
- Toronto has TWO H1 tags: "Best SEO in Toronto" AND "Toronto's Trusted SEO Partner"
- Multiple H1s dilute the primary heading signal

### HIGH Issues

#### 3.4 Keyword Cannibalization Risk
- 1,107 location pages all targeting "[service] in [city]" pattern
- Generic service pages also target these terms
- No clear hierarchy between /services/seo and /services/seo-in-[city]

#### 3.5 Internal Linking — Over-Templated
- Every location page links to the same 10 city pages and same related services
- No contextual, editorial internal links based on content relevance

### MEDIUM Issues

#### 3.6 Missing Open Graph Tags
- Many pages lack OG tags in rendered HTML
- All pages use same generic og-image.png

#### 3.7 Alt Text — Generic Pattern
- Location page images use: "SEO in Calgary — TML Agency" regardless of image content
- Alt text should describe actual image content

---

## 4. Schema / Structured Data (Score: 45/100)

### CRITICAL Issues

#### 4.1 Wrong Geo Coordinates on ALL Location Pages
Every location page uses Edmonton's coordinates:
```json
"geo": { "latitude": "53.5461", "longitude": "-113.4937" }
```
Toronto (43.6532, -79.3832), Vancouver (49.2827, -123.1207), Calgary (51.0447, -114.0719) — all show Edmonton.

#### 4.2 Wrong Postal Code in ProfessionalService Schema
All pages use `T5G 2K1` (Edmonton) regardless of city.

#### 4.3 ProfessionalService Schema Claims Local Presence
Implies physical office with opening hours in every city — misleading for an SAB with one office.

### HIGH Issues

#### 4.4 FAQPage Schema on Commercial Site
- Present on homepage, location pages, service pages, about, contact
- Since Aug 2023: Google only shows FAQ rich results for government/healthcare
- Still useful for AI/LLM citation benefit
- Priority: Info — keep for AI benefit

#### 4.5 Missing Schema Types
- No AggregateRating — despite "4.9/5 Rating" claim
- No VideoObject — homepage has "Showreel 2025"
- No Person schema — about page lists 7 team members
- No Article schema on individual blog posts

#### 4.6 Organization Schema Social Links Inconsistent
- Homepage: Instagram, Facebook, LinkedIn
- Location pages: LinkedIn, Twitter, Instagram
- Twitter handle differs: `@tmlagency` vs `@tml_agency`

### MEDIUM Issues

#### 4.7 Service Schema Pricing Mismatch
- Schema: $999-$7,999 but body text: $20,000+/month

#### 4.8 BreadcrumbList — Good
- Correctly implemented with proper hierarchy

---

## 5. Performance / CWV (Score: 55/100)

**Positive signals:**
- Next.js with SSR/SSG — good for LCP
- `font-display: swap` on both fonts
- Preloaded fonts with fallbacks
- WebP images used

### MEDIUM Issues

#### 5.1 Blog Loads All 74 Posts on Single Page
- Estimated page weight: 2MB+ with images
- Should implement pagination

#### 5.2 Dual Analytics Scripts
- Microsoft Clarity + Google Analytics — both add to JS bundle

---

## 6. AI Search Readiness (Score: 50/100)

### HIGH Issues
- No llms.txt file
- No AI bot directives in robots.txt
- Brand name inconsistency (TML Agency vs Town Media Labs)

### Positive Signals
- FAQ sections with clear Q&A — good for AI citation
- Specific statistics (500+ brands, 98% retention, 15+ years)
- Google Partner, Shopify Partner certifications
- Structured data present

---

## 7. Images (Score: 45/100)

### HIGH Issues
- Generic alt text pattern on location pages
- No image sitemap
- Blog images: no alt text

### MEDIUM Issues
- Single OG image for all 1,129 pages
- Logo missing alt text on multiple pages

---

## 8. Sitemap

### HIGH Issues
- All lastmod dates identical (2026-04-03) — reduces trust
- Missing: industry pages, individual blog posts, portfolio projects
- 1,107 location pages — quality gate warning

### MEDIUM Issues
- Single sitemap (should split by content type)
- No image or video sitemaps

---

## 9. Local SEO

### CRITICAL Issues
- False local presence claims via ProfessionalService schema in every city
- NAP inconsistency: "TML Agency - Calgary", "TML Agency - Toronto" create fake variants
- Wrong postal code for every non-Edmonton location

### HIGH Issues
- No Google Maps embed on contact page
- Phone uses Calgary area code (403) but business is in Edmonton (780)
- SAB model not properly defined in schema

---

## 10. Brand & Trust

### HIGH Issues
- Founder listed inconsistently: "Arvinder Singh (Owner & Founder)" on about page vs "Raman Makkar (Chief SEO Strategist & Founder)" in schema
- Brand fragmentation: townmedialabs.ca / TML Agency / Town Media Labs
