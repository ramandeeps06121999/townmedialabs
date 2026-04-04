import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Abu Dhabi | TML Agency",
  description: "TML offers expert ai influencer management services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management abu dhabi", "ai influencer management agency abu dhabi", "ai influencer management company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-abu-dhabi",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert ai influencer management services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Abu Dhabi | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Abu Dhabi | TML Agency",
    description: "TML offers expert ai influencer management services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInAbuDhabiPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
