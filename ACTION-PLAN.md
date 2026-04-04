# TML Agency SEO Action Plan
**Generated:** 2026-04-04  
**Current Score:** 38/100  
**Target Score:** 75/100  

---

## CRITICAL — Fix Immediately (Blocks indexing or causes penalties)

### 1. Fix Canonical Domain (.com → .ca)
**File:** `src/app/layout.tsx:27`  
**Change:** `"https://townmedialabs.com"` → `"https://townmedialabs.ca"`  
**Also fix:** Every hardcoded page file that references `townmedialabs.com` in alternates.canonical, openGraph.url  
**Impact:** All 1,129 pages currently point canonicals to wrong domain  
**Estimated effort:** 1 hour (find-and-replace across codebase)

### 2. Fix Geo Coordinates Per City
**File:** `src/data/locations.ts`  
**Issue:** Most Canadian cities lack `coordinates` field; template falls back to Edmonton coords  
**Fix:** Add correct latitude/longitude for all 32+ Canadian cities  
**Also fix:** `src/components/templates/LocationServiceTemplate.tsx` — ensure it pulls coords from location data  
**Estimated effort:** 2 hours

### 3. Fix Postal Codes Per City  
**File:** `src/components/templates/LocationServiceTemplate.tsx` (ProfessionalService schema generation)  
**Issue:** Edmonton postal code `T5G 2K1` hardcoded for all cities  
**Fix:** Add `postalCode` field to each location in `locations.ts`, or remove postal code from non-Edmonton schemas  
**Better approach:** Remove ProfessionalService schema from non-Edmonton pages entirely (see item 6)  
**Estimated effort:** 2 hours

### 4. Remove Indian Market References
**Files to fix:**
- `src/data/servicePages.ts` — Remove/replace all "Chandigarh" and "India" references
- `src/data/locations.ts` — Remove Delhi, Mumbai, Punjab entries (or ensure they're not rendered on .ca)
- All location page files — Change `locale: "en_IN"` → `locale: "en_CA"`
- Fix currency display: ₹ → $ CAD on Google Ads pages
**Estimated effort:** 3-4 hours

### 5. Remove False Location Claims
- **Toronto FAQ:** Remove "We're headquartered in Toronto" and "Toronto office" claims
- **All cities:** Audit FAQ answers for similar false claims about local offices
- Replace with honest SAB language: "We serve Toronto businesses remotely and on-site from our Edmonton headquarters"
**Estimated effort:** 4-6 hours (audit all location pages)

### 6. Fix ProfessionalService Schema — SAB Model
**Current:** Every city page has ProfessionalService schema implying a physical office  
**Fix:** 
- Keep ProfessionalService ONLY on Edmonton pages
- For all other cities, use `Service` schema with `areaServed` only (already present)
- Add proper `ServiceArea` schema to the Organization on homepage
**Estimated effort:** 3 hours

---

## HIGH — Fix Within 1 Week (Significantly impacts rankings)

### 7. Rewrite All Meta Titles
**Current pattern:** "Best [Service] Agency in [City] | TML Agency"  
**New approach — use varied, professional templates:**

| Page Type | New Title Pattern | Example |
|-----------|-------------------|---------|
| Homepage | TML Agency — Digital Marketing & Branding in Edmonton | |
| Service (generic) | [Service] Services — Strategy, Execution & Results \| TML Agency | SEO Services — Strategy, Execution & Results \| TML Agency |
| Location (service) | [Service] Agency in [City] — Proven Results \| TML Agency | SEO Agency in Calgary — Proven Results \| TML Agency |
| Location (service) alt | [City] [Service] Services — [Unique Value] \| TML Agency | Toronto SEO Services — Data-Driven Growth \| TML Agency |
| Portfolio | Our Work & Case Studies \| TML Agency | |
| About | About TML Agency — 15+ Years, 500+ Brands | |
| Blog | Marketing Insights & Guides \| TML Agency Blog | |
| Contact | Get a Free Consultation \| TML Agency Edmonton | |
| Industry | [Industry] Marketing Agency \| TML Agency | Healthcare Marketing Agency \| TML Agency |

**Key changes:**
- Remove "Best" and "#1" superlatives
- Add value propositions instead of empty claims
- Use consistent separator
- Vary templates to avoid pattern spam across 1,107 pages
- Implement via centralized `generateTitle()` utility function

**Implementation:** Create a title generation utility that rotates 4-5 patterns per service type  
**Estimated effort:** 4-6 hours

### 8. Fix Pricing Consistency
- Decide on ONE pricing structure (or range) per service
- Update schema, body content, and all location pages to match
- If pricing varies by city, state that explicitly ("Pricing varies by market")
**Estimated effort:** 3 hours

### 9. Add Author Attribution to Blog
- Add author name, photo, and bio to each blog post
- Create author pages with expertise credentials
- Add Person schema to author pages
- Add `author` field to Article schema on individual posts
**Estimated effort:** 4 hours

### 10. Fix Stats Sections on Location Pages
- Either populate with real data or remove blank stats entirely
- "0 Campaigns Running" on Google Ads pages is damaging — remove or populate
**Estimated effort:** 2 hours

### 11. Add Blog Post Individual Pages to Sitemap
- Ensure each of the 74 blog posts has its own URL in sitemap
- Add Article schema to individual blog post pages
**Estimated effort:** 1 hour

### 12. Fix Organization Schema Social Links
- Consolidate to one set of social URLs
- Pick one Twitter handle: `@tmlagency` or `@tml_agency`
- Include the same social links everywhere
**Estimated effort:** 1 hour

### 13. Consolidate Brand Name
- Pick one: "TML Agency" (preferred) or "Town Media Labs"
- Update portfolio page title, all OG tags, schema, and content
**Estimated effort:** 2 hours

---

## MEDIUM — Fix Within 1 Month (Optimization opportunities)

### 14. Increase Location Page Uniqueness to 60%+
For each location page, add:
- City-specific case study or result
- Real testimonial from a client in that city
- Local market statistics (population, business count)
- City-specific competitor analysis
- Remove generic service descriptions identical across pages
**Target:** 60%+ unique content per page  
**Estimated effort:** 40-60 hours

### 15. Add Blog Pagination
- Implement pagination at 12-15 posts per page
**Estimated effort:** 2 hours

### 16. Create llms.txt
- Add `/llms.txt` with site description, key services, and content structure
**Estimated effort:** 1 hour

### 17. Add Missing Schema Types
- AggregateRating on homepage (if verified review data exists)
- VideoObject for Showreel 2025
- Person schema for team members on about page
- Article schema on individual blog posts
**Estimated effort:** 4 hours

### 18. Split Sitemap by Content Type
- `sitemap-index.xml` with sub-sitemaps: pages, services, locations, blog
- Use real lastmod dates
**Estimated effort:** 2 hours

### 19. Add Google Maps to Contact Page
- Embed Google Maps showing Edmonton office
**Estimated effort:** 1 hour

### 20. Fix Image Alt Text
- Location pages: Describe actual image content
- Blog: Add alt text to all featured images
- Logo: Add alt="TML Agency logo" sitewide
**Estimated effort:** 3 hours

### 21. Add Image Sitemap
**Estimated effort:** 2 hours

### 22. Fix Founder Attribution
- Align about page and schema on who is the actual founder
**Estimated effort:** 30 minutes

---

## LOW — Backlog

### 23. Add Security Headers (CSP, X-Frame-Options, HSTS)
### 24. Implement IndexNow
### 25. Create Unique OG Images Per Page Type
### 26. Add Crawl-Delay to robots.txt
### 27. AI Bot Management in robots.txt
### 28. Deepen Industry Pages to 2,500+ words
### 29. Consider Pruning Location Pages to Top 50-100 Cities

---

## Implementation Priority Order

| Week | Tasks | Expected Score Impact |
|------|-------|----------------------|
| Week 1 | Items 1-6 (Critical fixes) | 38 → 52 (+14) |
| Week 2 | Items 7-13 (High-priority fixes) | 52 → 65 (+13) |
| Week 3-4 | Items 14-22 (Medium optimizations) | 65 → 75 (+10) |
| Ongoing | Items 23-29 (Low/backlog) | 75 → 80+ |
