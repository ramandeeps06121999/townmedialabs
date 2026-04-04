import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Minneapolis | TML Agency",
  description: "TML offers expert ai influencer management services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management minneapolis", "ai influencer management agency minneapolis", "ai influencer management company minneapolis"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-minneapolis",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Minneapolis | TML Agency",
    description: "TML offers expert ai influencer management services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-minneapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Minneapolis | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Minneapolis | TML Agency",
    description: "TML offers expert ai influencer management services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInMinneapolisPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
