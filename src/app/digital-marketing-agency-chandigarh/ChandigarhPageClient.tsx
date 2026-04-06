"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import Image from "next/image";

const ease = [0.23, 1, 0.32, 1] as const;

const stats = [
  { value: 500, suffix: "+", label: "Brands in Chandigarh & Beyond" },
  { value: 15, suffix: "+", label: "Years in the Industry" },
  { value: 70, suffix: "+", label: "In-House Experts" },
  { value: 98, suffix: "%", label: "Client Retention Rate" },
];

const whyChooseUs = [
  {
    title: "Local Expertise, Global Standards",
    description: "Based in Chandigarh, we understand the local market deeply while delivering work that meets international quality standards.",
  },
  {
    title: "Proven Track Record",
    description: "500+ brands trust us with their marketing. Our case studies show real ROI — not just vanity metrics.",
  },
  {
    title: "Full-Service Under One Roof",
    description: "From branding and web development to SEO, Google Ads, social media, and AI — no need to juggle multiple agencies.",
  },
  {
    title: "Dedicated Account Managers",
    description: "Every client gets a dedicated point of contact who understands your business, goals, and preferences.",
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs, no surprises. You know exactly what you're paying for and what results to expect.",
  },
  {
    title: "Data-Driven Strategies",
    description: "Every decision is backed by analytics, market research, and performance data — not guesswork.",
  },
];

const industriesServed = [
  "Real Estate", "E-Commerce", "Healthcare", "Education",
  "Hospitality", "Food & Beverage", "Fashion & Beauty", "Technology",
  "Finance", "Automotive", "Manufacturing", "Entertainment",
  "Legal", "SaaS", "Travel & Tourism", "Fitness & Wellness",
  "Agriculture", "Logistics", "Retail", "Non-Profit",
  "Pharma", "Construction", "Interior Design", "Jewellery",
  "Sports",
];

const topServiceSlugs = [
  "branding", "seo", "google-ads", "website-development",
  "social-media", "lead-generation", "graphic-design", "video-editing",
];

interface ServiceInfo {
  slug: string;
  title: string;
  description: string;
}

interface ChandigarhPageClientProps {
  serviceMap: Record<string, ServiceInfo>;
}

const testimonials = [
  {
    quote: "TML transformed our online presence completely. Our leads increased by 300% within 6 months.",
    name: "Rajesh Kumar",
    company: "Kumar Properties, Chandigarh",
  },
  {
    quote: "The best digital marketing agency in Chandigarh — hands down. Professional, creative, and results-oriented.",
    name: "Priya Singh",
    company: "Priya's Boutique, Sector 17",
  },
  {
    quote: "Our Google Ads ROAS went from 1.5x to 4.8x after switching to TML. They really know what they're doing.",
    name: "Amit Sharma",
    company: "TechVault Solutions",
  },
];

export default function ChandigarhPageClient({ serviceMap }: ChandigarhPageClientProps) {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      {/* Hero */}
      <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-[#ff4500]/[0.05] blur-[180px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff4500]/20 bg-[#ff4500]/5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#ff4500] animate-pulse" />
            <span className="text-[11px] text-[#ff4500] tracking-wide font-medium">#1 Rated Branding & Marketing Agency in Chandigarh</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight mb-6"
          >
            Leading Branding &amp; Digital
            <br />
            Marketing Company in{" "}
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              Chandigarh
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto mb-10"
          >
            TML Agency is Chandigarh&apos;s leading branding and digital marketing company. From brand identity
            and website development to SEO, Google Ads, and social media — we help Chandigarh businesses
            dominate online. 15+ years of experience. 500+ brands scaled. Proven ROI.
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
              Get a Free Strategy Call
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              View Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="relative w-full px-6 py-12 md:py-16 lg:px-12">
        <div className="relative mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="text-center p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {statsInView && (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2} />
                  )}
                </div>
                <p className="text-[10px] md:text-xs text-white">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TML */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16"
          >
            Why Chandigarh&apos;s top brands
            <br className="hidden md:block" />
            trust TML
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="group p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 flex items-center justify-center mb-5 group-hover:bg-[#ff4500]/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#ff4500]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
          >
            Our Services in Chandigarh
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16"
          >
            Full-service branding &amp; marketing
            <br className="hidden md:block" />
            solutions in Chandigarh
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {topServiceSlugs.map((slug, i) => {
              const service = serviceMap[slug];
              if (!service) return null;
              return (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease }}
                >
                  <Link
                    href={`/services/${slug}`}
                    className="group block p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-white font-mono">{String(i + 1).padStart(2, "0")}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white group-hover:text-[#ff4500] transition-colors">
                        <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#ff4500] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-white leading-relaxed">{service.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="text-center mt-10"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-[#ff4500] font-medium hover:underline"
            >
              View All Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center"
          >
            Industries we serve in Chandigarh
            <span className="text-[#ff4500]">.</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industriesServed.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease }}
                className="px-5 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] text-sm text-white hover:border-[#ff4500]/20 hover:text-white transition-all cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4 text-center"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 text-center"
          >
            What our clients say
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#ff4500" className="text-[#ff4500]">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-8"
          >
            Leading Branding &amp; Digital Marketing Agency in Chandigarh — Your Growth Partner
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="md:w-[38%] flex-shrink-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.06]">
                <Image
                  src="/work/graphic-design-spice-sauce-ad.webp"
                  alt="TML Agency branding work — creative brand campaign design in Chandigarh"
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.06] mt-4">
                <Image
                  src="/work/social-media-agency-grid.jpg"
                  alt="TML Agency social media marketing — digital agency feed design"
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="md:w-[62%] space-y-5 text-sm md:text-base text-white leading-relaxed"
            >
              <p>
                Looking for the <strong className="text-white">best branding and digital marketing agency in Chandigarh</strong>? TML Agency has been the go-to <strong className="text-white">branding company in Chandigarh</strong> since 2010, helping businesses across Chandigarh, Mohali, Panchkula, Zirakpur, and the entire tricity region build powerful brands and grow online.
              </p>
              <p>
                As Chandigarh&apos;s <strong className="text-white">leading full-service branding and marketing agency</strong>, we offer everything from brand identity design, logo design, and packaging to website development, SEO, Google Ads management, social media marketing, lead generation, and AI influencer management. Our team of 70+ in-house branding and marketing experts at our Sector 34A office ensures every project is executed with precision.
              </p>
              <p>
                Whether you&apos;re a startup in IT Park Chandigarh, a restaurant in Sector 17, a real estate company in Mohali, or an
                established brand looking to dominate your market — <strong className="text-white">TML is the top-rated branding agency in Chandigarh</strong> with the experience, tools, and creativity to deliver measurable results. Our clients see an average of 280% increase in organic traffic and 4.2x ROAS on paid campaigns.
              </p>
              <p>
                What sets us apart from other <strong className="text-white">digital marketing and branding agencies in Chandigarh</strong> is our commitment to transparency, data-driven strategies, and long-term partnerships. We don&apos;t do cookie-cutter solutions — every brand strategy is tailored to your specific business goals, industry, and budget. Visit us at CO 112, Basement, Sector 34A, Chandigarh or book a <a href="https://calendly.com/townmedialabs/30min" target="_blank" rel="noopener noreferrer" className="text-[#ff4500] hover:underline">free 30-minute strategy call</a>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="relative w-full px-6 py-12 md:py-16 lg:px-12 bg-[#080808]">
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-8"
          >
            <p className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-3">
              Visit Our Office
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white">
              Find us in Chandigarh<span className="text-[#ff4500]">.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="rounded-2xl border border-white/[0.06] overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5!2d76.7558!3d30.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0abe888887%3A0x5c7a52e033e3a3a9!2sTownmedialabs!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TML Agency Chandigarh Office Location"
            />
          </motion.div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 text-sm text-white">
            <span>CO 112, Basement, Sector 34A, Chandigarh 160022</span>
            <a href="tel:+91-98726-48209" className="text-[#ff4500] hover:underline">+91 98726 48209</a>
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
            Ready to grow your Chandigarh business
            <span className="text-[#ff4500]">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-sm md:text-base text-white mb-10 max-w-xl mx-auto"
          >
            Book a free 30-minute strategy call with Chandigarh&apos;s leading branding and marketing team. No obligations — just actionable insights to help your brand grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://calendly.com/townmedialabs/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
            >
              Book Free Strategy Call
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
