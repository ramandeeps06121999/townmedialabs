import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Fort Worth",
  description: "TML offers expert AI Influencer Management services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management fort worth", "ai influencer management agency fort worth", "ai influencer management company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-fort-worth",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Fort Worth",
    description: "TML offers expert AI Influencer Management services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Fort Worth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Fort Worth",
    description: "TML offers expert AI Influencer Management services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInFortWorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
