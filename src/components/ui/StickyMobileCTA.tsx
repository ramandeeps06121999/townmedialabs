"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const PHONE_NUMBER = "+919872648209";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 300) {
        setShow(y < lastYRef.current);
      } else {
        setShow(false);
      }
      lastYRef.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#050505]/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 flex gap-3" role="group" aria-label="Quick contact actions">
        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call us now"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white/90 text-sm font-medium hover:bg-white/5 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff4500] text-white text-sm font-semibold hover:bg-[#ff5500] transition-colors shadow-[0_0_20px_rgba(255,69,0,0.3)]"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
