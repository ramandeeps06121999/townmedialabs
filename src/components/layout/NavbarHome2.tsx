"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMega: true },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];

const megaMenuServices = [
  {
    category: "Branding & Design",
    items: [
      { label: "Branding", href: "/services/branding", desc: "Logo, identity & strategy" },
      { label: "Graphic Design", href: "/services/graphic-design", desc: "Visuals that convert" },
      { label: "Packaging Design", href: "/services/branding-packaging", desc: "Shelf-ready packaging" },
    ],
  },
  {
    category: "Performance Marketing",
    items: [
      { label: "Google Ads", href: "/services/google-ads", desc: "PPC & search campaigns" },
      { label: "SEO", href: "/services/seo", desc: "Organic growth & rankings" },
      { label: "Lead Generation", href: "/services/lead-generation", desc: "Fill your sales pipeline" },
    ],
  },
  {
    category: "Digital & Social",
    items: [
      { label: "Website Development", href: "/services/website-development", desc: "Fast, modern websites" },
      { label: "Social Media", href: "/services/social-media", desc: "Content & community" },
      { label: "AI Influencer Mgmt", href: "/services/ai-influencer-management", desc: "Virtual brand ambassadors" },
    ],
  },
  {
    category: "Media Production",
    items: [
      { label: "Video Editing", href: "/services/video-editing", desc: "Cinematic post-production" },
      { label: "Music Release", href: "/services/music-release", desc: "Distribution & promotion" },
    ],
  },
];

export default function NavbarHome2() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const closeMega = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  // Close mega menu on scroll
  useEffect(() => {
    const handleScroll = () => setMegaOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <div className="flex items-center justify-between px-2 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full w-full max-w-2xl shadow-2xl">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 mx-2 text-white font-bold text-sm tracking-tight hover:bg-white/10 transition-colors"
        >
          TML
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex flex-1 items-center justify-center gap-6 text-[13px] font-medium text-white/70">
          {navLinks.map((link) =>
            link.hasMega ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                <Link
                  href={link.href}
                  className="relative hover:text-white transition-colors tracking-wide group flex items-center gap-1"
                >
                  {link.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-[#ff4500] transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0" />
                </Link>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="relative hover:text-white transition-colors tracking-wide group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-[#ff4500] transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:translate-x-0" />
              </Link>
            )
          )}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 text-[13px] font-semibold text-white transition-all ml-2"
        >
          Get in Touch
        </Link>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white ml-2 mr-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg aria-hidden="true" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Mega Menu — CSS transition instead of motion AnimatePresence */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
        className={`hidden md:block absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[720px] max-w-[calc(100vw-2rem)] transition-all duration-200 ease-out ${
          megaOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Subtle connecting arrow */}
        <div className="flex justify-center mb-0">
          <div className="w-3 h-3 rotate-45 bg-black/80 border-l border-t border-white/10 -mb-1.5 z-10" />
        </div>

        <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-medium">Our Services</p>
            <Link
              href="/services"
              onClick={() => setMegaOpen(false)}
              className="text-[11px] text-[#ff4500] font-medium hover:underline flex items-center gap-1"
            >
              View All
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-4 gap-5">
            {megaMenuServices.map((cat) => (
              <div key={cat.category}>
                <p className="text-[10px] text-white/40 tracking-[0.1em] uppercase font-semibold mb-3">
                  {cat.category}
                </p>
                <div className="space-y-1">
                  {cat.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMegaOpen(false)}
                      className="group block p-2.5 -mx-2.5 rounded-lg hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff4500]/40 group-hover:bg-[#ff4500] transition-colors flex-shrink-0" />
                        <span className="text-[12px] font-medium text-white/70 group-hover:text-white transition-colors">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-[10px] text-white/25 group-hover:text-white/40 transition-colors ml-3.5">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA bar */}
          <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <p className="text-[11px] text-white/30">
              Not sure what you need? Let us help.
            </p>
            <Link
              href="/contact"
              onClick={() => setMegaOpen(false)}
              className="text-[11px] px-4 py-2 rounded-full bg-[#ff4500]/10 border border-[#ff4500]/20 text-[#ff4500] font-semibold hover:bg-[#ff4500]/20 transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div role="navigation" aria-label="Mobile navigation" className="absolute top-full mt-2 left-4 right-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:hidden">
          {navLinks.map((link) =>
            link.hasMega ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-sm text-white/70 hover:text-white transition-colors"
                  aria-label={mobileServicesOpen ? "Collapse services submenu" : "Expand services submenu"}
                  aria-expanded={mobileServicesOpen}
                >
                  <span>{link.label}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="ml-3 mb-2 pl-3 border-l border-white/[0.08] space-y-1">
                    {megaMenuServices.map((cat) => (
                      <div key={cat.category} className="mb-2">
                        <p className="text-[9px] text-white/25 tracking-[0.15em] uppercase mb-1.5">{cat.category}</p>
                        {cat.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                            className="block py-1.5 text-xs text-white/50 hover:text-white transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                    <Link
                      href="/services"
                      onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                      className="block py-1.5 text-xs text-[#ff4500] font-medium"
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          {/* Contact CTA */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 py-3 px-4 text-sm text-center text-white font-semibold bg-[#ff4500]/20 border border-[#ff4500]/30 rounded-xl hover:bg-[#ff4500]/30 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </div>
  );
}
