# Full SEO Audit Report: townmedialabs.com

**Audit Date:** 2026-03-25
**Framework:** Next.js 16.1.6 (React 19, Turbopack)
**Business Type:** Digital Marketing Agency (Service-Area Business, headquartered in Chandigarh, India)
**Total Pages Estimated:** ~2,000+ (3,585 in sitemap, 44% are 404s)

---

## Executive Summary

### Overall SEO Health Score: 41/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 48/100 | 10.6 |
| Content Quality | 23% | 40/100 | 9.2 |
| On-Page SEO | 20% | 55/100 | 11.0 |
| Schema / Structured Data | 10% | 25/100 | 2.5 |
| Performance (CWV) | 10% | 30/100 | 3.0 |
| AI Search Readiness | 10% | 20/100 | 2.0 |
| Images | 5% | 50/100 | 2.5 |
| **TOTAL** | **100%** | | **40.8 ≈ 41** |

### Top 5 Critical Issues

1. **44% of sitemap URLs are 404s** — 1,573 dead URLs from 143 unbuilt city routes
2. **Infinite rAF loop from Lenis smooth scroll** — fires every frame, destroys INP
3. **~19 MB of autoplay videos on homepage** — LCP estimated 3.5-5.0s on mobile
4. **5 critical schema violations** — deprecated HowTo, misused Product, duplicate Organization/WebSite blocks
5. **Entire homepage is client-rendered** — all 23 section components use `"use client"`, defeating React Server Components

### Top 5 Quick Wins

1. Remove 143 unbuilt cities from `locations.ts` → eliminates 1,573 dead sitemap URLs
2. Add `preload="none"` to `team-bg.mp4` → instant LCP improvement
3. Remove deprecated HowTo and misused Product schema → cleaner structured data
4. Fix Lenis rAF loop (`autoRaf: false`) → 100-200ms INP improvement
5. Remove `changeFrequency` and `priority` from sitemap → 33% smaller XML

---

## 1. Technical SEO (Score: 48/100)

### Crawlability

| Check | Status | Notes |
|-------|--------|-------|
| robots.txt | PASS | Properly configured via `robots.ts`. Blocks `/api/`, `/_next/`, `/admin/`, `/private/` |
| Sitemap reference in robots.txt | PASS | Points to `/sitemap.xml` |
| Sitemap validity | FAIL | 44% of URLs are 404s; 11 duplicates |
| Crawl delay | WARN | `crawlDelay: 1` set — may slow Googlebot unnecessarily |
| Internal linking | WARN | Location pages lack cross-links to related services/cities |

### Indexability

| Check | Status | Notes |
|-------|--------|-------|
| Canonical tags | PASS | Set on homepage, blog posts, service pages |
| Meta robots | PASS | `index: true, follow: true` globally |
| X-Robots-Tag header | PASS | Set to `all` |
| max-image-preview | PASS | Set to `large` (good for Discover) |
| max-snippet | PASS | Set to `-1` (unlimited) |
| Duplicate content risk | HIGH | 1,837 location pages with ~80% shared template content |
| Doorway page risk | HIGH | "[service] in [city]" pattern at scale (1,837 pages) |

### Security Headers

| Header | Status | Value |
|--------|--------|-------|
| HSTS | PASS | `max-age=63072000; includeSubDomains; preload` |
| X-Content-Type-Options | PASS | `nosniff` |
| X-Frame-Options | PASS | `DENY` |
| Referrer-Policy | PASS | `strict-origin-when-cross-origin` |
| Permissions-Policy | PASS | Blocks camera, microphone, geolocation, FLoC |
| X-Powered-By | PASS | Disabled (`poweredByHeader: false`) |
| Content-Security-Policy | MISSING | No CSP header configured |

### URL Structure

| Check | Status | Notes |
|-------|--------|-------|
| Clean URLs | PASS | Slug-based, no query params for content pages |
| Consistent trailing slashes | PASS | Next.js default (no trailing slash) |
| URL depth | WARN | Location service pages are at `/services/[svc]-in-[city]` — flat structure is good but slug format (`seo-in-delhi`) creates very long URLs for some combos |
| HTTPS enforcement | PASS | Assumed via Vercel + HSTS |

### Redirect Configuration

- Only 1 redirect configured: `/carrer` → `/careers` (typo fix)
- No redirect chain issues detected in configuration
- Missing: No HTTP→HTTPS redirect explicitly configured (likely handled by Vercel)

### Caching

| Resource | Cache-Control | Status |
|----------|--------------|--------|
| Static assets (`/_next/static/`) | `max-age=31536000, immutable` | PASS |
| Images | `max-age=31536000, immutable` | PASS |
| Fonts | `max-age=31536000, immutable` | PASS |
| JS/CSS | `max-age=31536000, immutable` | PASS |
| HTML pages | Default (no explicit header) | OK |

---

## 2. Content Quality (Score: 40/100)

### E-E-A-T Assessment

| Signal | Status | Notes |
|--------|--------|-------|
| **Experience** | WEAK | No case study details with measurable outcomes on service pages. Blog posts authored by "TML Agency" (organization), not named individuals. No "written by [expert]" signals. |
| **Expertise** | MODERATE | Service pages cover methodologies. Blog content shows topic knowledge. But no author bios, credentials, or certifications displayed. |
| **Authoritativeness** | MODERATE | Awards section exists (Webby, Google, Microsoft, AWS). Partner logos shown. 500+ brands claimed. But `foundingDate: 2016` contradicts "15+ years" claim. |
| **Trustworthiness** | WEAK | AggregateRating claims 500 reviews but only 3 are shown. No third-party review platform links (Google reviews, Clutch, etc.). No client testimonial verification. |

### Thin Content Risk

| Page Type | Count | Risk Level | Notes |
|-----------|-------|------------|-------|
| Location service pages | 1,837 | HIGH | Template-driven with city name swaps. ~80% shared content across cities for same service. 3 unique paragraphs per city is insufficient differentiation. |
| Blog "top-10" city lists | 30+ | MEDIUM | "Top 10 branding agencies in [city]" pattern repeated across cities with similar structure |
| Industry pages | 40 | LOW | Appear to have unique content per industry vertical |
| Core service pages | 23 | LOW | Substantial unique content |

### Readability

| Issue | Details |
|-------|---------|
| Font contrast | Light gray (#a0a0a0-ish) on dark background (#0a0a0a) — may fail WCAG AA for body text |
| Text size | Body text appears appropriately sized via Tailwind defaults |
| Heading hierarchy | Generally good — H1 → H2 → H3 structure on most pages |
| Content length | Homepage is extremely long (15+ sections). Blog posts appear substantial (1000+ words). Location pages have moderate length but low uniqueness. |

### Duplicate Content

- **Homepage Organization schema**: duplicated between `layout.tsx` and `page.tsx` with conflicting `alternateName` values
- **Homepage WebSite schema**: duplicated with different `description` values
- **Location pages**: 1,837 pages sharing ~80% identical template content
- **Blog city lists**: 30+ "top 10 agencies in [city]" articles with similar structure

---

## 3. On-Page SEO (Score: 55/100)

### Title Tags

| Check | Status | Notes |
|-------|--------|-------|
| Homepage title | PASS | "TML Agency | #1 Digital Marketing Agency in Chandigarh | SEO, Branding & Ads" (76 chars — slightly long) |
| Title template | PASS | `%s | TML Agency` pattern for inner pages |
| Unique titles per page | PASS | Dynamic generation from data files |
| Keyword in title | PASS | Primary keywords present |

### Meta Descriptions

| Check | Status | Notes |
|-------|--------|-------|
| Homepage description | PASS | 195 chars, includes key services and social proof |
| Unique per page | PASS | Generated from data |
| Length | WARN | Some may exceed 160 char recommendation |

### Heading Structure

| Check | Status | Notes |
|-------|--------|-------|
| Single H1 per page | LIKELY PASS | Each page template has one primary heading |
| Logical hierarchy | PASS | H1 → H2 → H3 observed in templates |
| Keywords in headings | PASS | Service and location names in H1/H2 |

### Internal Linking

| Issue | Severity | Notes |
|-------|----------|-------|
| Location pages lack cross-links | HIGH | No links between related cities or services within location pages |
| Blog posts lack internal links to service pages | MEDIUM | Blog articles could link to relevant service pages for topical authority |
| No breadcrumb on location pages (`/locations/[city]`) | HIGH | Missing navigation hierarchy |
| Footer links | PASS | Good coverage of main sections |
| Homepage → service pages | PASS | Services section links to all service pages |

### Open Graph / Social

| Check | Status | Notes |
|-------|--------|-------|
| OG tags on homepage | PASS | Title, description, image, type set |
| OG image | WARN | Generic `/og-image.png` used for ALL pages including blog posts |
| Twitter card | PASS | `summary_large_image` set |
| OG locale | INCONSISTENT | `en_US` in layout.tsx, `en_IN` in page.tsx — should be `en_IN` consistently |

---

## 4. Schema / Structured Data (Score: 25/100)

### Critical Issues (5)

1. **HowTo schema must be removed** — deprecated by Google Sept 2023
2. **Product schema misused** — agency is not a product; reviews should be on LocalBusiness
3. **Duplicate Organization blocks** on homepage (layout.tsx + page.tsx) with conflicting data
4. **Duplicate WebSite blocks** on homepage with different descriptions
5. **AggregateRating mismatch** — LocalBusiness: 500 reviews; Product: 500 ratings but 3 reviews

### High Issues (5)

6. Duplicate BreadcrumbList on service pages, blog listing, and blog posts
7. Location pages (`/locations/[city]`) have zero page-specific schema
8. `foundingDate: "2016"` contradicts "15+ years of experience"
9. Blog Article images use generic OG image instead of per-article images
10. FAQPage schema won't produce rich results for commercial sites (but keeps GEO value)

### Missing Opportunities

- Location pages need ProfessionalService + areaServed + BreadcrumbList
- Service pages missing areaServed property
- No Person schema for blog authors (E-E-A-T signal)
- No wordCount in Article schema
- LocalBusiness should be upgraded to ProfessionalService subtype
- sameAs URLs inconsistent between About page and global schema
- twitter.com → x.com update needed

### Source Files

- `src/app/layout.tsx` — Global Organization, LocalBusiness, WebSite
- `src/app/page.tsx` — Homepage duplicate Organization, WebSite
- `src/components/sections/ProcessHome2.tsx` — HowTo (remove)
- `src/components/sections/TestimonialsHome2.tsx` — Product/reviews (refactor)
- `src/components/ui/Breadcrumbs.tsx` + `src/components/ui/Breadcrumb.tsx` — dual breadcrumb sources

---

## 5. Performance / Core Web Vitals (Score: 30/100)

### Estimated Mobile Performance: 35-50/100

| Metric | Estimated Status | Cause |
|--------|-----------------|-------|
| **LCP** | POOR (3.5-5.0s) | 1 MB hero PNG + competing 4.3 MB autoplay video |
| **INP** | POOR (300-600ms) | Infinite Lenis rAF loop + 50 animated particles + unthrottled mousemove handlers |
| **CLS** | NEEDS IMPROVEMENT (0.1-0.2) | motion.div opacity/y shifts + marquee hydration delay |
| **TTFB** | GOOD (< 200ms) | Next.js on Vercel with ISR |

### Critical Performance Issues

1. **Lenis smooth scroll rAF loop** — `SmoothScrollProvider.tsx` runs `requestAnimationFrame` every frame (~16ms), whether scrolling or not. Kills INP.
2. **~19 MB total video on homepage** — 9 video elements, only 1 has poster image. `team-bg.mp4` (4.3 MB) lacks `preload="none"`.
3. **100% client-rendered homepage** — all 23 section components are `"use client"`. Zero server components. SmoothScrollProvider wraps all children in client boundary.
4. **50+ JS-animated particles** — 30 in VideoShowcase + 20 in ClientLogos, perpetually animated.
5. **Unthrottled mousemove handlers** — HeroHome2, WorkHome2, TestimonialsHome2 all track mouse position without rAF batching.
6. **TestimonialsHome2 interval** — `setInterval` at 60ms (16 state updates/sec) for a progress bar.
7. **1 MB hero image (PNG)** — source not pre-optimized. Relies on runtime AVIF/WebP conversion.

### Image Issues

| Image | Size | Problem |
|-------|------|---------|
| `home2-bg-2.png` (hero) | 1.0 MB | Source too large |
| `cta-image.png` | 1.1 MB | Source too large |
| `ChatGPT-Image-Dec-15-2025-06_26_06-PM.png` | 1.9 MB | Massive, bad filename |
| `Claude_Logo_2023-s5120.png` | 470 KB | 5120px displayed at 100x100 |

---

## 6. AI Search Readiness (Score: 20/100)

### AI Crawler Access

| Check | Status | Notes |
|-------|--------|-------|
| robots.txt blocks AI crawlers | NO | `User-agent: *` allows all — GPTBot, ClaudeBot, PerplexityBot can crawl |
| Specific AI bot rules | MISSING | No explicit allow/disallow for GPTBot, ClaudeBot, etc. |
| llms.txt | MISSING | No `/llms.txt` or `/llms-full.txt` file exists |

### Citability Assessment

| Signal | Status | Notes |
|--------|--------|-------|
| Structured FAQ content | MODERATE | FAQPage schema on homepage and service pages provides citable Q&A pairs |
| Clear factual claims | WEAK | Stats are vague ("500+ brands", "15+ years") without verifiable sources |
| Data tables / lists | WEAK | No comparative data, pricing tables, or structured data that AI can cite |
| Author attribution | MISSING | Blog posts by "TML Agency" (org), not named experts |
| First-person experience | WEAK | No case study narratives, client interviews, or process documentation |

### Passage-Level Optimization

| Issue | Impact |
|-------|--------|
| Most content is marketing copy, not informational | AI systems prefer factual, educational content for citations |
| No definition-style paragraphs | Missing "What is [service]?" introductory definitions that AI loves to cite |
| No statistics with sources | Claims lack citations (e.g., "98% client retention" — says who?) |
| No comparison content | No "X vs Y" or "how to choose" content that AI frequently surfaces |

### Recommendations for AI Visibility

1. **Create `/llms.txt`** — Describe TML Agency, services, expertise areas, and key pages for AI crawlers
2. **Add author bios with Person schema** — Named experts are more citable than organizations
3. **Create definitional content** — "What is SEO?", "How much does branding cost?" with structured answers
4. **Add verifiable data points** — Link stats to sources (Google reviews, Clutch profile, awards pages)
5. **Build comparison/guide content** — "SEO vs PPC: Which is right for your business?" type articles

---

## 7. Local SEO Assessment

### Google Business Profile Signals

| Signal | Status | Notes |
|--------|--------|-------|
| NAP consistency | PASS | Name, address, phone consistent across schema blocks |
| LocalBusiness schema | PASS | Present in layout.tsx with address, geo coordinates, opening hours |
| GeoCoordinates | PASS | `30.7281, 76.7726` (Chandigarh) |
| Opening hours | PASS | Mon-Sat 10:00-19:00 |
| Service area coverage | PARTIAL | areaServed in homepage Organization but NOT in LocalBusiness |

### Local Schema Issues

| Issue | Severity |
|-------|----------|
| LocalBusiness should be ProfessionalService | MEDIUM |
| No `areaServed` on LocalBusiness block | HIGH |
| AggregateRating claims 500 reviews with only 3 shown | HIGH |
| No link to Google Business Profile in sameAs | HIGH |
| No `hasMap` property pointing to Google Maps | MEDIUM |

### Location Page Strategy

| Metric | Value |
|--------|-------|
| Total location pages in sitemap | 3,585 |
| Actually working | ~2,012 |
| Returning 404 | ~1,573 |
| Countries covered | 7 (India, US, UK, Canada, Australia, NZ, UAE) |
| Cities with routes | 166 |
| Services per city | 11 |

### Doorway Page Risk Assessment: HIGH

The 1,837 working location service pages follow an identical template pattern:
- Same service description with city name swapped
- Same FAQs with city name inserted
- 3 unique city paragraphs (insufficient differentiation)
- Same pricing structure, process, and CTA
- Services like "Music Release in Missoula" suggest low relevance

**Google's doorway page policy** specifically targets this: "Are these pages made to funnel users to the actually usable or relevant portion of your site?" If Google determines these are doorway pages, the entire domain could face a manual action.

### Recommendations

1. **Reduce to 5 high-value services per city** (SEO, Google Ads, Web Dev, Branding, Social Media)
2. **Add genuine local signals**: local case studies, city-specific market data, named local contacts
3. **Add Google Business Profile link** to sameAs array
4. **Add `hasMap` property** to LocalBusiness schema
5. **Upgrade LocalBusiness → ProfessionalService**
6. **Add review platform links** (Clutch, Google, DesignRush) to build trust

---

## 8. Sitemap Analysis

### Critical Findings

1. **1,573 URLs return 404** (44% of 3,585 total URLs) — 143 cities in data file without built routes
2. **11 duplicate Chandigarh URLs** — appears in both `chandigarhServices.ts` and `locations.ts`
3. **All timestamps identical** — `new Date()` at build time means Google can't prioritize changed pages
4. **Deprecated `priority` and `changefreq` tags** — ignored by Google, add 33% bloat

### Fix Priority

| Fix | Effort | Impact |
|-----|--------|--------|
| Remove 143 unbuilt cities from `locations.ts` | Low | Critical |
| Filter Chandigarh from `locationPageEntries` | Low | Medium |
| Replace `new Date()` with real dates | Medium | Low |
| Remove priority/changefreq | Low | Low |

---

## Prioritized Action Plan

### CRITICAL — Fix Immediately

| # | Action | Files to Change | Impact |
|---|--------|----------------|--------|
| 1 | Remove 143 unbuilt cities from `locations.ts` or build routes | `src/data/locations.ts` | Eliminates 1,573 dead sitemap URLs |
| 2 | Fix Lenis rAF: use `autoRaf: false` or replace with CSS smooth scroll | `src/components/providers/SmoothScrollProvider.tsx` | INP improvement 100-200ms |
| 3 | Add `preload="none"` to `team-bg.mp4` | `src/components/sections/MeetTheTeam.tsx` | LCP improvement 0.5-1.5s |
| 4 | Remove HowTo schema | `src/components/sections/ProcessHome2.tsx` | Remove deprecated markup |
| 5 | Remove Product schema; move reviews to LocalBusiness | `src/components/sections/TestimonialsHome2.tsx`, `src/app/layout.tsx` | Fix schema violation |
| 6 | Merge duplicate Organization blocks | `src/app/layout.tsx`, `src/app/page.tsx` | Eliminate conflicting signals |
| 7 | Merge duplicate WebSite blocks | `src/app/layout.tsx`, `src/app/page.tsx` | Eliminate conflicting signals |
| 8 | Fix AggregateRating — use real verifiable count | `src/app/layout.tsx` | Fix trust signal |

### HIGH — Fix Within 1 Week

| # | Action | Files to Change | Impact |
|---|--------|----------------|--------|
| 9 | Lazy-load all videos with IntersectionObserver | `src/components/sections/MeetTheTeam.tsx`, `VideoShowcase.tsx`, `WorkHome2.tsx`, `CTAHome2.tsx` | Major LCP + bandwidth improvement |
| 10 | Pre-optimize hero image to < 300 KB | `public/home2-bg-2.png` | LCP improvement 0.5-1.0s |
| 11 | Remove duplicate BreadcrumbList (pick one component) | `src/components/ui/Breadcrumbs.tsx` OR `Breadcrumb.tsx` | Fix schema duplication |
| 12 | Add schema to location pages (ProfessionalService + BreadcrumbList) | `src/app/locations/[city]/page.tsx` or template | Enable local SEO signals |
| 13 | Fix `foundingDate` to match "15+ years" (use 2010 or earlier) | `src/app/layout.tsx`, `src/app/page.tsx` | Fix factual inconsistency |
| 14 | Filter Chandigarh duplicates from sitemap | `src/app/sitemap.ts` | Remove 11 duplicate URLs |
| 15 | Fix OG locale inconsistency (`en_US` → `en_IN` everywhere) | `src/app/layout.tsx` | Consistent metadata |
| 16 | Throttle all mousemove handlers with rAF batching | `HeroHome2.tsx`, `WorkHome2.tsx`, `TestimonialsHome2.tsx` | INP improvement 50-100ms |

### MEDIUM — Fix Within 1 Month

| # | Action | Files to Change | Impact |
|---|--------|----------------|--------|
| 17 | Convert static sections to server components (Footer, FAQ, Process) | Multiple section files | Faster hydration, better TTI |
| 18 | Dynamic import below-fold sections | `src/app/page.tsx` | Reduced initial JS bundle |
| 19 | Reduce animated particles from 50 to 10 | `VideoShowcase.tsx`, `ClientLogos.tsx` | INP + GPU improvement |
| 20 | Compress all videos to < 1 MB each | `public/*.mp4` | Save ~15 MB bandwidth |
| 21 | Pre-optimize all portfolio images to < 200 KB | `public/portfolio/` | Faster page loads |
| 22 | Add per-article featured images to blog posts | `src/data/blogArticles.ts`, blog templates | Article rich results + Discover |
| 23 | Create `/llms.txt` for AI crawler guidance | `public/llms.txt` | AI search visibility |
| 24 | Add Person schema for blog authors | Blog article template | E-E-A-T signal |
| 25 | Standardize sameAs URLs across all schema | Layout + About page | Consistent social signals |
| 26 | Replace `new Date()` in sitemap with real dates | `src/app/sitemap.ts` | Better crawl prioritization |
| 27 | Add GBP link + `hasMap` to LocalBusiness | `src/app/layout.tsx` | Local SEO signal |
| 28 | Upgrade LocalBusiness → ProfessionalService | `src/app/layout.tsx` | Better semantic accuracy |

### LOW — Backlog

| # | Action | Impact |
|---|--------|--------|
| 29 | Remove `changeFrequency` and `priority` from sitemap | 33% smaller XML |
| 30 | Add Content-Security-Policy header | Security hardening |
| 31 | Add resource hints (preconnect, dns-prefetch) | Minor performance |
| 32 | Use `lazyOnload` for Microsoft Clarity | Minor performance |
| 33 | Rename poorly-named image files for SEO | Minor image SEO |
| 34 | Resize Claude_Logo from 5120px to 200px | Minor performance |
| 35 | Audit GSAP/split-type — remove if unused | Minor bundle size |
| 36 | Add `poster` attribute to all video elements | Minor UX |
| 37 | Consider sitemap index structure | Better crawl management |

---

## Strategic Recommendations

### 1. Address Doorway Page Risk (HIGH PRIORITY)

The 1,837 location service pages are the biggest strategic risk. Options:
- **Option A**: Reduce to 5 services × 166 cities = 830 pages (still high but safer)
- **Option B**: Reduce to top 50 high-value cities × 5 services = 250 pages
- **Option C**: Consolidate to 1 landing page per city (166 pages) with service tabs
- **Recommended**: Option B — focus on cities where you actually get or want business

### 2. Build Real E-E-A-T Signals

- Add named author profiles with credentials to blog posts
- Create detailed case studies with measurable outcomes (not just testimonials)
- Link to verifiable third-party review profiles (Google Reviews, Clutch)
- Fix the "15+ years" vs "founded 2016" contradiction

### 3. Improve AI Search Visibility

- Create `/llms.txt` describing your agency, services, and expertise
- Write definitional, educational blog content (not just listicles)
- Add verifiable data points with sources
- Build "X vs Y" comparison content

### 4. Performance Overhaul

The site's visual design is impressive but the performance cost is severe. The single biggest architectural change would be restructuring the SmoothScrollProvider to not wrap all children in a client boundary, enabling React Server Components to actually work.

---

*Report generated by Claude Code SEO Audit — 2026-03-25*
*Audits completed: Schema (full), Performance/CWV (full), Sitemap (full), Technical SEO (inline), Content Quality (inline), AI Search Readiness (inline), Local SEO (inline)*
