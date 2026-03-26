import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["zirakpur"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Zirakpur | TML Agency",
  description: "TML offers expert ai influencer management services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management zirakpur", "ai influencer management agency zirakpur", "ai influencer management company zirakpur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-zirakpur",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Zirakpur | TML Agency",
    description: "TML offers expert ai influencer management services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-zirakpur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Zirakpur | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Zirakpur | TML Agency",
    description: "TML offers expert ai influencer management services in Zirakpur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInZirakpurPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
