import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["denver"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Denver",
  description: "TML offers expert AI Influencer Management services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management denver", "ai influencer management agency denver", "ai influencer management company denver"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-denver",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Denver",
    description: "TML offers expert AI Influencer Management services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-denver",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Denver" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Denver",
    description: "TML offers expert AI Influencer Management services in Denver. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInDenverPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
