"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
import { getImagesForService } from "@/data/portfolioImages";
import { getFeatureVariants, getProcessVariants } from "@/data/serviceFeatureVariants";
import { getSectionHeading, getExpertiseStats, getTrustQuote } from "@/data/sectionVariants";
import { serviceSeoOverlays } from "@/data/serviceSeoContentByCountry";
import { getServiceSeoContentForCountry } from "@/data/serviceSeoContent";
import Image from "next/image";


function SectionDivider() {
  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-12">
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff4500]/20 to-transparent" />
    </div>
  );
}

/**
 * Parse a stat value string like "4.2x", "$5M+", "500+", "1.8s", "98%"
 * into { target, prefix, suffix, decimals } for AnimatedCounter,
 * or null if the value should be rendered as plain text (e.g. "Yes").
 */
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

/** Service-specific stats for the "Our Expertise" section */
const expertiseStats: Record<string, { stat: number; decimals?: number; prefix?: string; suffix: string; label: string; descriptionTemplate: string }[]> = {
  "google-ads": [
    { stat: 500, suffix: "+", label: "Campaigns Managed", descriptionTemplate: "We have successfully managed over 500 Google Ads campaigns for businesses across {state} and beyond." },
    { stat: 4, decimals: 1, suffix: "x", label: "Average ROAS", descriptionTemplate: "Our {city} clients see an average 4.2x return on ad spend, turning every dollar into measurable revenue." },
    { stat: 5, prefix: "$", suffix: "M+", label: "Ad Spend Managed", descriptionTemplate: "We've managed over $5M in ad spend for businesses across {state}, optimizing every dollar for maximum results." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
  ],
  "seo": [
    { stat: 500, suffix: "+", label: "Projects Delivered", descriptionTemplate: "We have successfully delivered over 500 SEO projects for businesses across {state} and beyond." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 3, decimals: 1, suffix: "x", label: "Average ROI", descriptionTemplate: "{city} businesses working with TML see an average 3.5x return on their SEO investment within the first year." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With over 15 years of SEO experience, we bring proven strategies to every {city} business we work with." },
  ],
  "branding": [
    { stat: 500, suffix: "+", label: "Brands Created", descriptionTemplate: "We have designed and built over 500 brands for businesses across {state} and beyond." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 15, suffix: "+", label: "Years Experience", descriptionTemplate: "With over 15 years of branding experience, we bring proven creative strategies to every {city} business we work with." },
    { stat: 50, suffix: "+", label: "Industries Served", descriptionTemplate: "We've created brands across 50+ industries, bringing diverse expertise to every {city} project." },
  ],
  "website-development": [
    { stat: 300, suffix: "+", label: "Websites Delivered", descriptionTemplate: "We have built over 300 websites for businesses across {state} and beyond." },
    { stat: 99, suffix: "%", label: "Client Satisfaction", descriptionTemplate: "Our commitment to quality keeps {city} businesses coming back. A 99% satisfaction rate speaks for itself." },
    { stat: 1, decimals: 1, suffix: "s", label: "Avg Load Time", descriptionTemplate: "Our websites load in under 2 seconds on average, giving {city} businesses a competitive edge in search rankings." },
    { stat: 20, suffix: "+", label: "Technologies Used", descriptionTemplate: "We work with 20+ modern technologies to build the perfect solution for every {city} business." },
  ],
  "social-media": [
    { stat: 2, suffix: "M+", label: "Followers Grown", descriptionTemplate: "We have grown over 2M followers for businesses across {state} and beyond." },
    { stat: 4, decimals: 1, suffix: "%", label: "Engagement Rate", descriptionTemplate: "Our {city} clients see an average 4.8% engagement rate, well above industry benchmarks." },
    { stat: 100, suffix: "+", label: "Brands Managed", descriptionTemplate: "We've managed social media for 100+ brands, bringing proven strategies to every {city} business." },
    { stat: 500, suffix: "+", label: "Content Pieces/Mo", descriptionTemplate: "Our team produces over 500 content pieces per month for clients across {state}." },
  ],
  "lead-generation": [
    { stat: 50, suffix: "K+", label: "Leads Generated", descriptionTemplate: "We have generated over 50,000 qualified leads for businesses across {state} and beyond." },
    { stat: 12, suffix: "%", label: "Conversion Rate", descriptionTemplate: "Our {city} clients see an average 12% conversion rate, far above the industry average." },
    { stat: 500, suffix: "+", label: "Funnels Built", descriptionTemplate: "We've built over 500 lead generation funnels, each optimized for maximum conversions." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
  ],
  "meta-ads": [
    { stat: 5, prefix: "$", suffix: "M+", label: "Ad Spend Managed", descriptionTemplate: "We've managed over $5M in Meta ad spend for businesses across {state}, optimizing every dollar." },
    { stat: 5, decimals: 1, suffix: "x", label: "Average ROAS", descriptionTemplate: "Our {city} clients see an average 5.2x return on their Meta ad spend." },
    { stat: 2000, suffix: "+", label: "Campaigns Run", descriptionTemplate: "We have run over 2,000 Meta ad campaigns for businesses across {state} and beyond." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
  ],
  "ppc-management": [
    { stat: 5, prefix: "$", suffix: "M+", label: "Ad Spend Managed", descriptionTemplate: "We've managed over $5.5M in PPC ad spend for businesses across {state}, optimizing every dollar." },
    { stat: 6, suffix: "+", label: "Platforms Managed", descriptionTemplate: "We manage PPC campaigns across 6+ platforms for {city} businesses." },
    { stat: 32, suffix: "%", label: "Avg CPA Reduction", descriptionTemplate: "{city} businesses working with TML see an average 32% reduction in cost per acquisition." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
  ],
  "video-editing": [
    { stat: 2000, suffix: "+", label: "Videos Produced", descriptionTemplate: "We have produced over 2,000 videos for businesses across {state} and beyond." },
    { stat: 5000, suffix: "+", label: "Hours of Content", descriptionTemplate: "Over 5,000 hours of video content created for {city} businesses and beyond." },
    { stat: 100, suffix: "M+", label: "Views Generated", descriptionTemplate: "Our video content has generated over 100 million views for clients across {state}." },
    { stat: 48, suffix: "hrs", label: "Turnaround Time", descriptionTemplate: "Fast 48-hour turnaround on video edits so {city} businesses never miss a deadline." },
  ],
  "content-writing": [
    { stat: 5000, suffix: "+", label: "Articles Published", descriptionTemplate: "We have published over 5,000 articles for businesses across {state} and beyond." },
    { stat: 60, suffix: "%", label: "Avg Traffic Increase", descriptionTemplate: "Our {city} clients see an average 60% traffic increase from our content strategies." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 25, suffix: "+", label: "Industries Covered", descriptionTemplate: "We write expert content across 25+ industries for {city} businesses." },
  ],
  "graphic-design": [
    { stat: 10, suffix: "K+", label: "Designs Created", descriptionTemplate: "We have created over 10,000 designs for businesses across {state} and beyond." },
    { stat: 500, suffix: "+", label: "Brands Served", descriptionTemplate: "Over 500 brands trust us with their visual identity and design needs." },
    { stat: 99, suffix: "%", label: "On-Time Delivery", descriptionTemplate: "We deliver 99% of {city} design projects on time, every time." },
    { stat: 15, suffix: "+", label: "Design Awards", descriptionTemplate: "Our creative work has earned 15+ industry design awards." },
  ],
  "email-marketing": [
    { stat: 50, suffix: "M+", label: "Emails Sent", descriptionTemplate: "We have sent over 50 million emails for businesses across {state} and beyond." },
    { stat: 32, suffix: "%", label: "Avg Open Rate", descriptionTemplate: "Our {city} clients see an average 32% open rate, well above industry benchmarks." },
    { stat: 42, suffix: "x", label: "Average ROI", descriptionTemplate: "{city} businesses see an average 42x return on their email marketing investment." },
    { stat: 98, suffix: "%", label: "Client Retention", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
  ],
  "content-marketing": [
    { stat: 10, suffix: "K+", label: "Content Pieces", descriptionTemplate: "We have created over 10,000 content pieces for businesses across {state} and beyond." },
    { stat: 70, suffix: "%", label: "Avg Traffic Increase", descriptionTemplate: "Our {city} clients see an average 70% traffic increase from our content marketing." },
    { stat: 50, suffix: "K+", label: "Leads Generated", descriptionTemplate: "Our content strategies have generated over 50,000 leads for clients across {state}." },
    { stat: 25, suffix: "+", label: "Industries Served", descriptionTemplate: "We create content across 25+ industries for {city} businesses." },
  ],
};

/** Default expertise stats used when no service-specific override exists */
function getDefaultExpertiseStats(serviceName: string) {
  return [
    { stat: 500, suffix: "+", label: "Projects Delivered", descriptionTemplate: `We have successfully delivered over 500 ${serviceName.toLowerCase()} projects for businesses across {state} and beyond.` },
    { stat: 98, suffix: "%", label: "Client Retention Rate", descriptionTemplate: "Our commitment to results keeps {city} businesses coming back. A 98% retention rate speaks to the quality of our work." },
    { stat: 5, suffix: "x", label: "Average ROI", descriptionTemplate: `{city} businesses working with TML see an average 5x return on their ${serviceName.toLowerCase()} investment within the first year.` },
  ];
}

/** Simple hook: returns true once the element is in the viewport */
function useNativeInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
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
  return { ref, inView };
}

interface Props {
  location: LocationInfo;
  serviceSlug: string;
  serviceName: string;
}

export default function LocationServiceTemplate({ location, serviceSlug, serviceName }: Props) {
  const { ref: statsRef, inView: statsInView } = useNativeInView(0.3);
  const serviceData = servicePages[serviceSlug];
  const cityName = location.name;
  const enrichment = getCityServiceContent(serviceSlug, location.slug);
  const cityFeatures = getFeatureVariants(serviceSlug, location);
  const cityProcess = getProcessVariants(serviceSlug, location);

  // Unique data sources for 80%+ content uniqueness
  const seed = cityName.length * 31 + serviceSlug.length * 17;
  const countrySeoData = getServiceSeoContentForCountry(serviceSlug, location.country);
  const countryOverlay = serviceSeoOverlays[serviceSlug]?.[location.country];
  const cityExpertiseStats = getExpertiseStats(serviceSlug, location);
  const cityTrustQuote = getTrustQuote(serviceName, cityName, seed);
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
    url: `https://townmedialabs.com/services/${getLocationServiceSlug(serviceSlug, location.slug)}`,
    areaServed: cityName,
    category: serviceName,
  });

  const isHeadquartersCity = location.slug === "edmonton";

  const localBusinessSchema = isHeadquartersCity ? generateLocalBusinessSchema({
    name: `TML Agency - ${cityName}`,
    description: `Leading ${serviceName.toLowerCase()} agency in ${cityName}, ${location.state}.`,
    url: `https://townmedialabs.com/services/${getLocationServiceSlug(serviceSlug, location.slug)}`,
    city: cityName,
    state: location.state,
    services: serviceData ? serviceData.features.map((f) => f.title) : [serviceName],
    coordinates: location.coordinates,
  }) : null;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://townmedialabs.com" },
    { name: "Services", url: "https://townmedialabs.com/services" },
    { name: serviceName, url: `https://townmedialabs.com/services/${serviceSlug}` },
    { name: cityName, url: `https://townmedialabs.com/services/${getLocationServiceSlug(serviceSlug, location.slug)}` },
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
        {localBusinessSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
        )}
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
          <div
            className="hero-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff4500]/20 bg-[#ff4500]/5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#ff4500] animate-pulse" />
            <span className="text-[11px] text-[#ff4500] tracking-wide font-medium">{enrichment?.heroBadge || `Trusted by ${cityName} Businesses`}</span>
          </div>

          <h1
            className="hero-fade-up hero-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6"
          >
            {(() => {
              const raw = enrichment?.h1 || `Best ${serviceName} Agency`;
              // Strip city name from H1 in any position/preposition to avoid duplication
              // (the template always appends "in {cityName}" styled below)
              const escaped = cityName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
              const cleaned = raw
                .replace(new RegExp(`\\b(in|for|across|serving)\\s+${escaped}(,\\s*${location.state.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})?`, "i"), "")
                .replace(new RegExp(`${escaped}'s\\s*`, "i"), "")
                .replace(new RegExp(`\\b${escaped}\\b`, "i"), "")
                .replace(/\s{2,}/g, " ")
                .trim();
              return cleaned;
            })()}{" "}
            <br />
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              in {cityName}
            </span>
          </h1>

          <p
            className="hero-fade-up hero-delay-2 text-lg md:text-xl text-white font-medium mb-4"
          >
            {enrichment?.tagline || `Grow your ${cityName} business with expert ${serviceName.toLowerCase()} services.`}
          </p>

          <p
            className="hero-fade-up hero-delay-3 text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {enrichment?.heroDescription || `TML is a leading ${serviceName.toLowerCase()} agency serving businesses across ${location.region}. We combine deep industry expertise with local market understanding to deliver ${serviceName.toLowerCase()} solutions that drive real results for ${cityName} businesses.`}
          </p>

          <div
            className="hero-fade-up hero-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
            >
              Get a Free Quote
            </Link>
            <Link
              href={`/services/${serviceSlug}`}
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              View Full Service Details
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      {serviceData && (
        <section ref={statsRef} className="relative w-full px-6 py-12 md:py-16 lg:px-12">
          <div className="relative mx-auto max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {serviceData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
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

      {/* Group: Core content sections — Why Choose, Process, Features, Expertise */}
      <div className="contents">

      {/* Why Choose Us */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <p className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4">Why Choose TML</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            {getSectionHeading("whyChoose", serviceName, cityName, seed)}<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(enrichment?.whyChoose || [
              { title: `${cityName} Market Expertise`, description: `We understand ${cityName}'s market dynamics, consumer behavior, and what resonates with the local audience across ${location.region}.` },
              { title: "Proven Track Record", description: `500+ successful projects delivered for businesses in ${location.state}. Our results speak for themselves.` },
              { title: "Industry Specialization", description: `Deep experience working with ${location.industries.slice(0, 4).join(", ")} businesses — the industries that drive ${cityName}'s economy.` },
              { title: "End-to-End Solutions", description: `From strategy to execution, we handle everything so you can focus on running your ${cityName} business.` },
            ]).map((item) => (
              <div key={item.title}
                className="group p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
              >
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

      {/* How We Work - Process Section */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <p className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4">Our Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            {getSectionHeading("process", serviceName, cityName, seed)}<span className="text-[#ff4500]">.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(enrichment?.processSteps ? enrichment.processSteps.map((s, i) => ({ step: i + 1, title: s.title, description: s.description })) : cityProcess.length > 0 ? cityProcess.map((s) => ({ step: parseInt(s.step, 10), title: s.title, description: s.description })) : [
              { step: 1, title: "Consultation", description: `We start by understanding your ${cityName} business goals, target audience, and current ${serviceName.toLowerCase()} landscape to identify opportunities.` },
              { step: 2, title: "Planning", description: `Our team develops a tailored ${serviceName.toLowerCase()} strategy designed specifically for the ${cityName} market and your unique business needs.` },
              { step: 3, title: "Implementation", description: `We execute the plan with precision — deploying ${serviceName.toLowerCase()} campaigns and assets optimized for maximum impact in ${cityName}.` },
              { step: 4, title: "Growth", description: `We continuously monitor, analyze, and optimize your ${serviceName.toLowerCase()} performance to ensure sustained growth for your ${cityName} business.` },
            ]).map((item) => (
              <div key={item.step}
                className="relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#ff4500]/10 absolute top-4 right-4">{String(item.step).padStart(2, "0")}</div>
                <div className="w-10 h-10 rounded-full bg-[#ff4500]/10 flex items-center justify-center mb-5">
                  <span className="text-sm font-bold text-[#ff4500]">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Showcase Strip — early visual break */}
      {(() => {
        const stripImages = getImagesForService(serviceSlug, 7);
        const earlyImages = stripImages.slice(4, 7);
        if (earlyImages.length === 0) return null;
        return (
          <section className="relative w-full px-6 py-12 md:py-16 lg:px-12 overflow-hidden">
            <div className="relative mx-auto max-w-7xl">
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {earlyImages.map((img) => (
                  <div key={img.src} className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/[0.06] group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 33vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      <SectionDivider />

      {/* Service Features */}
      {serviceData && (
        <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
          <div className="relative mx-auto max-w-7xl">
            <p className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
              {getSectionHeading("services", serviceName, cityName, seed)}<span className="text-[#ff4500]">.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {(() => {
                const features = cityFeatures.length > 0 ? cityFeatures : serviceData.features;
                const chunkSize = 3;
                const chunks: (typeof features)[] = [];
                for (let c = 0; c < features.length; c += chunkSize) {
                  chunks.push(features.slice(c, c + chunkSize));
                }
                return chunks.map((chunk, ci) => (
                  <div key={ci} className="contents">
                    {chunk.map((f, i) => {
                      const idx = ci * chunkSize + i;
                      return (
                        <div key={f.title}
                          className="p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
                        >
                          <div className="text-[10px] text-white font-mono mb-4">{String(idx + 1).padStart(2, "0")}</div>
                          <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
                          <p className="text-sm text-white leading-relaxed">{f.description}</p>
                        </div>
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
          <p className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4">Our Expertise</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16">
            {getSectionHeading("trust", serviceName, cityName, seed)}<span className="text-[#ff4500]">.</span>
          </h2>
          <div className={`grid grid-cols-1 gap-5 ${(cityExpertiseStats.length > 0 ? cityExpertiseStats : expertiseStats[serviceSlug] || getDefaultExpertiseStats(serviceName)).length >= 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
            {(cityExpertiseStats.length > 0 ? cityExpertiseStats : expertiseStats[serviceSlug] || getDefaultExpertiseStats(serviceName)).map((item) => {
              const description = item.descriptionTemplate
                .replace(/\{city\}/g, cityName)
                .replace(/\{state\}/g, location.state);
              return (
              <div key={item.label}
                className="p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#ff4500] mb-2">
                  <AnimatedCounter target={item.stat} prefix={item.prefix || ""} suffix={item.suffix} decimals={item.decimals || 0} duration={2} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.label}</h3>
                <p className="text-sm text-white leading-relaxed">{description}</p>
              </div>
              );
            })}
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
            <p className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase font-semibold">Local Expertise</p>
            <div className="flex-1 h-[1px] bg-white/[0.06]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-14">
            {serviceName} in {cityName}<span className="text-[#ff4500]">.</span>
          </h2>

          {/* Content blocks — image + content editorial layout */}
          {(() => {
            const localImages = getImagesForService(serviceSlug, 2);
            return (
          <div className="space-y-16">
            {/* Block 1: Your Local Partner — image + content side by side */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono text-[#ff4500]/50 font-bold">01</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ff4500]/20 to-transparent" />
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                {/* Image side */}
                {localImages[0] && (
                  <div className="md:w-[40%] flex-shrink-0">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.06]">
                      <Image
                        src={localImages[0].src}
                        alt={localImages[0].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {/* Content side */}
                <div className={localImages[0] ? "md:w-[60%]" : "md:w-full"}>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white leading-tight mb-6">Your Local {serviceName} Partner<span className="text-[#ff4500]">.</span></h3>
                  <div className="space-y-5">
                    {enrichment?.localContent ? (
                      enrichment.localContent.map((p, i) => (
                        <p key={i} className="text-sm md:text-[15px] text-white/80 leading-[1.9]">{p}</p>
                      ))
                    ) : (
                      <>
                        <p className="text-sm md:text-[15px] text-white/80 leading-[1.9]">
                          As a leading {serviceName.toLowerCase()} agency serving {cityName}, TML has helped businesses across
                          {" "}{location.region} achieve their digital marketing goals. Whether you&apos;re a startup or an established
                          enterprise — our {serviceName.toLowerCase()} expertise delivers measurable results.
                        </p>
                        <p className="text-sm md:text-[15px] text-white/80 leading-[1.9]">
                          From businesses near {location.landmarks[0]} to companies across {location.landmarks.slice(1, 3).join(" and ")} —
                          we&apos;ve delivered {serviceName.toLowerCase()} solutions that drive growth. Our local knowledge combined
                          with national-level expertise makes TML the ideal partner for {cityName} businesses.
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Block 2: Market Overview — image + content flipped */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-mono text-[#ff4500]/50 font-bold">02</span>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ff4500]/20 to-transparent" />
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-start">
                {/* Image side */}
                {localImages[1] && (
                  <div className="md:w-[40%] flex-shrink-0">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.06]">
                      <Image
                        src={localImages[1].src}
                        alt={localImages[1].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
                {/* Content side */}
                <div className={localImages[1] ? "md:w-[60%]" : "md:w-full"}>
                  <h3 className="text-2xl sm:text-3xl font-medium text-white leading-tight mb-4">{cityName} Market Overview<span className="text-[#ff4500]">.</span></h3>
                  {/* Inline industry tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {location.industries.slice(0, 6).map((industry, i) => (
                      <span key={i} className="text-[11px] px-3 py-1.5 rounded-full border border-white/[0.08] text-white/70">{industry}</span>
                    ))}
                  </div>
                  <div className="space-y-5">
                    <p className="text-sm md:text-[15px] text-white/80 leading-[1.9]">
                      {cityName} is home to thriving {location.industries.slice(0, 3).join(", ")} industries, and each requires
                      a unique {serviceName.toLowerCase()} approach. With a diverse economy driven by {location.industries.slice(0, 4).join(", ")}, businesses are
                      increasingly turning to digital solutions to stay competitive.
                    </p>
                    <p className="text-sm md:text-[15px] text-white/80 leading-[1.9]">
                      The competitive landscape in {cityName} is evolving rapidly. At TML, we help you navigate this by identifying
                      gaps in your competitors&apos; strategies and positioning your brand where it matters most — in front of your
                      {" "}{cityName} audience at the right time, on the right platform.
                    </p>
                    {enrichment?.competitorLandscape && (
                      <p className="text-sm md:text-[15px] text-white/80 leading-[1.9]">{enrichment.competitorLandscape}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Snippet */}
            {enrichment?.caseStudySnippet && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono text-[#ff4500]/50 font-bold">03</span>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ff4500]/20 to-transparent" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white leading-tight mb-6">Case Study<span className="text-[#ff4500]">.</span></h3>
                <div className="p-6 md:p-8 rounded-2xl border border-[#ff4500]/10 bg-[#ff4500]/[0.03]">
                  <p className="text-sm md:text-[15px] text-white/80 leading-[1.9] italic">{enrichment.caseStudySnippet}</p>
                </div>
              </div>
            )}

            {/* Block 3/4: Unique Content (if available) */}
            {location.uniqueContent && location.uniqueContent.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-mono text-[#ff4500]/50 font-bold">{enrichment?.caseStudySnippet ? "04" : "03"}</span>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ff4500]/20 to-transparent" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-white leading-tight mb-8">What Makes {cityName} Unique<span className="text-[#ff4500]">.</span></h3>

                {/* Pull quote from first paragraph */}
                <div className="mb-8 pl-6 border-l-2 border-[#ff4500]/40">
                  <p className="text-lg text-white/90 leading-relaxed italic font-light">{location.uniqueContent[0]}</p>
                </div>

                {location.uniqueContent.length > 1 && (
                  <div className="space-y-5">
                    {location.uniqueContent.slice(1).map((paragraph, i) => (
                      <p key={i} className="text-sm md:text-[15px] text-white/80 leading-[1.9]">{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
            );
          })()}
        </div>
      </section>

      {/* Market Insight Card */}
      {enrichment?.marketInsight && (
        <>
          <SectionDivider />
          <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
            <div className="relative mx-auto max-w-4xl">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">{cityName} Market Insights</h3>
                <div className="p-6 md:p-8 rounded-2xl border border-[#ff4500]/10 bg-[#ff4500]/[0.03]">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                    <div className="text-3xl md:text-4xl font-bold text-[#ff4500]">{enrichment.marketInsight.stat}</div>
                    <p className="text-sm text-white leading-relaxed">{enrichment.marketInsight.headline}</p>
                  </div>
                  <p className="text-sm text-white leading-relaxed">{enrichment.marketInsight.body}</p>
                </div>
              </div>
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
              <div
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
                      <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">{getSectionHeading("pricing", serviceName, cityName, seed)}</h2>
                      <p className="text-sm md:text-[15px] text-white leading-[1.8] mb-6">{serviceData.pricingNote}</p>
                      <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_20px_rgba(255,69,0,0.25)]">
                        Get a Custom Quote
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <SectionDivider />

      {/* Industries */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center">
            {getSectionHeading("industries", serviceName, cityName, seed)}<span className="text-[#ff4500]">.</span>
          </h2>
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
                  {chunk.map((ind) => (
                    <div key={ind}
                      className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/20 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#ff4500]/50 flex-shrink-0" />
                      <span className="text-sm text-white capitalize">{ind}</span>
                    </div>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-10">
            {getSectionHeading("trust", serviceName, cityName, seed + 1)}<span className="text-[#ff4500]">.</span>
          </h2>
          <div
            className="p-8 md:p-12 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#ff4500]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg md:text-xl text-white font-medium mb-2">Trusted by 500+ businesses</p>
            <p className="text-white text-sm mb-6">across {location.region}</p>
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-6" />
            <p className="text-sm md:text-base text-white italic leading-relaxed max-w-2xl mx-auto">
              &ldquo;{cityTrustQuote.quote}&rdquo;
            </p>
            <p className="text-xs text-white mt-4">&mdash; {cityTrustQuote.author}, {cityTrustQuote.role} at {cityTrustQuote.company}</p>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase — visual work samples */}
      {(() => {
        const images = getImagesForService(serviceSlug, 4);
        if (images.length === 0) return null;
        return (
          <>
            <SectionDivider />
            <section className="relative w-full px-6 py-16 md:py-20 lg:px-12 overflow-hidden">
              <div className="relative mx-auto max-w-5xl">
                <h3 className="text-xl sm:text-2xl font-medium text-white mb-8">
                  Our {serviceName} Work<span className="text-[#ff4500]">.</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {images.map((img) => (
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
          </>
        );
      })()}

      <SectionDivider />

      {/* Rich SEO Content Section — engaging varied layouts */}
      {(() => {
        const seoData = serviceSeoContent[serviceSlug];
        if (!seoData) return null;
        return (
          <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
            <div className="relative mx-auto max-w-4xl">

              {/* Main H2 heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-8">
                {getSectionHeading("seoContent", serviceName, cityName, seed)}<span className="text-[#ff4500]">.</span>
              </h2>

              <div className="space-y-14">
                {/* Intro */}
                <div>
                  <p className="text-sm md:text-base text-white/80 leading-[1.9] mb-5">
                    {seoData.intro}
                  </p>
                  <p className="text-sm md:text-base text-white/80 leading-[1.9]">
                    Additionally, businesses in {cityName} across {location.industries.slice(0, 3).join(", ")} sectors are increasingly turning to professional {serviceName.toLowerCase()} services to stay competitive. Whether you&apos;re based near {location.landmarks[0]}, operating in {location.landmarks[1]}, or serving customers across {location.region} — TML Agency delivers tailored {serviceName.toLowerCase()} solutions that drive measurable results for {cityName} businesses.
                  </p>
                </div>

                {/* Country-specific SEO overlay */}
                {countryOverlay && (
                  <div className="space-y-5">
                    <p className="text-sm md:text-base text-white/80 leading-[1.9]">{countryOverlay.intro}</p>
                    <p className="text-sm md:text-base text-white/80 leading-[1.9]">{countryOverlay.marketContext}</p>
                    <p className="text-sm md:text-base text-white/80 leading-[1.9]">{countryOverlay.whyItMatters}</p>
                    <div className="p-5 rounded-xl border border-[#ff4500]/10 bg-[#ff4500]/[0.03]">
                      <p className="text-[10px] text-[#ff4500]/60 uppercase tracking-wider font-semibold mb-2">Local Tip</p>
                      <p className="text-sm text-white/80 leading-relaxed">{countryOverlay.localTip}</p>
                    </div>
                  </div>
                )}

                {/* Products & Services Offered */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                    Products and Services Offered by a {serviceName} Agency in {cityName}
                  </h3>
                  <div className="space-y-5">
                    {seoData.offerings.map((offering, i) => (
                      <div key={i} className="flex gap-5 items-start">
                        <span className="text-3xl font-light text-[#ff4500]/20 leading-none select-none flex-shrink-0 -mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="text-base font-semibold text-white mb-1">{offering.title}</h4>
                          <p className="text-sm text-white/70 leading-relaxed">{offering.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing Section */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    {getSectionHeading("charges", serviceName, cityName, seed)}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-5">
                    Pricing varies depending on scope, competitive landscape, and business goals in {cityName}. We tailor every engagement to your specific requirements rather than offering one-size-fits-all packages.
                  </p>
                  {(() => {
                    const pricingTiers = countrySeoData?.pricingTiers || seoData?.pricingTiers;
                    if (!pricingTiers || pricingTiers.length === 0) return null;
                    return (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {pricingTiers.map((tier, i) => (
                          <div key={i} className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:border-[#ff4500]/20 transition-colors">
                            <p className="text-[10px] text-[#ff4500]/60 uppercase tracking-wider font-semibold mb-1">{tier.tier}</p>
                            <p className="text-lg font-bold text-white mb-2">{tier.range}</p>
                            <p className="text-xs text-white/60 leading-relaxed">{tier.includes}</p>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                  <div className="p-6 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="text-[10px] text-[#ff4500]/60 uppercase tracking-wider font-semibold mb-1">Custom Quote</p>
                        <p className="text-sm text-white/70 leading-relaxed">Get a tailored proposal with transparent pricing for your {cityName} business.</p>
                      </div>
                      <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_20px_rgba(255,69,0,0.25)] whitespace-nowrap">
                        Request a Quote
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Section divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#ff4500]/15 to-transparent" />

                {/* Benefits */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                    Benefits of Availing {serviceName} Services for Your {cityName} Business
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {seoData.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff4500]/60 flex-shrink-0" />
                        <p className="text-sm text-white/80 leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* How to Choose */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    How to Decide Which {serviceName} Service is Suitable for Your Business in {cityName}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">
                    Choosing the right {serviceName.toLowerCase()} partner in {cityName} is a critical decision. Here are key factors to consider when evaluating {serviceName.toLowerCase()} agencies in {location.state}:
                  </p>
                  <ul className="space-y-3">
                    {seoData.howToChoose.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff4500]/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why You Need This */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    {getSectionHeading("whyNeed", serviceName, cityName, seed)}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">
                    {cityName}, known as {location.description.toLowerCase()}, has a rapidly growing digital economy. Here&apos;s why investing in professional {serviceName.toLowerCase()} services is essential for businesses in {cityName}:
                  </p>
                  <ul className="space-y-3">
                    {seoData.whyNeeded.map((reason, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff4500]/60 flex-shrink-0" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#ff4500]/15 to-transparent" />

                {/* Types */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
                    Types of {serviceName} Services Available in {cityName}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {seoData.types.map((type, i) => (
                      <div key={i}
                        className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/20 transition-colors"
                      >
                        <h4 className="text-base font-semibold text-white mb-2">{type.title}</h4>
                        <p className="text-xs text-white/70 leading-relaxed">{type.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industry Focus for City */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    {serviceName} for {cityName}&apos;s Key Industries
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-5">
                    {cityName} has a diverse economy driven by {location.industries.join(", ")}. Each industry requires a specialised {serviceName.toLowerCase()} approach. Here&apos;s how TML serves {cityName}&apos;s key sectors:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {location.industries.map((ind) => (
                      <div key={ind}
                        className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                      >
                        <h5 className="text-sm font-semibold text-white capitalize mb-1">{serviceName} for {ind}</h5>
                        <p className="text-xs text-white/70 leading-relaxed">
                          Tailored {serviceName.toLowerCase()} strategies for {cityName}&apos;s {ind} sector — from audience targeting and content creation to performance tracking and ROI optimisation.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    Get Started with {serviceName} in {cityName} Today
                  </h3>
                  <p className="text-sm md:text-base text-white/80 leading-[1.9] mb-4">
                    Ready to take your {cityName} business to the next level? TML Agency offers a free, no-obligation consultation where we&apos;ll analyse your current {serviceName.toLowerCase()} presence, identify opportunities for growth, and present a customised strategy designed for your business goals. Whether you&apos;re looking to dominate local search in {cityName}, build brand awareness across {location.state}, or generate high-quality leads from {location.region} — we have the expertise to make it happen.
                  </p>
                  <p className="text-sm text-white/60 leading-[1.9] mb-6">
                    Join 500+ businesses across {location.country} who have trusted TML with their {serviceName.toLowerCase()} needs. Our clients in {cityName} consistently report improved visibility, higher engagement, and measurable business growth.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_20px_rgba(255,69,0,0.25)]">
                    Get a Free Consultation
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
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
          <h3 className="text-xl sm:text-2xl font-medium text-white mb-8">
            {serviceName} in Other Cities
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
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
                  className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-white hover:text-[#ff4500] hover:border-[#ff4500]/30 hover:bg-[#ff4500]/5 transition-all duration-300"
                >
                  {serviceName} in {loc.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Other Services in this City */}
      <section className="relative w-full px-6 py-12 lg:px-12">
        <div className="relative mx-auto max-w-4xl text-center">
          <h3 className="text-lg sm:text-xl font-medium text-white mb-6">
            {getSectionHeading("otherServices", serviceName, cityName, seed)}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
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
                    className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-white hover:text-[#ff4500] hover:border-[#ff4500]/30 hover:bg-[#ff4500]/5 transition-all duration-300"
                  >
                    {sData.title} in {cityName}
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* Visual Showcase — pre-footer gallery */}
      {(() => {
        const galleryImages = getImagesForService(serviceSlug, 8);
        const bottomImages = galleryImages.slice(4, 8);
        if (bottomImages.length < 4) return null;
        return (
          <>
            <SectionDivider />
            <section className="relative w-full px-6 py-16 md:py-20 lg:px-12 overflow-hidden">
              <div className="relative mx-auto max-w-5xl">
                <p className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-8">Creative Excellence</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06] group md:col-span-2 md:row-span-2">
                    <Image src={bottomImages[0].src} alt={bottomImages[0].alt} fill sizes="(max-width: 768px) 50vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-white/[0.06] group">
                    <Image src={bottomImages[1].src} alt={bottomImages[1].alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-white/[0.06] group">
                    <Image src={bottomImages[2].src} alt={bottomImages[2].alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-white/[0.06] group md:col-span-2">
                    <Image src={bottomImages[3].src} alt={bottomImages[3].alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })()}

      <SectionDivider />

      {/* FAQ */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center">
            {getSectionHeading("faq", serviceName, cityName, seed)}<span className="text-[#ff4500]">.</span>
          </h2>
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
                    <details key={ci * chunkSize + i}
                      className="group border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] hover:border-white/[0.1] transition-colors"
                    >
                      <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer list-none text-white font-medium text-sm md:text-base">
                        <span className="pr-4">{faq.q}</span>
                        <span className="text-white text-xl transition-transform duration-300 group-open:rotate-45 flex-shrink-0">+</span>
                      </summary>
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm text-white leading-relaxed border-t border-white/[0.04] pt-4">
                        {faq.a}
                      </div>
                    </details>
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
              <p
                className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
              >
                Read More
              </p>
              <h2
                className="text-2xl sm:text-3xl font-medium text-white mb-10"
              >
                {serviceName} Insights &amp; Articles
                <span className="text-[#ff4500]">.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedBlogs.map(({ slug, article }) => (
                  <div
                    key={slug}
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
                      <p className="text-sm text-white leading-relaxed mb-4 line-clamp-2">
                        {article.metaDescription}
                      </p>
                      <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
                        Read Article &rarr;
                      </span>
                    </Link>
                  </div>
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
              <p
                className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
              >
                Industries We Serve
              </p>
              <h2
                className="text-2xl sm:text-3xl font-medium text-white mb-10"
              >
                Industries We Serve in {cityName}
                <span className="text-[#ff4500]">.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedIndustryData.map((ind) => (
                  <div
                    key={ind.slug}
                  >
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 h-full"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#ff4500] transition-colors">
                        {ind.name}
                      </h3>
                      <p className="text-sm text-white leading-relaxed mb-4 line-clamp-3">
                        {ind.description}
                      </p>
                      <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
                        View Industry &rarr;
                      </span>
                    </Link>
                  </div>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6">
            Ready to grow in {cityName}<span className="text-[#ff4500]">?</span>
          </h2>
          <p className="text-sm md:text-base text-white mb-10 max-w-xl mx-auto">
            Get a free consultation for your {serviceName.toLowerCase()} needs. No obligations — just expert advice for your {cityName} business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]">
              Get Your Free Consultation
            </Link>
            <a href="tel:+91-98726-48209" className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
