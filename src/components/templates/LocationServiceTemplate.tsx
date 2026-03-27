"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import type { LocationInfo } from "@/data/locations";
import { locations, getLocationServiceSlug } from "@/data/locations";
import { servicePages } from "@/data/servicePages";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import { generateServiceSchema, generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { serviceSeoContent } from "@/data/serviceSeoContent";
import { blogArticles } from "@/data/blogArticles";
import { industries, industryPages } from "@/data/industries";
import { serviceRelatedBlogs, serviceRelatedIndustries } from "@/lib/internalLinks";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getCityServiceContent } from "@/data/cityServiceContent";

const ease = [0.23, 1, 0.32, 1] as const;

function convertPriceRange(range: string, country: string): string {
  if (country === "India") return range;
  // Convert INR amounts to country currency (approximate: ₹100 ≈ $1.20)
  const currencyMap: Record<string, { symbol: string; rate: number }> = {
    "New Zealand": { symbol: "NZ$", rate: 0.02 },
    "United Kingdom": { symbol: "£", rate: 0.0095 },
    "United States": { symbol: "$", rate: 0.012 },
    "Australia": { symbol: "A$", rate: 0.018 },
    "UAE": { symbol: "AED", rate: 0.044 },
  };
  const curr = currencyMap[country] || { symbol: "$", rate: 0.012 };
  return range.replace(/₹([\d,]+)/g, (_, num) => {
    const val = parseInt(num.replace(/,/g, ""), 10);
    const converted = Math.round(val * curr.rate);
    return `${curr.symbol}${converted.toLocaleString()}`;
  });
}

function SectionDivider() {
  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-12">
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff4500]/20 to-transparent" />
    </div>
  );
}

interface Props {
  location: LocationInfo;
  serviceSlug: string;
  serviceName: string;
}

export default function LocationServiceTemplate({ location, serviceSlug, serviceName }: Props) {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const serviceData = servicePages[serviceSlug];
  const cityName = location.name;
  const enrichment = getCityServiceContent(serviceSlug, location.slug);
  const enrichedFaqs = enrichment?.faqs;
  const generatedFaqs = [
    { q: `Why should I choose TML for ${serviceName.toLowerCase()} in ${cityName}?`, a: `TML combines deep ${serviceName.toLowerCase()} expertise with local market knowledge of ${cityName}. We've delivered proven results for 500+ businesses and understand what works in the ${location.state} market. Our team specializes in ${location.industries.slice(0, 3).join(", ")} sectors that drive ${cityName}'s economy.` },
    { q: `How much does ${serviceName.toLowerCase()} cost in ${cityName}?`, a: `Our ${serviceName.toLowerCase()} packages are customized for each business based on scope, goals, and competitive landscape in ${cityName}. We offer flexible plans starting from affordable entry-level packages to enterprise solutions. Contact us for a free consultation and custom quote tailored to your ${cityName} business needs.` },
    { q: `Do you work with ${cityName} businesses remotely?`, a: `Yes! While we love in-person meetings, we work seamlessly with ${cityName} businesses through video calls, shared dashboards, and regular reporting. Many of our most successful projects in ${location.state} have been managed remotely with excellent results.` },
    { q: `How quickly can I see results from ${serviceName.toLowerCase()} in ${cityName}?`, a: `Timeline varies by service. Paid campaigns like Google Ads can generate results within days, while organic strategies like SEO typically show significant impact within 3-6 months. We set realistic expectations during our initial consultation and provide regular progress updates.` },
    { q: `What industries do you serve in ${cityName}?`, a: `We serve all major industries in ${cityName} including ${location.industries.join(", ")}. Each industry requires a unique ${serviceName.toLowerCase()} approach, and our team has experience across all these sectors.` },
    { q: `What makes ${cityName} a good market for ${serviceName.toLowerCase()}?`, a: `${cityName} is ${location.description.toLowerCase()}, with a rapidly growing digital economy. The city's ${location.industries.slice(0, 3).join(", ")} sectors create high demand for professional ${serviceName.toLowerCase()} services. Businesses investing in ${serviceName.toLowerCase()} here gain a significant competitive edge.` },
    { q: `Do you provide ${serviceName.toLowerCase()} reports for ${cityName} campaigns?`, a: `Absolutely. We provide detailed monthly reports covering all KPIs, campaign performance, ROI metrics, and actionable insights specific to your ${cityName} market. Full transparency is a core part of our service.` },
    { q: `Can you handle ${serviceName.toLowerCase()} for multiple locations in ${location.state}?`, a: `Yes, we regularly manage multi-location ${serviceName.toLowerCase()} campaigns across ${location.state} and ${location.country}. We can create location-specific strategies for each area while maintaining brand consistency across all your ${serviceName.toLowerCase()} efforts.` },
  ];
  const locationFaqs = enrichedFaqs || generatedFaqs;

  const serviceSchema = generateServiceSchema({
    name: `${serviceName} in ${cityName}`,
    description: `TML is a leading ${serviceName.toLowerCase()} agency serving businesses across ${location.region}.`,
    url: `https://townmedialabs.com/services/${serviceSlug}/${location.slug}`,
    areaServed: cityName,
    category: serviceName,
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    name: `TML Agency - ${cityName}`,
    description: `Leading ${serviceName.toLowerCase()} agency in ${cityName}, ${location.state}.`,
    url: `https://townmedialabs.com/services/${serviceSlug}/${location.slug}`,
    city: cityName,
    state: location.state,
    services: serviceData ? serviceData.features.map((f) => f.title) : [serviceName],
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://townmedialabs.com" },
    { name: "Services", url: "https://townmedialabs.com/services" },
    { name: serviceName, url: `https://townmedialabs.com/services/${serviceSlug}` },
    { name: cityName, url: `https://townmedialabs.com/services/${serviceSlug}/${location.slug}` },
  ]);

  const faqSchema = generateFAQSchema(
    locationFaqs.map((faq) => ({ question: faq.q, answer: faq.a }))
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
            { label: serviceName, href: `/services/${serviceSlug}` },
            { label: cityName, href: `/services/${getLocationServiceSlug(serviceSlug, location.slug)}` },
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
            <span className="text-[11px] text-[#ff4500] tracking-wide font-medium">{enrichment?.heroBadge || `Trusted by ${cityName} Businesses`}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6"
          >
            {enrichment?.h1 ? (
              <>
                {enrichment.h1.replace(/\bin\s+\S+$/i, "").trim()}
                <br />
                <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
                  in {cityName}
                </span>
              </>
            ) : (
              <>
                Best {serviceName} Agency
                <br />
                <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
                  in {cityName}
                </span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-lg md:text-xl text-white/90 font-medium mb-4"
          >
            {enrichment?.tagline || `Grow your ${cityName} business with expert ${serviceName.toLowerCase()} services.`}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-sm md:text-base text-white/30 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {enrichment?.heroDescription || `TML is a leading ${serviceName.toLowerCase()} agency serving businesses across ${location.region}. We combine deep industry expertise with local market understanding to deliver ${serviceName.toLowerCase()} solutions that drive real results for ${cityName} businesses.`}
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
              href={`/services/${serviceSlug}`}
              className="px-8 py-4 rounded-full border border-white/10 text-white/90 font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              View Full Service Details
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Group: Core content sections — Why Choose, Process, Features, Expertise */}
      <div className="contents">

      {/* Why Choose Us */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase mb-4">Why Choose TML</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            Why {cityName} businesses choose us<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(enrichment?.whyChoose || [
              { title: `${cityName} Market Expertise`, description: `We understand ${cityName}'s market dynamics, consumer behavior, and what resonates with the local audience across ${location.region}.` },
              { title: "Proven Track Record", description: `500+ successful projects delivered for businesses in ${location.state}. Our results speak for themselves.` },
              { title: "Industry Specialization", description: `Deep experience working with ${location.industries.slice(0, 4).join(", ")} businesses — the industries that drive ${cityName}'s economy.` },
              { title: "End-to-End Solutions", description: `From strategy to execution, we handle everything so you can focus on running your ${cityName} business.` },
            ]).map((item, i) => (
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

      {/* How We Work - Process Section */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase mb-4">Our Process</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            Our {serviceName} Process in {cityName}<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(enrichment?.processSteps ? enrichment.processSteps.map((s, i) => ({ step: i + 1, title: s.title, description: s.description })) : [
              { step: 1, title: "Consultation", description: `We start by understanding your ${cityName} business goals, target audience, and current ${serviceName.toLowerCase()} landscape to identify opportunities.` },
              { step: 2, title: "Planning", description: `Our team develops a tailored ${serviceName.toLowerCase()} strategy designed specifically for the ${cityName} market and your unique business needs.` },
              { step: 3, title: "Implementation", description: `We execute the plan with precision — deploying ${serviceName.toLowerCase()} campaigns and assets optimized for maximum impact in ${cityName}.` },
              { step: 4, title: "Growth", description: `We continuously monitor, analyze, and optimize your ${serviceName.toLowerCase()} performance to ensure sustained growth for your ${cityName} business.` },
            ]).map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#ff4500]/10 absolute top-4 right-4">{String(item.step).padStart(2, "0")}</div>
                <div className="w-10 h-10 rounded-full bg-[#ff4500]/10 flex items-center justify-center mb-5">
                  <span className="text-sm font-bold text-[#ff4500]">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Service Features */}
      {serviceData && (
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
          <div className="relative mx-auto max-w-7xl">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase mb-4">What We Offer</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
              Our {serviceName} Services in {cityName}<span className="text-[#ff4500]">.</span>
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

      {/* Our Expertise */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase mb-4">Our Expertise</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            Why {cityName} Businesses Trust Our {serviceName}<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { stat: 500, suffix: "+", label: "Projects Delivered", description: `We have successfully delivered over 500 ${serviceName.toLowerCase()} projects for businesses across ${location.state} and beyond.` },
              { stat: 98, suffix: "%", label: "Client Retention Rate", description: `Our commitment to results keeps ${cityName} businesses coming back. A 98% retention rate speaks to the quality of our work.` },
              { stat: 5, suffix: "x", label: "Average ROI", description: `${cityName} businesses working with TML see an average 5x return on their ${serviceName.toLowerCase()} investment within the first year.` },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#ff4500] mb-2">
                  <AnimatedCounter target={item.stat} suffix={item.suffix} duration={2} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.label}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Local Content — alternating two-column layout */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-[#ff4500]/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-5xl">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-10">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase font-semibold">Local Expertise</motion.p>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} className="flex-1 h-[1px] bg-white/[0.06] origin-left" />
          </div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-14">
            {serviceName} in {cityName}<span className="text-[#ff4500]">.</span>
          </motion.h2>

          {/* Content blocks — card grid for local info */}
          <div className="space-y-16">
            {/* Block 1: Your Local Partner */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease }}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono text-[#ff4500]/50 font-bold">01</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ff4500]/20 to-transparent" />
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                <div className="md:w-2/5">
                  <h3 className="text-2xl sm:text-3xl font-medium text-white leading-tight">Your Local {serviceName} Partner<span className="text-[#ff4500]">.</span></h3>
                </div>
                <div className="md:w-3/5 space-y-5 pl-5 border-l border-white/[0.06]">
                  {enrichment?.localContent ? (
                    enrichment.localContent.map((p, i) => (
                      <p key={i} className="text-sm md:text-[15px] text-white/45 leading-[1.8]">{p}</p>
                    ))
                  ) : (
                    <>
                      <p className="text-sm md:text-[15px] text-white/45 leading-[1.8]">
                        As a leading {serviceName.toLowerCase()} agency serving {cityName}, TML has helped businesses across
                        {" "}{location.region} achieve their digital marketing goals. Whether you&apos;re a startup or an established
                        enterprise — our {serviceName.toLowerCase()} expertise delivers measurable results.
                      </p>
                      <p className="text-sm md:text-[15px] text-white/45 leading-[1.8]">
                        From businesses near {location.landmarks[0]} to companies across {location.landmarks.slice(1, 3).join(" and ")} —
                        we&apos;ve delivered {serviceName.toLowerCase()} solutions that drive growth. Our local knowledge combined
                        with national-level expertise makes TML the ideal partner for {cityName} businesses.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Block 2: Market Overview */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease }}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono text-[#ff4500]/50 font-bold">02</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ff4500]/20 to-transparent" />
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-start">
                <div className="md:w-2/5">
                  <h3 className="text-2xl sm:text-3xl font-medium text-white leading-tight">{cityName} Market Overview<span className="text-[#ff4500]">.</span></h3>
                </div>
                <div className="md:w-3/5 space-y-5 pl-5 border-l border-white/[0.06]">
                  <p className="text-sm md:text-[15px] text-white/45 leading-[1.8]">
                    {cityName} is home to thriving {location.industries.slice(0, 3).join(", ")} industries, and each requires
                    a unique {serviceName.toLowerCase()} approach. With a diverse economy driven by {location.industries.slice(0, 4).join(", ")}, businesses are
                    increasingly turning to digital solutions to stay competitive.
                  </p>
                  <p className="text-sm md:text-[15px] text-white/45 leading-[1.8]">
                    The competitive landscape in {cityName} is evolving rapidly. At TML, we help you navigate this by identifying
                    gaps in your competitors&apos; strategies and positioning your brand where it matters most — in front of your
                    {" "}{cityName} audience at the right time, on the right platform.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Block 3: Unique Content (if available) */}
            {location.uniqueContent && location.uniqueContent.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, ease }}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono text-[#ff4500]/50 font-bold">03</span>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ff4500]/20 to-transparent" />
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                  <div className="md:w-2/5">
                    <h3 className="text-2xl sm:text-3xl font-medium text-white leading-tight">What Makes {cityName} Unique<span className="text-[#ff4500]">.</span></h3>
                  </div>
                  <div className="md:w-3/5 space-y-5 pl-5 border-l border-white/[0.06]">
                    {location.uniqueContent.map((paragraph, i) => (
                      <motion.p key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease }}
                        className="text-sm md:text-[15px] text-white/45 leading-[1.8]"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Market Insight Card */}
      {enrichment?.marketInsight && (
        <>
          <SectionDivider />
          <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
            <div className="relative mx-auto max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2, ease }}>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">{cityName} Market Insights</h3>
                <div className="p-6 md:p-8 rounded-2xl border border-[#ff4500]/10 bg-[#ff4500]/[0.03]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <div className="text-3xl md:text-4xl font-bold text-[#ff4500]">{enrichment.marketInsight.stat}</div>
                    <p className="text-sm text-white/90 leading-relaxed">{enrichment.marketInsight.headline}</p>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">{enrichment.marketInsight.body}</p>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {/* Pricing Note (from service data) */}
      {serviceData?.pricingNote && (
        <>
          <SectionDivider />
          <section className="relative w-full px-6 py-12 md:py-16 lg:px-12 bg-[#080808]">
            <div className="relative mx-auto max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }}
                className="relative p-[1px] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff4500]/30 via-[#ff4500]/5 to-[#ff4500]/20 opacity-60" />
                <div className="relative bg-[#0a0a0a] rounded-2xl p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-[#ff4500]/10 border border-[#ff4500]/20 flex items-center justify-center">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] text-[#ff4500]/60 tracking-[0.2em] uppercase font-semibold mb-2">Transparent Pricing</p>
                      <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">{serviceName} Investment in {cityName}</h2>
                      <p className="text-sm md:text-[15px] text-white/45 leading-[1.8] mb-6">{serviceData.pricingNote}</p>
                      <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_20px_rgba(255,69,0,0.25)]">
                        Get a Custom Quote
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      <SectionDivider />

      {/* Industries */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center">
            Industries We Serve in {cityName}<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {(() => {
              const allIndustries = enrichment?.industries || location.industries;
              const chunkSize = 4;
              const chunks: string[][] = [];
              for (let c = 0; c < allIndustries.length; c += chunkSize) {
                chunks.push(allIndustries.slice(c, c + chunkSize));
              }
              return chunks.map((chunk, ci) => (
                <div key={ci} className="contents">
                  {chunk.map((ind, i) => (
                    <motion.div key={ind} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (ci * chunkSize + i) * 0.05, ease }}
                      className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/20 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#ff4500]/50 flex-shrink-0" />
                      <span className="text-sm text-white/90 capitalize">{ind}</span>
                    </motion.div>
                  ))}
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      </div>{/* End: Core content sections group */}

      <SectionDivider />

      {/* Group: Trust, SEO Content, Cross-links, FAQ sections */}
      <div className="contents">

      {/* Trusted by Businesses - Trust Section */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-10">
            Trusted by {cityName} Businesses<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease }}
            className="p-8 md:p-12 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#ff4500]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg md:text-xl text-white/90 font-medium mb-2">Trusted by 500+ businesses</p>
            <p className="text-white/30 text-sm mb-6">across {location.region}</p>
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6" />
            <p className="text-sm md:text-base text-white/90 italic leading-relaxed max-w-2xl mx-auto">
              &ldquo;TML transformed our digital presence in {cityName}. Their {serviceName.toLowerCase()} expertise
              delivered results that exceeded our expectations. Highly recommended for any {cityName} business
              looking to grow.&rdquo;
            </p>
            <p className="text-xs text-white/30 mt-4">— A satisfied {cityName} business owner</p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Rich SEO Content Section — JustDial-style long-form */}
      {(() => {
        const seoData = serviceSeoContent[serviceSlug];
        if (!seoData) return null;
        return (
          <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
            <div className="relative mx-auto max-w-4xl">

              {/* Main H2 heading */}
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8">
                Unlock Your Business Potential with Comprehensive {serviceName} Services in {cityName}<span className="text-[#ff4500]">.</span>
              </motion.h2>

              <div className="space-y-12">
                {/* Group 1: Intro + Offerings + Pricing */}
                <div className="space-y-12">
                  {/* Intro */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
                    <p className="text-sm md:text-base text-white/90 leading-[1.9] mb-4">
                      {seoData.intro}
                    </p>
                    <p className="text-sm md:text-base text-white/90 leading-[1.9]">
                      Additionally, businesses in {cityName} across {location.industries.slice(0, 3).join(", ")} sectors are increasingly turning to professional {serviceName.toLowerCase()} services to stay competitive. Whether you&apos;re based near {location.landmarks[0]}, operating in {location.landmarks[1]}, or serving customers across {location.region} — TML Agency delivers tailored {serviceName.toLowerCase()} solutions that drive measurable results for {cityName} businesses.
                    </p>
                  </motion.div>

                  {/* Products & Services Offered */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                      Products and Services Offered by a {serviceName} Agency in {cityName}
                    </h3>
                    <div className="space-y-4">
                      {seoData.offerings.map((offering, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04, ease }}
                          className="flex items-start gap-4"
                        >
                          <span className="mt-2 w-2 h-2 rounded-full bg-[#ff4500]/60 flex-shrink-0" />
                          <div>
                            <h4 className="text-base font-semibold text-white/90 mb-1">{offering.title}</h4>
                            <p className="text-sm text-white/90 leading-relaxed">{offering.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Pricing Section */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                      Charges for {serviceName} Services in {cityName}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed mb-6">
                      Approximate pricing varies depending on services, scope, and business requirements. Contact us for a customised quote.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {seoData.pricingTiers.map((tier, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08, ease }}
                          className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-[#ff4500]/20 transition-colors"
                        >
                          <p className="text-[10px] text-[#ff4500]/60 uppercase tracking-wider font-semibold mb-2">{tier.tier}</p>
                          <p className="text-lg font-bold text-white mb-3">{convertPriceRange(tier.range, location.country)}</p>
                          <p className="text-xs text-white/35 leading-relaxed">{tier.includes}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Group 2: Benefits + How to Choose + Why Needed */}
                <div className="space-y-12">
                  {/* Benefits */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                      Benefits of Availing {serviceName} Services for Your {cityName} Business
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {seoData.benefits.map((benefit, i) => (
                        <motion.div key={i} initial={{ opacity: 0, x: -5 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03, ease }}
                          className="flex items-start gap-3 p-3 rounded-lg"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff4500]/60 flex-shrink-0" />
                          <p className="text-sm text-white/45 leading-relaxed">{benefit}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* How to Choose */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                      How to Decide Which {serviceName} Service is Suitable for Your Business in {cityName}
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed mb-5">
                      Choosing the right {serviceName.toLowerCase()} partner in {cityName} is a critical decision. Here are key factors to consider when evaluating {serviceName.toLowerCase()} agencies in {location.state}:
                    </p>
                    <ul className="space-y-3">
                      {seoData.howToChoose.map((item, i) => (
                        <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04, ease }}
                          className="flex items-start gap-3 text-sm text-white/45 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff4500]/60 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Why You Need This */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                      Why Do You Need {serviceName} Services in {cityName}?
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed mb-5">
                      {cityName}, known as {location.description.toLowerCase()}, has a rapidly growing digital economy. Here&apos;s why investing in professional {serviceName.toLowerCase()} services is essential for businesses in {cityName}:
                    </p>
                    <ul className="space-y-3">
                      {seoData.whyNeeded.map((reason, i) => (
                        <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04, ease }}
                          className="flex items-start gap-3 text-sm text-white/45 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff4500]/60 flex-shrink-0" />
                          {reason}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Group 3: Types + Industry Focus + CTA */}
                <div className="space-y-12">
                  {/* Types */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                      Types of {serviceName} Services Available in {cityName}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {seoData.types.map((type, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05, ease }}
                          className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/20 transition-colors"
                        >
                          <h4 className="text-base font-semibold text-white/90 mb-2">{type.title}</h4>
                          <p className="text-xs text-white/35 leading-relaxed">{type.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Industry Focus for City */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                      {serviceName} for {cityName}&apos;s Key Industries
                    </h3>
                    <p className="text-sm text-white/90 leading-relaxed mb-5">
                      {cityName} has a diverse economy driven by {location.industries.join(", ")}. Each industry requires a specialised {serviceName.toLowerCase()} approach. Here&apos;s how TML serves {cityName}&apos;s key sectors:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {location.industries.map((ind, i) => (
                        <motion.div key={ind} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04, ease }}
                          className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                        >
                          <h5 className="text-sm font-semibold text-white/90 capitalize mb-1">{serviceName} for {ind}</h5>
                          <p className="text-xs text-white/35 leading-relaxed">
                            Tailored {serviceName.toLowerCase()} strategies for {cityName}&apos;s {ind} sector — from audience targeting and content creation to performance tracking and ROI optimisation.
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* CTA paragraph */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                      Get Started with {serviceName} in {cityName} Today
                    </h3>
                    <p className="text-sm md:text-base text-white/90 leading-[1.9] mb-4">
                      Ready to take your {cityName} business to the next level? TML Agency offers a free, no-obligation consultation where we&apos;ll analyse your current {serviceName.toLowerCase()} presence, identify opportunities for growth, and present a customised strategy designed for your business goals. Whether you&apos;re looking to dominate local search in {cityName}, build brand awareness across {location.state}, or generate high-quality leads from {location.region} — we have the expertise to make it happen.
                    </p>
                    <p className="text-sm md:text-base text-white/90 leading-[1.9]">
                      Join 500+ businesses across {location.country} who have trusted TML with their {serviceName.toLowerCase()} needs. Our clients in {cityName} consistently report improved visibility, higher engagement, and measurable business growth. Contact us today and discover why TML is the preferred {serviceName.toLowerCase()} agency for businesses in {cityName}, {location.state}.
                    </p>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>
        );
      })()}

      <SectionDivider />

      {/* Also Available In - Cross-linking */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-xl sm:text-2xl font-medium text-white mb-8">
            {serviceName} in Other Cities
          </motion.h3>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease }} className="flex flex-wrap items-center justify-center gap-3">
            {(() => {
              if (enrichment?.crossLinks) {
                return enrichment.crossLinks.map((loc) => {
                  const fullLoc = locations[loc.slug];
                  if (!fullLoc) return null;
                  return fullLoc;
                }).filter(Boolean) as LocationInfo[];
              }
              const allOther = Object.values(locations).filter((loc) => loc.slug !== location.slug);
              const sameCountry = allOther.filter((loc) => loc.country === location.country);
              const otherCountry = allOther.filter((loc) => loc.country !== location.country);
              return [...sameCountry.slice(0, 5), ...otherCountry.slice(0, 3)];
            })().map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/services/${getLocationServiceSlug(serviceSlug, loc.slug)}`}
                  className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-white/90 hover:text-[#ff4500] hover:border-[#ff4500]/30 hover:bg-[#ff4500]/5 transition-all duration-300"
                >
                  {serviceName} in {loc.name}
                </Link>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Other Services in this City */}
      <section className="relative w-full px-6 py-12 lg:px-12">
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h3 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="text-lg sm:text-xl font-medium text-white/90 mb-6">
            Other Services in {cityName}
          </motion.h3>
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease }} className="flex flex-wrap items-center justify-center gap-3">
            {["branding", "seo", "google-ads", "website-development", "social-media", "lead-generation", "graphic-design", "video-editing", "branding-packaging", "ai-influencer-management", "music-release"]
              .filter((s) => s !== serviceSlug)
              .slice(0, 6)
              .map((s) => {
                const sData = servicePages[s];
                if (!sData) return null;
                return (
                  <Link
                    key={s}
                    href={`/services/${getLocationServiceSlug(s, location.slug)}`}
                    className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-white/90 hover:text-[#ff4500] hover:border-[#ff4500]/30 hover:bg-[#ff4500]/5 transition-all duration-300"
                  >
                    {sData.title} in {cityName}
                  </Link>
                );
              })}
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-3xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center">
            {serviceName} in {cityName} — FAQs<span className="text-[#ff4500]">.</span>
          </motion.h2>
          <div className="space-y-3">
            {(() => {
              const chunkSize = 4;
              const chunks: typeof locationFaqs[] = [];
              for (let c = 0; c < locationFaqs.length; c += chunkSize) {
                chunks.push(locationFaqs.slice(c, c + chunkSize));
              }
              return chunks.map((chunk, ci) => (
                <div key={ci} className="space-y-3">
                  {chunk.map((faq, i) => (
                    <motion.details key={ci * chunkSize + i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: (ci * chunkSize + i) * 0.08, ease }}
                      className="group border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/[0.1] transition-colors"
                    >
                      <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none text-white font-medium text-sm md:text-base">
                        <span className="pr-4">{faq.q}</span>
                        <span className="text-white/30 text-xl transition-transform duration-300 group-open:rotate-45 flex-shrink-0">+</span>
                      </summary>
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-white/90 leading-relaxed border-t border-white/[0.04] pt-4">
                        {faq.a}
                      </div>
                    </motion.details>
                  ))}
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Related Blog Articles */}
      {(() => {
        const blogSlugs = (serviceRelatedBlogs[serviceSlug] || []).slice(0, 3);
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
                className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase mb-4"
              >
                Read More
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="text-2xl sm:text-3xl font-medium text-white mb-10"
              >
                {serviceName} Insights &amp; Articles
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

      {/* Industries We Serve in City */}
      {(() => {
        const industrySlugs = serviceRelatedIndustries[serviceSlug] || [];
        const relatedIndustryData = industrySlugs
          .map((slug) => {
            const legacy = industries[slug];
            const v2 = industryPages[slug];
            if (v2) return { slug, name: v2.name, description: v2.metaDescription };
            if (legacy) return { slug, name: legacy.name, description: legacy.description };
            return null;
          })
          .filter(Boolean) as { slug: string; name: string; description: string }[];
        if (relatedIndustryData.length === 0) return null;
        return (
          <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
            <div className="relative mx-auto max-w-7xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase mb-4"
              >
                Industries We Serve
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="text-2xl sm:text-3xl font-medium text-white mb-10"
              >
                Industries We Serve in {cityName}
                <span className="text-[#ff4500]">.</span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedIndustryData.map((ind, i) => (
                  <motion.div
                    key={ind.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  >
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 h-full"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#ff4500] transition-colors">
                        {ind.name}
                      </h3>
                      <p className="text-sm text-white/90 leading-relaxed mb-4 line-clamp-3">
                        {ind.description}
                      </p>
                      <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
                        View Industry &rarr;
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      </div>{/* End: Trust, SEO, Cross-links, FAQ group */}

      {/* CTA */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6">
            Ready to grow in {cityName}<span className="text-[#ff4500]">?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1, ease }} className="text-sm md:text-base text-white/90 mb-10 max-w-xl mx-auto">
            Get a free consultation for your {serviceName.toLowerCase()} needs. No obligations — just expert advice for your {cityName} business.
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

      <FooterHome2 />
    </main>
  );
}
