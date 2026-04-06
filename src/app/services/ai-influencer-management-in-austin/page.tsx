import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Austin",
  description: "TML offers expert AI Influencer Management services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management austin", "ai influencer management agency austin", "ai influencer management company austin"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-austin",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Austin",
    description: "TML offers expert AI Influencer Management services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-austin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Austin" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Austin",
    description: "TML offers expert AI Influencer Management services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInAustinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
