import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coventry"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Coventry | TML Agency",
  description: "TML offers expert ai influencer management services in Coventry. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management coventry", "ai influencer management agency coventry", "ai influencer management company coventry"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-coventry",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Coventry | TML Agency",
    description: "TML offers expert ai influencer management services in Coventry. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-coventry",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Coventry | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Coventry | TML Agency",
    description: "TML offers expert ai influencer management services in Coventry. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInCoventryPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
