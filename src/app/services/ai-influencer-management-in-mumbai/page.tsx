import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["mumbai"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Mumbai",
  description: "TML offers expert AI Influencer Management services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management mumbai", "ai influencer management agency mumbai", "ai influencer management company mumbai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-mumbai",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Mumbai",
    description: "TML offers expert AI Influencer Management services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-mumbai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Mumbai",
    description: "TML offers expert AI Influencer Management services in Mumbai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInMumbaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
