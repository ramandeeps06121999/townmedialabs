"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import type { IndustryPage } from "@/data/industries";
import { blogArticles } from "@/data/blogArticles";
import { industryRelatedBlogs } from "@/lib/internalLinks";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

// ── Sub-components ─────────────────────────────────────────────────────────────

function ChallengeCard({
  challenge,
  index,
}: {
  challenge: { title: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
    >
      <div className="absolute top-6 right-6 text-[10px] text-white/20 font-mono">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff4500]/20 transition-colors">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff4500"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-white mb-3">{challenge.title}</h3>
      <p className="text-sm text-white/90 leading-relaxed">{challenge.description}</p>
    </motion.div>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: { name: string; description: string; link: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
    >
      <Link
        href={service.link}
        className="group block h-full p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
      >
        <div className="flex items-start justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#ff4500]/10 flex items-center justify-center group-hover:bg-[#ff4500]/20 transition-colors">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff4500]" />
          </div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/20 group-hover:text-[#ff4500] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-[#ff4500] transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-white/40 leading-relaxed">{service.description}</p>
      </Link>
    </motion.div>
  );
}

function FAQItem({
  faq,
  index,
}: {
  faq: { question: string; answer: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      className="border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/[0.1] transition-colors"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 md:p-6 cursor-pointer text-white font-medium text-sm md:text-base text-left"
        aria-expanded={open}
      >
        <span className="pr-4">{faq.question}</span>
        <span
          className={`text-white/30 text-xl transition-transform duration-300 flex-shrink-0 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-white/90 leading-relaxed border-t border-white/[0.04] pt-4">
          {faq.answer}
        </div>
      )}
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function IndustryPageV2Client({ industry }: { industry: IndustryPage }) {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        {/* Breadcrumbs */}
        <div className="relative z-10 max-w-5xl mx-auto mb-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: industry.name, href: `/industries/${industry.slug}` },
            ]}
          />
        </div>

        {/* Background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#ff4500]/[0.04] blur-[160px] pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#ff4500]/[0.02] blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[11px] text-white/40 tracking-[0.2em] uppercase hover:text-white/60 transition-colors mb-8"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Industries
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="text-[11px] text-white/40 tracking-[0.25em] uppercase mb-6"
          >
            Industry Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6"
          >
            {industry.heroTitle.split(industry.name)[0]}
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              {industry.name}
            </span>
            <span className="text-[#ff4500]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-sm md:text-base text-white/40 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {industry.heroSubtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
            >
              Get a Free Strategy Call
            </Link>
            <a
              href="mailto:info@townmedialabs.com"
              className="px-8 py-4 rounded-full border border-white/10 text-white/70 font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────────── */}
      <section ref={statsRef} className="relative w-full px-6 py-12 md:py-16 lg:px-12">
        <div className="relative mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {industry.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {statsInView ? (
                    /^\d/.test(stat.value) ? (
                      <AnimatedCounter
                        target={parseInt(stat.value.replace(/[^0-9]/g, ""), 10)}
                        suffix={stat.value.replace(/[0-9]/g, "")}
                        duration={2}
                      />
                    ) : (
                      <span className="text-[#ff4500]">{stat.value}</span>
                    )
                  ) : (
                    <span className="text-white/20">&mdash;</span>
                  )}
                </div>
                <p className="text-xs text-white/40 tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenges ────────────────────────────────────────────────────────── */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-[#ff4500]/[0.02] blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white/40 tracking-[0.25em] uppercase mb-4"
          >
            The Challenge
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16"
          >
            What {industry.name} Businesses Face
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industry.challenges.map((challenge, i) => (
              <ChallengeCard key={i} challenge={challenge} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────────── */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-[#ff4500]/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white/40 tracking-[0.25em] uppercase mb-4"
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16"
          >
            Services for {industry.name}
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Deep Content ──────────────────────────────────────────────────────── */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-[10px] md:text-xs text-white/40 tracking-[0.25em] uppercase font-semibold"
            >
              Industry Insights
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="flex-1 h-[1px] bg-white/[0.06] origin-left"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="prose-industry"
            dangerouslySetInnerHTML={{ __html: industry.content }}
          />
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="relative mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white/40 tracking-[0.25em] uppercase mb-4 text-center"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center"
          >
            Common Questions
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="space-y-3">
            {industry.faqItems.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
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
            Ready to grow your {industry.name.toLowerCase()} business
            <span className="text-[#ff4500]">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-sm md:text-base text-white/40 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Let&apos;s discuss how our digital marketing expertise can help your{" "}
            {industry.name.toLowerCase()} business attract more clients, increase revenue,
            and dominate your market. Get a free consultation today.
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
              Book a Free Strategy Call
            </Link>
            <a
              href="mailto:info@townmedialabs.com"
              className="px-8 py-4 rounded-full border border-white/10 text-white/70 font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              info@townmedialabs.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related Reading */}
      {(() => {
        const blogSlugs = industryRelatedBlogs[industry.slug] || [];
        const relatedBlogs = blogSlugs
          .map((slug) => ({ slug, article: blogArticles[slug] }))
          .filter((b) => b.article);
        if (relatedBlogs.length === 0) return null;
        return (
          <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
            <div className="relative mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="text-[10px] md:text-xs text-white/40 tracking-[0.25em] uppercase mb-4"
              >
                From Our Blog
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="text-2xl sm:text-3xl font-medium text-white mb-10"
              >
                Related Reading
                <span className="text-[#ff4500]">.</span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedBlogs.map(({ slug, article }, i) => (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  >
                    <Link
                      href={`/blog/${slug}`}
                      className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 h-full"
                    >
                      <span className="inline-block text-[10px] tracking-wider uppercase bg-[#ff4500]/10 text-[#ff4500] rounded-full px-3 py-1 font-semibold mb-4">
                        {article.category}
                      </span>
                      <h3 className="text-base font-semibold text-white mb-3 group-hover:text-[#ff4500] transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-sm text-white/35 leading-relaxed mb-4 line-clamp-2">
                        {article.metaDescription}
                      </p>
                      <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
                        Read Article &rarr;
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      <FooterHome2 />

      {/* Prose styles for industry content HTML */}
      <style jsx global>{`
        .prose-industry h2 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #ffffff;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .prose-industry h2:first-child {
          margin-top: 0;
        }
        .prose-industry p {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }
        .prose-industry strong {
          color: rgba(255, 255, 255, 0.7);
          font-weight: 600;
        }
        .prose-industry ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 1.25rem;
        }
        .prose-industry ul li {
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.45);
          line-height: 1.8;
          margin-bottom: 0.5rem;
        }
        .prose-industry ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.75rem;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #ff4500;
        }
      `}</style>
    </main>
  );
}
