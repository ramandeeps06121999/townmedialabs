import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Sunshine Coast",
  description: "TML offers expert AI Influencer Management services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management sunshine coast", "ai influencer management agency sunshine coast", "ai influencer management company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-sunshine-coast",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Sunshine Coast",
    description: "TML offers expert AI Influencer Management services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Sunshine Coast",
    description: "TML offers expert AI Influencer Management services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInSunshineCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
