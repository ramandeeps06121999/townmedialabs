"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const ease = [0.23, 1, 0.32, 1] as const;

/* ── Award + Partner logo data for marquee ───────────────────────── */

interface MarqueeLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

const marqueeLogos: MarqueeLogo[] = [
  { name: "Clutch Top GenAI 2026", src: "/awards/Clutch-Top-GenerativeAI-Company2026.png", width: 120, height: 120 },
  { name: "ISO Certified", src: "/awards/ISO-icon.svg", width: 80, height: 80 },
  { name: "ISO 27001", src: "/awards/ISO-icon-1.svg", width: 80, height: 80 },
  { name: "ISO 9001", src: "/awards/ISO-icon-2.svg", width: 80, height: 80 },
  { name: "Flutter Service Award", src: "/awards/Service-Award-1-flutter.webp", width: 110, height: 110 },
  { name: "AWS Advanced Tier", src: "/awards/aws-advance-tier.svg", width: 100, height: 100 },
  { name: "AWS Security", src: "/awards/aws-security-1.png", width: 100, height: 100 },
  { name: "Google Developer", src: "/awards/google-developer.png", width: 100, height: 100 },
  { name: "Red Herring Winner", src: "/awards/red-hirring.webp", width: 110, height: 110 },
  { name: "SOC II Compliant", src: "/awards/socII-icon.svg", width: 80, height: 80 },
  { name: "Top Clutch App Dev", src: "/awards/top_clutch.co_app_development.webp", width: 110, height: 110 },
  // Partner logos
  { name: "Google Ads", src: "/partner/google-ads-partner-badge.png", width: 100, height: 100 },
  { name: "Microsoft", src: "/partner/microsoft.webp", width: 100, height: 100 },
  { name: "Shopify", src: "/partner/shopify-partner-logo.jpg", width: 100, height: 100 },
  { name: "WordPress", src: "/partner/WordPress-Logo.png", width: 100, height: 100 },
  { name: "Bing Ads", src: "/partner/bing-advertising-certifications.webp", width: 100, height: 100 },
  { name: "Google Cloud", src: "/partner/Google-Partner.jpg", width: 100, height: 100 },
  { name: "Claude AI", src: "/partner/claude-ai-partner-logo.webp", width: 100, height: 100 },
  { name: "ChatGPT", src: "/partner/chatgpt-ai-partner-logo.webp", width: 100, height: 100 },
  { name: "Google Gemini", src: "/partner/google-gemini-new-rainbow-colours.jpg", width: 100, height: 100 },
];

/* ── Certified Partners grid data ────────────────────────────────── */

interface Partner {
  name: string;
  src: string;
  width: number;
  height: number;
  description: string;
}

const partners: Partner[] = [
  {
    name: "Google Ads Partner",
    src: "/partner/google-ads-partner-badge.png",
    width: 100,
    height: 100,
    description: "Certified Google Ads partner delivering data-driven marketing and growth solutions.",
  },
  {
    name: "Microsoft Partner",
    src: "/partner/microsoft.webp",
    width: 100,
    height: 100,
    description: "Microsoft partner enabling digital transformation with secure cloud and enterprise solutions.",
  },
  {
    name: "Shopify Partner",
    src: "/partner/shopify-partner-logo.jpg",
    width: 100,
    height: 100,
    description: "Certified Shopify partner building high-performance e-commerce experiences.",
  },
  {
    name: "WordPress Partner",
    src: "/partner/WordPress-Logo.png",
    width: 100,
    height: 100,
    description: "Expert WordPress development and optimization for enterprise-scale web applications.",
  },
  {
    name: "Bing Ads Partner",
    src: "/partner/bing-advertising-certifications.webp",
    width: 100,
    height: 100,
    description: "Certified Bing Advertising partner maximizing search reach and ROI.",
  },
  {
    name: "Google Cloud Partner",
    src: "/partner/Google-Partner.jpg",
    width: 100,
    height: 100,
    description: "Verified Google Cloud partner specializing in scalable infrastructure and data solutions.",
  },
];

/* ── Sub-components ─────────────────────────────────────────────── */

function MarqueeLogoCard({ logo }: { logo: MarqueeLogo }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 32px rgba(255,69,0,0.2), 0 0 64px rgba(255,69,0,0.06)",
        borderColor: "rgba(255,69,0,0.3)",
      }}
      transition={{ duration: 0.3, ease }}
      className="group relative flex-shrink-0 w-[160px] h-[160px] mx-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm flex flex-col items-center justify-center gap-3 cursor-default overflow-hidden"
    >
      {/* Subtle inner glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-[#ff4500]/[0.04] to-transparent" />

      {/* Shimmer overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.04)_45%,rgba(255,255,255,0.06)_50%,rgba(255,255,255,0.04)_55%,transparent_60%)] bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]" />

      <div className="relative w-[70px] h-[70px] flex items-center justify-center">
        <Image
          src={logo.src}
          alt={`${logo.name} award and certification badge - TML Agency`}
          width={logo.width}
          height={logo.height}
          loading="lazy"
          className="object-contain max-w-full max-h-full grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <p className="text-[10px] text-white/30 text-center leading-tight px-3 group-hover:text-white/90 transition-colors duration-300 font-medium tracking-wide">
        {logo.name}
      </p>
    </motion.div>
  );
}

function PartnerCard({
  partner,
  index,
  inView,
}: {
  partner: Partner;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.7 + index * 0.1, ease }}
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: "0 0 40px rgba(255,69,0,0.12), 0 12px 40px rgba(0,0,0,0.4)",
      }}
      className="group relative rounded-2xl p-[1px] cursor-default"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff4500]/30 via-[#ff4500]/5 to-[#ff4500]/20 opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,#ff4500_10%,transparent_20%)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ opacity: 0.15 }}
        />
      </div>

      {/* Card content */}
      <div className="relative bg-[#0a0a0a] rounded-2xl p-6 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          {/* Logo container with subtle bg */}
          <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] flex-shrink-0 p-2">
            <Image
              src={partner.src}
              alt={`${partner.name} certified partnership logo`}
              width={partner.width}
              height={partner.height}
              loading="lazy"
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#ff4500]"
                animate={{
                  boxShadow: [
                    "0 0 4px #ff4500",
                    "0 0 12px #ff4500",
                    "0 0 4px #ff4500",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[9px] text-[#ff4500]/60 uppercase tracking-[0.15em] font-semibold">
                Certified
              </span>
            </div>
            <p className="text-sm font-semibold text-white tracking-tight group-hover:text-white transition-colors duration-300">
              {partner.name}
            </p>
          </div>
        </div>
        <p className="text-xs text-white/35 leading-relaxed group-hover:text-white/90 transition-colors duration-300 flex-1">
          {partner.description}
        </p>

        {/* Bottom accent line */}
        <motion.div
          className="mt-4 h-[1px] bg-gradient-to-r from-[#ff4500]/30 to-transparent origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 + index * 0.1, ease }}
        />
      </div>
    </motion.div>
  );
}

/* ── Main Section ───────────────────────────────────────────────── */

export function AwardsPartners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const headingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const row1 = marqueeLogos.slice(0, 10);
  const row2 = marqueeLogos.slice(10);

  return (
    <section
      ref={ref}
      className="relative w-full py-16 md:py-24 lg:py-32 bg-[#080808] overflow-hidden"
    >
      {/* ── Floating gradient orbs ────────────────────────────── */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#ff4500]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[#ff4500]/[0.015] rounded-full blur-[100px] pointer-events-none" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4500]/[0.01] rounded-full blur-[150px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Noise texture overlay ─────────────────────────────── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]">
        <filter id="awards-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#awards-noise)" />
      </svg>

      {/* ── Heading with parallax ─────────────────────────────── */}
      <div ref={headingRef} className="px-6 lg:px-12 mb-16">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white/90 tracking-[0.2em] uppercase font-semibold mb-8"
          >
            Awards &amp; Certified Partners
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            style={{ y: headingY }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.08] tracking-tight text-white max-w-3xl"
          >
            Trusted by the{" "}
            <span className="text-white/90 italic">best in industry.</span>
          </motion.h2>
        </div>
      </div>

      {/* ── Award + Partner marquee rows ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease }}
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Row 1 — scrolls left */}
        <div className="mb-4">
          <Marquee>
            <div className="flex items-center py-2">
              {row1.map((logo) => (
                <MarqueeLogoCard key={logo.name} logo={logo} />
              ))}
            </div>
          </Marquee>
        </div>

        {/* Row 2 — scrolls right (reverse) */}
        <div>
          <Marquee reverse>
            <div className="flex items-center py-2">
              {row2.map((logo) => (
                <MarqueeLogoCard key={logo.name} logo={logo} />
              ))}
            </div>
          </Marquee>
        </div>
      </motion.div>

      {/* ── Certified Partners Grid ─────────────────────────── */}
      <div className="px-6 lg:px-12 mt-24">
        <div className="mx-auto max-w-7xl">
          {/* Self-drawing separator line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease }}
            className="w-full h-[1px] bg-gradient-to-r from-[#ff4500]/20 via-white/10 to-transparent mb-16 origin-left"
          />

          <div className="flex items-end justify-between mb-10">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease }}
              className="text-[10px] md:text-xs text-white/90 tracking-[0.2em] uppercase font-semibold"
            >
              Certified Partners
            </motion.p>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease }}
              className="text-xs text-white/20"
            >
              {partners.length} verified partnerships
            </motion.span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, i) => (
              <PartnerCard
                key={partner.name}
                partner={partner}
                index={i}
                inView={inView}
              />
            ))}
          </div>

          {/* Bottom stat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 1.2, ease }}
            className="mt-16 flex items-center gap-3"
          >
            <span className="text-4xl md:text-5xl font-bold text-[#ff4500]/80">
              <AnimatedCounter target={20} suffix="+" duration={1.8} />
            </span>
            <span className="text-sm text-white/30 leading-tight">
              Awards &amp;<br />
              Certifications
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
