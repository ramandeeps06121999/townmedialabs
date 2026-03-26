"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";

const ease = [0.23, 1, 0.32, 1] as const;

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact Us", href: "/contact" },
  { label: "Free Tools", href: "/free-tools" },
  { label: "Careers", href: "/careers" },
];

const serviceLinks = [
  { label: "Branding", href: "/services/branding" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "SEO", href: "/services/seo" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Social Media", href: "/services/social-media" },
  { label: "AI Influencer Management", href: "/services/ai-influencer-management" },
  { label: "Lead Generation", href: "/services/lead-generation" },
  { label: "Music Release", href: "/services/music-release" },
  { label: "Video Editing", href: "/services/video-editing" },
  { label: "Packaging Design", href: "/services/branding-packaging" },
  { label: "Graphic Design", href: "/services/graphic-design" },
];

const locationsByCountry = [
  {
    country: "India",
    cities: [
      { label: "Chandigarh", href: "/digital-marketing-agency-chandigarh" },
      { label: "Delhi", href: "/services/seo-in-delhi" },
      { label: "Mumbai", href: "/services/seo-in-mumbai" },
      { label: "Bangalore", href: "/services/seo-in-bangalore" },
      { label: "Hyderabad", href: "/services/seo-in-hyderabad" },
      { label: "Pune", href: "/services/seo-in-pune" },
      { label: "Gurgaon", href: "/services/seo-in-gurgaon" },
      { label: "Noida", href: "/services/seo-in-noida" },
    ],
  },
  {
    country: "New Zealand",
    cities: [
      { label: "Auckland", href: "/services/branding-in-auckland" },
      { label: "Wellington", href: "/services/branding-in-wellington" },
      { label: "Christchurch", href: "/services/branding-in-christchurch" },
      { label: "Hamilton", href: "/services/branding-in-hamilton" },
      { label: "Queenstown", href: "/services/branding-in-queenstown" },
    ],
  },
  {
    country: "United Kingdom",
    cities: [
      { label: "London", href: "/services/branding-in-london" },
      { label: "Manchester", href: "/services/branding-in-manchester" },
      { label: "Birmingham", href: "/services/branding-in-birmingham" },
      { label: "Leeds", href: "/services/branding-in-leeds" },
      { label: "Edinburgh", href: "/services/branding-in-edinburgh" },
    ],
  },
  {
    country: "United States",
    cities: [
      { label: "New York", href: "/services/branding-in-new-york" },
      { label: "Los Angeles", href: "/services/branding-in-los-angeles" },
      { label: "Chicago", href: "/services/branding-in-chicago" },
      { label: "Houston", href: "/services/branding-in-houston" },
      { label: "Miami", href: "/services/branding-in-miami" },
    ],
  },
  {
    country: "Australia",
    cities: [
      { label: "Sydney", href: "/services/branding-in-sydney" },
      { label: "Melbourne", href: "/services/branding-in-melbourne" },
      { label: "Brisbane", href: "/services/branding-in-brisbane" },
      { label: "Perth", href: "/services/branding-in-perth" },
      { label: "Adelaide", href: "/services/branding-in-adelaide" },
    ],
  },
  {
    country: "UAE",
    cities: [
      { label: "Dubai", href: "/services/branding-in-dubai" },
      { label: "Abu Dhabi", href: "/services/branding-in-abu-dhabi" },
      { label: "Sharjah", href: "/services/branding-in-sharjah" },
      { label: "Ajman", href: "/services/branding-in-ajman" },
      { label: "Ras Al Khaimah", href: "/services/branding-in-ras-al-khaimah" },
    ],
  },
];

function FooterColumn({
  title,
  links,
  delay = 0,
}: {
  title: string;
  links: { label: string; href: string }[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      <p className="text-sm text-white font-semibold uppercase tracking-wider mb-4">
        {title}
      </p>
      <ul className="space-y-0.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[13px] text-white/40 hover:text-white/70 transition-colors block py-1.5"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function FooterHome2() {
  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, amount: 0.1 });
  const [emailFocused, setEmailFocused] = useState(false);
  const [nlEmail, setNlEmail] = useState("");
  const [nlStatus, setNlStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [nlMsg, setNlMsg] = useState("");

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setNlStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: nlEmail }),
      });
      const data = await res.json();
      if (!res.ok) {
        setNlStatus("error");
        setNlMsg(data.error);
      } else {
        setNlStatus("success");
        setNlMsg(data.message);
        setNlEmail("");
      }
    } catch {
      setNlStatus("error");
      setNlMsg("Network error. Try again.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full px-6 py-16 lg:px-12 bg-[#050505] overflow-hidden"
    >
      {/* Gradient top border */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff4500]/30 to-transparent" />

      {/* Large TML watermark in background with gradient fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={footerInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      >
        <span
          className="text-[20rem] md:text-[28rem] font-black tracking-tighter text-white/[0.02] leading-none"
          aria-hidden="true"
        >
          TML
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-7xl">
        {/* Newsletter / CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-sm text-white/50 shrink-0">
              Get branding tips & growth insights straight to your inbox.
            </p>
            <div className="flex flex-col w-full sm:max-w-md gap-2">
              <form
                className="flex w-full gap-3"
                onSubmit={handleNewsletter}
              >
                <div className="relative flex-1">
                  <motion.div
                    animate={{
                      opacity: emailFocused ? 1 : 0,
                      scale: emailFocused ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute -inset-[1px] rounded-lg pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,69,0,0.15), rgba(255,69,0,0.05))",
                      filter: "blur(4px)",
                    }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your email"
                    value={nlEmail}
                    onChange={(e) => setNlEmail(e.target.value)}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    className="relative w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#ff4500]/40 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={nlStatus === "loading"}
                  className="shrink-0 px-5 py-3 rounded-lg bg-[#ff4500]/10 border border-[#ff4500]/20 text-sm text-[#ff4500] font-semibold hover:bg-[#ff4500]/20 transition-colors disabled:opacity-50"
                >
                  {nlStatus === "loading" ? "..." : "Subscribe"}
                </button>
              </form>
              {nlMsg && (
                <p className={`text-xs ${nlStatus === "success" ? "text-green-400" : "text-red-400"}`}>
                  {nlMsg}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease }}
          className="w-full h-[1px] bg-gradient-to-r from-white/[0.06] via-white/[0.04] to-transparent mb-12 origin-left"
        />

        {/* Main footer grid — 4 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <FooterColumn title="Company" links={companyLinks} delay={0} />
          <FooterColumn title="Services" links={serviceLinks} delay={0.1} />

          {/* Locations — spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="col-span-2"
          >
            <p className="text-sm text-white font-semibold uppercase tracking-wider mb-5">
              Our Locations
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-6">
              {locationsByCountry.map((group) => (
                <div key={group.country}>
                  <p className="text-[11px] text-[#ff4500]/60 font-medium uppercase tracking-wider mb-2">
                    {group.country}
                  </p>
                  <ul className="space-y-0">
                    {group.cities.map((city) => (
                      <li key={city.label}>
                        <Link
                          href={city.href}
                          className="text-[13px] text-white/40 hover:text-white/70 transition-colors block py-1"
                        >
                          {city.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease }}
          className="w-full h-[1px] bg-gradient-to-r from-white/[0.06] via-white/[0.04] to-transparent mb-8 origin-left"
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          {/* Left: Copyright */}
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} TML Agency. All rights reserved.
          </p>

          {/* Center: Policy links */}
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="group relative text-xs text-white/20 hover:text-white/40 transition-colors"
            >
              Privacy Policy
              <span className="absolute left-0 -bottom-0.5 h-[1px] w-full origin-left scale-x-0 bg-white/20 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
            <span className="text-white/10">|</span>
            <Link
              href="/terms-of-service"
              className="group relative text-xs text-white/20 hover:text-white/40 transition-colors"
            >
              Terms of Service
              <span className="absolute left-0 -bottom-0.5 h-[1px] w-full origin-left scale-x-0 bg-white/20 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          </div>

          {/* Right: Social icons */}
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/townmedialabs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/Town.media.labs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://in.linkedin.com/company/townmedialabs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/30 hover:text-white/70 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex h-11 w-11 md:h-10 md:w-10 items-center justify-center rounded-full border border-white/[0.08] bg-[#080808]/80 backdrop-blur-sm text-white/40 hover:text-white/70 hover:border-[#ff4500]/30 transition-colors"
        aria-label="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </motion.button>
    </footer>
  );
}
