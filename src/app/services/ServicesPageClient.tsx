"use client";

import Link from "next/link";
import { motion } from "motion/react";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { servicePages } from "@/data/servicePages";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";

const ease = [0.23, 1, 0.32, 1] as const;

const allServices = Object.values(servicePages);

const serviceCategories = [
  {
    category: "Branding & Design",
    services: ["branding", "graphic-design", "branding-packaging"],
  },
  {
    category: "Performance Marketing",
    services: ["google-ads", "seo", "lead-generation"],
  },
  {
    category: "Digital & Social",
    services: ["website-development", "social-media", "ai-influencer-management"],
  },
  {
    category: "Media Production",
    services: ["video-editing", "music-release"],
  },
];

const stats = [
  { label: "Services", value: "12+" },
  { label: "Brands Served", value: "500+" },
  { label: "Team Members", value: "70+" },
  { label: "Years Experience", value: "15+" },
];

export default function ServicesPageClient() {
  // Comprehensive Service schema for the main services page
  const serviceSchema = generateServiceSchema({
    name: "Digital Marketing Services",
    description: "TML Agency offers comprehensive digital marketing services including branding, SEO, Google Ads, social media marketing, website development, AI influencer management, lead generation, and more.",
    url: "https://townmedialabs.com/services",
    category: "Digital Marketing",
  });

  // Add hasOfferCatalog to the service schema for all services
  const comprehensiveServiceSchema = {
    ...serviceSchema,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Branding",
            description: "Strategic brand identity design that resonates with your audience and creates lasting impressions.",
            url: "https://townmedialabs.com/services/branding",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO",
            description: "Proven SEO strategies that boost your rankings, drive organic traffic, and grow your business sustainably.",
            url: "https://townmedialabs.com/services/seo",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Ads",
            description: "Expert Google Ads management that maximizes ROI and drives qualified traffic to your business.",
            url: "https://townmedialabs.com/services/google-ads",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing",
            description: "Strategic social media management that grows your audience, builds brand loyalty, and generates leads.",
            url: "https://townmedialabs.com/services/social-media",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description: "Custom, high-performance websites built with modern technologies for speed, security, and conversions.",
            url: "https://townmedialabs.com/services/website-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Influencer Management",
            description: "Cutting-edge AI influencer creation and management for brands looking to lead the next wave of digital marketing.",
            url: "https://townmedialabs.com/services/ai-influencer-management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lead Generation",
            description: "Data-driven lead generation strategies that attract, capture, and convert high-quality prospects.",
            url: "https://townmedialabs.com/services/lead-generation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Music Release & Promotion",
            description: "End-to-end music release strategy covering distribution, promotion, playlist pitching, and audience growth.",
            url: "https://townmedialabs.com/services/music-release",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Video Editing & Production",
            description: "Professional video editing and production services that bring your vision to life with cinematic quality.",
            url: "https://townmedialabs.com/services/video-editing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Packaging Design",
            description: "Eye-catching packaging design that communicates your brand story and drives purchase decisions.",
            url: "https://townmedialabs.com/services/branding-packaging",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Graphic Design",
            description: "Professional graphic design services that bring your brand story to life across every visual touchpoint.",
            url: "https://townmedialabs.com/services/graphic-design",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://townmedialabs.com" },
    { name: "Services", url: "https://townmedialabs.com/services" },
  ]);

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comprehensiveServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <InnerNavbar />

      <div className="px-6 pt-24 md:pt-28 lg:px-12 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]} />
      </div>

      {/* Hero */}
      <section className="relative w-full px-6 pt-12 pb-16 md:pt-16 md:pb-24 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] text-white/40 tracking-[0.25em] uppercase mb-8"
          >
            Our Services
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6"
          >
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              grow your brand
            </span>
            <span className="text-[#ff4500]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-sm md:text-base text-white/40 max-w-2xl mx-auto mb-10"
          >
            From brand strategy to AI-powered marketing — we offer a complete suite of services to help you stand out, attract customers, and scale your business.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                {i > 0 && <div className="hidden sm:block w-[1px] h-6 bg-white/[0.08] -ml-4 mr-1" />}
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-[10px] text-white/30 tracking-wide uppercase">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((cat, catIndex) => (
        <section
          key={cat.category}
          className={`relative w-full px-6 py-16 md:py-20 lg:px-12 overflow-hidden ${
            catIndex % 2 === 1 ? "bg-[#080808]" : ""
          }`}
        >
          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-4 mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-medium text-white">
                {cat.category}
              </h2>
              <div className="flex-1 h-[1px] bg-white/[0.06]" />
              <span className="text-xs text-white/20 font-mono">
                {String(catIndex + 1).padStart(2, "0")}
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.services.map((slug, i) => {
                const service = servicePages[slug];
                if (!service) return null;
                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  >
                    <Link
                      href={`/services/${slug}`}
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

                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ff4500] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {/* Feature pills */}
                      <div className="flex flex-wrap gap-2">
                        {service.features.slice(0, 3).map((f) => (
                          <span
                            key={f.title}
                            className="text-[10px] px-3 py-1.5 rounded-full border border-white/[0.06] text-white/30 bg-white/[0.02]"
                          >
                            {f.title}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Full Service List */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center"
          >
            All Services
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="space-y-0">
            {allServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between py-5 border-b border-white/[0.06] hover:border-[#ff4500]/20 transition-colors"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs text-white/20 font-mono w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-[#ff4500] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/20 group-hover:text-[#ff4500] group-hover:translate-x-1 transition-all duration-300"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Not sure what you need
            <span className="text-[#ff4500]">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-sm md:text-base text-white/40 mb-10 max-w-xl mx-auto"
          >
            Book a free strategy call and we&apos;ll audit your current digital presence and recommend the services that&apos;ll have the biggest impact.
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
              Get a Free Consultation
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

      <FooterHome2 />
    </main>
  );
}
