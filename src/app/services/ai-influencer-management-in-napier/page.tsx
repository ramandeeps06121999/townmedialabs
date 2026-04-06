import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["napier"];

export const metadata: Metadata = {
  title: "AI Influencer Management Agency in Napier",
  description: "TML offers expert AI Influencer Management services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["ai influencer management napier", "ai influencer management agency napier", "ai influencer management napier nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-napier",
  },
  openGraph: {
    title: "AI Influencer Management Agency in Napier",
    description: "TML offers expert AI Influencer Management services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-napier",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Napier" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "AI Influencer Management Agency in Napier",
    description: "TML offers expert AI Influencer Management services in Napier, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInNapierPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
