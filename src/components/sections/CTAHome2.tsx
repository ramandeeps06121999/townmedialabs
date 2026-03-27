"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import LazyVideo from "@/components/ui/LazyVideo";

const stats = [
  { label: "Brands scaled", num: 500, suffix: "+", isDecimal: false, intPart: 0, decPart: 0 },
  { label: "Client retention", num: 98, suffix: "%", isDecimal: false, intPart: 0, decPart: 0 },
  { label: "Years in the game", num: 15, suffix: "+", isDecimal: false, intPart: 0, decPart: 0 },
  { label: "Average rating", num: 0, suffix: "/5", isDecimal: true, intPart: 4, decPart: 9 },
];

const ease = [0.23, 1, 0.32, 1] as const;

export function CTAHome2() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const videoInView = useInView(videoRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#080808] overflow-hidden"
    >
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,69,0,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,69,0,0.1) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Subtle noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Top separator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={sectionInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, ease }}
        className="absolute top-0 left-6 right-6 lg:left-12 lg:right-12 h-[1px] bg-gradient-to-r from-white/10 via-white/5 to-transparent origin-left"
      />

      {/* Video Section */}
      <div ref={videoRef} className="relative px-6 pt-32 pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white/90 tracking-[0.2em] uppercase font-semibold mb-4"
          >
            Since 2010
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-white mb-4"
          >
            TML Branding Agency
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-white/90 italic tracking-tight mb-12"
          >
            Industry Titans
          </motion.p>

          {/* Cinematic Video Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={videoInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.3, ease }}
            className="relative w-full overflow-hidden rounded-xl"
          >
            {/* Video glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={videoInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.6 }}
              className="absolute -inset-2 rounded-2xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,69,0,0.08) 0%, transparent 50%, rgba(255,69,0,0.04) 100%)",
                filter: "blur(20px)",
              }}
            />
            <div className="relative rounded-xl overflow-hidden">
              <LazyVideo
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="/tml-showreel-poster.jpg"
                className="w-full h-auto object-cover aspect-video"
              >
                <source src="/tml-showreel.mp4" type="video/mp4" />
              </LazyVideo>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Divider between video and CTA */}
      <div className="px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease }}
            className="w-full h-[1px] origin-left"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,69,0,0.3) 30%, rgba(255,69,0,0.3) 70%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* CTA + Image Section */}
      <div className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT: Image with parallax float */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.1, delay: 0.1, ease }}
              className="relative"
            >
              {/* Orange glow behind image */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255, 69, 0, 0.1) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />
              {/* Parallax floating image */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-xl"
              >
                <Image
                  src="/cta-image.webp"
                  alt="TML Agency creative professional with dramatic lighting"
                  width={800}
                  height={1200}
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[600px]"
                />
                {/* Subtle image overlay shimmer */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 6,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* RIGHT: Content with stagger */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.15, ease }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.08] tracking-tight text-white mb-6"
              >
                Say Hi,{" "}
                <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent italic">
                  Don&apos;t Be Shy.
                </span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.25, ease }}
                className="text-sm md:text-base text-white/90 max-w-lg leading-relaxed mb-10"
              >
                Book a free strategy call. We&apos;ll break down what&apos;s
                working, what&apos;s not, and exactly how we&apos;d grow your
                brand — no pitch decks, no pressure.
              </motion.p>

              {/* Animated Separator */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: 0.35, ease }}
                className="w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent mb-10 origin-left"
              />

              {/* Stats grid with AnimatedCounter */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + i * 0.1,
                      ease,
                    }}
                  >
                    <p className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                      {stat.isDecimal ? (
                        <>
                          <AnimatedCounter
                            target={stat.intPart}
                            suffix=""
                            duration={1.8}
                            className="inline"
                          />
                          .
                          <AnimatedCounter
                            target={stat.decPart}
                            suffix=""
                            duration={2}
                            className="inline"
                          />
                        </>
                      ) : (
                        <AnimatedCounter
                          target={stat.num}
                          suffix=""
                          duration={1.8}
                          className="inline"
                        />
                      )}
                      <span>{stat.suffix}</span>
                    </p>
                    <p className="text-[10px] md:text-xs text-white/90 tracking-[0.15em] uppercase mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.8, ease }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                {/* Pulsing Say Hi button */}
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 50px rgba(255,69,0,0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative inline-block rounded-xl bg-[#ff4500] px-10 py-4 text-sm font-semibold text-white text-center"
                >
                  {/* Pulsing glow ring */}
                  <motion.span
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-xl border-2 border-[#ff4500] pointer-events-none"
                  />
                  Say Hi
                </motion.a>

                <motion.a
                  href="#portfolio"
                  whileHover={{
                    scale: 1.04,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-block rounded-xl border border-white/[0.08] bg-white/[0.03] px-10 py-4 text-sm font-semibold text-white/90 text-center backdrop-blur-sm hover:text-white"
                >
                  View Our Work
                </motion.a>
              </motion.div>

              {/* Social proof avatar stack */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.9, ease }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="flex -space-x-2">
                  {[
                    "bg-gradient-to-br from-[#ff4500] to-[#ff6b35]",
                    "bg-gradient-to-br from-[#ff6b35] to-[#ffA500]",
                    "bg-gradient-to-br from-[#ff4500]/80 to-[#ff4500]",
                    "bg-gradient-to-br from-[#ffA500] to-[#ff6b35]",
                  ].map((bg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.9 + i * 0.08, ease }}
                      className={`w-8 h-8 rounded-full ${bg} border-2 border-[#080808] flex items-center justify-center text-[10px] font-bold text-white`}
                    >
                      {["CB", "AK", "RS", "MP"][i]}
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-white/90">
                  <span className="text-white/90 font-semibold">500+</span> brands trust us
                </p>
              </motion.div>

              {/* Testimonial quote — fades in last */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: 1.1, ease }}
                className="text-sm text-white/30 italic leading-relaxed border-l-2 border-[#ff4500]/30 pl-4"
              >
                &ldquo;TML transformed our entire digital presence in 60
                days.&rdquo;{" "}
                <span className="not-italic text-white/20">
                  — CB Builders
                </span>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
