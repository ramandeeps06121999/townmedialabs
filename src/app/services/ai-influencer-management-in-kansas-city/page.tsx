import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kansas_city"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Kansas City",
  description: "TML offers expert AI Influencer Management services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management kansas city", "ai influencer management agency kansas city", "ai influencer management company kansas city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-kansas-city",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Kansas City",
    description: "TML offers expert AI Influencer Management services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-kansas-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Kansas City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Kansas City",
    description: "TML offers expert AI Influencer Management services in Kansas City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInKansasCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
