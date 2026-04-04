import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["jacksonville"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Jacksonville | TML Agency",
  description: "TML offers expert ai influencer management services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management jacksonville", "ai influencer management agency jacksonville", "ai influencer management company jacksonville"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-jacksonville",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Jacksonville | TML Agency",
    description: "TML offers expert ai influencer management services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-jacksonville",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Jacksonville | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Jacksonville | TML Agency",
    description: "TML offers expert ai influencer management services in Jacksonville. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInJacksonvillePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
