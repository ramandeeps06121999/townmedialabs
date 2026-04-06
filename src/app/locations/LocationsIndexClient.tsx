"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

/* ── types (minimal, serializable from server) ─────────────────────────────── */

interface LocationMin {
  slug: string;
  name: string;
  description: string;
}

interface CountryGroup {
  country: string;
  countrySlug: string;
  states: Record<string, LocationMin[]>;
  cityCount: number;
}

interface ServiceListItem {
  slug: string;
  name: string;
}

interface LocationsIndexClientProps {
  groups: CountryGroup[];
  totalCities: number;
  totalCountries: number;
  serviceList: ServiceListItem[];
}

const countryDisplayMap: Record<string, string> = {
  India: "India",
  Canada: "Canada",
  USA: "United States",
  UK: "United Kingdom",
  Australia: "Australia",
  "New Zealand": "New Zealand",
  UAE: "United Arab Emirates",
};

/* ── icons ──────────────────────────────────────────────────────────────────── */

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ── components ─────────────────────────────────────────────────────────────── */

function CityCard({ loc, index, serviceList }: { loc: LocationMin; index: number; serviceList: ServiceListItem[] }) {
  const firstServiceSlug = serviceList[0].slug;
  const citySlug = loc.slug.replace(/_/g, "-");
  const href = `/services/${firstServiceSlug === "social-media" ? "social-media-marketing" : firstServiceSlug}-in-${citySlug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.03, 0.3), ease }}
    >
      <Link
        href={href}
        className="group block p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500"
      >
        <div className="flex items-center gap-2 mb-2">
          <MapPinIcon />
          <h3 className="text-sm font-semibold text-white group-hover:text-[#ff4500] transition-colors">
            {loc.name}
          </h3>
        </div>
        <p className="text-[11px] text-white leading-relaxed line-clamp-2 mb-3">
          {loc.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {serviceList.slice(0, 3).map((s) => (
            <span
              key={s.slug}
              className="text-[9px] px-2 py-0.5 rounded-full border border-white/[0.06] text-white"
            >
              {s.name}
            </span>
          ))}
          <span className="text-[9px] px-2 py-0.5 text-white">
            +{serviceList.length - 3} more
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function CountrySection({ group, defaultOpen, serviceList }: { group: CountryGroup; defaultOpen: boolean; serviceList: ServiceListItem[] }) {
  const [open, setOpen] = useState(defaultOpen);
  const stateEntries = Object.entries(group.states).sort((a, b) => a[0].localeCompare(b[0]));

  return (
    <div className="border border-white/[0.06] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={`${open ? "Collapse" : "Expand"} ${countryDisplayMap[group.country] ?? group.country} locations`}
        className="w-full flex items-center justify-between p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.03] transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 flex items-center justify-center">
            <GlobeIcon />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-medium text-white">
              {countryDisplayMap[group.country] ?? group.country}
            </h2>
            <p className="text-xs text-white mt-1">
              {group.cityCount} {group.cityCount === 1 ? "city" : "cities"} &middot;{" "}
              {stateEntries.length} {stateEntries.length === 1 ? "region" : "regions"}
            </p>
          </div>
        </div>
        <div className="text-white">
          <ChevronIcon open={open} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <div className="px-6 md:px-8 pb-8 pt-4">
              <div className="flex justify-end mb-4">
                <Link
                  href={`/locations/${group.countrySlug}`}
                  className="text-xs text-[#ff4500] font-medium hover:underline"
                >
                  View all {countryDisplayMap[group.country] ?? group.country} services &rarr;
                </Link>
              </div>

              {stateEntries.map(([state, cities]) => (
                <div key={state} className="mb-6 last:mb-0">
                  <h3 className="text-xs text-white tracking-[0.15em] uppercase mb-3 font-medium">
                    {state}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {cities.map((loc, i) => (
                      <CityCard key={loc.slug} loc={loc} index={i} serviceList={serviceList} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── page ────────────────────────────────────────────────────────────────────── */

export default function LocationsIndexClient({ groups, totalCities, totalCountries, serviceList }: LocationsIndexClientProps) {

  return (
    <main className="bg-[#050505] text-white min-h-screen">
      <InnerNavbar />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:px-12 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto mb-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Locations", href: "/locations" },
            ]}
          />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] text-white tracking-[0.25em] uppercase mb-6"
          >
            Global Reach
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6"
          >
            Digital Marketing Services{" "}
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              Across the Globe
            </span>
            <span className="text-[#ff4500]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto mb-10"
          >
            From Chandigarh to Calgary, London to Los Angeles — we deliver tailored
            digital marketing strategies in {totalCities}+ cities across {totalCountries} countries.
            Find your city and explore the services we offer near you.
          </motion.p>

          {/* ── Stats ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="flex items-center justify-center gap-8 md:gap-12 mb-10"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-[#ff4500]">{totalCities}+</div>
              <div className="text-[10px] text-white tracking-wider uppercase mt-1">Cities</div>
            </div>
            <div className="w-[1px] h-10 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-[#ff4500]">{totalCountries}</div>
              <div className="text-[10px] text-white tracking-wider uppercase mt-1">Countries</div>
            </div>
            <div className="w-[1px] h-10 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-[#ff4500]">{serviceList.length}</div>
              <div className="text-[10px] text-white tracking-wider uppercase mt-1">Services</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Country Sections ────────────────────────────────────────────────── */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-4 mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-white whitespace-nowrap">
              Explore by Country
            </h2>
            <div className="flex-1 h-[1px] bg-white/[0.06]" />
            <span className="text-xs text-white font-mono">
              {String(totalCountries).padStart(2, "0")} countries
            </span>
          </motion.div>

          <div className="space-y-4">
            {groups.map((group, i) => (
              <CountrySection key={group.country} group={group} defaultOpen={i === 0} serviceList={serviceList} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="relative w-full px-6 py-16 md:py-24 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6"
          >
            Don&apos;t see your city
            <span className="text-[#ff4500]">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-sm md:text-base text-white leading-relaxed mb-10 max-w-xl mx-auto"
          >
            We work with businesses everywhere. Whether you are in a major metro or a
            growing town, our team delivers digital marketing strategies tailored to
            your local market. Reach out and let us know where you are.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold text-sm hover:bg-[#ff5500] transition-colors shadow-[0_0_30px_rgba(255,69,0,0.3)]"
            >
              Let&apos;s Talk About Your Business
            </Link>
            <a
              href="mailto:info@townmedialabs.com"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
            >
              info@townmedialabs.com
            </a>
          </motion.div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
