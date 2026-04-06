import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Punjab",
  description: "TML offers expert AI Influencer Management services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management punjab", "ai influencer management agency punjab", "ai influencer management company punjab"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-punjab",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Punjab",
    description: "TML offers expert AI Influencer Management services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-punjab",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Punjab" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Punjab",
    description: "TML offers expert AI Influencer Management services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInPunjabPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
