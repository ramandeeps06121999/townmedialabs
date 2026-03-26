"use client";

import { useRef, useMemo } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Marquee } from "@/components/ui/Marquee";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { toolCategories } from "@/data/techStack";

const ease = [0.23, 1, 0.32, 1] as const;

// Flatten all tools for marquee rows
const row1Tools = toolCategories[0].tools.concat(toolCategories[1].tools);
const row2Tools = toolCategories[2].tools.concat(toolCategories[3].tools);
// Deterministic shuffle using a simple seed-based approach to avoid hydration mismatch
const row3Tools = toolCategories
  .flatMap((c) => c.tools)
  .sort((a, b) => {
    const hashA = a.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const hashB = b.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    return hashA - hashB;
  });

const totalTools = toolCategories.reduce(
  (sum, cat) => sum + cat.tools.length,
  0
);

const rowLabels = [
  `${toolCategories[0].category} & ${toolCategories[1].category}`,
  `${toolCategories[2].category} & ${toolCategories[3].category}`,
  "Full Stack",
];

function ToolPill({ name }: { name: string }) {
  return (
    <motion.span
      whileHover={{
        boxShadow: "0 0 20px rgba(255,69,0,0.3), 0 0 40px rgba(255,69,0,0.1)",
        borderColor: "rgba(255,69,0,0.4)",
        color: "rgba(255,255,255,0.9)",
        backgroundColor: "rgba(255,69,0,0.08)",
      }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-5 py-2.5 text-sm text-white/90 whitespace-nowrap cursor-default mx-2"
    >
      <motion.span
        className="w-1.5 h-1.5 rounded-full bg-[#ff4500]/40"
        whileHover={{ backgroundColor: "rgba(255,69,0,0.9)", scale: 1.4 }}
      />
      {name}
    </motion.span>
  );
}

export function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  const headingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      className="relative w-full py-16 md:py-24 lg:py-32 bg-[#080808] overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#ff4500]/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-[#ff4500]/[0.015] rounded-full blur-[100px] pointer-events-none" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff4500]/[0.01] rounded-full blur-[150px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading with parallax */}
      <div ref={headingRef} className="px-6 lg:px-12 mb-16">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white/90 tracking-[0.2em] uppercase font-semibold mb-8"
          >
            Our toolkit
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            style={{ y: headingY }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.08] tracking-tight text-white max-w-3xl"
          >
            The tools behind{" "}
            <span className="text-white/90 italic">the results.</span>
          </motion.h2>

          {/* Tech counter */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="mt-6 flex items-center gap-3"
          >
            <span className="text-4xl md:text-5xl font-bold text-[#ff4500]/80">
              <AnimatedCounter target={totalTools} suffix="+" duration={1.8} />
            </span>
            <span className="text-sm text-white/30 leading-tight">
              tools &<br />
              platforms
            </span>
          </motion.div>
        </div>
      </div>

      {/* Tools Marquee — full bleed, edge fade */}
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
        {/* Row 1 — Design & Development */}
        <div className="mb-4">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35, ease }}
            className="text-[9px] text-white/20 tracking-[0.2em] uppercase font-medium mb-2 pl-[8%]"
          >
            {rowLabels[0]}
          </motion.p>
          <Marquee>
            <div className="flex items-center py-2">
              {row1Tools.map((tool) => (
                <ToolPill key={tool} name={tool} />
              ))}
            </div>
          </Marquee>
        </div>

        {/* Row 2 — Marketing & Analytics (reverse) */}
        <div className="mb-4">
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.45, ease }}
            className="text-[9px] text-white/20 tracking-[0.2em] uppercase font-medium mb-2 text-right pr-[8%]"
          >
            {rowLabels[1]}
          </motion.p>
          <div style={{ direction: "rtl" }}>
            <Marquee>
              <div
                className="flex items-center py-2"
                style={{ direction: "ltr" }}
              >
                {row2Tools.map((tool) => (
                  <ToolPill key={tool} name={tool} />
                ))}
              </div>
            </Marquee>
          </div>
        </div>

        {/* Row 3 — Mixed (variety) */}
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55, ease }}
            className="text-[9px] text-white/20 tracking-[0.2em] uppercase font-medium mb-2 pl-[8%]"
          >
            {rowLabels[2]}
          </motion.p>
          <Marquee>
            <div className="flex items-center py-2">
              {row3Tools.map((tool, i) => (
                <ToolPill key={`r3-${tool}-${i}`} name={tool} />
              ))}
            </div>
          </Marquee>
        </div>
      </motion.div>

    </section>
  );
}
