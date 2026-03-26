"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Marquee } from "@/components/ui/Marquee";
import { clientLogos } from "@/data/clientLogos";

function LogoText({ name }: { name: string }) {
  return (
    <span className="group relative inline-flex items-center gap-[0.25em] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight whitespace-nowrap select-none cursor-default">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff4500]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none" />
      <span className="text-white/[0.08] transition-all duration-500 group-hover:text-white/90">
        {name}
      </span>
    </span>
  );
}

function Separator() {
  return (
    <span className="text-[#ff4500]/20 mx-4 sm:mx-6 md:mx-10 text-[6px] select-none flex items-center opacity-40">
      &#9670;
    </span>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    let frame: number;
    const duration = 1500;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function ClientLogos() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const row1 = clientLogos.map((name, i) => (
    <span key={`r1-${i}`} className="flex items-center">
      <LogoText name={name} />
      {i < clientLogos.length - 1 && <Separator />}
    </span>
  ));

  const row2 = [...clientLogos].reverse().map((name, i) => (
    <span key={`r2-${i}`} className="flex items-center">
      <LogoText name={name} />
      {i < clientLogos.length - 1 && <Separator />}
    </span>
  ));

  const row3Items = useMemo(() => {
    const shuffled = [...clientLogos];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor((i * 7 + 3) % (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const row3 = row3Items.map((name, i) => (
    <span key={`r3-${i}`} className="flex items-center">
      <LogoText name={name} />
      {i < clientLogos.length - 1 && <Separator />}
    </span>
  ));

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-16 md:py-24 bg-[#080808] overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Top/bottom border lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Section label */}
      <div className="text-center mb-12 md:mb-14">
        <p className="text-[10px] md:text-xs text-white/30 tracking-[0.25em] uppercase font-semibold mb-4">
          Trusted by ambitious brands
        </p>

        {/* Brand counter */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl md:text-3xl font-bold text-[#ff4500]/70">
            <AnimatedCounter target={clientLogos.length} suffix="+" />
          </span>
          <span className="text-[11px] text-white/25 tracking-wide uppercase">
            brands
          </span>
        </div>
      </div>

      {/* Marquee container with fade edges */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        {/* Row 1 */}
        <Marquee className="mb-6">
          <div className="flex items-center">{row1}</div>
        </Marquee>

        {/* Row 2 -- reverse */}
        <div className="mb-6" style={{ direction: "rtl" }}>
          <Marquee>
            <div className="flex items-center" style={{ direction: "ltr" }}>
              {row2}
            </div>
          </Marquee>
        </div>

        {/* Row 3 */}
        <Marquee>
          <div className="flex items-center">{row3}</div>
        </Marquee>
      </div>
    </section>
  );
}
