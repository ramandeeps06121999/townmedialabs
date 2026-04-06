"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Image from "next/image";

const ease = [0.23, 1, 0.32, 1] as const;

/* ── Data ── */

const whyChooseStats = [
  { value: 500, suffix: "+", label: "Clients Served", description: "Trusted by over 500 brands across India and internationally" },
  { value: 70, suffix: "+", label: "Team Members", description: "Designers, developers, strategists & marketers under one roof" },
  { value: 15, suffix: "+", label: "Years Experience", description: "Delivering digital marketing excellence since 2010" },
  { value: 500, suffix: "+", label: "Projects Delivered", description: "From branding to full-scale digital campaigns" },
  { value: 100, suffix: "%", label: "Google Partner Certified", description: "Recognised for expertise in Google Ads & search marketing" },
  { value: 24, suffix: "/7", label: "Dedicated Support", description: "Round-the-clock assistance for all your marketing needs" },
];

const coreValues = [
  {
    title: "Innovation First",
    description:
      "We stay ahead of digital marketing trends — from AI-powered campaigns to cutting-edge ad tech — so your brand never falls behind the competition in Chandigarh or anywhere else.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Results-Driven",
    description:
      "Every SEO strategy, every social media campaign, every branding decision is measured by the tangible business results it delivers. We focus on ROI, not vanity metrics.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "No hidden fees, no black-box reporting. You see exactly where every rupee of your digital marketing budget goes and what measurable outcomes it generates for your brand.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "Client-Centric",
    description:
      "We are not just a vendor — we become an extension of your team. Your business goals are our goals, and we are deeply invested in your long-term growth and success.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const teamMembers = [
  { name: "Arvinder Singh", role: "Owner & Visionary", initial: "AS" },
  { name: "Raman Makkar", role: "SEO & Growth", initial: "RM" },
  { name: "Taran", role: "Head of Sales", initial: "TS" },
  { name: "Harman", role: "Project Manager", initial: "HP" },
  { name: "Cristi", role: "Designer", initial: "CR" },
  { name: "Tammy", role: "Product Designer", initial: "TM" },
  { name: "Mr Hoop", role: "Branding Manager", initial: "MH" },
];

export default function AboutPageClient() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      <div className="px-6 pt-24 md:pt-28 lg:px-12 max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]} />
      </div>

      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] text-white tracking-[0.25em] uppercase mb-8"
          >
            Who We Are
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6"
          >
            About{" "}
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              TML Agency
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto"
          >
            Town Media Labs (TML Agency) is a global digital marketing agency with headquarters in
            Chandigarh, India and Edmonton, Canada — helping brands grow through strategic branding,
            performance marketing, web development, and creative excellence since 2010. We turn ambitious businesses into unforgettable brands.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OUR STORY SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
          >
            Our Story
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-10 md:mb-14"
          >
            From a bold idea in Chandigarh
            <br className="hidden md:block" />
            {" "}to a leading creative force
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="space-y-6 text-sm md:text-base text-white leading-relaxed"
            >
              <p>
                Town Media Labs — now widely known as TML Agency — was founded in 2010 in the heart of Chandigarh with a clear mission:
                to bridge the gap between creative excellence and measurable business results. What
                began as a small, passionate team of digital marketing enthusiasts has evolved into
                one of the most trusted creative agencies in North India, serving clients who demand
                nothing less than exceptional outcomes. Our 15+ years of proven track record reflects our commitment to excellence.
              </p>
              <p>
                In our early years, we focused on building a strong foundation in branding and
                graphic design for local Chandigarh businesses. As our reputation for quality work
                grew, so did our service offerings. We expanded into web development, search engine
                optimization (SEO), social media marketing, Google Ads management, and performance
                marketing — assembling a multidisciplinary team that could handle every aspect of a
                brand&apos;s digital presence under one roof.
              </p>
            </motion.div>

            {/* Visual break — portfolio image */}
            <div className="hidden md:block relative overflow-hidden rounded-2xl border border-white/[0.06]">
              <Image
                src="/work/product-photography-fashion-editorial.png"
                alt="TML Agency creative work — fashion editorial photography"
                fill
                sizes="33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="space-y-6 text-sm md:text-base text-white leading-relaxed"
            >
              <p>
                Today, TML Agency is home to over 70 creative professionals — designers,
                full-stack developers, SEO strategists, content creators, and performance marketers
                — all united by a shared commitment to delivering work that moves the needle. We
                have proudly served more than 500 clients, ranging from ambitious startups in
                Chandigarh to established enterprises across India and internationally.
              </p>
              <p>
                Our growth has been fuelled not by aggressive sales pitches, but by the results we
                deliver. Our clients consistently report high satisfaction rates and long-term partnerships, reflecting the trust our partners
                place in us. Whether it&apos;s crafting a brand identity from scratch, building a
                high-converting website, running data-driven social media campaigns, or dominating
                search engine rankings — we approach every project with the same dedication and
                strategic rigour that has defined TML Agency from the very beginning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MISSION & VISION SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4 text-center"
          >
            Purpose & Direction
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16 text-center"
          >
            Our Mission &amp; Vision
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

            {/* Work showcase image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="relative w-full aspect-[21/9] overflow-hidden rounded-2xl border border-white/[0.06] mb-12"
            >
              <Image
                src="/work/web-design-creative-agency-dark.jpg"
                alt="TML Agency website design portfolio — creative dark theme agency website"
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease }}
              className="group p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#ff4500]/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">Our Mission</h3>
              </div>
              <p className="text-sm md:text-base text-white leading-relaxed">
                To deliver measurable, impactful results for every client through creative digital
                marketing strategies that combine data-driven insights with bold creative execution.
                We exist to help businesses of all sizes — from local Chandigarh startups to
                national brands — unlock their full growth potential through branding, SEO, social
                media marketing, web development, and performance marketing that truly works.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="group p-8 md:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/20 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#ff4500]/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">Our Vision</h3>
              </div>
              <p className="text-sm md:text-base text-white leading-relaxed">
                To become one of the world&apos;s most trusted digital marketing partners — an agency known not
                just for creative brilliance, but for the genuine, long-term business growth we
                create for every brand we work with. We envision a future where every ambitious
                business in Chandigarh and beyond has access to world-class digital marketing,
                branding, and technology solutions that level the playing field.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY CHOOSE TML SECTION
      ═══════════════════════════════════════════ */}
      <section ref={statsRef} className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4 text-center"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 text-center"
          >
            Why Choose TML
            <span className="text-[#ff4500]">?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-sm md:text-base text-white text-center max-w-2xl mx-auto mb-12 md:mb-16"
          >
            Numbers that reflect our commitment to delivering outstanding digital marketing
            results for brands across Chandigarh and India.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="group p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {statsInView && (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2} />
                  )}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-xs text-white leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          OUR VALUES SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 bg-[#080808] overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
          >
            What We Stand For
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 md:mb-16"
          >
            Our Values
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="group p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
              >
                <div className="text-[#ff4500]/60 mb-5 group-hover:text-[#ff4500] transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-sm text-white leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TEAM / LEADERSHIP SECTION
      ═══════════════════════════════════════════ */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="relative mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.25em] uppercase mb-4"
          >
            The People Behind TML
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6"
          >
            Meet Our Leadership
            <span className="text-[#ff4500]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-sm md:text-base text-white max-w-2xl mb-12 md:mb-16"
          >
            Our leadership team brings together decades of combined experience in digital
            marketing, branding, technology, and creative strategy — guiding TML Agency&apos;s
            mission to deliver exceptional results for every client.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {teamMembers.map((person, i) => (
              <motion.div
                key={person.initial}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="group text-center"
              >
                <div className="relative w-full aspect-square rounded-2xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center mb-4 overflow-hidden group-hover:border-[#ff4500]/20 group-hover:bg-white/[0.04] transition-all duration-500">
                  <span className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#ff4500]/40 transition-colors">
                    {person.initial}
                  </span>
                </div>
                <h3 className="text-sm md:text-base font-semibold text-white">{person.name}</h3>
                <p className="text-xs text-white mt-1">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════ */}
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
            Ready to grow your business
            <span className="text-[#ff4500]">?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-sm md:text-base text-white mb-10 max-w-xl mx-auto"
          >
            Whether you need branding, web development, SEO, or a full digital marketing
            strategy — our Chandigarh-based team is ready to help you achieve measurable results.
            Let&apos;s start a conversation.
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
              Contact Us Today
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
