"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import type { BlogArticle } from "@/data/blogArticles";
import { servicePages } from "@/data/servicePages";
import { blogRelatedServices } from "@/lib/internalLinks";

const ease = [0.23, 1, 0.32, 1] as const;

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const h = () => {
      const s = window.scrollY;
      const d = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(d > 0 ? (s / d) * 100 : 0);
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px]">
      <div
        className="h-full bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500] shadow-[0_0_12px_rgba(255,69,0,0.5)]"
        style={{ width: `${progress}%`, transition: "width 0.1s" }}
      />
    </div>
  );
}

function FloatingTOC({ items }: { items: string[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    document.querySelectorAll("h2[id], h3[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <nav className="hidden xl:block sticky top-32 max-h-[70vh] overflow-y-auto pr-4">
      <p className="text-[9px] tracking-[0.2em] uppercase text-white/25 font-semibold mb-4">
        On This Page
      </p>
      <div className="space-y-1">
        {items.map((item) => {
          const id = item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`block text-[11px] leading-relaxed py-1 pl-3 border-l-2 transition-all duration-300 ${
                isActive
                  ? "border-[#ff4500] text-white/90 font-medium"
                  : "border-white/[0.06] text-white/25 hover:text-white/50 hover:border-white/20"
              }`}
            >
              {item.length > 40 ? item.slice(0, 40) + "..." : item}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default function BlogArticleClient({
  article,
  slug,
}: {
  article: BlogArticle;
  slug: string;
}) {
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const contentRef = useRef<HTMLDivElement>(null);
  const [tocItems, setTocItems] = useState<string[]>([]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // Add IDs to headings and extract TOC
  useEffect(() => {
    if (!contentRef.current) return;
    const headings = contentRef.current.querySelectorAll("h2, h3");
    const items: string[] = [];
    headings.forEach((h) => {
      const text = h.textContent || "";
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
      h.id = id;
      if (h.tagName === "H2") items.push(text);
    });
    setTocItems(items);
  }, []);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <ReadingProgress />
      <InnerNavbar />

      {/* Hero — Full bleed cinematic header */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#0f0505]" />

        {/* Big accent number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute top-10 -right-10 md:right-10 text-[20rem] md:text-[30rem] font-bold text-white leading-none select-none pointer-events-none"
        >
          10
        </motion.div>

        {/* Ambient glows */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#ff4500]/[0.06] rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ff4500]/[0.04] rounded-full blur-[150px] pointer-events-none" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,69,0,0.1) 0%, transparent 70%)" }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 md:pb-20"
        >
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: article.category, href: "/blog" },
            ]}
          />

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap items-center gap-3 mt-8 mb-8"
          >
            <span className="text-[10px] tracking-wider uppercase bg-[#ff4500] rounded-full px-4 py-1.5 text-white font-bold shadow-[0_0_25px_rgba(255,69,0,0.4)]">
              {article.category}
            </span>
            <span className="text-[10px] tracking-wider uppercase text-white/30 font-medium flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
              {article.readTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <span className="text-[10px] tracking-wider uppercase text-white/30 font-medium">
              {new Date(article.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-white mb-8 max-w-4xl"
            dangerouslySetInnerHTML={{
              __html: article.title.replace(
                /in\s+([A-Z][a-zA-Z\s]+?)(?=\s*\()/,
                `in <span class="bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent italic">$1</span>`
              ),
            }}
          />

          {/* Excerpt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-base md:text-lg text-white/40 leading-relaxed max-w-2xl mb-10"
          >
            {article.metaDescription}
          </motion.p>

          {/* Author + share */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff4500] to-[#ff6b35] flex items-center justify-center text-white text-sm font-bold shadow-[0_0_20px_rgba(255,69,0,0.3)]">
                TML
              </div>
              <div>
                <p className="text-sm font-semibold text-white/90">TML Agency</p>
                <p className="text-[11px] text-white/30">India&apos;s #1 Branding Agency</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              {[
                { href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=https://townmedialabs.com/blog/${slug}`, icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
                { href: `https://www.linkedin.com/sharing/share-offsite/?url=https://townmedialabs.com/blog/${slug}`, icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                { href: `https://wa.me/?text=${encodeURIComponent(article.title + " https://townmedialabs.com/blog/" + slug)}`, icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-[#ff4500] hover:border-[#ff4500]/30 hover:bg-[#ff4500]/5 transition-all duration-300">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">{s.icon}</svg>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom gradient separator */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-[5]" />
      </section>

      {/* Article Content — with TOC sidebar */}
      <section className="px-6 lg:px-12 pb-20 md:pb-32 -mt-8">
        <div className="max-w-7xl mx-auto flex gap-12">
          {/* TOC sidebar */}
          <div className="hidden xl:block w-56 shrink-0">
            <FloatingTOC items={tocItems} />
          </div>

          {/* Main content */}
          <div className="flex-1 max-w-4xl">
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <div
                className="
                  blog-content prose prose-invert prose-lg max-w-none

                  [&_h2]:relative [&_h2]:text-2xl [&_h2]:md:text-[1.75rem] [&_h2]:font-semibold [&_h2]:tracking-tight
                  [&_h2]:text-white [&_h2]:mt-20 [&_h2]:mb-8
                  [&_h2]:pl-6 [&_h2]:border-l-[3px] [&_h2]:border-[#ff4500]
                  [&_h2]:bg-gradient-to-r [&_h2]:from-white/[0.03] [&_h2]:to-transparent
                  [&_h2]:py-4 [&_h2]:rounded-r-xl

                  [&_h3]:text-lg [&_h3]:md:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight
                  [&_h3]:text-white [&_h3]:mt-12 [&_h3]:mb-5
                  [&_h3]:flex [&_h3]:items-center [&_h3]:gap-3

                  [&_p]:text-[15px] [&_p]:md:text-base [&_p]:text-white/90 [&_p]:leading-[1.85] [&_p]:mb-5

                  [&_li]:text-[15px] [&_li]:md:text-base [&_li]:text-white/90 [&_li]:leading-[1.8]
                  [&_ul]:space-y-2.5 [&_ul]:my-6
                  [&_ul]:pl-5

                  [&_strong]:text-white/90 [&_strong]:font-semibold

                  [&_a]:text-[#ff4500] [&_a]:no-underline [&_a]:font-medium
                  [&_a]:border-b [&_a]:border-[#ff4500]/30
                  [&_a:hover]:border-[#ff4500] [&_a:hover]:text-[#ff6b35]
                  [&_a]:transition-colors

                  [&_table]:w-full [&_table]:my-8
                  [&_table]:border [&_table]:border-white/[0.06] [&_table]:rounded-2xl [&_table]:overflow-hidden
                  [&_table]:bg-white/[0.02]
                  [&_thead]:bg-[#ff4500]/[0.08]
                  [&_th]:px-5 [&_th]:py-4 [&_th]:text-left [&_th]:text-xs [&_th]:font-bold
                  [&_th]:text-[#ff4500]/90 [&_th]:uppercase [&_th]:tracking-wider
                  [&_th]:border-b [&_th]:border-white/[0.06]
                  [&_td]:px-5 [&_td]:py-4 [&_td]:text-sm [&_td]:text-white/90
                  [&_td]:border-b [&_td]:border-white/[0.04]
                  [&_tr:last-child_td]:border-b-0
                  [&_tr]:transition-colors [&_tr:hover]:bg-white/[0.02]
                  [&_td:first-child]:text-white/70 [&_td:first-child]:font-medium

                  [&_hr]:border-0 [&_hr]:h-px [&_hr]:my-16
                  [&_hr]:bg-gradient-to-r [&_hr]:from-transparent [&_hr]:via-[#ff4500]/20 [&_hr]:to-transparent

                  [&_blockquote]:border-l-[3px] [&_blockquote]:border-[#ff4500]
                  [&_blockquote]:bg-gradient-to-r [&_blockquote]:from-[#ff4500]/[0.06] [&_blockquote]:to-transparent
                  [&_blockquote]:rounded-r-2xl
                  [&_blockquote]:px-6 [&_blockquote]:md:px-8 [&_blockquote]:py-6
                  [&_blockquote]:my-10 [&_blockquote]:not-italic
                  [&_blockquote]:shadow-[inset_0_0_40px_rgba(255,69,0,0.03)]
                  [&_blockquote_p]:text-white/70 [&_blockquote_p]:text-base [&_blockquote_p]:md:text-lg
                  [&_blockquote_p]:font-medium [&_blockquote_p]:leading-relaxed [&_blockquote_p]:mb-0 [&_blockquote_p]:italic

                  [&_em]:text-white/60

                  [&_img]:rounded-2xl [&_img]:border [&_img]:border-white/[0.06]
                "
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tags + Share bottom bar */}
      <section className="px-6 lg:px-12 pb-12">
        <div className="max-w-4xl mx-auto xl:ml-[calc(14rem+3rem)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8 border-t border-b border-white/[0.06]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] text-white/25 uppercase tracking-widest font-semibold mr-1">Tags</span>
              {article.keywords.slice(0, 5).map((kw) => (
                <span key={kw} className="text-[10px] tracking-wider bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 text-white/35 font-medium hover:border-[#ff4500]/20 hover:text-white/50 transition-colors cursor-default">
                  {kw}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-white/25 uppercase tracking-widest font-semibold mr-1">Share</span>
              {[
                { href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=https://townmedialabs.com/blog/${slug}`, label: "X" },
                { href: `https://www.linkedin.com/sharing/share-offsite/?url=https://townmedialabs.com/blog/${slug}`, label: "in" },
                { href: `https://wa.me/?text=${encodeURIComponent(article.title + " https://townmedialabs.com/blog/" + slug)}`, label: "wa" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[10px] font-bold text-white/30 hover:text-[#ff4500] hover:border-[#ff4500]/30 transition-all">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {(() => {
        const serviceSlugs = blogRelatedServices[slug] || [];
        const relatedServiceData = serviceSlugs
          .map((s) => servicePages[s])
          .filter(Boolean);
        if (relatedServiceData.length === 0) return null;
        return (
          <section className="px-6 lg:px-12 py-16 md:py-24">
            <div className="max-w-5xl mx-auto">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="text-[10px] md:text-xs text-white/40 tracking-[0.25em] uppercase mb-4"
              >
                Explore Our Services
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="text-2xl sm:text-3xl font-medium text-white mb-10"
              >
                Related Services
                <span className="text-[#ff4500]">.</span>
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {relatedServiceData.map((service, i) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="group block p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff4500]/20 transition-all duration-500 h-full"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#ff4500] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed mb-4 line-clamp-2">
                        {service.tagline}
                      </p>
                      <span className="text-xs text-[#ff4500] font-medium tracking-wide group-hover:underline">
                        Learn More &rarr;
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* CTA — Premium card */}
      <section className="px-6 lg:px-12 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative overflow-hidden rounded-[2rem] border border-[#ff4500]/20"
          >
            {/* BG layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff4500]/12 via-[#0a0505] to-[#050505]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff4500]/[0.08] rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff4500]/[0.05] rounded-full blur-[120px] pointer-events-none" />
            <div
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 p-10 md:p-20 text-center">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#ff4500] to-[#ff6b35] flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(255,69,0,0.4)]"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" /><path d="M10 22h4" />
                </svg>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-5">
                Ready to build your{" "}
                <span className="bg-gradient-to-r from-[#ff4500] to-[#ff6b35] bg-clip-text text-transparent italic">brand?</span>
              </h2>
              <p className="text-sm md:text-base text-white/45 max-w-lg mx-auto mb-10 leading-relaxed">
                Get a free consultation with our branding experts. Let&apos;s create something people remember.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#ff4500] text-white px-10 py-4 rounded-2xl text-sm font-semibold hover:bg-[#ff5500] transition-colors shadow-[0_0_40px_rgba(255,69,0,0.35)]">
                  Get Free Consultation
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <a href="tel:+919872648209"
                  className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] text-white/60 px-10 py-4 rounded-2xl text-sm font-semibold hover:bg-white/[0.06] hover:text-white transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +91 98726 48209
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
