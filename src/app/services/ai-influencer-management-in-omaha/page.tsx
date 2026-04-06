import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Omaha",
  description: "TML offers expert AI Influencer Management services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management omaha", "ai influencer management agency omaha", "ai influencer management company omaha"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-omaha",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Omaha",
    description: "TML offers expert AI Influencer Management services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-omaha",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Omaha" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Omaha",
    description: "TML offers expert AI Influencer Management services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInOmahaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
