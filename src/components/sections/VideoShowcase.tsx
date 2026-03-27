"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";
import LazyVideo from "@/components/ui/LazyVideo";

const ease = [0.23, 1, 0.32, 1] as const;

const reels = [
  { src: "/brand-motion-luxe-interiors.mp4", poster: "/brand-motion-luxe-interiors-poster.webp", label: "Brand Motion", client: "Luxe Interiors" },
  { src: "/visual-identity-nova-studios.mp4", poster: "/visual-identity-nova-studios-poster.webp", label: "Visual Identity", client: "Nova Studios" },
  { src: "/ad-creative-techvault.mp4", poster: "/ad-creative-techvault-poster.webp", label: "Ad Creative", client: "TechVault" },
  { src: "/social-content-meridian-co.mp4", poster: "/social-content-meridian-co-poster.webp", label: "Social Content", client: "Meridian Co" },
  { src: "/campaign-film-atlas-digital.mp4", poster: "/campaign-film-atlas-digital-poster.webp", label: "Campaign Film", client: "Atlas Digital" },
  { src: "/product-story-vero-fashion.mp4", poster: "/product-story-vero-fashion-poster.webp", label: "Product Story", client: "Vero Fashion" },
];

/* Floating particles background */
function Particles() {
  const particles = useRef(
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#ff4500]/10"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 15, -10, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* Animated card number that counts up when in view */
function CardNumber({ number }: { number: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    let frame: number;
    function animate(ts: number) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / 800, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * number));
      if (progress < 1) frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, number]);

  return (
    <span ref={ref} className="text-[10px] text-white/20 font-mono tracking-wider tabular-nums">
      {String(count).padStart(2, "0")}
    </span>
  );
}

export function VideoShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds per card index
  const baseX = useTransform(scrollYProgress, [0, 1], ["8%", "-25%"]);
  const card0X = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const card1X = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const card2X = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const card3X = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const card4X = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const card5X = useTransform(scrollYProgress, [0, 1], [0, 35]);
  const cardOffsets = [card0X, card1X, card2X, card3X, card4X, card5X];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Drag indicator animation
  const [dragVisible, setDragVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setDragVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full py-16 md:py-24 lg:py-32 bg-[#080808] overflow-hidden"
    >
      {/* Ambient gradient orbs */}
      <div
        className="absolute top-[10%] left-[-5%] w-[700px] h-[700px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 69, 0, 0.05) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute top-[50%] right-[-10%] w-[900px] h-[900px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 69, 0, 0.04) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-[0%] left-[40%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 100, 50, 0.05) 0%, transparent 55%)",
        }}
      />

      {/* Floating particles */}
      <Particles />

      {/* Heading area */}
      <div className="px-6 lg:px-12 mb-6 relative z-10">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white/90 tracking-[0.2em] uppercase font-semibold mb-8"
          >
            Our work in motion
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-white max-w-4xl"
            >
              Brands come alive{" "}
              <span className="text-white/90 italic">through motion.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="text-sm text-white/30 max-w-sm leading-relaxed shrink-0"
            >
              Short-form content, brand films, and animated visuals — crafted to
              stop the scroll.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="px-6 lg:px-12 mb-14">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="w-full h-[1px] bg-gradient-to-r from-white/15 via-white/5 to-transparent origin-left"
          />
        </div>
      </div>

      {/* Scrolling video row */}
      <div ref={scrollRef} className="relative z-10">
        <motion.div
          style={{ x: baseX }}
          className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-7 pl-4 sm:pl-6 lg:pl-12"
        >
          {reels.map((reel, i) => (
            <motion.div
              key={reel.src}
              initial={{ opacity: 0, y: 50, rotateY: -8 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.3 + i * 0.12,
                ease,
              }}
              style={{
                x: cardOffsets[i],
                perspective: 1000,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex-shrink-0 w-[200px] sm:w-[260px] md:w-[340px] lg:w-[400px] aspect-[9/16] rounded-2xl overflow-hidden bg-[#111] cursor-pointer"
            >
              {/* 3D tilt wrapper */}
              <motion.div
                className="relative w-full h-full"
                whileHover={{
                  rotateY: 4,
                  rotateX: -2,
                  transition: { duration: 0.5, ease },
                }}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <LazyVideo
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={reel.poster}
                  className={`h-full w-full object-cover transition-all duration-700 ${
                    hoveredIndex !== null && hoveredIndex !== i
                      ? "scale-[0.97] brightness-[0.3]"
                      : "group-hover:scale-105"
                  }`}
                >
                  <source src={reel.src} type="video/mp4" />
                </LazyVideo>

                {/* Film grain overlay */}
                <div
                  className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none z-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundSize: "128px 128px",
                  }}
                />

                {/* Vignette + gradient overlay */}
                <div
                  className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500 z-10"
                  style={{
                    background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%), linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.3) 100%)",
                  }}
                />

                {/* Glowing border that pulses on hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.06] group-hover:ring-[#ff4500]/30 transition-all duration-500 pointer-events-none z-20" />
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 group-hover:opacity-100"
                  style={{
                    boxShadow: "inset 0 0 30px rgba(255, 69, 0, 0.08), 0 0 40px rgba(255, 69, 0, 0.05)",
                  }}
                  animate={
                    hoveredIndex === i
                      ? {
                          boxShadow: [
                            "inset 0 0 20px rgba(255, 69, 0, 0.05), 0 0 30px rgba(255, 69, 0, 0.03)",
                            "inset 0 0 40px rgba(255, 69, 0, 0.1), 0 0 50px rgba(255, 69, 0, 0.07)",
                            "inset 0 0 20px rgba(255, 69, 0, 0.05), 0 0 30px rgba(255, 69, 0, 0.03)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Number + client top left */}
                <div className="absolute top-5 left-5 flex items-center gap-3 z-20">
                  <CardNumber number={i + 1} />
                  <span className="text-[9px] text-white/0 group-hover:text-white/30 tracking-[0.15em] uppercase transition-colors duration-500">
                    {reel.client}
                  </span>
                </div>

                {/* Bottom info with reveal animation */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 overflow-hidden">
                  {/* Label with clip-path / translateY reveal */}
                  <div className="overflow-hidden">
                    <motion.h3
                      className="text-lg md:text-xl font-medium text-white tracking-tight"
                      initial={false}
                      animate={
                        hoveredIndex === i
                          ? { y: 0, opacity: 1 }
                          : { y: 8, opacity: 0.8 }
                      }
                      transition={{ duration: 0.45, ease }}
                    >
                      {reel.label}
                    </motion.h3>
                  </div>
                  {/* Client name reveal on hover */}
                  <div className="overflow-hidden h-0 group-hover:h-5 transition-all duration-500">
                    <motion.p
                      className="text-[10px] text-[#ff4500]/70 tracking-[0.15em] uppercase font-medium mt-1"
                      initial={{ y: 16, opacity: 0 }}
                      animate={
                        hoveredIndex === i
                          ? { y: 0, opacity: 1 }
                          : { y: 16, opacity: 0 }
                      }
                      transition={{ duration: 0.4, delay: 0.05, ease }}
                    >
                      {reel.client}
                    </motion.p>
                  </div>
                  <div className="w-0 group-hover:w-8 h-[2px] bg-[#ff4500] mt-3 transition-all duration-500" />
                </div>

                {/* Center play button with ripple/pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Ripple rings */}
                  <motion.div
                    className="absolute inset-0 -m-4 rounded-full border border-white/10"
                    animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 -m-4 rounded-full border border-white/10"
                    animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                  />
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex flex-col items-center justify-center"
                    whileHover={{
                      scale: 1.15,
                      transition: { type: "spring", stiffness: 400, damping: 15 },
                    }}
                  >
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-white ml-1" />
                  </motion.div>
                  <p className="text-[8px] text-white/90 tracking-[0.15em] uppercase text-center mt-2 font-medium">Watch</p>
                </div>

                {/* Top accent glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff4500]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="px-6 lg:px-12 mt-14 relative z-10">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="flex items-center gap-3"
          >
            <p className="text-xs text-white/20">
              {reels.length} projects
            </p>
            {/* Animated drag indicator */}
            <motion.div
              className="flex items-center gap-2 text-xs text-white/30"
              animate={{
                opacity: dragVisible ? [0.3, 0.7, 0.3] : 0.3,
                x: dragVisible ? [0, 8, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: dragVisible ? Infinity : 0,
                ease: "easeInOut",
              }}
            >
              <span className="text-white/15">&middot;</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="opacity-40"
              >
                <path
                  d="M3 8H13M13 8L10 5M13 8L10 11"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Drag to explore</span>
            </motion.div>
          </motion.div>
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="text-sm text-[#ff4500] font-semibold hover:text-[#ff6a33] transition-colors flex items-center gap-2"
          >
            View all work
            <motion.span
              className="inline-block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              &rarr;
            </motion.span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
