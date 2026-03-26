"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import LazyVideo from "@/components/ui/LazyVideo";

const ease = [0.23, 1, 0.32, 1] as const;

export function MeetTheTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Background video with parallax + desaturated treatment */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <LazyVideo
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/team-bg-poster.webp"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.65)" }}
        >
          <source src="/team-bg.mp4" type="video/mp4" />
        </LazyVideo>
      </motion.div>

      {/* Slight dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/20" />

      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,69,0,0.12) 0%, transparent 70%)",
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
          className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,69,0,0.1) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[3] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Centered text overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="text-[10px] md:text-xs text-white/90 tracking-[0.2em] uppercase font-semibold mb-6"
        >
          Since 2010 &middot; TML Agency
        </motion.p>

        {/* Big heading */}
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-4"
        >
          We Create Ads
          <br />
          <span className="italic bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">People Remember.</span>
        </motion.h2>

        {/* Ads shoot badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-xl rounded-full border border-white/10 px-5 py-2.5 mb-8"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff4500]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 7L16 12L23 17V7Z" fill="white" />
              <rect x="1" y="5" width="15" height="14" rx="2" fill="white" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-white/90">500+ Ads Shot</span>
          <motion.span
            className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 50px rgba(255,69,0,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative inline-block rounded-xl bg-[#ff4500] px-10 py-4 text-sm font-semibold text-white text-center"
          >
            {/* Pulsing glow ring */}
            <motion.span
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-xl border-2 border-[#ff4500] pointer-events-none"
            />
            Get In Touch &rarr;
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom gradient separator line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={sectionInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease }}
        className="absolute bottom-0 left-6 right-6 lg:left-12 lg:right-12 h-[1px] z-10 origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,69,0,0.3) 30%, rgba(255,69,0,0.3) 70%, transparent 100%)",
        }}
      />
    </section>
  );
}
