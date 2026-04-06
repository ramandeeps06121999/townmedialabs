import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["san_jose"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in San Jose",
  description: "TML offers expert AI Influencer Management services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management san jose", "ai influencer management agency san jose", "ai influencer management company san jose"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-san-jose",
  },
  openGraph: {
    title: "AI Influencer Management Agency in San Jose",
    description: "TML offers expert AI Influencer Management services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-san-jose",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in San Jose" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in San Jose",
    description: "TML offers expert AI Influencer Management services in San Jose. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSanJosePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
