import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_jose"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in San Jose | TML Agency",
  description: "TML offers expert ai influencer management services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management san jose", "ai influencer management agency san jose", "ai influencer management company san jose"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-san-jose",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in San Jose | TML Agency",
    description: "TML offers expert ai influencer management services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-san-jose",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in San Jose | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in San Jose | TML Agency",
    description: "TML offers expert ai influencer management services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSanJosePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
