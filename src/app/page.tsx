import { Metadata } from "next";
import NavbarHome2 from "@/components/layout/NavbarHome2";
import HeroHome2 from "@/components/sections/HeroHome2";
import { ClientLogos } from "@/components/sections/ClientLogos";
import BelowFoldSections from "@/components/sections/BelowFoldSections";

export const metadata: Metadata = {
  title: "TML Agency | Digital Marketing & Branding Agency Chandigarh | SEO, Branding & Ads",
  description:
    "TML Agency is Chandigarh's top digital marketing agency. SEO, Google Ads, branding, web development & social media marketing. 500+ brands scaled. Get a free audit.",
  keywords: [
    "digital marketing agency Chandigarh",
    "SEO agency Chandigarh",
    "Google Ads agency",
    "branding agency Chandigarh",
    "web development Chandigarh",
    "social media marketing",
    "performance marketing agency",
    "lead generation agency",
    "Meta Ads agency",
    "content writing services",
    "link building services",
    "technical SEO",
    "GMB listing optimization",
    "best digital marketing company Chandigarh",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TML Agency | Digital Marketing & Branding Agency Chandigarh",
    description:
      "Chandigarh's top digital marketing agency. SEO, Google Ads, branding, web development & social media marketing. 500+ brands scaled.",
    url: "https://townmedialabs.ca",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TML Agency - Digital Marketing & Branding Agency Chandigarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "TML Agency | Digital Marketing & Branding Agency Chandigarh",
    description:
      "Chandigarh's top digital marketing agency. SEO, Google Ads, branding, web development & social media marketing. 500+ brands scaled.",
    images: ["/og-image.png"],
  },
};

const videoObjectJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "TML Agency Showreel 2025",
  description:
    "A showcase of TML Agency's best digital marketing, branding, and creative work from 2025.",
  thumbnailUrl: "https://townmedialabs.ca/og-image.png",
  contentUrl: "https://townmedialabs.ca/portfolio/tml-portfolio-showreel-2025.mp4",
  uploadDate: "2025-01-01",
  publisher: {
    "@type": "Organization",
    name: "TML Agency",
    url: "https://townmedialabs.ca",
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
