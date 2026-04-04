import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_francisco"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in San Francisco | TML Agency",
  description: "TML offers expert ai influencer management services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management san francisco", "ai influencer management agency san francisco", "ai influencer management company san francisco"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-san-francisco",
  },
  openGraph: {
    title: "AI Influencer Management Agency in San Francisco | TML Agency",
    description: "TML offers expert ai influencer management services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-san-francisco",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in San Francisco | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in San Francisco | TML Agency",
    description: "TML offers expert ai influencer management services in San Francisco. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSanFranciscoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
