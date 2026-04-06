import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ludhiana"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Ludhiana",
  description: "TML offers expert AI Influencer Management services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management ludhiana", "ai influencer management agency ludhiana", "ai influencer management company ludhiana"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-ludhiana",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Ludhiana",
    description: "TML offers expert AI Influencer Management services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-ludhiana",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Ludhiana" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Ludhiana",
    description: "TML offers expert AI Influencer Management services in Ludhiana. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInLudhianaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
