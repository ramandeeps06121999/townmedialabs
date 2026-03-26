"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import type { ChandigarhServiceData } from "@/data/chandigarhServices";
import { servicePages } from "@/data/servicePages";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import { generateServiceSchema, generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

const processSteps = [
  { number: "01", title: "Discovery", description: "We dive deep into your business, competitors, and the Chandigarh market to understand your unique position and goals." },
  { number: "02", title: "Strategy", description: "Our team crafts a tailored strategy backed by data, local insights, and industry best practices for maximum impact." },
  { number: "03", title: "Execution", description: "We bring the strategy to life with precision — every deliverable crafted to the highest standards by our Chandigarh experts." },
  { number: "04", title: "Results", description: "We track, measure, and optimize relentlessly — delivering transparent reports and continuous improvements." },
];

const industries = [
  "Real Estate", "Healthcare", "Education", "IT / Tech",
  "Restaurants", "Fashion", "Automotive", "E-commerce",
  "Hospitality", "Finance", "Fitness", "Legal",
];

const crossLinkLocations = [
  { label: "Delhi", slug: "delhi" },
  { label: "Mumbai", slug: "mumbai" },
  { label: "Punjab", slug: "punjab" },
  { label: "Ludhiana", slug: "ludhiana" },
  { label: "Auckland", slug: "auckland" },
];

function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-2">
      <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#ff4500]/20 to-transparent" />
    </div>
  );
}

export default function ChandigarhServiceTemplate({ data }: { data: ChandigarhServiceData }) {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const serviceData = servicePages[data.serviceSlug];

  const serviceSchema = generateServiceSchema({
    name: data.title,
    description: data.metaDescription,
    url: `https://townmedialabs.com/services/${data.slug}`,
    areaServed: "Chandigarh",
    category: serviceData?.title,
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    name: "TML Agency - Chandigarh",
    description: data.metaDescription,
    url: `https://townmedialabs.com/services/${data.slug}`,
    city: "Chandigarh",
    state: "Punjab",
    services: serviceData ? serviceData.features.map((f) => f.title) : [],
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://townmedialabs.com" },
    { name: "Services", url: "https://townmedialabs.com/services" },
    { name: serviceData?.title || data.title, url: `https://townmedialabs.com/services/${data.serviceSlug}` },
    { name: "Chandigarh", url: `https://townmedialabs.com/services/${data.slug}` },
  ]);

  const faqSchema = generateFAQSchema(
    data.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))
  );

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      {/* Schema markup grouped to reduce DOM width */}
      <div className="contents">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
      <InnerNavbar />

      {/* Hero */}
      <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto mb-8">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: serviceData?.title || data.title, href: `/services/${data.serviceSlug}` },
            { label: "Chandigarh", href: `/services/${data.slug}` },
          ]} />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#ff4500]/[0.05] blur-[180px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff4500]/20 bg-[#ff4500]/5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#ff4500] animate-pulse" />
            <span className="text-[11px] text-[#ff4500] tracking-wide font-medium">Chandigarh&apos;s Trusted Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6"
          >
            {data.h1.replace("Chandigarh", "").replace("in ", "").trim()}
            <br />
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              in Chandigarh
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-lg md:text-xl text-white/90 font-medium mb-4"
          >
            {data.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-sm md:text-base text-white/30 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {data.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
            >
              Get a Free Quote
            </Link>
            <Link
              href={`/services/${data.serviceSlug}`}
              className="px-8 py-4 rounded-full border border-white/10 text-white/90 font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              View Full Service Details
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats from parent service */}
      {serviceData && (
        <section ref={statsRef} className="relative w-full px-6 py-12 md:py-16 lg:px-12">
          <div className="relative mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {serviceData.stats.map((stat, i) => (
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
                      <span className="text-white/20">—</span>
                    )}
                  </div>
                  <p className="text-xs text-white/90">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Group: Core content — Why Choose, Process, Features, Industries */}
      <div className="contents">

      {/* Why Choose Us */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase mb-4">Why Choose TML</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            Why Chandigarh Businesses Choose Our {serviceData?.title || data.title}<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.whyChoose.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="group p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff4500]/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#ff4500]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* How We Work - Process */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-5xl">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase mb-4">How We Work</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            Our {serviceData?.title || data.title} Process in Chandigarh<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {/* Timeline connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-gradient-to-r from-[#ff4500]/40 via-[#ff4500]/20 to-[#ff4500]/40" />
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease }}
                className="relative text-center"
              >
                <div className="relative z-10 w-20 h-20 rounded-full border border-[#ff4500]/30 bg-[#0a0a0a] flex items-center justify-center mx-auto mb-5">
                  <span className="text-xl font-bold text-[#ff4500]">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Service Features from parent */}
      {serviceData && (
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
          <div className="relative mx-auto max-w-7xl">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase mb-4">What We Offer</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
              Our {serviceData.title} Services in Chandigarh<span className="text-[#ff4500]">.</span>
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(() => {
                const chunkSize = 3;
                const chunks: (typeof serviceData.features)[] = [];
                for (let c = 0; c < serviceData.features.length; c += chunkSize) {
                  chunks.push(serviceData.features.slice(c, c + chunkSize));
                }
                return chunks.map((chunk, ci) => (
                  <div key={ci} className="contents">
                    {chunk.map((f, i) => {
                      const idx = ci * chunkSize + i;
                      return (
                        <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: idx * 0.08, ease }}
                          className="p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
                        >
                          <div className="text-[10px] text-white/20 font-mono mb-4">{String(idx + 1).padStart(2, "0")}</div>
                          <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
                          <p className="text-sm text-white/90 leading-relaxed">{f.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                ));
              })()}
            </div>
          </div>
        </section>
      )}

      <SectionDivider />

      {/* Industries We Serve */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase mb-4">Who We Work With</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            {serviceData?.title || data.title} for Chandigarh Industries<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {(() => {
              const chunkSize = 4;
              const chunks: string[][] = [];
              for (let c = 0; c < industries.length; c += chunkSize) {
                chunks.push(industries.slice(c, c + chunkSize));
              }
              return chunks.map((chunk, ci) => (
                <div key={ci} className="contents">
                  {chunk.map((industry, i) => (
                    <motion.span
                      key={industry}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: (ci * chunkSize + i) * 0.05, ease }}
                      className="px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm text-white/90 font-medium hover:border-[#ff4500]/40 hover:bg-[#ff4500]/10 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {industry}
                    </motion.span>
                  ))}
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      </div>{/* End: Core content group */}

      <SectionDivider />

      {/* Group: Local SEO, FAQ, Cross-links, CTA */}
      <div className="contents">

      {/* Local SEO Content */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-4xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12">
            {data.title} — Your Local Partner<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease }} className="space-y-5 text-sm md:text-base text-white/90 leading-relaxed mb-12">
            {data.localContent.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          {/* Chandigarh Market Insights sub-section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease }}>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Chandigarh Market Insights</h3>
            <div className="p-6 md:p-8 rounded-2xl border border-[#ff4500]/10 bg-[#ff4500]/[0.03]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <div className="text-3xl md:text-4xl font-bold text-[#ff4500]">67%</div>
                <p className="text-sm text-white/90 leading-relaxed">
                  of Chandigarh businesses have increased their digital marketing budgets in the past year, making the tricity one of North India&apos;s fastest-growing digital markets.
                </p>
              </div>
              <p className="text-sm text-white/90 leading-relaxed">
                With over 1.2 million internet users in the tricity and a rapidly growing startup ecosystem anchored by IT Park and Mohali&apos;s Phase 8B, Chandigarh presents massive opportunities for businesses investing in {serviceData?.title.toLowerCase() || "digital marketing"}. The city&apos;s young, tech-savvy population and high smartphone penetration make it an ideal market for forward-thinking brands.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="relative mx-auto max-w-3xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center">
            {serviceData?.title || data.title} in Chandigarh — FAQs<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/[0.1] transition-colors"
              >
                <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                  <h3 className="text-white font-medium text-sm md:text-base pr-4">{faq.q}</h3>
                  <span className="text-white/30 text-xl transition-transform duration-300 group-open:rotate-45 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-white/90 leading-relaxed border-t border-white/[0.04] pt-4">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Also Available In - Cross-linking */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.h3 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-lg sm:text-xl font-medium text-white/90 mb-6">
            We also offer {serviceData?.title || data.title} in
          </motion.h3>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease }} className="flex flex-wrap items-center justify-center gap-3">
            {crossLinkLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/services/${data.serviceSlug}-in-${loc.slug}`}
                className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-white/90 hover:border-[#ff4500]/30 hover:text-white hover:bg-[#ff4500]/10 transition-all duration-300"
              >
                {loc.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6">
            Ready to Grow Your {serviceData?.title || data.title} in Chandigarh<span className="text-[#ff4500]">?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease }} className="text-sm md:text-base text-white/90 mb-10 max-w-xl mx-auto">
            Get a free consultation for your {serviceData?.title.toLowerCase() || "project"} needs. No obligations — just expert advice from Chandigarh&apos;s top agency.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2, ease }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
              Get Your Free Consultation
            </Link>
            <a href="tel:+919872648209" className="px-8 py-4 rounded-full border border-white/10 text-white/90 font-semibold text-sm hover:bg-white/5 transition-colors">
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>

      </div>{/* End: Local SEO, FAQ, Cross-links, CTA group */}

      <FooterHome2 />
    </main>
  );
}
