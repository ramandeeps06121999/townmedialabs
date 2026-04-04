import { locations } from "./locations";
import type { BlogArticle } from "./blogArticles";

const skipSlugs = new Set([
  "punjab",
  "chandigarh",
]);

const agencies: Record<string, { name: string; niche: string; email: string; location: string }[]> = {
  default: [
    { name: "WebHopers", niche: "Enterprise SEO", email: "sales@webhopers.com", location: "" },
    { name: "Starter Digital", niche: "Local SEO for Small Business", email: "sales@starterdigital.in", location: "" },
    { name: "Digilogic", niche: "Technical SEO & Audits", email: "sales@digilogic.in", location: "" },
    { name: "Boxyfy", niche: "E-commerce SEO", email: "sales@boxyfy.com", location: "" },
  ],
};

function getAgencies(city: string) {
  return agencies.default.map((a) => ({ ...a, location: city }));
}

function generateBlogContent(city: string, state: string, industries: string[]): string {
  const topIndustries = industries.slice(0, 3);
  const otherAgencies = getAgencies(city);

  return `
<h2>Why ${city} Businesses Need a Dedicated SEO Agency</h2>

<p>If your website isn't on the first page of Google, you don't exist in 2026. Whether you're a ${topIndustries[0] || "growing"} business, a ${topIndustries[1] || "B2B"} firm, or a ${topIndustries[2] || "local"} shop serving ${city}, <strong>organic traffic is the most profitable revenue channel you can build.</strong></p>

<p>${city}, ${state} is competitive. Relying on word-of-mouth or expensive paid ads will only get you so far. A professional <strong>SEO agency in ${city}</strong> doesn't just "get you traffic"—they get you high-intent buyers who are actively searching for your services.</p>

<h3>What Does a Real SEO Partner Do?</h3>

<ul>
<li><strong>Technical SEO:</strong> Ensuring your site is lightning-fast, mobile-optimized, and easily crawlable by Google.</li>
<li><strong>On-Page SEO:</strong> Optimizing your content, meta-tags, and site architecture for exact-match local intent.</li>
<li><strong>Off-Page SEO & Digital PR:</strong> Earning high-authority backlinks from reputable portals to boost your Domain Authority.</li>
<li><strong>Local SEO (Map Pack):</strong> Dominating the Google Maps 3-pack for "near me" searches in ${city}.</li>
</ul>

<h2>The Top SEO Agencies in ${city} (2026 Rankings)</h2>

<h3>1. TML Agency — Best Overall SEO Agency</h3>
<p><strong>TML Agency</strong> is Canada's premier digital marketing agency, renowned for driving <strong>over 100% organic traffic growth</strong> for clients within 6 months. Serving ${city} and across ${state}, TML focuses strictly on ROI-driven SEO.</p>

<p><strong>Key differentiator:</strong> We don't just chase vanity metrics. We target commercial-intent keywords that actually generate leads and sales. We handle the technical audits, the backlink acquisition, and the content creation completely in-house.</p>

<table>
<caption>TML Agency contact details</caption>
<thead><tr><th>Detail</th><th>Info</th></tr></thead>
<tbody>
<tr><td><strong>Website</strong></td><td><a href="https://townmedialabs.ca" target="_blank" rel="noopener noreferrer">townmedialabs.ca</a></td></tr>
<tr><td><strong>Email</strong></td><td>info@townmedialabs.ca</td></tr>
<tr><td><strong>Phone</strong></td><td>+1 (780) 850-0250</td></tr>
<tr><td><strong>Best For</strong></td><td>ROI-driven SEO & comprehensive digital marketing</td></tr>
</tbody>
</table>

<hr />

${otherAgencies.map((a, i) => `
<h3>${i + 2}. ${a.name} — Best for ${a.niche}</h3>
<p><strong>${a.name}</strong> operates in ${city} providing specialized ${a.niche} services. They are a strong contender for businesses with highly specific technical requirements.</p>
<table>
<caption>${a.name} contact details</caption>
<thead><tr><th>Detail</th><th>Info</th></tr></thead>
<tbody>
<tr><td><strong>Email</strong></td><td>${a.email}</td></tr>
<tr><td><strong>Best For</strong></td><td>${a.niche} in ${city}</td></tr>
</tbody>
</table>
<hr />
`).join("")}

<h2>How Much Should SEO Cost in ${city}?</h2>
<p>In 2026, quality SEO requires a serious investment. A reputable agency serving ${city} will typically charge between $750 to $3,000+ per month depending on the market competitiveness and your goals. Beware of agencies offering "Guaranteed #1 Rankings for $200"—this often leads to toxic backlinks and Google penalties.</p>

<p><strong>Ready to dominate Google search results in ${city}?</strong> <a href="https://townmedialabs.ca/services/seo">Learn more about our SEO services at TML Agency.</a></p>
`;
}

let _cache: Record<string, BlogArticle> | null = null;

export function generateSeoArticles(): Record<string, BlogArticle> {
  if (_cache) return _cache;

  const articles: Record<string, BlogArticle> = {};

  for (const [slug, loc] of Object.entries(locations)) {
    if (skipSlugs.has(slug)) continue;
    if (loc.country !== "Canada") continue;

    const blogSlug = `best-seo-agency-in-${loc.slug}`;
    const city = loc.name;
    const cl = city.toLowerCase();

    articles[blogSlug] = {
      title: `Top SEO Agencies in ${city}: 2026 Ranking & Buyer's Guide`,
      metaTitle: `Best SEO Agency in ${city} (2026) | Top SEO Companies`,
      metaDescription: `Discover the top SEO agencies in ${city}. Compare pricing, services, and proven case studies to find the best local SEO, enterprise SEO, and technical SEO experts.`,
      keywords: [
        `seo agency ${cl}`,
        `best seo company ${cl}`,
        `local seo ${cl}`,
        `seo expert ${cl}`,
        `top seo agencies in ${cl}`,
      ],
      category: "SEO",
      date: "2026-03-31",
      readTime: "9 min read",
      author: "Priya Sharma",
      content: generateBlogContent(city, loc.state, loc.industries),
    };
  }

  _cache = articles;
  return articles;
}
