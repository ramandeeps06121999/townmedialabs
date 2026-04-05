import { Metadata } from "next";
import NavbarHome2 from "@/components/layout/NavbarHome2";
import HeroHome2 from "@/components/sections/HeroHome2";
import { ClientLogos } from "@/components/sections/ClientLogos";
import BelowFoldSections from "@/components/sections/BelowFoldSections";

export const metadata: Metadata = {
  title: "TML Agency | Global Digital Marketing & Branding Agency",
  description:
    "TML Agency is a global digital marketing agency serving 500+ brands across India, USA, UK, Canada, Australia & UAE. SEO, Google Ads, branding & web development.",
  keywords: [
    "digital marketing agency",
    "global branding agency",
    "SEO agency",
    "Google Ads agency",
    "branding agency",
    "web development company",
    "social media marketing agency",
    "performance marketing agency",
    "lead generation agency",
    "digital marketing agency India",
    "digital marketing agency USA",
    "digital marketing agency UK",
    "best digital marketing company",
    "full service marketing agency",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TML Agency | Global Digital Marketing & Branding Agency",
    description:
      "Global digital marketing agency serving 500+ brands across India, USA, UK, Canada, Australia & UAE. SEO, Google Ads, branding & web development.",
    url: "https://townmedialabs.com",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TML Agency - Global Digital Marketing & Branding Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "TML Agency | Global Digital Marketing & Branding Agency",
    description:
      "Global digital marketing agency serving 500+ brands across India, USA, UK, Canada, Australia & UAE. SEO, Google Ads, branding & web development.",
    images: ["/og-image.png"],
  },
};

const videoObjectJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "TML Agency Showreel 2025",
  description:
    "A showcase of TML Agency's best digital marketing, branding, and creative work from 2025.",
  thumbnailUrl: "https://townmedialabs.com/og-image.png",
  contentUrl: "https://townmedialabs.com/portfolio/tml-portfolio-showreel-2025.mp4",
  uploadDate: "2025-01-01",
  publisher: {
    "@type": "Organization",
    name: "TML Agency",
    url: "https://townmedialabs.com",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoObjectJsonLd),
        }}
      />
      <NavbarHome2 />
      <HeroHome2 />
      <ClientLogos />
      <BelowFoldSections />
    </main>
  );
}
