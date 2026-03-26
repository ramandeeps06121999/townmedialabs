"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { freeTools } from "@/data/freeTools";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

const toolIcons: Record<string, React.ReactNode> = {
  "seo-audit-checklist": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  "website-speed-calculator": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  "social-media-post-generator": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  "google-ads-budget-calculator": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  "roi-calculator": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  "meta-tag-generator": (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

export default function FreeToolsIndexClient() {
  const tools = Object.values(freeTools);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <InnerNavbar />

      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Free Tools", href: "/free-tools" },
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-center mt-8 mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-syne)] leading-tight">
            Free Marketing{" "}
            <span className="text-[#ff4500]">Tools</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mt-6">
            Powerful calculators and generators to help you make smarter marketing decisions. No signup required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <Link
                href={`/free-tools/${tool.slug}`}
                className="block group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-[#ff4500]/40 hover:bg-white/[0.04] transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#ff4500]/10 flex items-center justify-center shrink-0">
                    {toolIcons[tool.slug]}
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[#ff4500] uppercase tracking-wider">
                      {tool.category}
                    </span>
                    <h2 className="text-xl font-bold font-[family-name:var(--font-syne)] mt-1 group-hover:text-[#ff4500] transition-colors">
                      {tool.name}
                    </h2>
                    <p className="text-white/90 text-sm mt-2 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#ff4500] font-medium">
                  Use Tool Free
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
