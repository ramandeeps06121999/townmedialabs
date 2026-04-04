import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunderland"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Sunderland | TML Agency",
  description: "TML offers expert ai influencer management services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management sunderland", "ai influencer management agency sunderland", "ai influencer management company sunderland"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-sunderland",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Sunderland | TML Agency",
    description: "TML offers expert ai influencer management services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-sunderland",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Sunderland | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Sunderland | TML Agency",
    description: "TML offers expert ai influencer management services in Sunderland. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInSunderlandPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
