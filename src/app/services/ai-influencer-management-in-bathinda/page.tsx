import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Bathinda",
  description: "TML offers expert AI Influencer Management services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management bathinda", "ai influencer management agency bathinda", "ai influencer management company bathinda"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-bathinda",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Bathinda",
    description: "TML offers expert AI Influencer Management services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-bathinda",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Bathinda" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Bathinda",
    description: "TML offers expert AI Influencer Management services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInBathindaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
