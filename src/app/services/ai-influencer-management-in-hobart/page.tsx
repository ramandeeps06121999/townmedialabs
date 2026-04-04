import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Hobart | TML Agency",
  description: "TML offers expert ai influencer management services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management hobart", "ai influencer management agency hobart", "ai influencer management company hobart"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-hobart",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Hobart | TML Agency",
    description: "TML offers expert ai influencer management services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-hobart",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Hobart | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Hobart | TML Agency",
    description: "TML offers expert ai influencer management services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInHobartPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
