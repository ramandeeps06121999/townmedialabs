import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "AI Influencer Management Agency in Abu Dhabi",
  description: "TML offers expert AI Influencer Management services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management abu dhabi", "ai influencer management agency abu dhabi", "ai influencer management company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-abu-dhabi",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Abu Dhabi",
    description: "TML offers expert AI Influencer Management services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Abu Dhabi",
    description: "TML offers expert AI Influencer Management services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function AiInfluencerManagementInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
