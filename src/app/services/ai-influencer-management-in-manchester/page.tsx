import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Manchester | TML Agency",
  description: "TML offers expert ai influencer management services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management manchester", "ai influencer management agency manchester", "ai influencer management company manchester"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-manchester",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Manchester | TML Agency",
    description: "TML offers expert ai influencer management services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-manchester",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Manchester | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Manchester | TML Agency",
    description: "TML offers expert ai influencer management services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInManchesterPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
