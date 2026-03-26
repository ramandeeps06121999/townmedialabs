"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* ─── Warm glow orb (the hero visual — like the reference) ─── */}
      <motion.div
        style={{ scale: orbScale, y: orbY }}
        className="pointer-events-none absolute bottom-[-8%] left-1/2 z-0 -translate-x-1/2"
      >
        {/* Outer ambient glow */}
        <div
          className="h-[420px] w-[600px] rounded-[50%] blur-[40px] md:h-[500px] md:w-[850px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,170,40,0.28) 0%, rgba(255,130,0,0.13) 35%, rgba(200,80,0,0.04) 60%, transparent 80%)",
          }}
        />
        {/* Bright inner core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-[160px] w-[280px] rounded-[50%] blur-[35px] md:h-[200px] md:w-[380px]"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,210,100,0.55) 0%, rgba(255,165,30,0.2) 45%, transparent 75%)",
            }}
          />
        </div>
      </motion.div>

      {/* ─── Soft vignette ─── */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_100%)]" />

      {/* ─── Content ─── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex max-w-[52rem] flex-col items-center text-center"
      >
        {/* Trust badge with avatars */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-10 flex items-center gap-3"
        >
          {/* Avatar stack */}
          <div className="flex -space-x-2.5">
            {["#e6b800", "#d4a000", "#c29200"].map((color, i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-[2.5px] border-[#050505]"
                style={{
                  background: `linear-gradient(135deg, ${color} 0%, #8a6900 100%)`,
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-accent">★★★★</span>
            <span className="text-[13px] text-[#888]">
              500+ businesses scaled
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-[2.6rem] leading-[1.08] font-bold tracking-[-0.025em] text-white sm:text-[3.5rem] md:text-[4.2rem] lg:text-[4.8rem]"
        >
          Memberships, creative spaces,
          <br className="hidden sm:block" /> and honest guidance for the next
          <br className="hidden sm:block" /> wave of AI-powered{" "}
          <span className="text-gold-gradient italic">creatives.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="mt-6 max-w-lg text-[15px] leading-[1.7] text-[#888] md:text-base"
        >
          We help brands build, grow, and stand out through branding, web
          development, SEO, paid ads, and everything in between.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.23, 1, 0.32, 1] }}
          className="mt-9 flex items-center gap-3"
        >
          <MagneticButton
            href="#contact"
            className="glow-button inline-block rounded-lg bg-accent px-7 py-3 text-[13px] font-semibold text-black transition-colors hover:bg-accent-dark"
          >
            Book a call
          </MagneticButton>
          <MagneticButton
            href="#services"
            className="inline-block rounded-lg border border-white/[0.08] px-7 py-3 text-[13px] font-semibold text-white transition-all hover:border-white/[0.15] hover:bg-white/[0.04]"
          >
            Learn More
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* ─── Partners ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-10 left-0 right-0 z-10 px-6"
      >
        <p className="mb-5 text-center text-[11px] font-medium tracking-[0.15em] text-[#444] uppercase">
          You&apos;re in good hands:
        </p>
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-8 opacity-40 md:gap-14">
          {[
            "Shopify Partners",
            "Marketing Partner",
            "Google Partner",
            "Meta Business",
          ].map((partner) => (
            <span
              key={partner}
              className="whitespace-nowrap text-[13px] font-semibold tracking-wide text-white/90"
            >
              {partner}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
