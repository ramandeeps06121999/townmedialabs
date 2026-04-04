import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["wellington"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Wellington | TML Agency",
  description: "TML offers expert ai influencer management services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management wellington", "ai influencer management agency wellington", "ai influencer management wellington nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-wellington",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Wellington | TML Agency",
    description: "TML offers expert ai influencer management services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-wellington",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Wellington | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Wellington | TML Agency",
    description: "TML offers expert ai influencer management services in Wellington, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInWellingtonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
