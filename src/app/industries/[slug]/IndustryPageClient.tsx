"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import type { IndustryInfo } from "@/data/industries";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import Image from "next/image";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

function PainPointCard({ point, index }: { point: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-red-500/20 transition-all duration-500"
    >
      <div className="absolute top-6 right-6 text-[10px] text-white font-mono">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-5 group-hover:bg-red-500/20 transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <p className="text-sm text-white leading-relaxed">{point}</p>
    </motion.div>
  );
}

function BenefitCard({ benefit, index }: { benefit: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
    >
      <div className="absolute top-6 right-6 text-[10px] text-white font-mono">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff4500]/20 transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <p className="text-sm text-white leading-relaxed">{benefit}</p>
    </motion.div>
  );
}

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  return (
    <motion.details
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      className="group border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/[0.1] transition-colors"
    >
      <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none text-white font-medium text-sm md:text-base">
        <span className="pr-4">{faq.question}</span>
        <span className="text-white text-xl transition-transform duration-300 group-open:rotate-45 flex-shrink-0">+</span>
      </summary>
      <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-white leading-relaxed border-t border-white/[0.04] pt-4">
        {faq.answer}
      </div>
    </motion.details>
  );
}

function ServiceLink({ service, index }: { service: { slug: string; title: string; description: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
      >
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#ff4500] transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-white leading-relaxed mb-4 line-clamp-2">{service.description}</p>
        <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
          Learn More &rarr;
        </span>
      </Link>
    </motion.div>
  );
}

interface RelatedBlog {
  slug: string;
  title: string;
  category: string;
  metaDescription: string;
}

interface ServiceData {
  slug: string;
  title: string;
  description: string;
}

interface PortfolioImg {
  src: string;
  alt: string;
}

export interface IndustryPageClientProps {
  industry: IndustryInfo;
  relatedBlogs: RelatedBlog[];
  serviceData: ServiceData[];
  portfolioImages: PortfolioImg[];
}

export default function IndustryPageClient({ industry, relatedBlogs, serviceData, portfolioImages }: IndustryPageClientProps) {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      {/* Hero Section */}
      <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto mb-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Industries", href: "/industries" },
            { label: industry.name, href: `/industries/${industry.slug}` },
          ]} />
        </div>

        {/* Background effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#ff4500]/[0.02] blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[11px] text-white tracking-[0.2em] uppercase hover:text-white transition-colors mb-8"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Industries
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05, ease }}
            className="text-5xl md:text-6xl mb-6"
          >
            {industry.icon}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6"
          >
            Digital Marketing for {industry.name}
            <span className="text-[#ff4500]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {industry.description}
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
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
                        target={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                        suffix={stat.value.replace(/[0-9]/g, "")}
                        duration={2}
                      />
                    ) : (
                      <span className="text-[#ff4500]">{stat.value}</span>
                    )
                  ) : (
                    <span className="text-white">&mdash;</span>
                  )}
                </div>
                <p className="text-xs text-white tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] rounded-full bg-[#ff4500]/[0.02] blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
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
            Problems {industry.name} Face
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.painPoints.map((point, i) => (
              <PainPointCard key={i} point={point} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-[#ff4500]/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
          >
            The Solution
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16"
          >
            How We Help {industry.name}
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industry.benefits.map((benefit, i) => (
              <BenefitCard key={i} benefit={benefit} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="relative w-full px-6 py-16 md:py-20 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-2xl sm:text-3xl font-medium text-white mb-10"
          >
            Our Work in {industry.name}<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {portfolioImages.map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-xl border border-white/[0.06] group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase font-semibold"
            >
              Industry Insights
            </motion.p>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="flex-1 h-[1px] bg-white/[0.06] origin-left" />
          </div>

          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl border border-white/[0.06] mb-8">
            <Image
              src="/work/web-design-finance-hero.webp"
              alt="Finance website hero design — investment platform with AI-generated imagery"
              fill
              sizes="100vw"
              className="object-cover"
              loading="lazy"
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

      {/* Services Section */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
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
            {serviceData.map((service, i) => (
              <ServiceLink key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4 text-center"
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
            {industry.name} Marketing Questions
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="space-y-3">
            {industry.faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
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
            className="text-sm md:text-base text-white leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Let&apos;s discuss how our digital marketing expertise can help your {industry.name.toLowerCase()} business attract more clients, increase revenue, and dominate your local market. Get a free consultation today.
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
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              info@townmedialabs.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related Reading */}
      {relatedBlogs.length > 0 && (
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
          <div className="relative mx-auto max-w-7xl">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
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
              {relatedBlogs.map((blog, i) => (
                <motion.div
                  key={blog.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 h-full"
                  >
                    <span className="inline-block text-[10px] tracking-wider uppercase bg-[#ff4500]/10 text-[#ff4500] rounded-full px-3 py-1 font-semibold mb-4">
                      {blog.category}
                    </span>
                    <h3 className="text-base font-semibold text-white mb-3 group-hover:text-[#ff4500] transition-colors leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-white leading-relaxed mb-4 line-clamp-2">
                      {blog.metaDescription}
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
      )}

      <FooterHome2 />

      {/* Prose styles for industry content */}
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
          content: '';
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
