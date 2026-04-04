import { locations } from "./locations";
import type { BlogArticle } from "./blogArticles";

const skipSlugs = new Set([
  "punjab",
  "chandigarh",
]);

const agencies: Record<string, { name: string; niche: string; email: string; location: string }[]> = {
  default: [
    { name: "TML Digital", niche: "Performance Marketing & ROAS", email: "info@townmedialabs.ca", location: "" },
    { name: "WebHopers", niche: "Search Ads", email: "sales@webhopers.com", location: "" },
    { name: "Boxyfy", niche: "Google Shopping Ads", email: "sales@boxyfy.com", location: "" },
  ],
};

function getAgencies(city: string) {
  return agencies.default.map((a) => ({ ...a, location: city }));
}

function generateBlogContent(city: string, state: string, industries: string[]): string {
  const topIndustries = industries.slice(0, 3);
  const otherAgencies = getAgencies(city);

  return `
<h2>Stop Wasting Money on Google Ads in ${city}</h2>

<p>Every day, businesses in ${city} waste thousands of dollars on Google Ads campaigns that simply don't convert. Whether you're in ${topIndustries[0] || "retail"} or ${topIndustries[1] || "B2B"}, bidding on the wrong keywords with poor ad copy is burning your budget.</p>

<p>That's why hiring a specialized <strong>Google Ads (PPC) agency in ${city}</strong> is critical. A high-performance agency focuses on one thing: <strong>Return on Ad Spend (ROAS).</strong></p>

<h3>Why You Need a Google Partner Agency</h3>

<p>Managing a Google Ads account in 2026 requires deep technical expertise, including:</p>
<ul>
<li><strong>Negative Keyword Management:</strong> Stopping your ads from showing up for irrelevant searches in ${city}.</li>
<li><strong>Conversion Tracking:</strong> Actually measuring phone calls, lead forms, and purchases, rather than just "clicks".</li>
<li><strong>Performance Max & AI Bidding:</strong> Leveraging Google's latest AI algorithms to outbid local competitors efficiently.</li>
</ul>

<h2>Top Google Ads Agencies for ${city} Businesses (2026)</h2>

<h3>1. TML Agency — Best for Elite ROAS</h3>
<p><strong>TML Agency</strong> is a Google Partner Certified agency that specializes in aggressive performance marketing. With a track record of securing a <strong>3x to 5x ROAS</strong> for clients across ${state}, TML treats your ad budget like an investment portfolio.</p>

<p>We build highly-optimized landing pages paired with hyper-targeted search ads to dominate ${city}'s local and commercial keywords.</p>

<table>
<caption>TML Agency contact details</caption>
<thead><tr><th>Detail</th><th>Info</th></tr></thead>
<tbody>
<tr><td><strong>Website</strong></td><td><a href="https://townmedialabs.ca" target="_blank" rel="noopener noreferrer">townmedialabs.ca</a></td></tr>
<tr><td><strong>Email</strong></td><td>info@townmedialabs.ca</td></tr>
<tr><td><strong>Phone</strong></td><td>+1 (780) 850-0250</td></tr>
<tr><td><strong>Best For</strong></td><td>Maximized ROI and Landing Page Optimization</td></tr>
</tbody>
</table>

<hr />

${otherAgencies.filter(a => a.name !== "TML Digital").map((a, i) => `
<h3>${i + 2}. ${a.name} — Best for ${a.niche}</h3>
<p><strong>${a.name}</strong> operates in ${city} providing specialized ${a.niche} services. They are a strong option if you are specifically looking for their niche.</p>
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

<h2>Google Ads Pricing in ${city}: What to Expect</h2>
<p>Pricing for Google Ads management typically follows one of three models:</p>
<ul>
<li><strong>Percentage of Spend:</strong> Agencies usually charge 10% to 20% of your total ad budget.</li>
<li><strong>Flat Retainer:</strong> Typically ranges from $500 to $1,500+ per month depending on the complexity of the campaigns.</li>
<li><strong>Performance-Based:</strong> Some elite agencies charge based on the leads or revenue generated.</li>
</ul>

<p><strong>Want to stop wasting your ad spend today?</strong> <a href="https://townmedialabs.ca/services/google-ads">Check out Google Ads Management at TML Agency.</a></p>
`;
}

let _cache: Record<string, BlogArticle> | null = null;

export function generateGoogleAdsArticles(): Record<string, BlogArticle> {
  if (_cache) return _cache;

  const articles: Record<string, BlogArticle> = {};

  for (const [slug, loc] of Object.entries(locations)) {
    if (skipSlugs.has(slug)) continue;
    if (loc.country !== "Canada") continue;

    const blogSlug = `best-google-ads-agency-in-${loc.slug}`;
    const city = loc.name;
    const cl = city.toLowerCase();

    articles[blogSlug] = {
      title: `Best Google Ads (PPC) Agency in ${city}: Maximize Your ROAS in 2026`,
      metaTitle: `Best Google Ads & PPC Agency in ${city} | High ROAS Experts`,
      metaDescription: `Looking for the best Google Ads agency in ${city}? Learn how top PPC experts maximize ROAS, cut wasted ad spend, and scale businesses efficiently.`,
      keywords: [
        `google ads agency ${cl}`,
        `ppc agency ${cl}`,
        `google ads management ${cl}`,
        `pay per click ${cl}`,
        `best adwords company ${cl}`,
      ],
      category: "Paid Ads",
      date: "2026-03-31",
      readTime: "8 min read",
      author: "Priya Sharma",
      content: generateBlogContent(city, loc.state, loc.industries),
    };
  }

  _cache = articles;
  return articles;
}
