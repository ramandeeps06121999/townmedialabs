import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["seattle"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Seattle | TML Agency",
  description: "TML offers expert ai influencer management services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management seattle", "ai influencer management agency seattle", "ai influencer management company seattle"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-seattle",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Seattle | TML Agency",
    description: "TML offers expert ai influencer management services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-seattle",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Seattle | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Seattle | TML Agency",
    description: "TML offers expert ai influencer management services in Seattle. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInSeattlePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
