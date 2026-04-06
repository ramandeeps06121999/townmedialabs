import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["stoke_on_trent"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Stoke-on-Trent",
  description: "TML offers expert AI Influencer Management services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management stoke-on-trent", "ai influencer management agency stoke-on-trent", "ai influencer management company stoke-on-trent"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-stoke-on-trent",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Stoke-on-Trent",
    description: "TML offers expert AI Influencer Management services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-stoke-on-trent",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Stoke-on-Trent" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Stoke-on-Trent",
    description: "TML offers expert AI Influencer Management services in Stoke-on-Trent. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInStokeOnTrentPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
