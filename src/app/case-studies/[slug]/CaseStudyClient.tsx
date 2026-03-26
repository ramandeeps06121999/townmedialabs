"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import type { CaseStudy } from "@/data/caseStudies";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

function ResultCard({
  result,
  index,
  inView,
}: {
  result: { metric: string; value: string; description: string };
  index: number;
  inView: boolean;
}) {
  // Extract numeric part and suffix for AnimatedCounter
  const numericMatch = result.value.match(/^(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = result.value.replace(/^\d+/, "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-[#ff4500] mb-2">
        {numericValue > 0 && inView ? (
          <>
            <AnimatedCounter target={numericValue} duration={2} />
            {suffix}
          </>
        ) : (
          result.value
        )}
      </div>
      <div className="text-sm font-semibold text-white mb-2">{result.metric}</div>
      <p className="text-xs text-white/40 leading-relaxed">{result.description}</p>
    </motion.div>
  );
}

export default function CaseStudyClient({ study }: { study: CaseStudy }) {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

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
              { label: study.client, href: `/case-studies/${study.slug}` },
            ]}
          />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="text-[11px] text-[#ff4500]/60 tracking-[0.25em] uppercase font-mono">
              {study.industry}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-[11px] text-white/40 tracking-[0.25em] uppercase">
              {study.timeline}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 leading-tight"
          >
            {study.title}
            <span className="text-[#ff4500]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-xs text-white/30 mb-8"
          >
            Client: <span className="text-white/90">{study.client}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {study.services.map((s) => (
              <span
                key={s}
                className="text-[10px] px-3 py-1.5 rounded-full border border-white/[0.08] text-white/40"
              >
                {s}
              </span>
            ))}
          </motion.div>

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

      {/* Results */}
      <section ref={statsRef} className="relative w-full px-6 py-16 md:py-24 lg:px-12 border-y border-white/[0.04]">
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-white whitespace-nowrap">
              Results
            </h2>
            <div className="flex-1 h-[1px] bg-white/[0.06]" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {study.results.map((result, i) => (
              <ResultCard key={result.metric} result={result} index={i} inView={statsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="relative mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
            className="p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
          >
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">The Challenge</h3>
            <p className="text-sm text-white/90 leading-relaxed">{study.challenge}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
          >
            <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center mb-5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Our Solution</h3>
            <p className="text-sm text-white/90 leading-relaxed">{study.solution}</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808]">
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="text-5xl text-[#ff4500]/20 mb-6">&ldquo;</div>
            <blockquote className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 italic max-w-3xl mx-auto">
              {study.testimonial.quote}
            </blockquote>
            <div className="text-sm font-semibold text-white">{study.testimonial.name}</div>
            <div className="text-xs text-white/40 mt-1">{study.testimonial.role}</div>
          </motion.div>
        </div>
      </section>

      {/* Full Content */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="relative mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-white whitespace-nowrap">
              Full Story
            </h2>
            <div className="flex-1 h-[1px] bg-white/[0.06]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease }}
            className="prose prose-invert prose-sm md:prose-base max-w-none
              prose-headings:text-white prose-headings:font-semibold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-white/90 prose-p:leading-relaxed
              prose-li:text-white/90 prose-li:leading-relaxed
              prose-strong:text-white/70
              prose-ul:my-4 prose-ul:space-y-2
              prose-a:text-[#ff4500] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: study.content }}
          />
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
            Want results like {study.client}
            <span className="text-[#ff4500]">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-sm md:text-base text-white/40 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Every success story starts with a conversation. Let&apos;s discuss your business
            goals and build a strategy that delivers measurable results.
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
            <Link
              href="/case-studies"
              className="px-8 py-4 rounded-full border border-white/10 text-white/70 font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              View All Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
