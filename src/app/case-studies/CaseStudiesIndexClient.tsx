"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { caseStudies, allCaseStudySlugs } from "@/data/caseStudies";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

const industryIcons: Record<string, React.ReactNode> = {
  "Healthcare / Dental": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  "E-Commerce / Fashion": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  ),
  "Real Estate": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  "Restaurant / Food & Beverage": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  "SaaS / Technology": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "Legal / Law Firm": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  "Fitness / Wellness": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  "Home Services": (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
};

function CaseStudyCard({ slug, index }: { slug: string; index: number }) {
  const study = caseStudies[slug];
  if (!study) return null;

  const topResult = study.results[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
    >
      <Link
        href={`/case-studies/${study.slug}`}
        className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 h-full"
      >
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#ff4500]/10 flex items-center justify-center group-hover:bg-[#ff4500]/20 transition-colors">
            {industryIcons[study.industry] ?? (
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff4500]" />
            )}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-[#ff4500]/60 font-mono tracking-wider uppercase">
              {study.timeline}
            </span>
            <div className="text-[10px] text-white font-mono">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Highlight result */}
        {topResult && (
          <div className="mb-5 px-4 py-3 rounded-xl bg-[#ff4500]/[0.06] border border-[#ff4500]/10">
            <span className="text-2xl font-bold text-[#ff4500]">{topResult.value}</span>
            <span className="text-xs text-white ml-2">{topResult.metric}</span>
          </div>
        )}

        <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-[#ff4500] transition-colors leading-snug">
          {study.title}
        </h2>
        <p className="text-xs text-white mb-4">{study.client} &middot; {study.industry}</p>
        <p className="text-sm text-white leading-relaxed mb-5 line-clamp-3">
          {study.challenge}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {study.services.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-[10px] px-2.5 py-1 rounded-full border border-white/[0.08] text-white"
            >
              {s}
            </span>
          ))}
        </div>

        <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
          Read Case Study &rarr;
        </span>
      </Link>
    </motion.div>
  );
}

export default function CaseStudiesIndexClient() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      {/* Hero */}
      <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto mb-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
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
            Proven Results
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6"
          >
            Case{" "}
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              Studies
            </span>
            <span className="text-[#ff4500]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Real strategies. Real businesses. Real results. Explore how we&apos;ve helped
            companies across industries grow their revenue, dominate search rankings, and
            build brands that stand out in crowded markets.
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
              Get Results Like These
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Results banner */}
      <section className="relative w-full px-6 py-12 lg:px-12 border-y border-white/[0.04]">
        <div className="relative mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Brands Scaled" },
            { value: "10x", label: "Avg Traffic Growth" },
            { value: "98%", label: "Client Retention" },
            { value: "15+", label: "Years Experience" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[#ff4500] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case study cards */}
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
              Our Work
            </h2>
            <div className="flex-1 h-[1px] bg-white/[0.06]" />
            <span className="text-xs text-white font-mono">
              {String(allCaseStudySlugs.length).padStart(2, "0")} studies
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allCaseStudySlugs.map((slug, i) => (
              <CaseStudyCard key={slug} slug={slug} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to be our next success story
            <span className="text-[#ff4500]">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-sm md:text-base text-white leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Every case study above started with a single conversation. Tell us about your
            business, your goals, and your challenges — and we&apos;ll show you exactly how
            we can help.
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
              Start Your Growth Story
            </Link>
            <a
              href="mailto:info@townmedialabs.ca"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              info@townmedialabs.ca
            </a>
          </motion.div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
