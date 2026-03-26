"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/data/services";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TextScramble } from "@/components/ui/TextScramble";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(sectionRef, { once: true, amount: 0.1 });

  useEffect(() => {
    const section = sectionRef.current;
    const container = scrollContainerRef.current;
    if (!section || !container) return;

    // Only enable horizontal scroll on desktop
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const scrollWidth = container.scrollWidth - window.innerWidth;

      const tween = gsap.to(container, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="horizontal-scroll-section relative"
    >
      {/* Header - visible above the horizontal scroll */}
      <div className="px-6 pt-32 pb-12 md:pb-0">
        <div className="mx-auto max-w-7xl text-center md:text-left">
          <RevealOnScroll>
            <p className="section-label mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
              Our Services
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Everything you need to{" "}
              <span className="text-gold-gradient italic">grow</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="mt-4 max-w-xl text-white/90">
              A comprehensive suite of branding and marketing services designed
              to take your business to the next level.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* Horizontal scrolling cards */}
      <div
        ref={scrollContainerRef}
        className="flex flex-col gap-5 px-6 pb-32 md:flex-row md:flex-nowrap md:gap-8 md:px-12 md:pt-12 md:pb-0"
      >
        {/* Spacer for header area on desktop */}
        <div className="hidden w-[30vw] shrink-0 md:block" />

        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="glass-card gradient-border group w-full shrink-0 rounded-2xl p-8 md:w-[350px]"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-2xl transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">
              <TextScramble text={service.title} delay={0.5 + i * 0.1} />
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/90">
              {service.description}
            </p>
            <div className="mt-6 h-[1px] w-0 bg-gradient-to-r from-accent to-transparent transition-all duration-700 group-hover:w-full" />
          </motion.div>
        ))}

        {/* End spacer */}
        <div className="hidden w-[10vw] shrink-0 md:block" />
      </div>
    </section>
  );
}
