import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Baltimore",
  description: "TML offers expert AI Influencer Management services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management baltimore", "ai influencer management agency baltimore", "ai influencer management company baltimore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-baltimore",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Baltimore",
    description: "TML offers expert AI Influencer Management services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-baltimore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Baltimore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Baltimore",
    description: "TML offers expert AI Influencer Management services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInBaltimorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
