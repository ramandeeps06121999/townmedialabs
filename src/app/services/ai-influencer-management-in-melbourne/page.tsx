import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["melbourne"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Melbourne | TML Agency",
  description: "TML offers expert ai influencer management services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management melbourne", "ai influencer management agency melbourne", "ai influencer management company melbourne"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-melbourne",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Melbourne | TML Agency",
    description: "TML offers expert ai influencer management services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-melbourne",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Melbourne | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Melbourne | TML Agency",
    description: "TML offers expert ai influencer management services in Melbourne. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInMelbournePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
