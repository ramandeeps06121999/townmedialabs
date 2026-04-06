import type { Metadata } from "next";
import ChandigarhPageClient from "./ChandigarhPageClient";
import { servicePages } from "@/data/servicePages";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Chandigarh",
  description:
    "TML is the leading digital marketing agency in Chandigarh offering branding, SEO, Google Ads, social media marketing, web development, and more. 500+ brands served, 15+ years of experience.",
  keywords: [
    "digital marketing agency chandigarh",
    "best digital marketing company chandigarh",
    "seo company chandigarh",
    "branding agency chandigarh",
    "social media marketing chandigarh",
    "google ads chandigarh",
    "web development chandigarh",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Chandigarh",
    description:
      "TML is the leading digital marketing agency in Chandigarh offering branding, SEO, Google Ads, social media marketing, web development, and more. 500+ brands served.",
    url: "https://townmedialabs.com/digital-marketing-agency-chandigarh",
    siteName: "TML Agency",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digital Marketing Agency in Chandigarh - TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Digital Marketing Agency in Chandigarh",
    description:
      "TML is the leading digital marketing agency in Chandigarh offering branding, SEO, Google Ads, social media marketing, web development, and more. 500+ brands served.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/digital-marketing-agency-chandigarh",
  },
};

const topServiceSlugs = [
  "branding", "seo", "google-ads", "website-development",
  "social-media", "lead-generation", "graphic-design", "video-editing",
];

export default function ChandigarhPage() {
  const serviceMap: Record<string, { slug: string; title: string; description: string }> = {};
  for (const slug of topServiceSlugs) {
    const s = servicePages[slug];
    if (s) {
      serviceMap[slug] = { slug: s.slug, title: s.title, description: s.description };
    }
  }

  return <ChandigarhPageClient serviceMap={serviceMap} />;
}
