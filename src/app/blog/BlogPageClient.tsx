"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { blogPosts, blogCategories } from "@/data/blogPosts";

const ease = [0.23, 1, 0.32, 1] as const;

type SortOption = "newest" | "oldest";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const POSTS_PER_PAGE = 12;

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });

  const filteredPosts = useMemo(() => {
    let posts = activeCategory === "All"
      ? [...blogPosts]
      : blogPosts.filter((p) => p.category === activeCategory);

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sort
    posts.sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return sortBy === "newest" ? db - da : da - db;
    });

    return posts;
  }, [activeCategory, sortBy, searchQuery]);

  // Reset to page 1 when filters change
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };
  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };
  const handleSortChange = (val: SortOption) => {
    setSortBy(val);
    setCurrentPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIdx = (safeCurrentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Generate page numbers to display (show max 7 with ellipsis)
  const getPageNumbers = (): (number | "...")[] => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | "...")[] = [1];
    if (safeCurrentPage > 3) pages.push("...");
    const start = Math.max(2, safeCurrentPage - 1);
    const end = Math.min(totalPages - 1, safeCurrentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (safeCurrentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  const featuredPosts = blogPosts.filter((p) => p.featured);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <InnerNavbar />

      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 lg:px-12 overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#ff4500]/[0.03] rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
            ]}
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="text-[10px] md:text-xs text-white tracking-[0.2em] uppercase font-semibold mb-6 mt-8"
          >
            Insights & Ideas
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.05] tracking-tight text-white mb-6"
          >
            The TML{" "}
            <span className="italic bg-gradient-to-r from-[#ff4500] via-[#ff6b35] to-[#ff4500]/60 bg-clip-text text-transparent">
              Blog.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-base sm:text-lg md:text-xl text-white max-w-2xl leading-relaxed"
          >
            Marketing strategies, creative insights, and industry trends from
            the team that builds brands people remember.
          </motion.p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="px-6 lg:px-12 pb-16 md:pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/30 transition-all duration-500"
                  >
                    {/* Branded visual card */}
                    <div className="relative h-56 md:h-72 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff4500]/20 via-[#0a0505] to-[#050505]" />
                      {/* Grid pattern */}
                      <div
                        className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{
                          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                          backgroundSize: "40px 40px",
                        }}
                      />
                      {/* Ambient glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#ff4500]/[0.08] rounded-full blur-[100px] pointer-events-none" />
                      {/* City name watermark */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl font-bold text-white/[0.04] tracking-tight whitespace-nowrap select-none pointer-events-none">
                        {post.title.match(/in\s+([A-Z][a-zA-Z\s]+?)(?=\s*\()/)?.[1] || "Branding"}
                      </div>
                      {/* TML logo mark */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff4500] to-[#ff6b35] flex items-center justify-center text-white text-[10px] font-bold opacity-60">
                        TML
                      </div>
                      <div className="absolute bottom-4 left-5">
                        <span className="text-[10px] tracking-wider uppercase bg-[#ff4500] rounded-full px-3 py-1 text-white font-semibold shadow-[0_0_20px_rgba(255,69,0,0.4)]">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] tracking-wider uppercase text-[#ff4500]/80 font-medium">
                          {post.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-[10px] tracking-wider uppercase text-white font-medium">
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-[#ff4500] transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-sm text-white leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white">
                          {formatDate(post.date)}
                        </span>
                        <span className="text-xs font-semibold text-[#ff4500] group-hover:translate-x-1 transition-transform">
                          Read More →
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/[0.06]">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#ff4500] to-[#ff6b35] flex items-center justify-center text-white text-[8px] font-bold">
                          {post.authorName.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="text-[11px] text-white/70 font-medium">
                          {post.authorName}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search + Filter + Sort Bar */}
      <section className="px-6 lg:px-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="space-y-5"
          >
            {/* Search */}
            <div className="relative max-w-md">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                placeholder="Search blogs..."
                aria-label="Search blog articles"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-white outline-none focus:border-[#ff4500]/40 focus:bg-white/[0.05] transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-white hover:text-white hover:bg-white/20 transition-all"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Categories + Sort */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category filters */}
              <div className="flex flex-wrap gap-2 flex-1">
                {blogCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-[#ff4500] border-[#ff4500] text-white"
                        : "bg-white/[0.03] border-white/[0.08] text-white hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white uppercase tracking-widest font-semibold hidden sm:block">Sort</span>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value as SortOption)}
                  aria-label="Sort articles by"
                  className="bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-[#ff4500]/40 transition-all cursor-pointer appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='rgba(255,255,255,0.3)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center", paddingRight: "28px" }}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>

            {/* Results count */}
            <p className="text-[10px] text-white tracking-wider uppercase">
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section ref={gridRef} className="px-6 lg:px-12 py-8 md:py-12 scroll-mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.06, ease }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-[#ff4500]/25 transition-all duration-400 overflow-hidden"
                >
                  {/* Branded visual */}
                  <div className="relative h-44 overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, rgba(255,69,0,${0.08 + (i % 3) * 0.05}) 0%, rgba(5,5,5,1) 100%)`,
                      }}
                    />
                    {/* Grid pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.03] pointer-events-none"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />
                    {/* City name watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white/[0.04] tracking-tight whitespace-nowrap select-none pointer-events-none">
                      {post.title.match(/in\s+([A-Z][a-zA-Z\s]+?)(?=\s*\()/)?.[1] || "Branding"}
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] tracking-wider uppercase bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 text-white font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] text-white">
                        {formatDate(post.date)}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/15" />
                      <span className="text-[10px] text-white">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#ff4500] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-white leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/[0.06]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ff4500] to-[#ff6b35] flex items-center justify-center text-white text-[7px] font-bold">
                          {post.authorName.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="text-[10px] text-white/60 font-medium">
                          {post.authorName}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-[#ff4500]/70 group-hover:text-[#ff4500] transition-colors">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium mb-1">
                No articles found
              </p>
              <p className="text-white text-xs">
                Try a different search term or category
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav aria-label="Blog pagination" className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-white/[0.06]">
              {/* Previous */}
              <button
                onClick={() => goToPage(safeCurrentPage - 1)}
                disabled={safeCurrentPage <= 1}
                aria-label="Previous page"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border border-white/[0.08] bg-white/[0.03] text-white hover:border-[#ff4500]/40 hover:text-[#ff4500] transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Prev
              </button>

              {/* Page numbers */}
              <div className="flex items-center gap-1">
                {getPageNumbers().map((page, idx) =>
                  page === "..." ? (
                    <span key={`ellipsis-${idx}`} className="px-2 py-2 text-xs text-white/40 select-none">
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      aria-label={`Page ${page}`}
                      aria-current={page === safeCurrentPage ? "page" : undefined}
                      className={`min-w-[36px] h-9 rounded-xl text-xs font-semibold transition-all duration-300 ${
                        page === safeCurrentPage
                          ? "bg-[#ff4500] text-white shadow-[0_0_20px_rgba(255,69,0,0.3)]"
                          : "bg-white/[0.03] border border-white/[0.08] text-white hover:border-[#ff4500]/40 hover:text-[#ff4500]"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              {/* Next */}
              <button
                onClick={() => goToPage(safeCurrentPage + 1)}
                disabled={safeCurrentPage >= totalPages}
                aria-label="Next page"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border border-white/[0.08] bg-white/[0.03] text-white hover:border-[#ff4500]/40 hover:text-[#ff4500] transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
              >
                Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Stay ahead of the curve.
            </h2>
            <p className="relative text-sm md:text-base text-white max-w-lg mx-auto mb-8 leading-relaxed">
              Get the latest marketing insights, creative strategies, and agency
              updates delivered straight to your inbox.
            </p>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 bg-[#ff4500] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-[#ff5500] transition-colors"
            >
              Get In Touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
