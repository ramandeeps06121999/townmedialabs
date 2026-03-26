"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TextScramble } from "@/components/ui/TextScramble";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn about your business, goals, competitors, and target audience.",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "We craft a custom strategy tailored to your specific needs and budget.",
  },
  {
    step: "03",
    title: "Execution",
    desc: "Our team implements the strategy across all relevant channels.",
  },
  {
    step: "04",
    title: "Optimize",
    desc: "We continuously monitor, analyze, and optimize for maximum results.",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepsInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    if (!timelineRef.current || !sectionRef.current) return;

    const bar = timelineRef.current.querySelector(".timeline-fill");
    const dots = timelineRef.current.querySelectorAll(".timeline-dot");

    if (bar) {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    }

    dots.forEach((dot, i) => {
      gsap.fromTo(
        dot,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(3)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: `top ${60 - i * 8}%`,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section id="process" ref={sectionRef} className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <RevealOnScroll>
            <p className="section-label mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
              Our Process
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl font-bold text-white md:text-6xl">
              How we{" "}
              <span className="text-gold-gradient italic">work</span>
            </h2>
          </RevealOnScroll>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Horizontal timeline bar (desktop) */}
          <div className="absolute top-8 left-0 right-0 hidden h-[2px] bg-[#111] md:block">
            <div className="timeline-fill h-full origin-left bg-gradient-to-r from-accent via-accent to-accent/30" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.2,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="relative pt-16 md:pt-20"
              >
                {/* Timeline dot */}
                <div className="timeline-dot absolute top-[22px] left-1/2 hidden -translate-x-1/2 md:block">
                  <div className="h-4 w-4 rounded-full border-2 border-accent bg-background shadow-[0_0_15px_rgba(255,204,0,0.3)]" />
                </div>

                <div className="glass-card gradient-border rounded-2xl p-8 text-center">
                  <span className="text-3xl font-bold text-gold-gradient">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    <TextScramble text={item.title} delay={0.8 + i * 0.2} />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/90">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
