import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["tauranga"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Tauranga | TML Agency",
  description: "TML offers expert ai influencer management services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management tauranga", "ai influencer management agency tauranga", "ai influencer management tauranga nz"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/ai-influencer-management-in-tauranga",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Tauranga | TML Agency",
    description: "TML offers expert ai influencer management services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/ai-influencer-management-in-tauranga",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Tauranga | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Tauranga | TML Agency",
    description: "TML offers expert ai influencer management services in Tauranga, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInTaurangaPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
