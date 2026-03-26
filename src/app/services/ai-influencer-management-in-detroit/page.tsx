import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Best AI Influencer Management Agency in Detroit | TML Agency",
  description: "TML offers expert ai influencer management services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["ai influencer management detroit", "ai influencer management agency detroit", "ai influencer management company detroit"],
  alternates: {
    canonical: "https://townmedialabs.com/services/ai-influencer-management-in-detroit",
  },
  openGraph: {
    title: "Best AI Influencer Management Agency in Detroit | TML Agency",
    description: "TML offers expert ai influencer management services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/ai-influencer-management-in-detroit",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best AI Influencer Management Agency in Detroit | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best AI Influencer Management Agency in Detroit | TML Agency",
    description: "TML offers expert ai influencer management services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function AiInfluencerManagementInDetroitPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="ai-influencer-management"
      serviceName="AI Influencer Management"
    />
  );
}
