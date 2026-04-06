import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Adelaide",
  description: "TML offers expert AI Influencer Management services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management adelaide", "ai influencer management agency adelaide", "ai influencer management company adelaide"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-adelaide",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Adelaide",
    description: "TML offers expert AI Influencer Management services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-adelaide",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Adelaide" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Adelaide",
    description: "TML offers expert AI Influencer Management services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInAdelaidePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
