"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "motion/react";

const ease = [0.23, 1, 0.32, 1] as const;

const steps = [
  {
    num: "01",
    title: "Discovery",
    timeline: "Week 1-2",
    desc: "Deep-dive into your business, market, competitors, and audience. We learn what makes you different before we touch a single pixel.",
    tools: ["Google Analytics", "SEMrush", "Hotjar"],
  },
  {
    num: "02",
    title: "Strategy",
    timeline: "Week 2-3",
    desc: "A custom roadmap built around your goals, budget, and timeline. No templates. Every plan is built from scratch.",
    tools: ["Figma", "Google Docs", "Ahrefs"],
  },
  {
    num: "03",
    title: "Execution",
    timeline: "Week 3-8",
    desc: "Our team ships across every channel — branding, web, ads, content, SEO. Tight timelines. High standards. Zero fluff.",
    tools: ["React", "Adobe CC", "Google Ads", "Meta Ads"],
  },
  {
    num: "04",
    title: "Optimize",
    timeline: "Ongoing",
    desc: "We monitor, test, and refine continuously. Your growth compounds because we never stop improving what's working.",
    tools: ["GA4", "GTM", "Hotjar", "A/B Testing"],
  },
];

/* ─── Individual Step Card ─── */
function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      className="relative pl-14 md:pl-20 py-10 group"
    >
      {/* Timeline dot — pulses when in view */}
      <div className="absolute left-[11px] md:left-[14px] top-12 z-10">
        <motion.div
          animate={
            isInView
              ? {
                  boxShadow: [
                    "0 0 0px 0px rgba(255,69,0,0.4)",
                    "0 0 20px 6px rgba(255,69,0,0.25)",
                    "0 0 0px 0px rgba(255,69,0,0.4)",
                  ],
                }
              : {}
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[11px] h-[11px] rounded-full bg-[#ff4500] shadow-[0_0_12px_rgba(255,69,0,0.5)]"
        />
        {/* Outer glow ring */}
        <motion.div
          animate={isInView ? { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] } : { scale: 1, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-[11px] h-[11px] rounded-full border border-[#ff4500]/40"
        />
      </div>

      {/* Glass card */}
      <motion.div
        whileHover={{
          scale: 1.015,
          borderColor: "rgba(255,69,0,0.15)",
          boxShadow: "0 0 40px rgba(255,69,0,0.06)",
        }}
        transition={{ duration: 0.3, ease }}
        className="relative overflow-hidden bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 md:p-8 backdrop-blur-sm"
      >
        {/* Watermark number */}
        <span className="absolute -top-4 -right-2 md:-right-4 text-[120px] md:text-[160px] font-black text-white/[0.025] leading-none select-none pointer-events-none tracking-tighter font-mono">
          {step.num}
        </span>

        {/* Subtle top-left gradient accent on hover */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#ff4500]/[0.04] to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-4">
            {/* Number + Title */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[#ff4500]/60 tracking-widest font-mono">
                {step.num}
              </span>
              <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
                {step.title}
              </h3>
            </div>

            {/* Timeline badge — slides in from right */}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease }}
              className="text-[10px] text-[#ff4500]/80 tracking-widest uppercase bg-[#ff4500]/[0.08] border border-[#ff4500]/[0.1] px-3 py-1 rounded-full font-semibold w-fit"
            >
              {step.timeline}
            </motion.span>
          </div>

          <p className="text-sm md:text-[15px] text-white/90 leading-relaxed max-w-xl mb-5">
            {step.desc}
          </p>

          {/* Tool pills with spring entrance */}
          <div className="flex flex-wrap gap-2">
            {step.tools.map((tool, ti) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.7, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  delay: 0.4 + index * 0.08 + ti * 0.06,
                }}
                className="text-[10px] text-white/35 border border-white/[0.07] rounded-md px-3 py-1.5 tracking-wide hover:border-white/[0.14] hover:text-white/90 transition-colors duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Progress Indicator ─── */
function ProgressIndicator({ progress }: { progress: ReturnType<typeof useSpring> }) {
  return (
    <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-2 z-50">
      {steps.map((step, i) => {
        const threshold = i / steps.length;
        return (
          <motion.div
            key={step.num}
            className="flex items-center gap-2"
          >
            <motion.div
              style={{
                scale: useTransform(progress, [threshold, threshold + 0.05], [0.8, 1.2]),
                opacity: useTransform(progress, [threshold - 0.05, threshold, threshold + 1 / steps.length, threshold + 1 / steps.length + 0.05], [0.3, 1, 1, 0.3]),
              }}
              className="w-1.5 h-1.5 rounded-full bg-[#ff4500]"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── Main Component ─── */
export function ProcessHome2() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring for timeline line
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax for heading
  const headingY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  // Timeline line scaleY driven by scroll
  const lineScaleY = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);
  const smoothLineScale = useSpring(lineScaleY, {
    stiffness: 100,
    damping: 30,
  });

  // Glow position on line
  const glowTop = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full px-6 py-16 md:py-24 lg:py-32 lg:px-12 bg-[#080808] overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-[#ff4500]/[0.015] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#ff4500]/[0.02] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.008] blur-[150px] pointer-events-none" />

      {/* Progress indicator */}
      <ProgressIndicator progress={smoothProgress} />

      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="text-[10px] md:text-xs text-white/90 tracking-[0.2em] uppercase font-semibold mb-8"
        >
          Our process
        </motion.p>

        {/* Heading with parallax */}
        <motion.h2
          style={{ y: headingY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-white max-w-3xl mb-20"
        >
          How we turn ideas{" "}
          <span className="text-white/90">into outcomes.</span>
        </motion.h2>

        {/* Steps with animated timeline */}
        <div ref={timelineRef} className="relative">
          {/* Animated vertical timeline line */}
          <div className="absolute left-[15px] md:left-[18px] top-0 bottom-0 w-[1px]">
            {/* Background track */}
            <div className="absolute inset-0 bg-white/[0.04]" />

            {/* Animated fill */}
            <motion.div
              style={{ scaleY: smoothLineScale }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-[#ff4500]/60 via-[#ff4500]/30 to-transparent"
            />

            {/* Glowing trail */}
            <motion.div
              style={{ top: glowTop }}
              className="absolute left-1/2 -translate-x-1/2 w-[3px] h-24 bg-gradient-to-b from-transparent via-[#ff4500]/50 to-transparent blur-[2px] pointer-events-none"
            />
          </div>

          {/* Step cards */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
