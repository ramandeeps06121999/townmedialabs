import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Launceston",
  description: "TML offers expert AI Influencer Management services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management launceston", "ai influencer management agency launceston", "ai influencer management company launceston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-launceston",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Launceston",
    description: "TML offers expert AI Influencer Management services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-launceston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Launceston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Launceston",
    description: "TML offers expert AI Influencer Management services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInLauncestonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
