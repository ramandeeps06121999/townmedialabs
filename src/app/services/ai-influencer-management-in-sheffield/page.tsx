import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Sheffield | TML Agency",
  description: "TML offers expert ai influencer management services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management sheffield", "ai influencer management agency sheffield", "ai influencer management company sheffield"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-sheffield",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Sheffield | TML Agency",
    description: "TML offers expert ai influencer management services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-sheffield",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Sheffield | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Sheffield | TML Agency",
    description: "TML offers expert ai influencer management services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInSheffieldPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
