import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InnerNavbar from "@/components/layout/InnerNavbar";
import { FooterHome2 } from "@/components/sections/FooterHome2";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { authors, getAuthorById } from "@/data/authors";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const author = getAuthorById(id);
  if (!author) return {};

  const siteUrl = "https://townmedialabs.com";

  return {
    title: `${author.name} | Author at TML Agency`,
    description: author.bio,
    alternates: { canonical: `/authors/${id}` },
    openGraph: {
      title: author.name,
      description: author.bio,
      url: `${siteUrl}/authors/${id}`,
      siteName: "TML Agency",
      type: "profile",
      locale: "en_IN",
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(authors).map((id) => ({ id }));
}

export default async function AuthorPage({ params }: Props) {
  const { id } = await params;
  const author = getAuthorById(id);

  if (!author) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <InnerNavbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#050505] to-[#0f0505]" />

        {/* Ambient glows */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#ff4500]/[0.06] rounded-full blur-[200px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#ff4500]/[0.04] rounded-full blur-[150px] pointer-events-none" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Authors", href: "/authors" },
              { label: author.name, href: `/authors/${id}` },
            ]}
          />

          <div className="mt-12">
            {/* Author Info */}
            <div className="max-w-2xl">
              {author.image && (
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-24 h-24 rounded-2xl object-cover mb-6 border border-white/10"
                />
              )}

              <h1 className="text-5xl md:text-6xl font-medium leading-tight mb-4">
                {author.name}
              </h1>

              <p className="text-xl text-[#ff4500] font-semibold mb-4">
                {author.title}
              </p>

              <p className="text-base text-white/80 leading-relaxed mb-8 max-w-xl">
                {author.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white hover:bg-[#ff4500]/10 hover:border-[#ff4500]/30 transition-all duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}

                {author.twitter && (
                  <a
                    href={author.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white hover:bg-[#ff4500]/10 hover:border-[#ff4500]/30 transition-all duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">About {author.name}</h2>

          {/* Expertise */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {author.expertise.map((exp) => (
                <span
                  key={exp}
                  className="px-4 py-2 rounded-full bg-[#ff4500]/[0.1] border border-[#ff4500]/30 text-white text-sm font-medium"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Professional Background</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              {author.name} brings {author.yearsOfExperience}+ years of experience
              in {author.expertise.slice(0, 2).join(" and ")}.
            </p>
            <p className="text-white/80 leading-relaxed">
              {author.bio}
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#ff4500]/[0.1] to-transparent border border-[#ff4500]/20">
            <h3 className="text-2xl font-semibold mb-3">Work with {author.name}</h3>
            <p className="text-white/80 mb-6">
              Interested in working with {author.name} on your project? Get in touch with
              TML Agency to discuss your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-[#ff4500] text-white font-semibold hover:bg-[#ff6b35] transition-all duration-300 shadow-[0_0_25px_rgba(255,69,0,0.3)]"
            >
              Get a Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <FooterHome2 />
    </main>
  );
}
