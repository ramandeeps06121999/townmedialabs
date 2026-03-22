"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 100, suffix: "+", label: "Businesses Scaled" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 12, suffix: "", label: "Services Offered" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const lineRef = useRef<HTMLDivElement>(null);

  // GSAP: Animate a vertical line that draws as you scroll
  useEffect(() => {
    if (!lineRef.current || !sectionRef.current) return;
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative px-6 py-32">
      {/* Decorative vertical line */}
      <div
        ref={lineRef}
        className="absolute top-0 left-1/2 h-full w-[1px] origin-top -translate-x-1/2 bg-gradient-to-b from-transparent via-accent/20 to-transparent"
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <RevealOnScroll>
          <p className="section-label mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
            About Us
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            We build brands that{" "}
            <span className="text-gold-gradient italic">dominate</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[#777]">
            TML is a full-service branding and digital marketing agency. We help
            businesses establish powerful brand identities and scale through
            data-driven marketing strategies. From branding and web development
            to SEO, paid ads, and social media — we handle it all so you can
            focus on what you do best.
          </p>
        </RevealOnScroll>

        <div ref={statsRef} className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                statsInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="glass-card gradient-border rounded-2xl p-10"
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                className="text-5xl font-bold text-accent"
              />
              <p className="mt-3 text-sm tracking-wide text-[#666]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
