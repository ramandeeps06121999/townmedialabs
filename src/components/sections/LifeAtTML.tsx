"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const ease = [0.23, 1, 0.32, 1] as const;

const perks = [
  {
    label: "Team First",
    description: "Collaboration over competition, always.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 22c0-3.3 2.7-6 6-6h8c3.3 0 6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Pet Friendly",
    description: "Bring your furry friends to work.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="23" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 20c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2-1.5 4-4 4s-4-2-4-4z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: "Food & Snacks",
    description: "Fully stocked kitchen, all day.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4v8c0 2.2 1.8 4 4 4h4c2.2 0 4-1.8 4-4V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="16" x2="14" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="25" x2="18" y2="25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="4" x2="14" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Wellness Focus",
    description: "Mental & physical health matters.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 24s-8-5.5-8-11c0-3.3 2.2-6 5-6 1.8 0 3 1.2 3 1.2S15.2 7 17 7c2.8 0 5 2.7 5 6 0 5.5-8 11-8 11z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Flexible Hours",
    description: "Work when you're most productive.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8v6l4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Fun Fridays",
    description: "End the week with games & vibes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.9 5.3-4.9-2.6L9.1 19l.9-5.3-4-3.9 5.5-.8L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

const ratings = [
  { platform: "Glassdoor", score: "4.8" },
  { platform: "Google", score: "4.9" },
  { platform: "Clutch", score: "5.0" },
] as const;

const cultureStats = [
  { value: "70+", label: "Team Members" },
  { value: "4.9", label: "Avg Rating" },
  { value: "92%", label: "Stay 2+ Years" },
] as const;

export function LifeAtTML() {
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const headingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#080808] overflow-hidden px-6 py-16 md:py-24 lg:py-40 lg:px-12"
    >
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,69,0,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute -bottom-60 -right-40 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,69,0,0.08) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Center accent glow */}
        <motion.div
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(255,69,0,0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Self-drawing separator line at top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={sectionInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease }}
        className="absolute top-0 left-6 right-6 lg:left-12 lg:right-12 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent origin-left"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase font-semibold mb-6"
        >
          Life at TML
        </motion.p>

        {/* ── Full-width hero heading ───────────────────────── */}
        <div ref={headingRef} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            style={{ y: headingY }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium leading-[1.02] tracking-tight text-white"
          >
            Where Cool
            <br />
            <span className="italic bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              meets Culture.
            </span>
          </motion.h2>

          {/* Subtext + Culture stats side by side */}
          <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="text-sm md:text-base text-white/45 max-w-md leading-relaxed"
            >
              Be a part of an{" "}
              <span className="font-semibold text-[#ff4500] italic">
                Award-Winning
              </span>{" "}
              workplace where creativity thrives and every voice matters.
            </motion.p>

            {/* Culture stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="flex gap-4 sm:gap-6 md:gap-8"
            >
              {cultureStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white/90 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-white/30 tracking-[0.1em] uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Image + Content two-column layout ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* LEFT: Large image (3 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="relative lg:col-span-3"
          >
            {/* Orange glow behind image */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 69, 0, 0.12) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />

            {/* Main image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                src="/office.webp"
                alt="TML Agency modern creative workspace and office environment"
                width={900}
                height={600}
                loading="lazy"
                className="w-full h-auto object-cover max-h-[520px] rounded-2xl"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent pointer-events-none" />

              {/* Shimmer */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 6,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)",
                }}
              />

              {/* Floating badge on image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease }}
                className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-xl rounded-xl border border-white/10 px-4 py-3 flex items-center gap-3"
              >
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#080808] bg-gradient-to-br from-[#ff4500]/60 to-[#ff6b35]/40"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/90">50+ Creatives</p>
                  <p className="text-[9px] text-white/90">Building brands daily</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Perks + Ratings (2 cols) */}
          <div className="flex flex-col lg:col-span-2">
            {/* Small label */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-[10px] md:text-xs text-white/30 tracking-[0.15em] uppercase mb-6"
            >
              Why people love working here
            </motion.p>

            {/* Perks grid: 2x3 */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.08,
                    ease,
                  }}
                  whileHover={{
                    scale: 1.04,
                    backgroundColor: "rgba(255,69,0,0.04)",
                    borderColor: "rgba(255,69,0,0.15)",
                  }}
                  className="group flex flex-col gap-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] p-4 cursor-default transition-all duration-300"
                >
                  <span className="text-white/90 group-hover:text-[#ff4500]/70 transition-colors duration-300">
                    {perk.icon}
                  </span>
                  <div>
                    <span className="text-xs text-white/90 font-semibold tracking-wide block">
                      {perk.label}
                    </span>
                    <span className="text-[10px] text-white/25 leading-snug block mt-0.5">
                      {perk.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="w-full h-[1px] bg-gradient-to-r from-white/15 via-white/5 to-transparent mb-6 origin-left"
            />

            {/* Ratings bar */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="flex flex-wrap items-center gap-3 sm:gap-5 mb-8"
            >
              {ratings.map((r, i) => (
                <div key={r.platform} className="flex items-center gap-1.5">
                  <span className="text-xs text-white/90">{r.platform}</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, si) => (
                      <span key={si} className="text-[#ffcc00] text-[10px]">
                        &#9733;
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-white/90 font-semibold">
                    {r.score}
                  </span>
                  {i < ratings.length - 1 && (
                    <span className="ml-3 w-[1px] h-3 bg-white/10" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA Button — larger, more prominent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
            >
              <motion.a
                href="#careers"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 30px rgba(255,69,0,0.15), 0 0 60px rgba(255,69,0,0.05)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#ff4500]/10 to-[#ff4500]/5 border border-[#ff4500]/20 px-8 py-4 text-sm font-semibold text-white/90 backdrop-blur-sm hover:text-white hover:border-[#ff4500]/40 transition-colors duration-300"
              >
                Join the Team
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
