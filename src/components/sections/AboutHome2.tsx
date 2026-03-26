"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const ease = [0.23, 1, 0.32, 1] as const;

const stats = [
  { target: 500, suffix: "+", label: "Brands scaled" },
  { target: 15, suffix: "+", label: "Years experience" },
  { target: 12, suffix: "", label: "Core services" },
  { target: 98, suffix: "%", label: "Client retention" },
] as const;

export function AboutHome2() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.03, 0.03, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full px-6 py-16 md:py-24 lg:py-40 lg:px-12 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#ff4500]/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-[#ff4500]/[0.02] blur-[100px] pointer-events-none" />

      {/* Scrolling horizontal watermark */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-[5rem] sm:text-[8rem] md:text-[16rem] font-black tracking-tighter text-white/[0.015] leading-none mx-4 md:mx-8">
              TML AGENCY
            </span>
          ))}
        </motion.div>
      </div>

      {/* Background watermark number */}
      <motion.div
        style={{ y: watermarkY, opacity: watermarkOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none whitespace-nowrap"
      >
        <motion.span
          initial={{ scale: 0.8, filter: "blur(20px)" }}
          whileInView={{ scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease }}
          className="text-[6rem] sm:text-[10rem] md:text-[18rem] lg:text-[24rem] font-bold tracking-tighter text-white leading-none block"
        >
          15+
        </motion.span>
      </motion.div>

      <div className="relative mx-auto max-w-7xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="text-[10px] md:text-xs text-white/90 tracking-[0.25em] uppercase font-semibold mb-8"
        >
          About TML
        </motion.p>

        {/* Big editorial heading with parallax */}
        <motion.div ref={headingRef} style={{ y: headingY }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.06] tracking-tight text-white max-w-5xl text-balance"
          >
            We&apos;re not just another agency.{" "}
            <span className="text-white/90">
              We&apos;re the people behind the brands you remember.
            </span>
          </motion.h2>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="w-full h-[1px] bg-gradient-to-r from-white/20 via-white/10 to-transparent mt-16 mb-12 origin-left"
        />

        {/* Two column description with accent lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="relative pl-6"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="absolute left-0 top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-[#ff4500] via-[#ff4500]/30 to-transparent"
            />
            <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
              TML is a full-service branding and digital marketing agency built
              for businesses that want to move fast and look good doing it. From
              day one, we embed with your team — learning your market, your
              audience, and what makes you different.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="relative pl-6"
          >
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="absolute left-0 top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-[#ff4500] via-[#ff4500]/30 to-transparent"
            />
            <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
              We combine strategy, design, and performance marketing into one
              tight operation.{" "}
              <span className="text-white font-semibold">
                No silos. No handoffs. No wasted time.
              </span>{" "}
              Just sharp work that drives real growth — from branding and web
              development to SEO, paid ads, and everything in between.
            </p>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="mt-24 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.7,
                delay: 0.1 * i,
                ease,
              }}
              className="group relative"
            >
              {/* Card background */}
              <div className="relative rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 md:p-8 transition-all duration-500 hover:bg-white/[0.04] hover:border-[#ff4500]/20 hover:shadow-[0_0_30px_rgba(255,69,0,0.06)] backdrop-blur-sm">
                {/* Number */}
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff4500] tracking-tighter block"
                />

                {/* Animated underline that grows on scroll */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3 + 0.1 * i,
                    ease,
                  }}
                  className="h-[2px] mt-4 mb-4 origin-left bg-gradient-to-r from-[#ff4500] via-[#ff4500]/40 to-transparent"
                />

                {/* Label */}
                <p className="text-[11px] md:text-xs text-white/90 tracking-[0.15em] uppercase font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
