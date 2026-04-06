import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["southampton"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Southampton",
  description: "TML offers expert AI Influencer Management services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management southampton", "ai influencer management agency southampton", "ai influencer management company southampton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-southampton",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Southampton",
    description: "TML offers expert AI Influencer Management services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-southampton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Southampton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Southampton",
    description: "TML offers expert AI Influencer Management services in Southampton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInSouthamptonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
