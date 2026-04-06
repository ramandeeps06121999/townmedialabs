import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["st_louis"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in St. Louis",
  description: "TML offers expert AI Influencer Management services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management st. louis", "ai influencer management agency st. louis", "ai influencer management company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-st-louis",
  },
  openGraph: {
    title: "AI Influencer Management Agency in St. Louis",
    description: "TML offers expert AI Influencer Management services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in St. Louis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in St. Louis",
    description: "TML offers expert AI Influencer Management services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInStLouisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
