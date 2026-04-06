import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Delhi",
  description: "TML offers expert AI Influencer Management services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management delhi", "ai influencer management agency delhi", "ai influencer management company delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-delhi",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Delhi",
    description: "TML offers expert AI Influencer Management services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Delhi",
    description: "TML offers expert AI Influencer Management services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
