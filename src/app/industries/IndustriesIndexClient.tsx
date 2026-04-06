"use client";

import Link from "next/link";
import { motion } from "motion/react";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

// Icons map for Tier 1 industries (no emoji — SVG-based)
const tier1Icons: Record<string, React.ReactNode> = {
  "real-estate": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  "healthcare-medical": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  "restaurants-food": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  "e-commerce": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  "education-edtech": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  "legal-law-firms": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "fitness-wellness": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  automotive: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  "construction-home-services": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  "saas-technology": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
};

interface Tier1IndustryData {
  slug: string;
  name: string;
  heroSubtitle: string;
  serviceNames: string[];
}

interface LegacyIndustryData {
  slug: string;
  name: string;
  icon: string;
  description: string;
  serviceLabels: string[];
}

function Tier1IndustryCard({ industry, index }: { industry: Tier1IndustryData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease }}
    >
      <Link
        href={`/industries/${industry.slug}`}
        className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 h-full"
      >
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#ff4500]/10 flex items-center justify-center group-hover:bg-[#ff4500]/20 transition-colors">
            {tier1Icons[industry.slug] ?? (
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff4500]" />
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#ff4500]/60 font-mono tracking-wider uppercase">Tier 1</span>
            <div className="text-[10px] text-white font-mono">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ff4500] transition-colors">
          {industry.name}
        </h2>
        <p className="text-sm text-white leading-relaxed mb-5 line-clamp-3">
          {industry.heroSubtitle}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {industry.serviceNames.map((name) => (
            <span
              key={name}
              className="text-[10px] px-2.5 py-1 rounded-full border border-white/[0.08] text-white"
            >
              {name}
            </span>
          ))}
        </div>
        <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
          Explore Solutions &rarr;
        </span>
      </Link>
    </motion.div>
  );
}

function IndustryCard({ industry, index }: { industry: LegacyIndustryData; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
    >
      <Link
        href={`/industries/${industry.slug}`}
        className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 h-full"
      >
        <div className="flex items-start justify-between mb-5">
          <div className="text-4xl">{industry.icon}</div>
          <div className="text-[10px] text-white font-mono">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ff4500] transition-colors">
          {industry.name}
        </h2>
        <p className="text-sm text-white leading-relaxed mb-5 line-clamp-3">
          {industry.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {industry.serviceLabels.map((label) => (
            <span
              key={label}
              className="text-[10px] px-2.5 py-1 rounded-full border border-white/[0.08] text-white capitalize"
            >
              {label}
            </span>
          ))}
        </div>
        <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
          Explore Solutions &rarr;
        </span>
      </Link>
    </motion.div>
  );
}

export interface IndustriesIndexClientProps {
  tier1Industries: Tier1IndustryData[];
  legacyIndustries: LegacyIndustryData[];
  tier1Count: number;
  legacyCount: number;
}

export default function IndustriesIndexClient({ tier1Industries, legacyIndustries, tier1Count, legacyCount }: IndustriesIndexClientProps) {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto mb-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
            ]}
          />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] text-white tracking-[0.25em] uppercase mb-6"
          >
            Industry Expertise
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6"
          >
            Industries We{" "}
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              Serve
            </span>
            <span className="text-[#ff4500]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Every industry has unique marketing challenges. We build tailored digital
            strategies that address the specific needs, audiences, and competitive
            landscapes of your industry — driving measurable growth and real results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Tier 1 Industries ─────────────────────────────────────────────────── */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-white whitespace-nowrap">
              Major Industries
            </h2>
            <div className="flex-1 h-[1px] bg-white/[0.06]" />
            <span className="text-xs text-white font-mono">
              {String(tier1Count).padStart(2, "0")} industries
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tier1Industries.map((industry, i) => (
              <Tier1IndustryCard key={industry.slug} industry={industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── All Other Industries ───────────────────────────────────────────────── */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808]">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-white whitespace-nowrap">
              More Industries
            </h2>
            <div className="flex-1 h-[1px] bg-white/[0.06]" />
            <span className="text-xs text-white font-mono">
              {String(legacyCount).padStart(2, "0")} industries
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {legacyIndustries.map((industry, i) => (
              <IndustryCard key={industry.slug} industry={industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6"
          >
            Don&apos;t see your industry
            <span className="text-[#ff4500]">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-sm md:text-base text-white leading-relaxed mb-10 max-w-xl mx-auto"
          >
            We work with businesses across 25+ industries. Whether you are in healthcare,
            real estate, legal, fitness, or any other sector — we have the expertise to
            build a digital marketing strategy tailored to your market.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
            >
              Let&apos;s Talk About Your Business
            </Link>
            <a
              href="mailto:info@townmedialabs.com"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              info@townmedialabs.com
            </a>
          </motion.div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
