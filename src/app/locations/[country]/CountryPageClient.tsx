"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { LocationInfo } from "@/data/locations";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

interface ServiceDef {
  slug: string;
  name: string;
}

interface CountryPageClientProps {
  countryName: string;
  countrySlug: string;
  stateGroups: Record<string, LocationInfo[]>;
  cityCount: number;
  services: ServiceDef[];
}

function getServiceHref(serviceSlug: string, locationSlug: string): string {
  const loc = locationSlug.replace(/_/g, "-");
  if (serviceSlug === "social-media") return `/services/social-media-marketing-in-${loc}`;
  return `/services/${serviceSlug}-in-${loc}`;
}

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff4500" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CityServiceCard({ loc, services, index }: { loc: LocationInfo; services: ServiceDef[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.3), ease }}
      className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.03] transition-all duration-500"
    >
      <div className="flex items-center gap-2.5 mb-3">
        <MapPinIcon />
        <h3 className="text-lg font-semibold text-white">{loc.name}</h3>
      </div>
      <p className="text-xs text-white/30 leading-relaxed mb-1">{loc.state}</p>
      <p className="text-sm text-white/90 leading-relaxed mb-5 line-clamp-2">
        {loc.description}
      </p>

      <div className="space-y-1.5">
        <p className="text-[10px] text-white/20 tracking-[0.15em] uppercase font-medium mb-2">
          Available Services
        </p>
        <div className="flex flex-wrap gap-2">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              href={getServiceHref(svc.slug, loc.slug)}
              className="text-[11px] px-3 py-1.5 rounded-lg border border-white/[0.06] text-white/90 hover:text-[#ff4500] hover:border-[#ff4500]/30 hover:bg-[#ff4500]/5 transition-all duration-300"
            >
              {svc.name}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function CountryPageClient({
  countryName,
  countrySlug,
  stateGroups,
  cityCount,
  services,
}: CountryPageClientProps) {
  const stateEntries = Object.entries(stateGroups).sort((a, b) => a[0].localeCompare(b[0]));
  const stateCount = stateEntries.length;

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
              { label: countryName, href: `/locations/${countrySlug}` },
            ]}
          />
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[#ff4500]/[0.04] blur-[150px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
            className="text-[11px] text-white/90 tracking-[0.25em] uppercase mb-6"
          >
            {countryName}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6"
          >
            Digital Marketing in{" "}
            <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              {countryName}
            </span>
            <span className="text-[#ff4500]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-sm md:text-base text-white/30 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            We deliver tailored digital marketing strategies across {cityCount} cities
            in {countryName}. From SEO and Google Ads to branding and social media,
            our services are built for local markets that demand real results.
          </motion.p>

          {/* ── Stats ──────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="flex items-center justify-center gap-8 md:gap-12 mb-10"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-[#ff4500]">{cityCount}</div>
              <div className="text-[10px] text-white/30 tracking-wider uppercase mt-1">Cities</div>
            </div>
            <div className="w-[1px] h-10 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-[#ff4500]">{stateCount}</div>
              <div className="text-[10px] text-white/30 tracking-wider uppercase mt-1">Regions</div>
            </div>
            <div className="w-[1px] h-10 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-[#ff4500]">{services.length}</div>
              <div className="text-[10px] text-white/30 tracking-wider uppercase mt-1">Services</div>
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

      {/* ── Cities by State/Region ──────────────────────────────────────────── */}
      {stateEntries.map(([state, cities]) => (
        <section
          key={state}
          className="relative w-full px-6 py-12 md:py-16 lg:px-12 even:bg-[#080808]"
        >
          <div className="relative mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-4 mb-8"
            >
              <h2 className="text-xl md:text-2xl font-medium text-white whitespace-nowrap">
                {state}
              </h2>
              <div className="flex-1 h-[1px] bg-white/[0.06]" />
              <span className="text-xs text-white/20 font-mono">
                {String(cities.length).padStart(2, "0")}{" "}
                {cities.length === 1 ? "city" : "cities"}
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cities.map((loc, i) => (
                <CityServiceCard key={loc.slug} loc={loc} services={services} index={i} />
              ))}
            </div>
          </div>
        </section>
      ))}

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
            Ready to grow your business in {countryName}
            <span className="text-[#ff4500]">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-sm md:text-base text-white/90 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Our team builds digital marketing strategies that are tailored to your local
            market. From search engine optimization to paid advertising, we know what
            works in {countryName} and we deliver measurable results.
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
              className="px-8 py-4 rounded-full border border-white/10 text-white/90 font-semibold text-sm hover:bg-white/5 transition-colors"
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
