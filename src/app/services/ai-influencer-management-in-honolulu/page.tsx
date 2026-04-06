import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["honolulu"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Honolulu",
  description: "TML offers expert AI Influencer Management services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management honolulu", "ai influencer management agency honolulu", "ai influencer management company honolulu"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-honolulu",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Honolulu",
    description: "TML offers expert AI Influencer Management services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-honolulu",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Honolulu" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Honolulu",
    description: "TML offers expert AI Influencer Management services in Honolulu. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInHonoluluPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
