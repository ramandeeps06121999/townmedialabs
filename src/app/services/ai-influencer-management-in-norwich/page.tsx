import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["norwich"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Norwich",
  description: "TML offers expert AI Influencer Management services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management norwich", "ai influencer management agency norwich", "ai influencer management company norwich"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-norwich",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Norwich",
    description: "TML offers expert AI Influencer Management services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-norwich",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Norwich" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Norwich",
    description: "TML offers expert AI Influencer Management services in Norwich. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInNorwichPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
