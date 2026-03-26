"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqs } from "@/data/faqs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <RevealOnScroll>
            <p className="section-label mb-4 text-sm font-semibold tracking-widest text-accent uppercase">
              FAQs
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Got questions?
            </h2>
          </RevealOnScroll>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <RevealOnScroll key={i} delay={i * 0.08}>
              <div className="border-b border-[#151515]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="group flex w-full items-center justify-between py-6 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="pr-4 text-sm font-medium text-[#ccc] transition-colors group-hover:text-white md:text-base">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#222] transition-colors group-hover:border-accent/30"
                  >
                    <span className="text-sm text-[#999]">+</span>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          type: "spring",
                          stiffness: 200,
                          damping: 25,
                        },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-sm leading-relaxed text-white/90">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
