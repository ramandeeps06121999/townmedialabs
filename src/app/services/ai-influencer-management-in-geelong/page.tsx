import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["geelong"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Geelong | TML Agency",
  description: "TML offers expert ai influencer management services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management geelong", "ai influencer management agency geelong", "ai influencer management company geelong"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-geelong",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Geelong | TML Agency",
    description: "TML offers expert ai influencer management services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-geelong",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Geelong | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Geelong | TML Agency",
    description: "TML offers expert ai influencer management services in Geelong. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInGeelongPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
