import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Delhi | TML Agency",
  description: "TML offers expert ai influencer management services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management delhi", "ai influencer management agency delhi", "ai influencer management company delhi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-delhi",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Delhi | TML Agency",
    description: "TML offers expert ai influencer management services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Delhi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Delhi | TML Agency",
    description: "TML offers expert ai influencer management services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInDelhiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
