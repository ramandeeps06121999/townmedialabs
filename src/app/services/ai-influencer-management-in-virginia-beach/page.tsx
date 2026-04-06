import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["virginia_beach"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Virginia Beach",
  description: "TML offers expert AI Influencer Management services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management virginia beach", "ai influencer management agency virginia beach", "ai influencer management company virginia beach"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-virginia-beach",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Virginia Beach",
    description: "TML offers expert AI Influencer Management services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-virginia-beach",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Virginia Beach" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Virginia Beach",
    description: "TML offers expert AI Influencer Management services in Virginia Beach. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInVirginiaBeachPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
