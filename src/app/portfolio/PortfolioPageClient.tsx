"use client";

import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";

const ease = [0.23, 1, 0.32, 1] as const;

const allProjects = [
  {
    title: "CB Builders",
    category: "Web Design",
    image: "/portfolio/cb-builders-web-design.webp",
    description: "A clean, responsive construction company website with lead generation forms and project galleries.",
  },
  {
    title: "Real Estate App",
    category: "UI/UX Design",
    image: "/portfolio/real-estate-app-uiux-design.webp",
    description: "Mobile-first real estate platform with property listings, virtual tours, and agent matching.",
  },
  {
    title: "BYT Trucking",
    category: "Web Design",
    image: "/portfolio/byt-trucking-web-design.webp",
    description: "Full-service trucking company website with quote calculator, fleet showcase, and route tracking.",
  },
  {
    title: "NFT Marketplace",
    category: "Web Design",
    image: "/portfolio/nft-marketplace-web-design.jpg",
    description: "A blockchain-powered marketplace for digital art collectors with wallet integration and auctions.",
  },
  {
    title: "Smart Home App",
    category: "UI/UX Design",
    image: "/portfolio/smart-home-app-uiux-design.webp",
    description: "IoT dashboard for controlling home devices, energy usage tracking, and automation scheduling.",
  },
  {
    title: "Win Asset Finance",
    category: "Web Design",
    image: "/portfolio/win-asset-finance-web-design.png",
    description: "Financial services website with loan calculators, application forms, and compliance-ready design.",
  },
  {
    title: "Custom Trucking & Baling",
    category: "Branding & Web",
    image: "/portfolio/custom-trucking-baling-branding.jpg",
    description: "Complete rebrand and website for an agricultural services company, from logo to launch.",
  },
  {
    title: "Zuri Beauty Academy",
    category: "Web Design",
    image: "/portfolio/zuri-beauty-academy-web-design.png",
    description: "Beauty school website with course catalog, online enrollment, and student portal.",
  },
  {
    title: "Virtual Healthcare",
    category: "Branding & Web",
    image: "/portfolio/virtual-healthcare-branding.webp",
    description: "Telemedicine platform brand identity and landing pages designed to build patient trust.",
  },
  {
    title: "Advertisement Marketing",
    category: "Web Design",
    image: "/portfolio/advertisement-marketing-web-design.png",
    description: "Performance marketing agency site with case study showcases and campaign result dashboards.",
  },
];

const categories = ["All", ...Array.from(new Set(allProjects.map((p) => p.category)))];

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof allProjects)[number];
  delay: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  useSpring(mouseX, { stiffness: 300, damping: 30 });
  useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 60px -12px rgba(255, 69, 0, 0.15)",
        transition: { duration: 0.4, ease },
      }}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-xl bg-[#111] cursor-pointer border border-white/[0.04] hover:border-[#ff4500]/20 transition-colors duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.category} project by TML Agency`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#ff4500]" />
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#ff4500] font-medium">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-white/90 leading-relaxed">{project.description}</p>
      </div>
    </motion.div>
  );
}

export default function PortfolioPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <InnerNavbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="text-[#ff4500] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Projects That Speak
            <br />
            <span className="text-white/90">for Themselves</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-white/90 text-lg max-w-2xl mx-auto"
          >
            From startups to established brands, we craft digital experiences that
            drive real business results. Here&apos;s a look at what we&apos;ve built.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#ff4500] border-[#ff4500] text-white"
                  : "bg-white/5 border-white/10 text-white/90 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={i * 0.08} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-white/90 py-20 text-lg">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Video Showreel */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Showreel</h2>
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
              poster="/tml-showreel-poster.jpg"
            >
              <source src="/tml-showreel.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#ff4500]/10 to-transparent border border-[#ff4500]/20 rounded-2xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            We&apos;d love to hear about it. Whether it&apos;s a brand refresh, a new website,
            or a full-scale digital campaign, let&apos;s make it happen.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-[#ff4500] text-white font-semibold hover:bg-[#ff5722] transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
