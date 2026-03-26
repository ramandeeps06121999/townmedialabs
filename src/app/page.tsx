import { Metadata } from "next";
import NavbarHome2 from "@/components/layout/NavbarHome2";
import HeroHome2 from "@/components/sections/HeroHome2";
import { ClientLogos } from "@/components/sections/ClientLogos";
import BelowFoldSections from "@/components/sections/BelowFoldSections";

export const metadata: Metadata = {
  title: "TML Agency | #1 Digital Marketing Agency in Chandigarh | SEO, Branding & Ads",
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
    title: "TML Agency | #1 Digital Marketing Agency in Chandigarh",
    description:
      "Chandigarh's top digital marketing agency. SEO, Google Ads, branding, web development & social media marketing. 500+ brands scaled.",
    url: "https://townmedialabs.com",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TML Agency - #1 Digital Marketing Agency in Chandigarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "TML Agency | #1 Digital Marketing Agency in Chandigarh",
    description:
      "Chandigarh's top digital marketing agency. SEO, Google Ads, branding, web development & social media marketing. 500+ brands scaled.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <NavbarHome2 />
      <HeroHome2 />
      <ClientLogos />
      <BelowFoldSections />
    </main>
  );
}
