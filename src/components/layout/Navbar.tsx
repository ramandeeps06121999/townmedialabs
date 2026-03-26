"use client";

import { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "motion/react";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.85)"]
  );
  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.04)"]
  );
  const navBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  return (
    <motion.nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: navBg,
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: navBorder,
        backdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
        WebkitBackdropFilter: useTransform(navBlur, (v) => `blur(${v}px)`),
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.a
          href="#"
          className="font-display text-2xl font-bold tracking-tight text-white"
          style={{ scale: logoScale }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          TML
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="animated-underline text-xs font-medium tracking-wide text-white/90 uppercase transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="glow-button rounded-lg bg-accent px-5 py-2.5 text-xs font-semibold tracking-wide text-black uppercase transition-colors hover:bg-accent-dark"
          >
            Book a call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <svg
            aria-hidden="true"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-t border-white/[0.04] bg-[#050505]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="px-6 py-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                  className="block py-3 text-sm text-white/90 transition-colors hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 inline-block rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-black"
              >
                Book a call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
