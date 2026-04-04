"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

const ease = [0.23, 1, 0.32, 1] as const;

/* ── Job Positions ── */

interface Position {
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  icon: React.ReactNode;
}

const positions: Position[] = [
  {
    title: "AI Developer",
    department: "Technology",
    type: "Full-time",
    location: "Chandigarh / Remote",
    description:
      "Build AI-powered marketing tools, chatbots, and automation pipelines. Work with LLMs, computer vision, and generative AI to push boundaries for our clients.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M16 14H8a4 4 0 0 0-4 4v2h16v-2a4 4 0 0 0-4-4z" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "AI Prompt Engineer",
    department: "Technology",
    type: "Full-time",
    location: "Chandigarh / Remote",
    description:
      "Craft and optimise prompts for AI content generation, image creation, and marketing automation. Turn AI into a creative powerhouse for brands.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8M8 14h4" />
      </svg>
    ),
  },
  {
    title: "Video Editor",
    department: "Creative",
    type: "Full-time",
    location: "Chandigarh",
    description:
      "Edit ad films, reels, YouTube content, and brand stories. You'll work on 500+ ad shoots a year — fast turnarounds, cinematic quality.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
  {
    title: "Graphic Designer",
    department: "Creative",
    type: "Full-time",
    location: "Chandigarh",
    description:
      "Design scroll-stopping creatives for social media, branding collaterals, packaging, and ad campaigns. Bring bold ideas to life across print and digital.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: "Product & Web UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Chandigarh / Remote",
    description:
      "Design intuitive web experiences, landing pages, and SaaS interfaces. You own the user journey from wireframe to pixel-perfect handoff.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Social Media Handler",
    department: "Marketing",
    type: "Full-time",
    location: "Chandigarh",
    description:
      "Manage brand accounts across Instagram, LinkedIn, Facebook & X. Plan content calendars, engage communities, and grow audiences organically.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    title: "Promotion Handler",
    department: "Marketing",
    type: "Full-time",
    location: "Chandigarh",
    description:
      "Run paid ad campaigns across Google, Meta, and programmatic platforms. Optimise budgets, A/B test creatives, and drive measurable ROI for clients.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Senior Project Manager",
    department: "Operations",
    type: "Full-time",
    location: "Chandigarh",
    description:
      "Lead cross-functional teams, manage client timelines, and deliver projects on time and above expectations. 3+ years of agency experience required.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Senior Client Relationship Manager",
    department: "Operations",
    type: "Full-time",
    location: "Chandigarh",
    description:
      "Own key client accounts end-to-end. Build trust, upsell services, and ensure every brand we work with feels like a partner — not just a client.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const perks = [
  { label: "Flexible Hours", description: "Work when you're most productive" },
  { label: "Health Insurance", description: "Comprehensive medical coverage" },
  { label: "Learning Budget", description: "Upskill with courses & certifications" },
  { label: "Team Outings", description: "Quarterly team events & retreats" },
  { label: "Fast Growth", description: "Clear promotion paths & mentorship" },
  { label: "Creative Freedom", description: "Your ideas matter from day one" },
];

export default function CareersPageClient() {
  const heroRef = useRef<HTMLElement>(null);
  const positionsRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const positionsInView = useInView(positionsRef, { once: true, amount: 0.05 });

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <InnerNavbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 lg:px-12 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#ff4500]/[0.04] rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Careers", href: "/careers" },
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.2em] uppercase font-semibold mb-6 mt-8"
          >
            We&apos;re hiring
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-white mb-6"
          >
            Build the future of{" "}
            <span className="italic bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              marketing.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-base sm:text-lg md:text-xl text-white max-w-2xl leading-relaxed mb-10"
          >
            Join a team of 70+ creatives, strategists, and engineers shaping how
            brands grow. If you love fast-paced work and bold ideas — you&apos;ll
            fit right in.
          </motion.p>

          <motion.a
            href="#positions"
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="inline-flex items-center gap-2 bg-[#ff4500] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-[#ff5500] transition-colors"
          >
            View Open Positions
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </motion.a>
        </div>
      </section>

      {/* Perks */}
      <section className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.2em] uppercase font-semibold mb-4"
          >
            Why TML Agency
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-8"
          >
            Perks of Working With Us<span className="text-[#ff4500]">.</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 md:p-6 hover:border-[#ff4500]/20 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#ff4500] mb-4" />
                <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                  {perk.label}
                </h3>
                <p className="text-xs md:text-sm text-white leading-relaxed">
                  {perk.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        id="positions"
        ref={positionsRef}
        className="px-6 lg:px-12 py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.2em] uppercase font-semibold mb-4"
          >
            Open Positions
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight text-white mb-12"
          >
            Find your role.
          </motion.h2>

          <div className="space-y-4">
            {positions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
                className="group bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:border-[#ff4500]/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#ff4500]/10 text-[#ff4500] shrink-0 group-hover:bg-[#ff4500]/20 transition-colors">
                    {pos.icon}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#ff4500] transition-colors">
                        {pos.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] tracking-wider uppercase bg-white/[0.05] border border-white/[0.08] rounded-full px-3 py-1 text-white font-medium">
                          {pos.department}
                        </span>
                        <span className="text-[10px] tracking-wider uppercase bg-[#ff4500]/10 border border-[#ff4500]/20 rounded-full px-3 py-1 text-[#ff4500]/80 font-medium">
                          {pos.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-white mb-3">
                      {pos.location}
                    </p>
                    <p className="text-sm text-white leading-relaxed">
                      {pos.description}
                    </p>
                  </div>

                  {/* Apply CTA */}
                  <a
                    href={`mailto:info@townmedialabs.ca?subject=Application for ${encodeURIComponent(pos.title)}&body=Hi TML Agency,%0D%0A%0D%0AI am interested in the ${encodeURIComponent(pos.title)} position.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ARegards`}
                    className="shrink-0 inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-xl px-6 py-3 text-sm font-semibold text-white hover:bg-[#ff4500] hover:text-white hover:border-[#ff4500] transition-all duration-300 self-start md:self-center"
                  >
                    Apply
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ff4500]/10 via-[#ff4500]/5 to-transparent border border-[#ff4500]/20 p-10 md:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#ff4500]/[0.05] rounded-full blur-[120px] pointer-events-none" />
            <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
              Don&apos;t see your role?
            </h2>
            <p className="relative text-sm md:text-base text-white max-w-lg mx-auto mb-8 leading-relaxed">
              We&apos;re always looking for talented people. Drop us your resume
              and we&apos;ll reach out when the right opportunity comes up.
            </p>
            <a
              href="mailto:info@townmedialabs.ca?subject=Job Application - General&body=Hi TML Agency,%0D%0A%0D%0AI'd like to apply for a role at your agency.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ARegards"
              className="relative inline-flex items-center gap-2 bg-[#ff4500] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-[#ff5500] transition-colors"
            >
              Send Your Resume
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
