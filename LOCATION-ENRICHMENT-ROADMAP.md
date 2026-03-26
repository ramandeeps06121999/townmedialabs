# Location Page Enrichment Roadmap

**Goal:** Transform 1,827 location×service pages from templated to genuinely unique
**Current State:** Only Chandigarh (11 pages) is fully enriched. 1,816 pages are generic.
**Cities:** 166 across 7 countries | **Services:** 12

---

## Phase 0 — Architecture Upgrade (Week 1)

**What:** Merge ChandigarhServiceTemplate into LocationServiceTemplate so ONE template handles both enriched and generic pages. Add a city-level enrichment data system.

### Tasks:
- [ ] Create `/src/data/cityServiceContent.ts` — centralized enrichment data store
- [ ] Define `CityServiceContent` interface matching Chandigarh's rich fields:
  ```
  slug, serviceSlug, h1, tagline, metaTitle, metaDescription, keywords,
  heroDescription, whyChoose[], localContent[], faqs[], marketInsight?,
  crossLinks[]
  ```
- [ ] Migrate Chandigarh's 11 enriched services from `chandigarhServices.ts` into the new data store
- [ ] Update `LocationServiceTemplate.tsx` to check for enrichment data — if found, render rich sections; if not, fall back to current generic template
- [ ] Add "Local Market Insights" card component (reusable)
- [ ] Add "Cross-Location Links" section to template (nearby cities with same service)
- [ ] Add "Related Blog Articles" section — pull from blogArticles.ts by matching service/industry tags
- [ ] Integrate `serviceSeoContent.ts` data into location pages (currently unused)
- [ ] Test: Chandigarh pages render identically after migration

**Deliverable:** Single unified template that scales from generic → fully enriched based on available data.

---

## Phase 1 — Tier-1 Metro Cities (Weeks 2-4)

**What:** Fully enrich the 15 highest-value cities × 12 services = **180 pages**

### Tier-1 Cities (15):

| Country | Cities | Pages |
|---------|--------|-------|
| India | Delhi, Mumbai, Bangalore, Hyderabad, Pune | 60 |
| USA | New York, Los Angeles, Chicago, San Francisco | 48 |
| UK | London, Manchester, Birmingham, Edinburgh | 48 |
| UAE | Dubai, Abu Dhabi | 24 |

### Per-city enrichment data required (12 services × each city):

**For each city×service combo, write:**
1. **h1 + tagline** — unique, not "Best {service} in {city}"
2. **heroDescription** — 2-3 sentences, mention city-specific market dynamics
3. **whyChoose** (4 items) — why TML is the right choice IN THIS CITY for THIS SERVICE
   - Reference local competition, market size, industry context
   - Example Delhi SEO: "NCR's 30M+ population means hyper-local pin-code targeting is essential — we've cracked it for 50+ Delhi brands"
4. **localContent** (3 paragraphs) — deep market insights
   - Para 1: City's digital landscape + this service's relevance
   - Para 2: Industry-specific application (tie to city's top industries)
   - Para 3: Why local expertise matters (cultural nuance, language, regulations)
5. **faqs** (5 custom Q&As) — NOT variable substitution
   - 2 city-specific questions ("How do you handle Mumbai's multilingual audience?")
   - 2 service-specific questions with city context
   - 1 pricing/timeline question with local market context
6. **marketInsight** — 1 stat + context ("Delhi NCR has 12,000+ startups — 73% increased digital spend in 2025")
7. **metaTitle + metaDescription** — unique, keyword-rich, city-specific
8. **crossLinks** (3-5) — nearby cities offering same service

### Writing approach:
- **Week 2:** India Tier-1 (5 cities × 12 services = 60 pages)
- **Week 3:** USA + UK Tier-1 (8 cities × 12 services = 96 pages)
- **Week 4:** UAE Tier-1 (2 cities × 12 services = 24 pages) + QA/review all 180 pages

### Content guidelines:
- Each enrichment = ~200-300 words of unique content per page
- Total new content: ~45,000-54,000 words across 180 pages
- Use city's existing `landmarks`, `industries`, `description` as seeds
- Reference real market data (population, GDP, digital adoption rates)
- Mention specific neighborhoods, business districts, tech hubs
- Tie service to city's dominant industries

**Deliverable:** 180 fully enriched pages with unique content, custom FAQs, market insights, and cross-links.

---

## Phase 2 — Tier-2 Major Cities (Weeks 5-8)

**What:** Enrich the next 35 high-potential cities × 12 services = **420 pages**

### Tier-2 Cities (35):

| Country | Cities | Pages |
|---------|--------|-------|
| India (15) | Jaipur, Lucknow, Kolkata, Ahmedabad, Surat, Indore, Chandigarh suburbs (Mohali, Panchkula, Zirakpur), Ludhiana, Amritsar, Kochi, Chennai, Coimbatore, Nagpur, Bhopal | 180 |
| USA (8) | Houston, Boston, Seattle, Denver, Austin, Miami, Dallas, Atlanta | 96 |
| UK (6) | Bristol, Leeds, Liverpool, Glasgow, Cardiff, Nottingham | 72 |
| Australia (4) | Sydney, Melbourne, Brisbane, Perth | 48 |
| UAE (2) | Sharjah, Ajman | 24 |

### Enrichment level — same as Phase 1 but with efficiency:

- Reuse service-level content patterns across cities in the same country
- Example: All India cities share regulatory context, but each gets unique market data
- Batch by country → then by service for writing efficiency

### Writing schedule:
- **Week 5-6:** India Tier-2 (15 cities × 12 = 180 pages)
- **Week 7:** USA + UK Tier-2 (14 cities × 12 = 168 pages)
- **Week 8:** Australia + UAE Tier-2 (6 cities × 12 = 72 pages) + QA

**Deliverable:** 420 more enriched pages. Running total: 611 enriched pages (including Chandigarh 11 + Phase 1 180 + Phase 2 420).

---

## Phase 3 — Tier-3 Remaining Cities + Smart Defaults (Weeks 9-12)

**What:** Handle the remaining ~116 cities × 12 services = **1,392 pages** with a hybrid approach.

### Strategy: Don't write 1,392 fully custom pages. Instead:

#### A. Country-level content blocks (write once, apply to all cities in country)
- **Per country × per service** = 7 countries × 12 services = 84 content sets
- Each set includes:
  - Country-specific regulatory/market context for this service
  - Country-specific pricing guidance
  - Country-specific FAQ answers (2-3)
- These get merged with city-level data (landmarks, industries) at render time

#### B. City-level micro-enrichment (lighter than Tier-1/2)
- **Per city:** 1 unique `marketInsight` stat
- **Per city:** 1 paragraph `localContent` tied to top industry
- **Per city:** `crossLinks` to nearest 3-5 cities
- Much faster to produce — ~50 words per city vs ~250 per city×service in Tier-1

#### C. Template intelligence
- Update LocationServiceTemplate to dynamically combine:
  1. City-level data (existing: landmarks, industries, description)
  2. City-level micro-enrichment (new: marketInsight, 1 paragraph)
  3. Country×service content blocks (new: regulatory context, pricing, FAQs)
  4. Service-level data (existing: features, process, stats from servicePages)
- This creates pages that feel ~60% unique without writing 1,392 custom pages

### Writing schedule:
- **Week 9:** Build country×service content blocks (84 sets)
- **Week 10-11:** City micro-enrichment for remaining 116 cities
- **Week 12:** Template integration + QA + launch

**Deliverable:** All 1,827 pages have meaningful differentiation. No page is pure template anymore.

---

## Phase 4 — Case Studies & Social Proof (Weeks 13-16)

**What:** Add real client results to location pages — the single biggest trust signal.

### Tasks:
- [ ] Create `/src/data/caseStudySnippets.ts` — short case study cards (not full case study pages)
  ```
  { client, industry, city, service, result, metric }
  // Example: { client: "XYZ Hosiery", industry: "Textiles", city: "ludhiana",
  //   service: "seo", result: "350% increase in export leads", metric: "3 months" }
  ```
- [ ] Add "Results in {City}" section to LocationServiceTemplate
- [ ] Display 1-3 relevant case studies per page (match by city OR industry OR service)
- [ ] Fallback: If no exact city match, show same-country + same-service results
- [ ] Add review snippets from Google Business Profile (if available)

### Case study targets:
- **Phase 4a (Week 13-14):** Collect 30-50 case study snippets from real client work
  - Prioritize: Chandigarh, Delhi, Mumbai (existing clients)
  - Include: Industry, city, service, quantified result
- **Phase 4b (Week 15-16):** Expand to 100+ snippets covering more cities/industries
  - Tag each snippet with matching cities, industries, services
  - Template renders the best 2-3 matches per page

**Deliverable:** Real social proof on every location page. Pages with exact-city matches show local results; others show industry-matched results.

---

## Phase 5 — Internal Linking & Content Ecosystem (Weeks 17-20)

**What:** Build a web of internal links that proves these pages are part of a real content ecosystem.

### Tasks:

#### A. Location → Blog linking
- [ ] Tag each blog article with relevant services and cities
- [ ] Add "Read More About {Service} in {City}" section to location pages
- [ ] Show 2-3 relevant blog articles per location page
- [ ] If no exact match, show service-level articles

#### B. Location → Industry linking
- [ ] Link from location pages to relevant industry pages (`/industries/[slug]`)
- [ ] Match using city's `industries` field
- [ ] "See how we help {industry} businesses in {city}"

#### C. Location → Location linking (hub-and-spoke)
- [ ] Country hub → City pages (already exists)
- [ ] City page → Nearby city pages (cross-links from Phase 3)
- [ ] Service page → Top 5 city pages for that service
- [ ] Add "Also Available In" footer to every location page

#### D. Blog → Location linking
- [ ] Add contextual links from blog articles to relevant location pages
- [ ] "Looking for {service} in {city}? See our {city} {service} page"

### Content to create:
- [ ] 12 "Ultimate Guide to {Service}" blog posts — one per service
  - Each links to top 10 city pages for that service
  - Serves as pillar content for the service cluster
- [ ] 7 "Digital Marketing in {Country}" blog posts — one per country
  - Each links to all city pages in that country
  - Covers market overview, regulations, pricing expectations

**Deliverable:** Every location page has 5-10 contextual internal links. Blog ecosystem supports location pages.

---

## Phase 6 — Ongoing Maintenance & Monitoring (Ongoing)

### Monthly tasks:
- [ ] Monitor Google Search Console for indexed vs submitted location pages
- [ ] Track "thin content" warnings in GSC coverage report
- [ ] Update market insights with fresh data annually
- [ ] Add new case study snippets as projects complete
- [ ] Refresh FAQs based on actual customer questions
- [ ] Add new cities only when enrichment data is ready (never add empty cities)

### Quarterly reviews:
- [ ] Audit lowest-performing location pages — enrich or consolidate
- [ ] Check for cannibalization between nearby city pages
- [ ] Update pricing tiers for inflation/market changes
- [ ] Review and refresh cross-links based on traffic patterns

### Kill criteria (when to remove a page):
- Zero impressions after 6 months with full enrichment
- Cannibalizing a higher-value page
- City no longer actively served

---

## Summary Timeline

| Phase | Weeks | Pages Enriched | Cumulative | Effort |
|-------|-------|---------------|------------|--------|
| 0 — Architecture | 1 | 0 (template upgrade) | 11 | Dev work |
| 1 — Tier-1 Metros | 2-4 | 180 | 191 | ~50K words |
| 2 — Tier-2 Cities | 5-8 | 420 | 611 | ~105K words |
| 3 — Tier-3 + Smart Defaults | 9-12 | 1,216 | 1,827 | ~30K words + dev |
| 4 — Case Studies | 13-16 | All pages benefit | 1,827 | Data collection |
| 5 — Internal Linking | 17-20 | All pages benefit | 1,827 | 19 blog posts + dev |
| 6 — Maintenance | Ongoing | — | — | Monthly |

**Total timeline:** 20 weeks (5 months) to full enrichment
**Total content:** ~185K words of unique content
**Result:** Every page has genuine, defensible, unique value — zero doorway page risk

---

## Priority Order (If Resources Are Limited)

If you can only do some phases, prioritize in this order:

1. **Phase 0** — Architecture (unlocks everything else)
2. **Phase 1** — Tier-1 metros (highest traffic, biggest impact)
3. **Phase 4** — Case studies (social proof is the #1 differentiator)
4. **Phase 3C** — Country×service blocks (maximum pages improved with minimum effort)
5. **Phase 5** — Internal linking (compounds the value of all other phases)
6. **Phase 2** — Tier-2 cities (important but lower priority than case studies)
