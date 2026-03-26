"use client";

import { motion } from "motion/react";

const ease = [0.23, 1, 0.32, 1] as const;

/* ── Tier data ── */
interface Tier {
  name: string;
  teamSize: string;
  points: string[];
  popular?: boolean;
  icon: string;
}

const tiers: Tier[] = [
  {
    name: "Startup!",
    teamSize: "10-50",
    icon: "🚀",
    points: [
      "Limited brand awareness & market penetration",
      "Setting up realistic goals with TML",
      "Budget & resource constraints",
      "Making the product market fit",
      "Boosting customer value & retention",
    ],
  },
  {
    name: "Enterprise!",
    teamSize: "200 & Hiring",
    icon: "🏢",
    popular: true,
    points: [
      "Maximising ROAS with TML Creative Agency",
      "Market Saturation and Diminishing Growth",
      "Innovation Stagnation and Competitive Edge",
      "Safeguarding Brand Reputation and Trust",
    ],
  },
  {
    name: "Growing Business!",
    teamSize: "50-200",
    icon: "📈",
    points: [
      "Competing against already setup brands",
      "Facing scalability challenges",
      "Expanding with new markets/modules",
      "Maximising customer lifetime value",
      "Omni Channel customer experience",
    ],
  },
];

/* ── Phone icon SVG ── */
function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/* ── Team icon SVG ── */
function TeamIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/* ── Checkmark icon SVG ── */
function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ── Tier card component ── */
function TierCard({ tier, index }: { tier: Tier; index: number }) {
  const firstLetter = tier.name.charAt(0);
  const restOfName = tier.name.slice(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: 0.15 + index * 0.12,
        ease,
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.35, ease },
      }}
      className={`group relative rounded-xl p-6 md:p-7 backdrop-blur-sm transition-all duration-500
        ${
          tier.popular
            ? "bg-[#ff4500]/[0.04] border-2 border-[#ff4500]/30 shadow-[0_0_50px_rgba(255,69,0,0.08)] hover:shadow-[0_0_60px_rgba(255,69,0,0.15)]"
            : "bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#ff4500]/20 hover:shadow-[0_0_40px_rgba(255,69,0,0.06)]"
        }`}
    >
      {/* Most Popular badge */}
      {tier.popular && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="absolute -top-3 left-6 px-4 py-1 rounded-full bg-[#ff4500] text-white text-[10px] font-bold tracking-widest uppercase shadow-[0_4px_20px_rgba(255,69,0,0.4)]"
        >
          Most Popular
        </motion.div>
      )}

      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{tier.icon}</span>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
          <span className="text-3xl md:text-4xl font-bold text-[#ff4500]">
            {firstLetter}
          </span>
          <span className="text-white/90">{restOfName}</span>
        </h3>
      </div>

      {/* Team size */}
      <div className="flex items-center gap-2 text-white/90 text-sm mb-5">
        <TeamIcon />
        <span>Team Size: {tier.teamSize}</span>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease }}
        className={`h-px w-full mb-5 origin-left ${
          tier.popular
            ? "bg-gradient-to-r from-[#ff4500]/40 to-transparent"
            : "bg-white/[0.06]"
        }`}
      />

      {/* Bullet points */}
      <ul className="space-y-3">
        {tier.points.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + index * 0.1 + i * 0.06,
              ease,
            }}
            className="flex items-start gap-3 text-sm text-white/90 leading-relaxed"
          >
            <span className="text-[#ff4500] mt-0.5">
              <CheckIcon />
            </span>
            {point}
          </motion.li>
        ))}
      </ul>

      {/* Get Started CTA */}
      <motion.a
        href="#contact"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className={`mt-6 flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors ${
          tier.popular
            ? "text-[#ff4500] hover:text-[#ff6a33]"
            : "text-white/90 hover:text-white/90"
        }`}
      >
        <span>Get Started</span>
        <span>&rarr;</span>
      </motion.a>
    </motion.div>
  );
}

/* ── Main Section ── */
export function CampaignPlans() {
  return (
    <section className="relative w-full px-6 py-16 md:py-24 lg:py-28 lg:px-12 bg-[#0a0a0a] overflow-hidden">
      {/* Background orb */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,69,0,0.05) 0%, rgba(255,69,0,0.02) 40%, transparent 70%)",
          }}
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* 2x2 Grid: heading top-left, cards fill rest */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* ── Top-left: Heading area ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="flex flex-col justify-center lg:pr-8"
          >
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease }}
              className="text-[10px] md:text-xs text-white/90 tracking-[0.2em] uppercase font-semibold mb-6"
            >
              Tailored strategies
            </motion.p>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-medium leading-[1.08] tracking-tight text-white mb-6"
            >
              Not the Same Plan for Every{" "}
              <span className="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent italic">Campaign.</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="text-base md:text-lg text-white/90 mb-8 max-w-md"
            >
              Let us write a{" "}
              <span className="font-semibold text-[#ff4500]">custom plan</span>{" "}
              for you
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              whileHover={{
                y: -2,
                transition: { duration: 0.3, ease },
              }}
              className="inline-flex items-center gap-3 self-start px-6 py-3.5 rounded-xl
                bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm
                text-white/90 text-sm font-medium tracking-wide
                hover:bg-white/[0.06] hover:border-[#ff4500]/30 hover:text-white
                hover:shadow-[0_0_30px_rgba(255,69,0,0.1)]
                transition-all duration-500"
            >
              <span className="text-[#ff4500]">
                <PhoneIcon />
              </span>
              Talk to Industry Expert
              <span className="text-white/90 group-hover:text-white/90 transition-colors">
                &rarr;
              </span>
            </motion.a>
          </motion.div>

          {/* ── Top-right: Startup card ── */}
          <TierCard tier={tiers[0]} index={0} />

          {/* ── Bottom-left: Enterprise card ── */}
          <TierCard tier={tiers[1]} index={1} />

          {/* ── Bottom-right: Growing Business card ── */}
          <TierCard tier={tiers[2]} index={2} />
        </div>
      </div>
    </section>
  );
}
