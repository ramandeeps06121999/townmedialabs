"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "motion/react";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import LazyVideo from "@/components/ui/LazyVideo";

const ease = [0.23, 1, 0.32, 1] as const;

const projects = [
  {
    title: "CB Builders",
    category: "Web Design",
    image: "/portfolio/cb-builders-web-design.webp",
  },
  {
    title: "Real Estate App",
    category: "UI/UX Design",
    image: "/portfolio/real-estate-app-uiux-design.webp",
  },
  {
    title: "BYT Trucking",
    category: "Web Design",
    image: "/portfolio/byt-trucking-web-design.webp",
  },
  {
    title: "NFT Marketplace",
    category: "Web Design",
    image: "/portfolio/nft-marketplace-web-design.jpg",
  },
  {
    title: "Smart Home App",
    category: "UI/UX Design",
    image: "/portfolio/smart-home-app-uiux-design.webp",
  },
  {
    title: "Win Asset Finance",
    category: "Web Design",
    image: "/portfolio/win-asset-finance-web-design.png",
  },
];

const bottomRow = [
  {
    title: "Custom Trucking & Baling",
    category: "Branding & Web",
    image: "/portfolio/custom-trucking-baling-branding.jpg",
  },
  {
    title: "Zuri Beauty Academy",
    category: "Web Design",
    image: "/portfolio/zuri-beauty-academy-web-design.png",
  },
  {
    title: "Virtual Healthcare",
    category: "Branding & Web",
    image: "/portfolio/virtual-healthcare-branding.webp",
  },
  {
    title: "Advertisement Marketing",
    category: "Web Design",
    image: "/portfolio/advertisement-marketing-web-design.png",
  },
];

function ProjectCard({
  project,
  className,
  delay,
  hoveredIdx,
  idx,
  onHover,
  onLeave,
}: {
  project: { title: string; category: string; image: string };
  className: string;
  delay: number;
  hoveredIdx: number | null;
  idx: number;
  onHover: (i: number) => void;
  onLeave: () => void;
}) {
  const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const spotlightX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const spotlightY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 60px -12px rgba(255, 69, 0, 0.15)",
        transition: { duration: 0.4, ease },
      }}
      onMouseEnter={() => onHover(idx)}
      onMouseLeave={onLeave}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-xl bg-[#111] cursor-pointer border border-white/[0.04] hover:border-[#ff4500]/20 transition-colors duration-500 ${className}`}
    >
      {/* Image */}
      <Image
        src={project.image}
        alt={`${project.title} - ${project.category} project by TML Agency`}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        loading="lazy"
        className={`object-cover object-center transition-all duration-700 group-hover:scale-105 ${
          isDimmed ? "brightness-[0.3] scale-[0.98]" : ""
        }`}
      />

      {/* Noise / grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Cursor-following spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]: number[]) =>
              `radial-gradient(400px circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(255,69,0,0.07), transparent 60%)`
          ),
        }}
      />

      {/* Always-on subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Number */}
      <div className="absolute top-4 left-4 z-20">
        <span className="text-[10px] text-white/15 font-mono tracking-wider">
          {String(idx + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20">
        {/* Category tag slides in on hover with spring */}
        <motion.div
          className="overflow-hidden"
          initial={false}
          animate={{
            height: "auto",
          }}
        >
          <motion.p
            className="text-[9px] text-[#ff4500]/80 tracking-[0.2em] uppercase font-semibold mb-1"
            initial={{ opacity: 0, x: -16 }}
            whileHover={{ opacity: 1, x: 0 }}
            style={{
              opacity: 0,
              x: -16,
            }}
            animate={
              hoveredIdx === idx
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -16 }
            }
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {project.category}
          </motion.p>
        </motion.div>
        <h3 className="text-base md:text-lg font-medium text-white tracking-tight translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
          {project.title}
        </h3>
        {/* Accent line */}
        <div className="w-0 group-hover:w-8 h-[2px] bg-[#ff4500] mt-3 transition-all duration-500" />
      </div>

      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.04] group-hover:ring-[#ff4500]/20 transition-all duration-500 pointer-events-none z-20" />
    </motion.div>
  );
}

export function WorkHome2() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Parallax for heading
  const headingRef = useRef(null);
  const { scrollYProgress: headingScroll } = useScroll({
    target: headingRef,
    offset: ["start end", "end start"],
  });
  const headingY = useTransform(headingScroll, [0, 1], [40, -40]);

  // Video cinematic entrance
  const videoRef = useRef(null);
  const videoInView = useInView(videoRef, { once: true, amount: 0.2 });

  // Arrow hover
  const [arrowHovered, setArrowHovered] = useState(false);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative w-full px-6 py-16 md:py-24 lg:py-32 lg:px-12 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Ambient gradient orbs */}
      <div
        className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 69, 0, 0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-[40%] right-[0%] w-[800px] h-[800px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 69, 0, 0.03) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute bottom-[5%] left-[30%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 100, 50, 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header row */}
        <div
          ref={headingRef}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="text-[10px] md:text-xs text-white/90 tracking-[0.2em] uppercase font-semibold mb-8"
            >
              Selected work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              style={{ y: headingY }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-white max-w-3xl"
            >
              Work that speaks{" "}
              <span className="text-white/90">for itself.</span>
            </motion.h2>
          </div>

          <motion.a
            href="#portfolio"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            onMouseEnter={() => setArrowHovered(true)}
            onMouseLeave={() => setArrowHovered(false)}
            className="text-sm text-[#ff4500] font-semibold tracking-wide hover:text-[#ff6a33] transition-colors shrink-0 flex items-center gap-2"
          >
            View all projects
            <motion.span
              animate={{
                x: arrowHovered ? 6 : 0,
                opacity: arrowHovered ? 1 : 0.7,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="inline-block"
            >
              &rarr;
            </motion.span>
          </motion.a>
        </div>

        {/* Bento-style grid with staggerChildren */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]"
        >
          <ProjectCard
            project={projects[0]}
            className="col-span-2 row-span-1"
            delay={0}
            hoveredIdx={hoveredIdx}
            idx={0}
            onHover={setHoveredIdx}
            onLeave={() => setHoveredIdx(null)}
          />
          <ProjectCard
            project={projects[1]}
            className="col-span-1 row-span-2"
            delay={0.08}
            hoveredIdx={hoveredIdx}
            idx={1}
            onHover={setHoveredIdx}
            onLeave={() => setHoveredIdx(null)}
          />
          <ProjectCard
            project={projects[2]}
            className="col-span-1 row-span-1"
            delay={0.16}
            hoveredIdx={hoveredIdx}
            idx={2}
            onHover={setHoveredIdx}
            onLeave={() => setHoveredIdx(null)}
          />
          <ProjectCard
            project={projects[3]}
            className="col-span-2 row-span-1"
            delay={0.24}
            hoveredIdx={hoveredIdx}
            idx={3}
            onHover={setHoveredIdx}
            onLeave={() => setHoveredIdx(null)}
          />
          <ProjectCard
            project={projects[5]}
            className="col-span-1 row-span-1"
            delay={0.32}
            hoveredIdx={hoveredIdx}
            idx={4}
            onHover={setHoveredIdx}
            onLeave={() => setHoveredIdx(null)}
          />
        </motion.div>

        {/* Bottom row - 4 equal cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-3 md:mt-4"
        >
          {bottomRow.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              className="aspect-[4/3]"
              delay={i * 0.08}
              hoveredIdx={hoveredIdx}
              idx={5 + i}
              onHover={setHoveredIdx}
              onLeave={() => setHoveredIdx(null)}
            />
          ))}
        </motion.div>

        {/* Video showreel - cinematic entrance */}
        <motion.div
          ref={videoRef}
          initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
          animate={
            videoInView
              ? { opacity: 1, scale: 1, filter: "blur(0px)" }
              : {}
          }
          transition={{ duration: 1.2, delay: 0.2, ease }}
          className="mt-3 md:mt-4 relative aspect-video overflow-hidden rounded-xl bg-[#111] group cursor-pointer border border-white/[0.04] hover:border-[#ff4500]/15 transition-colors duration-500"
        >
          <LazyVideo
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          >
            <source
              src="/portfolio/tml-portfolio-showreel-2025.mp4"
              type="video/mp4"
            />
          </LazyVideo>

          {/* Film grain on video */}
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: "128px 128px",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="text-[10px] text-[#ff4500]/80 tracking-[0.15em] uppercase font-semibold mb-2">
              Showreel 2025
            </p>
            <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
              A year of building brands that matter
            </h3>
            <div className="w-0 group-hover:w-12 h-[2px] bg-[#ff4500] mt-4 transition-all duration-700" />
          </div>
          {/* Center play button */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-white/10"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-white ml-1" />
          </motion.div>
        </motion.div>

        {/* Bottom stats row with AnimatedCounter */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { target: 15, suffix: "+", label: "Projects per quarter" },
            { target: 25, suffix: "+", label: "Industries served" },
            { target: 100, suffix: "%", label: "Client satisfaction" },
            { target: 48, suffix: "hr", label: "Avg. response time" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 text-center hover:border-[#ff4500]/15 hover:bg-white/[0.03] transition-all duration-500"
            >
              <p className="text-2xl md:text-3xl font-bold text-[#ff4500]/80 tracking-tight">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <div className="w-6 h-[1px] bg-gradient-to-r from-[#ff4500]/40 to-transparent mx-auto my-2" />
              <p className="text-[10px] text-white/30 tracking-[0.12em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-10 flex justify-center"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(255,69,0,0.12)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl border border-[#ff4500]/20 bg-[#ff4500]/5 px-8 py-3.5 text-sm font-semibold text-white/90 hover:text-white hover:border-[#ff4500]/40 transition-colors duration-300"
          >
            View All Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
