import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["new_york"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in New York",
  description: "TML offers expert AI Influencer Management services in New York. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management new york", "ai influencer management agency new york", "ai influencer management company new york"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-new-york",
  },
  openGraph: {
    title: "AI Influencer Management Agency in New York",
    description: "TML offers expert AI Influencer Management services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-new-york",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in New York" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in New York",
    description: "TML offers expert AI Influencer Management services in New York. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInNewYorkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
