"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { ChandigarhServiceData } from "@/data/chandigarhServices";
import { servicePages } from "@/data/servicePages";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import { generateServiceSchema, generateLocalBusinessSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { getImagesForService } from "@/data/portfolioImages";
import Image from "next/image";

/** Parse stat value into animatable parts, or null for plain text */
function parseStatValue(value: string): { target: number; prefix: string; suffix: string; decimals: number } | null {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const prefix = match[1];
  const numStr = match[2];
  const suffix = match[3];
  const target = parseFloat(numStr);
  if (isNaN(target) || target === 0) return null;
  const decimalPart = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { target, prefix, suffix, decimals: decimalPart };
}

/* ─── Lightweight IntersectionObserver hook ─── */
function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".scroll-reveal, .scroll-reveal-scale");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}

/* ─── Simple "is in view" hook for stats counter ─── */
function useInViewOnce(threshold = 0.3) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

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
  const [statsRef, statsInView] = useInViewOnce(0.3);
  const scrollRef = useScrollReveal();
  const serviceData = servicePages[data.serviceSlug];

  const serviceSchema = generateServiceSchema({
    name: data.title,
    description: data.metaDescription,
    url: `https://townmedialabs.ca/services/${data.slug}`,
    areaServed: "Chandigarh",
    category: serviceData?.title,
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    name: "TML Agency - Chandigarh",
    description: data.metaDescription,
    url: `https://townmedialabs.ca/services/${data.slug}`,
    city: "Chandigarh",
    state: "Punjab",
    services: serviceData ? serviceData.features.map((f) => f.title) : [],
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://townmedialabs.ca" },
    { name: "Services", url: "https://townmedialabs.ca/services" },
    { name: serviceData?.title || data.title, url: `https://townmedialabs.ca/services/${data.serviceSlug}` },
    { name: "Chandigarh", url: `https://townmedialabs.ca/services/${data.slug}` },
  ]);

  const faqSchema = generateFAQSchema(
    data.faqs.map((faq) => ({ question: faq.q, answer: faq.a }))
  );

  return (
    <main className="bg-[#050505] text-white min-h-screen" ref={scrollRef}>
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
          <div className="hero-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff4500]/20 bg-[#ff4500]/5 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ff4500] animate-pulse" />
            <span className="text-[11px] text-[#ff4500] tracking-wide font-medium">Chandigarh&apos;s Trusted Agency</span>
          </div>

          <h1 className="hero-fade-up hero-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6">
            {data.h1.replace("Chandigarh", "").replace("in ", "").trim()}
            <br />
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              in Chandigarh
            </span>
          </h1>

          <p className="hero-fade-up hero-delay-2 text-lg md:text-xl text-white font-medium mb-4">
            {data.tagline}
          </p>

          <p className="hero-fade-up hero-delay-3 text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto mb-10">
            {data.heroDescription}
          </p>

          <div className="hero-fade-up hero-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
            >
              Get a Free Quote
            </Link>
            <Link
              href={`/services/${data.serviceSlug}`}
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              View Full Service Details
            </Link>
          </div>
        </div>
      </section>

      {/* Stats from parent service */}
      {serviceData && (
        <section ref={statsRef as React.RefObject<HTMLElement>} className="relative w-full px-6 py-12 md:py-16 lg:px-12">
          <div className="relative mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {serviceData.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`scroll-reveal scroll-delay-${i + 1} text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]`}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {(() => {
                      const parsed = parseStatValue(stat.value);
                      if (!statsInView) return <span className="text-white">&mdash;</span>;
                      if (!parsed) return <span className="text-[#ff4500]">{stat.value}</span>;
                      return (
                        <AnimatedCounter
                          target={parsed.target}
                          prefix={parsed.prefix}
                          suffix={parsed.suffix}
                          decimals={parsed.decimals}
                          duration={2}
                        />
                      );
                    })()}
                  </div>
                  <p className="text-xs text-white">{stat.label}</p>
                </div>
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
          <p className="scroll-reveal text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4">Why Choose TML</p>
          <h2 className="scroll-reveal scroll-delay-1 text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            Why Chandigarh Businesses Choose Our {serviceData?.title || data.title}<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.whyChoose.map((item, i) => (
              <div key={item.title} className={`scroll-reveal scroll-delay-${i + 1} group p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500`}>
                <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff4500]/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#ff4500]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* How We Work - Process */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-5xl">
          <p className="scroll-reveal text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4">How We Work</p>
          <h2 className="scroll-reveal scroll-delay-1 text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            Our {serviceData?.title || data.title} Process in Chandigarh<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {/* Timeline connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(12.5%+12px)] right-[calc(12.5%+12px)] h-px bg-gradient-to-r from-[#ff4500]/40 via-[#ff4500]/20 to-[#ff4500]/40" />
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className={`scroll-reveal scroll-delay-${i + 1} relative text-center`}
              >
                <div className="relative z-10 w-20 h-20 rounded-full border border-[#ff4500]/30 bg-[#0a0a0a] flex items-center justify-center mx-auto mb-5">
                  <span className="text-xl font-bold text-[#ff4500]">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-white leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Service Features from parent */}
      {serviceData && (
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
          <div className="relative mx-auto max-w-7xl">
            <p className="scroll-reveal text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4">What We Offer</p>
            <h2 className="scroll-reveal scroll-delay-1 text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
              Our {serviceData.title} Services in Chandigarh<span className="text-[#ff4500]">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {serviceData.features.map((f, idx) => (
                <div key={f.title} className={`scroll-reveal scroll-delay-${(idx % 11) + 1} p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500`}>
                  <div className="text-[10px] text-white font-mono mb-4">{String(idx + 1).padStart(2, "0")}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
                  <p className="text-sm text-white leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <SectionDivider />

      {/* Industries We Serve */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="scroll-reveal text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4">Who We Work With</p>
          <h2 className="scroll-reveal scroll-delay-1 text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            {serviceData?.title || data.title} for Chandigarh Industries<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {industries.map((industry, i) => (
              <span
                key={industry}
                className={`scroll-reveal-scale scroll-delay-${(i % 11) + 1} px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-sm text-white font-medium hover:border-[#ff4500]/40 hover:bg-[#ff4500]/10 hover:text-white transition-all duration-300 cursor-default`}
              >
                {industry}
              </span>
            ))}
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
          <h2 className="scroll-reveal text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12">
            {data.title} — Your Local Partner<span className="text-[#ff4500]">.</span>
          </h2>
          {/* Portfolio image for this service */}
          {(() => {
            const images = getImagesForService(data.serviceSlug, 1);
            return images[0] ? (
              <div className="scroll-reveal scroll-delay-1 relative w-full aspect-[21/9] overflow-hidden rounded-2xl border border-white/[0.06] mb-10">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            ) : null;
          })()}
          {/* Pull quote from first paragraph, then flowing text */}
          {data.localContent.length > 0 && (
            <div className="scroll-reveal scroll-delay-1 mb-8 pl-6 border-l-2 border-[#ff4500]/40">
              <p className="text-lg text-white/90 leading-relaxed italic font-light">{data.localContent[0]}</p>
            </div>
          )}
          {data.localContent.length > 1 && (
            <div className="scroll-reveal scroll-delay-2 space-y-5 mb-12">
              {data.localContent.slice(1).map((p, i) => (
                <p key={i} className="text-sm md:text-base text-white/80 leading-[1.9]">{p}</p>
              ))}
            </div>
          )}

          {/* Chandigarh Market Insights sub-section */}
          <div className="scroll-reveal scroll-delay-2">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">Chandigarh Market Insights</h3>
            <div className="p-6 md:p-8 rounded-2xl border border-[#ff4500]/10 bg-[#ff4500]/[0.03]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <div className="text-3xl md:text-4xl font-bold text-[#ff4500]">67%</div>
                <p className="text-sm text-white leading-relaxed">
                  of Chandigarh businesses have increased their digital marketing budgets in the past year, making the tricity one of North India&apos;s fastest-growing digital markets.
                </p>
              </div>
              <p className="text-sm text-white leading-relaxed">
                With over 1.2 million internet users in the tricity and a rapidly growing startup ecosystem anchored by IT Park and Mohali&apos;s Phase 8B, Chandigarh presents massive opportunities for businesses investing in {serviceData?.title.toLowerCase() || "digital marketing"}. The city&apos;s young, tech-savvy population and high smartphone penetration make it an ideal market for forward-thinking brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="relative mx-auto max-w-3xl">
          <h2 className="scroll-reveal text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center">
            {serviceData?.title || data.title} in Chandigarh — FAQs<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <details key={i} className={`scroll-reveal scroll-delay-${(i % 11) + 1} group border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/[0.1] transition-colors`}>
                <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none">
                  <h3 className="text-white font-medium text-sm md:text-base pr-4">{faq.q}</h3>
                  <span className="text-white text-xl transition-transform duration-300 group-open:rotate-45 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-white leading-relaxed border-t border-white/[0.04] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Also Available In - Cross-linking */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-3xl text-center">
          <h3 className="scroll-reveal text-lg sm:text-xl font-medium text-white mb-6">
            We also offer {serviceData?.title || data.title} in
          </h3>
          <div className="scroll-reveal scroll-delay-1 flex flex-wrap items-center justify-center gap-3">
            {crossLinkLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/services/${data.serviceSlug}-in-${loc.slug}`}
                className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-white hover:border-[#ff4500]/30 hover:text-white hover:bg-[#ff4500]/10 transition-all duration-300"
              >
                {loc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="scroll-reveal text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6">
            Ready to Grow Your {serviceData?.title || data.title} in Chandigarh<span className="text-[#ff4500]">?</span>
          </h2>
          <p className="scroll-reveal scroll-delay-1 text-sm md:text-base text-white mb-10 max-w-xl mx-auto">
            Get a free consultation for your {serviceData?.title.toLowerCase() || "project"} needs. No obligations — just expert advice from Chandigarh&apos;s top agency.
          </p>
          <div className="scroll-reveal scroll-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
              Get Your Free Consultation
            </Link>
            <a href="tel:+919872648209" className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      </div>{/* End: Local SEO, FAQ, Cross-links, CTA group */}

      <FooterHome2 />
    </main>
  );
}
