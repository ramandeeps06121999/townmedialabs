import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dallas"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Dallas | TML Agency",
  description: "TML offers expert ai influencer management services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management dallas", "ai influencer management agency dallas", "ai influencer management company dallas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-dallas",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Dallas | TML Agency",
    description: "TML offers expert ai influencer management services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-dallas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Dallas | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Dallas | TML Agency",
    description: "TML offers expert ai influencer management services in Dallas. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInDallasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
