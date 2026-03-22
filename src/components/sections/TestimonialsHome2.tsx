"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "motion/react";
import { testimonials } from "@/data/testimonials";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const ease = [0.23, 1, 0.32, 1] as const;

// ── Word-by-word reveal ────────────────────────────────────────────
function WordReveal({
  text,
  inView,
  delay = 0,
}: {
  text: string;
  inView: boolean;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.035,
            ease,
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

// ── Animated star with spring physics ──────────────────────────────
function AnimatedStar({
  index,
  inView,
  baseDelay,
}: {
  index: number;
  inView: boolean;
  baseDelay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0, rotate: -90 }}
      animate={
        inView
          ? { opacity: 1, scale: 1, rotate: 0 }
          : {}
      }
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 12,
        delay: baseDelay + index * 0.09,
      }}
      className="text-[#ffcc00] text-xs inline-block"
    >
      &#9733;
    </motion.span>
  );
}

// ── Spotlight card wrapper ─────────────────────────────────────────
function SpotlightCard({
  children,
  index,
  inView,
}: {
  children: React.ReactNode;
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlightPos({ x, y });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.85, delay: 0.4 + index * 0.15, ease }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.35, ease },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-10 flex flex-col snap-center shrink-0 w-[85vw] md:w-auto overflow-hidden"
      style={{ perspective: 800 }}
    >
      {/* Spotlight radial gradient */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(255,69,0,0.06), transparent 50%)`,
        }}
      />

      {/* Border glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: `inset 0 0 0 1px rgba(255,69,0,0.15), 0 0 30px -10px rgba(255,69,0,0.1)`,
        }}
      />

      {/* Accent line on top */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-[#ff4500]/0 via-[#ff4500]/40 to-[#ff4500]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {children}
    </motion.div>
  );
}

// ── Animated gradient avatar ───────────────────────────────────────
function AnimatedAvatar({ letter, index }: { letter: string; index: number }) {
  const gradients = [
    "from-[#ff4500] via-[#ff6a33] to-[#ff4500]",
    "from-[#ff4500] via-[#e03e00] to-[#ff6a33]",
    "from-[#e03e00] via-[#ff4500] to-[#ff6a33]",
  ];
  return (
    <div className="relative w-10 h-10 rounded-full shrink-0 overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-30 animate-[spin_6s_linear_infinite]`}
      />
      <div className="absolute inset-[1px] rounded-full bg-[#0a0a0a] flex items-center justify-center">
        <span className="text-sm font-semibold bg-gradient-to-br from-white/90 to-white/60 bg-clip-text text-transparent">
          {letter}
        </span>
      </div>
    </div>
  );
}

// ── Navigation dots ────────────────────────────────────────────────
function NavDots({
  count,
  active,
  onDotClick,
}: {
  count: number;
  active: number;
  onDotClick: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-2 mt-8 md:hidden justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i === active
              ? "w-6 bg-[#ff4500]"
              : "w-1.5 bg-white/20 hover:bg-white/40"
          }`}
          aria-label={`Go to testimonial ${i + 1}`}
        />
      ))}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────
export function TestimonialsHome2() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [activeDot, setActiveDot] = useState(0);

  // Parallax for decorative quote
  const scrollY = useMotionValue(0);

  useEffect(() => {
    function handleScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;
      scrollY.set(progress * 60);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const quoteY = useSpring(scrollY, { stiffness: 50, damping: 20 });

  // Auto-rotate indicator
  const [autoProgress, setAutoProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setAutoProgress((p) => {
        if (p >= 100) {
          setActiveDot((d) => (d + 1) % testimonials.length);
          return 0;
        }
        return p + 1;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [inView]);

  // Scroll to active dot on mobile
  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.children;
    if (cards[activeDot]) {
      const card = cards[activeDot] as HTMLElement;
      container.scrollTo({
        left: card.offsetLeft - 24,
        behavior: "smooth",
      });
    }
  }, [activeDot]);

  // Track scroll position for dots
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.scrollWidth / testimonials.length;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveDot(Math.min(idx, testimonials.length - 1));
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-6 py-16 md:py-24 lg:py-32 lg:px-12 bg-[#0a0a0a] overflow-hidden"
    >
      {/* ── Ambient gradient orbs ─────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#ff4500]/[0.03] blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 2, delay: 0.8 }}
          className="absolute -bottom-60 -right-40 w-[500px] h-[500px] rounded-full bg-[#ff4500]/[0.02] blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 2, delay: 1.1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.01] blur-[80px]"
        />
      </div>

      {/* ── Large decorative parallax quote ───────────────────── */}
      <motion.span
        style={{ y: quoteY }}
        className="pointer-events-none select-none absolute top-20 right-8 lg:right-24 text-[8rem] sm:text-[14rem] md:text-[20rem] lg:text-[28rem] font-serif leading-none text-white/[0.015]"
        aria-hidden
      >
        &ldquo;
      </motion.span>

      <div className="relative mx-auto max-w-7xl">
        {/* ── Label ───────────────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-[10px] md:text-xs text-white/40 tracking-[0.2em] uppercase font-semibold mb-8"
        >
          Client stories
        </motion.p>

        {/* ── Heading ─────────────────────────────────────────── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-white max-w-4xl mb-6"
        >
          Don&apos;t take our word for it.{" "}
          <span className="text-white/40 italic">Take theirs.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="text-sm md:text-base text-white/40 max-w-lg leading-relaxed mb-16"
        >
          Real results from real businesses. Here&apos;s what our clients have
          to say about working with TML.
        </motion.p>

        {/* ── Separator ───────────────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="w-full h-[1px] bg-gradient-to-r from-white/15 via-white/5 to-transparent mb-16 origin-left"
        />

        {/* ── Testimonial Cards (horizontal scroll mobile / grid desktop) */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <SpotlightCard key={t.name} index={i} inView={inView}>
              {/* Large quote mark */}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.15,
                  ease,
                }}
                className="text-5xl text-[#ff4500]/20 font-serif leading-none mb-4 select-none block"
              >
                &ldquo;
              </motion.span>

              {/* Stars - animated one by one */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <AnimatedStar
                    key={si}
                    index={si}
                    inView={inView}
                    baseDelay={0.6 + i * 0.15}
                  />
                ))}
              </div>

              {/* Quote with word-by-word reveal */}
              <p className="text-sm md:text-base text-white/70 leading-relaxed flex-1 mb-8">
                <WordReveal
                  text={t.quote}
                  inView={inView}
                  delay={0.7 + i * 0.15}
                />
              </p>

              {/* Attribution */}
              <div className="pt-6 border-t border-white/[0.06]">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + i * 0.12, ease }}
                  className="flex items-center gap-4"
                >
                  <AnimatedAvatar letter={t.name.charAt(0)} index={i} />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-white/30 mt-0.5">{t.company}</p>
                  </div>
                </motion.div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* ── Navigation dots (mobile) ────────────────────────── */}
        <NavDots
          count={testimonials.length}
          active={activeDot}
          onDotClick={(i) => {
            setActiveDot(i);
            setAutoProgress(0);
          }}
        />

        {/* ── Auto-rotate progress bar (mobile) ──────────────── */}
        <div className="md:hidden mt-3 flex justify-center">
          <div className="w-16 h-[2px] rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div
              className="h-full bg-[#ff4500]/40 rounded-full"
              style={{ width: `${autoProgress}%` }}
            />
          </div>
        </div>

        {/* ── Aggregate rating ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl font-semibold text-white tracking-tight">
              <AnimatedCounter target={4} suffix="" duration={1} className="" />
              <span className="text-white/60">.</span>
              <AnimatedCounter target={9} suffix="" duration={1.5} className="" />
            </span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <AnimatedStar
                  key={i}
                  index={i}
                  inView={inView}
                  baseDelay={1.2}
                />
              ))}
            </div>
          </div>
          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
          <p className="text-xs text-white/30">
            Rated 4.9/5 across 200+ projects &middot; 98% client retention rate
          </p>
        </motion.div>
      </div>

      {/* Hide scrollbar globally for this component */}
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* JSON-LD Review / AggregateRating schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "TML Agency Digital Marketing Services",
            description:
              "Full-service digital marketing, branding, SEO, and advertising solutions by TML Agency.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              ratingCount: "500",
              reviewCount: String(testimonials.length),
            },
            review: testimonials.map((t) => ({
              "@type": "Review",
              author: {
                "@type": "Person",
                name: t.name,
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: String(t.rating),
                bestRating: "5",
              },
              reviewBody: t.quote,
              publisher: {
                "@type": "Organization",
                name: t.company,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
