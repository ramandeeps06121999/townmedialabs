"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { faqs } from "@/data/faqs";

const ease = [0.23, 1, 0.32, 1] as const;

export function FAQHome2() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="faq"
      ref={ref}
      className="relative w-full px-6 py-16 md:py-24 lg:py-32 lg:px-12 bg-[#080808] overflow-hidden"
    >
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      {/* Decorative "?" watermark with parallax */}
      <motion.div
        style={{ y: watermarkY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden
      >
        <span className="text-[10rem] sm:text-[18rem] md:text-[30rem] lg:text-[40rem] font-black text-white/[0.015] leading-none">
          ?
        </span>
      </motion.div>

      {/* Subtle radial glow behind content */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#ff4500]/[0.02] blur-[150px]" />

      <div className="relative mx-auto max-w-4xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-[10px] md:text-xs text-white/90 tracking-[0.2em] uppercase font-semibold mb-8"
        >
          FAQ
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.08] tracking-tight text-white mb-16"
        >
          Questions <span className="text-white/90">& answers.</span>
        </motion.h2>

        {/* FAQ items */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2,
              },
            },
          }}
          className="flex flex-col gap-3"
        >
          {/* Chunk FAQs into groups of 3 to reduce DOM width */}
          {((): React.ReactNode => {
            const chunkSize = 3;
            const chunks: (typeof faqs)[] = [];
            for (let c = 0; c < faqs.length; c += chunkSize) {
              chunks.push(faqs.slice(c, c + chunkSize));
            }
            return chunks.map((chunk: typeof faqs, ci: number) => (
              <div key={ci} className="contents">
                {chunk.map((faq: (typeof faqs)[number], i: number) => {
                  const globalIndex = ci * chunkSize + i;
                  const isOpen = openFaq === globalIndex;
                  const num = String(globalIndex + 1).padStart(2, "0");

                  return (
                    <motion.div
                      key={globalIndex}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6, ease },
                        },
                      }}
                      className="group relative"
                    >
                {/* Glass card */}
                <motion.div
                  animate={{
                    backgroundColor: isOpen
                      ? "rgba(255,255,255,0.035)"
                      : "rgba(255,255,255,0.02)",
                    borderColor: isOpen
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(255,255,255,0.06)",
                  }}
                  transition={{ duration: 0.35, ease }}
                  className="relative rounded-xl border bg-white/[0.02] border-white/[0.06] overflow-hidden transition-[box-shadow] duration-300 hover:shadow-[0_0_30px_-10px_rgba(255,69,0,0.08)] hover:bg-white/[0.03] hover:border-white/[0.1]"
                >
                  {/* Glowing left border accent */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
                    animate={{
                      backgroundColor: isOpen ? "#ff4500" : "rgba(255,255,255,0.06)",
                      boxShadow: isOpen
                        ? "0 0 12px 1px rgba(255,69,0,0.4)"
                        : "0 0 0px 0px rgba(255,69,0,0)",
                    }}
                    transition={{ duration: 0.4, ease }}
                  />

                  {/* Question button */}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : globalIndex)}
                    className="flex w-full items-center gap-4 md:gap-6 px-5 md:px-7 py-5 md:py-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    {/* Number */}
                    <span className="text-xs md:text-sm font-mono text-white/15 shrink-0 tabular-nums select-none">
                      {num}
                    </span>

                    {/* Question text */}
                    <span className="flex-1 pr-4 text-sm md:text-base font-medium text-white/90 transition-colors duration-300 group-hover:text-white">
                      {faq.q}
                    </span>

                    {/* Animated + / x toggle */}
                    <div className="relative h-6 w-6 shrink-0 flex items-center justify-center">
                      {/* Horizontal bar */}
                      <motion.span
                        animate={{
                          rotate: isOpen ? 45 : 0,
                          backgroundColor: isOpen ? "#ff4500" : "rgba(255,255,255,0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        className="absolute h-[1.5px] w-3.5 rounded-full"
                      />
                      {/* Vertical bar */}
                      <motion.span
                        animate={{
                          rotate: isOpen ? 135 : 90,
                          backgroundColor: isOpen ? "#ff4500" : "rgba(255,255,255,0.3)",
                          scaleY: isOpen ? 1 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                        className="absolute h-[1.5px] w-3.5 rounded-full"
                      />
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { type: "spring", stiffness: 200, damping: 26 },
                          opacity: { duration: 0.25, delay: 0.05 },
                        }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ y: 8, opacity: 0, filter: "blur(4px)" }}
                          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                          exit={{ y: -4, opacity: 0, filter: "blur(2px)" }}
                          transition={{
                            duration: 0.45,
                            ease,
                          }}
                          className="px-5 md:px-7 pb-6 pl-[3.25rem] md:pl-[4.75rem] text-sm text-white/45 leading-relaxed max-w-2xl"
                        >
                          {faq.a}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
                  );
                })}
              </div>
            ));
          })()}
        </motion.div>

        {/* "Still have questions?" CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8, ease }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-8 py-6 backdrop-blur-sm">
            <div>
              <p className="text-sm md:text-base font-medium text-white/90 mb-1">
                Still have questions?
              </p>
              <p className="text-xs md:text-sm text-white/35">
                We&apos;d love to hear from you.{" "}
                <a
                  href="/contact"
                  className="text-[#ff4500]/80 hover:text-[#ff4500] transition-colors duration-300 underline underline-offset-2 decoration-[#ff4500]/30 hover:decoration-[#ff4500]/60"
                >
                  Get in touch
                </a>{" "}
                and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
