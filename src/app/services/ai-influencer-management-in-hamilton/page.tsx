import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Hamilton | TML Agency",
  description: "TML offers expert ai influencer management services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management hamilton", "ai influencer management agency hamilton", "ai influencer management hamilton nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-hamilton",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Hamilton | TML Agency",
    description: "TML offers expert ai influencer management services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Hamilton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Hamilton | TML Agency",
    description: "TML offers expert ai influencer management services in Hamilton, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInHamiltonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
