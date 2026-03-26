"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import type { FreeTool } from "@/data/freeTools";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

/* ─── Shared wrapper ──────────────────────────────────────────────────────── */
function ToolShell({
  tool,
  children,
}: {
  tool: FreeTool;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <InnerNavbar />
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Free Tools", href: "/free-tools" },
            { label: tool.name, href: `/free-tools/${tool.slug}` },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mt-8 mb-10"
        >
          <span className="text-xs font-medium text-[#ff4500] uppercase tracking-wider">
            {tool.category} Tool
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-syne)] mt-2 leading-tight">
            {tool.name}
          </h1>
          <p className="text-white/90 text-lg mt-4 max-w-2xl">
            {tool.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
        >
          {children}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease }}
          className="mt-16 p-8 rounded-2xl border border-[#ff4500]/20 bg-[#ff4500]/5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-syne)]">
            Want Professional Help?
          </h2>
          <p className="text-white/90 mt-3 max-w-lg mx-auto">
            Our team of experts can help you get even better results. Let TML handle the heavy lifting while you focus on growing your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 bg-[#ff4500] hover:bg-[#ff4500]/90 text-white font-semibold rounded-full transition-colors"
          >
            Contact TML
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </motion.div>
      </section>
      <FooterHome2 />
    </main>
  );
}

/* ─── 1. SEO Audit Checklist ──────────────────────────────────────────────── */
const seoCategories = [
  {
    name: "Technical SEO",
    items: [
      "Site loads in under 3 seconds",
      "Mobile-friendly / responsive design",
      "SSL certificate installed (HTTPS)",
      "XML sitemap submitted to Google",
      "robots.txt file configured",
      "No broken links (404 errors)",
    ],
  },
  {
    name: "On-Page SEO",
    items: [
      "Unique title tag on every page",
      "Meta descriptions on all pages",
      "H1 tag on every page (only one)",
      "Image alt tags on all images",
      "Internal linking structure in place",
      "URL structure is clean and descriptive",
    ],
  },
  {
    name: "Content",
    items: [
      "Content targets specific keywords",
      "Blog updated regularly (at least monthly)",
      "Content is original, not duplicated",
      "Pages have 300+ words minimum",
      "Content answers user search intent",
      "FAQ section on key pages",
    ],
  },
  {
    name: "Link Building",
    items: [
      "Backlinks from relevant websites",
      "Google Business Profile claimed",
      "Listed in relevant directories",
      "No spammy or toxic backlinks",
      "Social media profiles link to site",
      "Guest posts or PR mentions",
    ],
  },
  {
    name: "Local SEO",
    items: [
      "Google Business Profile optimized",
      "NAP consistent across directories",
      "Customer reviews (10+ on Google)",
      "Local keywords in page content",
      "Local schema markup on site",
      "Listed in local business directories",
    ],
  },
];

const totalItems = seoCategories.reduce((sum, c) => sum + c.items.length, 0);

function SEOAuditChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const pct = Math.round((checkedCount / totalItems) * 100);

  const getGrade = () => {
    if (pct >= 90) return { label: "Excellent", color: "#22c55e" };
    if (pct >= 70) return { label: "Good", color: "#eab308" };
    if (pct >= 50) return { label: "Needs Work", color: "#f97316" };
    return { label: "Critical", color: "#ef4444" };
  };

  const grade = getGrade();

  return (
    <div>
      {/* Score bar */}
      <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-white/90">
            {checkedCount} of {totalItems} items checked
          </span>
          <span className="text-2xl font-bold font-[family-name:var(--font-syne)]" style={{ color: grade.color }}>
            {pct}% — {grade.label}
          </span>
        </div>
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, backgroundColor: grade.color }}
          />
        </div>
      </div>

      {seoCategories.map((cat) => (
        <div key={cat.name} className="mb-6">
          <h3 className="text-lg font-bold font-[family-name:var(--font-syne)] text-[#ff4500] mb-3">
            {cat.name}
          </h3>
          <div className="space-y-2">
            {cat.items.map((item) => {
              const key = `${cat.name}-${item}`;
              return (
                <button
                  key={key}
                  onClick={() => toggle(key)}
                  className={`w-full text-left flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 ${
                    checked[key]
                      ? "border-[#22c55e]/30 bg-[#22c55e]/5"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border transition-all ${
                      checked[key]
                        ? "bg-[#22c55e] border-[#22c55e]"
                        : "border-white/30"
                    }`}
                  >
                    {checked[key] && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm ${checked[key] ? "text-white/90 line-through" : "text-white/90"}`}>
                    {item}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── 2. Website Speed Calculator ─────────────────────────────────────────── */
function WebsiteSpeedCalculator() {
  const [loadTime, setLoadTime] = useState("5");
  const [bounceRate, setBounceRate] = useState("50");
  const [visitors, setVisitors] = useState("10000");
  const [avgOrderValue, setAvgOrderValue] = useState("100");
  const [calculated, setCalculated] = useState(false);

  const calc = () => {
    setCalculated(true);
  };

  const lt = parseFloat(loadTime) || 0;
  const br = parseFloat(bounceRate) || 0;
  const vis = parseFloat(visitors) || 0;
  const aov = parseFloat(avgOrderValue) || 0;

  // For every second above 3s, bounce rate increases ~7%
  const extraBounce = lt > 3 ? (lt - 3) * 7 : 0;
  const adjustedBounce = Math.min(br + extraBounce, 98);
  const lostVisitors = Math.round(vis * (extraBounce / 100));
  const conversionRate = 2.5; // assume 2.5% avg
  const lostConversions = Math.round(lostVisitors * (conversionRate / 100));
  const revenueLost = Math.round(lostConversions * aov);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Current Load Time (seconds)</span>
          <input
            type="number"
            min="0"
            step="0.1"
            value={loadTime}
            onChange={(e) => setLoadTime(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Current Bounce Rate (%)</span>
          <input
            type="number"
            min="0"
            max="100"
            value={bounceRate}
            onChange={(e) => setBounceRate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Monthly Visitors</span>
          <input
            type="number"
            min="0"
            value={visitors}
            onChange={(e) => setVisitors(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Average Order Value ($)</span>
          <input
            type="number"
            min="0"
            value={avgOrderValue}
            onChange={(e) => setAvgOrderValue(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
      </div>

      <button
        onClick={calc}
        className="px-8 py-3 bg-[#ff4500] hover:bg-[#ff4500]/90 text-white font-semibold rounded-full transition-colors"
      >
        Calculate Impact
      </button>

      {calculated && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Adjusted Bounce Rate</p>
            <p className="text-2xl font-bold text-[#ff4500] font-[family-name:var(--font-syne)] mt-1">
              {adjustedBounce.toFixed(1)}%
            </p>
            <p className="text-xs text-white/90 mt-1">+{extraBounce.toFixed(1)}% from slow speed</p>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Estimated Visitors Lost / Month</p>
            <p className="text-2xl font-bold text-[#ff4500] font-[family-name:var(--font-syne)] mt-1">
              {lostVisitors.toLocaleString()}
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Lost Conversions / Month</p>
            <p className="text-2xl font-bold text-[#ff4500] font-[family-name:var(--font-syne)] mt-1">
              {lostConversions.toLocaleString()}
            </p>
            <p className="text-xs text-white/90 mt-1">Based on 2.5% avg conversion rate</p>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Estimated Revenue Lost / Month</p>
            <p className="text-2xl font-bold text-[#ef4444] font-[family-name:var(--font-syne)] mt-1">
              ${revenueLost.toLocaleString()}
            </p>
          </div>

          <div className="md:col-span-2 p-5 rounded-2xl border border-[#ff4500]/20 bg-[#ff4500]/5">
            <h3 className="font-bold font-[family-name:var(--font-syne)] text-lg mb-3">Recommendations</h3>
            <ul className="space-y-2 text-sm text-white/90">
              {lt > 3 && <li>-- Optimize images: compress and convert to WebP format</li>}
              {lt > 3 && <li>-- Enable browser caching and GZIP compression</li>}
              {lt > 4 && <li>-- Minimize render-blocking CSS and JavaScript</li>}
              {lt > 5 && <li>-- Consider a CDN (Content Delivery Network)</li>}
              {lt > 6 && <li>-- Upgrade hosting or switch to a faster provider</li>}
              {lt <= 3 && <li>-- Your load time is good! Keep monitoring regularly.</li>}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── 3. Social Media Post Generator ──────────────────────────────────────── */
const platforms = ["Instagram", "LinkedIn", "Twitter / X", "Facebook"];
const tones = ["Professional", "Casual", "Humorous", "Inspirational", "Educational"];
const topics = [
  "Product Launch",
  "Behind the Scenes",
  "Customer Testimonial",
  "Industry Tip",
  "Company Milestone",
  "Holiday / Event",
  "How-To Guide",
  "Team Spotlight",
];

const postTemplates: Record<string, Record<string, Record<string, string>>> = {
  Instagram: {
    Professional: {
      "Product Launch": "Introducing [Product Name] -- built to solve [Problem]. \n\nHere's what makes it different:\n- [Feature 1]\n- [Feature 2]\n- [Feature 3]\n\nAvailable now. Link in bio.\n\n#Launch #Innovation #[YourIndustry]",
      "Behind the Scenes": "A look behind the curtain at [Company]. \n\nThis is where the work happens. From brainstorming sessions to final delivery, every detail matters.\n\n#BehindTheScenes #TeamWork #[YourIndustry]",
      "Customer Testimonial": "\"[Quote from customer]\" -- [Customer Name], [Company]\n\nResults like these are why we do what we do.\n\nReady for similar results? DM us.\n\n#ClientLove #Results #[YourIndustry]",
      "Industry Tip": "Pro tip for [Industry]: [Tip]\n\nMost businesses overlook this, but it can make a huge difference in [Outcome].\n\nSave this for later.\n\n#Tips #[YourIndustry] #Growth",
      "Company Milestone": "We just hit [Milestone]!\n\nThis wouldn't be possible without our incredible team and clients. Here's to the next chapter.\n\n#Milestone #Growth #Grateful",
      "Holiday / Event": "Happy [Holiday]! \n\nFrom our team to yours, we wish you [Warm message]. \n\nEnjoy the [day/weekend]!\n\n#[Holiday] #Celebration",
      "How-To Guide": "How to [achieve result] in [number] steps:\n\n1. [Step 1]\n2. [Step 2]\n3. [Step 3]\n4. [Step 4]\n\nSave this post and try it today.\n\n#HowTo #Tips #[YourIndustry]",
      "Team Spotlight": "Meet [Name], our [Role].\n\n[Fun fact or quote from team member]\n\nGreat things happen when great people work together.\n\n#TeamSpotlight #MeetTheTeam #Culture",
    },
    Casual: {
      "Product Launch": "Guess what?! [Product] is finally here! \n\nWe've been working on this for months and honestly... we're obsessed.\n\nGo check it out (link in bio) \n\n#NewDrop #Excited",
      "Behind the Scenes": "POV: It's a regular day at [Company] \n\nSpoiler: nothing about it is regular.\n\n#BTS #DayInTheLife #WorkLife",
      "Customer Testimonial": "When your client says THIS... you know you're doing something right.\n\n\"[Quote]\"\n\nThanks [Name]! You're the best.\n\n#HappyClients #Winning",
      "Industry Tip": "Quick tip that most [industry] businesses are sleeping on:\n\n[Tip]\n\nTrust us on this one.\n\n#ProTip #[Industry]",
      "Company Milestone": "[Milestone] achieved and we're still pinching ourselves!\n\nSeriously though, thank you to everyone who made this happen.\n\n#Blessed #Milestone",
      "Holiday / Event": "Happy [Holiday] from the [Company] crew!\n\nHope your day is as awesome as you are.\n\n#[Holiday] #GoodVibes",
      "How-To Guide": "Want to [Result]? Here's the cheat code:\n\n1. [Step 1]\n2. [Step 2]\n3. [Step 3]\n\nYou're welcome.\n\n#LifeHack #Tips",
      "Team Spotlight": "Shoutout to [Name]! \n\nOur [Role] who [fun achievement or trait]. We'd be lost without them (literally).\n\n#TeamLove #Shoutout",
    },
    Humorous: {
      "Product Launch": "We made a thing. It's pretty great. \n\nOkay fine, it's REALLY great.\n\nIntroducing [Product]. Your life just got easier.\n\n#NewProduct #YouNeedThis",
      "Behind the Scenes": "What people think we do: [glamorous thing]\nWhat we actually do: [real thing]\n\nBut hey, the results speak for themselves.\n\n#RealTalk #BTS",
      "Customer Testimonial": "Our client [Name] said \"[Quote]\" and honestly, we screenshot that and put it on our fridge.\n\n#ClientLove #Bragging",
      "Industry Tip": "Hot take: If you're not doing [Tip], what are you even doing?\n\nJust saying.\n\n#HotTake #[Industry]Tips",
      "Company Milestone": "We hit [Milestone] and nobody can tell us nothing!\n\n*cue celebration music*\n\n#Winning #Milestone",
      "Holiday / Event": "Happy [Holiday]! \n\nOur out-of-office message: \"Eating [food]. Back [day].\"\n\n#[Holiday] #OOO",
      "How-To Guide": "Step 1: Read this post\nStep 2: Do the thing\nStep 3: Profit\n\nOkay, here's the REAL breakdown of how to [Result]...\n\n[Actual steps]\n\n#HowTo #Easy",
      "Team Spotlight": "[Name] runs on coffee and deadlines. \n\nAlso: they're amazing at [skill]. We're not worthy.\n\n#TeamSpotlight #Legend",
    },
    Inspirational: {
      "Product Launch": "Every great product starts with a simple question: \"What if?\"\n\nToday, we're proud to share our answer. Introducing [Product].\n\n#Innovation #Dream #Launch",
      "Behind the Scenes": "The magic is in the process. Every late night, every revision, every breakthrough -- it all adds up.\n\nHere's a glimpse of our journey.\n\n#Process #Dedication #BTS",
      "Customer Testimonial": "\"[Inspiring quote from customer]\"\n\nStories like this remind us why we started. Thank you, [Name].\n\n#Inspired #Impact #ClientStory",
      "Industry Tip": "The difference between good and great in [Industry]? Consistency.\n\n[Expanded tip]\n\nKeep showing up.\n\n#Motivation #[Industry] #Growth",
      "Company Milestone": "From [humble beginning] to [Milestone]. \n\nThe journey has been incredible. And we're just getting started.\n\n#Journey #Growth #Milestone",
      "Holiday / Event": "Today we celebrate [Holiday] and everything it represents.\n\nGrateful for our community, our team, and the road ahead.\n\n#[Holiday] #Grateful",
      "How-To Guide": "Success leaves clues. Here's what we've learned about [Topic]:\n\n1. [Insight 1]\n2. [Insight 2]\n3. [Insight 3]\n\nYour turn.\n\n#Success #Lessons",
      "Team Spotlight": "Behind every milestone is a person who believed it was possible.\n\nMeet [Name] -- [their story/impact].\n\n#People #TeamSpotlight #Inspiration",
    },
    Educational: {
      "Product Launch": "Did you know? [Statistic about problem]\n\nThat's exactly why we built [Product]. Here's how it works:\n\n[Brief explanation]\n\n#LearnMore #[Industry]",
      "Behind the Scenes": "Here's our process for [task] -- step by step:\n\n1. [Step 1]\n2. [Step 2]\n3. [Step 3]\n\nWant us to break down something else? Tell us!\n\n#Process #BTS #Learn",
      "Customer Testimonial": "Case study: How [Client] achieved [Result]\n\nThe challenge: [Problem]\nOur approach: [Solution]\nThe result: [Outcome]\n\n#CaseStudy #Results",
      "Industry Tip": "[Industry] fact: [Interesting statistic]\n\nHere's what that means for your business and what you can do about it:\n\n[Actionable advice]\n\n#DidYouKnow #[Industry]",
      "Company Milestone": "By the numbers: [Milestone]\n\n- [Stat 1]\n- [Stat 2]\n- [Stat 3]\n\nHere's what we learned along the way.\n\n#ByTheNumbers #Growth",
      "Holiday / Event": "The history of [Holiday]: [Interesting fact]\n\nWe're celebrating by [activity]. How about you?\n\n#[Holiday] #FunFact",
      "How-To Guide": "Complete guide to [Topic]:\n\n1. [Step with explanation]\n2. [Step with explanation]\n3. [Step with explanation]\n4. [Step with explanation]\n\nBookmark this for later!\n\n#Guide #HowTo #[Industry]",
      "Team Spotlight": "What does a [Role] actually do?\n\nWe asked [Name] to break down their typical day:\n\n[Description]\n\n#CareerInsight #DayInTheLife",
    },
  },
};

// Use Instagram templates as base for other platforms with slight adjustments
for (const platform of ["LinkedIn", "Twitter / X", "Facebook"]) {
  postTemplates[platform] = {};
  for (const tone of tones) {
    postTemplates[platform][tone] = {};
    for (const topic of topics) {
      const base = postTemplates["Instagram"]?.[tone]?.[topic] || "";
      if (platform === "LinkedIn") {
        postTemplates[platform][tone][topic] = base
          .replace(/#\w+/g, "")
          .trim() + "\n\n#" + topic.replace(/\s/g, "") + " #Business #Growth";
      } else if (platform === "Twitter / X") {
        // Shorten for Twitter
        const lines = base.split("\n").filter((l) => l.trim());
        postTemplates[platform][tone][topic] = lines.slice(0, 3).join("\n") + "\n\n" + base.match(/#\w+/g)?.slice(0, 3).join(" ");
      } else {
        postTemplates[platform][tone][topic] = base;
      }
    }
  }
}

function SocialMediaPostGenerator() {
  const [platform, setPlatform] = useState("Instagram");
  const [tone, setTone] = useState("Professional");
  const [topic, setTopic] = useState("Product Launch");
  const [copied, setCopied] = useState(false);

  const post = postTemplates[platform]?.[tone]?.[topic] || "Select options above to generate a post.";

  const copy = () => {
    navigator.clipboard.writeText(post);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Platform</span>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          >
            {platforms.map((p) => (
              <option key={p} value={p} className="bg-[#111]">{p}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Tone</span>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          >
            {tones.map((t) => (
              <option key={t} value={t} className="bg-[#111]">{t}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Topic</span>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          >
            {topics.map((t) => (
              <option key={t} value={t} className="bg-[#111]">{t}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-[#ff4500] uppercase tracking-wider">
            {platform} Post — {tone}
          </span>
          <button
            onClick={copy}
            className="text-xs px-3 py-1 rounded-lg border border-white/10 hover:border-[#ff4500]/40 text-white/90 hover:text-white transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="whitespace-pre-wrap text-sm text-white/90 font-sans leading-relaxed">
          {post}
        </pre>
      </div>

      <p className="text-xs text-white/30 mt-3">
        Replace the [bracketed] placeholders with your own details. These are templates to get you started.
      </p>
    </div>
  );
}

/* ─── 4. Google Ads Budget Calculator ─────────────────────────────────────── */
const industryCPC: Record<string, number> = {
  "E-commerce": 1.16,
  "Real Estate": 2.37,
  "Legal": 6.75,
  "Healthcare": 2.62,
  "Finance & Insurance": 3.44,
  "Education": 2.4,
  "Home Services": 3.14,
  "Technology": 3.8,
  "Travel & Hospitality": 1.53,
  "B2B / SaaS": 3.33,
  "Restaurants & Food": 1.95,
  "Fitness & Wellness": 1.63,
  "Automotive": 2.46,
  "Other": 2.5,
};

function GoogleAdsBudgetCalculator() {
  const [industry, setIndustry] = useState("E-commerce");
  const [targetLeads, setTargetLeads] = useState("50");
  const [customCPC, setCustomCPC] = useState("");
  const [convRate, setConvRate] = useState("3.5");
  const [calculated, setCalculated] = useState(false);

  const cpc = customCPC ? parseFloat(customCPC) : industryCPC[industry] || 2.5;
  const leads = parseFloat(targetLeads) || 0;
  const cr = parseFloat(convRate) || 3.5;

  const clicksNeeded = cr > 0 ? Math.ceil(leads / (cr / 100)) : 0;
  const monthlyBudget = Math.round(clicksNeeded * cpc);
  const costPerLead = leads > 0 ? (monthlyBudget / leads).toFixed(2) : "0";
  const dailyBudget = Math.round(monthlyBudget / 30);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Industry</span>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          >
            {Object.keys(industryCPC).map((ind) => (
              <option key={ind} value={ind} className="bg-[#111]">
                {ind} (avg ${industryCPC[ind].toFixed(2)} CPC)
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Target Leads / Month</span>
          <input
            type="number"
            min="1"
            value={targetLeads}
            onChange={(e) => setTargetLeads(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Custom CPC ($) — leave blank for industry avg</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={customCPC}
            onChange={(e) => setCustomCPC(e.target.value)}
            placeholder={`$${industryCPC[industry]?.toFixed(2) || "2.50"}`}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/20 focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Expected Conversion Rate (%)</span>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={convRate}
            onChange={(e) => setConvRate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
      </div>

      <button
        onClick={() => setCalculated(true)}
        className="px-8 py-3 bg-[#ff4500] hover:bg-[#ff4500]/90 text-white font-semibold rounded-full transition-colors"
      >
        Calculate Budget
      </button>

      {calculated && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Recommended Monthly Budget</p>
            <p className="text-3xl font-bold text-[#ff4500] font-[family-name:var(--font-syne)] mt-1">
              ${monthlyBudget.toLocaleString()}
            </p>
            <p className="text-xs text-white/90 mt-1">~${dailyBudget}/day</p>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Expected Clicks / Month</p>
            <p className="text-3xl font-bold text-white font-[family-name:var(--font-syne)] mt-1">
              {clicksNeeded.toLocaleString()}
            </p>
            <p className="text-xs text-white/90 mt-1">at ${cpc.toFixed(2)} per click</p>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Estimated Cost Per Lead</p>
            <p className="text-3xl font-bold text-white font-[family-name:var(--font-syne)] mt-1">
              ${costPerLead}
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Target Leads</p>
            <p className="text-3xl font-bold text-[#22c55e] font-[family-name:var(--font-syne)] mt-1">
              {leads} leads/mo
            </p>
            <p className="text-xs text-white/90 mt-1">at {convRate}% conversion rate</p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── 5. ROI Calculator ───────────────────────────────────────────────────── */
function ROICalculator() {
  const [spend, setSpend] = useState("5000");
  const [leads, setLeads] = useState("100");
  const [convRate, setConvRate] = useState("10");
  const [dealValue, setDealValue] = useState("500");
  const [calculated, setCalculated] = useState(false);

  const sp = parseFloat(spend) || 0;
  const ld = parseFloat(leads) || 0;
  const cr = parseFloat(convRate) || 0;
  const dv = parseFloat(dealValue) || 0;

  const customers = Math.round(ld * (cr / 100));
  const revenue = customers * dv;
  const profit = revenue - sp;
  const roi = sp > 0 ? ((profit / sp) * 100).toFixed(1) : "0";
  const cpl = ld > 0 ? (sp / ld).toFixed(2) : "0";
  const cpa = customers > 0 ? (sp / customers).toFixed(2) : "0";

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Monthly Marketing Spend ($)</span>
          <input
            type="number"
            min="0"
            value={spend}
            onChange={(e) => setSpend(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Leads Generated / Month</span>
          <input
            type="number"
            min="0"
            value={leads}
            onChange={(e) => setLeads(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Lead-to-Customer Conversion Rate (%)</span>
          <input
            type="number"
            min="0"
            max="100"
            value={convRate}
            onChange={(e) => setConvRate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Average Deal Value ($)</span>
          <input
            type="number"
            min="0"
            value={dealValue}
            onChange={(e) => setDealValue(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
      </div>

      <button
        onClick={() => setCalculated(true)}
        className="px-8 py-3 bg-[#ff4500] hover:bg-[#ff4500]/90 text-white font-semibold rounded-full transition-colors"
      >
        Calculate ROI
      </button>

      {calculated && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">ROI</p>
            <p
              className={`text-3xl font-bold font-[family-name:var(--font-syne)] mt-1 ${
                parseFloat(roi) >= 0 ? "text-[#22c55e]" : "text-[#ef4444]"
              }`}
            >
              {roi}%
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Cost Per Lead</p>
            <p className="text-3xl font-bold text-white font-[family-name:var(--font-syne)] mt-1">
              ${cpl}
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Cost Per Acquisition</p>
            <p className="text-3xl font-bold text-white font-[family-name:var(--font-syne)] mt-1">
              ${cpa}
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">New Customers / Month</p>
            <p className="text-3xl font-bold text-[#ff4500] font-[family-name:var(--font-syne)] mt-1">
              {customers}
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Revenue Generated</p>
            <p className="text-3xl font-bold text-[#22c55e] font-[family-name:var(--font-syne)] mt-1">
              ${revenue.toLocaleString()}
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="text-sm text-white/90">Net Profit</p>
            <p
              className={`text-3xl font-bold font-[family-name:var(--font-syne)] mt-1 ${
                profit >= 0 ? "text-[#22c55e]" : "text-[#ef4444]"
              }`}
            >
              ${profit.toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── 6. Meta Tag Generator ───────────────────────────────────────────────── */
function MetaTagGenerator() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [url, setUrl] = useState("https://example.com");
  const [copied, setCopied] = useState(false);

  const displayTitle = title || "Your Page Title";
  const displayDesc = description || "Your page description will appear here. Write a compelling summary of your page content.";
  const displayUrl = url || "https://example.com";

  const metaHTML = `<title>${title}</title>
<meta name="description" content="${description}" />
<meta name="keywords" content="${keywords}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${url}" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />`;

  const copy = () => {
    navigator.clipboard.writeText(metaHTML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="space-y-4 mb-8">
        <label className="block">
          <span className="text-sm text-white/90 mb-1 flex items-center justify-between">
            Page Title
            <span className={`text-xs ${title.length > 60 ? "text-[#ef4444]" : "text-white/30"}`}>
              {title.length}/60
            </span>
          </span>
          <input
            type="text"
            maxLength={80}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Best Digital Marketing Agency in Chandigarh"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/20 focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 flex items-center justify-between">
            Meta Description
            <span className={`text-xs ${description.length > 160 ? "text-[#ef4444]" : "text-white/30"}`}>
              {description.length}/160
            </span>
          </span>
          <textarea
            maxLength={200}
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g. TML Agency offers SEO, Google Ads, social media marketing and web development. 500+ brands scaled with 98% client retention."
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/20 focus:border-[#ff4500]/50 focus:outline-none transition-colors resize-none"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Keywords (comma-separated)</span>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g. digital marketing, SEO, web development"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/20 focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
        <label className="block">
          <span className="text-sm text-white/90 mb-1 block">Page URL</span>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder:text-white/20 focus:border-[#ff4500]/50 focus:outline-none transition-colors"
          />
        </label>
      </div>

      {/* Google Preview */}
      <div className="mb-8">
        <h3 className="text-lg font-bold font-[family-name:var(--font-syne)] text-[#ff4500] mb-3">
          Google Search Preview
        </h3>
        <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.97] max-w-xl">
          <p className="text-sm text-[#202124] truncate" style={{ fontFamily: "Arial, sans-serif" }}>
            {displayUrl}
          </p>
          <p
            className="text-xl mt-0.5 truncate"
            style={{ fontFamily: "Arial, sans-serif", color: "#1a0dab" }}
          >
            {displayTitle}
          </p>
          <p
            className="text-sm mt-1 line-clamp-2"
            style={{ fontFamily: "Arial, sans-serif", color: "#4d5156" }}
          >
            {displayDesc}
          </p>
        </div>
      </div>

      {/* Generated HTML */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold font-[family-name:var(--font-syne)] text-[#ff4500]">
            Generated Meta Tags
          </h3>
          <button
            onClick={copy}
            className="text-xs px-3 py-1 rounded-lg border border-white/10 hover:border-[#ff4500]/40 text-white/90 hover:text-white transition-colors"
          >
            {copied ? "Copied!" : "Copy HTML"}
          </button>
        </div>
        <pre className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] overflow-x-auto text-sm text-white/90 leading-relaxed">
          {metaHTML}
        </pre>
      </div>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────────────── */
const toolComponents: Record<string, React.ComponentType> = {
  "seo-audit-checklist": SEOAuditChecklist,
  "website-speed-calculator": WebsiteSpeedCalculator,
  "social-media-post-generator": SocialMediaPostGenerator,
  "google-ads-budget-calculator": GoogleAdsBudgetCalculator,
  "roi-calculator": ROICalculator,
  "meta-tag-generator": MetaTagGenerator,
};

export default function ToolPageClient({ tool }: { tool: FreeTool }) {
  const ToolComponent = toolComponents[tool.slug];

  if (!ToolComponent) {
    return (
      <ToolShell tool={tool}>
        <p className="text-white/90">This tool is coming soon.</p>
      </ToolShell>
    );
  }

  return (
    <ToolShell tool={tool}>
      <ToolComponent />
    </ToolShell>
  );
}
