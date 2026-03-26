# SEO Action Plan — townmedialabs.com

**Generated:** 2026-03-25
**Starting Score:** 41/100
**Post-fix Estimated Score:** 95-100/100

---

## CRITICAL — Fix Immediately (Blocks indexing or causes penalties)

- [x] **Remove 143 unbuilt cities from `locations.ts`** — 1,573 dead sitemap URLs eliminated
- [x] **Fix Lenis rAF loop** — switched to `autoRaf: true`, removed infinite rAF loop
- [x] **Add `preload="none"` to team-bg.mp4** — stops 4.3 MB video competing with LCP
- [x] **Remove HowTo schema** — deprecated Sept 2023, removed from ProcessHome2
- [x] **Remove Product schema, move reviews to LocalBusiness** — reviews now on ProfessionalService in layout.tsx
- [x] **Merge duplicate Organization blocks** — removed homepage duplicate, single canonical in layout.tsx
- [x] **Merge duplicate WebSite blocks** — removed homepage duplicate, single canonical in layout.tsx
- [x] **Fix AggregateRating** — now correctly shows reviewCount: 3 (matching actual reviews)

## HIGH — Fix Within 1 Week (Significantly impacts rankings)

- [x] **Lazy-load all 9 homepage videos** with IntersectionObserver — created LazyVideo component, applied to all video tags
- [x] **Pre-optimize hero image** `home2-bg-2.png` → WebP (1MB → 25KB)
- [x] **Remove duplicate BreadcrumbList** — removed schema emission from legacy Breadcrumbs.tsx
- [x] **Add schema to location hub pages** — ProfessionalService + areaServed + BreadcrumbList added via LocationServiceTemplate
- [x] **Fix `foundingDate`** — updated to "2010" across all schema + copy (layout, page, about, MeetTheTeam, CTAHome2)
- [x] **Filter Chandigarh duplicates** from sitemap — deduplicated using Set filter
- [x] **Fix OG locale** — changed `en_US` to `en_IN` in layout.tsx
- [x] **Throttle mousemove handlers** — added rAF batching to HeroHome2 and TestimonialsHome2 SpotlightCard

## MEDIUM — Fix Within 1 Month (Optimization opportunities)

- [x] **Dynamic import below-fold sections** with `next/dynamic` — 11 sections code-split on homepage
- [x] **Reduce animated particles** — VideoShowcase 30→8, ClientLogos 20→6
- [x] **Compress all videos** with ffmpeg — total savings ~15MB (e.g. team-bg 4.3MB→148KB, 4.mp4 4.7MB→563KB)
- [x] **Pre-optimize all portfolio images** — converted 5 large PNGs to WebP (avg 95% reduction)
- [x] **Pre-optimize hero & CTA images** — home2-bg-2 1MB→25KB, cta-image 1.1MB→28KB, office 627KB→49KB
- [x] **Create `/llms.txt`** — AI crawler guidance file created
- [x] **Add Person schema for blog authors** — author field added to Article schema in blog pages
- [x] **Standardize sameAs URLs** — consistent across layout.tsx, about/page.tsx; updated twitter.com → x.com
- [x] **Replace `new Date()` in sitemap** — all entries now have meaningful static dates
- [x] **Add `hasMap` + areaServed to ProfessionalService** — added to layout.tsx LocalBusiness schema
- [x] **Upgrade LocalBusiness → ProfessionalService** — both layout.tsx and lib/schema.ts updated
- [ ] Add per-article featured images to blog posts (requires creating/sourcing unique images per post)

## LOW — Backlog (Nice to have)

- [x] **Remove `changeFrequency` and `priority` from sitemap** — cleaned up all entries
- [x] **Add Content-Security-Policy header** — added to next.config.ts with media-src 'self'
- [x] **Add resource hints (dns-prefetch)** — added for googletagmanager.com and clarity.ms
- [x] **Use `lazyOnload` for Microsoft Clarity** — already using lazyOnload strategy
- [x] **Resize Claude_Logo from 5120px to 200px** — converted to WebP (470KB → 3KB)
- [x] **Add poster attribute to all videos** — generated WebP poster frames for all 7 videos
- [ ] Rename poorly-named image files
- [ ] Audit GSAP/split-type — remove if unused
- [ ] Consider sitemap index structure

## Additional Fixes Applied

- [x] **Fix StickyMobileCTA scroll handler** — replaced `lastY` state with ref to prevent listener re-registration
- [x] **Fix TestimonialsHome2 auto-rotate interval** — changed from 60ms to 120ms (halved state updates)
- [x] **Remove crawl delay from robots.txt** — was unnecessarily slowing Googlebot
- [x] **Add explicit AI bot allow rules** — GPTBot, ClaudeBot, PerplexityBot explicitly allowed
- [x] **Fix About page sameAs URLs** — matched to global schema URLs
- [x] **Fix areaServed schema type** — changed from "Place" to "City" in lib/schema.ts
- [x] **Add media-src to CSP** — `media-src 'self'` added for self-hosted video playback

## Strategic (Next Quarter)

- [ ] **Address doorway page risk** — reduce from ~1,837 location pages to top 50 cities x 5 services
- [ ] **Build real E-E-A-T** — named authors, detailed case studies, third-party review links
- [ ] **AI search content strategy** — definitional content, comparison guides, verifiable data
- [ ] **Performance architecture** — restructure SmoothScrollProvider to enable React Server Components
- [ ] **Convert sections to server components** — requires removing SmoothScrollProvider client boundary first
