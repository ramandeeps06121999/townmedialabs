import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["gold_coast"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Gold Coast | TML Agency",
  description: "TML offers expert ai influencer management services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management gold coast", "ai influencer management agency gold coast", "ai influencer management company gold coast"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-gold-coast",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Gold Coast | TML Agency",
    description: "TML offers expert ai influencer management services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-gold-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Gold Coast | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Gold Coast | TML Agency",
    description: "TML offers expert ai influencer management services in Gold Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInGoldCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
