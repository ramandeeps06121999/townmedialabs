"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { MagneticButton } from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !orbRef.current) return;

    gsap.fromTo(
      orbRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center center",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative px-6 py-32">
      {/* Animated orb background */}
      <div
        ref={orbRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      <RevealOnScroll>
        <div className="glass-card gradient-border relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-12 text-center md:p-20">
          {/* Inner decorative grid */}
          <div className="grid-pattern pointer-events-none absolute inset-0 opacity-50" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl">
              Ready to{" "}
              <span className="text-gold-gradient italic">grow</span> your
              business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/90">
              Book a free strategy call with our team. We&apos;ll analyze your
              current marketing, identify opportunities, and show you how TML
              can help you scale.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton
                href="mailto:info@townmedialabs.com"
                className="glow-button inline-block rounded-xl bg-accent px-12 py-4 text-sm font-semibold text-black transition-colors hover:bg-accent-dark"
              >
                Book a Free Call
              </MagneticButton>
              <MagneticButton
                href="#services"
                className="gradient-border inline-block rounded-xl bg-white/[0.03] px-12 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
              >
                View Services
              </MagneticButton>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
